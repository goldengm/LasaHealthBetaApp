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
                          Ojo O. Nutrition and Chronic Conditions. Nutrients.
                          2019;11(2):459. Published 2019 Feb 22.
                          doi:10.3390/nu11020459.
                          {'\u000A'}
                          {'\u000A'}Huijs, E., & Nap, A. W. (2020). The effects
                          of nutrients on symptoms in women with endometriosis:
                          a systematic review. Reproductive BioMedicine Online.
                          {'\u000A'}
                          {'\u000A'}Schink M, Konturek PC, Herbert SL, et al.
                          Different nutrient intake and prevalence of
                          gastrointestinal comorbidities in women with
                          endometriosis. J Physiol Pharmacol.
                          2019;70(2):10.26402/jpp.2019.2.09.
                          doi:10.26402/jpp.2019.2.09
                          {'\u000A'}
                          {'\u000A'}Ek M, Roth B, Bengtsson M, Ohlsson B.
                          Gastrointestinal Symptoms in Women With Endometriosis
                          and Microscopic Colitis in Comparison to Irritable
                          Bowel Syndrome: A Cross-Sectional Study. Turk J
                          Gastroenterol. 2021;32(10):819-827.
                          doi:10.5152/tjg.2020.19583
                          {'\u000A'}
                          {'\u000A'}Saguyod, S. J. U., Kelley, A. S., Velarde,
                          M. C., & Simmen, R. C. (2018). Diet and
                          endometriosis-revisiting the linkages to inflammation.
                          Journal of Endometriosis and Pelvic Pain Disorders,
                          10(2), 51-58.
                          {'\u000A'}
                          {'\u000A'}Karlsson, J. V., Patel, H., & Premberg, A.
                          (2020). Experiences of health after dietary changes in
                          endometriosis: a qualitative interview study. BMJ
                          open, 10(2), e032321.
                          {'\u000A'}
                          {'\u000A'}Poliński S, Kowalska S, Topka P,
                          Szydłowska-Czerniak A. Physicochemical, Antioxidant,
                          Microstructural Properties and Bioaccessibility of
                          Dark Chocolate with Plant Extracts. Molecules.
                          2021;26(18):5523. Published 2021 Sep 11.
                          doi:10.3390/molecules26185523
                          {'\u000A'}
                          {'\u000A'}Mansour, D., Hofmann, A., &
                          Gemzell-Danielsson, K. (2021). A Review of Clinical
                          Guidelines on the Management of Iron Deficiency and
                          Iron-Deficiency Anemia in Women with Heavy Menstrual
                          Bleeding. Advances in therapy, 38(1), 201–225.
                          {'\u000A'}
                          {'\u000A'}Liput KP, Lepczyński A, Ogłuszka M, et al.
                          Effects of Dietary n-3 and n-6 Polyunsaturated Fatty
                          Acids in Inflammation and Cancerogenesis. Int J Mol
                          Sci. 2021;22(13):6965. Published 2021 Jun 28.
                          doi:10.3390/ijms22136965
                          {'\u000A'}
                          {'\u000A'}Samaneh Y, ShahidehJahanian S, Azadeh M,
                          Anoshirvan K. The association of food consumption and
                          nutrient intake with endometriosis risk in Iranian
                          women: A case-control study. Int J Reprod Biomed.
                          2019;17(9):661-670. Published 2019 Sep 22.
                          doi:10.18502/ijrm.v17i9.5102
                          {'\u000A'}
                          {'\u000A'}Helbig M, Vesper AS, Beyer I, Fehm T. Does
                          Nutrition Affect Endometriosis?. Geburtshilfe
                          Frauenheilkd. 2021;81(2):191-199.
                          doi:10.1055/a-1207-0557
                          {'\u000A'}
                          {'\u000A'}Nasiadek M, Stragierowicz J, Klimczak M,
                          Kilanowicz A. The Role of Zinc in Selected Female
                          Reproductive System Disorders. Nutrients.
                          2020;12(8):2464. Published 2020 Aug 16.
                          doi:10.3390/nu12082464
                          {'\u000A'}
                          {'\u000A'}Bhowmik, D., Chiranjib, K., & Kumar, S.
                          (2010). A potential medicinal importance of zinc in
                          human health and chronic. Int J Pharm, 1(1), 05-11.
                          {'\u000A'}
                          {'\u000A'}Simmen RCM, Kelley AS. Seeing red: diet and
                          endometriosis risk. Ann Transl Med. 2018;6(Suppl
                          2):S119. doi:10.21037/atm.2018.12.14
                          {'\u000A'}
                          {'\u000A'}González F, Considine RV, Abdelhadi OA,
                          Acton AJ. Saturated Fat Ingestion Promotes
                          Lipopolysaccharide-Mediated Inflammation and Insulin
                          Resistance in Polycystic Ovary Syndrome. J Clin
                          Endocrinol Metab. 2019;104(3):934-946.
                          doi:10.1210/jc.2018-01143
                          {'\u000A'}
                          {'\u000A'}Marziali, M., Venza, M., Lazzaro, S.,
                          Lazzaro, A., Micossi, C., & Stolfi, V. M. (2012).
                          Gluten-free diet: a new strategy for management of
                          painful endometriosis related symptoms?. Minerva
                          chirurgica, 67(6), 499-504.
                          {'\u000A'}
                          {'\u000A'}Armour M, Middleton A, Lim S, Sinclair J,
                          Varjabedian D, Smith CA. Dietary Practices of Women
                          with Endometriosis: A Cross-Sectional Survey. J Altern
                          Complement Med. 2021;27(9):771-777.
                          doi:10.1089/acm.2021.0068
                          {'\u000A'}
                          {'\u000A'}Qi X, Zhang W, Ge M, et al. Relationship
                          Between Dairy Products Intake and Risk of
                          Endometriosis: A Systematic Review and Dose-Response
                          Meta-Analysis. Front Nutr. 2021;8:701860. Published
                          2021 Jul 22. doi:10.3389/fnut.2021.701860
                          {'\u000A'}
                          {'\u000A'}Kechagias KS, Katsikas Triantafyllidis K,
                          Kyriakidou M, et al. The Relation between Caffeine
                          Consumption and Endometriosis: An Updated Systematic
                          Review and Meta-Analysis. Nutrients. 2021;13(10):3457.
                          Published 2021 Sep 29. doi:10.3390/nu13103457
                          {'\u000A'}
                          {'\u000A'}Commissioner O. Spilling the beans: How much
                          caffeine is too much? U.S. Food and Drug
                          Administration.
                          https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much#:~:text=4.,associated%20with%20dangerous%2C%20negative%20effects.
                          Published December 12, 2018. Accessed 2022.
                          {'\u000A'}
                          {'\u000A'}Freeman CR, Zehra A, Ramirez V, Wiers CE,
                          Volkow ND, Wang GJ. Impact of sugar on the body,
                          brain, and behavior. Front Biosci (Landmark Ed).
                          2018;23(12):2255-2266. Published 2018 Jun 1.
                          doi:10.2741/4704
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
                              navigation.navigate('Endo101Week8Screen');
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
