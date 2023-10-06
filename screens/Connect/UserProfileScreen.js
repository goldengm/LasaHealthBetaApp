import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';

import {
  Footer,
  EditableListitemCard,
  SwipeableListitemCard,
  EditableText,
  EditableSVG,
  RoundedTopContainer,
} from '../../components';
import {
  updateUserPublicProfileNameAction,
  updateUserPublicProfileAvatarAction,
  updateUserPublicProfileLocationAction,
  updateUserPublicProfileDescriptionAction,
  addUserPublicProfileConditionAction,
  removeUserPublicProfileConditionAction,
} from '../../redux/actions/userPublicProfileActions';
import {Images, theme, styles, utils} from '../../constants';
import {svgStrList} from '../../constants/SVGs';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

class UserProfileScreen extends React.Component {
  componentDidMount() {}

  getIconColor = index => {
    if (index % 3 == 0) {
      return theme.COLORS.PRIMARY4;
    } else if (index % 3 == 1) {
      return theme.COLORS.SECONDARY3;
    } else {
      return theme.COLORS.TERTIARY2;
    }
  };
  renderProfile = () => {
    let currentConditonsList = [];
    for (const keyItem of this.props.userPublicProfile.healthConditions) {
      currentConditonsList.push({title: keyItem});
    }

    return (
      <ScrollView
        testID="pageScrollview"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.COLORS.TRANSPARENT,
            }}>
            <EditableSVG
              customOptionsList={svgStrList}
              value={this.props.userPublicProfile.avatar}
              customOnPressUpdate={svgName => {
                this.props.dispatch(
                  updateUserPublicProfileAvatarAction(svgName),
                );
              }}
            />

            <EditableText
              value={this.props.userPublicProfile.name}
              customOnPressUpdate={newName => {
                this.props.dispatch(updateUserPublicProfileNameAction(newName));
              }}
              customTextStyle={{
                fontSize: theme.SIZES.H6,
                fontWeight: 'bold',
                color: theme.COLORS.TEXT1,
              }}
            />
            <EditableText
              value={this.props.userPublicProfile.location}
              customOnPressUpdate={newLocation => {
                this.props.dispatch(
                  updateUserPublicProfileLocationAction(newLocation),
                );
              }}
            />
          </View>
          <RoundedTopContainer
            style={{
              paddingHorizontal: theme.SIZES.BASE,
              minHeight: height - theme.SIZES.BASE * 15.6,
              marginTop: theme.SIZES.BASE * 0.8,
            }}>
            <View
              style={{
                marginVertical: theme.SIZES.BASE,
                marginTop: theme.SIZES.BASE * 2,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: theme.SIZES.H5,
                }}>
                My Story
              </Text>
            </View>
            <EditableText
              value={this.props.userPublicProfile.description}
              customOnPressUpdate={newDescription => {
                this.props.dispatch(
                  updateUserPublicProfileDescriptionAction(newDescription),
                );
              }}
            />

            <View
              style={{
                marginVertical: theme.SIZES.BASE,
                marginTop: theme.SIZES.BASE * 2,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: theme.SIZES.H5,
                }}>
                My Health
              </Text>
            </View>

            <View
              style={{
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
                      addUserPublicProfileConditionAction(newConditionName),
                    );
                  }}
                />
              </View>
              {this.props.userPublicProfile.healthConditions.map(
                (val, index) => {
                  return (
                    <View
                      key={index}
                      style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                      <SwipeableListitemCard
                        name={val}
                        value={null}
                        iconName={'bandage-outline'}
                        iconType={'ionicon'}
                        iconBackgroundColor={this.getIconColor(index)}
                        dispatch={this.props.dispatch}
                        inputName={'None'}
                        inputType={'None'}
                        singleOptionList={[]}
                        multiOptionList={[]}
                        customOnPressUpdate={conditionNameToRemove => {
                          this.props.dispatch(
                            removeUserPublicProfileConditionAction(
                              conditionNameToRemove,
                            ),
                          );
                        }}
                      />
                    </View>
                  );
                },
              )}
            </View>
          </RoundedTopContainer>
        </View>
      </ScrollView>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customHeaderPaddingHeight={iosPlatform() ? 210 : 200}
        customImageName={Images.ui.BackgroundGradient3}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{...styles.home, flex: 1, alignContent: 'center'}}>
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
              {this.renderProfile()}
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Connect" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    userPublicProfile: state.userPublicProfile,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(UserProfileScreen);
