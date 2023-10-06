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
                          Acupuncture. Johns Hopkins Medicine.
                          https://www.hopkinsmedicine.org/health/wellness-and-prevention/acupuncture.
                          Published September 21, 2021. Accessed July 28, 2022.
                          {'\u000A'}
                          {'\u000A'}Mira T, Buen M, Borges M, Yela D,
                          Benetti-Pinto C. Systematic review and meta‐analysis
                          of ... - Wiley Online Library. Obstetrics &
                          Gynaecology.
                          https://obgyn.onlinelibrary.wiley.com/doi/10.1002/ijgo.12576.
                          Published June 26, 2018. Accessed July 18, 2022.
                          {'\u000A'}
                          {'\u000A'}Xu Y, Zhao W, Li T, Zhao Y, Bu H, Song S.
                          Effects of acupuncture for the treatment of
                          endometriosis-related pain: A systematic review and
                          meta-analysis. PloS one.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5659600/.
                          Published October 27, 2017. Accessed July 28, 2022.
                          {'\u000A'}
                          {'\u000A'}Wong JJ, Laframboise M, Mior S. Multimodal
                          therapy combining spinal manipulation, transcutaneous
                          electrical nerve stimulation, and heat for primary
                          dysmenorrhea: A prospective case study. Journal of
                          Chiropractic Medicine.
                          https://www.sciencedirect.com/science/article/pii/S1556370717300901?casa_token=1X2nASWsfUoAAAAA%3Ahhx3hSYNHDaWhC65y_76y-Z9ySBy9hg5-zt5XRQdOOga2b9ot_kHzD_tjqMEEMIWpLImvvjw3vM.
                          Published August 28, 2018. Accessed July 20, 2022.
                          {'\u000A'}
                          {'\u000A'}Mira T, Yela D, Podgaec S, Baracat E,
                          Benetti-Pinto C. Hormonal Treatment isolated vs.
                          hormonal treatment associated with electrotherapy for
                          pelvic pain control in deep endometriosis: Randomized
                          clinical trial.
                          https://www.ejog.org/article/S0301-2115(20)30648-5/fulltext#:~:text=Electrotherapy%20treatment%20using%20transcutaneous%20electrical,of%20life%20and%20sexual%20function.
                          Published October 18, 2020. Accessed July 20, 2022.
                          {'\u000A'}
                          {'\u000A'}Traditional chinese medicine: What you need
                          to know. National Center for Complementary and
                          Integrative Health.
                          https://www.nccih.nih.gov/health/traditional-chinese-medicine-what-you-need-to-know.
                          Accessed July 19, 2022.
                          {'\u000A'}
                          {'\u000A'}CBD products are everywhere. but do they
                          work? Harvard Health.
                          https://www.health.harvard.edu/newsletter_article/cbd-products-are-everywhere-but-do-they-work#:~:text=CBD%20does%20not%20get%20you,contain%20small%20amounts%20of%20THC.
                          Published December 14, 2021. Accessed July 21, 2022.
                          {'\u000A'}
                          {'\u000A'}Reinert AE, Hibner M. Self-reported efficacy
                          of cannabis for endometriosis pain. Journal of
                          Minimally Invasive Gynecology.
                          https://www.sciencedirect.com/science/article/pii/S1553465019310921.
                          Published October 14, 2019. Accessed July 18, 2022.
                          {'\u000A'}
                          {'\u000A'}Hill KP, Gold MS, Nemeroff CB, et al. Risks
                          and benefits of cannabis and cannabinoids in
                          psychiatry. American Journal of Psychiatry.
                          https://ajp.psychiatryonline.org/doi/10.1176/appi.ajp.2021.21030320.
                          Published December 8, 2021. Accessed July 21, 2022.
                          {'\u000A'}
                          {'\u000A'}Grinspoon P. Cannabidiol (CBD): What we know
                          and what we don't. Harvard Health.
                          https://www.health.harvard.edu/blog/cannabidiol-cbd-what-we-know-and-what-we-dont-2018082414476.
                          Published September 24, 2021. Accessed July 21, 2022.
                          {'\u000A'}
                          {'\u000A'}Yalçın Bahat P, Ayhan I, Üreyen Özdemir E,
                          İnceboz Ü, Oral E. Dietary supplements for treatment
                          of endometriosis: A Review. Acta bio-medica : Atenei
                          Parmensis.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8972862/.
                          Published March 14, 2022. Accessed July 26, 2022.
                          {'\u000A'}
                          {'\u000A'}Javaid Q. Association of diet, quality of
                          life and premenstrual syndrome; a review. Journal of
                          Bahria University Medical and Dental College.
                          https://jbumdc.bahria.edu.pk/index.php/ojs/article/view/491.
                          Published June 20, 2020. Accessed August 2, 2022.
                          {'\u000A'}
                          {'\u000A'}Helbig M, Vesper AS, Beyer I, Fehm T. Does
                          Nutrition Affect Endometriosis?. Geburtshilfe
                          Frauenheilkd. 2021;81(2):191-199.
                          doi:10.1055/a-1207-0557
                          {'\u000A'}
                          {'\u000A'}Abokhrais IM, Denison FC, Whitaker LHR, et
                          al. A two-arm parallel double-blind randomised
                          controlled pilot trial of the efficacy of omega-3
                          polyunsaturated fatty acids for the treatment of women
                          with endometriosis-associated pain (Purfect1). PLOS
                          ONE.
                          https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0227695.
                          Published January 27, 2020. Accessed July 27, 2022.
                          {'\u000A'}
                          {'\u000A'}Lange KW, Nakamura Y, Gosslau AM, Li S. Are
                          there serious adverse effects of omega-3
                          polyunsaturated fatty acid supplements? Journal of
                          Food Bioactives.
                          http://www.isnff-jfb.com/index.php/JFB/article/view/98.
                          Published September 30, 2019. Accessed July 27, 2022.
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
                              navigation.navigate('Endo101Week9Screen');
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
