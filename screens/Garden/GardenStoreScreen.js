import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import {Text, SpeedDial} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

import {
  Accordion,
  Button,
  CheckBox,
  Footer,
  Icon,
  Input,
  LoadingIndicator,
  Select,
  Modal,
  TouchableOpacity,
} from '../../components';
import {Images, theme, styles} from '../../constants';
import {GardenContext} from '../../garden/GardenProvider';
import {getAnimationFromPath} from '../../constants/Animations';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {auth} from '../../shared/firebaseUtils';
import Animations from '../../constants/Animations';
import PlantPot1 from '../../assets/garden/shop/plantPot1.svg';
import PlantPot2 from '../../assets/garden/shop/plantPot2.svg';
import PlantPot3 from '../../assets/garden/shop/plantPot3.svg';
import PlantPot4 from '../../assets/garden/shop/plantPot4.svg';
import PlantPot5 from '../../assets/garden/shop/plantPot5.svg';
import PlantPot6 from '../../assets/garden/shop/plantPot6.svg';
import StoreShelf1 from '../../assets/garden/shop/storeShelf1.svg';

const {width, height} = Dimensions.get('screen');

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

class GardenStoreScreen extends React.Component {
  state = {
    speedDialOpen: false,
  };

  componentDidMount() {}

  setSpeedDialOpen = async speedDialOpenP => {
    this.setState({speedDialOpen: speedDialOpenP});
  };

