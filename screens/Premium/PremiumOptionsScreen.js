// import React from 'react';
// import {Dimensions, ScrollView, Linking, View} from 'react-native';
// import {Text} from 'react-native-elements';
// import {connect} from 'react-redux';
// import Purchases from 'react-native-purchases';
// import {StatusBar} from 'expo-status-bar';

// import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
// import {
//   Footer,
//   TouchableOpacity,
//   PricingCard,
//   RoundedTopContainer,
// } from '../../components';
// import {Images, theme, styles} from '../../constants';
// import {hasPremiumAccess} from '../../shared/ServerUtils';
// import {KeyboardAvoidingView} from 'react-native';
// import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
// import {getOS} from '../../shared/PlatformUtils';

// const iosPlatform = () => getOS() == 'ios';

// const {width, height} = Dimensions.get('screen');

// class PremiumOptionsScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.mixpanel = MixpanelInstance;
//     this.state = {
//       premiumOfferings: null,
//     };
//   }

//   setPremiumOfferings = value => {
//     this.setState({premiumOfferings: value});
//   };

//   componentDidMount() {
//     this.mixpanel.track('premiumOptionsScreen_reached');
//     this.checkForPremiumAccess();
//     this._unsubscribe = this.props.navigation.addListener('focus', () => {
//       // Screen was focused
//       this.checkForPremiumAccess();
//     });
//   }

//   componentWillUnmount() {
//     if (this._unsubscribe) {
//       this._unsubscribe();
//     }
//   }

