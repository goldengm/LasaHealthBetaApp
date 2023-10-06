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
} from '../components';
import {setAppIntroTutorialCompleteAction} from '../redux/actions/userProfileActions';
import {addFollowUpHealthSurveyAction} from '../redux/actions/userProfileActions';
import {IconButton} from 'react-native-paper';
import {auth} from '../shared/firebaseUtils';

const {width, height} = Dimensions.get('screen');

export class SurveyModal extends React.Component {
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
  };

  getTutorialDescription = () => {
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
          Health Survey
        </Text>
        <Text>
          Would you be willing to take a quick health survey to help us improve
          Lasa Health?
        </Text>
      </View>
    );
  };

  render() {
    const {navigation, modalVisible, setModalVisible, pageNumber, ...props} =
      this.props;

    return (
      <Overlay
        testID="surveyModalID"
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
        <View style={{flex: 1}}>
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
                  justifyContent: 'space-evenly',
                  marginTop: theme.SIZES.BASE,

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
                    title="No thank you"
                    onPress={() => {
                      this.props.dispatch(
                        addFollowUpHealthSurveyAction(this.setupBeginTS, {}),
                      );
                      this.closeTutorial();
                    }}></Button>
                </View>
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
                    title="Sure"
                    onPress={() => {
                      this.closeTutorial();
                      this.props.navigation.navigate({
                        name: 'Learn',
                        params: {
                          screen: 'HealthSurveyFollowUpScreen',
                        },
                      });
                    }}></Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Overlay>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};
export default connect(mapStateToProps)(SurveyModal);
