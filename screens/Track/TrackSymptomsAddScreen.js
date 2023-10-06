import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import produce from 'immer';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';

import {theme, styles, Images} from '../../constants';
import {
  Accordion,
  Button,
  CheckBox,
  Footer,
  RoundedTopContainer,
} from '../../components';
import {
  addTrackingSymptomAction,
  removeTrackingSymptomAction,
} from '../../redux/actions/trackActions';
import symptomsDir from '../../constants/track/symptomsDir';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

//  FIXMETUNA:  this might cause problems ignoring this warning, scrolling or windowing
//  errors possible, watch out
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
]);

let symptomCategories = [];
Object.entries(symptomsDir).forEach(([indexTmp, sympDict]) => {
  if (
    !symptomCategories.includes(sympDict.Category) &&
    sympDict.Type === 'Symptom'
  ) {
    symptomCategories = symptomCategories.concat(sympDict.Category);
  }
});

class TrackSymptomsAddScreen extends React.Component {
  //  I need a seperate componant state because the rne checkboxes rely on componant
  //  state to function. It's a necessary copy of the redux state
  constructor(props) {
    super(props);
    const {trackedSymptoms, customSymptoms} = this.props;

    let trackedSymptomNamesList = [];
    Object.entries(trackedSymptoms).forEach(([indexTmp, sympDict]) => {
      const tmpName =
        sympDict.Type +
        '_' +
        sympDict.Category +
        '_' +
        sympDict.Name +
        '_' +
        sympDict.BodyPart;
      if (!trackedSymptomNamesList.includes(tmpName)) {
        trackedSymptomNamesList = trackedSymptomNamesList.concat(tmpName);
      }
    });

    this.state = {
      trackedSymptomNames: trackedSymptomNamesList,
      numCustomSymptoms: Object.keys(customSymptoms).length,
    };
  }

  componentDidMount() {
    // const {trackingLog} = this.props;
  }

  addTrackedSymptomName = symptomName => {
    this.setState(
      produce(draft => {
        if (!draft.trackedSymptomNames.includes(symptomName)) {
          draft.trackedSymptomNames =
            draft.trackedSymptomNames.concat(symptomName);
        }
      }),
    );
  };

  removeTrackedSymptomName = symptomName => {
    this.setState(
      produce(draft => {
        if (draft.trackedSymptomNames.includes(symptomName)) {
          draft.trackedSymptomNames = draft.trackedSymptomNames.filter(
            item => item !== symptomName,
          );
        }
      }),
    );
  };

  // 2: {
  //   Type: "Symptom",
  //   BodyPart: "Abdomen",
  //   IconName: "024-hot air balloon",
  //   Category: "Gastrointestinal",
  //   Name: "Bloating",
  //   Measurements: {
  //     Binary: false,
  //     Severity: true,
  //     Location: false,
  //     Number: false,
  //     Options: [],
  //   },
  // },

  renderSymptoms = () => {
    let data = [];
    //  go through each categories
    for (let catName of symptomCategories) {
      let catSymptomsDict = Object.entries(this.props.customSymptoms).filter(
        ([keyTmp, sympDict]) =>
          sympDict.Category === catName && sympDict.Type === 'Symptom',
      );

      data = data.concat({
        title: <Text>{catName}</Text>,
        content: (
          <View
            style={{
              flex: 1,
            }}>
            {Object.entries(catSymptomsDict).map(itemTmp => {
              let indexCount = itemTmp[0];
              let sympDict = itemTmp[1][1];
              const tmpName =
                sympDict.Type +
                '_' +
                sympDict.Category +
                '_' +
                sympDict.Name +
                '_' +
                sympDict.BodyPart;

              return (
                <View
                  key={indexCount}
                  style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                  <CheckBox
                    checkedColor={theme.COLORS.DEFAULT}
                    title={sympDict.Name}
                    checked={this.state.trackedSymptomNames.includes(tmpName)}
                    textStyle={{
                      color: theme.COLORS.DARK_SECONDARY,
                      fontFamily: theme.FONTS.TEXT,
                      fontWeight: '100',
                    }}
                    onPress={() => {
                      const clickedValue =
                        !this.state.trackedSymptomNames.includes(tmpName);
                      if (clickedValue) {
                        this.addTrackedSymptomName(tmpName);
                        this.props.dispatch(
                          addTrackingSymptomAction(
                            sympDict.Name,
                            sympDict.IconName,
                            sympDict.Type,
                            sympDict.Category,
                            sympDict.BodyPart,
                            sympDict.Measurements,
                          ),
                        );
                      } else {
                        this.removeTrackedSymptomName(tmpName);
                        this.props.dispatch(
                          removeTrackingSymptomAction(
                            sympDict.Name,
                            sympDict.Category,
                            sympDict.BodyPart,
                            sympDict.Type,
                          ),
                        );
                      }
                    }}
                  />
                </View>
              );
            })}
          </View>
        ),
      });
    }
    return (
      <View style={{marginTop: 8, marginHorizontal: 10}}>
        <Accordion
          testID="symptomsAccordian"
          data={data}
          style={styles.accordionStyle}
          expandIcon={{
            name: 'chevron-down-outline',
            type: 'ionicon',
            color: theme.COLORS.TEXT1,
          }}
          icon={{
            name: 'chevron-forward-outline',
            type: 'ionicon',
            color: theme.COLORS.TEXT1,
          }}
        />
      </View>
    );
  };

