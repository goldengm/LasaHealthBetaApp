# amie_health_app_v1

Use this for free vector icons:
https://oblador.github.io/react-native-vector-icons/

Greate directory of helpful/free react-native repos:
https://github.com/jondot/awesome-react-native

repo of standard react native components and animations, free to use:
https://docs.nativebase.io/kitchen-sink

generally if you want a prebuilt componant, your best friend is google image search. Find what looks right and follow the links for inspiration.

Here are componant libraries I'm using:
Galio:
https://galio.io/docs/#/components/accordion

Basic react native:
https://reactnative.dev/docs/components-and-apis

react native progress:
https://github.com/oblador/react-native-progress

Info on Google Cloud BAA:
https://apps.google.com/supportwidget/articlehome?hl=en&article_url=https%3A%2F%2Fsupport.google.com%2Fa%2Fanswer%2F3407054%3Fhl%3Den&product_context=3407054&product_name=UnuFlow&trigger_context=a

google hipaa guide:
https://services.google.com/fh/files/misc/final_gsuite_cloud_identity_hipaa_implementation_guide_june_2020.pdf

https://www.reddit.com/r/Firebase/comments/d3gtkw/firebase_and_hipaa/

chatbot resources:
https://towardsdatascience.com/deep-learning-for-natural-language-processing-on-mobile-devices-3024747a7043

This might be a decent nlp chatbot which can run directly on device with react-native:
https://openbase.com/js/@nlpjs/nlu/documentation

UI REVIEW NOTES:

Android Studio APK Build Guide:
Make sure github is synced.
Build locally with react-native run-android

// // FIXMETUNA: add the next two lines to create standalone app apk without metro server // in build.gradle (app)
// // Need to copy and paste these lines below into project.exe.react = []
// bundleInDebug: true,
// devDisabledInDebug: true,

Build locally again with react-native run-android
then grab the new apk at: android/app/build/outputs/apk/debug/app-debug.apk

XCode Testflight build guide:
Make sure github is synced in xcode.
use pod install to sync packages
Build locally with npx react-native run-ios

APP BUILD FAIL QA STEPS:

// Here are a set of commands which should fully clean a broken rn project
watchman watch-del-all
rm -rf yarn.lock package-lock.json node_modules
rm -rf android/app/build
rm ios/Pods ios/Podfile.lock
rm -rf ~/Library/Developer/Xcode/DerivedData
npm install && cd ios && pod update && cd ..
npm start -- --reset-cache
gradlew clean
rmdir /S /Q (to remove directories)

// build release aab
// might need to run this first in order to update the release version
// run bundleRelease twice because first generated crashes sometimes
// aab is located at android\app\build\outputs\bundle\release
yarn androidRelease
gradlew bundleRelease
gradlew bundleRelease

// might need to clear google play store cache if the latest update isn't showing
// up for internal releases

BUILD FAIL AGRESSIVE STEP:
I could upgrade react native to the newest version (~0.69) which I'll need to do eventually anyway
It will be a pain but will force me to upgrade a lot of packages and will future proof the project

Art asset sources:
https://itch.io/game-assets/tag-flower
https://www.textures.com/browse/grass-tall/16487
https://www.toptal.com/designers/subtlepatterns/beige-tiles/

Colorize Lottie tools:
https://colorize-react-native-lottie.netlify.app/
https://github.com/lottie-react-native/lottie-react-native/blob/master/docs/api.md

React native game resources:
https://github.com/oblador/react-native-animatable
https://docs.swmansion.com/react-native-reanimated/docs/community/
https://moti.fyi/animations
https://reanimated.funcs.io/#/community/moti
https://www.newline.co/@kchan/stunning-react-native-svg-animations-with-lottie--3604049c
https://lottiefiles.com/search?q=sparkle&category=animations&animations-page=5

Temporary fix for broken debugger:
https://stackoverflow.com/questions/61067004/invariant-violation-calling-synchronous-methods-on-native-modules-is-not-suppor/66583605#66583605

TODO: setup needed for IOS Detox and Jest automated testing:
https://wix.github.io/Detox/docs/introduction/getting-started/

TODO: I might need to update proguard rules if I want to test release builds tools
https://wix.github.io/Detox/docs/introduction/android/

React native Testing with Redux:
(maybe a guide to using redux in testing)
https://www.callstack.com/blog/react-native-testing-library-with-redux

Guide to updating Google Cloud functions:
cloud function definitions can be found in functions/index.js
// NOTE: run the command below in powershell to deploy cloud functions
// // $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\Tunadude09\Projects\Work\Meliora\App\amie_app_alpha\firebase.secretkeys.json"
// or in cmd
// set [GOOGLE_APPLICATION_CREDENTIALS=["C:\Users\Tunadude09\Projects\Work\Meliora\App\amie_app_alpha\firebase.secretkeys.json"]]
// set [GOOGLE_APPLICATION_CREDENTIALS=["C:\Users\tunad\Projects\Work\Amie_Health\amie_app_alpha\firebase.secretkeys.json"]]
// // firebase deploy --only functions,hosting

// NOTE: various helpful docs
// const firebaseConfig = {
// credential: admin.credential.applicationDefault(),
// databaseURL: "https://amie-health.firebaseio.com",
// };
// admin.initializeApp(firebaseConfig);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// NOTE: Calling a https cloud function directly
// gcloud functions call YOUR_FUNCTION_NAME --data '{"name":"Keyboard Cat"}'
// gcloud functions call createNewUserAuth --data '{"email":"dummmyTestMex123@gmail.com"}'
// or you can test the function directly in the google cloud command console on the functions page

// fix build tools v 33.0.0
// cd $ANDROID_HOME/build-tools/31.0.0; ln -s d8 dx; ln -s lib/d8.jar lib/dx.jar;

// for password resets, run testing of function transferAppSaveStateToNewUIDTMP directly through GCP console
// use this as the json for replacing someone's account
// { "data": {
// "olduid": "lYCFNeJ4TKb3ygkpaP60zOE3FKs1",
// "newuid":"teeeeest12345"
// }}

// to configure splash screen

<!-- yarn expo-splash-screen -i assets/amieSplash.png -b #FFFFFF -->
<!-- yarn configure-splash-screen -b white --dark-mode-background-color white --dark-mode-status-bar-background-color white --status-bar-background-color white -i C:\Users\tunad\Projects\Work\Amie_Health\amie_app_alpha\assets\amieSplash.png -->

// Follow this guide to configre ios splash screen
https://github.com/expo/expo/tree/sdk-46/packages/expo-splash-screen

// run to clean out cocoapods
rm -rf ~/Library/Caches/CocoaPods; rm -rf Pods; rm -rf ~/Library/Developer/Xcode/DerivedData/\*;

// or  
pod deintegrate

// or
cd ios/
pod repo update
rm -rf Podfile.lock Pods
pod install

// redeeming offer codes on ios - here's a direct link method since in app doesn't work
// in store and in app both work on Android
https://apps.apple.com/redeem?ctx=offercodes&id={apple_app_id}&code={code}
https://apps.apple.com/redeem?ctx=offercodes&id=6443507327&code=WELCOME33
https://apps.apple.com/redeem?ctx=offercodes&id=6443507327&code=WELCOME33

add in again once purchases are restored

    "react-native-purchases": "^5.1.1",
