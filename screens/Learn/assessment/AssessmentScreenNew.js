import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text, LinearProgress} from 'react-native-elements';
import {styles, theme, Images} from '../../../constants';
import {Button} from '../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../shared/ScreenTemplateWrapper';
import {getOS} from '../../../shared/PlatformUtils';
import {dummyJSON} from '../../../constants/learn/AssessmentData';
import {
  SetAssessmentResults,
  ResetAssessmentResults,
} from '../../../redux/actions/assessmentActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const iosPlatform = () => getOS() == 'ios';
const {width} = Dimensions.get('screen');

class AssessmentScreenNew extends React.Component {
  state = {
    currentPageNum: 1,
    selectedIndex: [],
    validate: true,
  };

  async componentDidMount() {
    // await AsyncStorage.setItem('SAVED_RISK_ASSESSMENTS', '');
    this.props.dispatch(ResetAssessmentResults());
  }

  setSelectedIndex = (selectedIndexP, isMultiSelect) => {
    let temp = [...this.state.selectedIndex];
    if (this.state.selectedIndex.includes(selectedIndexP)) {
      if (isMultiSelect) {
        temp = this.state.selectedIndex.filter(item => item != selectedIndexP);
      }
    } else {
      if (!isMultiSelect) {
        temp = [];
      }
      temp.push(selectedIndexP);
    }
    this.setState({selectedIndex: temp});
  };

  setPageNum = async num => {
    // let savedIndex = await AsyncStorage.getItem('SAVED_RISK_ASSESSMENTS');
    // if (savedIndex != null && savedIndex != '') {
    //   savedIndex = JSON.parse(savedIndex);
    // } else {
    //   savedIndex = [];
    // }
    // savedIndex.push(this.state.selectedIndex);
    // await AsyncStorage.setItem(
    //   'SAVED_RISK_ASSESSMENTS',
    //   JSON.stringify(savedIndex),
    // );
    // this.setState({currentPageNum: num, selectedIndex: [], validate: true});
  };

  handleNextPage = async () => {
    if (this.state.selectedIndex.length > 0) {
      if (this.state.currentPageNum == 10) {
        let selectedIndexData = await AsyncStorage.getItem(
          'SAVED_RISK_ASSESSMENTS',
        );
        selectedIndexData = JSON.parse(selectedIndexData);
        selectedIndexData = [...selectedIndexData, this.state.selectedIndex];
        await AsyncStorage.setItem(
          'SAVED_RISK_ASSESSMENTS',
          JSON.stringify(selectedIndexData),
        );
        this.props.dispatch(SetAssessmentResults(selectedIndexData));
        this.setState({currentPageNum: 1, selectedIndex: [], validate: true});
        this.props.navigation.navigate('AssessmentResult');
      } else {
        this.setPageNum(++this.state.currentPageNum);
      }
    } else {
      this.setState({validate: false});
    }
  };

  render() {
    const {navigation, route} = this.props;
    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={0}
        customImageName={Images.ui.BackgroundGradient4}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              marginHorizontal: theme.SIZES.BASE,
              elevation: 2,
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
                  style={{}}>
                  <View
                    style={{
                      backgroundColor: theme.COLORS.WHITE,
                      borderRadius: theme.SIZES.HEADERRADIUS,
                      elevation: 2,
                      marginBottom: theme.SIZES.BASE,
                      width: width - theme.SIZES.BASE * 2,
                      marginTop: theme.SIZES.BASE * 0.8,
                    }}>
                    <LinearProgress
                      style={{
                        marginTop: theme.SIZES.BASE + 10,
                        height: 8,
                        width: width * 0.8,
                        borderRadius: 16,
                        alignSelf: 'center',
                      }}
                      color={theme.COLORS.SUCCESS}
                      trackColor={theme.COLORS.MUTED}
                      value={this.state.currentPageNum / dummyJSON.length}
                      variant="determinate"
                    />
                    <View
                      style={{
                        paddingHorizontal: theme.SIZES.BASE * 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: theme.SIZES.BASE * 2,
                      }}>
                      <Text
                        style={{
                          // ...styles.boldTitle,
                          color: theme.COLORS.TEXT1,
                          fontSize: theme.SIZES.H5,
                          fontWeight: '600',
                          // textShadowColor: theme.COLORS.DARK_BLACK,
                          // textShadowRadius: 20,
                          textAlign: 'center',
                        }}>
                        {dummyJSON[this.state.currentPageNum - 1]['question']}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 0.5,
                      }}>
                      {dummyJSON[this.state.currentPageNum - 1]['answers'].map(
                        (item, index) =>
                          dummyJSON[this.state.currentPageNum - 1][
                            'isMultiSelect'
                          ] ? (
                            <View
                              key={index}
                              style={{
                                alignContent: 'center',
                                alignItems: 'center',
                                marginVertical: theme.SIZES.BASE,
                                marginBottom: 0,
                              }}>
                              <Button
                                testID="option1Button"
                                style={{
                                  ...styles.mutedButton,

                                  width: width - theme.SIZES.BASE * 4,
                                  height: theme.SIZES.BASE * 4,
                                  backgroundColor:
                                    this.state.selectedIndex.includes(index) ==
                                    true
                                      ? theme.COLORS.TEXT3
                                      : theme.COLORS.BACKGROUND2,
                                }}
                                containerStyle={styles.mutedButton.borderRadius}
                                onPress={() => {
                                  this.setSelectedIndex(index, true);
                                }}
                                title={item}></Button>
                            </View>
                          ) : (
                            <View
                              key={index}
                              style={{
                                alignContent: 'center',
                                alignItems: 'center',
                                marginVertical: theme.SIZES.BASE,
                                marginBottom: 0,
                              }}>
                              <Button
                                testID="option1Button"
                                style={{
                                  ...styles.mutedButton,

                                  width: width - theme.SIZES.BASE * 4,
                                  height: theme.SIZES.BASE * 4,
                                  backgroundColor:
                                    this.state.selectedIndex.includes(index) ==
                                    true
                                      ? theme.COLORS.TEXT3
                                      : theme.COLORS.BACKGROUND2,
                                }}
                                containerStyle={styles.mutedButton.borderRadius}
                                onPress={() => {
                                  this.setSelectedIndex(index, false);
                                }}
                                title={item}></Button>
                            </View>
                          ),
                      )}
                    </View>
                    <View
                      style={{
                        paddingHorizontal: theme.SIZES.BASE * 2,
                        alignItems: 'center',
                        paddingVertical: theme.SIZES.BASE * 2,
                      }}>
                      <Button
                        testID="nextButton"
                        style={{
                          ...styles.button,
                          width: width - theme.SIZES.BASE * 4,
                        }}
                        titleStyle={{
                          color: theme.COLORS.WHITE,
                          fontFamily: theme.FONTS.TEXT,
                        }}
                        title="Next"
                        onPress={() => {
                          this.handleNextPage();
                        }}></Button>
                      {!this.state.validate ? (
                        <Text style={{color: theme.COLORS.ERROR, marginTop: 5}}>
                          {' '}
                          Please select at least one option{' '}
                        </Text>
                      ) : (
                        ''
                      )}
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    // assessment: state.assessment.selectLog,
  };
};

export default connect(mapStateToProps)(AssessmentScreenNew);
