import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import Icon from './Icon';
import Chip from './Chip';
import TouchableOpacity from './TouchableOpacity';

import {theme} from '../constants';
import {userAvatarDir} from '../constants/userAvatarDir';

const {width} = Dimensions.get('screen');
class SocialCard extends React.Component {
  componentDidMount() {
    
  }
  render() {
    const {
      style,
      testID,
      userProfile = null,
      text = 'Placeholder text',
      time = '',
      numReplies = 0,
      numUpvotes = 0,
      isReply = false,
      ...props
    } = this.props;

    return (
      <TouchableOpacity
        testID='testID'
        disabled
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width - theme.SIZES.BASE * 2,
          marginVertical: theme.SIZES.BASE * 0.25,
        }}
        onPress={() => {}}>
        <View style={{flexDirection: 'row'}}>
          {isReply && (
            <View
              style={{
                width: 1,
                backgroundColor: theme.COLORS.TEXT3,
                marginRight: theme.SIZES.BASE,
                marginLeft: theme.SIZES.BASE * 2,
              }}
            />
          )}
          <View
            style={{
              paddingVertical: theme.SIZES.BASE * 0.5,
              width: width - theme.SIZES.BASE * 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    marginRight: theme.SIZES.BASE * 0.5,
                  }}>
                  <View>
                    {userAvatarDir(
                      userProfile ? userProfile['avatar'] : 'Svg018Woman',
                    )}
                  </View>
                </View>
                <View style={{justifyContent: 'space-evenly'}}>
                  <Text
                    style={{
                      fontSize: theme.SIZES.B1,
                      fontWeight: 'bold',
                      color: theme.COLORS.TEXT1,
                    }}>
                    {userProfile ? userProfile['name'] : 'Anonymous'}
                  </Text>
                </View>
                <View style={{justifyContent: 'space-evenly'}}>
                  <Text
                    style={{
                      fontSize: theme.SIZES.C2,
                      color: theme.COLORS.BLACK,
                      marginLeft: theme.SIZES.BASE,
                    }}>
                    {time}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity disabled={isReply} style={{}} onPress={() => {}}>
              <Text
                style={{
                  fontSize: theme.SIZES.B1,
                  color: theme.COLORS.TEXT2,
                  marginBottom: theme.SIZES.BASE,
                }}>
                {text}
              </Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {}}>
                <Icon
                  family="font-awesome"
                  name="arrow-up"
                  fill={theme.COLORS.DEFAULT}
                  style={{marginHorizontal: theme.SIZES.BASE * 0.5}}
                />

                <Text
                  style={{
                    fontSize: theme.SIZES.B1,
                    color: theme.COLORS.TEXT2,
                    marginBottom: theme.SIZES.BASE,
                    marginRight: theme.SIZES.BASE,
                  }}>
                  {numUpvotes}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {}}>
                <Icon
                  family="font-awesome"
                  name="comment"
                  fill={theme.COLORS.DEFAULT}
                  style={{marginHorizontal: theme.SIZES.BASE * 0.5}}
                />

                <Text
                  style={{
                    fontSize: theme.SIZES.B1,
                    color: theme.COLORS.TEXT2,
                    marginBottom: theme.SIZES.BASE,
                  }}>
                  Reply
                </Text>
              </TouchableOpacity>
            </View>

            {!isReply && numReplies && numReplies > 0 && (
              <View style={{flexDirection: 'row'}}>
                <Chip
                  title={numReplies.toString() + ' more replies'}
                  containerStyle={{
                    marginVertical: theme.SIZES.BASE * 0.5,
                    marginHorizontal: 4,
                  }}
                  buttonStyle={{
                    backgroundColor: theme.COLORS.BACKGROUND4,
                    borderRadius: theme.SIZES.BASE * 0.5,
                    paddingVertical: 1,
                    marginVertical: 0,
                    paddingHorizontal: 6,
                    marginHorizontal: 0,
                  }}
                  titleStyle={{
                    color: theme.COLORS.TEXT2,
                    fontFamily: theme.FONTS.TEXT,
                  }}
                />
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SocialCard;
