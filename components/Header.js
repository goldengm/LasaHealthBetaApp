import React from 'react';
import {withNavigation} from '@react-navigation/compat';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Text, Header as RneHeader, LinearProgress} from 'react-native-elements';

import {theme} from '../constants';

import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import TouchableOpacity from './TouchableOpacity';

import {getOS} from '../shared/PlatformUtils';

import {Badge} from 'react-native-elements';
import {connect} from 'react-redux';

// const {height, width} = Dimensions.get('window');
const iosPlatform = () => getOS() == 'ios';

const BellButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity
    testID="headerBellButton"
    style={{...styles.button, ...style}}>
    <Icon
      family="amielineal"
      name="Svg024Bell"
      fill={style.color || theme.COLORS.BLACK}
      width={styles.button.width}
      height={styles.button.height}
    />
    <View style={{...styles.notify, alignContent: 'center'}} />
  </TouchableOpacity>
);

const ChatButton = ({isWhite, style, navigation, unReadCount}) => (
  <TouchableOpacity
    testID="headerChatButton"
    style={{...styles.button, ...style}}
    onPress={() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Connect',
            state: {
              routes: [{name: 'ConnectMain'}, {name: 'ViewFriendsScreen'}],
            },
          },
        ],
      });
    }}>
    <Icon
      family="amielineal"
      name="Svg051Chat"
      fill={style.color || theme.COLORS.BLACK}
      width={styles.button.width}
      height={styles.button.height}
    />
    <Badge
      status="success"
      containerStyle={
        unReadCount > 0
          ? {
              position: 'absolute',
              top: -6,
              right: -6,
            }
          : {
              position: 'absolute',
              top: -6,
              right: -6,
              display: 'none',
            }
      }
      badgeStyle={{
        backgroundColor: theme.COLORS.PRIMARY2,
        borderWidth: 0,
      }}
      value={unReadCount}
    />
    <View style={{...styles.notify, alignContent: 'center'}} />
  </TouchableOpacity>
);

const ChatbotButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity
    testID="headerChatbotButton"
    style={{...styles.button, ...style}}
    onPress={() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Connect',
            state: {
              routes: [{name: 'Connect'}, {name: 'Chatbot'}],
            },
          },
        ],
      });
    }}>
    <Icon
      family="amielineal"
      name="Svg039Lifeguard"
      fill={style.color || theme.COLORS.BLACK}
      width={styles.button.width}
      height={styles.button.height}
    />
    <View style={{...styles.notify, alignContent: 'center'}} />
  </TouchableOpacity>
);

const BasketButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity
    testID="headerBasketButton"
    style={{...styles.button, ...style}}>
    <Icon
      family="amielineal"
      name="Svg033ShoppingBag"
      fill={style.color || theme.COLORS.BLACK}
      width={styles.button.width}
      height={styles.button.height}
    />
  </TouchableOpacity>
);

const SearchButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity
    testID="headerSearchButton"
    style={{...styles.button, ...style}}>
    <Icon
      family="amielineal"
      name="Svg040Search"
      fill={style.color || theme.COLORS.BLACK}
      width={styles.button.width}
      height={styles.button.height}
    />
  </TouchableOpacity>
);

const SettingsButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity
    testID="headerSettingsButton"
    style={{...styles.button, ...style}}
    onPress={() => navigation.navigate('Settings')}>
    <Icon
      family="amiesolid"
      name="Svg010Gear"
      fill={style.color || theme.COLORS.DEFAULT}
      width={styles.button.width}
      height={styles.button.height}
    />
  </TouchableOpacity>
);

const ExitButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity
    testID="headerExitButton"
    style={{...styles.button, ...style}}
    onPress={() => {
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
    }}>
    <Icon
      family="amielineal"
      name="SvgSolidClose"
      fill={style.color || theme.COLORS.BLACK}
      style={{marginTop: 5}}
      width={styles.button.width}
      height={styles.button.height}
    />
    <View style={{...styles.notify, alignContent: 'center'}} />
  </TouchableOpacity>
);

