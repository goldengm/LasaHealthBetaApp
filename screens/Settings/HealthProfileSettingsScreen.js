import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';

import {theme, styles, Images} from '../../constants';
import {
  EditableListitemCard,
  Footer,
  RoundedTopContainer,
} from '../../components';
import {regenerateMenstrualCycleAction} from '../../redux/actions/userAnalyticsActions';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

const numberList = [
  {title: '0'},
  {title: '1'},
  {title: '2'},
  {title: '3'},
  {title: '4'},
  {title: '5'},
  {title: '6'},
  {title: '7'},
  {title: '8'},
  {title: '9'},
  {title: '10'},
  {title: '11'},
  {title: '12'},
  {title: '13'},
  {title: '14'},
  {title: '15'},
  {title: '16'},
  {title: '17'},
  {title: '18'},
  {title: '19'},
  {title: '20'},
  {title: '21'},
  {title: '22'},
  {title: '23'},
  {title: '24'},
  {title: '25'},
  {title: '26'},
  {title: '27'},
  {title: '28'},
  {title: '29'},
  {title: '30'},
  {title: '31'},
  {title: '32'},
  {title: '33'},
  {title: '34'},
  {title: '35'},
  {title: '36'},
  {title: '37'},
  {title: '38'},
  {title: '39'},
  {title: '40'},
  {title: '41'},
  {title: '42'},
  {title: '43'},
  {title: '44'},
  {title: '45'},
  {title: '46'},
  {title: '47'},
  {title: '48'},
  {title: '49'},
  {title: '50'},
  {title: '51'},
  {title: '52'},
  {title: '53'},
  {title: '54'},
  {title: '55'},
  {title: '56'},
  {title: '57'},
  {title: '58'},
  {title: '59'},
  {title: '60'},
  {title: '61'},
  {title: '62'},
  {title: '63'},
  {title: '64'},
  {title: '65'},
  {title: '66'},
  {title: '67'},
  {title: '68'},
  {title: '69'},
  {title: '70'},
  {title: '71'},
  {title: '72'},
  {title: '73'},
  {title: '74'},
  {title: '75'},
  {title: '76'},
  {title: '77'},
  {title: '78'},
  {title: '79'},
  {title: '80'},
  {title: '81'},
  {title: '82'},
  {title: '83'},
  {title: '84'},
  {title: '85'},
  {title: '86'},
  {title: '87'},
  {title: '88'},
  {title: '89'},
  {title: '90'},
  {title: '91'},
  {title: '92'},
  {title: '93'},
  {title: '94'},
  {title: '95'},
  {title: '96'},
  {title: '97'},
  {title: '98'},
  {title: '99'},
  {title: '100'},
];

const healthInfoKeys = {
  menstrationStatus: {
    visibleName: 'Menstruation Status',
    inputName: 'menstrationStatus',
    inputType: 'singleOption',
    singleOptionList: [
      {title: 'Yes, currently'},
      {title: 'Previously, but not anymore'},
      {title: 'No, never'},
    ],
    multiOptionList: [],
    iconName: 'aperture-outline',
    iconType: 'ionicon',
    regenerateMenstrualCycleAfterSelection: true,
  },
  pregnancyStatus: {
    visibleName: 'Pregnancy Status',
    inputName: 'pregnancyStatus',
    inputType: 'singleOption',
    singleOptionList: [
      {title: 'Currently Pregnant'},
      {title: 'Trying to conceive'},
      {title: 'None'},
    ],
    multiOptionList: [],
    iconName: 'egg-outline',
    iconType: 'ionicon',
    regenerateMenstrualCycleAfterSelection: true,
  },
};

const mentruationKeys = {
  firstDayOfLastPeriod: {
    visibleName: 'First Day of Your Last Period (before using the app)',
    inputName: 'firstDayOfLastPeriod',
    inputType: 'datePicker',
    singleOptionList: [],
    multiOptionList: [],
    iconName: 'calendar-outline',
    iconType: 'ionicon',
    regenerateMenstrualCycleAfterSelection: true,
  },
  avgLenOfPeriod: {
    visibleName: 'Average Length of Period',
    inputName: 'avgLenOfPeriod',
    inputType: 'singleOption',
    singleOptionList: numberList,
    multiOptionList: [],
    iconName: 'refresh-outline',
    iconType: 'ionicon',
    regenerateMenstrualCycleAfterSelection: true,
  },
  avgLenOfCycle: {
    visibleName: 'Average Length of Menstrual Cycle',
    inputName: 'avgLenOfCycle',
    inputType: 'singleOption',
    singleOptionList: numberList,
    multiOptionList: [],
    iconName: 'reload-circle-outline',
    iconType: 'ionicon',
    regenerateMenstrualCycleAfterSelection: true,
  },
  startAgePeriod: {
    visibleName: 'Age Period Started',
    inputName: 'startAgePeriod',
    inputType: 'singleOption',
    singleOptionList: numberList,
    multiOptionList: [],
    iconName: 'rainy-outline',
    iconType: 'ionicon',
    regenerateMenstrualCycleAfterSelection: false,
  },
};

sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

class HealthProfileSettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderTMP: false,
    };
  }

  getIconColor = index => {
    if (index % 3 == 0) {
      return theme.COLORS.PRIMARY4;
    } else if (index % 3 == 1) {
      return theme.COLORS.SECONDARY3;
    } else {
      return theme.COLORS.TERTIARY2;
    }
  };

  renderSettings = navigation => {
    return (
      <RoundedTopContainer
        style={{
          ...styles.group,
          minHeight: height - theme.SIZES.BASE * 8.6,
          marginTop: theme.SIZES.BASE * 0.8,
        }}>
        <View
          style={{
            marginHorizontal: theme.SIZES.BASE,
            marginVertical: theme.SIZES.BASE * 0.5,
          }}>
          {Object.entries(
            this.props.userProfile.OnboardingAnswers.onboarding,
          ).map((val, index) => {
            if (Object.keys(healthInfoKeys).includes(val[0])) {
              return (
                <View
                  key={index}
                  style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                  <EditableListitemCard
                    name={healthInfoKeys[val[0]]['visibleName']}
                    value={val[1]}
                    iconName={healthInfoKeys[val[0]]['iconName']}
                    iconType={healthInfoKeys[val[0]]['iconType']}
                    iconBackgroundColor={this.getIconColor(index)}
                    dispatch={this.props.dispatch}
                    inputName={healthInfoKeys[val[0]]['inputName']}
                    inputType={healthInfoKeys[val[0]]['inputType']}
                    singleOptionList={
                      healthInfoKeys[val[0]]['singleOptionList']
                    }
                    multiOptionList={healthInfoKeys[val[0]]['multiOptionList']}
                    customOnPressUpdate={() => {
                      if (
                        healthInfoKeys[val[0]][
                          'regenerateMenstrualCycleAfterSelection'
                        ]
                      ) {
                        Promise.resolve()
                          .then(() => sleep(1000))
                          .then(() =>
                            this.props.dispatch(
                              regenerateMenstrualCycleAction(
                                this.props.trackingLog,
                                this.props.userProfile,
                              ),
                            ),
                          );
                      }
                    }}
                  />
                </View>
              );
            } else {
              return null;
            }
          })}

          {Object.entries(
            this.props.userProfile.OnboardingAnswers.onboarding.menstruation,
          ).map((val, index) => {
            if (Object.keys(mentruationKeys).includes(val[0])) {
              return (
                <View
                  key={index}
                  style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                  <EditableListitemCard
                    level1Path="menstruation"
                    name={mentruationKeys[val[0]]['visibleName']}
                    value={val[1]}
                    iconName={mentruationKeys[val[0]]['iconName']}
                    iconType={mentruationKeys[val[0]]['iconType']}
                    iconBackgroundColor={this.getIconColor(index)}
                    dispatch={this.props.dispatch}
                    inputName={mentruationKeys[val[0]]['inputName']}
                    inputType={mentruationKeys[val[0]]['inputType']}
                    singleOptionList={
                      mentruationKeys[val[0]]['singleOptionList']
                    }
                    multiOptionList={mentruationKeys[val[0]]['multiOptionList']}
                    customOnPressUpdate={() => {
                      if (
                        mentruationKeys[val[0]][
                          'regenerateMenstrualCycleAfterSelection'
                        ]
                      ) {
                        Promise.resolve()
                          .then(() => sleep(1000))
                          .then(() =>
                            this.props.dispatch(
                              regenerateMenstrualCycleAction(
                                this.props.trackingLog,
                                this.props.userProfile,
                              ),
                            ),
                          );
                      }
                    }}
                  />
                </View>
              );
            } else {
              return null;
            }
          })}

          <View style={{marginVertical: theme.SIZES.BASE * 0.5}}>
            <EditableListitemCard
              name={'Contraception'}
              value={'View contraception options'}
              iconName={'stop-outline'}
              iconType={'ionicon'}
              iconBackgroundColor={this.getIconColor(0)}
              dispatch={this.props.dispatch}
              inputName="None"
              inputType="None"
              customOnPress={() =>
                navigation.navigate('ContraceptionSettingsScreen')
              }
            />
          </View>

          <View style={{marginVertical: theme.SIZES.BASE * 0.5}}>
            <EditableListitemCard
              name={'Initial Symptoms'}
              value={'View initial symptom options'}
              iconName={'thermometer-outline'}
              iconType={'ionicon'}
              iconBackgroundColor={this.getIconColor(0)}
              dispatch={this.props.dispatch}
              inputName="None"
              inputType="None"
              customOnPress={() =>
                navigation.navigate('InitialSymptomSettingsScreen')
              }
            />
          </View>

          <View style={{marginVertical: theme.SIZES.BASE * 0.5}}>
            <EditableListitemCard
              name={'Health Conditions'}
              value={'View initial condition options'}
              iconName={'book-outline'}
              iconType={'ionicon'}
              iconBackgroundColor={this.getIconColor(0)}
              dispatch={this.props.dispatch}
              inputName="None"
              inputType="None"
              customOnPress={() =>
                navigation.navigate('InitialConditionsSettingsScreen')
              }
            />
          </View>
        </View>
      </RoundedTopContainer>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customImageName={Images.ui.BackgroundGradient1}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
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
                contentContainerStyle={{width}}>
                {this.renderSettings(navigation)}
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Settings" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    trackingLog: state.trackLog.logHistory,
    userProfile: state.userProfile,
    connect: state.connect,
    localState: state,
  };
};
export default connect(mapStateToProps)(HealthProfileSettingsScreen);
