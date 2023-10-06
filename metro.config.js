// // expo v40:
// // const { getDefaultConfig } = require("@expo/metro-config");

// // // expo v41:
// // // remove the @ (see: https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
// const {getDefaultConfig} = require('expo/metro-config');

// //  expo v49
// // const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// // //  required to fix a Error: EPERM: operation not permitted, lst, build bug
// // //  it just ignores some android files metro shouldn't look at anyway
// // var getBlacklistRE = function getBlacklistRE() {
// //   return new RegExp(
// //     '(.*\\android\\.*|.*\\__fixtures__\\.*|node_modules[\\\\]react[\\\\]dist[\\\\].*|website\\node_modules\\.*|heapCapture\\bundle.js|.*\\__tests__\\.*)$',
// //   );
// // };

// // module.exports = {
// //   resolver: {
// //     blacklistRE: getBlacklistRE(),
// //   },
// // };

// // module.exports = (async () => {
// //   const {
// //     resolver: {sourceExts, assetExts},
// //   } = await getDefaultConfig(__dirname);
// //   return {
// //     transformer: {
// //       babelTransformerPath: require.resolve('react-native-svg-transformer'),
// //       assetPlugins: ['expo-asset/tools/hashAssetFiles'],
// //       inlineRequires: true,
// //       transform: {
// //         experimentalImportSupport: true,
// //         inlineRequires: true,
// //         resetCache: true,
// //       },
// //     },
// //     resolver: {
// //       assetExts: assetExts.filter(ext => ext !== 'svg'),
// //       sourceExts: [...sourceExts, 'svg', 'jsx', 'js', 'ts', 'tsx', 'cjs'],
// //       blacklistRE: getBlacklistRE(),
// //     },
// //   };
// // })();

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

//  required to fix a Error: EPERM: operation not permitted, lst, build bug
//  it just ignores some android files metro shouldn't look at anyway
var getBlacklistRE = function getBlacklistRE() {
  return new RegExp(
    '(.*\\android\\.*|.*\\__fixtures__\\.*|node_modules[\\\\]react[\\\\]dist[\\\\].*|website\\node_modules\\.*|heapCapture\\bundle.js|.*\\__tests__\\.*)$',
  );
};

// module.exports = {
//   resolver: {
//     blacklistRE: getBlacklistRE(),
//   },
// };

// const {
//   resolver: {sourceExts, assetExts},
// } = getDefaultConfig(__dirname);

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

// defaultConfig["resolver"]["sourceExts"]

const buildConfig = mergeConfig({
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    inlineRequires: true,
    transform: {
      experimentalImportSupport: true,
      inlineRequires: true,
      resetCache: true,
    },
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg', 'jsx', 'js', 'ts', 'tsx', 'cjs'],
    blacklistRE: getBlacklistRE(),
  },
});

// const defaultConfig = {
//   resolver: {sourceExts, assetExts},
// };

// const defaultConfig = getDefaultConfig(__dirname);

// const config = {};

module.exports = mergeConfig(defaultConfig, buildConfig);

// module.exports = mergeConfig(
//   {
//     resolver: {sourceExts: sourceExts, assetExts: assetExts},
//   },
//   config,
// );

// module.exports = (async () => {
//   const {
//     resolver: {sourceExts, assetExts},
//   } = getDefaultConfig(__dirname);
//   return mergeConfig(
//     {
//       transformer: {
//         babelTransformerPath: require.resolve('react-native-svg-transformer'),
//         assetPlugins: ['expo-asset/tools/hashAssetFiles'],
//         inlineRequires: true,
//         transform: {
//           experimentalImportSupport: true,
//           inlineRequires: true,
//           resetCache: true,
//         },
//       },
//       resolver: {
//         assetExts: assetExts.filter(ext => ext !== 'svg'),
//         sourceExts: [...sourceExts, 'svg', 'jsx', 'js', 'ts', 'tsx', 'cjs'],
//         blacklistRE: getBlacklistRE(),
//       },
//     }
//   );
// })();

// // const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// // /**
// //  * Metro configuration
// //  * https://facebook.github.io/metro/docs/configuration
// //  *
// //  * @type {import('metro-config').MetroConfig}
// //  */
// // const config = {};

// // module.exports = mergeConfig(getDefaultConfig(__dirname), config);
