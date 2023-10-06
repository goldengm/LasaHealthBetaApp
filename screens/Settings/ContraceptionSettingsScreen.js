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
  Implant: {
    inputName: 'Implant',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  IUD: {
    inputName: 'IUD',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  Shot: {
    inputName: 'Shot',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  'Vaginal Ring': {
    inputName: 'Vaginal Ring',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  Patch: {
    inputName: 'Patch',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  Pill: {
    inputName: 'Pill',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  Condom: {
    inputName: 'Condom',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  'Fertility Awareness': {
    inputName: 'Fertility Awareness',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  Withdrawal: {
    inputName: 'Withdrawal',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  Breastfeeding: {
    inputName: 'Breastfeeding',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  Sterilization: {
    inputName: 'Sterilization',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  Abstinence: {
    inputName: 'Abstinence',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
  None: {
    inputName: 'None',
    inputType: 'singleOption',
    singleOptionList: [{title: 'true'}, {title: 'false'}],
    multiOptionList: [],
    iconName: 'radio-button-off-outline',
    iconType: 'ionicon',
  },
};

class ContraceptionSettingsScreen extends React.Component {
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
            name={'Edit Current Contraception'}
            value={'Update here'}
            iconName={'create-outline'}
            iconType={'ionicon'}
            iconBackgroundColor={this.getIconColor(1)}
            dispatch={this.props.dispatch}
            inputName={'contraception'}
            inputType={'multiOption'}
            multiOptionList={Object.keys(contraceptionKeys)}
            updateMultiOptionIndividually={true}
          />
          {Object.entries(
            this.props.userProfile.OnboardingAnswers.onboarding.contraception,
          ).map((val, index) => {
            if (Object.keys(contraceptionKeys).includes(val[0]) && val[1]) {
              return (
                <View
                  key={index}
                  style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                  <EditableListitemCard
                    name={val[0]}
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
                  />
                </View>
              );
            } else {
              return null;
            }
          })}

          {this.props.userProfile.OnboardingAnswers.onboarding.contraception[
            'Vaginal Ring'
          ] && (
            <View style={{marginVertical: theme.SIZES.BASE * 0.5}}>
              <EditableListitemCard
                name={'Edit Vaginal Ring Details'}
                value={'Update here'}
                iconName={'pencil-outline'}
                iconType={'ionicon'}
                iconBackgroundColor={this.getIconColor(1)}
                dispatch={this.props.dispatch}
                inputName="None"
                inputType="None"
                customOnPress={() =>
                  navigation.navigate('VaginalRingDetailsSettingsScreen')
                }
              />
            </View>
          )}
          {this.props.userProfile.OnboardingAnswers.onboarding.contraception[
            'Patch'
          ] && (
            <View style={{marginVertical: theme.SIZES.BASE * 0.5}}>
              <EditableListitemCard
                name={'Edit Patch Details'}
                value={'Update here'}
                iconName={'pencil-outline'}
                iconType={'ionicon'}
                iconBackgroundColor={this.getIconColor(1)}
                dispatch={this.props.dispatch}
                inputName="None"
                inputType="None"
                customOnPress={() =>
                  navigation.navigate('PatchDetailsSettingsScreen')
                }
              />
            </View>
          )}
          {this.props.userProfile.OnboardingAnswers.onboarding.contraception[
            'Pill'
          ] && (
            <View style={{marginVertical: theme.SIZES.BASE * 0.5}}>
              <EditableListitemCard
                name={'Edit Pill Details'}
                value={'Update here'}
                iconName={'pencil-outline'}
                iconType={'ionicon'}
                iconBackgroundColor={this.getIconColor(1)}
                dispatch={this.props.dispatch}
                inputName="None"
                inputType="None"
                customOnPress={() =>
                  navigation.navigate('PillDetailsSettingsScreen')
                }
              />
            </View>
          )}
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
export default connect(mapStateToProps)(ContraceptionSettingsScreen);
