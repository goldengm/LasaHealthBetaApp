import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text, ListItem} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';

import {theme, styles, Images} from '../../constants';
import {Switch, Footer, RoundedTopContainer} from '../../components';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

class NotificationSettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'switch-1': true,
      'switch-2': false,
      'switch-3': false,
    };
  }

  toggleSwitch = switchId => this.setState({[switchId]: !this.state[switchId]});

  getIconColor = index => {
    if (index % 3 == 0) {
      return theme.COLORS.PRIMARY4;
    } else if (index % 3 == 1) {
      return theme.COLORS.SECONDARY3;
    } else {
      return theme.COLORS.TERTIARY2;
    }
  };

  renderSettings = navigation => {
    return (
      <RoundedTopContainer
        style={{
          ...styles.group,
          minHeight: height - theme.SIZES.BASE * 8.6,
          marginTop: theme.SIZES.BASE * 0.8,
        }}>
        <View
          style={{
            marginHorizontal: theme.SIZES.BASE,
            marginVertical: theme.SIZES.BASE * 0.5,
          }}>
          <View style={{paddingHorizontal: theme.SIZES.BASE}}>
            <View
              style={{
                marginBottom: theme.SIZES.BASE,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text h4>Appwide notifications</Text>
              <Switch
                value={this.state['switch-1']}
                onValueChange={() => this.toggleSwitch('switch-1')}
                trackColor={{
                  false: theme.COLORS.SWITCH_ON,
                  true: theme.COLORS.PRIMARY2,
                }}
              />
            </View>
            <View
              style={{
                marginBottom: theme.SIZES.BASE,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text h4>Community response notifications</Text>
              <Switch
                value={this.state['switch-2']}
                onValueChange={() => this.toggleSwitch('switch-2')}
                trackColor={{
                  false: theme.COLORS.SWITCH_ON,
                  true: theme.COLORS.PRIMARY2,
                }}
              />
            </View>
            <View
              style={{
                marginBottom: theme.SIZES.BASE,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text h4>Telehealth notifications</Text>
              <Switch
                value={this.state['switch-3']}
                onValueChange={() => this.toggleSwitch('switch-3')}
                trackColor={{
                  false: theme.COLORS.SWITCH_ON,
                  true: theme.COLORS.PRIMARY2,
                }}
              />
            </View>
          </View>
        </View>
      </RoundedTopContainer>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customImageName={Images.ui.BackgroundGradient1}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <StatusBar
              style={{
                backgroundColor: theme.COLORS.TRANSPARENT,
                fontFamily: theme.FONTS.TEXT,
              }}
              backgroundColor={theme.COLORS.TRANSPARENT}
            />

            <KeyboardAvoidingView
              style={{
                flex: 1,
              }}
              behavior="padding"
              enabled={iosPlatform()}>
              <ScrollView
                testID="pageScrollview"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{width}}>
                {this.renderSettings(navigation)}
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Settings" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    connect: state.connect,
    localState: state,
  };
};
export default connect(mapStateToProps)(NotificationSettingsScreen);