  renderStorePlot = (
    buyItemFromStoreP,
    storeInventoryP,
    itemNum,
    showPrice = true,
  ) => {
    //  FIXMETUNA:  I need to make this rendering more complex so it shows the state of each flower

    let currentItemIM = '';
    let isItemSold = false;
    let currentItemPrice = '';
    if (itemNum % 3 == 0) {
      isItemSold = storeInventoryP.gardenItem1Sold;
      currentItemIM = getAnimationFromPath(
        storeInventoryP.gardenItem1.assets.health2Animation,
      );
      currentItemPrice = storeInventoryP.gardenItem1.price;
    } else if (itemNum % 3 == 1) {
      isItemSold = storeInventoryP.gardenItem2Sold;
      currentItemIM = getAnimationFromPath(
        storeInventoryP.gardenItem2.assets.health2Animation,
      );
      currentItemPrice = storeInventoryP.gardenItem2.price;
    } else {
      isItemSold = storeInventoryP.gardenItem3Sold;
      currentItemIM = getAnimationFromPath(
        storeInventoryP.gardenItem3.assets.health2Animation,
      );
      currentItemPrice = storeInventoryP.gardenItem3.price;
    }
    if (!isItemSold) {
      return (
        <View
          style={{
            backgroundColor: theme.COLORS.TRANSPARENT,
            width: 70,
            height: 90,
          }}>
          <TouchableOpacity
            onPress={() => {
              if (showPrice) {
                console.log('BEFORE PLAYER INVENTORY: ', this.props);
                buyItemFromStoreP(this.props.dispatch, itemNum % 3);
                console.log('AFTER PLAYER INVENTORY: ', this.props);
              }
            }}
            disabled={!showPrice}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <LottieView
              style={{width: 70, height: 80, top: 6}}
              source={currentItemIM}
              autoPlay={false}
              loop={false}
              progress={0.5}
            />
            {itemNum == 0 && (
              <PlantPot1 height={50} width={50} style={{top: -2}} />
            )}
            {itemNum == 1 && (
              <PlantPot2 height={50} width={50} style={{top: -2}} />
            )}
            {itemNum == 2 && (
              <PlantPot3 height={50} width={50} style={{top: -2}} />
            )}
            {itemNum == 3 && (
              <PlantPot4 height={50} width={50} style={{top: -2}} />
            )}
            {itemNum == 4 && (
              <PlantPot5 height={50} width={50} style={{top: -2}} />
            )}
            {itemNum == 5 && (
              <PlantPot6 height={50} width={50} style={{top: -2}} />
            )}
            {showPrice && (
              <View
                style={{
                  backgroundColor: theme.COLORS.WHITE,
                  height: 26,
                  width: 70,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: theme.COLORS.MELBLACK,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop: 2,
                }}>
                <Text style={{fontWeight: 'bold'}}>{currentItemPrice}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={{
            backgroundColor: theme.COLORS.TRANSPARENT,
            marginTop: 38,
            width: 70,
            height: 70,
          }}>
          <Image
            source={Images.garden.storeSoldOut2}
            style={{width: 70, height: 70}}
          />
        </View>
      );
    }
  };

  renderInventoryPlot = (playerInventoryP, itemNum) => {
    let currentItemIM = '';
    if (itemNum < playerInventoryP.gardenItems.length) {
      currentItemIM =
        playerInventoryP.gardenItems[itemNum].assets.health2Animation;
    } else {
      return <View></View>;
    }

    return (
      <View
        style={{
          backgroundColor: theme.COLORS.TRANSPARENT,
          height: 90,
        }}>
        <TouchableOpacity
          disabled={true}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            style={{width: 70, height: 80, top: 6}}
            source={getAnimationFromPath(currentItemIM)}
            autoPlay={false}
            loop={false}
            progress={0.5}
          />
          {(itemNum + 3) % 6 == 0 && (
            <PlantPot1 height={50} width={50} style={{top: -2}} />
          )}
          {(itemNum + 3) % 6 == 1 && (
            <PlantPot2 height={50} width={50} style={{top: -2}} />
          )}
          {(itemNum + 3) % 6 == 2 && (
            <PlantPot3 height={50} width={50} style={{top: -2}} />
          )}
          {(itemNum + 3) % 6 == 3 && (
            <PlantPot4 height={50} width={50} style={{top: -2}} />
          )}
          {(itemNum + 3) % 6 == 4 && (
            <PlantPot5 height={50} width={50} style={{top: -2}} />
          )}
          {(itemNum + 3) % 6 == 5 && (
            <PlantPot6 height={50} width={50} style={{top: -2}} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {navigation} = this.props;

    console.log(
      'playerInventory items: ',
      this.props.gardenStateRedux.playerInventory,
    );

    return (
      <GardenContext.Consumer>
        {garden => (
          <ScreenTemplateWrapper
            headerPadding={true}
            width={width}
            customHeaderPaddingHeight={iosPlatform() ? 312 : 300}
            customImageName={Images.ui.BackgroundGradient4}>
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <StatusBar
                style={{
                  backgroundColor: theme.COLORS.TRANSPARENT,
                  fontFamily: theme.FONTS.TEXT,
                }}
                backgroundColor={theme.COLORS.TRANSPARENT}
              />

              <ScrollView
                testID="pageScrollview"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{width}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                    }}>
                    <TouchableOpacity
                      disabled
                      style={{
                        backgroundColor: theme.COLORS.WHITE,
                        marginTop: 5,
                        marginBottom: 15,
                        height: 52,
                        width: 100,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}>
                      <Text
                        style={{
                          marginTop: 4,
                          marginBottom: 0,
                          paddingBottom: 0,
                        }}>
                        Seed count
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                          marginTop: 0,
                          paddingTop: 0,
                        }}>
                        {garden.playerInventory.numSeeds}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      backgroundColor: theme.COLORS.TRANSPARENT,
                      flex: 3.5,
                      width: width,
                      justifyContent: 'flex-start',
                    }}>
                    <View>
                      <View style={{alignItems: 'center'}}>
                        <StoreShelf1
                          height={50}
                          width={width - theme.SIZES.BASE * 2}
                          style={{top: 90}}
                        />
                      </View>
                      <View
                        testID="storePlotsView"
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          top: -60,
                        }}>
                        {this.renderStorePlot(
                          garden.buyItemFromStore,
                          garden.storeInventory,
                          0,
                          true,
                        )}
                        {this.renderStorePlot(
                          garden.buyItemFromStore,
                          garden.storeInventory,
                          1,
                          true,
                        )}
                        {this.renderStorePlot(
                          garden.buyItemFromStore,
                          garden.storeInventory,
                          2,
                          true,
                        )}
                      </View>
                    </View>

                    <View
                      style={{
                        marginVertical: theme.SIZES.BASE,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: theme.SIZES.BASE * 2,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: theme.SIZES.B1,
                          marginHorizontal: theme.SIZES.BASE * 2,
                        }}>
                        New plants are available every day. Come back tomorrow!
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 3,
                    }}>
                    <View
                      style={{
                        borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
                        borderTopRightRadius: theme.SIZES.HEADERRADIUS,
                        backgroundColor: theme.COLORS.TERTIARY5,
                        width: width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: height - theme.SIZES.BASE * 24.6,
                      }}>
                      <Text
                        style={{
                          fontSize: theme.SIZES.H5,
                          color: theme.COLORS.TEXT1,
                          marginTop: theme.SIZES.BASE,
                        }}>
                        Your Basket
                      </Text>

