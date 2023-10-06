import {Dimensions} from 'react-native';
import {createTheme} from 'react-native-elements';
const {height, width} = Dimensions.get('screen');

import {getOS} from '../shared/PlatformUtils';

const iosPlatform = () => getOS() === 'ios';

export const BASE = 16;

const theme = {
  COLORS: {
    DEFAULT: '#56AB78',
    PRIMARY: '#56AB78',
    SECONDARY: '#E7BE36',
    LABEL: '#66C7D6',
    INFO: '#E7BE36',
    ERROR: '#EA7348',
    SUCCESS: '#04B78A',
    WARNING: '#EA7348',
    BASE: '#56AB78',
    /*not yet changed */
    MUTED: '#EAEBEE',
    INPUT: '#F6F6F9',
    INPUT_SUCCESS: '#E7BE36',
    INPUT_ERROR: '#66C7D6',
    ACTIVE: '#D1EEF3', //same as primary
    BUTTON_COLOR: '#66C7D6', //wtf
    PLACEHOLDER: '#EAEBEE',
    SWITCH_ON: '#EAEBEE',
    SWITCH_OFF: '#F6F6F9',
    GRADIENT_START: '#66C7D6',
    GRADIENT_END: '#F6F6F9',
    PRICE_COLOR: '#E7BE36',
    BORDER_COLOR: '#F6F6F9',
    BLOCK: '#F6F6F9',
    ICON: '#B8B8B8',
    HEADER: '#222222',
    BORDER: '#EAEBEE',
    WHITE: '#FFFFFF',
    BLACK: '#222222',

    TRACK_PRIMARY: '#66C7D6',
    TRACK_SECONDARY: '#D1EEF3',
    LEARN_PRIMARY: '#E7BE36',
    LEARN_SECONDARY: '#EFD580',
    HEAL_PRIMARY: '#326C29',
    HEAL_SECONDARY: '#56AB78',
    APP_BACKGROUND: '#F6F6F9',
    ELEMENT_BACKGROUND: '#FFFFFF',

    MELBLUE: '#66C7D6',
    MELDARKGREY: '#B8B8B8',
    MELPINK: '#FA5087',
    MELRED: '#EA7348',
    MELGREY: '#EAEBEE',
    MELGREEN: '#326C29',
    MELWHITE: '#FFFFFF',
    MELYELLOW: '#E7BE36',
    MELLIGHTYELLOW: '#EFD580',
    MELPUREWHITE: '#FFFFFF',
    MELBLACK: '#222222',

    BACKGROUND1: '#FFFFFF',
    BACKGROUND2: '#F6F6F9',
    BACKGROUND3: '#EAEBEE',
    BACKGROUND4: '#DBDDE1',
    BACKGROUND5: '#DBDDE1',
    BACKGROUND6: '#CCCCCC',
    TEXT1: '#222222',
    TEXT2: '#5E5E5E',
    TEXT3: '#B8B8B8',
    TEXT4: '#FFFFFF',
    PRIMARY1: '#326C29',
    PRIMARY2: '#56AB78',
    PRIMARY3: '#B7E7DA',
    PRIMARY4: '#CCE6D7',
    PRIMARY5: '#E1E0FF',
    SECONDARY1: '#E7BE36',
    SECONDARY2: '#EFD580',
    SECONDARY3: '#F8ECC3',
    SECONDARY4: '#8FC6FE',
    SECONDARY5: '#E1F0FF',
    TERTIARY1: '#66C7D6',
    TERTIARY2: '#D1EEF3',
    TERTIARY3: '#FFD655',
    TERTIARY4: '#FFEAA7',
    TERTIARY5: '#FFF8E0',
    SUCCESS1: '#04B78A',
    SUCCESS2: '#1FD0A3',
    SUCCESS3: '#59DDBB',
    SUCCESS4: '#8DEAD2',
    SUCCESS5: '#E5FAF5',
    ERROR1: '#EA7348',
    ERROR2: '#f2a88d',
    ERROR3: '#ec855f',
    ERROR4: '#FFEAD4',
    ERROR5: '#FF95B7',
    ERROR5: '#FFE0EA',
    ADDITIONALLY1: '#59DDBB',
    ADDITIONALLY2: '#FFD655',
    ADDITIONALLY3: '#6863FB',

    FACEBOOK: '#3B5998',
    TWITTER: '#5BC0DE',
    DRIBBBLE: '#EA4C89',

    TRANSPARENT: 'transparent',
    NEUTRAL: 'rgba(255,255,255, 0.65)',

    THEME: '#3b4059',
    DARK_PRIMARY: '#F4075C',
    LIGHT_PRIMARY: '#FF8AB9',
    BRIGHT_PRIMARY: '#FFD1E4',
    DARK_INFO: '#0520D0',
    LIGHT_INFO: '#8794FF',
    BRIGHT_INFO: '#D1D6FF',
    DARK_DANGER: '#F43324',
    LIGHT_DANGER: '#FF7167',
    BRIGHT_DANGER: '#FFCAC6',
    DARK_WARNING: '#EE8E00',
    LIGHT_WARNING: '#FFCC76',
    BRIGHT_WARNING: '#FFEBCB',
    DARK_SUCCESS: '#24AD12',
    LIGHT_SUCCESS: '#88F38E',
    BRIGHT_SUCCESS: '#D2FBD3',
    DARK_BLACK: '#000B19',
    BRIGHT_BLACK: '#3D4144',
    LIGHT_BLACK: '#2A2F36',
    DARK_SECONDARY: '#62676B',
    BRIGHT_SECONDARY: '#EEF1F3',
    LIGHT_SECONDARY: '#D6DADD',
    DARKEST_GREY: '#a3a3a3',
    DARK_GREY: '#E0E4EA',
    BRIGHT_GREY: '#F7F8F9',
    LIGHT_GREY: '#F0F1F4',
    WHITEST_WHITE: '#FFFFFF',

    GARDEN_LIGHT_BROWN: '#cc9966',
    GARDEN_BROWN: '#996633',
    GARDEN_DARK_BROWN: '#4d3319',
    GARDEN_LIGHT_GREEN: '#66cc66',
    GARDEN_GREEN: '#339933',
    GARDEN_DARK_GREEN: '#206020',

    OVERLAY_BACKGROUND: 'rgba(0,0,0,0.5)',
    OVERLAY_BACKGROUND_HALF: 'rgba(0,0,0,0.25)',
    OVERLAY_HIGHLIGHT: 'rgba(255,255,255, 0.3)',
  },
  FONTS: {
    TEXT: iosPlatform() ? 'nunito' : 'nunito',
    HEADER: iosPlatform() ? 'nunito' : 'nunito',
  },
  SIZES: {
    BASE: BASE,
    FONT: BASE,
    HEADERRADIUS: 32,
    OPACITY: 0.6,
    BORDER_RADIUS: 4,
    BORDER_WIDTH: 0.8,

    // Typography
    D1: 72,
    D2: 64,
    H1: 56,
    H2: 48,
    H3: 40,
    H4: 32,
    H5: 24,
    H6: 18,
    B1: 16,
    B2: 14,
    B3: 13,
    C1: 16,
    C2: 14,
    C3: 12,
    C4: 10,

    // Icons
    ICON: BASE,
    ICON_MEDIUM: BASE * 1.5,
    ICON_LARGE: BASE * 2,

    // Button styles
    BUTTON_WIDTH: BASE * 9,
    BUTTON_HEIGHT: BASE * 2.75,
    BUTTON_SHADOW_RADIUS: 3,

    // Block styles
    BLOCK_SHADOW_OPACITY: 0.15,
    BLOCK_SHADOW_RADIUS: 8,
    ANDROID_ELEVATION: 1,

    // Card styles
    CARD_BORDER_RADIUS: BASE * 0.4,
    CARD_BORDER_WIDTH: BASE * 0.05,
    CARD_WIDTH: width - BASE * 2,
    CARD_MARGIN_VERTICAL: BASE * 0.875,
    CARD_FOOTER_HORIZONTAL: BASE * 0.75,
    CARD_FOOTER_VERTICAL: BASE * 0.75,
    CARD_AVATAR_WIDTH: BASE * 2.5,
    CARD_AVATAR_HEIGHT: BASE * 2.5,
    CARD_AVATAR_RADIUS: BASE * 1.25,
    CARD_IMAGE_HEIGHT: BASE * 12.5,
    CARD_ROUND: BASE * 0.1875,
    CARD_ROUNDED: BASE * 0.5,

    // Input styles
    INPUT_BORDER_RADIUS: BASE * 0.5,
    INPUT_BORDER_WIDTH: BASE * 0.05,
    INPUT_HEIGHT: BASE * 2.75,
    INPUT_HORIZONTAL: BASE,
    INPUT_VERTICAL_TEXT: 14,
    INPUT_VERTICAL_LABEL: BASE / 2,
    INPUT_TEXT: BASE * 0.875,
    INPUT_ROUNDED: BASE * 1.5,

    // NavBar styles
    NAVBAR_HEIGHT: BASE * 4.125,
    NAVBAR_VERTICAL: BASE,
    NAVBAR_TITLE_FLEX: 2,
    NAVBAR_TITLE_HEIGHT: height * 0.07,
    NAVBAR_TITLE_TEXT: BASE * 0.875,
    NAVBAR_LEFT_FLEX: 0.5,
    NAVBAR_LEFT_HEIGHT: height * 0.07,
    NAVBAR_LEFT_MARGIN: BASE,
    NAVBAR_RIGHT_FLEX: 0.5,
    NAVBAR_RIGHT_HEIGHT: height * 0.07,
    NAVBAR_RIGHT_MARGIN: BASE,

    // CheckBox
    CHECKBOX_WIDTH: 20,
    CHECKBOX_HEIGHT: 20,

    // Slider
    TRACK_SIZE: 4,
    THUMB_SIZE: 25,

    // Radio Button
    RADIO_WIDTH: 24,
    RADIO_HEIGHT: 24,
    RADIO_THICKNESS: 2,
  },
};
export default theme;

