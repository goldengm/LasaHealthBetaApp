import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {theme, styles, Images} from '../../constants';
import {CheckBox, Footer, RoundedTopContainer} from '../../components';
import {KeyboardAvoidingView} from 'react-native';

import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import Checkmark1 from '../../assets/ui/general/Checkmark1.svg';
import DisabledCheckmark1 from '../../assets/ui/general/DisabledCheckmark1.svg';

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

const todoExclusionList = ['3'];

class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderTMP: false,
    };
  }

  getIconColor = index => {
    if (index % 3 == 0) {
      return theme.COLORS.PRIMARY4;
    } else if (index % 3 == 1) {
      return theme.COLORS.SECONDARY3;
    } else {
      return theme.COLORS.TERTIARY2;
    }
  };

  renderTodo = () => {
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
          <Text></Text>

          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginBottom: theme.SIZES.BASE,
              }}>
              Todo's
            </Text>
          </View>

          <Text
            style={{
              fontFamily: theme.FONTS.TEXT,
              fontSize: theme.SIZES.H6,
              marginTop: theme.SIZES.BASE,
              marginBottom: theme.SIZES.BASE,
              textAlign: 'center',
            }}>
            Complete the current todo's on your home page in order to unlock the
            next 3
          </Text>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginTop: theme.SIZES.BASE,
                marginBottom: theme.SIZES.BASE,
              }}>
              Todo
            </Text>
          </View>
          {Object.entries(this.props.userProfile.allTodo).map((val, index) => {
            if (
              val[1] &&
              val[1]['status'] < 2 &&
              !todoExclusionList.includes(val[0])
            ) {
              return (
                <View
                  key={index}
                  style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                  <CheckBox
                    checkedColor={theme.COLORS.PRIMARY2}
                    uncheckedColor={theme.COLORS.BACKGROUND3}
                    customTitle={val[1].name}
                    customSubtitle={val[1].rewardText}
                    checked={val[1].status > 1}
                    containerStyle={{
                      marginVertical: 0,
                      paddingVertical: 0,
                      left: -10,
                    }}
                    textStyle={{
                      color: theme.COLORS.DARK_SECONDARY,
                      fontFamily: theme.FONTS.TEXT,
                      fontWeight: '100',
                    }}
                    rightIcon={true}
                    checkedIcon={<Checkmark1 />}
                    uncheckedIcon={<DisabledCheckmark1 />}
                  />
                </View>
              );
            } else {
              return null;
            }
          })}

          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginTop: theme.SIZES.BASE * 1,
                marginBottom: theme.SIZES.BASE,
              }}>
              Completed
            </Text>
          </View>
          {Object.entries(this.props.userProfile.allTodo).map((val, index) => {
            if (val[1] && val[1]['status'] > 1) {
              return (
                <View
                  key={index}
                  style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                  <CheckBox
                    checkedColor={theme.COLORS.PRIMARY2}
                    uncheckedColor={theme.COLORS.BACKGROUND3}
                    customTitle={val[1].name}
                    customSubtitle={val[1].rewardText}
                    checked={val[1].status > 1}
                    containerStyle={{
                      marginVertical: 0,
                      paddingVertical: 0,
                      left: -10,
                    }}
                    textStyle={{
                      color: theme.COLORS.DARK_SECONDARY,
                      fontFamily: theme.FONTS.TEXT,
                      fontWeight: '100',
                    }}
                    rightIcon={true}
                    checkedIcon={<Checkmark1 />}
                    uncheckedIcon={<DisabledCheckmark1 />}
                  />
                </View>
              );
            } else {
              return null;
            }
          })}
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
                {this.renderTodo(navigation)}
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
  };
};
export default connect(mapStateToProps)(TodoScreen);
