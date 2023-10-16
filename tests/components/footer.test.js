import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {shallow} from 'enzyme';
import Footer from '../../components/Footer';
import {theme, styles} from '../../constants';

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));
jest.mock('victory-native', () => ({}));
jest.mock('react-native-device-info', () => ({}));
jest.mock('firebase/compat/app', () => ({
  apps: [0],
  app: jest.fn(() => {
    return {
      firestore: () => {
        return {
          settings: () => {},
        };
      },
      functions: () => {},
    };
  }),
  auth: function auth() {
    auth.Auth = {
      Persistence: {
        LOCAL: '_',
        SESSION: '_',
      },
    };

    return {
      setPersistence: () => Promise.resolve(),
      // signInWithEmailAndPassword: (email, password) =>
      //     new Promise<void>((res, rej) => { /* ...code */}),
    };
  },
}));
jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));
jest.mock('@react-native-firebase/functions', () => ({}));
//jest.mock('react-native-purchases', () => ({}));

it('Testing Footer instantiation', async () => {
  // const componantInstance = shallow(<Footer />);
  // <Footer
  //   style={{
  //     ...styles.petal3Bubble,
  //     borderColor: styles.petal3Bubble["backgroundColor"],
  //     borderWidth: 2,
  //     width: styles.petal3Bubble.width,
  //     height: styles.petal3Bubble.height,
  //     marginHorizontal: 2,
  //   }}
  //   disabled={true}
  //   iconName=""
  //   bubbleName=""
  //   customOnPress={() => {}}
  //   viewBackgroundColor={theme.COLORS.ELEMENT_BACKGROUND}
  // />
  expect(Footer).toBeTruthy();
  // expect(componantInstance).toBeTruthy();
  // expect(componantInstance.instance()).toBeTruthy();
  // expect(componantInstance.find(TouchableOpacity)).toBeTruthy();
});