export const globalTheme = createTheme({
  colors: {
    primary: theme.COLORS.DEFAULT,
    secondary: theme.COLORS.PRIMARY,
    white: theme.COLORS.WHITE,
    black: theme.COLORS.BLACK,
    grey0: theme.COLORS.SECONDARY,
    grey1: theme.COLORS.ICON,
    grey2: theme.COLORS.ICON,
    grey3: theme.COLORS.ICON,
    grey4: theme.COLORS.MUTED,
    grey5: theme.COLORS.MUTED,
    greyOutline: theme.COLORS.MUTED,
    searchBg: theme.COLORS.WHITE,
    success: theme.COLORS.SUCCESS,
    error: theme.COLORS.ERROR,
    warning: theme.COLORS.WARNING,
    divider: theme.COLORS.MUTED,
    StatusBar: {
      color: theme.COLORS.WHITE,
      backgroundColor: theme.COLORS.WHITE,
    },
    platform: {
      ios: {
        primary: theme.COLORS.DEFAULT,
        secondary: theme.COLORS.PRIMARY,
        grey: theme.COLORS.SECONDARY,
        searchBg: theme.COLORS.WHITE,
        success: theme.COLORS.SUCCESS,
        error: theme.COLORS.ERROR,
        warning: theme.COLORS.WARNING,
      },
      android: {
        primary: theme.COLORS.DEFAULT,
        secondary: theme.COLORS.PRIMARY,
        grey: theme.COLORS.SECONDARY,
        searchBg: theme.COLORS.WHITE,
        success: theme.COLORS.SUCCESS,
        error: theme.COLORS.ERROR,
        warning: theme.COLORS.WARNING,
      },
      web: {
        primary: theme.COLORS.DEFAULT,
        secondary: theme.COLORS.PRIMARY,
        grey: theme.COLORS.SECONDARY,
        searchBg: theme.COLORS.WHITE,
        success: theme.COLORS.SUCCESS,
        error: theme.COLORS.ERROR,
        warning: theme.COLORS.WARNING,
      },
    },
  },
  Text: {style: {fontFamily: theme.FONTS.TEXT}},

  Button: {
    style: {
      fontFamily: theme.FONTS.TEXT,
    },
    titleStyle: {
      fontFamily: theme.FONTS.TEXT,
    },
  },

  Chip: {
    titleStyle: {
      fontFamily: theme.FONTS.TEXT,
    },
  },

  SystemMessage: {
    textStyle: {
      fontFamily: theme.FONTS.TEXT,
    },
  },
  CheckBox: {
    textStyle: {
      fontFamily: theme.FONTS.TEXT,
    },
  },
  'Tab.Item': {
    titleStyle: {
      fontFamily: theme.FONTS.TEXT,
    },
  },
  'ListItem.Title': {
    style: {
      fontFamily: theme.FONTS.TEXT,
    },
  },
});