  renderEssential = () => {
    let data = [];
    let catSymptomsDict = Object.entries(this.props.customSymptoms).filter(
      ([keyTmp, sympDict]) => sympDict.Type === 'Essential',
    );
    data = data.concat({
      title: <Text>Essential</Text>,
      content: (
        <View
          style={{
            flex: 1,
          }}>
          {Object.entries(catSymptomsDict).map(itemTmp => {
            let indexCount = itemTmp[0];
            let sympDict = itemTmp[1][1];

            const tmpName =
              sympDict.Type +
              '_' +
              sympDict.Category +
              '_' +
              sympDict.Name +
              '_' +
              sympDict.BodyPart;

            return (
              <View
                key={indexCount}
                style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                <CheckBox
                  checkedColor={theme.COLORS.DEFAULT}
                  title={sympDict.Name}
                  key={indexCount}
                  checked={this.state.trackedSymptomNames.includes(tmpName)}
                  textStyle={{
                    color: theme.COLORS.DARK_SECONDARY,
                    fontFamily: theme.FONTS.TEXT,
                    fontWeight: '100',
                  }}
                  onPress={() => {
                    const clickedValue =
                      !this.state.trackedSymptomNames.includes(tmpName);
                    if (clickedValue) {
                      this.addTrackedSymptomName(tmpName);
                      this.props.dispatch(
                        addTrackingSymptomAction(
                          sympDict.Name,
                          sympDict.IconName,
                          sympDict.Type,
                          sympDict.Category,
                          sympDict.BodyPart,
                          sympDict.Measurements,
                        ),
                      );
                    } else {
                      this.removeTrackedSymptomName(tmpName);
                      this.props.dispatch(
                        removeTrackingSymptomAction(
                          sympDict.Name,
                          sympDict.Category,
                          sympDict.BodyPart,
                          sympDict.Type,
                        ),
                      );
                    }
                  }}
                />
              </View>
            );
          })}
        </View>
      ),
    });
    return (
      <View style={{marginTop: 8, marginHorizontal: 10}}>
        <Accordion
          testID="essentialAccordian"
          data={data}
          style={styles.accordionStyle}
          expandIcon={{
            name: 'chevron-down-outline',
            type: 'ionicon',
            color: theme.COLORS.TEXT1,
          }}
          icon={{
            name: 'chevron-forward-outline',
            type: 'ionicon',
            color: theme.COLORS.TEXT1,
          }}
        />
      </View>
    );
  };

