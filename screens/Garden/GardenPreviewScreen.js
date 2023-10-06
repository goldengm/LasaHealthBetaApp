import React, {createRef} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import {Text} from 'react-native-elements';
import XDate from 'xdate';

import {
  Accordion,
  Button,
  CheckBox,
  Footer,
  Icon,
  Input,
  LoadingIndicator,
  LottiePlayer,
  Select,
  Modal,
  TouchableOpacity,
} from '../../components';
import {Images, theme, styles, Animations} from '../../constants';
import {getAnimationFromPath} from '../../constants/Animations';
import {GardenContext} from '../../garden/GardenProvider';
import LottieView from 'lottie-react-native';
import {
  fadeLottieToGrey,
  fadeLottieToBlack,
  fadeLottieToGold,
  fadeLottieToPartialGold,
} from '../../garden/GardenUtils';
import produce from 'immer';

const {width, height} = Dimensions.get('screen');

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

class GardenPreviewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollViewOffset: 0,
    };

    this.gardenPlotLocations = {};
  }

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
            <TouchableOpacity disabled>
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
            </TouchableOpacity>
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
            <TouchableOpacity disabled>
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
            </TouchableOpacity>
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
            <TouchableOpacity disabled>
              <Image
                source={currentFlowerIm}
                style={{width: plantWidth * 0.8, height: plantHeight * 1.5}}
              />
            </TouchableOpacity>
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
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: theme.COLORS.TRANSPARENT,
              width: plotWidth,
              height: plotHeight,
            }}>
            <View
              style={{
                backgroundColor: theme.COLORS.TRANSPARENT,
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  };

  render() {
    const {navigation} = this.props;

    return (
      <View
        testID={'gardenPreviewView'}
        style={{height: Math.floor(height / 2.5)}}>
        <GardenContext.Consumer>
          {garden => (
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                testID="gardenPreviewButton"
                onPress={() => {
                  navigation.navigate('Garden');
                }}>
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
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </GardenContext.Consumer>
      </View>
    );
  }
}

export default GardenPreviewScreen;
