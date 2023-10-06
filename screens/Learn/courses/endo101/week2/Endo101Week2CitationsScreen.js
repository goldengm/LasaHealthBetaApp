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
                          {'\u000A'}
                          Endometriosis. Johns Hopkins Medicine.
                          https://www.hopkinsmedicine.org/health/conditions-and-diseases/endometriosis.
                          Accessed May 23, 2022.
                          {'\u000A'}
                          {'\u000A'}Female reproductive system: Structure &
                          Function. Cleveland Clinic.
                          https://my.clevelandclinic.org/health/articles/9118-female-reproductive-system#:~:text=At%20birth%2C%20there%20are%20approximately,quality%20of%20the%20remaining%20eggs.
                          Accessed July 15, 2022.
                          {'\u000A'}
                          {'\u000A'}
                          https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menstrual-cycle/art-20047186
                          {'\u000A'}
                          {'\u000A'}Physical activity and your menstrual cycle.
                          Physical activity and your menstrual cycle | Office on
                          Women's Health.
                          https://www.womenshealth.gov/getting-active/physical-activity-menstrual-cycle.
                          Accessed July 5, 2022.
                          {'\u000A'}
                          {'\u000A'}Van Stein KR, Brenk-Franz K, Strauß B.
                          Ovulatory Shifts in Sexual Desire But Not Mate
                          Preference: An LH-Test-Confirmed, Longitudinal Study.
                          https://journals.sagepub.com/doi/full/10.1177/1474704919848116.
                          Published May 23, 2019. Accessed July 6, 2022.
                          {'\u000A'}
                          {'\u000A'}Altgelt E, Meltzer A. Attraction during
                          ovulation - researchgate.net.
                          https://www.researchgate.net/profile/Emma-Altgelt/publication/323174647_Attraction_During_Ovulation/links/5c34c62092851c22a364b15d/Attraction-During-Ovulation.pdf.
                          Published 2018. Accessed July 15, 2022.
                          {'\u000A'}
                          {'\u000A'}Premenstrual syndrome (PMS). Mayo Clinic.
                          https://www.mayoclinic.org/diseases-conditions/premenstrual-syndrome/symptoms-causes/syc-20376780#:~:text=Premenstrual%20syndrome%20(PMS)%20has%20a,some%20form%20of%20premenstrual%20syndrome.
                          Published February 25, 2022. Accessed July 5, 2022.
                          {'\u000A'}
                          {'\u000A'}Cervical mucus: Chart, stages, tracking &
                          fertility. Cleveland Clinic.
                          https://my.clevelandclinic.org/health/body/21957-cervical-mucus.
                          Accessed July 5, 2022.
                          {'\u000A'}
                          {'\u000A'}Marquardt R, Kim TH, Shin J-H, Jeong J-W.
                          Progesterone and estrogen signaling in the
                          endometrium: What goes wrong in endometriosis?
                          International journal of molecular sciences.
                          https://pubmed.ncbi.nlm.nih.gov/31387263/. Published
                          August 5, 2019. Accessed June 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Endometriosis. Johns Hopkins Medicine.
                          https://www.hopkinsmedicine.org/health/conditions-and-diseases/endometriosis.
                          Accessed June 27, 2022.
                          {'\u000A'}
                          {'\u000A'}What are the treatments for endometriosis?
                          Eunice Kennedy Shriver National Institute of Child
                          Health and Human
                          Development.https://www.nichd.nih.gov/health/topics/endometri/conditioninfo/treatment#:~:text=Hormone%20therapy%20is%20used%20to,estrogen%2C%20and%20usually%20prevent%20ovulation.
                          Accessed June 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Marquardt RM, Kim TH, Shin JH, Jeong JW.
                          Progesterone and Estrogen Signaling in the
                          Endometrium: What Goes Wrong in Endometriosis?. Int J
                          Mol Sci. 2019;20(15):3822. Published 2019 Aug 5.
                          doi:10.3390/ijms20153822
                          {'\u000A'}
                          {'\u000A'}Patel S, Homaei A, Raju AB, Meher BR.
                          Estrogen: The necessary evil for human health, and
                          ways to tame it.
                          (https://pubmed.ncbi.nlm.nih.gov/29573619/) Biomed
                          Pharmacother. 2018;102:403-411. Accessed 1/28/2022.
                          {'\u000A'}
                          {'\u000A'}Sanchez EG, Giviziez CR, Sanchez HM,
                          Agostinho PL, Barros PS, Approbato MS. Low
                          progesterone levels and ovulation by ultrasound
                          assessment in infertile patients. JBRA Assist Reprod.
                          2016;20(1):13-16. Published 2016 Mar 1.
                          doi:10.5935/1518-0557.20160004
                          {'\u000A'}
                          {'\u000A'}Jehan S, Masters-Isarilov A, Salifu I, et
                          al. Sleep Disorders in Postmenopausal Women. J Sleep
                          Disord Ther. 2015;4(5):212.
                          {'\u000A'}
                          {'\u000A'}Ziomkiewicz A, Pawlowski B, Ellison PT,
                          Lipson SF, Thune I, Jasienska G. Higher luteal
                          progesterone is associated with low levels of
                          premenstrual aggressive behavior and fatigue. Biol
                          Psychol. 2012;91(3):376-382.
                          doi:10.1016/j.biopsycho.2012.08.001
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
                              navigation.navigate('Endo101Week2Screen');
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
