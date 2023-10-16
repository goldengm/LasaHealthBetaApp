import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  ScrollView,
  ActivityIndicator,
  DeviceEventEmitter,
} from 'react-native';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';
import {v4 as uuidv4} from 'uuid';
import {theme, styles, Animations} from '../constants';
import {Text, Overlay, Chip} from 'react-native-elements';
import {
  Button,
  Card,
  Footer,
  CheckBox,
  Icon,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from '../components';

import {setAppIntroTutorialCompleteAction} from '../redux/actions/userProfileActions';
import {IconButton} from 'react-native-paper';
import {auth} from '../shared/firebaseUtils';
const {width, height} = Dimensions.get('screen');

export class AppIntroTutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorialReadyToAdvance: true,
    };
  }

  componentWillUnmount() {}

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  closeTutorial = () => {
    this.props.setModalVisible(false);
    this.props.dispatch(
      setAppIntroTutorialCompleteAction(this.props.pageNumber),
    );
  };

  getTutorialDescription = () => {
    if (this.props.pageNumber == 0) {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Welcome to Lasa Health!
          </Text>
          <Text>
            This is your Home landing page. Here you can track goals and
            progress.
          </Text>
        </View>
      );
    } else if (this.props.pageNumber == 1) {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Learn
          </Text>
          <Text>
            Here in the learn section you can find answers on various health
            topics, and can participate in educational courses.
          </Text>
        </View>
      );
    } else if (this.props.pageNumber == 2) {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Endo101 Week 1
          </Text>

          <Text>
            Here you can complete daily modules, learn about endometriosis, and
            track personal health goals.
          </Text>
          <Text>
            New modules unlock each week and are designed to only take a few
            minutes each day.
          </Text>
        </View>
      );
    } else if (this.props.pageNumber == 3) {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Insights
          </Text>
          <Text>
            Here on the Insights page, you can track and manage symptoms and
            flare ups, as well as view charts and personalized analytics about
            your health.
          </Text>
        </View>
      );
    } else if (this.props.pageNumber == 4) {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Community
          </Text>
          <Text>
            Here on the Community page you can share anonymous status updates
            and chat with friends on the same health journey. Everything is
            private by default, share what you feel comfortable with on your
            public profile in the upper left menu.
          </Text>
          <Text></Text>
          <Text>
            You are not alone! Find your people, we're growing every day!
          </Text>
        </View>
      );
    } else if (this.props.pageNumber == 5) {
      return (
        <Text
          style={{
            ...styles.subTitle,
            textAlign: 'center',
            marginVertical: 0,
            paddingVertical: 0,
          }}>
          Click on the garden view above
        </Text>
      );
    } else {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Garden
          </Text>

          <Text>Welcome to your personal wellness garden!</Text>
          <Text>
            Here you can unlock and plant flowers from the shop on the bottom
            right, and manage your garden on the bottom left. Make sure to keep
            your garden happy by watering with daily symptom logs, and earning
            seeds through the learn courses and other healthy lifestyle choices
          </Text>
          <Text></Text>
          <Text>
            Thanks for joining our family at Lasa Health, we're glad you're
            here.
          </Text>
        </View>
      );
    }
  };

  render() {
    const {navigation, modalVisible, setModalVisible, pageNumber, ...props} =
      this.props;

    return (
      <Overlay
        testID="testID"
        isVisible={modalVisible}
        onBackdropPress={() => {
          console.log('Overlay background pressed');
          this.closeTutorial();
        }}
        fullScreen={false}
        animationType="slide"
        backdropStyle={{
          backgroundColor: theme.COLORS.OVERLAY_BACKGROUND,
        }}
        overlayStyle={{
          backgroundColor: theme.COLORS.TRANSPARENT,
          elevation: 0,
          flex: 1,
          paddingVertical: 0,
          marginVertical: 0,
        }}>
        <TouchableWithoutFeedback
          style={{flex: 1}}
          onPress={() => this.closeTutorial()}>
          <View>
            <View
              style={{
                backgroundColor: theme.COLORS.TRANSPARENT,
              }}></View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: theme.COLORS.TRANSPARENT,

                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: theme.COLORS.WHITE,
                  borderRadius: 20,
                  marginHorizontal: theme.SIZES.BASE,
                  padding: theme.SIZES.BASE,
                  alignItems: 'center',
                  shadowColor: theme.COLORS.BLACK,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}>
                {this.getTutorialDescription()}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: theme.SIZES.BASE,
                    backgroundColor: theme.COLORS.WHITE,
                    width: width - theme.SIZES.BASE * 8,
                  }}>
                  <View
                    style={{
                      alignContent: 'center',
                      alignItems: 'center',
                      paddingTop: 0,
                      marginTop: 0,
                    }}>
                    <Button
                      style={{
                        ...styles.button,
                        width: width / 2.0 - theme.SIZES.BASE * 5.0,
                        fontSize: 16,
                        fontWeight: '700',
                        textAlign: 'center',
                      }}
                      titleStyle={{
                        color: theme.COLORS.WHITE,
                        fontFamily: theme.FONTS.TEXT,
                      }}
                      title="Close"
                      onPress={() => {
                        this.closeTutorial();
                      }}></Button>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 80,
                  backgroundColor: theme.COLORS.TRANSPARENT,
                }}></View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Overlay>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
  };
};
export default connect(mapStateToProps)(AppIntroTutorial);
