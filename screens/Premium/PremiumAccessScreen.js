// import React from 'react';
// import {Dimensions, ScrollView, View} from 'react-native';
// import {Text} from 'react-native-elements';
// import {connect} from 'react-redux';
// import {StatusBar} from 'expo-status-bar';
// import {KeyboardAvoidingView} from 'react-native';

// import {Button, Footer, RoundedTopContainer} from '../../components';
// import {Images, theme, styles} from '../../constants';
// import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
// import {hasPremiumAccess} from '../../shared/ServerUtils';
// import {exportSymptomHistoryToPDF} from '../../shared/AnalysisUtils';
// import {getOS} from '../../shared/PlatformUtils';

// const iosPlatform = () => getOS() == 'ios';
// const {width, height} = Dimensions.get('screen');

// class PremiumAccessScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedCRID: -1,
//     };
//   }

//   setSelectedCRID = value => {
//     this.setState({selectedCRID: value});
//   };

//   componentDidMount() {
//     Promise.resolve()
//       .then(() => hasPremiumAccess(this.props.userProfile))
//       .then(result => {
//         console.log('Has premium access 2: ', result);
//         if (!result) {
//           this.props.navigation.navigate('PremiumOptions');
//         }
//       });
//   }

//   renderFriendsList = () => {
//     const {navigation} = this.props;

//     return (
//       <ScrollView
//         testID="pageScrollview"
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           ...styles.articles,
//           backgroundColor: theme.COLORS.TRANSPARENT,
//         }}
//         style={{
//           backgroundColor: theme.COLORS.TRANSPARENT,
//         }}>
//         <RoundedTopContainer
//           style={{
//             paddingHorizontal: theme.SIZES.BASE,
//             minHeight: height - theme.SIZES.BASE * 6.6,
//             marginTop: theme.SIZES.BASE * 0.8,
//           }}>
//           <View
//             style={{
//               alignContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 fontFamily: theme.FONTS.TEXT,
//                 fontSize: theme.SIZES.H5,
//                 marginTop: theme.SIZES.BASE * 2.5,
//                 marginBottom: theme.SIZES.BASE,
//               }}>
//               Premium Access
//             </Text>
//           </View>

//           <Text
//             style={{
//               fontFamily: theme.FONTS.TEXT,
//               fontSize: theme.SIZES.H6,
//               marginTop: theme.SIZES.BASE,
//               marginBottom: theme.SIZES.BASE,
//               textAlign: 'center',
//             }}>
//             Thank you for joining Lasa Health Premium! Your 1 month premium free
//             trial for Endometriosis Awareness Month is currently active! Here
//             are your current premium benefits:
//           </Text>

//           <Text
//             style={{
//               fontFamily: theme.FONTS.TEXT,
//               fontSize: theme.SIZES.H6,
//               marginTop: theme.SIZES.BASE,
//               marginBottom: theme.SIZES.BASE,
//               textAlign: 'center',
//             }}>
//             Endo101 Course Access
//           </Text>

//           <View
//             style={{
//               paddingHorizontal: theme.SIZES.BASE * 2,
//               alignItems: 'center',
//               marginBottom: theme.SIZES.BASE * 2,
//             }}>
//             <Button
//               testID="endo101Button"
//               style={{
//                 ...styles.button,
//                 color: theme.COLORS.DEFAULT,
//                 width: width - theme.SIZES.BASE * 2,
//               }}
//               title="Go to Endo101 Course"
//               titleStyle={{
//                 color: theme.COLORS.WHITE,
//                 fontFamily: theme.FONTS.TEXT,
//                 fontWeight: 'bold',
//                 fontSize: theme.SIZES.H6,
//               }}
//               onPress={() => {
//                 Promise.resolve()
//                   .then(() => {
//                     navigation.navigate('Learn', {
//                       screen: 'Endo101ProgressScreen',
//                     });
//                   })
//                   .catch(error => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     alert(errorMessage);
//                     return errorMessage;
//                   });
//               }}
//             />
//           </View>

//           <Text
//             style={{
//               fontFamily: theme.FONTS.TEXT,
//               fontSize: theme.SIZES.H6,
//               marginTop: theme.SIZES.BASE,
//               marginBottom: theme.SIZES.BASE,
//               textAlign: 'center',
//             }}>
//             Export symptom history to PDF
//           </Text>

//           <View
//             style={{
//               paddingHorizontal: theme.SIZES.BASE * 2,
//               alignItems: 'center',
//               marginBottom: theme.SIZES.BASE * 2,
//             }}>
//             <Button
//               testID="endo101Button"
//               style={{
//                 ...styles.button,
//                 color: theme.COLORS.DEFAULT,
//                 width: width - theme.SIZES.BASE * 2,
//               }}
//               title="Export Symptoms to PDF"
//               titleStyle={{
//                 color: theme.COLORS.WHITE,
//                 fontFamily: theme.FONTS.TEXT,
//                 fontWeight: 'bold',
//                 fontSize: theme.SIZES.H6,
//               }}
//               onPress={() => {
//                 Promise.resolve()
//                   .then(() => {
//                     exportSymptomHistoryToPDF(
//                       this.props.trackingLog,
//                       this.props.userProfile,
//                     );
//                   })
//                   .catch(error => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     alert(errorMessage);
//                     return errorMessage;
//                   });
//               }}
//             />
//           </View>
//         </RoundedTopContainer>
//       </ScrollView>
//     );
//   };

//   render() {
//     const {navigation} = this.props;

//     return (
//       <ScreenTemplateWrapper
//         headerPadding={true}
//         width={width}
//         customImageName={Images.ui.BackgroundGradient3}>
//         <View
//           style={{
//             flex: 1,
//             alignContent: 'center',
//             alignItems: 'center',
//             backgroundColor: theme.COLORS.TRANSPARENT,
//           }}>
//           <View
//             style={{
//               ...styles.home,
//               flex: 1,
//               alignContent: 'center',
//               backgroundColor: theme.COLORS.TRANSPARENT,
//             }}>
//             <StatusBar
//               style={{
//                 backgroundColor: theme.COLORS.TRANSPARENT,
//                 fontFamily: theme.FONTS.TEXT,
//               }}
//               backgroundColor={theme.COLORS.TRANSPARENT}
//             />

//             <KeyboardAvoidingView
//               style={{
//                 flex: 1,
//                 backgroundColor: theme.COLORS.TRANSPARENT,
//               }}
//               behavior="padding"
//               enabled={iosPlatform()}>
//               {this.renderFriendsList()}
//             </KeyboardAvoidingView>
//           </View>
//           <Footer navigation={navigation} tabName="Connect" />
//         </View>
//       </ScreenTemplateWrapper>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     trackingLog: state.trackLog.logHistory,
//     userProfile: state.userProfile,
//     connect: state.connect,
//   };
// };
// export default connect(mapStateToProps)(PremiumAccessScreen);