  renderActivities = () => {
    let data = [];
    let catSymptomsDict = Object.entries(this.props.customSymptoms).filter(
      ([keyTmp, sympDict]) => sympDict.Type === 'Activity',
    );
    data = data.concat({
      title: <Text>Activity</Text>,
      content: (
        <View
          style={{
            flex: 1,
          }}>
          {Object.entries(catSymptomsDict).map(itemTmp => {
            let indexCount = itemTmp[0];
            let sympDict = itemTmp[1][1];

            const tmpName =
              sympDict.Type +
              '_' +
              sympDict.Category +
              '_' +
              sympDict.Name +
              '_' +
              sympDict.BodyPart;

            return (
              <View
                key={indexCount}
                style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                <CheckBox
                  checkedColor={theme.COLORS.DEFAULT}
                  title={sympDict.Name}
                  key={indexCount}
                  checked={this.state.trackedSymptomNames.includes(tmpName)}
                  textStyle={{
                    color: theme.COLORS.DARK_SECONDARY,
                    fontFamily: theme.FONTS.TEXT,
                    fontWeight: '100',
                  }}
                  onPress={() => {
                    const clickedValue =
                      !this.state.trackedSymptomNames.includes(tmpName);
                    if (clickedValue) {
                      this.addTrackedSymptomName(tmpName);
                      this.props.dispatch(
                        addTrackingSymptomAction(
                          sympDict.Name,
                          sympDict.IconName,
                          sympDict.Type,
                          sympDict.Category,
                          sympDict.BodyPart,
                          sympDict.Measurements,
                        ),
                      );
                    } else {
                      this.removeTrackedSymptomName(tmpName);
                      this.props.dispatch(
                        removeTrackingSymptomAction(
                          sympDict.Name,
                          sympDict.Category,
                          sympDict.BodyPart,
                          sympDict.Type,
                        ),
                      );
                    }
                  }}
                />
              </View>
            );
          })}
        </View>
      ),
    });
    return (
      <View style={{marginTop: 8, marginHorizontal: 10}}>
        <Accordion
          testID="activitiesAccordian"
          data={data}
          style={styles.accordionStyle}
          expandIcon={{
            name: 'chevron-down-outline',
            type: 'ionicon',
            color: theme.COLORS.TEXT1,
          }}
          icon={{
            name: 'chevron-forward-outline',
            type: 'ionicon',
            color: theme.COLORS.TEXT1,
          }}
        />
      </View>
    );
  };

  renderHealthMeasurements = () => {
    let data = [];
    let catSymptomsDict = Object.entries(this.props.customSymptoms).filter(
      ([keyTmp, sympDict]) => sympDict.Type === 'HealthMeasurement',
    );

    data = data.concat({
      title: <Text>Health Measurements</Text>,
      content: (
        <View
          style={{
            flex: 1,
          }}>
          {Object.entries(catSymptomsDict).map(itemTmp => {
            let indexCount = itemTmp[0];
            let sympDict = itemTmp[1][1];

            const tmpName =
              sympDict.Type +
              '_' +
              sympDict.Category +
              '_' +
              sympDict.Name +
              '_' +
              sympDict.BodyPart;

            return (
              <View
                key={indexCount}
                style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                <CheckBox
                  checkedColor={theme.COLORS.DEFAULT}
                  title={sympDict.Name}
                  key={indexCount}
                  checked={this.state.trackedSymptomNames.includes(tmpName)}
                  textStyle={{
                    color: theme.COLORS.DARK_SECONDARY,
                    fontFamily: theme.FONTS.TEXT,
                    fontWeight: '100',
                  }}
                  onPress={() => {
                    const clickedValue =
                      !this.state.trackedSymptomNames.includes(tmpName);

                    if (clickedValue) {
                      this.addTrackedSymptomName(tmpName);
                      this.props.dispatch(
                        addTrackingSymptomAction(
                          sympDict.Name,
                          sympDict.IconName,
                          sympDict.Type,
                          sympDict.Category,
                          sympDict.BodyPart,
                          sympDict.Measurements,
                        ),
                      );
                    } else {
                      this.removeTrackedSymptomName(tmpName);
                      this.props.dispatch(
                        removeTrackingSymptomAction(
                          sympDict.Name,
                          sympDict.Category,
                          sympDict.BodyPart,
                          sympDict.Type,
                        ),
                      );
                    }
                  }}
                />
              </View>
            );
          })}
        </View>
      ),
    });
    return (
      <View style={{marginTop: 8, marginHorizontal: 10}}>
        <Accordion
          testID="healthMeasurementAccordian"
          data={data}
          style={styles.accordionStyle}
          expandIcon={{
            name: 'chevron-down-outline',
            type: 'ionicon',
            color: theme.COLORS.TEXT1,
          }}
          icon={{
            name: 'chevron-forward-outline',
            type: 'ionicon',
            color: theme.COLORS.TEXT1,
          }}
        />
      </View>
    );
  };

