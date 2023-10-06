import React from 'react';
import {
  ScrollView,
  Dimensions,
  Linking,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';

import {Footer, RoundedTopContainer} from '../components';
import {Images, theme} from '../constants';
import ScreenTemplateWrapper from '../shared/ScreenTemplateWrapper';
import {getOS} from '../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

class CustomerSupportScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      category: '',
      details: '',
    };
  }

  handleSubjectChange = subject => {
    this.setState({subject});
  };

  handleCategoryChange = (index, category) => {
    this.setState({category});
  };

  handleDetailsChange = details => {
    this.setState({details});
  };

  renderSocial = () => {
    return (
      <RoundedTopContainer
        style={{
          minHeight: height - theme.SIZES.BASE * 8.6,
          marginTop: theme.SIZES.BASE * 0.8,
        }}>
        <View style={{marginHorizontal: theme.SIZES.BASE}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 2,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: theme.SIZES.H5,
                  marginTop: theme.SIZES.BASE * 4.5,
                  marginBottom: theme.SIZES.BASE,
                }}>
                We would love to hear from you!
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
              fontSize: theme.SIZES.H5,
              marginTop: theme.SIZES.BASE,
              marginBottom: theme.SIZES.BASE,
              textAlign: 'center',
            }}>
            Have questions, concerns, general feedback, or just want to chat?
          </Text>

          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
              fontSize: theme.SIZES.H5,
              marginTop: theme.SIZES.BASE,
              marginBottom: theme.SIZES.BASE,
              textAlign: 'center',
            }}>
            Contact us at:
          </Text>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
            }}
            onPress={() =>
              Linking.openURL(
                'mailto:support@lasahealth.com?subject=Customer%20Support&body=Dear%20Lasa%20Health%20support%20team,',
              )
            }>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginTop: theme.SIZES.BASE,
                marginBottom: theme.SIZES.BASE,
                color: theme.COLORS.PRIMARY2,
                textAlign: 'center',
              }}>
              support@lasahealth.com
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
              fontSize: theme.SIZES.H5,
              marginTop: theme.SIZES.BASE,
              marginBottom: theme.SIZES.BASE,
              textAlign: 'center',
            }}>
            We'll get back to you directly as soon as we can!
          </Text>
        </View>
      </RoundedTopContainer>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customImageName={Images.ui.BackgroundGradient1}>
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
                  {this.renderSocial()}
                </KeyboardAvoidingView>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="CustomerSS" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

export default CustomerSupportScreen;
