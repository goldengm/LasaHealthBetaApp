import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {MixpanelInstance} from '../../../../../../shared/UsageAnalyticsUtils';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {updateEndo101Week6ProgressAction} from '../../../../../../redux/actions/learnActions';
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
                          Prescription Pain Management
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          If over-the-counter options are not sufficient for
                          managing your pain, you can also ask your doctor for a
                          prescription. Your doctor might prescribe you an NSAID
                          pain reliever, but at a higher dosage than is
                          available over the counter.
                          {'\u000A'}
                          {'\u000A'}
                          Or your doctor might recommend a few other options,
                          including:
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
                            Opioids. Opioids are strong pain relievers that many
                            endometriosis patients take to manage pain. However,
                            they are also extremely addictive and can be
                            dangerous to take for extended periods of time. They
                            are most commonly used for short periods of time,
                            like after surgery or while you are at the hospital.
                            {'\u000A'}
                            {'\u000A'}
                            There are several types of opioids, including
                            morphine, oxycodone, and hydrocodone. Side effects
                            may include vomiting, nausea, drowsiness, dizziness,
                            constipation, dry mouth, and itchy skin.
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
                            Muscle Relaxants. A large portion of your monthly
                            pain may be from cramps, which are your pelvic
                            muscles contracting. Muscle relaxants can help your
                            muscles relax and reduce the pain you may feel from
                            cramping. Some common muscle relaxants are Baclofen,
                            Tizanidine, and Cyclobenzaprine, among others. Some
                            muscle relaxants might be available
                            over-the-counter, but it is still a good idea to
                            talk to your doctor first. Side effects can include
                            dizziness, drowsiness, headache, and nausea.
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
                            Anticonvulsants. Anticonvulsants are medications
                            that are primarily used to treat seizures and can
                            reduce signals that are sent to the brain. The
                            reduction of signals to the brain can help reduce
                            the pain you feel, primarily nerve pain. They can
                            also help with convulsing muscles, which often cause
                            cramping pain. If a lot of your pain comes from
                            cramps or nerve pain, anticonvulsants might be a
                            good option for you. Some examples of
                            anticonvulsants are Neurontin, Lyrica, and Topamax.
                            Depending on the specific medication, side effects
                            can include drowsiness, convulsions, depression,
                            respiratory distress, risk of allergic reaction,
                            difficulty breathing, fatigue, dry mouth, headache,
                            nausea, weight loss, abdominal pain, and mood
                            disturbance.
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
                            Antispasmodic. Antispasmodic medication can help
                            calm spasming and hyperactive muscles. While on your
                            period, your pelvic muscles might spasm, causing
                            cramp-like pain. Antispasmodic medications can help
                            prevent pelvic muscles from spasming and reduce
                            cramping pain. Depending on the specific medication,
                            side effects might include dry mouth, dizziness,
                            drowsiness, blurred vision.
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
                              this.mixpanel.track('endo101_course_progress', {
                                week_num: 6,
                                module_num: 4,
                              });
                              Promise.resolve()
                                .then(() => {
                                  return this.props.dispatch(
                                    updateEndo101Week6ProgressAction(4),
                                  );
                                })
                                .then(() =>
                                  navigation.navigate('Endo101Week6Screen'),
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
