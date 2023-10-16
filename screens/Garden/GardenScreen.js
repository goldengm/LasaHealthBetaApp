import React from 'react';
import {Dimensions, View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import XDate from 'xdate';
import produce from 'immer';
import {getAnimationFromPath} from '../../constants/Animations';

import {
  Footer,
  LottiePlayer,
  PagedList,
  TouchableOpacity,
} from '../../components';
import {Images, theme, styles, Animations} from '../../constants';
import {GardenContext} from '../../garden/GardenProvider';
import DraggableGardenItem from '../../garden/DraggableGardenItem';
import GardenShop1 from '../../assets/garden/shop/garden_shop_1.svg';
import PlantTendGarden1 from '../../assets/garden/shop/plant_tend_garden_1.svg';
//import {auth} from '../../shared/firebaseUtils';
import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
import LottieView from 'lottie-react-native';
import {
  fadeLottieToGold,
  fadeLottieToPartialGold,
} from '../../garden/GardenUtils';
import { setTodoStatusAction } from '../../redux/actions/userProfileActions';

const {width, height} = Dimensions.get('screen');

//  import {getOS} from '../../shared/PlatformUtils';
//  const iosPlatform = () => getOS() == 'ios';

class GardenScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;
    this.state = {
      speedDialOpen: false,
      playerInventoryOpen: false,
      scrollViewOffset: 0,
      scrollEnabled: true,
    };
    this.gardenPlotLocations = {};
  }

  componentDidMount() {
    this.mixpanel.track('gardenScreen_reached');
  }

  setSpeedDialOpen = async speedDialOpenP => {
    this.setState({speedDialOpen: speedDialOpenP});
  };

  setPlayerInventoryOpen = async playerInventoryOpenP => {
    this.setState({playerInventoryOpen: playerInventoryOpenP});
  };

  setScrollEnabled = async scrollEnabledP => {
    this.setState({scrollEnabled: scrollEnabledP});
  };

  setGardenPlotLocation = (row, col, x, y, width, height) => {
    // this.setState(
    //   produce(draft => {
    //     draft.gardenPlotLocations[row.toString() + ',' + col.toString()] = {
    //       x: x,
    //       y: y,
    //       width: width,
    //       height: height,
    //     };
    //   }),
    // );
    this.gardenPlotLocations[row.toString() + ',' + col.toString()] = {
      x: x,
      y: y,
      width: width,
      height: height,
    };
  };

  setScrollViewOffset = async scrollViewOffsetP => {
    this.setState({scrollViewOffset: scrollViewOffsetP});
  };

  isNightTime = () => {
    const dateObj = new XDate(Date.now());
    const hour = dateObj.getHours();
    return hour < 7 || hour > 19;
  };

  renderGardenSky = gardenState => {
    if (this.isNightTime()) {
      return Images.garden.nightSky1;
    } else {
      return Images.garden.daySky1;
    }
  };

  renderGardenSkyDarknessOpacity = gardenState => {
    if (this.isNightTime()) {
      return 0.5;
    } else {
      return 0.0;
    }
  };

  renderGardenColor = gardenState => {
    if (gardenState.gardenSoilCondition < -4) {
      return 'rgba(255,214,99,0.6)';
    } else if (gardenState.gardenSoilCondition < -1) {
      return 'rgba(255,214,99,0.4)';
    } else if (gardenState.gardenSoilCondition == -1) {
      return 'rgba(255,214,99,0.1)';
    } else {
      return 'rgba(255,214,99,0.0)';
    }
  };

  renderGardenColorOpacity = gardenState => {
    if (gardenState.gardenSoilCondition < -4) {
      return 0.6;
    } else if (gardenState.gardenSoilCondition < -1) {
      return 0.4;
    } else if (gardenState.gardenSoilCondition == -1) {
      return 0.1;
    } else {
      return 0.0;
    }
  };

  findClosetPlot = (positionX, positionY) => {
    let matchingRow = -1;
    let matchingCol = -1;
    Object.entries(this.gardenPlotLocations).forEach(([key, val]) => {
      if (
        positionX >= val.x &&
        positionX <= val.x + val.width &&
        positionY >= val.y - this.state.scrollViewOffset &&
        positionY <= val.y + val.height - this.state.scrollViewOffset
      ) {
        matchingRow = key.split(',')[0];
        matchingCol = key.split(',')[1];
        return [matchingRow, matchingCol];
      }
    });

    return [matchingRow, matchingCol];
  };

  plantInvetoryItemAtCoordInGarden = (
    plantInventoryItemInGarden,
    gardenPlots,
    positionX,
    positionY,
    ind,
  ) => {
    let matchingRow = -1;
    let matchingCol = -1;

    //  FIXMETUNA:  need to do some crazy coord to component conversion here.... or a rough
    //  approximation..... this might be really hard or easy we'll see!

    [matchingRow, matchingCol] = this.findClosetPlot(positionX, positionY);

    console.log(
      'Finding matching location for drag: ',
      matchingRow,
      matchingCol,
    );

    if (matchingRow && matchingCol && matchingRow >= 0 && matchingCol >= 0 && gardenPlots[matchingRow][matchingCol] == null) {
      return plantInventoryItemInGarden(
        this.props.dispatch,
        ind,
        matchingRow,
        matchingCol,
      );
    }
    return Promise.reject()
  };

  handleScroll = event => {
    this.setScrollViewOffset(event.nativeEvent.contentOffset.y);
  };

  handlePlayerInventory = (garden, key) => {
    Promise.resolve()
      .then(() => {
        switch (key) {
          case 'tendGarden':
            garden.setRemoveGardenItemModeActive(false);
            this.setPlayerInventoryOpen(true);
            break;

          case 'done':
            garden.setRemoveGardenItemModeActive(false);
            this.setPlayerInventoryOpen(false);
            break;

          case 'digUp':
            garden.setRemoveGardenItemModeActive(true);
            break;

          default:
            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  goToPlantShop = () => {
    Promise.resolve()
      .then(() => this.props.navigation.navigate('GardenStore'))
      .catch(error => {
        console.log(error);
      });
  };

  renderGardenPlot = (
    removeItemFromGarden,
    setRemoveGardenItemModeActive,
    plantInventoryItemInGarden,
    gardenState,
    row,
    col,
  ) => {
    const gardenPlotRef = React.createRef();
    const plantWidth = 80 + row * 10;
    const plantHeight = 80 + row * 10;

    const plotWidth = plantWidth;
    const plotHeight = plantHeight;
    return (
      <View
        ref={gardenPlotRef}
        onLayout={event => {
          gardenPlotRef.current.measureInWindow((x, y, width, height) => {
            this.setGardenPlotLocation(row, col, x, y, width, height);
          });
        }}
        style={{
          width: plotWidth,
          height: plotHeight,
        }}>
        {this.renderGardenPlotWrapped(
          removeItemFromGarden,
          setRemoveGardenItemModeActive,
          plantInventoryItemInGarden,
          gardenState,
          row,
          col,
        )}
      </View>
    );
  };

  renderGardenPlotWrapped = (
    removeItemFromGarden,
    setRemoveGardenItemModeActive,
    plantInventoryItemInGarden,
    gardenState,
    row,
    col,
  ) => {
    const plantWidth = 80 + row * 10;
    const plantHeight = 80 + row * 10;

    const plotWidth = plantWidth;
    const plotHeight = plantHeight;
    if (!(gardenState.gardenPlots[row][col] == null)) {
      //  FIXMETUNA:  I need to make this rendering more complex so it shows the state of each flower
      let renderType = 'Image'; //  Image / Animation / AnimationFrame
      let currentFlowerIm = null;
      let secondaryEffectIm = null;
      if (gardenState.gardenPlots[row][col].age < 4) {
        //  display sprout for first 3 days
        renderType = 'Image';
        currentFlowerIm = JSON.parse(JSON.stringify(Images.garden.sprout0_0));
      } else if (gardenState.gardenPlots[row][col].name == 'weed') {
        //  display weed if planted gard item is a weed
        renderType = 'Image';
        currentFlowerIm = JSON.parse(JSON.stringify(Images.garden.weed0_0));
      } else if (gardenState.gardenPlots[row][col].health < -4) {
        //  flower is potentially dead, apply color filter to still frame
        renderType = 'AnimationFrame';
        currentFlowerIm = getAnimationFromPath(
          gardenState.gardenPlots[row][col].assets.health0Animation,
        );
        currentFlowerIm = fadeLottieToGold(currentFlowerIm);
      } else if (gardenState.gardenPlots[row][col].health < -1) {
        // flower weak with partial color filter on frame
        renderType = 'AnimationFrame';
        currentFlowerIm = getAnimationFromPath(
          gardenState.gardenPlots[row][col].assets.health1Animation,
        );
        currentFlowerIm = fadeLottieToPartialGold(currentFlowerIm);
      } else if (gardenState.gardenPlots[row][col].health < 5) {
        //  flower healthy and animated
        renderType = 'Animation';
        currentFlowerIm = getAnimationFromPath(
          gardenState.gardenPlots[row][col].assets.health2Animation,
        );
      } else {
        //  flower in top health and happy, add sparkle effect to animation
        renderType = 'Animation';
        currentFlowerIm = getAnimationFromPath(
          gardenState.gardenPlots[row][col].assets.health2Animation,
        );
        secondaryEffectIm = JSON.parse(
          JSON.stringify(Animations.garden.effect.happyFlowerSparkle1),
        );
      }
      if (renderType == 'Animation') {
        return (
          <View
            style={{
              backgroundColor: theme.COLORS.TRANSPARENT,
              width: plotWidth,
              height: plotHeight,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            pointerEvents={'box-none'}>
            <LottiePlayer
              lottieWidth={plantWidth}
              lottieHeight={plantHeight}
              lottieFile={currentFlowerIm}
            />

            {secondaryEffectIm && (
              <LottieView
                style={{
                  marginTop: 10,
                  width: plantWidth,
                  height: plantHeight,
                  position: 'absolute',
                }}
                source={secondaryEffectIm}
                speed={0.5}
                autoPlay
                loop
              />
            )}
            <TouchableOpacity
              style={{
                position: 'absolute',
                width: plotWidth,
                height: plotHeight * 0.75,
                bottom: -20,
              }}
              onPress={() => {
                console.log('blue');
                if (gardenState.removeGardenItemModeActive) {
                  setRemoveGardenItemModeActive(false);
                  removeItemFromGarden(this.props.dispatch, row, col);
                }
              }}
            />
          </View>
        );
      } else if (renderType == 'AnimationFrame') {
        return (
          <View
            style={{
              backgroundColor: theme.COLORS.TRANSPARENT,
              width: plotWidth,
              height: plotHeight,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            pointerEvents={'box-none'}>
            <LottieView
              style={{
                marginTop: 10,
                width: plantWidth,
                height: plantHeight,
              }}
              source={currentFlowerIm}
              autoPlay={false}
              loop={false}
              progress={0.5}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                width: plotWidth,
                height: plotHeight * 0.75,
                bottom: -20,
              }}
              onPress={() => {
                console.log('Yellow');
                if (gardenState.removeGardenItemModeActive) {
                  setRemoveGardenItemModeActive(false);
                  removeItemFromGarden(this.props.dispatch, row, col);
                }
              }}
            />
          </View>
        );
      } else {
        return (
          <View
            style={{
              backgroundColor: theme.COLORS.TRANSPARENT,
              width: plotWidth,
              height: plotHeight,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            pointerEvents={'box-none'}>
            <Image
              source={currentFlowerIm}
              style={{width: plantWidth * 0.8, height: plantHeight}}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                width: plotWidth,
                height: plotHeight * 0.75,
                bottom: -20,
              }}
              onPress={() => {
                console.log('GREEEEn pressed');
                if (gardenState.removeGardenItemModeActive) {
                  setRemoveGardenItemModeActive(false);
                  removeItemFromGarden(this.props.dispatch, row, col);
                }
              }}
            />
          </View>
        );
      }
    } else {
      return (
        <View
          style={{
            alignItems: 'center',
            backgroundColor: theme.COLORS.TRANSPARENT,
            width: plotWidth,
            height: plotHeight,
          }}
          pointerEvents={'box-none'}>
          <View
            style={{
              backgroundColor: theme.COLORS.TRANSPARENT,
              width: 30,
              height: 30,
            }}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              width: plotWidth,
              height: plotHeight * 0.75,
              bottom: -20,
            }}
            // onPress={() => {
            //   console.log('White Onpress firing');
            // }}
            // onPressIn={() => {
            //   console.log('Onpressin firing');
            // }}
            // onPressOut={() => {
            //   console.log('Onpressout firing');
            // }}
            // onLongPress={() => {
            //   console.log('Onlongpress firing');
            // }}
          />
        </View>
      );
    }
  };

  gardenHasPlants = gardenPlots => {
    for (const gardenRow of gardenPlots) {
      for (const gardenPlot of gardenRow) {
        if (
          gardenPlot &&
          !(gardenPlot['itemType'] == '') &&
          !(gardenPlot['itemType'] == 'weed')
        ) {
          return true;
        }
      }
    }
    return false;
  };

  isFirstPlant = gardenPlots => {
    for (const gardenRow of gardenPlots) {
      for (const gardenPlot of gardenRow) {
        if (gardenPlot) {
          return true;
        }
      }
    }
    return false;
  };

  playerHasPlantsInInventory = playerInventoryItems => {
    if (playerInventoryItems && playerInventoryItems.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const {navigation} = this.props;

    const previewCount = 3;
    const itemWidth = 200 / (previewCount + 0.5);
    
    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <GardenContext.Consumer>
          {garden => (
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
              }}
              pointerEvents={'box-none'}>
              <StatusBar
                style={{
                  backgroundColor: theme.COLORS.TRANSPARENT,
                  fontFamily: theme.FONTS.TEXT,
                }}
                backgroundColor={theme.COLORS.TRANSPARENT}
              />

              <View
                style={{
                  backgroundColor: theme.COLORS.TRANSPARENT,
                  marginTop:
                    theme.SIZES.BASE * 0.3 * (height / width) +
                    (height / width) * (height / width) * (height / width) * 7,
                  width: width,
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  zIndex: 5,
                  elevation: 5,
                }}>
                {this.state.playerInventoryOpen && (
                  <View
                    style={{
                      flex: 1,
                      paddingHorizontal: theme.SIZES.BASE * 0.5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: theme.SIZES.BASE * 0.5,
                      backgroundColor: theme.COLORS.BACKGROUND1,
                      marginHorizontal: theme.SIZES.BASE,
                      borderRadius: theme.SIZES.BASE * 2,
                      zIndex: 5,
                      elevation: 5,
                    }}>
                    {!garden.gardenState.removeGardenItemModeActive &&
                      this.state.playerInventoryOpen && (
                        <View style={{alignItems: 'center'}}>
                          <Text
                            style={{
                              fontSize: 30,
                              textAlign: 'center',
                              color: theme.COLORS.BLACK,
                            }}>
                            Drag to plant in open plot
                          </Text>
                        </View>
                      )}

                    {garden.gardenState.removeGardenItemModeActive && (
                      <View style={{alignItems: 'center'}}>
                        <Text
                          style={{
                            fontSize: 30,
                            textAlign: 'center',
                            color: theme.COLORS.BLACK,
                          }}>
                          Choose garden plot to dig up
                        </Text>
                      </View>
                    )}
                  </View>
                )}
              </View>

              <ScrollView
                testID="pageScrollview"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{width}}
                scrollEventThrottle={40}
                onScroll={this.handleScroll}
                scrollEnabled={this.state.scrollEnabled}>
                <View
                  style={{
                    minHeight: height,
                  }}>
                  <View
                    style={{position: 'absolute', flex: 1, minHeight: height}}>
                    <Image
                      source={this.renderGardenSky(garden.gardenState)}
                      style={{
                        minHeight: height,
                        width: width,
                        height: height,
                        top: -50,
                        zIndex: -1, // works on ios
                        flex: 1,
                      }}
                    />
                  </View>

                  <View
                    style={{position: 'absolute', minHeight: height}}
                    pointerEvents={'box-none'}>
                    <Image
                      source={Images.garden.greenHills6}
                      style={{
                        minHeight: height + 300,
                        width: width,
                        height: height + 300,
                        zIndex: 0, // works on ios
                        top: theme.SIZES.BASE * 0.5,
                      }}
                    />
                  </View>

                  <View style={{position: 'absolute', minHeight: height}}>
                    <Image
                      source={Images.garden.greenHills6Yellow}
                      style={{
                        minHeight: height + 300,
                        width: width,
                        height: height + 300,
                        zIndex: 0, // works on ios
                        top: theme.SIZES.BASE * 0.5,
                        opacity: this.renderGardenColorOpacity(
                          garden.gardenState,
                        ),
                      }}
                    />
                  </View>

                  <View
                    style={{position: 'absolute', flex: 1, minHeight: height}}
                    pointerEvents={'box-none'}>
                    <View
                      pointerEvents={'box-none'}
                      style={{
                        minHeight: height + 300,
                        zIndex: 2, // works on ios
                        flex: 1,
                        backgroundColor: theme.COLORS.BLACK,
                        height: height + 300,
                        width: width,
                        opacity: this.renderGardenSkyDarknessOpacity(
                          garden.gardenState,
                        ),
                      }}
                    />
                  </View>

                  <View
                    style={{
                      backgroundColor: theme.COLORS.TRANSPARENT,
                      marginTop:
                        theme.SIZES.BASE * 0.3 * (height / width) +
                        (height / width) *
                          (height / width) *
                          (height / width) *
                          7,
                      width: width,
                      justifyContent: 'flex-start',
                      position: 'absolute',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View></View>
                      <LottiePlayer
                        lottieWidth={70}
                        lottieHeight={70}
                        lottieFile={JSON.parse(
                          JSON.stringify(Animations.garden.flower.flower3),
                        )}
                        customStyle={{
                          marginTop: 10,
                          width: 70,
                          height: 70,
                          top: 36,
                          right: 4,
                        }}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                      marginTop:
                        theme.SIZES.BASE * 0.3 * (height / width) +
                        (height / width) *
                          (height / width) *
                          (height / width) *
                          7,
                    }}
                    pointerEvents={'box-none'}>
                    <View
                      style={{
                        backgroundColor: theme.COLORS.TRANSPARENT,
                        flex: 6,
                        width: width,
                      }}
                      pointerEvents={'box-none'}>
                      {!this.gardenHasPlants(garden.gardenState.gardenPlots) &&
                        !this.playerHasPlantsInInventory(
                          garden.playerInventory.gardenItems,
                        ) && (
                          <View
                            style={{
                              position: 'absolute',
                              justifyContent: 'center',
                              alignItems: 'center',
                              elevation: 5,
                              paddingTop: 150,
                              zIndex: 5,
                            }}>
                            <View
                              style={{
                                backgroundColor: theme.COLORS.WHITE,
                                borderRadius: 20,
                                marginHorizontal: theme.SIZES.BASE,
                                padding: theme.SIZES.BASE,
                                alignItems: 'center',
                                shadowColor: theme.COLORS.BLACK,
                                shadowOffset: {
                                  width: 0,
                                  height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                elevation: 5,
                              }}>
                              <View>
                                <Text
                                  style={{
                                    ...styles.boldTitle,
                                    textAlign: 'center',
                                    marginTop: 0,
                                    paddingTop: 0,
                                    color: theme.COLORS.PRIMARY2,
                                  }}>
                                  Welcome to your personal Wellness Garden!
                                </Text>

                                <Text>
                                  Grow and maintain a healthy garden as you use
                                  the app. You have earned 50 seeds just for
                                  signing up for Lasa Health! You can earn more
                                  seeds by completing the Endometriosis101
                                  course and entering daily symptoms.
                                </Text>
                                <Text></Text>
                                <Text>
                                  Visit the "Plant Shop" on the bottom right to
                                  choose your first plant!
                                </Text>
                              </View>
                            </View>
                          </View>
                        )}

                      {!this.gardenHasPlants(garden.gardenState.gardenPlots) &&
                        this.playerHasPlantsInInventory(
                          garden.playerInventory.gardenItems,
                        ) &&
                        !this.state.playerInventoryOpen && (
                          <View
                            style={{
                              position: 'absolute',
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              elevation: 5,
                              paddingTop: 150,
                              zIndex: 5,
                            }}>
                            <View
                              style={{
                                backgroundColor: theme.COLORS.WHITE,
                                borderRadius: 20,
                                marginHorizontal: theme.SIZES.BASE,
                                padding: theme.SIZES.BASE,
                                alignItems: 'center',
                                shadowColor: theme.COLORS.BLACK,
                                shadowOffset: {
                                  width: 0,
                                  height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                elevation: 5,
                              }}>
                              <View>
                                <Text
                                  style={{
                                    ...styles.boldTitle,
                                    textAlign: 'center',
                                    marginTop: 0,
                                    paddingTop: 0,
                                    color: theme.COLORS.PRIMARY2,
                                  }}>
                                  You have plants in your basket - time to place
                                  them in your garden!
                                </Text>

                                <Text>
                                  Press "Tend Garden" on the bottom left to
                                  click and drag your new plants wherever you'd
                                  like to plant them. Your plants will start as
                                  sprouts and grow over time. Weeds will also
                                  pop up from time to time, you can dig them up
                                  or leave them be, it's your garden!
                                </Text>
                                <Text></Text>
                                <Text>
                                  Water your garden with healthy behaviors like
                                  tracking your new symptoms every day. Don't
                                  forget to water your garden each day!
                                </Text>
                              </View>
                            </View>
                          </View>
                        )}

                      <View style={{}} pointerEvents={'box-none'}>
                        <View
                          testID="gardenPlotRow1View"
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop:
                              theme.SIZES.BASE * 4.5 * (height / width) +
                              (height / width) *
                                (height / width) *
                                (height / width) *
                                7,
                            zIndex: 0,
                          }}
                          pointerEvents={'box-none'}>
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            0,
                            0,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            0,
                            1,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            0,
                            2,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            0,
                            3,
                          )}
                        </View>

                        <View
                          testID="gardenPlotRow2View"
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            zIndex: 1,
                          }}
                          pointerEvents={'box-none'}>
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            1,
                            0,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            1,
                            1,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            1,
                            2,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            1,
                            3,
                          )}
                        </View>

                        <View
                          testID="gardenPlotRow3View"
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            zIndex: 2,
                          }}
                          pointerEvents={'box-none'}>
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            2,
                            0,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            2,
                            1,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            2,
                            2,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            2,
                            3,
                          )}
                        </View>

                        <View
                          testID="gardenPlotRow4View"
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            zIndex: 3,
                          }}
                          pointerEvents={'box-none'}>
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            3,
                            0,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            3,
                            1,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            3,
                            2,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            3,
                            3,
                          )}
                        </View>

                        <View
                          testID="gardenPlotRow5View"
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            zIndex: 4,
                          }}
                          pointerEvents={'box-none'}>
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            4,
                            0,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            4,
                            1,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            4,
                            2,
                          )}
                          {this.renderGardenPlot(
                            garden.removeItemFromGarden,
                            garden.setRemoveGardenItemModeActive,
                            garden.plantInventoryItemInGarden,
                            garden.gardenState,
                            4,
                            3,
                          )}
                        </View>
                        <View
                          testID="gardenPlotRow5BottomMargin"
                          style={{
                            height: 40,
                          }}></View>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
              <View style={{position: 'absolute', bottom: 0}}>
                {!this.state.playerInventoryOpen && (
                  <View style={{top: -20}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      {!this.gardenHasPlants(garden.gardenState.gardenPlots) &&
                        !this.playerHasPlantsInInventory(
                          garden.playerInventory.gardenItems,
                        ) && (
                          <View
                            style={{
                              width: theme.SIZES.BASE * 3.5,
                              height: theme.SIZES.BASE * 3.5,
                              borderRadius: theme.SIZES.BASE * 3,
                              opacity: 0.7,
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginLeft: 12,
                            }}
                          />
                        )}

                      {(this.gardenHasPlants(garden.gardenState.gardenPlots) ||
                        this.playerHasPlantsInInventory(
                          garden.playerInventory.gardenItems,
                        )) && (
                        <View>
                          <TouchableOpacity
                            testID="amieChatbotImageButton1"
                            onPress={() =>
                              this.handlePlayerInventory(garden, 'tendGarden')
                            }
                            style={{
                              width: theme.SIZES.BASE * 3.5,
                              height: theme.SIZES.BASE * 3.5,
                              borderRadius: theme.SIZES.BASE * 3,
                              backgroundColor: theme.COLORS.PRIMARY1,
                              opacity: 0.7,
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginLeft: 12,
                            }}>
                            <PlantTendGarden1
                              height={30}
                              width={30}
                              style={{
                                color: theme.COLORS.WHITE,
                              }}
                              marginTop={2}
                            />
                          </TouchableOpacity>
                          <Text
                            style={{
                              color: theme.COLORS.PRIMARY1,
                              fontWeight: 'bold',
                              opacity: 0.7,
                            }}>
                            Tend Garden
                          </Text>
                        </View>
                      )}

                      <View style={{width: width - theme.SIZES.BASE * 11}} />

                      <View>
                        <TouchableOpacity
                          testID="amieChatbotImageButton2"
                          onPress={() => 
                            this.goToPlantShop()
                          }
                          style={{
                            width: theme.SIZES.BASE * 3.5,
                            height: theme.SIZES.BASE * 3.5,
                            borderRadius: theme.SIZES.BASE * 3,
                            backgroundColor: theme.COLORS.PRIMARY1,
                            opacity: 0.7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 5,
                          }}>
                          <GardenShop1
                            height={30}
                            width={30}
                            style={{
                              color: theme.COLORS.WHITE,
                            }}
                            marginTop={2}
                          />
                        </TouchableOpacity>
                        <Text
                          style={{
                            color: theme.COLORS.PRIMARY1,
                            fontWeight: 'bold',
                            opacity: 0.7,
                          }}>
                          Plant Shop
                        </Text>
                      </View>
                    </View>
                  </View>
                )}

                {this.state.playerInventoryOpen && (
                  <View style={{top: -20}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          testID="amieChatbotImageButton1"
                          onPress={() =>
                            this.handlePlayerInventory(garden, 'done')
                          }
                          style={{
                            width: theme.SIZES.BASE * 3.5,
                            height: theme.SIZES.BASE * 3.5,
                            borderRadius: theme.SIZES.BASE * 3,
                            backgroundColor: theme.COLORS.PRIMARY2,
                            opacity: 1.0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                          <Text
                            style={{
                              color: theme.COLORS.WHITE,
                              fontSize: theme.SIZES.B1,
                              fontWeight: 'bold',
                            }}>
                            Done
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          testID="amieChatbotImageButton1"
                          onPress={() =>
                            this.handlePlayerInventory(garden, 'digUp')
                          }
                          style={{
                            width: theme.SIZES.BASE * 3.5,
                            height: theme.SIZES.BASE * 3.5,
                            borderRadius: theme.SIZES.BASE * 3,
                            backgroundColor: theme.COLORS.TRANSPARENT,
                            borderColor: theme.COLORS.PRIMARY2,
                            borderWidth: 2,
                            opacity: 1.0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                          <Text
                            style={{
                              color: theme.COLORS.PRIMARY2,
                              fontSize: theme.SIZES.B1,
                              fontWeight: 'bold',
                            }}>
                            Dig up
                          </Text>
                        </TouchableOpacity>

                        <PagedList
                          customOnPress={() => {}}
                          passedOptionsList={Object.values(
                            garden.playerInventory.gardenItems,
                          ).map(item => {
                            return item;
                          })}
                          svgMode={true}
                          navButtonsInline={true}
                          customRenderItem={(item, ind) => {
                            return (
                              <DraggableGardenItem
                                style={{
                                  width: itemWidth - 10, //20 is margin left and right
                                  margin: 10,
                                  height: 60,
                                }}
                                customOnStartDrag={() => {
                                  console.log('Custome ON START DRAG');

                                  this.setScrollEnabled(false);
                                }}
                                customOnDragRelease={(releasedX, releasedY) => {
                                  console.log(
                                    'CUSTOM ON RELEASE',
                                    releasedX,
                                    releasedY,
                                  );

                                  Promise.resolve()
                                    .then(() => {
                                      return this.plantInvetoryItemAtCoordInGarden(
                                        garden.plantInventoryItemInGarden,
                                        garden.gardenState.gardenPlots,
                                        releasedX,
                                        releasedY,
                                        ind,
                                      );
                                    })
                                    .then(() => {
                                      // If user plant the flower at first, plus 10 seed and update "to do" item 
                                      if(!this.isFirstPlant(garden.gardenState.gardenPlots)) {
                                        garden.addSeedsToPlayerInventory(this.props.dispatch, 10);
                                        this.props.dispatch(setTodoStatusAction(5, 2));
                                      }
                                      this.setScrollEnabled(true);
                                    });
                                }}>
                                <View
                                  style={{
                                    backgroundColor: theme.COLORS.TRANSPARENT,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <LottieView
                                    style={{
                                      width: 70,
                                      height: 80,
                                    }}
                                    source={getAnimationFromPath(
                                      item.assets.health2Animation,
                                    )}
                                    autoPlay={false}
                                    loop={false}
                                    progress={0.5}
                                  />
                                </View>
                              </DraggableGardenItem>
                            );
                          }}
                        />
                      </View>
                    </View>
                  </View>
                )}
              </View>
            </View>
          )}
        </GardenContext.Consumer>

        <Footer navigation={navigation} tabName="Home" />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    trackingLog: state.trackLog.logHistory,
    trackingLogStaging: state.trackLogStaging,
    userAnalytics: state.userAnalytics,
    customSymptoms: state.trackCustomSymptoms.customSymptoms,
    localState: state,
  };
};
export default connect(mapStateToProps)(GardenScreen);
