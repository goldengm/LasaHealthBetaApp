import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {generateDataTable} from '../../../../../../shared/TextUtils';
import {connect} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../../../../shared/ScreenTemplateWrapper';
import {getOS} from '../../../../../../shared/PlatformUtils';

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
                        }}>
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: '600',
                            textAlign: 'center',
                          }}>
                          Over the Counter Pain Relievers
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          There are three primary types of NSAIDs - Ibuprofen,
                          Naproxen, and Aspirin. Acetaminophen is a non-NSAID
                          pain reliever and is not as effective because it does
                          not have anti-inflammatory effects. However, it can be
                          taken at the same time as a NSAID medication and can
                          reduce general body aches and pains.
                          {'\u000A'}
                        </Text>

                        {generateDataTable([
                          [
                            '',
                            'Brand Names',
                            'Recommended Dose',
                            'Benefits',
                            'Side Effects',
                          ],
                          [
                            'Ibuprofen (NSAID)',
                            'Advil, Motrin',
                            '200-400 mg every 6 hours',
                            `Most effective at improving pain due to menstrual cramps. 
                            
                            Also improves headaches, sore muscles, and joint inflammation.`,
                            `Side effects can include stomach upset, dizziness, nausea, and heartburn. 
                            
                            Side effects are typically less severe because it is faster acting.`,
                          ],
                          [
                            'Naproxen (NSAID)',
                            'Aleve',
                            '220 mg every 8-12 hours',
                            'Helps arthritis, long-lasting headaches, and other inflammation-based pains.',
                            'Side effects can include stomach upset, dizziness, nausea, and heartburn.',
                          ],
                          [
                            'Aspirin (NSAID)',
                            'Bayer Aspirin',
                            '325-650 mg every 4 hours',
                            'Improves minor aches, pains, and inflammation.',
                            `Side effects can include stomach upset, dizziness, nausea, and heartburn. 
                            
                            Not recommended as a first-choice pain reliever.`,
                          ],
                          [
                            'Acetaminophen',
                            'Tylenol',
                            '650-1000 mg every 4-6 hours',
                            `Reduces general aches and headaches.
                            
                            Not an NSAID, so it can be used in combination with an NSAID medication.
                            
                            Does not have anti-inflammatory benefits and will not reduce pain associated with swelling.`,
                            `Liver damage, liver injury/failure, nausea, vomiting, rash
                            
                            Not recommended if you have liver disease or drink alcohol regularly.`,
                          ],
                        ])}

                        <View
                          style={{
                            paddingHorizontal: theme.SIZES.BASE * 2,
                            alignItems: 'center',
                            paddingVertical: theme.SIZES.BASE * 2,
                          }}>
                          <Button
                            testID="nextButton"
                            style={{
                              ...styles.button,
                              width: width - theme.SIZES.BASE * 4,
                            }}
                            titleStyle={{
                              color: theme.COLORS.WHITE,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title="Next"
                            onPress={() => {
                              navigation.navigate('Endo101Week6Module4Page4');
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

const mapStateToProps = (state, props) => {
  return {
    endoCourse: state.learn.endo101Course,
  };
};
export default connect(mapStateToProps)(LearnCoursePlaceholderScreen);
