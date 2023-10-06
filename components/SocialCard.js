import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {setCurrentCRIDAction} from '../redux/actions/connectActions';
import {auth} from '../shared/firebaseUtils';
import Button from './Button';
import TouchableOpacity from './TouchableOpacity';

import {theme, styles} from '../constants';
import {userAvatarDir} from '../constants/userAvatarDir';

const {width} = Dimensions.get('screen');
class SocialCard extends React.Component {
  render() {
    const {
      style,
      testID,
      chatGroup,
      dispatch,
      navigation,
      navigateToAmiesProfileScreen,
      setSelectedCRID,
      setMenuVisible,
      amiePublicProfiles,
      ...props
    } = this.props;

    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width - theme.SIZES.BASE * 2,
        }}
        onPress={() => {
          Promise.resolve()
            .then(() => {
              if (!(auth.currentUser == null)) {
                console.log('setting new crid to: ', chatGroup.crid);
                dispatch(setCurrentCRIDAction(chatGroup.crid));
              } else {
                return null;
              }
            })
            .then(() => {
              navigation.navigate('Chat');
            })
            .catch(error => {
              console.log(error);
            });
        }}>
        <View
          style={{
            backgroundColor: theme.COLORS.SECONDARY3,
            borderRadius: theme.SIZES.BASE * 2,
            padding: theme.SIZES.BASE * 1.3,
            width: width - theme.SIZES.BASE * 2,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: theme.SIZES.H5,
              color: theme.COLORS.TEXT1,
            }}>
            Endometriosis 101 Group
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: theme.SIZES.BASE * 0.7,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginRight: theme.SIZES.BASE * 0.5,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    Promise.resolve()
                      .then(() => navigation.navigate('Chat'))
                      .catch(error => {
                        console.log(error);
                      });
                  }}>
                  {userAvatarDir('Svg018Woman')}
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'space-evenly'}}>
                <Text
                  style={{
                    fontSize: theme.SIZES.B1,
                    fontWeight: 'bold',
                    color: theme.COLORS.TEXT1,
                  }}>
                  {chatGroup.name}
                </Text>
                <Text
                  style={{
                    fontSize: theme.SIZES.C2,
                    color: theme.COLORS.ERROR1,
                  }}>
                  USER DIRECTED
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: theme.SIZES.B1,
              color: theme.COLORS.TEXT2,
              marginBottom: theme.SIZES.BASE,
            }}>
            Support chat for everyone enrolled in the endo101 course.
          </Text>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Button
              style={{
                ...styles.outlinedButton,
                backgroundColor: theme.COLORS.TRANSPARENT,
                height: 38,
                padding: 0,
                borderColor: theme.COLORS.PRIMARY2,
                color: theme.COLORS.PRIMARY2,
                marginTop: 6,
              }}
              onPress={() => {
                Promise.resolve()
                  .then(() => setSelectedCRID(chatGroup.crid))
                  .then(() => setMenuVisible(true))
                  .catch(error => {
                    console.log(error);
                  });
              }}>
              15 Members
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SocialCard;
