import React from 'react';
import {ScrollView, StyleSheet, Dimensions, Image, View} from 'react-native';
import {Text, Slider, LinearProgress} from 'react-native-elements';
import {tabs, styles, theme, Images} from '../../../../constants';
import {
  Accordion,
  Button,
  Select,
  Icon,
  Input,
  Header,
  Switch,
  Footer,
} from '../../../../components';
import {StatusBar} from 'expo-status-bar';
// import Images from "../../../../constants/Images";
import {getWikiPage} from '../../../../constants/learn/condWikiIndex';

import {auth} from '../../../../shared/firebaseUtils';

import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../../shared/ScreenTemplateWrapper';

import {getOS} from '../../../../shared/PlatformUtils';
//swap getOS() for getOS()
const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

//  FIXMETUNA:  this might cause problems ignoring this warning, scrolling or windowing
//  errors possible, watch out
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
]);

class LearnCoursePlaceholderScreen extends React.Component {
  state = {
    correctAnswer: false,
    wrongAnswer: false,
  };

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  render() {
    const {navigation, route} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={0}
        customImageName={Images.ui.BackgroundGradient2}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              marginHorizontal: theme.SIZES.BASE,
              elevation: 2,
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
                  style={{}}>
                  <View
                    style={{
                      backgroundColor: theme.COLORS.WHITE,
                      borderRadius: theme.SIZES.HEADERRADIUS,
                      elevation: 2,
                      marginBottom: theme.SIZES.BASE,
                      width: width - theme.SIZES.BASE * 2,
                    }}>
                    <View
                      style={{
                        paddingHorizontal: theme.SIZES.BASE,
                      }}>
                      <View
                        style={{
                          paddingHorizontal: theme.SIZES.BASE * 2,
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingVertical: theme.SIZES.BASE * 2,
                        }}>
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: '600',
                            textAlign: 'center',
                          }}>
                          What is Endometriosis?
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          Endometriosis happens when tissue similar to the
                          lining of the uterus (womb) grows outside of the
                          uterus. It may affect more than 11% of American women
                          between 15 and 44.{'\u000A'}
                          {'\u000A'}
                          Endometriosis, sometimes called "endo," is a common
                          health problem in women. It gets its name from the
                          word endometrium, the tissue that normally lines the
                          uterus or womb. Endometriosis happens when tissue
                          similar to the lining of the uterus grows outside of
                          your uterus and on other areas in your body where it
                          doesn't belong.{'\u000A'}
                          {'\u000A'}
                          Most often, endometriosis is found on the:{'\u000A'}
                          {'\u000A'}● Ovaries{'\u000A'}● Fallopian tubes
                          {'\u000A'}● Tissues that hold the uterus in place
                          {'\u000A'}● Outer surface of the uterus{'\u000A'}
                          {'\u000A'}
                          Other sites for growths can include the vagina,
                          cervix, vulva, bowel, bladder, or rectum. Rarely,
                          endometriosis appears in other parts of the body, such
                          as the lungs, brain, and skin.
                        </Text>

                        <View
                          style={{
                            paddingHorizontal: theme.SIZES.BASE * 2,
                            alignItems: 'center',
                            paddingVertical: theme.SIZES.BASE * 2,
                          }}>
                          <Button
                            testID="nextButton"
                            style={{
                              ...styles.button,
                              width: width - theme.SIZES.BASE * 4,
                            }}
                            titleStyle={{
                              color: theme.COLORS.WHITE,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title="Next"
                            onPress={() => {
                              navigation.navigate('Endo101Week1Module1Page2');
                            }}></Button>
                        </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

export default LearnCoursePlaceholderScreen;
