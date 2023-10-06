import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';

import {theme, styles, Images} from '../../constants';
import {Bubble, Footer, RoundedTopContainer} from '../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import symptomsDir from '../../constants/track/symptomsDir';
import XDate from 'xdate';
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

class TrackLogHistoryScreen extends React.Component {
  //  I need a seperate componant state because the rne checkboxes rely on componant
  //  state to function. It's a necessary copy of the redux state

  renderLogHistory = () => {
    return (
      <View style={{marginTop: 8, marginHorizontal: 10}}>
        {Object.entries(this.props.trackingLog)
          .sort(([a], [b]) => b - a)
          .map(([itemNum, logEntryDict]) => {
            const dateObj = new XDate(parseInt(itemNum) * 60000);
            const dateStr = dateObj.toString('MMMM dd, yyyy');

            return (
              <View
                key={itemNum}
                style={{marginBottom: theme.SIZES.BASE * 0.5}}>
                <Text style={styles.boldTitle}>{dateStr}</Text>
                <ScrollView horizontal testID="logHistoryScrollView">
                  {Object.entries(logEntryDict['symptoms']).map(
                    ([sympNum, sympDict]) => {
                      return (
                        <View
                          key={sympNum}
                          style={{
                            marginHorizontal: theme.SIZES.BASE * 0.1,
                            flex: 1,
                          }}>
                          <Bubble
                            style={{
                              ...styles.petal3Bubble,

                              borderColor:
                                styles.petal3Bubble['backgroundColor'],
                              borderWidth: 2,
                              width: styles.petal3Bubble.width,
                              height: styles.petal3Bubble.height,
                              marginHorizontal: 2,
                            }}
                            disabled={true}
                            iconName={sympDict['IconName']}
                            bubbleName={sympDict['Name']}
                            key={sympNum}
                            customOnPress={() => {}}
                            viewBackgroundColor={
                              theme.COLORS.ELEMENT_BACKGROUND
                            }
                          />
                        </View>
                      );
                    },
                  )}
                </ScrollView>
                {!(logEntryDict['logEntryNotes'] == null) &&
                  typeof logEntryDict['logEntryNotes'] == 'string' &&
                  !(logEntryDict['logEntryNotes'] == '') && (
                    <View>
                      <Text
                        style={{
                          ...styles.subTitle,
                          marginBottom: 0,
                          paddingBottom: 2,
                        }}>
                        Notes:
                      </Text>
                      <Text style={{marginTop: 0}}>
                        {logEntryDict['logEntryNotes']}
                      </Text>
                    </View>
                  )}
              </View>
            );
          })}
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
                    minHeight: height - theme.SIZES.BASE * 8.6,
                    marginTop: theme.SIZES.BASE * 0.8,
                  }}>
                  {this.renderLogHistory()}
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

const mapStateToProps = state => {
  return {
    trackingLog: state.trackLog.logHistory,
  };
};
export default connect(mapStateToProps)(TrackLogHistoryScreen);
