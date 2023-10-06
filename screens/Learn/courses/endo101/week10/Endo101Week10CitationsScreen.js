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
                          At what age can endometriosis develop?
                          Endometriosis.net.
                          https://endometriosis.net/age-start-for-women.
                          Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Signorile PG, Baldi A. The presence of
                          endometriosis in the human fetus. SpringerLink.
                          https://link.springer.com/chapter/10.1007/978-3-030-52984-0_8.
                          Published November 14, 2020. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Shim JY, Laufer MR. Endometriosis in
                          adolescence. SpringerLink.
                          https://link.springer.com/chapter/10.1007/978-3-030-97236-3_12.
                          Published May 25, 2022. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Tsonis O, Barmpalia Z, Gkrozou F, et al.
                          Endometriosis in adolescence: Early manifestation of
                          the traditional disease or a unique variant? European
                          Journal of Obstetrics & Gynecology and Reproductive
                          Biology.
                          https://www.sciencedirect.com/science/article/pii/S0301211520300543?casa_token=a-qjcNR-DnAAAAAA%3A2PThpMb8AOM6gsAdu3E0lMYf1dRHnGUThs2SG0YneawizB6MjqA7wF-NK8auCdgjue_s-pUa.
                          Published February 7, 2020. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Hirsch M, Dhillon-Smith R, Cutner AS, Yap M,
                          Creighton SM. The prevalence of endometriosis in
                          adolescents with pelvic pain: A systematic review.
                          Journal of Pediatric and Adolescent Gynecology.
                          https://www.sciencedirect.com/science/article/pii/S1083318820302874?casa_token=Dcd16wysItsAAAAA%3A38qt-7ihs5ZvTr49ZSrd_wWjSJlT6BpankshhBzKgjYZWguP5j_5Hdq7Z2csIWUwD5CgGyCd.
                          Published July 29, 2020. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Liakopoulou M-K, Tsarna E, Eleftheriades A,
                          Arapaki A, Toutoudaki K, Christopoulos P. Medical and
                          behavioral aspects of adolescent endometriosis: A
                          review of the literature. MDPI.
                          https://www.mdpi.com/2227-9067/9/3/384/htm. Published
                          March 9, 2022. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}DiVasta AD, Vitonis AF, Laufer MR, Missmer
                          SA. Spectrum of symptoms in women diagnosed with
                          endometriosis during adolescence vs adulthood.
                          American Journal of Obstetrics and Gynecology.
                          https://www.sciencedirect.com/science/article/pii/S0002937817324821?casa_token=udbEK1P6IJ4AAAAA%3AtSE5ITeWvYARLUTN9zc9W--IfLVVKGtWi1tIjF9iH-5NB2-uM4Z3U596joGBeVO4-trI5yoY.
                          Published December 13, 2017. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Troìa L, Biscione A, Colombi I, Luisi S.
                          Management of endometriosis in teenagers.
                          SpringerLink.
                          https://link.springer.com/chapter/10.1007/978-3-030-57866-4_6.
                          Published December 8, 2020. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Flyckt R, Falcone T, Llarena N. Fertility
                          Preservation in women with endometriosis - sage
                          journals.
                          https://journals.sagepub.com/doi/full/10.1177/1179558119873386.
                          Published September 3, 2019. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Shigesi N, Kvaskoff M, Kirtley S, et al. The
                          association between endometriosis and autoimmune
                          diseases: a systematic review and meta-analysis. Hum
                          Reprod Update. 2019;25(4):486-503.
                          doi:10.1093/humupd/dmz014 10
                          {'\u000A'}
                          {'\u000A'}Vassilopoulou L, Matalliotakis M, Zervou MI,
                          et al. Endometriosis and in vitro fertilisation
                          (review). Experimental and Therapeutic Medicine.
                          https://www.spandidos-publications.com/10.3892/etm.2018.6307?text=fulltext.
                          Published August 1, 2018. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Minebois H, Souza AD, Mezan de Malartic C,
                          et al. [endometriosis and miscarriage: Systematic
                          review]. Gynecologie, obstetrique, fertilite &
                          senologie. https://pubmed.ncbi.nlm.nih.gov/28712793/.
                          Published July 13, 2017. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}San Lazaro Campillo I, Meaney S, Sheehan J,
                          Rice R, O’Donoghue K. University Students' awareness
                          of causes and risk factors of miscarriage: A
                          cross-sectional study - BMC Women's health.
                          SpringerLink.
                          https://link.springer.com/article/10.1186/s12905-018-0682-1.
                          Published November 19, 2018. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Yong PJ, Matwani S, Brace C, et al.
                          Endometriosis and ectopic pregnancy: A meta-analysis.
                          Journal of Minimally Invasive Gynecology.
                          https://www.sciencedirect.com/science/article/pii/S1553465019312051.
                          Published September 20, 2019. Accessed August 24,
                          2022.
                          {'\u000A'}
                          {'\u000A'}Matsuzaki S, Nagase Y, Ueda Y, et al. The
                          association of endometriosis with placenta previa and
                          postpartum hemorrhage: A systematic review and
                          meta-analysis. American Journal of Obstetrics &
                          Gynecology MFM.
                          https://www.sciencedirect.com/science/article/pii/S2589933321001129?casa_token=5zZlsWQxEl0AAAAA%3AtxTKlgon87bpnUyg43KQDNauhKvlWkPwHFQLFDcdJwzo0cYkS_FZ8BVGkeMYr7-ICmWe1WQx.
                          Published July 13, 2021. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Jeon H, Min J, Kim DK, Seo H, Kim S, Kim
                          Y-S. Women with endometriosis, especially those who
                          conceived with assisted reproductive technology, have
                          increased risk of placenta previa: Meta-analyses.
                          Journal of Korean Medical Science.
                          https://synapse.koreamed.org/articles/1107883.
                          Published July 30, 2018. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Keag OE, Norman JE, Stock SJ. Long-term
                          risks and benefits associated with cesarean delivery
                          for mother, baby, and subsequent pregnancies:
                          Systematic review and meta-analysis. PLOS Medicine.
                          https://journals.plos.org/plosmedicine/article?id=10.1371%2Fjournal.pmed.1002494&site=mapping_hyperlink.
                          Published 2018. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Porpora MG, Tomao F, Ticino A, et al.
                          Endometriosis and pregnancy: A single institution
                          experience. MDPI.
                          https://www.mdpi.com/1660-4601/17/2/401. Published
                          January 8, 2020. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Secosan C, Balulescu L, Brasoveanu S, et al.
                          Endometriosis in menopause-renewed attention on a
                          controversial disease. Diagnostics (Basel,
                          Switzerland).
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7151055/.
                          Published February 29, 2020. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}Zanello M, Borghese G, Manzara F, et al.
                          Hormonal replacement therapy in menopausal women with
                          history of endometriosis: A review of literature.
                          MDPI. https://www.mdpi.com/1648-9144/55/8/477/htm.
                          Published August 14, 2019. Accessed August 24, 2022.
                          {'\u000A'}
                          {'\u000A'}
                          Hewitt G. Dysmenorrhea and Endometriosis: Diagnosis
                          and Management in Adolescents. Clin Obstetrics and
                          Gynecology: September 2020-Volume 63-Issue 3-p 536-543
                          {'\u000A'}
                          {'\u000A'}
                          Shim JY, Laufer MR, Grimstad FW. Dysmenorrhea and
                          Endometriosis in Transgender Adolescents. J Pediatr
                          Adolesc Gynecol. 2020 Oct;33(5):524-528
                          {'\u000A'}
                          {'\u000A'}
                          Kciuk O, Kives S. Painful periods in adolescents.-CMAJ
                          Apr 2021, 193 (16) E56
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
                              navigation.navigate('Endo101Week10Screen');
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