class Header extends React.Component {
  getUnReadMessages = () => {
    return Object.entries(this.props.connect.chatroomList).reduce(
      (unReadCount, currentObject) => {
        if (
          currentObject[1] != null &&
          currentObject[1]['publicProfile']['uid'] !== -1
        ) {
          unReadCount +=
            currentObject[1]['numMessages'] - currentObject[1]['numRead'];
        }
        return unReadCount;
      },
      0,
    );
  };

  renderSearch = () => {
    const {search, style, navigation} = this.props;
    return (
      <View style={{height: 40, marginTop: 0, paddingTop: 0}}>
        <Input
          testID="headerSearchInput"
          style={{...styles.search, ...style}}
          inputContainerStyle={{
            height: styles.search.height,
            marginTop: styles.search.marginTop,
            paddingTop: styles.search.paddingTop,
            borderBottomWidth: 0,
          }}
          placeholder={search}
          placeholderTextColor={styles.search.color}
          iconContent={
            <Icon
              width={styles.button.width}
              height={styles.button.height}
              fill={styles.search.color}
              name="Svg040Search"
              family="amielineal"
            />
          }
        />
      </View>
    );
  };

  renderOptions = () => {
    // const {navigation, optionLeft, optionRight} = this.props;

    return <View style={{...styles.options, flexDirection: 'row'}}></View>;
  };

