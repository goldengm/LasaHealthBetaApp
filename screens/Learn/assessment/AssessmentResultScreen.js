import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text, LinearProgress} from 'react-native-elements';
import {styles, theme, Images} from '../../../constants';
import {Button} from '../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../shared/ScreenTemplateWrapper';
import {getOS} from '../../../shared/PlatformUtils';
import {dummyJSON} from '../../../constants/learn/AssessmentData';
import {ResetAssessmentResults} from '../../../redux/actions/assessmentActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const iosPlatform = () => getOS() == 'ios';
const {width} = Dimensions.get('screen');

class AssessmentResultScreen extends React.Component {
  handleRetake = () => {
    this.props.dispatch(ResetAssessmentResults());
    this.props.navigation.navigate('AssessmentNew');
  };

  componentDidMount() {
    this.setGuest();
  }

  state = {
    guest: '',
  };

  setGuest = async () => {
    // let mode = await AsyncStorage.getItem('GUEST_MODE');
    // console.log('mode', mode);
    // this.setState({guest: mode});
  };

  render() {
    const {navigation, route} = this.props;
    console.log('result', this.props.assessment);
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
                    <LinearProgress
                      style={{
                        marginTop: theme.SIZES.BASE + 10,
                        height: 8,
                        width: width * 0.8,
                        borderRadius: 16,
                        alignSelf: 'center',
                      }}
                      color={theme.COLORS.INFO}
                      trackColor={theme.COLORS.MUTED}
                      value={1}
                      variant="determinate"
                    />
                    <Button
                      testID="nextButton"
                      style={{
                        ...styles.button,
                        width: width - theme.SIZES.BASE * 3,
                        marginTop: theme.SIZES.BASE * 2,
                        alignSelf: 'center',
                      }}
                      titleStyle={{
                        color: theme.COLORS.WHITE,
                        fontFamily: theme.FONTS.TEXT,
                      }}
                      title="Retake Assessment"
                      onPress={() => {
                        this.handleRetake();
                      }}></Button>
                    <Button
                      testID="finishButton"
                      style={{
                        ...styles.button,
                        width: width - theme.SIZES.BASE * 3,
                        marginTop: theme.SIZES.BASE,
                        alignSelf: 'center',
                      }}
                      titleStyle={{
                        color: theme.COLORS.WHITE,
                        fontFamily: theme.FONTS.TEXT,
                      }}
                      title={
                        this.state.guest == 'true'
                          ? 'Login'
                          : 'Finish Assessment'
                      }
                      onPress={() => {
                        if (this.state.guest == 'true') {
                          return navigation.navigate('LoginMain');
                        } else {
                          return navigation.navigate('LearnMain');
                        }
                      }}></Button>
                    <Text
                      style={{
                        // ...styles.boldTitle,
                        color: theme.COLORS.TEXT1,
                        fontSize: theme.SIZES.H5,
                        fontWeight: '600',
                        // textShadowColor: theme.COLORS.DARK_BLACK,
                        // textShadowRadius: 20,
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        marginTop: theme.SIZES.BASE * 2,
                        marginBottom: theme.SIZES.BASE * 10,
                      }}>
                      Conguratulations! You answered all of questions.
                      {this.props.assessment.map(
                        (item, index) =>
                          '\n' +
                          `Page ${index + 1} :` +
                          item.map(
                            (sub_item, sub_index) =>
                              dummyJSON[index]['answers'][sub_item] + '\n',
                          ),
                      )}
                    </Text>
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
    userProfile: state.userProfile,
    // assessment: state.assessment.selectLog,
  };
};

export default connect(mapStateToProps)(AssessmentResultScreen);
