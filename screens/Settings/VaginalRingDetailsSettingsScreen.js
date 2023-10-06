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
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

const contraceptionKeys = {
  usage: {
    visibleName: 'Usage',
    inputName: 'usage',
    inputType: 'singleOption',
    singleOptionList: [
      {title: 'Continuous - 3 week and immediately replace'},
      {title: '4 week cycle - 3 weeks and leave out for one week'},
      {
        title:
          'Extended cycling - 3 weeks and immediately replace. One week break every 9 weeks / 3 rings.',
      },
    ],
    multiOptionList: [],
    iconName: 'cloudy-night-outline',
    iconType: 'ionicon',
  },
  lastRingStartDate: {
    visibleName: 'Last Ring Start Date',
    inputName: 'lastRingStartDate',
    inputType: 'datePicker',
    singleOptionList: [],
    multiOptionList: [],
    iconName: 'today-outline',
    iconType: 'ionicon',
  },
  ringReminder: {
    visibleName: 'Ring Reminder',
    inputName: 'ringReminder',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'chatbubble-outline',
    iconType: 'ionicon',
  },
  reminderTime: {
    visibleName: 'Reminder Time',
    inputName: 'reminderTime',
    inputType: 'timePicker',
    singleOptionList: [],
    multiOptionList: [],
    iconName: 'alarm-outline',
    iconType: 'ionicon',
  },
};

class VaginalRingDetailsSettingsScreen extends React.Component {
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
            this.props.userProfile.OnboardingAnswers.onboarding.contraception
              .vaginalRingDetails,
          ).map((val, index) => {
            if (Object.keys(contraceptionKeys).includes(val[0])) {
              return (
                <View
                  key={index}
                  style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                  <EditableListitemCard
                    name={contraceptionKeys[val[0]]['visibleName']}
                    value={val[1]}
                    iconName={contraceptionKeys[val[0]]['iconName']}
                    iconType={contraceptionKeys[val[0]]['iconType']}
                    iconBackgroundColor={this.getIconColor(index)}
                    dispatch={this.props.dispatch}
                    inputName={contraceptionKeys[val[0]]['inputName']}
                    inputType={contraceptionKeys[val[0]]['inputType']}
                    singleOptionList={
                      contraceptionKeys[val[0]]['singleOptionList']
                    }
                    multiOptionList={
                      contraceptionKeys[val[0]]['multiOptionList']
                    }
                    singleOptionIsBoolean={true}
                    level1Path={'contraception'}
                    level2Path={'vaginalRingDetails'}
                  />
                </View>
              );
            } else {
              return null;
            }
          })}
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

const mapStateToProps = state => {
  return {
    userProfile: state.userProfile,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(VaginalRingDetailsSettingsScreen);