//   checkForPremiumAccess = () => {
//     Promise.resolve()
//       .then(() => hasPremiumAccess(this.props.userProfile))
//       .then(result => {
//         console.log('Has premium access: ', result);
//         if (result) {
//           this.props.navigation.navigate('PremiumAccess');
//         } else {
//           Promise.resolve()
//             .then(() => Purchases.getOfferings())
//             .then(offerings => {
//               if (
//                 !(offerings.current == null) &&
//                 !(offerings.current.availablePackages == null)
//               ) {
//                 this.setPremiumOfferings(offerings.current.availablePackages);
//               }
//             })
//             .catch(error => {
//               console.log(error);
//             });
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   getPremiumMonthlyOffering = () => {
//     if (!(this.state.premiumOfferings == null)) {
//       for (const offering of this.state.premiumOfferings) {
//         if (offering['identifier'] == '$rc_monthly') {
//           return offering;
//         }
//       }
//       return null;
//     } else {
//       return null;
//     }
//   };

//   getPremiumAnnualOffering = () => {
//     if (!(this.state.premiumOfferings == null)) {
//       for (const offering of this.state.premiumOfferings) {
//         if (offering['identifier'] == '$rc_annual') {
//           return offering;
//         }
//       }
//       return null;
//     } else {
//       return null;
//     }
//   };

//   renderFriendsList = navigation => {
//     return (
//       <RoundedTopContainer
//         style={{
//           paddingHorizontal: theme.SIZES.BASE,
//           minHeight: height - theme.SIZES.BASE * 8.6,
//           marginTop: theme.SIZES.BASE * 0.8,
//         }}>
//         <View
//           style={{
//             alignContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text
//             style={{
//               fontWeight: 'bold',
//               fontFamily: theme.FONTS.TEXT,
//               fontSize: theme.SIZES.H5,
//               marginTop: theme.SIZES.BASE * 2.5,
//               marginBottom: theme.SIZES.BASE,
//             }}>
//             Lasa Premium
//           </Text>
//         </View>

//         <View
//           style={{justifyContent: 'center', marginBottom: theme.SIZES.BASE}}>
//           <Text style={{textAlign: 'center'}}>
//             Free trial expired, check out our ongoing premium memberships below!
//           </Text>
//         </View>

//         {!(this.getPremiumMonthlyOffering() == null) && (
//           <PricingCard
//             infoStyle={{
//               fontFamily: theme.FONTS.TEXT,
//             }}
//             pricingStyle={{
//               fontFamily: theme.FONTS.TEXT,
//             }}
//             titleStyle={{
//               fontFamily: theme.FONTS.TEXT,
//             }}
//             color={theme.COLORS.PRIMARY2}
//             title="Free Trial + Monthly"
//             price="1st month free, then $9.99"
//             info={[
//               'Endo101 Course Access',
//               'Export Symptom History to PDF',
//               'Cancel anytime',
//             ]}
//             button={{title: ' GET STARTED', icon: 'flight-takeoff'}}
//             onButtonPress={async () => {
//               try {
//                 const premiumPackage = await this.getPremiumMonthlyOffering();
//                 if (!(premiumPackage == null)) {
//                   const purchaseMade = await Purchases.purchasePackage(
//                     premiumPackage,
//                   );
//                   this.mixpanel.track(
//                     'premiumOptionsScreen_monthlyPurchaseAttempt',
//                   );
//                   const premiumAccess = await hasPremiumAccess(
//                     this.props.userProfile,
//                   );
//                   if (
//                     premiumAccess ||
//                     (!(purchaseMade == null) &&
//                       !(
//                         typeof purchaseMade.purchaserInfo.entitlements.active[
//                           'Lasa Health Premium'
//                         ] == 'undefined'
//                       ))
//                   ) {
//                     console.log('Monthly purchase successful');
//                     alert('Welcome to Lasa Premium!');
//                     navigation.reset({
//                       index: 0,
//                       routes: [
//                         {
//                           name: 'Home',
//                           state: {
//                             routes: [{name: 'HomeMain'}],
//                           },
//                         },
//                       ],
//                     });
//                   } else {
//                     alert(
//                       'Order received! Please wait up to 15 minutes for our servers to update, thank you!',
//                     );
//                   }
//                 }
//               } catch (error) {
//                 console.log(error);
//                 alert(error);
//               }
//             }}
//           />
//         )}
//         {!(this.getPremiumAnnualOffering() == null) && (
//           <PricingCard
//             infoStyle={{
//               fontFamily: theme.FONTS.TEXT,
//             }}
//             pricingStyle={{
//               fontFamily: theme.FONTS.TEXT,
//             }}
//             titleStyle={{
//               fontFamily: theme.FONTS.TEXT,
//             }}
//             color={theme.COLORS.SECONDARY1}
//             title="Annual (20% off)"
//             price="$95.99"
//             info={[
//               'All Monthly Benefits Plus:',
//               '20% Subscription Discount',
//               'Cancel anytime',
//             ]}
//             button={{title: ' GET STARTED', icon: 'flight-takeoff'}}
//             onButtonPress={async () => {
//               try {
//                 const premiumPackage = await this.getPremiumAnnualOffering();
//                 if (!(premiumPackage == null)) {
//                   const purchaseMade = await Purchases.purchasePackage(
//                     premiumPackage,
//                   );
//                   this.mixpanel.track(
//                     'premiumOptionsScreen_annualPurchaseAttempt',
//                   );
//                   if (
//                     !(purchaseMade == null) &&
//                     !(
//                       typeof purchaseMade.purchaserInfo.entitlements.active[
//                         'Lasa Health Premium'
//                       ] == 'undefined'
//                     )
//                   ) {
//                     console.log('Annual purchase successful');
//                     alert('Welcome to Lasa Premium!');
//                     navigation.reset({
//                       index: 0,
//                       routes: [
//                         {
//                           name: 'Home',
//                           state: {
//                             routes: [{name: 'HomeMain'}],
//                           },
//                         },
//                       ],
//                     });
//                   } else {
//                     alert(
//                       'Order received! Please wait up to 15 minutes for our servers to update, thank you!',
//                     );
//                   }
//                 }
//               } catch (error) {
//                 console.log(error);
//                 alert(error);
//               }
//             }}
//           />
//         )}

//         <View style={{justifyContent: 'center'}}>
//           <Text style={{textAlign: 'center'}}>
//             By purchasing a product you agree to our{' '}
//           </Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'center',
//           }}>
//           <TouchableOpacity
//             onPress={() => {
//               Linking.openURL('https://www.lasahealth.com/privacy-policy');
//             }}>
//             <Text
//               style={{
//                 color: theme.COLORS.PRIMARY2,
//                 fontFamily: theme.FONTS.TEXT,
//               }}>
//               Privacy Policy
//             </Text>
//           </TouchableOpacity>
//           <Text style={{fontSize: 12}}> and </Text>
//           <TouchableOpacity
//             onPress={() => {
//               Linking.openURL('https://www.lasahealth.com/tos');
//             }}>
//             <Text
//               style={{
//                 color: theme.COLORS.PRIMARY2,
//                 fontFamily: theme.FONTS.TEXT,
//               }}>
//               Terms of Serice
//             </Text>
//           </TouchableOpacity>
//         </View>

//         <View
//           style={{justifyContent: 'center', marginBottom: theme.SIZES.BASE}}>
//           <Text style={{textAlign: 'center'}}>
//             Please read these before making any purchase.
//           </Text>
//         </View>
//       </RoundedTopContainer>
//     );
//   };

//   render() {
//     const {navigation} = this.props;

//     return (
//       <ScreenTemplateWrapper
//         headerPadding={true}
//         width={width}
//         customImageName={Images.ui.BackgroundGradient1}>
//         <View
//           style={{
//             flex: 1,
//             alignContent: 'center',
//             alignItems: 'center',
//           }}>
//           <View
//             style={{
//               flex: 1,
//               alignContent: 'center',
//               alignItems: 'center',
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
//               }}
//               behavior="padding"
//               enabled={iosPlatform()}>
//               <ScrollView
//                 testID="pageScrollview"
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{width}}>
//                 {this.renderFriendsList(navigation)}
//               </ScrollView>
//             </KeyboardAvoidingView>
//           </View>
//           <Footer navigation={navigation} tabName="Settings" />
//         </View>
//       </ScreenTemplateWrapper>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     userProfile: state.userProfile,
//     userPublicProfile: state.userPublicProfile,
//     amieChatbot: state.amieChatbot,
//     connect: state.connect,
//   };
// };
// export default connect(mapStateToProps)(PremiumOptionsScreen);
