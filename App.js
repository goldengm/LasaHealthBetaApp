import React, {useEffect} from 'react';
import {useFonts} from '@use-expo/font';
import {ThemeProvider} from 'react-native-elements';
// import CryptoJS from 'crypto-js';
// import Purchases from 'react-native-purchases';
import ToastProvider from './components/ToastProvider';
//  FIXMETUNA:  some added security, testing
// import JailMonkey from 'jail-monkey';
//   //  FIXMETUNA: I need to add this back in to detect jailbroken devices
//   //  if (JailMonkey.isJailBroken()) {
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as ScreenOrientation from 'expo-screen-orientation';
// import {useFlipper} from '@react-navigation/devtools';
import Screens from './navigation/Screens';
import {globalTheme} from './constants/Theme';
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
// import {Platform} from 'react-native';
import {GardenProvider} from './garden/GardenProvider';

import {getOS} from './shared/PlatformUtils';
// Before rendering any navigation stack
import {enableScreens} from 'react-native-screens';
enableScreens();
const iosPlatform = () => getOS() == 'ios';

//  FIXMETUNA:  remove this later, it's just for detox testing
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
]);
LogBox.ignoreLogs([
  'Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android',
]);
LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
]);

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false);
  const navigationRef = React.useRef(null);

  // useFlipper(navigationRef);
  let [fontsLoaded] = useFonts({
    AmieLineal: require('./assets/font/amieLineal.ttf'),
    AmieSolid: require('./assets/font/amieSolid.ttf'),
  });

  async function lockScreenOrientation() {
    await ScreenOrientation.lockAsync(
      iosPlatform()
        ? ScreenOrientation.OrientationLock.PORTRAIT_UP
        : ScreenOrientation.OrientationLock.PORTRAIT,
    );
  }

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        lockScreenOrientation();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 2000));

        // //  FIXMETUNA:
        // //  FIXMETUNA: Add in once Revenuecat is setup
        // //  FIXMETUNA:
        // Purchases.setDebugLogsEnabled(true);

        // if (iosPlatform()) {
        //   await Purchases.configure({
        //     apiKey: 'appl_QdXOZzVwqqZyyYcpYwAPnMRANaF',
        //   });
        // } else {
        //   await Purchases.configure({
        //     apiKey: 'goog_oiaKteeNfORbXHvbXdqFposEPmZ',
        //   });
        // }

        // const offerings = await Purchases.getOfferings();
        // if (offerings.current !== null) {
        //   // Display current offering with offerings.current
        //   console.log(
        //     'REVENUECAT, current offerings: ',
        //     offerings.current.availablePackages,
        //   );
        // } else {
        //   console.log('REVENUECAT, offerings obj: ', offerings);
        // }
      } catch (e) {
        console.log('App OnMount: ', e);
      } finally {
        // Tell the application to render
        // setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // } else {
  //  FIXMETUNA:
  //  adding in redux store
  const [store, storePersistor] = configureStore();

  // const isHermes = () => !!global.HermesInternal;
  // console.log('Hermes engine enabled?: ', isHermes());
  const isHermes = () => !!global.HermesInternal;
  console.log('Hermes engine enabled?: ', isHermes());
  // console.log('CryptoJS package version: ', CryptoJS.version);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={storePersistor}>
          <NavigationContainer
            ref={navigationRef}
            // screenOptions={({ navigation: nav }) => (navigatorRef.current = nav)}
          >
            <ThemeProvider theme={globalTheme}>
              <ToastProvider>
                {/* <View style={{ flex: 1 }}>
                    <GardenControllerWrapper
                        innerRef={gardenControllerRef} 
                        /> */}
                <GardenProvider>
                  <Screens />
                </GardenProvider>
                {/* gardenControllerRef={gardenControllerRef}/> */}
                {/* <Footer title="Hello" navigation={navigatorRef} /> 
                  </View>*/}
              </ToastProvider>
            </ThemeProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
