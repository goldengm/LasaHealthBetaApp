import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import Slider from '@react-native-community/slider';
import cloneDeep from 'lodash/cloneDeep';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import produce from 'immer';
import {KeyboardAvoidingView} from 'react-native';

import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
import {theme, styles, Images} from '../../constants';
import {
  Bubble,
  Button,
  Select,
  Input,
  Footer,
  TouchableOpacity,
  RoundedTopContainer,
} from '../../components';
import {
  addTrackingLogStagingTimestampAction,
  addTrackingLogStagingAction,
  addTrackingLogFromStagingAction,
  resetTrackingLogStagingToDefaultAction,
  removeTrackingLogStagingAction,
  addTrackingLogStagingSeverityAction,
  addTrackingLogStagingOptionAction,
  addTrackingLogStagingNumberAction,
  addTrackingGeneralLogStagingNoteAction,
} from '../../redux/actions/trackActions';
import {
  regenerateMenstrualCycleAction,
  regenerateChartStatsAction,
  resetUserAnalyticsInteractiveParamsAction,
} from '../../redux/actions/userAnalyticsActions';
import {setTodoStatusAction} from '../../redux/actions/userProfileActions';
import {GardenContext} from '../../garden/GardenProvider';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() === 'ios';
const {width, height} = Dimensions.get('screen');
const bubbleRowMax = 5;

