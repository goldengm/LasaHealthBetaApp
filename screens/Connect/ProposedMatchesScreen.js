import React from 'react';
import {ScrollView, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';
import {StatusBar} from 'expo-status-bar';
import {Button, Footer, TouchableOpacity} from '../../components';
import {theme, styles} from '../../constants';
import {userAvatarDir} from '../../constants/userAvatarDir';
import {
  setCurrentAmieProfileAction,
  setCurrentAmieUIDAction,
} from '../../redux/actions/connectActions';
import {KeyboardAvoidingView} from 'react-native';

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

class ProposedMatchesScreen extends React.Component {
  getAmiesProfileScreen = amieUID => {
    const {navigation} = this.props;
    Promise.resolve()
      .then(() => this.props.dispatch(setCurrentAmieUIDAction('-1')))

      // .then(() => console.log("Connect 1: ", this.props.connect))
      .then(() =>
        this.props.dispatch(
          setCurrentAmieProfileAction(cloneDeep(this.props.userPublicProfile)),
        ),
      )
      // .then(() => console.log("Connect 2: ", this.props.connect))
      .then(() => navigation.navigate('AmieProfile'))
      .catch(function (err) {
        console.warn(err);
      });
  };

  renderProfile = () => {
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

          <View>
            {this.props.connect.proposedAmies.map((amieUID, i) => (
              <ListItem key={i} bottomDivider>
                <View style={{height: 120, width: 120}}>
                  <TouchableOpacity
                    onPress={() => {
                      // Promise.resolve()
                      //   .then(() => this.getAmiesProfileScreen(-1))
                      //   .catch(error => {
                      //     console.log(error);
                      //     // An error happened.
                      //   });
                    }}>
                    {userAvatarDir('Svg018Woman')}
                  </TouchableOpacity>
                </View>

                

                <ListItem.Content>
                  <TouchableOpacity
                    onPress={() => {
                      // Promise.resolve()
                      //   .then(() => createChatroom(amieUID))
                      //   .then(() =>
                      //     this.props.dispatch(
                      //       removeProposedAmieAction(amieUID),
                      //     ),
                      //   )
                      //   .then(() => {
                      //     return navigation.navigate('Connect');
                      //   })
                      //   .catch(error => {
                      //     const errorCode = error.code;
                      //     const errorMessage = error.message;
                      //     alert(errorMessage);
                      //     return errorMessage;
                      //   });
                    }}>
                    <ListItem.Title>
                      Connect with matched User {amieUID}
                    </ListItem.Title>
                  </TouchableOpacity>
                </ListItem.Content>
              </ListItem>
            ))}
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
                navigation.navigate('Connect');
              }}
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.HEADER,
              }}
              title="Not right now"
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
            {this.renderProfile()}
          </KeyboardAvoidingView>
        </View>
        <Footer navigation={navigation} tabName="Connect" />
      </View>
    );
  }
}

// export default ProposedMatchesScreen;

const mapStateToProps = (state, props) => {
  return {
    userPublicProfile: state.userPublicProfile,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(ProposedMatchesScreen);
