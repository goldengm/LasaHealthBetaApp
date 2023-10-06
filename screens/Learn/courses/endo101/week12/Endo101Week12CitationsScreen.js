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
                          {'\u000A'}Chronic illness and mental health:
                          Recognizing and treating depression. National
                          Institute of Mental Health.
                          https://www.nimh.nih.gov/health/publications/chronic-illness-mental-health#:~:text=Chronic%20illnesses%20such%20as%20cancer,develop%20a%20mental%20health%20condition.
                          Accessed September 2, 2022.
                          {'\u000A'}
                          {'\u000A'}Norinho P, Martins MM, Ferreira H. A
                          systematic review on the effects of endometriosis on
                          sexuality and couple's relationship. Facts, views &
                          vision in ObGyn.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7580264/#:~:text=analysis%20is%20lacking.-,Women%20with%20endometriosis%20report%20a%20significant%20effect%20of%20the%20disease,and%20the%20relationship%20in%20general.
                          Published October 8, 2020. Accessed September 2, 2022.
                          {'\u000A'}
                          {'\u000A'}Sperschneider ML, Hengartner MP,
                          Kohl-Schwartz A, et al. Does endometriosis affect
                          professional life? A matched case-control study in
                          Switzerland, Germany and Austria. BMJ open.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6340011/#:~:text=About%2040%25%20of%20women%20with,due%20to%20their%20chronic%20disease.
                          Published January 9, 2019. Accessed September 2, 2022.
                          {'\u000A'}
                          {'\u000A'}Karren KJ. Mind/Body Health: The Effects of
                          Attitudes, Emotions and Relationships. Pearson; 2014.
                          {'\u000A'}
                          {'\u000A'}Statistics on remote workers that will
                          surprise you (2022). Apollo Technical LLC.
                          https://www.apollotechnical.com/statistics-on-remote-workers/#:~:text=Accelerating%20the%20remote%20work%20trend,increase%20from%20pre%2Dpandemic%20levels.
                          Published May 31, 2022. Accessed September 2, 2022.
                          {'\u000A'}
                          {'\u000A'}Norinho P, Martins MM, Ferreira H. A
                          systematic review on the effects of endometriosis on
                          sexuality and couple's relationship. Facts, views &
                          vision in ObGyn.
                          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7580264/.
                          Published October 8, 2020. Accessed September 2, 2022.
                          {'\u000A'}
                          {'\u000A'}Van Niekerk L. Emotional intimacy, empathic
                          concern, and relationship satisfaction in women with
                          endometriosis and their partners. Taylor & Francis.
                          https://www.tandfonline.com/doi/abs/10.1080/0167482X.2020.1774547.
                          Published May 20, 2020. Accessed September 2, 2022.
                          {'\u000A'}
                          {'\u000A'}Dewitte M, Mayer A. Exploring the link
                          between daily relationship quality, sexual desire, and
                          sexual activity in couples - archives of sexual
                          behavior. SpringerLink.
                          https://link.springer.com/article/10.1007/s10508-018-1175-x?crsi=662496648&cicada_org_src=healthwebmagazine.com&cicada_org_mdm=direct.
                          Published March 1, 2018. Accessed September 2, 2022.
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
                              navigation.navigate('Endo101Week12Screen');
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
