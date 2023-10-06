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

const initialSymptomKeys = {
  'Painful periods': {
    inputName: 'Painful periods',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'thunderstorm-outline',
    iconType: 'ionicon',
  },
  'Irregular periods': {
    inputName: 'Irregular periods',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'calendar-outline',
    iconType: 'ionicon',
  },
  'Painful intercourse': {
    inputName: 'Painful intercourse',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'transgender-outline',
    iconType: 'ionicon',
  },
  'Periods longer than 7 days': {
    inputName: 'Periods longer than 7 days',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'trending-down-outline',
    iconType: 'ionicon',
  },
  'Heavy periods': {
    inputName: 'Heavy periods',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'water-outline',
    iconType: 'ionicon',
  },
  Infertility: {
    inputName: 'Infertility',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'woman-outline',
    iconType: 'ionicon',
  },
};

class InitialSymptomSettingsScreen extends React.Component {
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
          <EditableListitemCard
            name={'Edit Initial Symptoms'}
            value={'Update here'}
            iconName={'create-outline'}
            iconType={'ionicon'}
            iconBackgroundColor={this.getIconColor(1)}
            dispatch={this.props.dispatch}
            inputName={'initialSymptoms'}
            inputType={'multiOption'}
            multiOptionList={Object.keys(initialSymptomKeys)}
            updateMultiOptionIndividually={true}
          />
          {Object.entries(
            this.props.userProfile.OnboardingAnswers.onboarding.initialSymptoms,
          ).map((val, index) => {
            if (Object.keys(initialSymptomKeys).includes(val[0]) && val[1]) {
              return (
                <View
                  key={index}
                  style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                  <EditableListitemCard
                    name={val[0]}
                    value={val[1]}
                    iconName={initialSymptomKeys[val[0]]['iconName']}
                    iconType={initialSymptomKeys[val[0]]['iconType']}
                    iconBackgroundColor={this.getIconColor(index)}
                    dispatch={this.props.dispatch}
                    inputName={initialSymptomKeys[val[0]]['inputName']}
                    inputType={initialSymptomKeys[val[0]]['inputType']}
                    singleOptionList={
                      initialSymptomKeys[val[0]]['singleOptionList']
                    }
                    multiOptionList={
                      initialSymptomKeys[val[0]]['multiOptionList']
                    }
                    singleOptionIsBoolean={true}
                    level1Path={'initialSymptoms'}
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
export default connect(mapStateToProps)(InitialSymptomSettingsScreen);
