import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../constants';
import {Button} from '../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../../../shared/ScreenTemplateWrapper';
import {getOS} from '../../../../../shared/PlatformUtils';

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
                          paddingBottom: 0,
                        }}>
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: '600',
                            textAlign: 'center',
                          }}>
                          Citations
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}
                          {'\u000A'}Endometriosis. Johns Hopkins Medicine.
                          https://www.hopkinsmedicine.org/health/conditions-and-diseases/endometriosis.
                          Accessed May 23, 2022.
                          {'\u000A'}
                          {'\u000A'}Awad E, Ahmed HAH, Yousef A, Abbas R.
                          Efficacy of exercise on pelvic pain and posture
                          associated with endometriosis: Within subject design.
                          Journal of physical therapy science.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5890212/#:~:text=Physical%20therapy%20techniques%20have%20been,break%20the%20pain%20cycle8).
                          Published December 2017. Accessed May 25, 2022.
                          {'\u000A'}
                          {'\u000A'}Pelvic floor disorders: Ahn women.
                          www.ahn.org.
                          https://www.ahn.org/services/womens-health/gynecologic-care/pelvic-floor-disorders.
                          Published April 11, 2022. Accessed August 2, 2022.
                          {'\u000A'}
                          {'\u000A'}El-Monsif Thabet AA, Alshehri MA. Effect of
                          pulsed high-intensity laser therapy on pain,
                          adhesions, and quality of life in women having
                          endometriosis: A randomized controlled trial.
                          Photomedicine and laser surgery.
                          https://pubmed.ncbi.nlm.nih.gov/29668354/. Published
                          April 18, 2018. Accessed May 31, 2022.
                          {'\u000A'}
                          {'\u000A'}Nezhat C. Optimal Management of
                          Endometriosis and pain : Obstetrics & gynecology. LWW.
                          https://journals.lww.com/greenjournal/fulltext/2019/10000/optimal_management_of_endometriosis_and_pain.25.aspx.
                          Published October 2019. Accessed June 3, 2022.
                          {'\u000A'}
                          {'\u000A'}Arik MI, Kiloatar H, Aslan B, Icelli M. The
                          effect of Tens for pain relief in women with primary
                          dysmenorrhea: A systematic review and meta-analysis.
                          EXPLORE.
                          https://www.sciencedirect.com/science/article/pii/S155083072030286X?casa_token=FNovXsv3ilQAAAAA%3AJX8tKdfyFNhtBSn-PEIOdNjnfKpQkVsYYq14aJHBNEdaeHsUQ-JakqGgPsGVDfUv8aO6Cj5Bsg.
                          Published August 29, 2020. Accessed August 2, 2022.
                          {'\u000A'}
                          {'\u000A'}Amirdelfan K, Hong M, Tay B, et al.
                          High-frequency impulse therapy for treatment of
                          chronic back pain: A multicenter randomized controlled
                          pilot study. Journal of pain research.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8473565/.
                          Published September 22, 2021. Accessed May 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Goldstein IJ, Clayton AH, Goldstein A, Kim
                          NN, Kingsberg SA. In: Textbook of Female Sexual
                          Function and Dysfunction: Diagnosis and Treatment.
                          Hoboken: Wiley Blackwell; 2018:295..
                          {'\u000A'}
                          {'\u000A'}Ricciotti H, Golen T. Does exercise really
                          boost energy levels? Harvard Health.
                          https://www.health.harvard.edu/exercise-and-fitness/does-exercise-really-boost-energy-levels.
                          Published July 1, 2021. Accessed August 2, 2022.
                          {'\u000A'}
                          {'\u000A'}Armour M, Sinclair J, Chalmers KJ, Smith CA.
                          Self-management strategies amongst Australian women
                          with endometriosis: A national online survey. BMC
                          complementary and alternative medicine.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6332532/.
                          Published January 15, 2019. Accessed May 25, 2022.
                          {'\u000A'}
                          {'\u000A'}Evans S, Fernandez S, Olive L, Payne LA,
                          Mikocka-Walus A. Psychological and mind-body
                          interventions for endometriosis: A systematic review.
                          Journal of Psychosomatic Research.
                          https://www.sciencedirect.com/science/article/abs/pii/S0022399919304295?via%3Dihub.
                          Published June 27, 2019. Accessed May 31, 2022.
                          {'\u000A'}
                          {'\u000A'}Mikocka-Walus A, Druitt M, O'Shea M, et al.
                          Yoga, cognitive–behavioural therapy versus education
                          to improve quality of life and reduce healthcare costs
                          in people with endometriosis: A randomised controlled
                          trial. BMJ Open.
                          https://bmjopen.bmj.com/content/11/8/e046603.
                          Published August 1, 2021. Accessed May 25, 2022.
                          {'\u000A'}
                          {'\u000A'}Hansen S, Sverrisdottir U, Rudnicki M.
                          Impact of exercise on pain perception in women with
                          endometriosis: A systematic review. Obstetrics &
                          Gynaecoloy. Rudnicki. Published May 17, 2021. Accessed
                          August 2, 2022.
                        </Text>

                        <View
                          style={{
                            paddingHorizontal: theme.SIZES.BASE * 2,
                            alignItems: 'center',
                            paddingVertical: theme.SIZES.BASE * 2,
                          }}>
                          <Button
                            testID="backToCourseButton"
                            style={{
                              ...styles.button,
                              width: width - theme.SIZES.BASE * 4,
                            }}
                            titleStyle={{
                              color: theme.COLORS.WHITE,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title="Back to course"
                            onPress={() => {
                              navigation.navigate('Endo101Week7Screen');
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