const currentMood = {
  0: {
    Type: 'CurrentMood',
    BodyPart: 'Head',
    IconName: 'Svg018Stressed',
    Category: 'Neurological',
    Name: 'Awful',
    Measurements: {
      Binary: false,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  1: {
    Type: 'CurrentMood',
    BodyPart: 'Head',
    IconName: 'Svg039Sad',
    Category: 'Neurological',
    Name: 'Bad',
    Measurements: {
      Binary: false,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  2: {
    Type: 'CurrentMood',
    BodyPart: 'Head',
    IconName: 'Svg003Meh',
    Category: 'Neurological',
    Name: 'Meh',
    Measurements: {
      Binary: false,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },

  3: {
    Type: 'CurrentMood',
    BodyPart: 'Head',
    IconName: 'Svg031Smile',
    Category: 'Neurological',
    Name: 'Good',
    Measurements: {
      Binary: false,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },

  4: {
    Type: 'CurrentMood',
    BodyPart: 'Head',
    IconName: 'Svg001Happy',
    Category: 'Neurological',
    Name: 'Rad',
    Measurements: {
      Binary: false,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
};

const menstrualSymptoms = {
  0: {
    Type: 'Menstrual',
    BodyPart: 'Pelvis',
    IconName: 'Svg034SanitaryNapkin',
    Category: 'Gynecological',
    Name: 'None',
    Measurements: {
      Binary: true,
      Severity: true,
      Location: true,
      Number: true,
      Options: [{title: 'one'}, {title: 'two'}, {title: 'three'}],
    },
  },

  1: {
    Type: 'Menstrual',
    BodyPart: 'Pelvis',
    IconName: 'Svg046Drop',
    Category: 'Gynecological',
    Name: 'Spotting',
    Measurements: {
      Binary: true,
      Severity: true,
      Location: true,
      Number: true,
      Options: [{title: 'one'}, {title: 'two'}, {title: 'three'}],
    },
  },
  2: {
    Type: 'Menstrual',
    BodyPart: 'Pelvis',
    IconName: 'Svg074Drop',
    Category: 'Gynecological',
    Name: 'Light',
    Measurements: {
      Binary: true,
      Severity: true,
      Location: true,
      Number: true,
      Options: [{title: 'one'}, {title: 'two'}, {title: 'three'}],
    },
  },
  3: {
    Type: 'Menstrual',
    BodyPart: 'Pelvis',
    IconName: 'Svg060Drop',
    Category: 'Gynecological',
    Name: 'Medium',
    Measurements: {
      Binary: true,
      Severity: true,
      Location: true,
      Number: true,
      Options: [{title: 'one'}, {title: 'two'}, {title: 'three'}],
    },
  },
  4: {
    Type: 'Menstrual',
    BodyPart: 'Pelvis',
    IconName: 'Svg001Rain',
    Category: 'Gynecological',
    Name: 'Heavy',
    Measurements: {
      Binary: true,
      Severity: true,
      Location: true,
      Number: true,
      Options: [{title: 'one'}, {title: 'two'}, {title: 'three'}],
    },
  },
};

const dischargeSymptoms = {
  0: {
    Type: 'VaginalDischarge',
    BodyPart: 'Pelvis',
    IconName: 'Svg034SanitaryNapkin',
    Category: 'Gynecological',
    Name: 'None',
    Measurements: {
      Binary: true,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  1: {
    Type: 'VaginalDischarge',
    BodyPart: 'Pelvis',
    IconName: 'Svg020Cream',
    Category: 'Gynecological',
    Name: 'Creamy',
    Measurements: {
      Binary: true,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  2: {
    Type: 'VaginalDischarge',
    BodyPart: 'Pelvis',
    IconName: 'Svg046Drop',
    Category: 'Gynecological',
    Name: 'Clear',
    Measurements: {
      Binary: true,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  3: {
    Type: 'VaginalDischarge',
    BodyPart: 'Pelvis',
    IconName: 'Svg003Milk',
    Category: 'Gynecological',
    Name: 'White',
    Measurements: {
      Binary: true,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  4: {
    Type: 'VaginalDischarge',
    BodyPart: 'Pelvis',
    IconName: 'Svg007HotWater',
    Category: 'Gynecological',
    Name: 'Yellow',
    Measurements: {
      Binary: true,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  5: {
    Type: 'VaginalDischarge',
    BodyPart: 'Pelvis',
    IconName: 'Svg023Drop',
    Category: 'Gynecological',
    Name: 'Gray',
    Measurements: {
      Binary: true,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  6: {
    Type: 'VaginalDischarge',
    BodyPart: 'Pelvis',
    IconName: 'Svg008Blood',
    Category: 'Gynecological',
    Name: 'Pink',
    Measurements: {
      Binary: true,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  7: {
    Type: 'VaginalDischarge',
    BodyPart: 'Pelvis',
    IconName: 'Svg043Water',
    Category: 'Gynecological',
    Name: 'Red',
    Measurements: {
      Binary: true,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  8: {
    Type: 'VaginalDischarge',
    BodyPart: 'Pelvis',
    IconName: 'Svg010Wind',
    Category: 'Gynecological',
    Name: 'Dry',
    Measurements: {
      Binary: true,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
  9: {
    Type: 'VaginalDischarge',
    BodyPart: 'Pelvis',
    IconName: 'Svg028Fish',
    Category: 'Gynecological',
    Name: 'Fishy Smell',
    Measurements: {
      Binary: true,
      Severity: false,
      Location: false,
      Number: false,
      Options: [],
    },
  },
};

const stressSymptom = {
  Type: 'Essential',
  BodyPart: '',
  IconName: 'Svg028Star',
  Category: 'Other',
  Name: 'Current Stress',
  Measurements: {
    Binary: false,
    Severity: true,
    Location: false,
    Number: false,
    Options: [],
  },
  Notes: '',
};

const painSymptom = {
  Type: 'Essential',
  BodyPart: '',
  IconName: 'Svg028Star',
  Category: 'Other',
  Name: 'Current Pain',
  Measurements: {
    Binary: false,
    Severity: true,
    Location: false,
    Number: false,
    Options: [],
  },
  Notes: '',
};

const defaultSymptom = {
  Type: '',
  BodyPart: '',
  IconName: '',
  Category: '',
  Name: '',
  Measurements: {
    Binary: false,
    Severity: false,
    Location: false,
    Number: false,
    Options: [],
  },
};

const defaultSymptomNotes = '';

class TrackSymptomsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;

    this.state = {
      modalNotes: defaultSymptomNotes,
      moodSliderVisible: {0: false},
      moodSliderSymptom: {0: defaultSymptom},

      painSliderVisible: {0: false},
      painSliderSymptom: {0: painSymptom},
      stressSliderVisible: {0: false},
      stressSliderSymptom: {0: stressSymptom},

      mensSliderVisible: {0: false},
      mensSliderSymptom: {0: defaultSymptom},
      dischargeSliderVisible: this.getInitialSymptomStates(10, false),
      dischargeSliderSymptom: this.getInitialSymptomStates(10, defaultSymptom),
      symptomsSliderVisible: this.getInitialSymptomStates(0, false),
      symptomsSliderSymptom: this.getInitialSymptomStates(0, defaultSymptom), //  "Symp 1"
      activitiesSliderVisible: this.getInitialSymptomStates(0, false),
      activitiesSliderSymptom: this.getInitialSymptomStates(0, defaultSymptom),
      healthMeasurementsSliderVisible: this.getInitialSymptomStates(0, false),
      healthMeasurementsSliderSymptom: this.getInitialSymptomStates(
        0,
        defaultSymptom,
      ),

      combinedPastAndTrackingSymptoms: {},
    };
  }

  updatedCombinedSymptomList = () => {
    let combinedPastAndTrackingSymptomsNew = {};
    combinedPastAndTrackingSymptomsNew = cloneDeep(
      this.props.trackingLogStaging.symptoms,
    );
    Promise.resolve()
      .then(() =>
        Object.entries(this.props.trackedSymptoms).forEach(
          ([item, sympDict]) => {
            let symptomNameIndex = -1;
            symptomNameIndex = this.findIndexOfSymptom(
              combinedPastAndTrackingSymptomsNew,
              sympDict.Name,
              sympDict.Category,
              sympDict.BodyPart,
              sympDict.Type,
            );
            //  if the symptom hasn't been added to the combined list yet
            if (symptomNameIndex < 0) {
              combinedPastAndTrackingSymptomsNew[
                Object.keys(combinedPastAndTrackingSymptomsNew).length
              ] = sympDict;
            }
          },
        ),
      )
      .then(() => {
        console.log(
          'COMBINED AFTER MOUNT: ',
          combinedPastAndTrackingSymptomsNew,
        );
        this.setCombinedPastAndTrackingSymptoms(
          combinedPastAndTrackingSymptomsNew,
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    const {navigation} = this.props;

    this.mixpanel.track('trackSymptomsScreen_reached');
    if (this.props.trackingLogStaging.tsFromPast) {
      this.updatedCombinedSymptomList();
      this._unsubscribe = navigation.addListener('focus', () => {
        // Screen was focused
        console.log('FOCUS! from the past');
        this.updatedCombinedSymptomList();
      });
    } else {
      this._unsubscribe = navigation.addListener('focus', () => {
        // Screen was focused
        console.log('FOCUS!');
        console.log(this.state.symptomsSliderSymptom);
        this.updateSymptomListStates();

        //  FIXMETUNA:  I need to add the ability to load a past timestamp
        //  log if one is passed in to be edited
        if (!this.props.trackingLogStaging.tsFromPast) {
          this.props.dispatch(
            addTrackingLogStagingTimestampAction(
              this.getCurrentTimestampMinutes(),
              false,
            ),
          );
        }
      });
    }
  }

  componentWillUnmount() {
    if (this._unsubscribe) {
      this._unsubscribe();
    }
  }

  setCombinedPastAndTrackingSymptoms = combinedPastAndTrackingSymptomsP => {
    this.setState(
      produce(draft => {
        draft.combinedPastAndTrackingSymptoms =
          combinedPastAndTrackingSymptomsP;
      }),
    );
  };

  getInitialSymptomStates = (numSymptoms, fillerValue) => {
    const updatedNumPanels = numSymptoms / bubbleRowMax;
    let draft = {0: fillerValue};
    let currentNumPanels = 1;
    if (currentNumPanels < updatedNumPanels) {
      //  expand state length length here of visible and symptom
      // add panels until updated number of panels has been reached
      for (let i = 0; i < updatedNumPanels - currentNumPanels; i++) {
        draft[currentNumPanels + i] = fillerValue;
      }
    }
    return draft;
  };

  checkForSymptomListUpdate = (stateName, numSymptoms) => {
    const updatedNumPanels = numSymptoms / bubbleRowMax;
    const currentNumPanels = Object.keys(
      this.state[stateName + 'Visible'],
    ).length;
    if (currentNumPanels < updatedNumPanels) {
      //  expand state length length here of visible and symptom
      this.setState(
        produce(draft => {
          // add panels until updated number of panels has been reached
          for (let i = 0; i < updatedNumPanels - currentNumPanels; i++) {
            draft[stateName + 'Visible'][currentNumPanels + i] = false;
            draft[stateName + 'Symptom'][currentNumPanels + i] = defaultSymptom;
          }
        }),
      );
    }
  };

  updateSymptomListStates = () => {
    // console.log("UPDATEB STATE");
    //  Check redux tracking state, then make sure symptoms, activities, and health measurements
    //  sliders are long enough (have enough panel state groups) and update the lists if necessary
    let symptomCount = 0;
    let activityCount = 0;
    let healthMeasurementCount = 0;

    Object.entries(this.props.trackedSymptoms).map(([itemNum, sympDict]) => {
      if (sympDict.Type === 'Symptom') {
        symptomCount = symptomCount + 1;
      } else if (sympDict.Type === 'Activity') {
        activityCount = activityCount + 1;
      } else if (sympDict.Type === 'HealthMeasurement') {
        healthMeasurementCount = healthMeasurementCount + 1;
      }
    });

    // this.checkForSymptomListUpdate("dischargeSlider", 20);
    this.checkForSymptomListUpdate('symptomsSlider', symptomCount);
    this.checkForSymptomListUpdate('activitiesSlider', activityCount);
    this.checkForSymptomListUpdate(
      'healthMeasurementsSlider',
      healthMeasurementCount,
    );
  };

  handleModalNotesChange = modalNotes => {
    this.setState({modalNotes});
  };

  setMensSliderVisible = (ind, visible) => {
    this.setState(
      produce(draft => {
        draft.mensSliderVisible[ind] = visible;
      }),
    );
  };
  setMensSliderSymptom = (ind, symptom) => {
    this.setState(
      produce(draft => {
        draft.mensSliderSymptom[ind] = symptom;
      }),
    );
  };

  setStateSlider = (stateName, stateType, ind, value) => {
    const {TrackingLogStaging} = this.props;
    //  if the current symptom has a log for the current timestamp, use it's values
    this.setState(
      produce(draft => {
        draft[stateName + stateType][ind] = value;
      }),
    );
  };

  findIndexOfSymptom = (sympDict, name, cat, body, type) => {
    let sympIndexTmp = -1;

    for (let [key, val] of Object.entries(sympDict)) {
      if (
        !(val == null) &&
        val.Name === name &&
        val.Category === cat &&
        val.BodyPart === body &&
        val.Type === type
      ) {
        sympIndexTmp = key;
        break;
      }
    }
    return sympIndexTmp;
  };

  symptomSlider = (index, symptomObj) => {
    // Binary: true,  //  ignore, this is always present
    // Severity: false,  //  === this equals adding the severity slider already present
    // NOT USED ANYMORE -> Location: false,  //  this will be a dropdown for body locations
    // Number: false,   //  this will be an input box for numbers
    // Options: [],  //  this will be a dropdown for options
    // symptomObj.Measurements.Severity;

    //  FIXMETUNA:
    //  FIXMETUNA:  I might need to connect these to states later
    //  FIXMETUNA:  I need to setup logging properly again first
    //  FIXMETUNA:
    let currentSeverity = 3.0;
    let currentlySelectedOption = 'Symptom Options';
    let currentInputValue = 'Enter amount here';
    let currentModalText = '';

    //  get symptom index
    let symptomNameIndex = -1;
    symptomNameIndex = this.findIndexOfSymptom(
      this.props.trackingLogStaging.symptoms,
      symptomObj.Name,
      symptomObj.Category,
      symptomObj.BodyPart,
      symptomObj.Type,
    );

    //  display currently logged values if they exist
    if (symptomNameIndex >= 0) {
      const sympSeverityTmp =
        this.props.trackingLogStaging.symptoms[symptomNameIndex].Measurements
          .Severity;
      if (
        !(sympSeverityTmp == null) &&
        !(sympSeverityTmp === defaultSymptom.Measurements.Severity)
      ) {
        currentSeverity = sympSeverityTmp;
      }

      const sympOptionTmp =
        this.props.trackingLogStaging.symptoms[symptomNameIndex].Measurements
          .Options;
      if (
        !(sympOptionTmp == null) &&
        !(sympOptionTmp === defaultSymptom.Measurements.Options) &&
        typeof sympOptionTmp === 'string'
      ) {
        currentlySelectedOption = sympOptionTmp;
      }

      const sympNumberTmp =
        this.props.trackingLogStaging.symptoms[symptomNameIndex].Measurements
          .Number;
      if (
        !(sympNumberTmp == null) &&
        !(sympNumberTmp === defaultSymptom.Measurements.Number)
      ) {
        currentInputValue = sympNumberTmp;
      }
    }

    let currentPlaceholdVal = 'enter here';
    if (
      !(currentInputValue == null) &&
      !(typeof currentInputValue === 'string') &&
      !(currentInputValue === true)
    ) {
      currentPlaceholdVal = String(currentInputValue);
    }

    return (
      <View
        style={{
          marginTop: 0,
          marginHorizontal: theme.SIZES.BASE * 0.3,
          marginBottom: 4,
          paddingHorizontal: 0,
          flex: 1,
          flexDirection: 'row',
          key: index,
          backgroundColor: theme.COLORS.APP_BACKGROUND,
          borderRadius: theme.SIZES.BASE * 1.5,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          {symptomObj.Measurements.Severity && (
            <View
              style={{
                flex: 1,
                marginHorizontal: theme.SIZES.BASE,
                marginVertical: theme.SIZES.BASE,
              }}>
              <Slider
                tapToSeek={true}
                allowTouchTrack={true}
                onSlidingComplete={sliderVal => {
                  this.props.dispatch(
                    addTrackingLogStagingSeverityAction(symptomObj, sliderVal),
                  );
                }}
                thumbTintColor={theme.COLORS.DEFAULT}
                minimumTrackTintColor={theme.COLORS.DEFAULT}
                style={{marginTop: 6}}
              />

              <View
                style={{
                  position: 'absolute',
                  flexDirection: 'row',
                  marginHorizontal: theme.SIZES.BASE,
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-start',
                  }}>
                  <Text style={{fontSize: 10, fontFamily: theme.FONTS.TEXT}}>
                    Mild
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 10, fontFamily: theme.FONTS.TEXT}}>
                    Severe
                  </Text>
                </View>
              </View>
            </View>
          )}

          {!(symptomObj.Measurements.Options == null) &&
            typeof symptomObj.Measurements.Options == typeof [] &&
            symptomObj.Measurements.Options.length > 0 && (
              <View
                style={{
                  flex: 1,
                  marginHorizontal: theme.SIZES.BASE,
                  marginVertical: theme.SIZES.BASE,
                }}>
                <Select
                  defaultIndex={1}
                  customPrompt={currentlySelectedOption.toString()}
                  options={symptomObj.Measurements.Options}
                  onSelect={(index, value) => {
                    this.props.dispatch(
                      addTrackingLogStagingOptionAction(symptomObj, value),
                    );
                  }}
                />
              </View>
            )}
          {symptomObj.Measurements.Number && (
            <View
              style={{
                flex: 1,
                marginHorizontal: theme.SIZES.BASE,
                marginVertical: theme.SIZES.BASE,
              }}>
              <Input
                placeholder={currentPlaceholdVal}
                keyboardType={iosPlatform() ? 'number-pad' : 'numeric'}
                inputContainerStyle={{
                  height: 30,
                  marginVertical: 0,
                  paddingTop: 14,
                  borderBottomWidth: 0,
                  fontFamily: theme.FONTS.TEXT,
                }}
                leftIcon={null}
                onChangeText={value => {
                  this.props.dispatch(
                    addTrackingLogStagingNumberAction(symptomObj, value),
                  );
                }}
              />
            </View>
          )}
        </View>
      </View>
    );
  };

  buildCustomBubbleOnPress = (stateName, rowCountTMP, sympDictInner) => {
    return newVal => {
      //  help reset slider state in between presses so it always defaults to 0
      Promise.resolve()
        .then(() =>
          this.setStateSlider(stateName, 'Visible', rowCountTMP, false),
        )
        .then(() => {
          if (newVal) {
            this.setStateSlider(stateName, 'Visible', rowCountTMP, newVal);
          }
        })
        .catch(error => {
          console.log(error);
        });
      if (newVal) {
        this.setStateSlider(stateName, 'Symptom', rowCountTMP, sympDictInner);

        // add new entry for symp to current log when selected
        this.props.dispatch(addTrackingLogStagingAction(sympDictInner));
      } else {
        this.setStateSlider(stateName, 'Symptom', rowCountTMP, defaultSymptom);
        // remove the delected entry for symp from current log
        this.props.dispatch(removeTrackingLogStagingAction(sympDictInner));
      }
    };
  };

  buildCustomBubbleUniqueDeselect = sympDictInner => {
    return () => {
      // remove the delected entry for symp from current log
      this.props.dispatch(removeTrackingLogStagingAction(sympDictInner));
    };
  };

  getCustomBubble = (
    indexCount,
    symptomP,
    petalStyle,
    symptomToWatch,
    enableSlider,
    customOnPressP,
    uniqueSelectionSymptom = null,
    customBubbleUniqueDeselect = null,
  ) => {
    return (
      <Bubble
        style={{
          ...petalStyle,

          borderColor: petalStyle['backgroundColor'],

          borderWidth: 2,
          width: petalStyle.width,
          height: petalStyle.height,
          marginHorizontal: 2,
        }}
        initialSelectedState={
          this.findIndexOfSymptom(
            this.props.trackingLogStaging.symptoms,
            symptomP.Name,
            symptomP.Category,
            symptomP.BodyPart,
            symptomP.Type,
          ) >= 0
            ? true
            : false
        }
        iconName={symptomP.IconName}
        bubbleName={symptomP.Name}
        key={indexCount}
        customOnPress={customOnPressP}
        viewBackgroundColor={
          symptomToWatch.Name === symptomP.Name && enableSlider
            ? theme.COLORS.APP_BACKGROUND
            : theme.COLORS.ELEMENT_BACKGROUND
        }
        uniqueSelectionSymptom={uniqueSelectionSymptom}
        customBubbleUniqueDeselect={customBubbleUniqueDeselect}
        connectedSymptom={symptomP}
      />
    );
  };

  checkForFeaturedBubblePanels = () => {
    let featuredPanels = [];
    Object.entries(this.props.trackedSymptoms).forEach(([item, sympDict]) => {
      if (sympDict.Type === 'Menstrual' && sympDict.Name === 'Menstrual Flow') {
        featuredPanels = featuredPanels.concat('Menstrual Flow');
      } else if (
        sympDict.Type === 'Menstrual' &&
        sympDict.Name === 'Vaginal Discharge'
      ) {
        featuredPanels = featuredPanels.concat('Vaginal Discharge');
      } else if (
        sympDict.Type === 'Essential' &&
        sympDict.Name === 'Current Mood'
      ) {
        featuredPanels = featuredPanels.concat('Current Mood');
      } else if (
        sympDict.Type === 'Essential' &&
        sympDict.Name === 'Current Stress'
      ) {
        featuredPanels = featuredPanels.concat('Current Stress');
      } else if (
        sympDict.Type === 'Essential' &&
        sympDict.Name === 'Current Pain'
      ) {
        featuredPanels = featuredPanels.concat('Current Pain');
      }
    });
    return featuredPanels;
  };

  //  FIXMETUNA:  need to add generic slider panel
  getSliderPanel = (
    panelTitle,
    startRangeStr,
    endRangeStr,
    rangeLabelsList,
    sympDictP,
  ) => {
    const {navigation} = this.props;

    return (
      <View style={{}}>
        <TouchableOpacity
          style={{
            marginVertical: 6,
            marginHorizontal: theme.SIZES.BASE,
          }}
          onPress={() => navigation.navigate('TrackSymptomsAdd')}>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
              fontSize: theme.SIZES.H6,
            }}>
            {panelTitle}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            marginHorizontal: theme.SIZES.BASE,
            marginBottom: theme.SIZES.BASE,
          }}>
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: theme.SIZES.C2,
                  fontFamily: theme.FONTS.TEXT,
                }}>
                {startRangeStr}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: theme.SIZES.C2,
                  fontFamily: theme.FONTS.TEXT,
                }}>
                {endRangeStr}
              </Text>
            </View>
          </View>
          <Slider
            value={
              typeof sympDictP.Measurements.Severity === 'boolean'
                ? 0.0
                : 0.0 + sympDictP.Measurements.Severity
            }
            allowTouchTrack={true}
            onSlidingComplete={sliderVal => {
              let sympDictInner = cloneDeep(sympDictP);
              sympDictInner.Measurements.Severity = sliderVal;
              this.props.dispatch(addTrackingLogStagingAction(sympDictInner));
            }}
            thumbTintColor={theme.COLORS.PRIMARY2}
            minimumTrackTintColor={theme.COLORS.PRIMARY2}
            maximumTrackTintColor={theme.COLORS.TEXT3}
            style={{marginTop: 18}}
            trackStyle={{height: 16, borderRadius: 20}}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: theme.SIZES.BASE,
            }}>
            {rangeLabelsList.map(item => (
              <Text
                key={item}
                style={{
                  fontSize: theme.SIZES.C2,
                  fontFamily: theme.FONTS.TEXT,
                }}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      </View>
    );
  };

  symptomDictContainsSymptomType = (symptomsDict, symptomType) => {
    let result = false;
    Object.entries(symptomsDict).forEach(([item, sympDict]) => {
      if (sympDict.Type === symptomType) {
        result = true;
        return;
      }
    });
    return result;
  };

  getBubblePanel = (
    panelTitle,
    symptomsDict,
    symptomType,
    customBubbleStyle,
    stateName,
    enableSlider = true,
    uniqueSelectionSymptomState = null, //  otherwise this will be a state symptom to mirror
  ) => {
    if (
      (symptomType == 'Symptom' ||
        symptomType == 'Activity' ||
        symptomType == 'HealthMeasurement') &&
      !this.symptomDictContainsSymptomType(symptomsDict, symptomType)
    ) {
      return null;
    }

    let stateVisibility = this.state[stateName + 'Visible'];
    let stateSymptom = this.state[stateName + 'Symptom'];

    const {navigation} = this.props;
    let indexCount = 0;
    let rowCount = -1;
    let bubbleRowSympList = {};
    return (
      <View style={{}}>
        <TouchableOpacity
          style={{
            marginVertical: 6,
            marginHorizontal: theme.SIZES.BASE,
          }}
          onPress={() => navigation.navigate('TrackSymptomsAdd')}>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
              fontSize: theme.SIZES.H6,
            }}>
            {panelTitle}
          </Text>
        </TouchableOpacity>
        {Object.entries(symptomsDict).map(([item, sympDict]) => {
          //  if this is the last item, display all remaining bubbles
          if (parseInt(item) >= Object.entries(symptomsDict).length - 1) {
            if (sympDict.Type === symptomType) {
              bubbleRowSympList[indexCount % bubbleRowMax] = sympDict;
              indexCount = indexCount + 1;
            } else if (indexCount === 0) {
              return null; //  there were no valid symptoms
            }
            //  create the new row
            rowCount = rowCount + 1;
            const rowCountTMP = rowCount;
            let lastIndexToInclude = indexCount % bubbleRowMax;
            if (lastIndexToInclude === 0) {
              lastIndexToInclude = bubbleRowMax;
            }
            //  FIXMETUNA:  if rowCount state hasn't been created yet, return null and wait
            //  state will be created during the next general componant update
            //  likely this componant is in the background in this case
            if (rowCountTMP >= Object.entries(stateSymptom).length) {
              return null;
            }

            const bubbleRowSympListTmp = bubbleRowSympList;

            return (
              <View key={item} style={{marginVertical: 4}}>
                <View style={{flexDirection: 'row'}}>
                  {Object.entries(bubbleRowSympListTmp).map(
                    ([itemInner, sympDictInner]) => {
                      if (itemInner >= lastIndexToInclude) {
                        return null;
                      } else {
                        const customOnPress = this.buildCustomBubbleOnPress(
                          stateName,
                          rowCountTMP,
                          sympDictInner,
                        );
                        const customBubbleUniqueDeselect =
                          this.buildCustomBubbleUniqueDeselect(sympDictInner);

                        //  FIXMETUNA:  their state will
                        return this.getCustomBubble(
                          indexCount * itemInner,
                          sympDictInner,
                          customBubbleStyle,
                          stateSymptom[rowCountTMP],
                          enableSlider,
                          customOnPress,
                          uniqueSelectionSymptomState,
                          customBubbleUniqueDeselect,
                        );
                      }
                    },
                  )}
                </View>

                {enableSlider && (
                  <View>
                    {stateVisibility[rowCountTMP] &&
                      this.symptomSlider(
                        rowCountTMP,
                        stateSymptom[rowCountTMP],
                      )}
                  </View>
                )}
              </View>
            );
          } else if (sympDict.Type === symptomType) {
            bubbleRowSympList[indexCount % bubbleRowMax] = sympDict;
            indexCount = indexCount + 1;
            if (indexCount % bubbleRowMax === 0) {
              rowCount = rowCount + 1;
              const rowCountTMP = rowCount;

              //  FIXMETUNA:  if rowCount state hasn't been created yet, return null and wait
              //  state will be created during the next general componant update
              //  likely this componant is in the background in this case
              if (rowCountTMP >= Object.entries(stateSymptom).length) {
                return null;
              }

              const bubbleRowSympListTmp = bubbleRowSympList;

              return (
                <View key={item} style={{marginVertical: 4}}>
                  <View style={{flexDirection: 'row'}}>
                    {Object.entries(bubbleRowSympListTmp).map(
                      ([itemInner, sympDictInner]) => {
                        const customOnPress = this.buildCustomBubbleOnPress(
                          stateName,
                          rowCountTMP,
                          sympDictInner,
                        );
                        const customBubbleUniqueDeselect =
                          this.buildCustomBubbleUniqueDeselect(sympDictInner);

                        return this.getCustomBubble(
                          indexCount * itemInner,
                          sympDictInner,
                          customBubbleStyle,
                          stateSymptom[rowCountTMP],
                          enableSlider,
                          customOnPress,
                          uniqueSelectionSymptomState,
                          customBubbleUniqueDeselect,
                        );
                      },
                    )}
                  </View>

                  {enableSlider && (
                    <View>
                      {stateVisibility[rowCountTMP] &&
                        this.symptomSlider(
                          rowCountTMP,
                          stateSymptom[rowCountTMP],
                        )}
                    </View>
                  )}
                </View>
              );
            }
            return null;
          } else {
            return null;
          }
        })}
      </View>
    );
  };

  updateLogStatePart0 = (key, value) => dispatch => {
    dispatch(addTrackingGeneralLogStagingNoteAction(this.state.modalNotes));
    return Promise.resolve();
  };

  updateLogStatePart1 = (key, value) => dispatch => {
    dispatch(
      addTrackingLogFromStagingAction(
        this.props.trackingLogStaging.timestamp,
        this.props.trackingLogStaging.symptoms,
        this.props.trackingLogStaging.generalLogEntryNotes,
      ),
    );

    return Promise.resolve();
  };

  updateLogStatePart2 = (key, value) => dispatch => {
    dispatch(
      regenerateMenstrualCycleAction(
        this.props.trackingLog,
        this.props.userProfile,
      ),
    );
    return Promise.resolve();
  };

  updateLogStatePart2_1 = (key, value) => dispatch => {
    dispatch(resetUserAnalyticsInteractiveParamsAction());
    return Promise.resolve();
  };

  updateLogStatePart3 = (key, value) => dispatch => {
    dispatch(
      regenerateChartStatsAction(
        this.props.trackingLog,
        this.props.userProfile,
        this.props.userAnalytics,
        this.props.customSymptoms,
      ),
    );
    return Promise.resolve();
  };

  updateLogStatePart4 = garden => {
    //  add seeds to player inventory if this is the first entry of the day
    if (
      Object.keys(this.props.trackingLog).sort().reverse()[0] / 1440.0 <
      garden.getLastDailyRefreshTSDays()
    ) {
      garden.addSeedsToPlayerInventory(this.props.dispatch, 10);
    }
    garden.waterGarden(this.props.dispatch);
    return Promise.resolve();
  };

  updateLogStatePart5 = (key, value) => dispatch => {
    //  FIXMETUNA:  this has been temporarily disabled because the amie chatbot is not currently
    //  FIXMETUNA:  functional in v1 of the MVP
    this.checkForAmieValidation();
    return Promise.resolve();
  };

  updateLogStatePart6 = (key, value) => dispatch => {
    dispatch(resetTrackingLogStagingToDefaultAction());
    return Promise.resolve();
  };

  checkForAmieValidation = () => {
    if (!this.props.trackingLogStaging.tsFromPast) {
      let amieValidationType = ''; // "validation.sad.1"

      for (let symptom of this.props.trackingLogStaging.symptoms) {
        if (['Awful', 'Bad'].includes(symptom.Name)) {
          amieValidationType = 'validation.sad.1';
        } else if (
          [
            'Abdominal Pain',
            'Leg Pain',
            'Lower Back Pain',
            'Other Body Pain',
            'Migraine',
          ].includes(symptom.Name)
        ) {
          amieValidationType = 'validation.pain.1';
        } else if (
          ['Anxiety', 'Anxiety Attack', 'Painic Attack'].includes(symptom.Name)
        ) {
          amieValidationType = 'validation.anxiety.1';
        } else if (['Depression', 'Suicidal Thoughts'].includes(symptom.Name)) {
          amieValidationType = 'validation.depressed.1';
        }

        //  FIXMETUNA: to be added
        // "Chest Pain", "Difficulty Breathing",   ==  potentially serious medical condition
        // "Diarrhea", "Nausea", "Vomiting", "Fever", "Shivering / Chills"  ==  feeling sick
        //  need a better / specific response for "Suicidal Thoughts"
      }
      // if (!(amieValidationType == "")) {
      //   DeviceEventEmitter.emit("event.amieModalVisible", amieValidationType);
      // }
    }
  };

  onSubmitSymptoms = garden => {
    Promise.resolve()
      .then(() => {
        return this.mixpanel.track('trackSymptoms_logSubmitted', {
          num_symptoms: Object.keys(this.props.trackingLogStaging.symptoms)
            .length,
        });
      })
      .then(() => {
        return this.updateLogStatePart4(garden);
      })
      .then(() => this.props.dispatch(this.updateLogStatePart0(1, 2)))
      .then(() => this.props.dispatch(this.updateLogStatePart1(1, 2)))

      .then(() => {
        return this.props.dispatch(this.updateLogStatePart2(1, 2));
      })
      .then(() => {
        return this.props.dispatch(this.updateLogStatePart2_1(1, 2));
      })

      .then(() => {
        return this.props.dispatch(this.updateLogStatePart3(1, 2));
      })
      .then(() => {
        return this.props.dispatch(this.updateLogStatePart6(1, 2));
      })

      .then(() => {
        return this.props.dispatch(setTodoStatusAction(2, 2));
      })

      .then(() => {
        this.props.navigation.navigate('TrackMain');
      })
      .catch(error => {
        console.log('ERROR SUBMITTING SYMPTOM ENTRY');
        console.log(error);
      });
  };

  findSymptomInPastEntry = symptomP => {
    let defaultForSymptom = defaultSymptom;
    if (symptomP.Name == stressSymptom.Name) {
      defaultForSymptom = stressSymptom;
    } else if (symptomP.Name == painSymptom.Name) {
      defaultForSymptom = painSymptom;
    }

    if (this.props.trackingLogStaging.tsFromPast) {
      const indexOfSymptom = this.findIndexOfSymptom(
        this.props.trackingLogStaging.symptoms,
        symptomP.Name,
        symptomP.Category,
        symptomP.BodyPart,
        symptomP.Type,
      );

      if (indexOfSymptom >= 0) {
        return this.props.trackingLogStaging.symptoms[indexOfSymptom];
      } else {
        return defaultForSymptom;
      }
    } else {
      return defaultForSymptom;
    }
  };

  getCurrentTimestampMinutes = () => {
    return Math.floor(Date.now() / 60000.0);
  };

  render() {
    const {navigation, trackingLog, userProfile, trackingLogStaging} =
      this.props;

    const featuredPanels = this.checkForFeaturedBubblePanels();

    let indexCount = 0;
    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customImageName={Images.ui.BackgroundGradient4}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <GardenContext.Consumer>
            {garden => (
              <KeyboardAvoidingView
                style={{
                  flex: 1,
                }}
                behavior="padding"
                enabled={iosPlatform()}>
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
                    testID="pageScrollview1"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{width}}>
                    <RoundedTopContainer
                      style={{
                        paddingHorizontal: theme.SIZES.BASE,
                        minHeight: height - theme.SIZES.BASE * 8.6,
                        marginTop: theme.SIZES.BASE * 0.8,
                      }}>
                      <View
                        style={{marginVertical: theme.SIZES.BASE * 0.5}}></View>

                      {featuredPanels.includes('Current Mood') &&
                        this.getBubblePanel(
                          'How are you feeling?',
                          currentMood,
                          'CurrentMood',
                          styles.petal3Bubble,
                          'moodSlider',
                          false,
                          this.state.moodSliderSymptom,
                        )}

                      {featuredPanels.includes('Current Stress') &&
                        this.getSliderPanel(
                          'Stress',
                          'Low',
                          'High',
                          ['0', '1', '2', '3', '4', '5'],

                          this.findSymptomInPastEntry(stressSymptom),
                        )}

                      {featuredPanels.includes('Current Pain') &&
                        this.getSliderPanel(
                          'Pain',
                          'Low',
                          'High',
                          ['0', '1', '2', '3', '4', '5'],
                          this.findSymptomInPastEntry(painSymptom),
                        )}

                      {featuredPanels.includes('Menstrual Flow') &&
                        this.getBubblePanel(
                          'Menstrual Flow',
                          menstrualSymptoms,
                          'Menstrual',
                          styles.petal5Bubble,
                          'mensSlider',
                          false,
                          this.state.mensSliderSymptom,
                        )}
                      {featuredPanels.includes('Vaginal Discharge') &&
                        this.getBubblePanel(
                          'Vaginal Discharge',
                          dischargeSymptoms,
                          'VaginalDischarge',
                          styles.petal2Bubble,
                          'dischargeSlider',
                          false,
                        )}

                      {this.getBubblePanel(
                        'Symptoms',
                        this.props.trackingLogStaging.tsFromPast
                          ? this.state.combinedPastAndTrackingSymptoms
                          : this.props.trackedSymptoms,
                        'Symptom',
                        styles.petal4Bubble,
                        'symptomsSlider',
                      )}
                      {this.getBubblePanel(
                        'Activities',
                        this.props.trackingLogStaging.tsFromPast
                          ? this.state.combinedPastAndTrackingSymptoms
                          : this.props.trackedSymptoms,
                        'Activity',
                        styles.petal3Bubble,
                        'activitiesSlider',
                      )}
                      {this.getBubblePanel(
                        'Health Measurements',
                        this.props.trackingLogStaging.tsFromPast
                          ? this.state.combinedPastAndTrackingSymptoms
                          : this.props.trackedSymptoms,
                        'HealthMeasurement',
                        styles.petal4Bubble,
                        'healthMeasurementsSlider',
                      )}

                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          alignContent: 'center',
                        }}>
                        <Button
                          testID="customizeButton"
                          style={{
                            ...styles.outlinedButton,
                            fontSize: 16,
                            fontWeight: '700',
                            textAlign: 'center',
                            color: theme.COLORS.PRIMARY,
                          }}
                          onPress={() =>
                            navigation.navigate('TrackSymptomsAdd')
                          }>
                          Customize
                        </Button>
                      </View>

                      <View
                        style={{
                          marginVertical: 6,
                          marginHorizontal: theme.SIZES.BASE,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: theme.SIZES.H6,
                          }}>
                          Notes
                        </Text>
                      </View>

                      <View style={{width: 200}}>
                        <Input
                          testID="notesInput"
                          iconContent={null}
                          placeholder="add notes here"
                          defaultValue={
                            !(this.state.modalNotes == '')
                              ? this.state.modalNotes
                              : this.props.trackingLogStaging
                                  .generalLogEntryNotes
                          }
                          onChangeText={this.handleModalNotesChange}
                          style={{
                            width: width - theme.SIZES.BASE * 2,
                            fontFamily: theme.FONTS.TEXT,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          marginVertical: theme.SIZES.BASE,
                        }}>
                        <View
                          style={{
                            flex: 1,
                            alignItems: 'center',
                          }}>
                          <Button
                            testID="submitButton"
                            style={{
                              ...styles.button,
                              backgroundColor: theme.COLORS.PRIMARY2,

                              fontSize: 16,
                              fontWeight: '700',
                              width: width - theme.SIZES.BASE * 2,
                            }}
                            titleStyle={{color: theme.COLORS.WHITE}}
                            title="Submit"
                            onPress={() => {
                              this.onSubmitSymptoms(garden);
                            }}></Button>
                        </View>
                      </View>
                    </RoundedTopContainer>
                  </ScrollView>
                </View>
              </KeyboardAvoidingView>
            )}
          </GardenContext.Consumer>
          <Footer navigation={navigation} tabName="Track" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    trackedSymptoms: state.trackSymptoms.trackingSymptoms,
    trackingLog: state.trackLog.logHistory,
    trackingLogStaging: state.trackLogStaging,
    userProfile: state.userProfile,
    userAnalytics: state.userAnalytics,
    customSymptoms: state.trackCustomSymptoms.customSymptoms,
  };
};
export default connect(mapStateToProps)(TrackSymptomsScreen);
