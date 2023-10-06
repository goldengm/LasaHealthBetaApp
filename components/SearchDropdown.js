import React from 'react';
import {withNavigation} from '@react-navigation/compat';
import {StyleSheet, Dimensions, Animated, ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from './Icon';
import Input from './Input';
import TouchableOpacity from './TouchableOpacity';
import TouchableWithoutFeedback from './TouchableWithoutFeedback';

import {theme} from '../constants';
const {width} = Dimensions.get('screen');

class SearchDropdown extends React.Component {
  state = {
    results: [],
    search: '',
    active: false,
  };

  animatedValue = new Animated.Value(0);

  animate() {
    this.animatedValue.setValue(0);

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  handleSearchChange = (search, topicsList) => {
    const results = topicsList.filter(
      item => search && item.toLowerCase().includes(search),
    );
    this.setState({results, search});
    this.animate();
  };

  renderSearch = topicsList => {
    const {search, customInputContainerStyle, customContainerStyle} =
      this.state;
    const iconSearch = search ? (
      <TouchableWithoutFeedback onPress={() => this.setState({search: ''})}>
        <Icon
          size={16}
          fill={theme.COLORS.TEXT2}
          name="Svg046Search"
          family="amielineal"
        />
      </TouchableWithoutFeedback>
    ) : (
      <Icon
        size={16}
        fill={theme.COLORS.TEXT2}
        name="Svg046Search"
        family="amielineal"
      />
    );

    const customInputContainerStyles = {
      ...customInputContainerStyle,
      marginVertical: 0,
      paddingVertical: 0,
      paddingTop: 20,
      height: 20,
      flex: 1,
      fontFamily: theme.FONTS.TEXT,
      borderBottomWidth: 0,
    };
    const customContainerStyles = {
      ...customContainerStyle,
      backgroundColor: theme.COLORS.BACKGROUND2,
      borderRadius: theme.SIZES.BASE,
      marginVertical: theme.SIZES.BASE * 0.5,
    };

    return (
      <Input
        placeholderTextColor={theme.COLORS.LIGHT_SECONDARY}
        autoFocus={false}
        autoCorrect={false}
        autoCapitalize="none"
        defaultValue={search}
        selectionColor={theme.COLORS.DEFAULT}
        placeholder="Search..."
        onFocus={() => this.setState({active: true})}
        onBlur={() => this.setState({active: false})}
        onChangeText={searchStr =>
          this.handleSearchChange(searchStr, topicsList)
        }
        inputContainerStyle={customInputContainerStyles}
        containerStyle={customContainerStyles}
        iconContent={
          <Icon
            width={24}
            height={24}
            fill={theme.COLORS.TEXT3}
            name="Svg040Search"
            family="amielineal"
          />
        }
      />
    );
  };

  renderNotFound = () => {
    return (
      <View style={styles.notfound}>
        <Text
          style={{color: theme.COLORS.DEFAULT, fontFamily: theme.FONTS.TEXT}}>
          We didn’t find "<Text bold>{this.state.search}</Text>".
        </Text>

        <Text
          style={{
            marginTop: theme.SIZES.BASE,
            color: theme.COLORS.DEFAULT,
            fontFamily: theme.FONTS.TEXT,
          }}>
          You can see more topics from other categories below.
        </Text>
      </View>
    );
  };

  renderResults = navigation => {
    const {results, search} = this.state;

    if (results.length === 0 && search) {
      return <View style={{width: width - 40}}>{this.renderNotFound()}</View>;
    }

    return (
      <View style={{paddingVerticle: 0}}>
        {results.map(result => this.renderResult(result, navigation))}
      </View>
    );
  };

  renderResult = (result, navigation) => {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.8, 1],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          width: width - theme.SIZES.BASE * 2,
          opacity,
        }}
        key={`result-${result}`}>
        <TouchableOpacity
          style={{
            marginVertical: theme.SIZES.BASE * 0.5,
            marginHorizontal: theme.SIZES.BASE,
          }}
          onPress={() =>
            navigation.navigate('LearnCondition', {
              conditionName: result,
            })
          }>
          <Text>{result}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  render() {
    const {navigation, topicsList} = this.props;

    return (
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View
          style={{
            width: '90%',
            alignContent: 'center',
            borderRadius: theme.SIZES.BASE,
          }}>
          {this.renderSearch(topicsList)}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderResults(navigation)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
    fontFamily: theme.FONTS.TEXT,
  },
  image: {},
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    fontFamily: theme.FONTS.TEXT,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    fontFamily: theme.FONTS.TEXT,
  },
  fullImage: {
    height: 215,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
    fontFamily: theme.FONTS.TEXT,
  },
});

export default withNavigation(SearchDropdown);
