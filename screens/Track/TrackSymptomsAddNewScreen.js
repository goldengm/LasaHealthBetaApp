import React from 'react';
import {
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {theme, styles, Images} from '../../constants';
import {
  Button,
  CheckBox,
  Select,
  Input,
  PagedList,
  Footer,
  RoundedTopContainer,
} from '../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  addCustomSymptomAction,
} from '../../redux/actions/trackActions';
import symptomsDir from '../../constants/track/symptomsDir';
import bodyPartCategories from '../../constants/track/bodyPartCategories';
import amieIconNames from '../../constants/track/iconNames';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');
const iconOptionsList = amieIconNames;

const symptomTypes = [
  {title: 'Symptom'},
  {title: 'Activity'},
  {title: 'HealthMeasurement'},
];

let symptomCategories = [];
let lastCat = '';
Object.entries(symptomsDir)
  .sort(([a], [b]) => a - b)
  .forEach(([indexTmp, sympDict]) => {
    if (!symptomCategories.includes(sympDict.Category)) {
      if (sympDict.Category !== lastCat) {
        lastCat = sympDict.Category;
        symptomCategories = symptomCategories.concat({
          title: sympDict.Category,
        });
      }
    }
  });

const measurementTypes = [
  'Yes/No', //  binary
  'Severity', //  1.0-10.0
  'Location', //  body part categories above
  'Number', //  float
  'Options', //  [list of string categories]
];

const stateDefault = {
  name: '',
  icon: '',
  type: '',
  category: '',
  bodyPart: '',
  measurement: {
    Binary: false,
    Severity: false,
    Location: false,
    Number: false,
    Options: [],
  },
};

class TrackSymptomsAddNewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: stateDefault.name,
      icon: stateDefault.icon,
      type: stateDefault.type,
      category: stateDefault.category,
      bodyPart: stateDefault.bodyPart,
      measurement: {
        Binary: stateDefault.measurement.Binary,
        Severity: stateDefault.measurement.Severity,
        Location: stateDefault.measurement.Location,
        Number: stateDefault.measurement.Number,
        Options: stateDefault.measurement.Options,
      },
    };
    this.baseState = this.state;
  }

  resetStateToDefault = () => {
    this.setState(this.baseState);
  };

  componentDidMount() {
    this.resetStateToDefault();
  }

  handleNameChange = name => {
    this.setState({name});
  };

  handleIconChange = icon => {
    this.setState({icon});
  };

  handleCategoryChange = (index, category) => {
    this.setState({category});
  };

  handleBodyPartChange = (index, bodyPart) => {
    this.setState({bodyPart});
  };

  handleTypeChange = (index, type) => {
    this.setState({type});
  };

  //  FIXMETUNA:  need to make this more flexible
  handleOptionsChange = optionsText => {
    let measurement = this.state.measurement;
    let newOptions = [];
    optionsText.split(',').forEach(item => {
      newOptions = newOptions.concat({title: item});
    });
    measurement.Options = newOptions;
    this.setState({measurement});
  };
  handleBinaryChange = binary => {
    let measurement = this.state.measurement;
    measurement.Binary = binary;
    this.setState({measurement});
  };
  handleSeverityChange = severity => {
    let measurement = this.state.measurement;
    measurement.Severity = severity;
    this.setState({measurement});
  };
  handleLocationChange = location => {
    let measurement = this.state.measurement;
    measurement.Location = location;
    this.setState({measurement});
  };
  handleNumberChange = number => {
    let measurement = this.state.measurement;
    measurement.Number = number;
    this.setState({measurement});
  };
  handleMeasurementChange = measurement => {
    this.setState({measurement});
  };

  isNewSymptomFormComplete = () => {
    if (this.state.type == '') {
      alert('Please choose type');
      return false;
    } else if (this.state.name == '') {
      alert('Please enter a name');
      return false;
    } else if (this.state.category == '') {
      alert('Please select a category');
      return false;
    } else if (this.state.icon == '') {
      alert('Please choose an icon');
      return false;
    } else if (
      this.state.measurement.Binary == stateDefault.measurement.Binary &&
      this.state.measurement.Severity == stateDefault.measurement.Severity &&
      this.state.measurement.Location == stateDefault.measurement.Location &&
      this.state.measurement.Number == stateDefault.measurement.Number &&
      this.state.measurement.Options == stateDefault.measurement.Options
    ) {
      alert('Please choose a measurement option');
      return false;
    } else {
      return true;
    }
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

                <KeyboardAvoidingView
                  style={{
                    flex: 1,
                  }}
                  enabled>
                  <RoundedTopContainer
                    style={{
                      paddingHorizontal: theme.SIZES.BASE,
                      minHeight: height - theme.SIZES.BASE * 8.6,
                      marginTop: theme.SIZES.BASE * 2.8,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                        paddingLeft: theme.SIZES.BASE,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'flex-start',
                        }}>
                        <Image
                          source={Images.amieBranding.LogoText}
                          style={styles.headerIconSmall}
                        />
                      </View>
                      <View
                        style={{
                          flex: 2,
                          alignContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.title}>
                          What new symptom would you like to track?
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginHorizontal: theme.SIZES.BASE * 0.5,
                        marginBottom: theme.SIZES.BASE,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            flex: 1,
                          }}>
                          <Text style={styles.boldTitle}>Type</Text>
                          <View
                            style={{
                              marginTop: 0,
                              width: '100%',
                              alignContent: 'center',
                              paddingHorizontal: theme.SIZES.BASE * 0.5,
                            }}>
                            <Select
                              testID="typeSelect"
                              defaultIndex={1}
                              options={symptomTypes}
                              customPrompt="Choose a type"
                              onSelect={this.handleTypeChange}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            flex: 1,
                          }}>
                          <Text style={styles.boldTitle}>Category</Text>
                          <View
                            style={{
                              marginTop: 0,
                              width: '100%',
                              alignContent: 'center',
                              paddingHorizontal: theme.SIZES.BASE * 0.5,
                            }}>
                            <Select
                              testID="categorySelect"
                              defaultIndex={1}
                              options={symptomCategories}
                              customPrompt="Choose a category"
                              onSelect={this.handleCategoryChange}
                            />
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            flex: 1,
                            marginHorizontal: theme.SIZES.BASE,
                            marginTop: theme.SIZES.BASE * 0.5,
                          }}>
                          <Text style={styles.boldTitle}>
                            Body Location (optional)
                          </Text>
                          <View
                            style={{
                              marginTop: 0,
                              width: '100%',
                              alignContent: 'center',
                              paddingHorizontal: theme.SIZES.BASE * 0.5,
                            }}>
                            <Select
                              testID="bodyPartSelect"
                              defaultIndex={1}
                              customPrompt="Choose a body part"
                              options={bodyPartCategories}
                              onSelect={this.handleBodyPartChange}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <Text style={styles.boldTitle}>Symptom</Text>

                    <View style={{width: 200, marginBottom: theme.SIZES.BASE}}>
                      <Input
                        testID="symptomNameChangeInput"
                        iconContent={null}
                        placeholder="enter new symptom here"
                        onChangeText={this.handleNameChange}
                        style={{
                          width: width - theme.SIZES.BASE * 2,
                          fontFamily: theme.FONTS.TEXT,
                        }}
                      />
                    </View>

                    <Text
                      style={{
                        ...styles.boldTitle,
                        marginTop: theme.SIZES.BASE * 0.5,
                        marginBottom: 0,
                        paddingTop: 0,
                      }}>
                      Choose Icon
                    </Text>
                    <PagedList
                      customOnPress={this.handleIconChange}
                      passedOptionsList={iconOptionsList}
                      customDebounceLength={100}
                    />
                    <Text style={styles.boldTitle}>Measurement Types</Text>

                    <View
                      style={{
                        paddingHorizontal: theme.SIZES.BASE * 1,
                        flex: 1,
                        alignItems: 'flex-start',
                      }}>
                      <CheckBox
                        testID="binaryCheckbox"
                        checkedColor={theme.COLORS.DEFAULT}
                        title="Yes/No"
                        checked={this.state.measurement.Binary}
                        onPress={() => {
                          this.handleBinaryChange(
                            !this.state.measurement.Binary,
                          );
                        }}
                      />
                      <CheckBox
                        testID="severityCheckbox"
                        checkedColor={theme.COLORS.DEFAULT}
                        title="Severity"
                        checked={this.state.measurement.Severity}
                        onPress={() => {
                          this.handleSeverityChange(
                            !this.state.measurement.Severity,
                          );
                        }}
                      />
                      <CheckBox
                        testID="locationCheckbox"
                        checkedColor={theme.COLORS.DEFAULT}
                        title="Location"
                        checked={this.state.measurement.Location}
                        onPress={() => {
                          this.handleLocationChange(
                            !this.state.measurement.Location,
                          );
                        }}
                      />
                      <CheckBox
                        testID="numberCheckbox"
                        checkedColor={theme.COLORS.DEFAULT}
                        title="Number"
                        checked={this.state.measurement.Number}
                        onPress={() => {
                          this.handleNumberChange(
                            !this.state.measurement.Number,
                          );
                        }}
                      />
                      <Text
                        style={{
                          ...styles.subTitle,
                          marginBottom: 0,
                          paddingBottom: 0,
                        }}>
                        Select From Options
                      </Text>

                      <View
                        style={{
                          marginBottom: theme.SIZES.BASE,
                          alignItems: 'center',
                        }}>
                        <Input
                          testID="optionsInput"
                          iconContent={null}
                          placeholder="enter options here, seperated by commas"
                          onChangeText={this.handleOptionsChange}
                          style={{
                            width: width - theme.SIZES.BASE * 3,
                            fontFamily: theme.FONTS.TEXT,
                          }}
                        />
                      </View>
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
                            const {navigation} = this.props;
                            if (this.isNewSymptomFormComplete()) {
                              this.props.dispatch(
                                addCustomSymptomAction(
                                  this.state.name,
                                  this.state.icon,
                                  this.state.type,
                                  this.state.category,
                                  this.state.bodyPart,
                                  this.state.measurement,
                                ),
                              );
                              this.resetStateToDefault();
                              navigation.navigate('TrackSymptomsAdd');
                            }
                          }}></Button>
                      </View>
                    </View>
                  </RoundedTopContainer>
                </KeyboardAvoidingView>
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
    customSymptoms: state.trackCustomSymptoms.customSymptoms,
  };
};
export default connect(mapStateToProps)(TrackSymptomsAddNewScreen);
