import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {MixpanelInstance} from '../../../../../../shared/UsageAnalyticsUtils';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {updateEndo101Week4ProgressAction} from '../../../../../../redux/actions/learnActions';
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
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;

    this.state = {
      correctAnswer: false,
      wrongAnswer: false,
    };
  }

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  render() {
    const {navigation, route, endoCourse} = this.props;

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
                          Pelvic examination
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          During the palpation, doctors assess the mobility of
                          your uterus and look for areas of tenderness, scar
                          tissues around the uterus, and cysts or other masses
                          in your pelvis. Studies indicate that identifying
                          endometriosis during a pelvic examination might be
                          more effective if you are on your period. Considering
                          schedule your appointment when you expect to be on
                          your period.4
                          {'\u000A'}
                          {'\u000A'}
                          Some patients might be diagnosed with suspected
                          endometriosis based on their symptoms and a pelvic
                          exam. Other patients with endometriosis will have an
                          inconclusive pelvic exam.
                          {'\u000A'}
                          {'\u000A'}A pelvic examination might also include a
                          visual examination of your vagina and cervix. Your
                          doctor will use a speculum, a plastic or metal tool
                          inserted into your vagina and opened. Occasionally,
                          endometriosis can be seen by looking through a
                          speculum if there are lesions or anything abnormal on
                          the cervix or vagina. Your doctor might also take a
                          swab of the fluid around your cervix and send the
                          sample to the lab for analysis.
                          {'\u000A'}
                          {'\u000A'}
                          It might feel discouraging if your pelvic examination
                          is normal, but your doctor should not stop there.
                          Instead, they should continue to investigate the cause
                          of your pain through imaging and lab tests. If you
                          feel like your doctor is not taking your pain
                          seriously, going to a doctor who specializes in
                          endometriosis can help.
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
                              this.mixpanel.track('endo101_course_progress', {
                                week_num: 4,
                                module_num: 3,
                              });
                              Promise.resolve()
                                .then(() => {
                                  return this.props.dispatch(
                                    updateEndo101Week4ProgressAction(3),
                                  );
                                })
                                .then(() =>
                                  navigation.navigate('Endo101Week4Screen'),
                                );
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
