import React from 'react';
import {Dimensions, KeyboardAvoidingView, View} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native-gesture-handler';
// import Purchases from 'react-native-purchases';
import {connect} from 'react-redux';

import {
  getLoginCredentials,
  deleteLoginCredentials,
} from '../../shared/firebaseUtils';
import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
import {removeAllPushNotifications} from '../../shared/NotificationManager';
import {PageSwiper, Button} from '../../components';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import AppIntro1 from '../../assets/amie/onboarding/appIntro1.svg';
import AppIntro2 from '../../assets/amie/onboarding/appIntro2.svg';
import AppIntro3 from '../../assets/amie/onboarding/appIntro3.svg';
import ArrowRight1 from '../../assets/ui/general/ArrowRight1.svg';
import {Images, theme, styles} from '../../constants';

import {getOS} from '../../shared/PlatformUtils';
import {Dialog} from 'react-native-elements';
import CustomDialog from '../../components/CustomDialog';
import AsyncStorage from '@react-native-async-storage/async-storage';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');
``;

class AppIntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;
    this.state = {
      visibleDialog: false,
      // assessment: []
    };
  }

  showModal = () => this.setState({visibleDialog: !this.state.visibleDialog});

  // handleTakeAssessment = () => {
  //   if (this.props.assessment != null && this.props.assessment.length != 0) {
  //     alert('Please login or sign up to view your endometriosis risk assessment results')
  //   } else {
  //     this.props.
  //     // this.props.navigation.navigate('App', {
  //     //   screen: 'Learn',
  //     //   params: {
  //     //     screen: 'LearnMain',
  //     //   },
  //     // });
  //   }
  // }

  goToLoginScreen = () => this.props.navigation.navigate('LoginMain');

  getCurrentTimestampMinutes = () => {
    return Math.floor(Date.now() / 60000.0);
  };

  resetLoginAfterError = (error = 'default') => {
    Promise.resolve()
      .then(() => auth.signOut(auth))
      .then(() => deleteLoginCredentials())
      //  FIXMETUNA:  add for revenuecat
      // .then(() => Purchases.logOut())
      .then(() => {
        this.props.navigation.reset({
          index: 0,
          routes: [
            {
              name: 'LoginMain',
              state: {
                routes: [{name: 'LoginMain'}],
              },
            },
          ],
        });
      })
      .catch(error => {
        console.log('ERROR APPINTRO2: ', error);
      });
  };

  async componentDidMount() {
    this.mixpanel.track('appIntroScreen_reached');

    try {
      // await AsyncStorage.setItem('GUEST_MODE', 'true');
      // let assessmentData = await AsyncStorage.getItem('SAVED_RISK_ASSESSMENTS');
      // assessmentData = JSON.parse(assessmentData);
      // this.setState({assessment: assessmentData || []});

      const {navigation} = this.props;
      //  if the user used rememberMe, then skip straight to login page
      //  because the user has already seen the intro
      // console.log('APP INTRO REMOVE ALL PN');
      removeAllPushNotifications();

      Promise.resolve()
        .then(() => {
          return getLoginCredentials();
        })
        .then(userCredentials => {
          if (
            userCredentials &&
            !(userCredentials == null) &&
            !(userCredentials.username == null) &&
            !(userCredentials.password == null) &&
            !(userCredentials.username == '') &&
            !(userCredentials.password == '')
          ) {
            navigation.navigate('RememberLogin');
          } else {
            deleteLoginCredentials();
          }
        })
        .catch(error => {
          console.log(error);
          this.resetLoginAfterError(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // const {navigation} = this.props;
    const onboardingSlidesData = [
      {
        key: 'one',
        title: `Struggling with a chronic illness? Lasa Health is here for you.`,
        text: 'Individuals with chronic illness are 2x more likely to suffer from anxiety and depression. We understand how hard it can be and are here to make your life a little easier.',
        image: Images.onboarding.OnboardingIntro1,
        svg: <AppIntro1 height={height * 0.85} />,
        backgroundColor: theme.COLORS.WHITE,
        // extraStyle: { width: 220, height: 250 },
      },
      {
        key: 'two',
        title: 'Lasa means sisterhood(nb)',
        text: 'In just 5 minutes a day, Lasa Health will walk you through every step of your health journey, starting with finding a community specific to your needs. We match you with a health coach and a group of friends with knowledge of your condition to support your journey.',
        image: Images.onboarding.OnboardingIntro2,
        svg: <AppIntro2 height={height * 0.65} style={{top: 0}} />,
        backgroundColor: theme.COLORS.WHITE,
        // extraStyle: { width: 200, height: 300 },
      },
      {
        key: 'three',
        title: 'Grow into a healthier you',
        text: "As you progress on your journey, you'll earn flowers to add to your virtual garden. With patience, work, and consistency, we hope both your garden and health will bloom.",
        image: Images.onboarding.OnboardingIntro3,
        svg: <AppIntro3 height={height * 0.65} style={{top: 0}} />,
        backgroundColor: theme.COLORS.WHITE,
        // extraStyle: { width: 200, height: 270 },
      },
    ];

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        // customHeaderPaddingHeight={-1000}
        customImageName={Images.ui.BackgroundGradient1}>
        <View
          style={{
            flex: 1,
            // position: 'relative',
            // alignContent: 'center',
          }}>
          <StatusBar translucent backgroundColor={theme.COLORS.TRANSPARENT} />
          {/* 
          <CustomDialog
            visibleFlag={this.state.visibleDialog}
            okAction={() => this.goToLoginScreen()}
            cancelAction={() => this.showModal()}
            title="Risk Assessment Info"
            content="Please login or sign up to view your endometriosis risk assessment results"
          /> */}

          <KeyboardAvoidingView
            style={{
              flex: 10,
            }}
            behavior="padding"
            enabled={iosPlatform()}>
            <PageSwiper
              customDebounceLength={500}
              renderItem={({item}) => {
                return (
                  <ScrollView
                    testID={'pageScrollview'}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: theme.SIZES.BASE,
                        backgroundColor: theme.COLORS.TRANSPARENT,
                      }}>
                      <View style={{height: height * 0.35}}>{item.svg}</View>

                      <View
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          borderRadius: theme.SIZES.BASE * 2,
                          elevation: 2,
                          backgroundColor: theme.COLORS.WHITE,
                          padding: theme.SIZES.BASE * 1.5,
                          marginBottom: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text
                          style={{
                            fontSize: theme.SIZES.H5 + 2,
                            color: theme.COLORS.TEXT1,
                            textAlign: 'center',
                            fontWeight: 'bold',
                          }}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            color: theme.COLORS.BLACK,
                            textAlign: 'center',
                            fontSize: theme.SIZES.B1,
                            marginVertical: theme.SIZES.BASE,
                            lineHeight: 22,
                          }}>
                          {item.text}
                        </Text>
                      </View>
                    </View>
                  </ScrollView>
                );
              }}
              data={onboardingSlidesData}
              onDone={() => this.props.navigation.replace('LoginMain')}
              customPaginationContainerStyle={{
                width: width * 0.5,
                justifyContent: 'center',
                alignItems: 'stretch',
                marginHorizontal: theme.SIZES.BASE * 5,
              }}
              renderDoneButton={() => {
                return (
                  <View
                    style={{
                      width: 50,
                      height: 45,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ArrowRight1
                      style={{
                        position: 'absolute',
                        color: theme.COLORS.SECONDARY3,
                        preserveAspectRatio: 'none',
                      }}
                      height={45}
                      width={45}
                    />
                  </View>
                );
              }}
              activeDotStyle={{backgroundColor: theme.COLORS.PRIMARY1}}
              dotStyle={{backgroundColor: theme.COLORS.PRIMARY2}}
              renderNextButton={() => {
                return (
                  <View
                    style={{
                      width: 50,
                      height: 45,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ArrowRight1
                      style={{
                        position: 'absolute',
                        color: theme.COLORS.SECONDARY3,
                        preserveAspectRatio: 'none',
                      }}
                      height={45}
                      width={45}
                    />
                  </View>
                );
              }}
            />
          </KeyboardAvoidingView>
          
          <View
            style={{
              // position: 'absolute',
              // bottom: height * 0.02,
              // left: 1,
              // right: 1,
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {/* <Button
              customDebounceLength={1000}
              testID="assessButton"
              style={{
                ...styles.button,
                width: width * 0.4,
                height: theme.SIZES.BASE * 2.5,
                marginHorizontal: 5,
              }}
              onPress={
                // () => this.showModal()
                this.state.assessment.length > 0
                  ? () =>
                      alert(
                        'Please login or sign up to view your endometriosis risk assessment results',
                      )
                  : () => this.props.navigation.navigate('AssessmentNew')
              }
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.HEADER,
              }}
              title={
                this.state.assessment.length > 0
                  ? 'View Assessment'
                  : 'Take Assessment'
              }
            /> */}
            <Button
              customDebounceLength={8000}
              testID="loginButton"
              style={{
                ...styles.button,
                width: width * 0.4,
                height: theme.SIZES.BASE * 2.5,
                marginHorizontal: 5,
              }}
              onPress={() => {
                this.props.navigation.navigate('LoginMain');
              }}
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.HEADER,
              }}
              title="Login"
            />
          </View>
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    session: state.session,
    // assessment: state.assessment.selectLog,
  };
};
export default connect(mapStateToProps)(AppIntroScreen);
