import React from 'react';
import {withNavigation} from '@react-navigation/compat';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Tab} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants';

import Home1 from '../assets/ui/footer/Home1.svg';
import Learn1 from '../assets/ui/footer/Learn1.svg';
import AddEntry1 from '../assets/ui/footer/AddEntry1.svg';
import Track1 from '../assets/ui/footer/Track1.svg';
import Connect1 from '../assets/ui/footer/Connect1.svg';

import {getOS} from '../shared/PlatformUtils';
import { Badge } from 'react-native-elements';
// import AddButton from '../screens/Connect/addButton';


const {width} = Dimensions.get('window');
const iosPlatform = () => getOS() === 'ios';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    const {tabName} = this.props;
    let initialFooterValue = -1;

    if (tabName === 'Home') {
      initialFooterValue = 0;
    } else if (tabName === 'Learn') {
      initialFooterValue = 1;
    } else if (tabName === 'TrackSymptoms') {
      initialFooterValue = 2;
    } else if (tabName === 'Track') {
      initialFooterValue = 3;
    } else if (tabName === 'Connect') {
      initialFooterValue = 4;
    }
    this.state = {
      tabIndex: initialFooterValue,
    };
  }

  handleTabChange = value => {
    const {navigation} = this.props;
    const currentTabName = this.props.navigation.getState().routes[0]['name'];

    if (value === 0) {
      if (currentTabName == 'HomeMain') {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
              state: {
                routes: [{name: 'HomeMain'}],
              },
            },
          ],
        });
      } else {
        navigation.navigate('Home');
      }
    } else if (value === 1) {
      if (
        currentTabName == 'LearnMain' ||
        currentTabName == 'Endo101ProgressScreen'
      ) {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Learn',
              state: {
                routes: [{name: 'LearnMain'}],
              },
            },
          ],
        });
      } else {
        navigation.navigate('Learn');
      }
    } else if (value === 2) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Track',
            state: {
              routes: [{name: 'TrackMain'}, {name: 'TrackSymptoms'}],
            },
          },
        ],
      });
    } else if (value === 3) {
      if (currentTabName == 'TrackMain') {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Track',
              state: {
                routes: [{name: 'TrackMain'}],
              },
            },
          ],
        });
      } else {
        navigation.navigate('Track');
      }
    } else if (value === 4) {
      if (currentTabName == 'ConnectMain' || currentTabName == 'UserProfile') {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Connect',
              state: {
                routes: [{name: 'ConnectMain'}],
              },
            },
          ],
        });
      } else {
        navigation.navigate('Connect');
      }
    }
  };

  render() {
    const {
      title,
      white,
      transparent,
      bgColor,
      iconColor,
      titleColor,
      navigation,
      ...props
    } = this.props;

    return (
      <View style={{height: 68, backgroundColor: theme.COLORS.WHITE}}>
        <LinearGradient
          colors={[theme.COLORS.TRANSPARENT, theme.COLORS.TEXT3]}
          style={{
            top: -12,
            width: width,
            height: 40,
          }}></LinearGradient>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}></View>

          <View
            style={{
              height: 68,
              top: iosPlatform() ? -45 : -40,
              width: width,
              backgroundColor: theme.COLORS.WHITE,
              borderTopLeftRadius: theme.SIZES.BASE,
              borderTopRightRadius: theme.SIZES.BASE,
            }}>
            <View style={{flex: 1}}>
              <View style={{flex: 1}}></View>
              <Tab
                value={this.state.tabIndex}
                onChange={this.handleTabChange}
                backgroundColor={theme.COLORS.TRANSPARENT}
                variant="default"
                disableIndicator={true}
                height={68}
                paddingVertical={0}
                marginVertical={0}
                borderColor={theme.COLORS.TRANSPARENT}
                borderTopWidth={0}
                zIndex={5}>
                <Tab.Item
                  testID="footerHomeButton"
                  title="Home"
                  titleStyle={{
                    ...styles.tabTitle,
                    color:
                      this.state.tabIndex === 0
                        ? theme.COLORS.PRIMARY1
                        : theme.COLORS.TEXT3,
                    fontSize: theme.SIZES.C3,
                  }}
                  buttonStyle={{
                    paddingVertical: 0,
                  }}
                  containerStyle={{
                    paddingVertical: theme.SIZES.BASE * 0.6,
                    backgroundColor: theme.COLORS.TRANSPARENT,
                  }}
                  icon={
                    <Home1
                      height={styles.tabIcon.height * 1.0}
                      width={styles.tabIcon.width * 1.0}
                      style={{
                        color:
                          this.state.tabIndex === 0
                            ? theme.COLORS.PRIMARY2
                            : theme.COLORS.TEXT3,
                      }}
                      marginTop={2}
                    />
                  }
                />

                <Tab.Item
                  testID="footerLearnButton"
                  title="Learn"
                  titleStyle={{
                    ...styles.tabTitle,
                    color:
                      this.state.tabIndex === 1
                        ? theme.COLORS.PRIMARY1
                        : theme.COLORS.TEXT3,
                    fontSize: theme.SIZES.C3,
                  }}
                  buttonStyle={{
                    paddingVertical: 0,
                  }}
                  containerStyle={{
                    paddingVertical: theme.SIZES.BASE * 0.6,
                    backgroundColor: theme.COLORS.TRANSPARENT,
                  }}
                  icon={
                    <Learn1
                      height={styles.tabIcon.height * 1.0}
                      width={styles.tabIcon.width * 1.0}
                      style={{
                        color:
                          this.state.tabIndex === 1
                            ? theme.COLORS.PRIMARY2
                            : theme.COLORS.TEXT3,
                      }}
                      marginTop={2}
                    />
                  }
                />
                {
                  <Tab.Item
                  testID="footerAddEntryButton"
                  buttonStyle={{
                    paddingVertical: theme.SIZES.BASE * 0.2,
                    marginVertical: theme.SIZES.BASE * 0.2,
                    height: theme.SIZES.BASE * 3,
                    width: theme.SIZES.BASE * 3.8,
                  }}
                  containerStyle={{
                    alignItems: 'center',
                    backgroundColor: theme.COLORS.TRANSPARENT,
                  }}
                  icon={
                    <AddEntry1
                      height={styles.tabIcon.height * 2.0}
                      width={styles.tabIcon.width * 2.0}
                      style={{
                        color:
                          this.state.tabIndex === 2
                            ? theme.COLORS.PRIMARY2
                            : theme.COLORS.TEXT3,
                      }}
                      marginTop={6}
                    />
                  }
                />
                }
                {/* <Tab.Item
                  testID="footerAddEntryButton"
                  buttonStyle={{
                    paddingVertical: theme.SIZES.BASE * 0.2,
                    marginVertical: theme.SIZES.BASE * 0.2,
                    height: theme.SIZES.BASE * 3,
                    width: theme.SIZES.BASE * 3.8,
                  }}
                  containerStyle={{
                    alignItems: 'center',
                    backgroundColor: theme.COLORS.TRANSPARENT,
                  }}
                  icon={
                    <AddEntry1
                      height={styles.tabIcon.height * 2.0}
                      width={styles.tabIcon.width * 2.0}
                      style={{
                        color:
                          this.state.tabIndex === 2
                            ? theme.COLORS.PRIMARY2
                            : theme.COLORS.TEXT3,
                      }}
                      marginTop={6}
                    />
                  }
                /> */}

                <Tab.Item
                  testID="footerTrackButton"
                  title="Track"
                  titleStyle={{
                    ...styles.tabTitle,
                    color:
                      this.state.tabIndex === 3
                        ? theme.COLORS.PRIMARY1
                        : theme.COLORS.TEXT3,
                    fontSize: theme.SIZES.C3,
                  }}
                  buttonStyle={{
                    paddingVertical: 0,
                  }}
                  containerStyle={{
                    paddingVertical: theme.SIZES.BASE * 0.6,
                    backgroundColor: theme.COLORS.TRANSPARENT,
                  }}
                  icon={
                    <Track1
                      height={styles.tabIcon.height * 1.0}
                      width={styles.tabIcon.width * 1.0}
                      style={{
                        color:
                          this.state.tabIndex === 3
                            ? theme.COLORS.PRIMARY2
                            : theme.COLORS.TEXT3,
                      }}
                      marginTop={2}
                    />
                  }
                />

                <Tab.Item
                  testID="footerConnectButton"
                  title="Chat"
                  titleStyle={{
                    ...styles.tabTitle,
                    marginTop: 0,
                    paddingTop: 0,
                    color:
                      this.state.tabIndex === 4
                        ? theme.COLORS.PRIMARY1
                        : theme.COLORS.TEXT3,
                    fontSize: theme.SIZES.B2,
                  }}
                  buttonStyle={{
                    paddingVertical: 0,
                  }}
                  containerStyle={{
                    paddingVertical: theme.SIZES.BASE * 0.6,
                    backgroundColor: theme.COLORS.TRANSPARENT,
                  }}
                  icon={
                    <Connect1
                      height={styles.tabIcon.height * 1.0}
                      width={styles.tabIcon.width * 1.0}
                      style={{
                        color:
                          this.state.tabIndex === 4
                            ? theme.COLORS.PRIMARY2
                            : theme.COLORS.TEXT3,
                      }}
                      marginTop={2}
                    />
                  }
                />
              </Tab>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabIcon: {
    padding: 0,
    position: 'relative',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    height: 28,
    width: 28,
  },
  tabTitle: {
    fontSize: 9,
    color: theme.COLORS.TEXT3,
    fontFamily: theme.FONTS.TEXT,
    width: 90,
  },
  tabContainer: {
    fontFamily: theme.FONTS.TEXT,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
    fontFamily: theme.FONTS.TEXT,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
    fontFamily: theme.FONTS.TEXT,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
    fontFamily: theme.FONTS.TEXT,
  },
});

export default withNavigation(Footer);