                      {Object.entries(
                        this.props.gardenStateRedux.playerInventory.gardenItems,
                      ).map(([keyTmp, sympDict]) => {
                        if (keyTmp % 3 == 2) {
                          return (
                            <View
                              key={keyTmp}
                              style={{
                                backgroundColor: theme.COLORS.TERTIARY5,
                              }}>
                              <View style={{alignItems: 'center'}}>
                                <StoreShelf1
                                  height={50}
                                  width={width - theme.SIZES.BASE * 2}
                                  style={{top: 90}}
                                />
                              </View>
                              <View
                                testID="storePlotsView"
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-around',
                                  top: -60,
                                }}>
                                {this.renderInventoryPlot(
                                  this.props.gardenStateRedux.playerInventory,
                                  keyTmp - 2,
                                )}
                                {this.renderInventoryPlot(
                                  this.props.gardenStateRedux.playerInventory,
                                  keyTmp - 1,
                                )}
                                {this.renderInventoryPlot(
                                  this.props.gardenStateRedux.playerInventory,
                                  keyTmp,
                                )}
                              </View>
                            </View>
                          );
                        } else if (
                          keyTmp ==
                          this.props.gardenStateRedux.playerInventory
                            .gardenItems.length -
                            1
                        ) {
                          return (
                            <View
                              key={keyTmp}
                              style={{
                                backgroundColor: theme.COLORS.TERTIARY5,
                              }}>
                              <View style={{alignItems: 'center'}}>
                                <StoreShelf1
                                  height={50}
                                  width={width - theme.SIZES.BASE * 2}
                                  style={{top: 90}}
                                />
                              </View>
                              <View
                                testID="storePlotsView"
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-around',
                                  top: -60,
                                }}>
                                {keyTmp % 3 == 1 &&
                                  this.renderInventoryPlot(
                                    this.props.gardenStateRedux.playerInventory,
                                    keyTmp - 1,
                                  )}
                                {this.renderInventoryPlot(
                                  this.props.gardenStateRedux.playerInventory,
                                  keyTmp,
                                )}
                              </View>
                            </View>
                          );
                        }
                      })}
                    </View>
                  </View>
                </View>
              </ScrollView>

              <Footer navigation={navigation} tabName="Home" />
            </View>
          </ScreenTemplateWrapper>
        )}
      </GardenContext.Consumer>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    trackingLog: state.trackLog.logHistory,
    trackingLogStaging: state.trackLogStaging,
    userAnalytics: state.userAnalytics,
    gardenStateRedux: state.garden,
    customSymptoms: state.trackCustomSymptoms.customSymptoms,
    localState: state,
  };
};
export default connect(mapStateToProps)(GardenStoreScreen);
