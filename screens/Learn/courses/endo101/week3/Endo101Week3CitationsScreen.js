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
                          {'\u000A'}Jenkins S, Olive DL, Haney AF.
                          Endometriosis: pathogenetic implications of the
                          anatomic distribution. Obstet Gynecol.
                          1986;67(3):335-338.
                          {'\u000A'}
                          {'\u000A'}Reis, F. M., Santulli, P., Marcellin, L.,
                          Borghese, B., Lafay-Pillet, M. C., & Chapron, C.
                          (2020). Superficial peritoneal endometriosis: clinical
                          characteristics of 203 confirmed cases and 1292
                          endometriosis-free controls. Reproductive Sciences,
                          27(1), 309-315. Retrieved from
                          https://link.springer.com/article/10.1007/s43032-019-00028-1
                          {'\u000A'}
                          {'\u000A'}Cranney, R., Condous, G., & Reid, S. (2017).
                          An update on the diagnosis, surgical management, and
                          fertility outcomes for women with endometrioma. Acta
                          obstetricia et gynecologica Scandinavica, 96(6),
                          633-643. Retrieved from
                          https://obgyn.onlinelibrary.wiley.com/doi/full/10.1111/aogs.13114
                          {'\u000A'}
                          {'\u000A'}Daly, S. (2018). Imaging in
                          Endometrioma/Endometriosis. Medscape. Retrieved from
                          https://emedicine.medscape.com/article/403435-overview#a1
                          {'\u000A'}
                          {'\u000A'}Khine, Y. M., Taniguchi, F., & Harada, T.
                          (2016). Clinical management of
                          endometriosis-associated infertility. Reproductive
                          medicine and biology, 15(4), 217-225. Retrieved from
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5715862/
                          {'\u000A'}
                          {'\u000A'}​​Lee, S. Y., Koo, Y. J., & Lee, D. H.
                          (2021). Classification of endometriosis. Yeungnam
                          University journal of medicine, 38(1), 10–18.
                          https://doi.org/10.12701/yujm.2020.00444
                          {'\u000A'}
                          {'\u000A'}Abrao, M. S., Andres, M. P., Miller, C. E.,
                          Gingold, J. A., Rius, M., Neto, J. S., & Carmona, F.
                          (2021). AAGL 2021 Endometriosis Classification: An
                          Anatomy-based Surgical Complexity Score. Journal of
                          minimally invasive gynecology, 28(11), 1941–1950.e1.
                          https://doi.org/10.1016/j.jmig.2021.09.709
                          {'\u000A'}
                          {'\u000A'}Signorile, P.G., Baldi, A. (2020). The
                          Presence of Endometriosis in the Human Fetus. In:
                          Nezhat, C.H. (eds) Endometriosis in Adolescents.
                          Springer, Cham.
                          https://doi.org/10.1007/978-3-030-52984-0_8
                          {'\u000A'}
                          {'\u000A'}
                          https://onlinelibrary.wiley.com/doi/10.1002/jcp.24358
                          {'\u000A'}
                          {'\u000A'}Maruyama T. (2022). A Revised Stem Cell
                          Theory for the Pathogenesis of Endometriosis. J Pers
                          Med. 2022;12(2):216. doi:10.3390/jpm12020216
                          {'\u000A'}
                          {'\u000A'}Han SJ, Lee JE, Cho YJ, Park MJ, O'Malley
                          BW. Genomic Function of Estrogen Receptor β in
                          Endometriosis. Endocrinology. 2019;160(11):2495-2516.
                          doi:10.1210/en.2019-00442
                          {'\u000A'}
                          {'\u000A'}Yıldırım D, Tatar C, Doğan O, et al.
                          Post-cesarean scar endometriosis. Turk J Obstet
                          Gynecol. 2018;15(1):33-38. doi:10.4274/tjod.90922
                          {'\u000A'}
                          {'\u000A'}Bobel C, Winkler IT, Fahs B, Hasson KA,
                          Kissling EA, Roberts TA, eds. The Palgrave Handbook of
                          Critical Menstruation Studies. Singapore: Palgrave
                          Macmillan; 2020.
                          {'\u000A'}
                          {'\u000A'}Liu Y, Zhang Z, Yang F, et al. The role of
                          endometrial stem cells in the pathogenesis of
                          endometriosis and their application to its early
                          diagnosis†. Biol Reprod. 2020;102(6):1153-1159.
                          doi:10.1093/biolre/ioaa011
                          {'\u000A'}
                          {'\u000A'}American College of Obstetricians and
                          Gynecologists. (2019). Endometriosis. Retrieved
                          October 11, 2019, from
                          https://www.acog.org/Patients/FAQs/Endometriosis
                          {'\u000A'}
                          {'\u000A'}Maddern J, Grundy L, Castro J, Brierley SM.
                          Pain in Endometriosis. Front Cell Neurosci.
                          2020;14:590823. Published 2020 Oct 6.
                          doi:10.3389/fncel.2020.590823
                          {'\u000A'}
                          {'\u000A'}American College of Obstetricians and
                          Gynecologists. (2019). Endometriosis. Retrieved
                          October 11, 2019, from
                          https://www.acog.org/Patients/FAQs/Endometriosis
                          external link
                          {'\u000A'}
                          {'\u000A'}Birke L, Baston-Büst DM, Kruessel JS, Fehm
                          TN, Bielfeld AP. Can TSH level and premenstrual
                          spotting constitute a non-invasive marker for the
                          diagnosis of endometriosis?. BMC Womens Health.
                          2021;21(1):336. Published 2021 Sep 20.
                          doi:10.1186/s12905-021-01474-3
                          {'\u000A'}
                          {'\u000A'}Surrey, E. S., Soliman, A. M., Johnson, S.
                          J., Davis, M., Castelli-Haley, J., & Snabes, M. C.
                          (2018). Risk of developing comorbidities among women
                          with endometriosis: A retrospective matched cohort
                          study. Journal of Women’s Health, 27(9), 1114–1123.
                          Retrieved November 1, 2019, from
                          https://www.ncbi.nlm.nih.gov/pubmed/30070938
                          {'\u000A'}
                          {'\u000A'}NICHD. (2018). Spotlight: What to know about
                          endometriosis. Retrieved January 23, 2020, from
                          https://www.nichd.nih.gov/newsroom/resources/spotlight/031218-spotlight-endometriosis
                          {'\u000A'}
                          {'\u000A'}Ramin-Wright, A., Kohl Schwartz, A. S.,
                          Geraedts, K., Rauchfuss, M., Wölfler, M. M.,
                          Haeberlin, F., et al. (2018). Fatigue - a symptom in
                          endometriosis. Human Reproduction, 33(8), 1459–1465.
                          Retrieved November 1, 2019, from
                          https://www.ncbi.nlm.nih.gov/pubmed/29947766
                          {'\u000A'}
                          {'\u000A'}Bhat, S. P., Kaliyat, S., Laxminarayana, K.,
                          Srinivas, T., Venugopala, K., & Shetty, J. K. (2020).
                          Endometriosis: A Clinicopathological Study in a
                          Tertiary Care Hospital. Journal of laboratory
                          physicians, 12(3), 184–190.
                          https://doi.org/10.1055/s-0040-1720946
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
                              navigation.navigate('Endo101Week3Screen');
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
