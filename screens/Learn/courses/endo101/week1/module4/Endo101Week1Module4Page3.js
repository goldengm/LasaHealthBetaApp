import React from 'react';
import {ScrollView, Dimensions, Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../../../../shared/ScreenTemplateWrapper';

import {getOS} from '../../../../../../shared/PlatformUtils';
//swap getOS() for getOS()
const iosPlatform = () => getOS() == 'ios';

const {width} = Dimensions.get('screen');

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
                      marginTop: theme.SIZES.BASE * 0.8,
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
                          Managing Endometriosis
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          Unfortunately, there is no way to cure or prevent
                          endometriosis. However, there are several treatment
                          options that can help you manage your symptoms and
                          start feeling like yourself again.
                          {'\u000A'}
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Surgical removal of endometriosis lesions through
                            laparoscopic surgery
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Hormonal medication to reduce pain and slow growth
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Medications to manage pain and symptoms
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Pelvic floor physical therapy
                          </Text>
                        </View>

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}
                          Endometriosis is an estrogen-dependent disease. This
                          means that hormone estrogen increases inflammation,
                          growth, and symptoms of endometriosis. Something that
                          you can start doing now to reduce symptoms is lower
                          the levels of the estrogen in your body. Estrogen is a
                          hormone that thickens the lining of your uterus during
                          your menstrual cycle. We are going to talk more in
                          detail about estrogen and other important hormones
                          next week. But here are some quick tips to keep lower
                          estrogen levels in your body:
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            marginVertical: theme.SIZES.BASE * 0.5,
                            width: width - theme.SIZES.BASE * 10,
                          }}>
                          <Image
                            style={{
                              ...styles.chatAvatarIconLarge,
                              marginHorizontal: theme.SIZES.BASE * 0.5,
                            }}
                            source={Images.learn.endo101Course.medicineIcon1}
                          />
                          <Text style={{fontSize: theme.SIZES.B1}}>
                            Medication. Talk to your doctor about hormonal
                            medications, such as pills, patches, or rings to
                            lower estrogen or increase progesterone levels.
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            marginVertical: theme.SIZES.BASE * 0.5,
                            width: width - theme.SIZES.BASE * 10,
                          }}>
                          <Image
                            style={{
                              ...styles.chatAvatarIconLarge,
                              marginHorizontal: theme.SIZES.BASE * 0.5,
                            }}
                            source={Images.learn.endo101Course.yogaIcon1}
                          />
                          <Text style={{fontSize: theme.SIZES.B1}}>
                            Exercise. Regular exercise helps decrease the amount
                            of estrogen circulating through the body.
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            marginVertical: theme.SIZES.BASE * 0.5,
                            width: width - theme.SIZES.BASE * 10,
                          }}>
                          <Image
                            style={{
                              ...styles.chatAvatarIconLarge,
                              marginHorizontal: theme.SIZES.BASE * 0.5,
                            }}
                            source={Images.learn.endo101Course.couchIcon1}
                          />
                          <Text style={{fontSize: theme.SIZES.B1}}>
                            Limit Alcohol. Alcohol raises estrogen levels. No
                            more than one drink per day is recommended for
                            patients who choose to drink alcohol.
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            marginVertical: theme.SIZES.BASE * 0.5,
                            width: width - theme.SIZES.BASE * 10,
                          }}>
                          <Image
                            style={{
                              ...styles.chatAvatarIconLarge,
                              marginHorizontal: theme.SIZES.BASE * 0.5,
                            }}
                            source={Images.learn.endo101Course.teaIcon1}
                          />
                          <Text style={{fontSize: theme.SIZES.B1}}>
                            Avoid Caffeine. Studies show that drinking more than
                            one caffeinated drink a day, especially sodas and
                            green tea, can raise estrogen levels.
                          </Text>
                        </View>

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
                              navigation.navigate('Endo101Week1Module4Page4');
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

const mapStateToProps = (state, props) => {
  return {
    endoCourse: state.learn.endo101Course,
  };
};
export default connect(mapStateToProps)(LearnCoursePlaceholderScreen);
