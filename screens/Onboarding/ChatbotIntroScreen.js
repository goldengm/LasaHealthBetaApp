import React from 'react';
import {Dimensions, KeyboardAvoidingView, Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import {Button, PageSwiper} from '../../components';
import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
import {setChatbotAvatarIndexAction} from '../../redux/actions/amieChatbotActions';
import {Images, theme, styles} from '../../constants';
import {getChatbotAvatar} from '../../constants/Images';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width} = Dimensions.get('screen');

class ChatbotIntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;
    this.state = {};
  }

  componentDidMount() {
    this.mixpanel.track('chatbotIntroScreen_reached');
  }

  getCurrentTimestampMinutes = () => {
    return Math.floor(Date.now() / 60000.0);
  };

  changeAIChatbotIndex = chatbotIndex => {
    this.props.dispatch(setChatbotAvatarIndexAction(chatbotIndex));
  };

  render() {
    const {navigation} = this.props;

    const onboardingSlidesData = [
      {
        key: 'one',
        image: getChatbotAvatar(0),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'two',
        image: getChatbotAvatar(1),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'three',
        image: getChatbotAvatar(2),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'four',
        image: getChatbotAvatar(3),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'five',
        image: getChatbotAvatar(4),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'six',
        image: getChatbotAvatar(5),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'seven',
        image: getChatbotAvatar(6),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'eight',
        image: getChatbotAvatar(7),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'nine',
        image: getChatbotAvatar(8),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'ten',
        image: getChatbotAvatar(9),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'eleven',
        image: getChatbotAvatar(10),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'twelve',
        image: getChatbotAvatar(11),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'thirteen',
        image: getChatbotAvatar(12),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'fourteen',
        image: getChatbotAvatar(13),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'fifteen',
        image: getChatbotAvatar(14),
        extraStyle: {width: 150, height: 150},
      },
      {
        key: 'sixteen',
        image: getChatbotAvatar(15),
        extraStyle: {width: 150, height: 150},
      },
    ];

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customHeaderPaddingHeight={-1000}
        customImageName={Images.ui.BackgroundGradient1}>
        <View
          style={{
            flex: 1,

            alignContent: 'center',
          }}>
          <StatusBar translucent backgroundColor="transparent" />

          <KeyboardAvoidingView
            style={{
              flex: 1,
            }}
            behavior="padding"
            enabled={iosPlatform()}>
            <ScrollView testID={'pageScrollview'} style={{flex: 1}}>
              <View style={{flex: 1}}>
                <View style={{flex: 2}}>
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Image
                      source={Images.chatbot.ChatbubbleIntro1}
                      style={{
                        position: 'relative',
                        height: 120,
                        width: 230,
                        top: 18,
                        zIndex: 5,
                      }}
                    />
                  </View>
                  <View style={{flex: 2.5}}>
                    <PageSwiper
                      swiperContainerStyle={{}}
                      customPaginationContainerStyle={{
                        height: 24,
                        marginVertical: 0,
                        paddingVertical: 0,
                      }}
                      onChangeIndex={this.changeAIChatbotIndex}
                      dotStyle={{backgroundColor: theme.COLORS.TRANSPARENT}}
                      skipLabel={''}
                      doneLabel={''}
                      nextLabel={''}
                      prevLabel={''}
                      renderItem={({item}) => {
                        return (
                          <View
                            style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginHorizontal: theme.SIZES.BASE,
                              backgroundColor: item.backgroundColor,
                            }}>
                            <Image
                              source={item.image}
                              style={{
                                ...styles.onboardingHeaderImage,
                                marginBottom: theme.SIZES.BASE,
                                ...item.extraStyle,
                              }}
                            />
                          </View>
                        );
                      }}
                      data={onboardingSlidesData}
                      onDone={() => console.log('HIIIII')}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.3,
                      marginHorizontal: theme.SIZES.BASE,
                      marginBottom: theme.SIZES.BASE * 0.5,
                    }}>
                    <Text
                      style={{
                        color: theme.COLORS.BLACK,
                        textAlign: 'center',
                      }}>
                      Swipe to change the appearance
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignContent: 'center',
                    alignItems: 'center',
                    borderRadius: theme.SIZES.BASE * 2,
                    elevation: 2,
                    backgroundColor: theme.COLORS.WHITE,
                    padding: theme.SIZES.BASE * 1.5,
                    marginBottom: theme.SIZES.BASE * 2,
                    marginHorizontal: theme.SIZES.BASE,
                  }}>
                  <Text
                    style={{
                      fontSize: theme.SIZES.H5 + 2,
                      color: theme.COLORS.TEXT1,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Meet your AI Assistant
                  </Text>
                  <Text
                    style={{
                      color: theme.COLORS.BLACK,
                      textAlign: 'center',
                      fontSize: theme.SIZES.B1,
                      marginVertical: theme.SIZES.BASE,
                      lineHeight: 22,
                    }}>
                    Lasa can answer questions, lead you through breathing
                    exercises, and validate you in your time of need.
                  </Text>

                  <View style={{marginBottom: theme.SIZES.BASE}}>
                    <Button
                      testID="getStartedButton"
                      style={{
                        ...styles.button,
                        width: width * 0.85,
                      }}
                      onPress={() =>
                        navigation.replace('ProfileSetup', {
                          profileSetupProgress: 0,
                        })
                      }
                      titleStyle={{
                        color: theme.COLORS.WHITE,
                        fontFamily: theme.FONTS.HEADER,
                      }}
                      title="Let's get started!"
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};
export default connect(mapStateToProps)(ChatbotIntroScreen);
