import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
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
  };

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
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
                        paddingHorizontal: theme.SIZES.BASE * 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: theme.SIZES.BASE * 2,
                        marginBottom: theme.SIZES.BASE,
                      }}>
                      <Text
                        style={{
                          // ...styles.boldTitle,
                          color: theme.COLORS.TEXT1,
                          fontSize: theme.SIZES.H5,
                          fontWeight: '600',
                          // textShadowColor: theme.COLORS.DARK_BLACK,
                          // textShadowRadius: 20,
                          textAlign: 'center',
                        }}>
                        Limitations
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 0.5,
                      }}>
                      <View
                        style={{
                          paddingHorizontal: theme.SIZES.BASE,
                        }}>
                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            // marginLeft: theme.SIZES.BASE,
                            // fontStyle: "italic",
                          }}>
                          Unfortunately, there is a limited amount of research
                          and scientific evidence about endometriosis and
                          nutrition. And there is a lot of misinformation about
                          nutrition and endometriosis. Many people online might
                          claim to have a specific diet protocol that will treat
                          endometriosis. Some of these plans might work for some
                          people but make things worse for other people.
                          {'\u000A'}
                          {'\u000A'}
                          You might also be experiencing GI symptoms that are
                          not due to endometriosis. For example, you might have
                          a food allergy, food sensitivity, irritable bowel
                          syndrome, or an autoimmune disease. Something that
                          works for one person might not work for another
                          person.
                          {'\u000A'}
                          {'\u000A'}
                          Finding the right way to nourish your body is highly
                          personal and will take time and effort. It involves
                          understanding your body and listening to how it reacts
                          to different foods.
                        </Text>

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
                              // if (this.state.correctAnswer) {
                              navigation.navigate('Endo101Week8Module2Page4');
                              // }
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
