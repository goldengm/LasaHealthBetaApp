import React from 'react';
import {
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {
  Button,
  Select,
  Input,
  Footer,
  RoundedTopContainer
} from '../../components';
import {auth, db} from '../../shared/firebaseUtils';

import {Images, theme, styles} from '../../constants';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

class ReportUserScreen extends React.Component {
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
    const {navigation} = this.props;

    return (
      <RoundedTopContainer
        style={{
          ...styles.group,
          flex: 1,
          minHeight: height - theme.SIZES.BASE * 8.6,
          marginTop: theme.SIZES.BASE * 0.8,
        }}>
        <View style={{paddingHorizontal: theme.SIZES.BASE}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
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
              {/* </View> */}
            </View>
            <View
              style={{
                flex: 2,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                p2
                style={{
                  marginBottom: theme.SIZES.BASE / 2,
                  textAlign: 'center',
                  color: theme.COLORS.DEFAULT,
                  fontFamily: theme.FONTS.TEXT,
                }}>
                Thank you for your report. {'\n'} We're sorry you've had a
                negative experience. {'\n'} We will treat your report very
                seriously. {'\n'} What would you like to report about this user?
              </Text>
            </View>
          </View>
        </View>

        <Text h3 style={{...styles.title, fontWeight: 'bold'}}>
          Subject
        </Text>
        <View style={{paddingHorizontal: theme.SIZES.BASE}}>
          <Input
            testID="subjectInput"
            // right
            placeholder="enter subject here"
            iconContent={<View />}
            onChangeText={this.handleSubjectChange}
          />
        </View>
        <Text h3 style={{...styles.title, fontWeight: 'bold'}}>
          Category
        </Text>
        <View
          style={{
            marginTop: 8,
            width: '80%',
            alignItem: 'center',
            marginHorizontal: theme.SIZES.BASE,
          }}>
          <Select
            testID="categorySelect"
            defaultIndex={1}
            options={[
              {title: 'Harrasment / Bullying'},
              {title: 'Inappropriate Content / Pornography'},
              {title: 'Scam / Advertising'},
              {title: 'False Identity / Catfishing'},
              {title: 'Racism / Sexism'},
              {title: 'Other'},
            ]}
            onSelect={this.handleCategoryChange}
          />
        </View>
        <Text h3 style={{...styles.title, fontWeight: 'bold'}}>
          Please explain
        </Text>
        <View
          style={{
            paddingHorizontal: theme.SIZES.BASE,
            marginTop: theme.SIZES.BASE * 1.5,
          }}>
          <Input
            testID="explainInput"
            // right
            placeholder="enter details here"
            style={{
              fontFamily: theme.FONTS.TEXT,
            }}
            multiline={true}
            iconContent={<View />}
            onChangeText={this.handleDetailsChange}
          />
        </View>
        <View
          style={{
            marginVertical: theme.SIZES.BASE,

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
            title="Submit"
            titleStyle={{
              color: theme.COLORS.WHITE,
              fontFamily: theme.FONTS.TEXT,
            }}
            onPress={() => {
              const {subject, category, details} = this.state;
              const uid = auth.currentUser['uid'];
              const reportedUID = this.props.connect.reportedUID;
              Promise.resolve()
                .then(() => {
                  db.collection('CommunityModeration')
                    .doc('Reports')
                    .collection('UserReports')
                    .add({
                      uid,
                      reportedUID,
                      subject,
                      category,
                      details,
                    });
                })
                .then(() => {
                  return navigation.navigate('Connect');
                })
                .catch(error => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  alert(errorMessage);
                  return errorMessage;
                });
            }}></Button>
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
        customImageName={Images.ui.BackgroundGradient3}>
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
                contentContainerStyle={{width}}
              >
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

// export default ReportUserScreen;

const mapStateToProps = (state, props) => {
  return {
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(ReportUserScreen);
