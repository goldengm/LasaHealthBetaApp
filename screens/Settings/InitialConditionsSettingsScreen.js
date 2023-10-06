import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';

import {theme, styles, Images, utils} from '../../constants';
import {
  EditableListitemCard,
  Footer,
  RoundedTopContainer,
} from '../../components';
import {
  addOnboardingConditionAction,
  removeOnboardingConditionAction,
} from '../../redux/actions/userProfileActions';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

class InitialConditionsSettingsScreen extends React.Component {
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
    let currentConditonsList = [];
    for (const keyItem of Object.keys(
      this.props.userProfile.OnboardingAnswers.onboarding.initialConditions,
    )) {
      currentConditonsList.push({title: keyItem});
    }

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
          <View
            style={{
              marginVertical: theme.SIZES.BASE * 0.5,
            }}>
            <EditableListitemCard
              name={'Add New Health Condition'}
              value={'Update here'}
              iconName={'add-outline'}
              iconType={'ionicon'}
              iconBackgroundColor={this.getIconColor(1)}
              dispatch={this.props.dispatch}
              inputName={'initialConditions'}
              inputType={'singleOption'}
              singleOptionList={utils.commonChronicConditionsList}
              defaultOnPressUpdateDisabled={true}
              customOnPressUpdate={newConditionName => {
                this.props.dispatch(
                  addOnboardingConditionAction(newConditionName),
                );
              }}
            />
          </View>
          <View
            style={{
              marginVertical: theme.SIZES.BASE * 0.5,
            }}>
            <EditableListitemCard
              name={'Remove Health Condition'}
              value={'Select here'}
              iconName={'remove-outline'}
              iconType={'ionicon'}
              iconBackgroundColor={this.getIconColor(1)}
              dispatch={this.props.dispatch}
              inputName={'initialConditions'}
              inputType={'singleOption'}
              singleOptionList={currentConditonsList}
              customOnPressLabel={'Remove'}
              defaultOnPressUpdateDisabled={true}
              customOnPressUpdate={conditionNameToRemove => {
                this.props.dispatch(
                  removeOnboardingConditionAction(conditionNameToRemove),
                );
              }}
            />
          </View>
          {Object.entries(
            this.props.userProfile.OnboardingAnswers.onboarding
              .initialConditions,
          ).map((val, index) => {
            return (
              <View
                key={index}
                style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                <EditableListitemCard
                  name={val[0]}
                  value={'Update condition'}
                  iconName={'bandage-outline'}
                  iconType={'ionicon'}
                  iconBackgroundColor={this.getIconColor(index)}
                  dispatch={this.props.dispatch}
                  inputName={'None'}
                  inputType={'None'}
                  singleOptionList={[]}
                  multiOptionList={[]}
                  customOnPress={() =>
                    navigation.navigate('ConditionDetailsSettingsScreen', {
                      conditionName: val[0],
                    })
                  }
                />
              </View>
            );
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
export default connect(mapStateToProps)(InitialConditionsSettingsScreen);
