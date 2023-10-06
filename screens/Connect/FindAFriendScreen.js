import React from 'react';
import {Dimensions, ScrollView, View, KeyboardAvoidingView} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';
import produce from 'immer';
import {StatusBar} from 'expo-status-bar';

import {queryUsers} from '../../shared/ServerUtils';
import Icon from '../../components/Icon';
import ServerProxy from '../../tests/ServerProxy';
import {getSVG} from '../../constants/SVGs';
import {
  Button,
  Footer,
  Input,
  TouchableOpacity,
  Select,
  Chip,
  RoundedTopContainer,
} from '../../components';
import utils from '../../constants/utils';
import {Images, theme, styles} from '../../constants';
import {
  setCurrentAmieProfileAction,
  setCurrentAmieUIDAction,
  updateCachedPublicProfileAction,
} from '../../redux/actions/connectActions';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

class FriendResult extends React.Component {
  navigateToAmiesProfileScreen = amieUID => {
    const {navigation} = this.props;
    Promise.resolve()
      .then(() => this.props.dispatch(setCurrentAmieUIDAction(amieUID)))
      .then(() =>
        this.props.dispatch(
          setCurrentAmieProfileAction(
            cloneDeep(
              this.props.connect.cachedPublicProfiles[amieUID]?.publicProfile,
            ),
          ),
        ),
      )
      .then(() => navigation.navigate('AmieProfile'))
      .catch(function (err) {
        console.warn(err);
      });
  };

