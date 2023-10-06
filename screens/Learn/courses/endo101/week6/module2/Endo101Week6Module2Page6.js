import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {MixpanelInstance} from '../../../../../../shared/UsageAnalyticsUtils';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {generateDataTable} from '../../../../../../shared/TextUtils';
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
                          Comparison Table
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          There are a lot of options available if you choose to
                          take hormonal medication to help with endometriosis
                          symptoms. Here is a handy chart to help you figure out
                          what is best for you based on 1) whether you want
                          combination or progestin-only hormonal therapy, 2)
                          your preferred mode of administration, and 3) the
                          frequency of administration.
                          {'\u000A'}
                        </Text>

                        {generateDataTable([
                          [
                            '',
                            'Frequency',
                            'Combination Hormonal Therapy',
                            'Progestin-Only Hormonal Therapy',
                          ],
                          [
                            'Oral Pill',
                            'Once per day',
                            'Yes',
                            'Yes, including Norethindrone (Errin®, Utovlan®), Norethindrone acetate (Aygestin®), Medroxyprogesterone acetate (Provera®), Etonogestrel (Cerazette®)',
                          ],
                          [
                            'Vaginal Ring',
                            'Once every 3-4 weeks',
                            'Yes',
                            'No*',
                          ],
                          [
                            'Subdermal Implant',
                            'Lasts 3 years',
                            'No*',
                            'Yes, including Etonogestrel (Nexplanon®)',
                          ],
                          [
                            'Intrauterine Device (IUD)',
                            'Lasts 3-8 years',
                            'No*',
                            'Yes, including Levonorgestrel (Mirena®, kyleena®, Jaydess®, Skyla®)',
                          ],
                          [
                            'Injection',
                            'Once every 3 months',
                            'Yes',
                            'Yes, including Medroxyprogesterone (Depo-Provera®)',
                          ],
                          ['Transdermal Patch', 'Once per week', 'Yes', 'No*'],
                        ])}

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}* This type of hormonal medication is not
                          currently available in the United States. However, new
                          medication options might be developed in the future or
                          be available in other countries.
                          {'\u000A'}
                          {'\u000A'}
                          When taking hormonal medications, many people with
                          endometriosis choose to do an extended cycle (where
                          you only have a few periods a year) or continuous
                          cycle (where you skip your period completely).
                          {'\u000A'}
                          {'\u000A'}
                          Typically when someone takes oral contraception, they
                          take a pill every day for 3 weeks and then a sugar
                          pill for one week when they have their period. If you
                          want to do a continuous cycle, you can skip the sugar
                          pill week. This can significantly reduce pain that is
                          typically experienced during your period. You can
                          speak to your doctor about writing your prescription
                          to allow for an extended or continuous cycle.
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
                                week_num: 6,
                                module_num: 2,
                              });

                              Promise.resolve()
                                .then(() => {
                                  return this.props.dispatch(
                                    updateEndo101Week6ProgressAction(2),
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
