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
                          {'\u000A'}Cromeens MG, Carey ET, Robinson WR, Knafl K,
                          Thoyre S. Timing, delays and pathways to diagnosis of
                          endometriosis: a scoping review protocol. BMJ Open.
                          2021;11(6):e049390. Published 2021 Jun 24.
                          doi:10.1136/bmjopen-2021-049390
                          {'\u000A'}
                          {'\u000A'}Ahmed M. Soliman, Mahesh Fuldeore, and
                          Michael C. Snabes. Factors Associated with Time to
                          Endometriosis Diagnosis in the United States. Journal
                          of Women's Health. 2017 26:7, 788-797
                          https://www.liebertpub.com/doi/10.1089/jwh.2016.6003
                          {'\u000A'}
                          {'\u000A'}
                          https://www.endometriosis-uk.org/blog/endometriosis-awareness-month-launches-tackle-fact-54-don%E2%80%99t-know-about-endometriosis#:~:text=Awareness%20is%20higher%20among%20women,not%20know%20what%20endometriosis%20is.
                          {'\u000A'}
                          {'\u000A'}Koninckx PR, Meuleman C, Oosterlynck D,
                          Cornillie FJ. Diagnosis of deep endometriosis by
                          clinical examination during menstruation and plasma
                          CA-125 concentration. Fertil Steril. 1996;65:280–287.
                          {'\u000A'}
                          {'\u000A'}Zsuzsanna Kovács, Louise Glover, Fiona
                          Reidy, John MacSharry, Radka Saldova. Novel diagnostic
                          options for endometriosis – Based on the glycome and
                          microbiome. Journal of Advanced Research Volume 33.
                          2021. ISSN 2090-1232,
                          https://doi.org/10.1016/j.jare.2021.01.015.
                          {'\u000A'}
                          {'\u000A'}HirschMDuffyJDavisCJNieves
                          PlanaMKhanKSInternational Collaboration to Harmonise
                          Outcomes and Measures for EndometriosisDiagnostic
                          accuracy of cancer antigen 125 for endometriosis: a
                          systematic review and meta-analysis.
                          BJOG2016;123(11):17https://www.dotlab.com/science61–1768.
                          {'\u000A'}
                          {'\u000A'}https://www.dotlab.com/science
                          {'\u000A'}
                          {'\u000A'}http://citizenendo.org/phendo/
                          {'\u000A'}
                          {'\u000A'}Warren, L.A., Shih, A., Renteira, S.M. et
                          al. Analysis of menstrual effluent: diagnostic
                          potential for endometriosis. Mol Med 24, 1 (2018).
                          https://doi.org/10.1186/s10020-018-0009-6
                          {'\u000A'}
                          {'\u000A'}https://www.nextgenjane.com/
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
                              navigation.navigate('Endo101Week4Screen');
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
