module.exports = {
  //  FIXMETUNA:  I either get import errors or firebase errors depending on the preset, investigate
  preset: 'react-native',
  // preset: "jest-expo",

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  // moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],

  // transformIgnorePatterns: [
  //   "node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)",
  // ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|react-navigation|react-navigation-redux-helpers|@react-navigation|@react-native(-community)?)/)',
    '/node_modules/(?!native-base)/',

    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  // transformIgnorePatterns: [
  //   "node_modules/(?!((jest-)?react-native(-.*)?|@react-navigation|@firebase|@react-native(-community)?)/)",
  // ],
  // transform: {
  //   "^.+\\.(ts|tsx)?$": "ts-jest",
  //   "^.+\\.(js|jsx)$": "babel-jest",
  // },
  // automock: true,

  // testEnvironment: "jsdom",

  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],

  moduleNameMapper: {
    '\\.svg': '<rootDir>/tests/__mocks__/svgMock.js',
  },

  testEnvironment: 'node',
};
