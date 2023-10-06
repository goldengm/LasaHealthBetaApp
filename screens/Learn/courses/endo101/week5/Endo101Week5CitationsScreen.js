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
                          Restaino S, Mereu L, Finelli A, et al. Robotic surgery
                          vs laparoscopic surgery in patients with diagnosis of
                          endometriosis: A systematic review and meta-analysis -
                          Journal of Robotic surgery. SpringerLink.
                          https://link.springer.com/article/10.1007/s11701-020-01061-y.
                          Published March 7, 2020. Accessed July 15, 2022.
                          {'\u000A'}
                          {'\u000A'}Nicolaus K, Zschauer S, Bräuer D, et al.
                          Extensive endometriosis surgery: RASRM and Enzian
                          score independently relate to post-operative
                          complication grade - archives of Gynecology and
                          Obstetrics. SpringerLink.
                          https://link.springer.com/article/10.1007/s00404-019-05425-0.
                          Published January 27, 2020. Accessed July 15, 2022.
                          {'\u000A'}
                          {'\u000A'}Pundir J, Omanwa K, Kovoor E, Pundir V,
                          Lancaster G, Barton-Smith P. Laparoscopic excision
                          versus ablation for endometriosis-associated pain: An
                          updated systematic review and meta-analysis. Journal
                          of Minimally Invasive Gynecology.
                          https://www.sciencedirect.com/science/article/pii/S1553465017302637.
                          Published April 26, 2017. Accessed July 6, 2022.
                          {'\u000A'}
                          {'\u000A'}Zanelotti A, Decherney AH. Surgery and
                          endometriosis. Clinical obstetrics and gynecology.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5635831/.
                          Published September 2017. Accessed June 20, 2022.
                          {'\u000A'}
                          {'\u000A'}Rindos NB, Fulcher IR, Donnellan NM. Pain
                          and quality of life after laparoscopic excision of
                          endometriosis. Journal of Minimally Invasive
                          Gynecology.
                          https://www.sciencedirect.com/science/article/pii/S1553465020301667.
                          Published April 6, 2020. Accessed July 15, 2022.
                          {'\u000A'}
                          {'\u000A'}Bignardi T, Khong SY, Lam A. Excisional
                          versus ablative surgery for peritoneal endometriosis.
                          The Cochrane Database of Systematic Reviews.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6662945/.
                          Published July 29, 2019. Accessed June 9, 2022.
                          {'\u000A'}
                          {'\u000A'}Riley KA, Benton AS, Deimling TA, Kunselman
                          AR, Harkins GJ. Surgical excision versus ablation for
                          superficial endometriosis-associated pain: A
                          randomized controlled trial. Journal of Minimally
                          Invasive Gynecology.
                          https://www.sciencedirect.com/science/article/pii/S1553465018301808.
                          Published March 30, 2018. Accessed June 10, 2022.
                          {'\u000A'}
                          {'\u000A'}Rolla E. Endometriosis: Advances and
                          controversies in classification, pathogenesis,
                          diagnosis, and treatment. F1000Research.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6480968/.
                          Published April 23, 2019. Accessed June 13, 2022.
                          {'\u000A'}
                          {'\u000A'}Rehmer J, Flyckt R, Goodman L, Falcone T.
                          Management of endometriomas : Obstetrical &
                          Gynecological Survey. LWW.
                          https://journals.lww.com/obgynsurvey/Abstract/2019/04000/Management_of_Endometriomas.19.aspx.
                          Published April 2019. Accessed August 3, 2022.
                          {'\u000A'}
                          {'\u000A'}Lee D, Kim SK, Lee JR, Jee BC. Management of
                          endometriosis-related infertility: Considerations and
                          treatment options. Clinical and experimental
                          reproductive medicine.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7127898/.
                          Published March 2020. Accessed August 3, 2022.
                          {'\u000A'}
                          {'\u000A'}Endometriosis: Should I have a hysterectomy
                          and oophorectomy? Endometriosis: Should I Have a
                          Hysterectomy and Oophorectomy? | Michigan Medicine.
                          https://www.uofmhealth.org/health-library/tv7242.
                          Published July 2020. Accessed June 21, 2022.
                          {'\u000A'}
                          {'\u000A'}Seckin. Shoulder pain after endometriosis
                          surgery. Seckin Endometriosis Center.
                          https://drseckin.com/shoulder-pain-after-endometriosis-surgery/.
                          Published May 9, 2022. Accessed July 5, 2022.
                          {'\u000A'}
                          {'\u000A'}Ceccaronni M, Bounous VE, Clarizia R,
                          Mautone D, Mabrouk M. Recurrent endometriosis: A
                          battle against an unknown enemy. Taylor & Francis.
                          https://www.tandfonline.com/doi/full/10.1080/13625187.2019.1662391?casa_token=G78wnxvfd64AAAAA%3AP0UdPAuF2LZXFY3-ktOogY6MBYN6ooFO14x9KAs_K9VllMjN2yQQ1aWZUTuufZK-iqXnbdCaplYc.
                          Published September 2019. Accessed July 15, 2022.
                          {'\u000A'}
                          {'\u000A'}Zakhari A, Delpero E, McKeown S, Tomlinson
                          G, Bougie O, Murji A. Endometriosis recurrence
                          following post-operative hormonal suppression: A
                          systematic review and meta-analysis. OUP Academic.
                          https://academic.oup.com/humupd/article/27/1/96/5918116.
                          Published October 6, 2020. Accessed August 3, 2022.
                          {'\u000A'}
                          {'\u000A'}El-Din Shawki H. The efficacy of
                          laparoscopic uterosacral nerve ablation (LUNA) in the
                          treatment of unexplained chronic pelvic pain: A
                          randomized controlled trial. Gynecological surgery.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3041907/.
                          Published February 2011. Accessed June 14, 2022.
                          {'\u000A'}
                          {'\u000A'}Ferrero S, Stabilini C, Barra F, Clarizia R,
                          Roviglione G, Ceccaroni M. Bowel resection for
                          intestinal endometriosis. Best Practice & Research
                          Clinical Obstetrics & Gynaecology.
                          https://www.sciencedirect.com/science/article/pii/S1521693420300857?casa_token=IqngDZWAkCoAAAAA%3A6SukVBBxK0lq5aJfkfpQY5eNDKumTCN17bjbuP6aHsSXTasHPsmSWO_TqpZfwtmgoqkK25LRIA.
                          Published June 9, 2020. Accessed August 3, 2022.
                          {'\u000A'}
                          {'\u000A'}Chou D, Perera S, Condous G, et al. Shaving
                          for bowel endometriosis .
                          https://www.endometriozisdernegi.org/konu/dosyalar/pdf/makale_ozetleri/Kasim2019/7.pdf.
                          Published November 2019. Accessed August 3, 2022.
                          {'\u000A'}
                          {'\u000A'}Xue H, Liu M, Hao W, Li Y. Clinical
                          evaluation of laparoscopic surgery combined with
                          triptorelin acetate in patients with endometriosis and
                          infertility. Pakistan journal of medical sciences.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6191787/.
                          Published 2018. Accessed August 3, 2022.
                          {'\u000A'}
                          {'\u000A'}Moawad NS, Arkerson B, Laguerre M, Robinson
                          M. Long-term outcomes of laparoscopic surgery for
                          endometriosis. ajog.org.
                          https://doi.org/10.1016/j.ajog.2017.12.111. Published
                          February 1, 2018. Accessed July 5, 2022.
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
                              navigation.navigate('Endo101Week5Screen');
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
