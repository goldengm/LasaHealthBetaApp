import React, {useState, useEffect} from 'react';
import {
  // Dimensions,
  View,
  DeviceEventEmitter,
} from 'react-native';
import {connect} from 'react-redux';
import XDate from 'xdate';
import {auth} from '../shared/firebaseUtils';
import ChatbotModal from '../chatbot/ChatbotModal';
import {ToastContext} from '../components/ToastProvider';
import AppIntroTutorial from '../shared/AppIntroTutorial';
import SurveyModal from '../shared/SurveyModal';

// import {getOS} from '../shared/PlatformUtils';
// const iosPlatform = () => getOS() == 'ios';
// const {width, height} = Dimensions.get('screen');

function isSurveyModalVisible(userProfile) {
  //  FIXMETUNA: need to check and only activate once a month after the first month

  if (Object.keys(userProfile.introHealthSurvey).length > 0) {
    const initialSurveyTS = parseInt(
      Object.keys(userProfile.introHealthSurvey)[0],
    );
    const numFollowUpSurveys = Object.keys(
      userProfile.followUpHealthSurveys,
    ).length;
    const currentTSObj = new XDate();

    //  diff months should be negative since the initial surveyTS is in the past
    const numMonthsSinceIntroDiff = currentTSObj.diffMonths(initialSurveyTS);
    if (numMonthsSinceIntroDiff < 0) {
      const numMonthsSinceIntro = Math.floor(numMonthsSinceIntroDiff * -1.0);
      if (numMonthsSinceIntro > numFollowUpSurveys) {
        return true;
      }
    }
  }
  return false;
}

function SessionControllerWrapped(props) {
  const {
    navigation,
    toast,
    userProfile,
    // amieModalVisible,
    // customOnAmieModalBackdropPress,
  } = props;

  const [amieModalVisible, setAmieModalVisible] = useState(false);

  const isSurveyModalVisibleTMP = isSurveyModalVisible(userProfile);

  const [appIntroTutorialVisible, setAppIntroTutorialVisible] = useState(false);
  const [tutorialPageNumber, setTutorialPageNumber] = useState(0);
  const [surveyModalVisible, setSurveyModalVisible] = useState(
    isSurveyModalVisibleTMP,
  );

  useEffect(() => {
    // componentwillmount in functional component.

    const _unsubscribeToast = DeviceEventEmitter.addListener(
      'event.toastNotification',
      eventData => {
        console.log('TOAST NOTIFICATION TRIGGERED');

        toast.show(eventData.text, {
          containerStyle: eventData.containerStyle,
          textStyle: eventData.textStyle,
        });

        // setAmieModalVisible(true);
      },
    );

    const _unsubscribeAuth = auth.onAuthStateChanged(function (user) {
      if (user) {
      } else {
        // No user is signed in.
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Login',
              state: {
                routes: [{name: 'LoginMain'}],
              },
            },
          ],
        });
      }
    });

    const _unsubscribeShowTutorialPage = DeviceEventEmitter.addListener(
      'event.showtutorialPage',
      eventData => {
        console.log('Tutorial page TRIGGERED');
        setTutorialPageNumber(eventData.pageNumber);
        setAppIntroTutorialVisible(true);
      },
    );

    return () => {
      // Don't forget to unsubscribe, typically in componentWillUnmount
      _unsubscribeToast.remove();
      _unsubscribeShowTutorialPage.remove();
      _unsubscribeAuth();
    };
  }, []);

  return (
    <View>
      <ChatbotModal
        navigation={navigation}
        modalVisible={amieModalVisible}
        setModalVisible={setAmieModalVisible}
        // customOnPressText={"Get Started"}
        customOnBackdropPress={() => {
          // console.log('Amie Modal background pressed********');
          return setAmieModalVisible(false);
        }}
      />
      {/* <ChatbotModal
           navigation={navigation}
           modalVisible={amieModalVisible}
           // customOnPressText={"Get Started"}
           customOnBackdropPress={customOnAmieModalBackdropPress}
         /> */}

      <AppIntroTutorial
        navigation={navigation}
        modalVisible={appIntroTutorialVisible}
        setModalVisible={setAppIntroTutorialVisible}
        pageNumber={tutorialPageNumber}
      />
      <SurveyModal
        navigation={navigation}
        modalVisible={surveyModalVisible}
        setModalVisible={setSurveyModalVisible}
      />
    </View>
  );

  // render() {
  //   const {
  //     drawerPosition,
  //     navigation,
  //     profile,
  //     focused,
  //     state,
  //     localState,
  //     dispatchPassed,
  //     amieModalVisible,
  //     customOnAmieModalBackdropPress,
  //     // gardenControllerRef,
  //   } = this.props;

  //   return (
  //     <View>
  //       {/* <ChatbotModal
  //         navigation={navigation}
  //         modalVisible={amieModalVisible}
  //         // customOnPressText={"Get Started"}
  //         customOnBackdropPress={customOnAmieModalBackdropPress}
  //       /> */}
  //     </View>
  //   );
  // }
}

function SessionController(props) {
  return (
    <ToastContext.Consumer>
      {toast => (
        <View>
          <SessionControllerWrapped toast={toast} {...props} />
        </View>
      )}
    </ToastContext.Consumer>
  );
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(SessionController);
