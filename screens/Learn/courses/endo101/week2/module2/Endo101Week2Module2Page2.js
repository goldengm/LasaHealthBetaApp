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
                          Female Reproductive Anatomy
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          First, we will take a look at the reproductive anatomy
                          from the front view. Here you can see some of the
                          primary reproductive organs that are located in your
                          lower abdomen or pelvic cavity.
                        </Text>

                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.femaleReproSystem1}
                        />

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
                            Vagina - Often, the vagina is mistakenly used to
                            refer to the entire genital area; however, it is
                            actually the canal that leads from the cervix to the
                            outside of the body. The vagina is where menstrual
                            tissue exits the body during menstrual. In pregnant
                            people, it is where a baby exits the body.{' '}
                            {'\u000A'}
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
                            Cervix - The lowest part of the uterus is called the
                            cervix and connects the rest of the uterus to the
                            vagina. It protects bacteria from entering the
                            uterus and allows menstruation to leave the uterus.
                            When a pregnant person gives birth, the cervix
                            expands to allow the baby to leave the body through
                            the vagina. {'\u000A'}
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
                            Uterus - The uterus is a pear-shaped hollow organ
                            made up of muscular tissue and connects to the
                            cervix and the fallopian tubes. If someone becomes
                            pregnant, the uterus is where the fetus will
                            develop. Normally, the uterus is about the size of
                            your fist, but it is very stretchy, allowing the
                            baby to grow. We will talk about the role of the
                            uterus in menstruation in the next section.{' '}
                            {'\u000A'}
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
                            Layers of the uterus - The uterus consists of three
                            layers: the endometrium (the innermost layer),
                            myometrium (the middle layer), and perimetrium (the
                            outer layer). Throughout the menstrual cycle, the
                            endometrium will be built up and then shed off
                            during menstruation.{'\u000A'}
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
                            Fallopian tubes - The fallopian tubes connect the
                            uterus to the ovaries. When your body releases an
                            egg, it travels through the fallopian tube to the
                            uterus.
                            {'\u000A'}
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
                            Ovaries - Ovaries are small oval-shaped organs that
                            produce eggs and hormones like estrogen and
                            progesterone. A person with female anatomy is born
                            with about one million eggs which are stored in the
                            ovaries.2 One ovary sits on each side of the uterus,
                            and the ovaries alternate releasing an egg each
                            menstrual cycle.
                          </Text>
                        </View>

                        {/* 
                        <Text style={{ fontSize: theme.SIZES.B1 }}>
                          {"\u000A"}● Vagina - While the vagina is commonly used
                          to refer to the entire female genital area, it’s
                          actually the canal that leads from the uterus to the
                          outside of the body. The vagina is the passageway for
                          menstrual blood or a baby to exit the body and sperm
                          to enter it.
                          {"\u000A"}
                          {"\u000A"}● Uterus - The uterus is a pear-shaped
                          hollow organ made up of muscular tissue and connects
                          to the cervix. When someone becomes pregnant, the
                          uterus is where the fetus will develop. Normally, the
                          uterus is about the size of your fist, but it is very
                          stretchy, allowing the baby to grow.
                          {"\u000A"}
                          {"\u000A"}● Ovaries - Ovaries are small oval-shaped
                          organs that produce eggs and hormones like estrogen
                          and progesterone. A person with female anatomy is born
                          with about one million eggs which are stored in the
                          ovaries.2 One ovary sits on each side of the uterus,
                          and the ovaries alternative releasing an egg each
                          menstrual cycle.
                          {"\u000A"}
                          {"\u000A"}● Fallopian tubes - The fallopian tubes run
                          from the uterus to the ovaries. When your body
                          releases an egg, it travels through the fallopian tube
                          to get to the uterus.
                          {"\u000A"}
                          {"\u000A"}● Cervix - The lowest part of the uterus is
                          called the cervix and connects the rest of the uterus
                          to the vagina. It protects bacteria from entering the
                          uterus and allows menstruation to leave the uterus.
                          {"\u000A"}
                          {"\u000A"}● Layers of the uterus - The uterus consists
                          of three layers: the endometrium, myometrium, and
                          perimetrium. Throughout the menstrual cycle, the
                          endometrium will be built up and then shed off during
                          menstruation. This layer of tissue is the same kind
                          that makes up endometriosis.
                        </Text> */}

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
                              navigation.navigate('Endo101Week2Module2Page3');
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
