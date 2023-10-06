//  Primarily preset styles for creating screens
//  Componants don't use these (as they're designed to be very customizable)
import {StyleSheet, Dimensions} from 'react-native';
import theme from './Theme';
import {HeaderHeight} from '../constants/utils';

import {getOS} from '../shared/PlatformUtils';

const {width, height} = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;
export const cardWidth = width - theme.SIZES.BASE * 2;

const styles = StyleSheet.create({
  //  #
  //  #
  //  #
  //  CONTAINERS:
  //  #
  //  #
  //  #
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.MELBLUE,
    fontFamily: theme.FONTS.TEXT,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.FONTS.TEXT,
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.FONTS.TEXT,
  },
  sendingContainer: {
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.FONTS.TEXT,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 0,
    fontFamily: theme.FONTS.TEXT,
  },
  registerContainer: {
    marginTop: theme.SIZES.BASE * 2,
    marginBottom: theme.SIZES.BASE * 0.5,
    marginHorizontal: width * 0.025,

    backgroundColor: theme.COLORS.WHITE,
    fontFamily: theme.FONTS.TEXT,
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80,
    fontFamily: theme.FONTS.TEXT,
  },
  standardElementContainer: {
    marginVertical: theme.SIZES.BASE * 0.5,
    marginHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE * 0.5,
    paddingHorizontal: theme.SIZES.BASE * 0.3,
    backgroundColor: theme.COLORS.ELEMENT_BACKGROUND,
    borderRadius: theme.SIZES.BASE,
    fontFamily: theme.FONTS.TEXT,
    elevation: 1,
  },
  standardAppBackgroundContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.APP_BACKGROUND,
    fontFamily: theme.FONTS.TEXT,
  },
  standardWideElementContainer: {
    marginVertical: theme.SIZES.BASE * 0.5,
    paddingVertical: theme.SIZES.BASE * 0.5,
    paddingHorizontal: theme.SIZES.BASE * 0.3,
    backgroundColor: theme.COLORS.ELEMENT_BACKGROUND,
    fontFamily: theme.FONTS.TEXT,
    elevation: 1,
  },
  graphContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallStatsContainer: {
    marginVertical: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    backgroundColor: theme.COLORS.ELEMENT_BACKGROUND,
    borderRadius: theme.SIZES.BASE * 2,
    fontFamily: theme.FONTS.TEXT,
  },
  homepageElementContainer: {
    marginVertical: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE * 0.5,
    paddingHorizontal: theme.SIZES.BASE * 0.3,
    backgroundColor: theme.COLORS.ELEMENT_BACKGROUND,
    borderRadius: theme.SIZES.BASE,
    fontFamily: theme.FONTS.TEXT,
    elevation: 1,
  },
  homepageSmallElementContainer: {
    marginVertical: theme.SIZES.BASE * 0.5,
    marginHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE * 0.5,
    paddingHorizontal: theme.SIZES.BASE * 0.1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',

    height: 140,
    width: 110,
    backgroundColor: theme.COLORS.ELEMENT_BACKGROUND,
    borderRadius: theme.SIZES.BASE,
    fontFamily: theme.FONTS.TEXT,
    elevation: 2,
  },
  homepageSmallWideElementContainer: {
    marginVertical: theme.SIZES.BASE * 0.5,
    marginHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE * 0.5,
    paddingHorizontal: theme.SIZES.BASE * 0.1,

    height: 70,
    width: 160,
    borderRadius: theme.SIZES.BASE,
    fontFamily: theme.FONTS.TEXT,
    elevation: 2,
  },
  homepageBackgroundContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.APP_BACKGROUND,
    fontFamily: theme.FONTS.TEXT,
  },
  homepageBackgroundImageContainer: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  connectSmallElementContainer: {
    marginVertical: theme.SIZES.BASE * 0.5,
    marginHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE * 0.5,
    paddingHorizontal: theme.SIZES.BASE * 0.1,

    height: 140,
    width: 140,
    borderRadius: theme.SIZES.BASE,
    fontFamily: theme.FONTS.TEXT,
    elevation: 1,
  },

  dropdown: {
    height: theme.SIZES.BASE * 2,
    fontSize: 10,
    fontFamily: theme.FONTS.TEXT,
  },

  //  #
  //  #
  //  #
  //  HEADERS:
  //  #
  //  #
  //  #
  header: {
    paddingHorizontal: 75,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center',
    fontFamily: theme.FONTS.TEXT,
  },
  headerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIconSmall: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 125,
    width: 110,
  },

  //  #
  //  #
  //  #
  //  IMAGES:
  //  #
  //  #
  //  #
  headerImage: {
    width: width,
    height: 300,
  },
  onboardingHeaderImage: {
    width: 350,
    height: 400,
  },
  learnCourseImage: {
    width: 300,
    height: 300,
  },

  //  #
  //  #
  //  #
  //  ICONS
  //  #
  //  #
  //  #
  healthStatusIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 320,
    width: 290,
    marginVertical: theme.SIZES.BASE,
  },
  inputIcons: {
    marginRight: 12,
  },
  chatAvatarIconSmall: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 45,
    width: 37,
  },
  chatAvatarIconLarge: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 76,
    height: 82,
  },

  //  #
  //  #
  //  #
  //  INPUTs:
  //  #
  //  #
  //  #
  chatInput: {
    paddingBottom: 10,
    fontFamily: theme.FONTS.TEXT,
  },
  amieChatInput: {
    backgroundColor: theme.COLORS.WHITE,
    padding: 0,
    borderRadius: 4,
    fontFamily: theme.FONTS.TEXT,
  },
  input: {
    borderBottomColor: theme.COLORS.PRIMARY,
    borderColor: theme.COLORS.DEFAULT,
    borderRadius: 10,
    fontFamily: theme.FONTS.TEXT,
  },

  //  #
  //  #
  //  #
  //  BUTTONS:
  //  #
  //  #
  //  #
  button: {
    width: theme.SIZES.BASE * 9,
    height: theme.SIZES.BASE * 3,
    borderRadius: theme.SIZES.BASE,
    shadowRadius: 0,
    shadowOpacity: 0,
    backgroundColor: theme.COLORS.PRIMARY2,
    fontFamily: theme.FONTS.TEXT,
  },
  outlinedButton: {
    width: theme.SIZES.BASE * 9,
    height: theme.SIZES.BASE * 3,
    textAlign: 'center',
    borderRadius: theme.SIZES.BASE,
    borderWidth: 1,
    borderColor: theme.COLORS.BASE,
    backgroundColor: theme.COLORS.WHITE,
    color: theme.COLORS.DEFAULT,
    fontFamily: theme.FONTS.TEXT,
  },
  mutedButton: {
    width: theme.SIZES.BASE * 9,
    height: theme.SIZES.BASE * 3,
    textAlign: 'center',
    borderRadius: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.BACKGROUND2,
    color: theme.COLORS.TEXT1,
    fontFamily: theme.FONTS.TEXT,
  },
  buttonTextOnly: {
    width: theme.SIZES.BASE * 9,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    backgroundColor: theme.COLORS.TRANSPARENT,
    fontFamily: theme.FONTS.TEXT,
  },
  textButton: {
    textAlign: 'center',
    backgroundColor: theme.COLORS.TRANSPARENT,
    color: theme.COLORS.DEFAULT,
    fontFamily: theme.FONTS.TEXT,
    fontSize: theme.SIZES.C1,

    marginTop: 0,
    paddingTop: 0,
    marginBottom: theme.SIZES.BASE * 0.5,
    paddingBottom: theme.SIZES.BASE * 0.5,
  },
  optionsButton: {
    width: 'auto',
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10,
    fontFamily: theme.FONTS.TEXT,
  },
  socialButtons: {
    width: 100,
    height: 40,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    marginHorizontal: 1,
    elevation: 1,
    fontFamily: theme.FONTS.TEXT,
  },
  socialTextButtons: {
    color: theme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14,
    fontFamily: theme.FONTS.TEXT,
  },

  //  #
  //  #
  //  #
  //  Accordion:
  //  #
  //  #
  //  #
  accordionHeaderStyle: {
    paddingLeft: theme.SIZES.BASE,
    fontFamily: theme.FONTS.TEXT,
  },
  accordionStyle: {
    paddingHorizontal: 0,
    width: '100%',
    fontFamily: theme.FONTS.TEXT,
  },
  learnAccordionStyle: {
    backgroundColor: theme.COLORS.PRIMARY2,
    marginHorizontal: theme.SIZES.BASE * 0.1,
    marginVertical: theme.SIZES.BASE * 0.2,
    paddingLeft: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE * 0.6,
    borderRadius: theme.SIZES.BASE * 0.5,
    width: '100%',
    fontFamily: theme.FONTS.TEXT,
    color: theme.COLORS.WHITE,
  },
  accordionListStyle: {
    fontFamily: theme.FONTS.TEXT,
  },
  accordionContentStyle: {
    fontFamily: theme.FONTS.TEXT,
  },

  //  #
  //  #
  //  #
  //  TITLES:
  //  #
  //  #
  //  #
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingTop: theme.SIZES.BASE,
    color: theme.COLORS.HEADER,
    fontFamily: theme.FONTS.TEXT,
  },
  subTitle: {
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    color: theme.COLORS.HEADER,
    fontFamily: theme.FONTS.TEXT,
  },
  boldTitle: {
    marginVertical: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE * 1.3,
    color: theme.COLORS.HEADER,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: theme.FONTS.TEXT,
  },
  categoryTitle: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.FONTS.TEXT,
  },
  paragraph: {
    marginTop: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    color: theme.COLORS.DEFAULT,

    fontSize: 18,
    fontFamily: theme.FONTS.TEXT,
  },
  systemMessageWrapper: {
    backgroundColor: theme.COLORS.PRIMARY,
    borderRadius: 4,
    padding: 5,
    fontFamily: theme.FONTS.TEXT,
  },
  systemMessageText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: theme.FONTS.TEXT,
  },

  //  #
  //  #
  //  #
  //  BUBBLES
  //  #
  //  #
  //  #
  pagedListBubble: {
    width: 60,
    height: 60,
  },
  petal1Bubble: {
    borderColor: theme.COLORS.PRIMARY1,
    backgroundColor: theme.COLORS.PRIMARY1,
    width: 60,
    height: 60,
    fontFamily: theme.FONTS.TEXT,
  },
  petal2Bubble: {
    borderColor: theme.COLORS.SECONDARY1,
    backgroundColor: theme.COLORS.SECONDARY1,
    width: 60,
    height: 60,
    fontFamily: theme.FONTS.TEXT,
  },
  petal3Bubble: {
    borderColor: theme.COLORS.TERTIARY1,
    backgroundColor: theme.COLORS.TERTIARY1,
    width: 60,
    height: 60,
    fontFamily: theme.FONTS.TEXT,
  },
  petal4Bubble: {
    borderColor: theme.COLORS.BLACK,
    backgroundColor: theme.COLORS.BLACK,
    width: 60,
    height: 60,
    fontFamily: theme.FONTS.TEXT,
  },
  petal5Bubble: {
    borderColor: theme.COLORS.ERROR1,
    backgroundColor: theme.COLORS.ERROR1,
    width: 60,
    height: 60,
    fontFamily: theme.FONTS.TEXT,
  },

  //  #
  //  #
  //  #
  //  LOGOS:
  //  #
  //  #
  //  #
  logo: {
    width: 240,
    height: 260,
    zIndex: 3,
    position: 'relative',
    marginTop: '-70%',
    fontFamily: theme.FONTS.TEXT,
  },
  logotext: {
    width: 376,
    height: 68,
    zIndex: 3,
    position: 'relative',
    marginTop: '0%',
    fontFamily: theme.FONTS.TEXT,
  },
  logoarea: {
    zIndex: 2,
    fontFamily: theme.FONTS.TEXT,
  },

  //  #
  //  #
  //  #
  //  PROFILES:
  //  #
  //  #
  //  #
  profile: {
    marginTop: getOS() === 'android' ? -HeaderHeight : 0,
    flex: 1,
    fontFamily: theme.FONTS.TEXT,
  },
  profileBackground: {
    width: width,
    height: height / 2,
    fontFamily: theme.FONTS.TEXT,
  },
  profileCard: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
    fontFamily: theme.FONTS.TEXT,
  },

  //  #
  //  #
  //  #
  //  CONDITIONS
  //  #
  //  #
  //  #
  condCard: {
    fontFamily: theme.FONTS.TEXT,
  },

  //  #
  //  #
  //  #
  //  MISC:
  //  #
  //  #
  //  #
  home: {
    fontFamily: theme.FONTS.TEXT,
  },
  articles: {
    fontFamily: theme.FONTS.TEXT,
  },
  searchResult: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: 0,
    marginVertical: 0,
    backgroundColor: theme.COLORS.SWITCH_OFF,
    shadowRadius: 0,
    fontFamily: theme.FONTS.TEXT,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
    fontFamily: theme.FONTS.TEXT,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
    fontFamily: theme.FONTS.TEXT,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
    fontFamily: theme.FONTS.TEXT,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
    fontFamily: theme.FONTS.TEXT,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
    fontFamily: theme.FONTS.TEXT,
  },
  imageBlock: {
    overflow: 'hidden',
    borderRadius: 4,
    fontFamily: theme.FONTS.TEXT,
  },
  info: {
    paddingHorizontal: 40,
    fontFamily: theme.FONTS.TEXT,
  },
  nameInfo: {
    marginTop: 35,
    fontFamily: theme.FONTS.TEXT,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
    fontFamily: theme.FONTS.TEXT,
  },
  divider: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    fontFamily: theme.FONTS.TEXT,
  },
  socialConnect: {
    backgroundColor: theme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA',
    fontFamily: theme.FONTS.TEXT,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    fontFamily: theme.FONTS.TEXT,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
    fontFamily: theme.FONTS.TEXT,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
    zIndex: 2,
    fontFamily: theme.FONTS.TEXT,
  },
});

export default styles;