  renderMenstrual = () => {
    let data = [];
    let catSymptomsDict = Object.entries(this.props.customSymptoms).filter(
      ([keyTmp, sympDict]) => sympDict.Type === 'Menstrual',
    );

    data = data.concat({
      title: <Text>Menstrual Tracking</Text>,
      content: (
        <View
          style={{
            flex: 1,
          }}>
          {Object.entries(catSymptomsDict).map(itemTmp => {
            let indexCount = itemTmp[0];
            let sympDict = itemTmp[1][1];

            const tmpName =
              sympDict.Type +
              '_' +
              sympDict.Category +
              '_' +
              sympDict.Name +
              '_' +
              sympDict.BodyPart;
            return (
              <View
                key={indexCount}
                style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                <CheckBox
                  checkedColor={theme.COLORS.DEFAULT}
                  title={sympDict.Name}
                  key={indexCount}
                  checked={this.state.trackedSymptomNames.includes(tmpName)}
                  textStyle={{
                    color: theme.COLORS.DARK_SECONDARY,
                    fontFamily: theme.FONTS.TEXT,
                    fontWeight: '100',
                  }}
                  onPress={() => {
                    const clickedValue =
                      !this.state.trackedSymptomNames.includes(tmpName);

                    if (clickedValue) {
                      this.addTrackedSymptomName(tmpName);
                      this.props.dispatch(
                        addTrackingSymptomAction(
                          sympDict.Name,
                          sympDict.IconName,
                          sympDict.Type,
                          sympDict.Category,
                          sympDict.BodyPart,
                          sympDict.Measurements,
                        ),
                      );
                    } else {
                      this.removeTrackedSymptomName(tmpName);
                      this.props.dispatch(
                        removeTrackingSymptomAction(
                          sympDict.Name,
                          sympDict.Category,
                          sympDict.BodyPart,
                          sympDict.Type,
                        ),
                      );
                    }
                  }}
                />
              </View>
            );
          })}
        </View>
      ),
    });
    return (
      <View style={{marginTop: 8, marginHorizontal: 10}}>
        <Accordion
          testID="menstrualAccordian"
          data={data}
          style={styles.accordionStyle}
          expandIcon={{
            name: 'chevron-down-outline',
            type: 'ionicon',
            color: theme.COLORS.TEXT1,
          }}
          icon={{
            name: 'chevron-forward-outline',
            type: 'ionicon',
            color: theme.COLORS.TEXT1,
          }}
        />
      </View>
    );
  };

  render() {
    const {navigation} = this.props;

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

            <KeyboardAvoidingView
              style={{
                flex: 1,
              }}
              behavior="padding"
              enabled={iosPlatform()}>
              <ScrollView
                testID="pageScrollview"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{width}}>
                <RoundedTopContainer
                  style={{
                    paddingHorizontal: theme.SIZES.BASE,
                    paddingTop: theme.SIZES.BASE * 2,
                    minHeight: height - theme.SIZES.BASE * 8.6,
                    marginTop: theme.SIZES.BASE * 0.8,
                  }}>
                  {this.renderEssential()}
                  {this.renderMenstrual()}
                  {this.renderSymptoms()}
                  {this.renderActivities()}
                  {this.renderHealthMeasurements()}

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      marginTop: theme.SIZES.BASE,
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
                        onPress={() =>
                          navigation.navigate('TrackSymptoms')
                        }></Button>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      alignContent: 'center',
                      marginVertical: theme.SIZES.BASE,
                    }}>
                    <Button
                      testID="addNewButton"
                      style={{
                        ...styles.outlinedButton,
                        fontSize: 16,
                        fontWeight: '700',
                        textAlign: 'center',
                        color: theme.COLORS.PRIMARY,
                      }}
                      onPress={() =>
                        navigation.navigate('TrackSymptomsAddNew')
                      }>
                      Add new
                    </Button>
                  </View>
                </RoundedTopContainer>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Track" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    trackedSymptoms: state.trackSymptoms.trackingSymptoms,
    customSymptoms: state.trackCustomSymptoms.customSymptoms,
    trackingLog: state.trackLog.logHistory,
  };
};
export default connect(mapStateToProps)(TrackSymptomsAddScreen);