  render() {
    const {
      navigation,
      name = 'default name',
      publicProfile = {},
      avatar = 'BeauWomanShortHair1',
      testID,
      ...props
    } = this.props;

    return (
      <TouchableOpacity
        testID={testID}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width - theme.SIZES.BASE * 2,
          marginVertical: theme.SIZES.BASE * 0.25,
        }}
        onPress={() => {
          Promise.resolve()
            .then(() =>
              this.props.dispatch(
                updateCachedPublicProfileAction(
                  publicProfile['uid'],
                  publicProfile,
                ),
              ),
            )
            .then(() => this.navigateToAmiesProfileScreen(publicProfile['uid']))
            .catch(error => {
              console.log(error);
            });
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: theme.COLORS.TEXT3,
            borderRadius: theme.SIZES.BASE * 2,
            paddingHorizontal: theme.SIZES.BASE * 1.3,
            paddingVertical: theme.SIZES.BASE * 0.5,
            width: width - theme.SIZES.BASE * 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginRight: theme.SIZES.BASE * 0.5,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    Promise.resolve()
                      .then(() =>
                        this.props.dispatch(
                          updateCachedPublicProfileAction(
                            publicProfile['uid'],
                            publicProfile,
                          ),
                        ),
                      )
                      .then(() =>
                        this.navigateToAmiesProfileScreen(publicProfile['uid']),
                      )
                      .catch(error => {
                        console.log(error);
                      });
                  }}>
                  {getSVG(avatar)}
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'space-evenly'}}>
                <Text
                  style={{
                    fontSize: theme.SIZES.B1,
                    fontWeight: 'bold',
                    color: theme.COLORS.TEXT1,
                  }}>
                  {name}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class ConnectScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      selectedCRID: -1,
      speedDialMenuOpen: false,

      usernameSearch: '',
      multiSelectedOptions: [],
      queryResults: [],
      resultsAvailable: false,
    };

    this.TestServerProxy = new ServerProxy();
  }

  handleOnSelect = value => {
    this.setMenuVisible(false);
  };

  setMenuVisible = value => {
    this.setState({menuVisible: value});
  };

  setSelectedCRID = value => {
    this.setState({selectedCRID: value});
  };

  setSpeedDialMenuOpen = value => {
    this.setState({speedDialMenuOpen: value});
  };

  setUsernameSearch = value => {
    this.setState({usernameSearch: value});
  };

  setResultsAvailable = value => {
    this.setState({resultsAvailable: value});
  };

  addSelectedFromMultiSelect = symptomName => {
    this.setState(
      produce(draft => {
        if (
          !draft.multiSelectedOptions.includes(symptomName) &&
          draft.multiSelectedOptions.length < 2
        ) {
          draft.multiSelectedOptions =
            draft.multiSelectedOptions.concat(symptomName);
        }
      }),
    );
  };

  removeSelectedFromMultiSelect = symptomName => {
    this.setState(
      produce(draft => {
        if (draft.multiSelectedOptions.includes(symptomName)) {
          draft.multiSelectedOptions = draft.multiSelectedOptions.filter(
            item => item !== symptomName,
          );
        }
      }),
    );
  };

  setQueryResults = value => {
    this.setState({queryResults: value});
  };

  renderResults = () => {
    console.log('RESSSSSULTS: ', JSON.stringify(this.state.queryResults));
    return (
      <View testID={'ResultsView'}>
        {this.state.queryResults &&
          this.state.queryResults.map((item, i) => {
            return (
              <FriendResult
                key={i}
                testID={'UserProfileResult'}
                name={item['name']}
                publicProfile={item}
                avatar={item['avatar']}
                navigation={this.props.navigation}
                dispatch={this.props.dispatch}
                connect={this.props.connect}
              />
            );
          })}
      </View>
    );
  };

  renderFriendsList = () => {
    const {navigation} = this.props;

    return (
      <ScrollView
        testID="pageScrollview2"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          ...styles.articles,
          backgroundColor: theme.COLORS.TRANSPARENT,
        }}
        style={{
          backgroundColor: theme.COLORS.TRANSPARENT,
        }}>
        <RoundedTopContainer
          style={{
            paddingHorizontal: theme.SIZES.BASE,
            minHeight: height - theme.SIZES.BASE * 8.6,
          }}>
          <View
            style={{
              marginVertical: theme.SIZES.BASE,
              marginTop: theme.SIZES.BASE,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginTop: theme.SIZES.BASE,
              }}>
              Search
            </Text>
          </View>

          <Input
            testID={'findAFriendTextInput'}
            placeholderTextColor={theme.COLORS.LIGHT_SECONDARY}
            autoFocus={false}
            autoCorrect={false}
            autoCapitalize="none"
            selectionColor={theme.COLORS.DEFAULT}
            placeholder="Search..."
            onChangeText={searchStr => this.setUsernameSearch(searchStr)}
            containerStyle={{
              marginBottom: theme.SIZES.BASE * 0.5,
              backgroundColor: theme.COLORS.BACKGROUND2,
              borderRadius: theme.SIZES.BASE,
            }}
            iconContent={
              <Icon
                width={24}
                height={24}
                fill={theme.COLORS.TEXT3}
                name="Svg040Search"
                family="amielineal"
              />
            }
          />

          <Select
            customPrompt="Add search condition"
            defaultIndex={1}
            options={utils.commonChronicConditionsList}
            customButtonStyle={{
              height: theme.SIZES.BASE * 3,
              borderRadius: theme.SIZES.BASE,
              borderColor: theme.COLORS.PRIMARY2,
              borderWidth: 1,
              shadowRadius: 0,
              shadowOpacity: 0,
              backgroundColor: theme.COLORS.WHITE,
              fontFamily: theme.FONTS.TEXT,
              paddingHorizontal: theme.SIZES.BASE,
            }}
            customTextStyle={{
              fontSize: 16,
              color: theme.COLORS.PRIMARY2,
              fontFamily: theme.FONTS.TEXT,
            }}
            customIconColor={theme.COLORS.PRIMARY2}
            onSelect={(ind, value) => {
              this.addSelectedFromMultiSelect(value);
            }}
          />

          <View style={{flexDirection: 'row'}}>
            {Object.entries(this.state.multiSelectedOptions).map(
              (responseObj, i) => (
                <Chip
                  title={responseObj[1] + '  X'}
                  key={i}
                  containerStyle={{
                    marginVertical: theme.SIZES.BASE * 0.5,
                    marginHorizontal: 4,
                  }}
                  onPress={() => {
                    this.removeSelectedFromMultiSelect(responseObj[1]);
                  }}
                />
              ),
            )}
          </View>

          <View
            style={{
              paddingHorizontal: theme.SIZES.BASE * 2,
              alignItems: 'center',
              marginVertical: theme.SIZES.BASE,
            }}>
            <Button
              testID="friendSearchButton"
              style={{
                ...styles.button,
                color: theme.COLORS.DEFAULT,
                width: width - theme.SIZES.BASE * 2,
              }}
              title="Search"
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H6,
              }}
              onPress={async () => {
                const newQueryResults = await queryUsers(
                  this.state.usernameSearch,
                  this.state.multiSelectedOptions,
                );
                const filteredQueryResults = newQueryResults
                  ? newQueryResults.filter(
                      val =>
                        val['uid'] &&
                        val['uid'] != '-1' &&
                        val['uid'] != -1 &&
                        val['uid'] != this.props.userPublicProfile.uid,
                    )
                  : [];
                this.setQueryResults(filteredQueryResults);
                this.setResultsAvailable(true);
              }}
            />
          </View>

          {this.state.resultsAvailable && (
            <View>
              <View
                style={{
                  marginBottom: theme.SIZES.BASE,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontFamily: theme.FONTS.TEXT,
                    fontSize: theme.SIZES.H5,
                    marginTop: theme.SIZES.BASE,
                  }}>
                  Results
                </Text>
              </View>

              {this.state.queryResults.length < 1 && (
                <Text
                  style={{
                    // textAlign: 'center',
                    fontFamily: theme.FONTS.TEXT,
                    fontSize: theme.SIZES.B1,
                  }}>
                  We couldn't find any matching friends, please try other search
                  options
                </Text>
              )}
              {this.state.queryResults.length > 0 && this.renderResults()}
            </View>
          )}
        </RoundedTopContainer>
      </ScrollView>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customImageName={Images.ui.BackgroundGradient3}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.COLORS.TRANSPARENT,
          }}>
          <View
            style={{
              ...styles.home,
              flex: 1,
              alignContent: 'center',
              backgroundColor: theme.COLORS.TRANSPARENT,
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
                backgroundColor: theme.COLORS.TRANSPARENT,
              }}
              behavior="padding"
              enabled={iosPlatform()}>
              {this.renderFriendsList()}
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
    userPublicProfile: state.userPublicProfile,
    amieChatbot: state.amieChatbot,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(ConnectScreen);
