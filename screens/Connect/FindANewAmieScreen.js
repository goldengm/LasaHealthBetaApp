import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {StatusBar} from 'expo-status-bar';

import {Button, Footer, Input, Chip} from '../../components';
import {auth} from '../../shared/firebaseUtils';
import {theme, styles} from '../../constants';
import {KeyboardAvoidingView} from 'react-native';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

class FindANewAmieScreen extends React.Component {
  renderFriendForm = () => {
    const {navigation} = this.props;

    return (
      <ScrollView
        testID="pageScrollview"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              marginBottom: theme.SIZES.BASE * 2,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.COLORS.HEAL_SECONDARY,
            }}>
            <Text style={styles.title}>Find your new Amie</Text>
          </View>

          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text>I want to connect with someone... </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Chip title="Non Binary" />
            <Chip title="Black" />
          </View>

          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text>who has this health profile... </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Chip title="Endometriosis" />
            <Chip title="Infertility" />
          </View>

          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>and is willing to chat about... </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Chip title="Support" />
            <Chip title="General Advice" />
          </View>

          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Send a note to your future Amie!</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Input
              multiline={true}
              placeholder="Explain a bit more about your question and what you are looking for!"></Input>
          </View>

          <View
            style={{
              marginBottom: theme.SIZES.BASE,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              style={styles.button}
              onPress={() => {
                Promise.resolve()
                  .then(() => {
                    if (!(auth.currentUser == null)) {
                      return navigation.navigate('ProposedMatches');
                    } else {
                      return null;
                    }
                  })
                  .catch(error => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                    return errorMessage;
                  });
              }}
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.HEADER,
              }}
              title="Find an Amie"
            />
          </View>
        </View>
      </ScrollView>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{...styles.home, flex: 1, alignContent: 'center'}}>
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
            {this.renderFriendForm()}
          </KeyboardAvoidingView>
        </View>
        <Footer navigation={navigation} tabName="Connect" />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPublicProfile: state.userPublicProfile,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(FindANewAmieScreen);
