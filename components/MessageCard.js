import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import moment from 'moment';
import TouchableOpacity from './TouchableOpacity';

import {theme} from '../constants';
import {getSVG} from '../constants/SVGs';

const {width} = Dimensions.get('screen');
class SocialCard extends React.Component {
  render() {
    const {
      style,
      testID,
      title = 'Default',
      subtitle = 'Placeholder',
      time = '',
      numUnread = 0,
      onPress = () => {},
      onPressAvatar = () => {},
      publicProfile = null,
      ...props
    } = this.props;

    // console.log('TIME: ', time);
    let dateObject = new Date(time);

    return (
      <TouchableOpacity
        testID='testID'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width - theme.SIZES.BASE * 2,
          marginVertical: theme.SIZES.BASE * 0.25,
        }}
        onPress={() => {
          onPress();
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: theme.COLORS.TEXT3,
            borderRadius: theme.SIZES.BASE * 2,
            paddingHorizontal: theme.SIZES.BASE * 1.3,
            paddingVertical: theme.SIZES.BASE * 0.5,
            width: width - theme.SIZES.BASE * 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
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
                    onPressAvatar();
                  }}>
                  {getSVG(
                    this.props.publicProfile
                      ? this.props.publicProfile['avatar']
                      : '',
                  )}
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: 'space-evenly',
                  width: width - theme.SIZES.BASE * 9,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: theme.SIZES.B1,
                      fontWeight: 'bold',
                      color: theme.COLORS.TEXT1,
                    }}>
                    {title}
                  </Text>

                  <View style={{marginHorizontal: 0, paddingHorizontal: 0}}>
                    {time != '' && (
                      <TouchableOpacity
                        style={{
                          height: 26,
                          borderRadius: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={() => {}}>
                        <Text
                          style={{
                            fontSize: theme.SIZES.C2,
                            color: theme.COLORS.BLACK,
                          }}>
                          {moment(dateObject).fromNow(true)}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: width - theme.SIZES.BASE * 12}}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                        fontSize: theme.SIZES.C2,
                        color: theme.COLORS.TEXT2,
                      }}>
                      {subtitle}
                    </Text>
                  </View>

                  <View style={{marginLeft: 0, paddingLeft: 0}}>
                    {numUnread > 0 && (
                      <View
                        style={{
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: theme.COLORS.ERROR1,
                            width: 30,
                            height: 26,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() => {}}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.C2,
                              color: theme.COLORS.WHITE,
                            }}>
                            {numUnread}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SocialCard;
