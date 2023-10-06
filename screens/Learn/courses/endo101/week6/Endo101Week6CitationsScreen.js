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
                          Nezhat C, Vang N, Tanaka PP, Nezhat C. Optimal
                          Management of Endometriosis and Pain [published
                          correction appears in Obstet Gynecol. 2020
                          May;135(5):1233]. Obstet Gynecol. 2019;134(4):834-839.
                          doi:10.1097/AOG.0000000000003461
                          {'\u000A'}
                          {'\u000A'}Brown J, Crawford TJ, Datta S, Prentice A.
                          Oral contraceptives for pain associated with
                          endometriosis. Cochrane Database Syst Rev.
                          2018;5(5):CD001019. Published 2018 May 22.
                          doi:10.1002/14651858.CD001019.pub3
                          {'\u000A'}
                          {'\u000A'}Brown J, Farquhar C. Endometriosis: an
                          overview of Cochrane Reviews. Cochrane Database Syst
                          Rev. 2014;2014(3):CD009590. Published 2014 Mar 10.
                          doi:10.1002/14651858.CD009590.pub2
                          {'\u000A'}
                          {'\u000A'}Teal S, Edelman A. Contraception Selection,
                          Effectiveness, and Adverse Effects: A Review. JAMA.
                          2021;326(24):2507-2518. Published 2021
                          doi:10.1001/jama.2021.21392
                          {'\u000A'}
                          {'\u000A'}Rocca ML, Palumbo AR, Visconti F, Di Carlo
                          C. Safety and Benefits of Contraceptives Implants: A
                          Systematic Review. Pharmaceuticals (Basel).
                          2021;14(6):548. Published 2021 Jun 8.
                          doi:10.3390/ph14060548
                          {'\u000A'}
                          {'\u000A'}Gibbons T, Georgiou EX, Cheong YC, Wise MR.
                          Levonorgestrel-releasing intrauterine device (LNG-IUD)
                          for symptomatic endometriosis following surgery.
                          Cochrane Database Syst Rev. 2021;12(12):CD005072.
                          Published 2021 Dec 20.
                          doi:10.1002/14651858.CD005072.pub4
                          {'\u000A'}
                          {'\u000A'}Shen J, Che Y, Showell E, Chen K, Cheng L.
                          Interventions for emergency contraception. Cochrane
                          Database Syst Rev. 2019;1(1):CD001324. Published 2019
                          Jan 20. doi:10.1002/14651858.CD001324.pub6
                          {'\u000A'}
                          {'\u000A'}Vercellini P, Buggio L, Frattaruolo MP,
                          Borghi A, Dridi D, Somigliana E. Medical treatment of
                          endometriosis-related pain. Best Pract Res Clin Obstet
                          Gynaecol. 2018;51:68-91.
                          doi:10.1016/j.bpobgyn.2018.01.015
                          {'\u000A'}
                          {'\u000A'}El Taha L, Abu Musa A, Khalifeh D, Khalil A,
                          Abbasi S, Nassif J. Efficacy of dienogest vs combined
                          oral contraceptive on pain associated with
                          endometriosis: Randomized clinical trial. Eur J Obstet
                          Gynecol Reprod Biol. 2021;267:205-212.
                          doi:10.1016/j.ejogrb.2021.10.029
                          {'\u000A'}
                          {'\u000A'}“Pharmacology Seventh Edition,” Karen Whalen
                          {'\u000A'}
                          {'\u000A'}Van der Gaag WH, Roelofs PD, Enthoven WT,
                          van Tulder MW, Koes BW. Non-steroidal
                          anti-inflammatory drugs for acute low back pain.
                          Cochrane Database Syst Rev. 2020;4(4):CD013581.
                          Published 2020 Apr 16. doi:10.1002/14651858.CD013581
                          {'\u000A'}
                          {'\u000A'}Epocrates ibuprofen
                          {'\u000A'}
                          {'\u000A'}Epocrates acetaminophen
                          {'\u000A'}
                          {'\u000A'}Cashin AG, Folly T, Bagg MK, et al.
                          Efficacy, acceptability, and safety of muscle
                          relaxants for adults with non-specific low back pain:
                          systematic review and meta-analysis. BMJ.
                          2021;374:n1446. Published 2021 Jul 7.
                          doi:10.1136/bmj.n1446
                          {'\u000A'}
                          {'\u000A'}Kapur J, Elm J, Chamberlain JM, et al.
                          Randomized Trial of Three Anticonvulsant Medications
                          for Status Epilepticus. N Engl J Med.
                          2019;381(22):2103-2113. doi:10.1056/NEJMoa1905795
                          {'\u000A'}
                          {'\u000A'}Epocrates Neurotin
                          {'\u000A'}
                          {'\u000A'}Epocrates Lyrica
                          {'\u000A'}
                          {'\u000A'}Epocrates Librax
                          {'\u000A'}
                          {'\u000A'}Epocrates Transderm-Scop
                          {'\u000A'}
                          {'\u000A'}Epocrates Bentyl
                          {'\u000A'}
                          {'\u000A'}Anand U, Pacchetti B, Anand P, Sodergren MH.
                          Cannabis-based medicines and pain: a review of
                          potential synergistic and entourage effects. Pain
                          Manag. 2021;11(4):395-403. doi:10.2217/pmt-2020-0110
                          {'\u000A'}
                          {'\u000A'}Bridgeman MB, Abazia DT. Medicinal Cannabis:
                          History, Pharmacology, And Implications for the Acute
                          Care Setting. P T. 2017;42(3):180-188.
                          {'\u000A'}
                          {'\u000A'}Busse JW, Wang L, Kamaleldin M, et al.
                          Opioids for Chronic Noncancer Pain: A Systematic
                          Review and Meta-analysis. JAMA.
                          2018;320(23):2448-2460. doi:10.1001/jama.2018.18472
                          {'\u000A'}
                          {'\u000A'}Haleem DJ. Targeting Serotonin1A Receptors
                          for Treating Chronic Pain and Depression. Curr
                          Neuropharmacol. 2019;17(12):1098-1108.
                          doi:10.2174/1570159X17666190811161807
                          {'\u000A'}
                          {'\u000A'}Edinoff AN, Akuly HA, Hanna TA, et al.
                          Selective Serotonin Reuptake Inhibitors and Adverse
                          Effects: A Narrative Review. Neurol Int.
                          2021;13(3):387-401. Published 2021 Aug 5.
                          doi:10.3390/neurolint13030038
                          {'\u000A'}
                          {'\u000A'}Paredes S, Cantillo S, Candido KD, Knezevic
                          NN. An Association of Serotonin with Pain Disorders
                          and Its Modulation by Estrogens. Int J Mol Sci.
                          2019;20(22):5729. Published 2019 Nov 15.
                          doi:10.3390/ijms20225729
                          {'\u000A'}
                          {'\u000A'}Słopień R, Męczekalski B. Aromatase
                          inhibitors in the treatment of endometriosis. Prz
                          Menopauzalny. 2016;15(1):43-47.
                          doi:10.5114/pm.2016.58773
                          {'\u000A'}
                          {'\u000A'}Epocrates Topamax
                          {'\u000A'}
                          {'\u000A'}
                          ferraro et al. 2011
                          {'\u000A'}
                          {'\u000A'}Schneider J, Patterson M, Jimenez XF. Beyond
                          depression: Other uses for tricyclic antidepressants.
                          Cleve Clin J Med. 2019;86(12):807-814.
                          doi:10.3949/ccjm.86a.19005
                          {'\u000A'}
                          {'\u000A'}
                          Grandi G, Barra F, Ferrero S, Sileo FG, Bertucci E,
                          Napolitano A, Facchinetti F. Hormonal contraception in
                          women with endometriosis: a systematic review. Eur J
                          Contracept Reprod Health Care 2019;24: 61-70.
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
                              navigation.navigate('Endo101Week6Screen');
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