  renderTabs = () => {
    const {tabs, tabIndex, navigation} = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;

    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({tabId: id})}
      />
    );
  };

  renderHeader = () => {
    const {options, tabs} = this.props;
    if (tabs || options) {
      return (
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
          }}>
          {options ? this.renderOptions() : null}
          {tabs ? this.renderTabs() : null}
        </View>
      );
    }
  };

  handleLeftPress = () => {
    const {back, navigation} = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  renderLeft = () => {
    const {
      back,
      // , iconColor, white, title
    } = this.props;
    return (
      <Icon
        testID="headerMenuButton"
        name={back ? 'chevron-back-outline' : 'menu-outline'}
        type="ionicon"
        width={styles.button.width}
        height={styles.button.height}
        onPress={this.handleLeftPress}
        color={styles.leftHeader.color || theme.COLORS.DEFAULT}
        style={{
          ...styles.leftHeader,
          width: 120,
          height: 60,
          // backgroundColor: theme.COLORS.MELRED,
        }}
      />
    );
  };

  renderRight = unReadNum => {
    const {white, title, navigation, chatShortcut} = this.props;

    switch (title) {
      case 'Track':
        return (
          <ChatButton
            key="open-chat"
            navigation={navigation}
            unReadCount={unReadNum}
            // isWhite={white}
            style={{...styles.rightHeader, color: theme.COLORS.TEXT2}}
          />
          // <ChatbotButton
          //   key="open-chatbot"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
          // <SettingsButton
          //   key="open-settings"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
        );
      case 'Learn':
        return (
          <ChatButton
            key="open-chat"
            navigation={navigation}
            unReadCount={unReadNum}
            // isWhite={white}
            style={{...styles.rightHeader, color: theme.COLORS.TEXT2}}
          />
          // <ChatbotButton
          //   key="open-chatbot"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
          // <SettingsButton
          //   key="open-settings"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
        );

      case 'Learn Course':
        return (
          <ExitButton
            key="open-chatbot"
            navigation={navigation}
            isWhite={white}
            style={{
              ...styles.rightHeader,
              color: theme.COLORS.DARK_SECONDARY,
              width: 80,
              height: 40,
            }}
          />
          // <SettingsButton
          //   key="open-settings"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
        );

      case 'Connect':
        return (
          <ChatButton
            key="open-chat"
            navigation={navigation}
            unReadCount={unReadNum}
            // isWhite={white}
            style={{...styles.rightHeader, color: theme.COLORS.TEXT2}}
          />
          // <ChatbotButton
          //   key="open-chatbot"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
        );
      case 'Home':
        return (
          <ChatButton
            key="open-chat"
            navigation={navigation}
            unReadCount={unReadNum}
            // isWhite={white}
            style={{...styles.rightHeader, color: theme.COLORS.TEXT2}}
          />
          // <ChatbotButton
          //   key="open-chatbot"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
          // <SettingsButton
          //   key="open-settings"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
        );
      case 'Refer a Friend':
        return (
          <ChatButton
            key="open-chat"
            navigation={navigation}
            unReadCount={unReadNum}
            // isWhite={white}
            style={{...styles.rightHeader, color: theme.COLORS.TEXT2}}
          />
          // <ChatbotButton
          //   key="open-chatbot"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
          // <SettingsButton
          //   key="open-settings"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
        );
      case 'Customer Support':
        return (
          <ChatButton
            key="open-chat"
            navigation={navigation}
            unReadCount={unReadNum}
            // isWhite={white}
            style={{...styles.rightHeader, color: theme.COLORS.TEXT2}}
          />
          // <ChatbotButton
          //   key="open-chatbot"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
          // <SettingsButton
          //   key="open-settings"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
        );
      case 'Settings':
        return (
          <View flexDirection={'row'} style={styles.rightHeader}>
            {/* <BellButton
              key="chat-search"
              navigation={navigation}
              isWhite={white}
              style={styles.rightHeader}
            /> */}

            <ChatButton
              key="open-chat"
              navigation={navigation}
              unReadCount={unReadNum}
              // isWhite={white}
              style={{...styles.rightHeader, color: theme.COLORS.TEXT2}}
            />
            {/* <ChatbotButton
              key="open-chatbot"
              navigation={navigation}
              isWhite={white}
              style={styles.rightHeader}
            /> */}
          </View>
        );
      case 'Help':
        return (
          <ChatButton
            key="open-chat"
            navigation={navigation}
            unReadCount={unReadNum}
            // isWhite={white}
            style={{...styles.rightHeader, color: theme.COLORS.TEXT2}}
          />
          // <ChatbotButton
          //   key="open-chatbot"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
          // <SettingsButton
          //   key="open-settings"
          //   navigation={navigation}
          //   isWhite={white}
          //   style={styles.rightHeader}
          // />
        );

      case 'Community':
        return (
          <ChatButton
            key="open-chat"
            navigation={navigation}
            unReadCount={unReadNum}
            // isWhite={white}
            style={{...styles.rightHeader, color: theme.COLORS.TEXT2}}
          />
        );

      case 'Amie':
        return <></>;

      default:
        if (chatShortcut) {
          return (
            <ChatButton
              key="open-chat"
              navigation={navigation}
              unReadCount={unReadNum}
              // isWhite={white}
              style={{...styles.rightHeader, color: theme.COLORS.TEXT2}}
            />
          );
        } else {
          return (
            <></>
            // <ChatButton
            //   key="open-chat"
            //   navigation={navigation}
            //   // isWhite={white}
            //   style={{ ...styles.rightHeader, color: theme.COLORS.TEXT2 }}
            // />
            // <ChatbotButton
            //   key="open-chatbot"
            //   navigation={navigation}
            //   isWhite={white}
            //   style={styles.rightHeader}
            // />
            // <SettingsButton
            //   key="open-settings"
            //   navigation={navigation}
            //   isWhite={white}
            //   style={styles.rightHeader}
            // />
          );
        }
        break;
    }
  };

  renderCenter = () => {
    const {search, title, progress, progressPercent, disableTitle} = this.props;
    if (search) {
      return (
        <View
          style={{
            ...styles.centerHeader,
            marginTop: 0,
            paddingTop: 0,
            width: '100%',
          }}>
          {search ? this.renderSearch() : null}
        </View>
      );
    } else if (progress) {
      return (
        <View
          style={{
            ...styles.centerHeader,
            marginTop: 0,
            paddingTop: 0,
            width: '100%',
            alignItems: 'center',
          }}>
          <LinearProgress
            style={{
              marginTop: theme.SIZES.BASE * 0.5,
              height: theme.SIZES.BASE * 0.75,
              width: 160,
              borderRadius: 4,
              borderWidth: 1,
              borderBottomWidth: 2,
              borderColor: theme.COLORS.BACKGROUND3,
            }}
            color={theme.COLORS.PRIMARY2}
            trackColor={theme.COLORS.BACKGROUND1}
            value={progressPercent ? progressPercent : 0.0}
            variant="determinate"
          />
        </View>
      );
    } else if (disableTitle) {
      return <></>;
    } else {
      return <Text style={styles.centerHeader}>{title}</Text>;
    }
  };

  render() {
    const {
      back,
      title,
      white,
      transparent,
      bgColor,
      iconColor,
      titleColor,
      navigation,
      progressPercent,
      ...props
    } = this.props;

    const unReadNum = this.getUnReadMessages();

    return (
      <View
        style={{
          backgroundColor: theme.COLORS.TRANSPARENT,
          height: 70,
        }}>
        <RneHeader
          back={false}
          containerStyle={{
            ...styles.navbar,
            transparent: transparent,
            backgroundColor: theme.COLORS.TRANSPARENT,
            borderBottomWidth: 0,
            height: 60,
          }}
          leftComponent={this.renderLeft()}
          leftContainerStyle={{
            ...styles.leftContainerStyle,
            // height: 40,

            width: 120,
            height: 60,
          }}
          centerComponent={this.renderCenter()}
          centerContainerStyle={{
            ...styles.centerContainerStyle,
            height: 20,
          }}
          rightComponent={this.renderRight(unReadNum)}
          rightContainerStyle={{
            ...styles.rightContainerStyle,
            height: 40,
          }}
          statusBarProps={{
            style: {
              backgroundColor: theme.COLORS.TRANSPARENT,
            },
            backgroundColor: theme.COLORS.TRANSPARENT,
          }}
          {...props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    fontFamily: theme.FONTS.TEXT,
    width: 24,
    height: 24,
    color: theme.COLORS.LIGHT_SECONDARY,
  },
  navbar: {
    paddingTop: 0,
    marginTop: 6,
    paddingBottom: 12,
    height: iosPlatform() ? theme.SIZES.BASE * 4.5 : theme.SIZES.BASE * 3.5,
    zIndex: 5,
    fontFamily: theme.FONTS.TEXT,
    alignItems: 'flex-start',
    paddingBottom: 0,
    marginBottom: 0,
  },
  leftHeader: {
    marginTop: 0,
    paddingTop: 0,
    color: theme.COLORS.DARK_SECONDARY,
    fontFamily: theme.FONTS.TEXT,
    height: 40,
    width: 80,
    alignItems: 'flex-start',
  },
  centerHeader: {
    marginTop: 0,
    paddingTop: 0,
    color: theme.COLORS.DARK_SECONDARY,
    fontFamily: theme.FONTS.TEXT,
    fontSize: 18,
    height: theme.SIZES.BASE * 2,
    fontWeight: 'bold',
  },
  rightHeader: {
    marginTop: 0,
    paddingTop: 0,
    color: theme.COLORS.LIGHT_SECONDARY,
    fontFamily: theme.FONTS.TEXT,
    height: 40,
    width: 80,
    alignItems: 'flex-end',
  },
  leftContainerStyle: {
    flex: 0.2,
    fontFamily: theme.FONTS.TEXT,
  },
  centerContainerStyle: {
    flex: 0.6,
    fontFamily: theme.FONTS.TEXT,
  },
  rightContainerStyle: {
    flex: 0.2,
    fontFamily: theme.FONTS.TEXT,
  },

  search: {
    height: 16,
    width: '100%',
    marginTop: 0,
    paddingTop: 0,
    color: theme.COLORS.DARK_SECONDARY,
    backgroundColor: theme.COLORS.TRANSPARENT,
    fontFamily: theme.FONTS.TEXT,
  },
  notify: {
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
    fontFamily: theme.FONTS.TEXT,
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
    fontFamily: theme.FONTS.TEXT,
  },
});

const mapStateToProps = (state, props) => {
  return {
    connect: state.connect,
    userPublicProfile: state.userPublicProfile,
  };
};

export default withNavigation(connect(mapStateToProps)(Header));
