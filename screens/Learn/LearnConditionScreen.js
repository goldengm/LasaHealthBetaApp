import React from 'react';
import {ScrollView, Dimensions, Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import RenderHtml from 'react-native-render-html';

import {styles, theme} from '../../constants';
import {Accordion, Footer, RoundedTopContainer} from '../../components';
import {StatusBar} from 'expo-status-bar';
import {getWikiPage} from '../../constants/learn/condWikiIndex';
import {KeyboardAvoidingView} from 'react-native';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

//  FIXMETUNA:  this might cause problems ignoring this warning, scrolling or windowing
//  errors possible, watch out
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
]);

class LearnConditionScreen extends React.Component {
  state = {
    'switch-1': true,
    'switch-2': false,
  };

  render() {
    const {navigation, route} = this.props;
    const {conditionName} = route.params;

    const [condName, condImURL, condDescription, condHeader, condQA] =
      getWikiPage(conditionName, this.props);

    return (
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
              <View
                style={{
                  flex: 1,
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{position: 'absolute', top: 0, left: 0}}>
                  <Image
                    source={{
                      uri: condImURL,
                    }}
                    style={styles.headerImage}
                  />
                </View>
                <View style={{height: 200}}></View>
              </View>
              <RoundedTopContainer
                style={{
                  flex: 1,
                  minHeight: height - theme.SIZES.BASE * 15.6,
                  marginTop: theme.SIZES.BASE * 0.8,
                }}>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: theme.SIZES.BASE * 0.5,
                  }}>
                  <Text
                    style={{
                      color: theme.COLORS.ERROR1,
                      fontSize: theme.SIZES.B1,
                      marginTop: theme.SIZES.BASE * 2,
                      marginBottom: 0,
                      marginHorizontal: theme.SIZES.BASE,
                    }}>
                    What is
                  </Text>

                  <Text
                    style={{
                      ...styles.boldTitle,
                      color: theme.COLORS.TEXT1,
                      fontSize: theme.SIZES.H5,
                      marginBottom: 0,
                      marginTop: theme.SIZES.BASE * 0.2,
                      marginHorizontal: theme.SIZES.BASE,
                    }}>
                    {condName}
                  </Text>
                  <View
                    style={{
                      marginTop: 8,
                      marginHorizontal: theme.SIZES.BASE,
                      flex: 1,
                    }}>
                    <RenderHtml
                      contentWidth={width}
                      ignoredDomTags={['button']}
                      source={{
                        html: condHeader,
                      }}
                    />
                  </View>
                  <View style={{flex: 1, marginHorizontal: theme.SIZES.BASE}}>
                    <Accordion
                      data={condQA}
                      style={styles.learnAccordionStyle}
                      expandIcon={{
                        name: 'chevron-down-outline',
                        type: 'ionicon',
                        color: theme.COLORS.WHITE,
                      }}
                      icon={{
                        name: 'add-outline',
                        type: 'ionicon',
                        color: theme.COLORS.WHITE,
                      }}
                      customTitleFilter={content => {
                        return (
                          <Text
                            style={{
                              color: theme.COLORS.WHITE,
                              fontWeight: '300',
                              fontFamily: theme.FONTS.TEXT,
                            }}>
                            {content}
                          </Text>
                        );
                      }}
                      customContentFilter={content => {
                        return (
                          <RenderHtml
                            contentWidth={width}
                            ignoredDomTags={['button']}
                            source={{
                              html: content,
                            }}
                          />
                        );
                      }}
                    />
                  </View>
                </View>
              </RoundedTopContainer>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        <Footer navigation={navigation} tabName="Learn" />
      </View>
    );
  }
}

export default LearnConditionScreen;
