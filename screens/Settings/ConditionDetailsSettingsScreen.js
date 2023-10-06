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
  yearSymptomsStarted: {
    visibleName: 'Year Symptoms Started',
    inputName: 'yearSymptomsStarted',
    inputType: 'datePicker',
    singleOptionList: [],
    multiOptionList: [],
    iconName: 'today-outline',
    iconType: 'ionicon',
  },
  yearDiagnosed: {
    visibleName: 'Year Diagnosed',
    inputName: 'yearDiagnosed',
    inputType: 'datePicker',
    singleOptionList: [],
    multiOptionList: [],
    iconName: 'calendar-outline',
    iconType: 'ionicon',
  },
  primarySymptoms: {
    visibleName: 'Primary Symptoms',
    inputName: 'primarySymptoms',
    inputType: 'multiOption',
    singleOptionList: [],
    multiOptionList: [
      'Painful periods',
      'Irregular periods',
      'Painful intercourse',
      'Periods longer than 7 days',
      'Heavy periods',
      'Infertility',
    ],
    iconName: 'bandage-outline',
    iconType: 'ionicon',
  },
};

class ConditionDetailsSettingsScreen extends React.Component {
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
    const {route} = this.props;
    const {conditionName} = route.params;

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
          {conditionName &&
            Object.entries(
              this.props.userProfile.OnboardingAnswers.onboarding
                .initialConditions[conditionName],
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
                      level1Path={'initialConditions'}
                      level2Path={conditionName}
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

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(ConditionDetailsSettingsScreen);
