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
                          {'\u000A'}Office on Women's Health, U.S. Department of
                          Health and Human Services, womenshealth.gov
                          {'\u000A'}
                          {'\u000A'}Zondervan et al. N Engl J Med 2020;
                          382:1244-1256,
                          https://www.nejm.org/doi/full/10.1056/NEJMra1810764
                          {'\u000A'}
                          {'\u000A'}Buck, L.G.M., Hediger, M.L., Peterson, C.M.,
                          Croughan, M., Sundaram, R., Stanford, J., Chen, Z., et
                          al. (2011). Incidence of endometriosis by study
                          population and diagnostic method: the ENDO study.
                          Fertility and Sterility; 96(2): 360-5.
                          {'\u000A'}
                          {'\u000A'}Ahn SH, Singh V, Tayade C. Biomarkers in
                          endometriosis: challenges and opportunities. Fertil
                          Steril. 2017 Mar;107(3):523-532. doi:
                          10.1016/j.fertnstert.2017.01.009. Epub 2017 Feb 8.
                          PMID: 28189296.
                          {'\u000A'}
                          {'\u000A'}American College of Obstetricians and
                          Gynecologists. (2010). Management of endometriosis
                          (Practice Bulletin No. 114): News release. Obstetrics
                          & Gynecology, 116(1), 223–236
                          {'\u000A'}
                          {'\u000A'}Christina Rei, Thomas Williams, Michael
                          Feloney, "Endometriosis in a Man as a Rare Source of
                          Abdominal Pain: A Case Report and Review of the
                          Literature", Case Reports in Obstetrics and
                          Gynecology, vol. 2018, Article ID 2083121, 6 pages,
                          2018. https://doi.org/10.1155/2018/2083121
                          {'\u000A'}
                          {'\u000A'}National Institute on Alcohol Abuse and
                          Alcoholism. (2003). Alcohol's Effects on Female
                          Reproductive Function.
                          {'\u000A'}
                          {'\u000A'}Schliep, K., et al. (2012). Caffeinated
                          beverage intake and reproductive hormones among
                          premenopausal women in the BioCycle Study . American
                          Journal of Clinical Nutrition; 95(2): 488–497. (Int’l
                          Endometriosis Working Group, 2021). Definition
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
                              navigation.navigate('Endo101Week1Screen');
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
