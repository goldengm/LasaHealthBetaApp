import React from 'react';
import moment from 'moment';
import {Dimensions, View, Text} from 'react-native';
import Chip from './Chip';
import TouchableOpacity from './TouchableOpacity';
import ArrowUpShortSvg from '../assets/flaticons/solid_svg/svg/arrow-up-short.svg';
import MessagesSvg from '../assets/flaticons/solid_svg/svg/messages.svg';

import {theme, styles} from '../constants';

const {width} = Dimensions.get('screen');
class SocialCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numLikes: this.props.numLikes,
    };
  }

  setNumLikes = numLikesP => {
    this.setState({numLikes: numLikesP});
  };

  render() {
    const {
      style,
      testID,
      question = 'Default Question',
      answer = '',
      tags = ['tag1', 'tag2', 'tag3'],
      numComments = 0,
      qnaDateTime = 1675803482734,
      qnaObject,
      ...props
    } = this.props;

    let qnaDateObject = new Date(qnaDateTime);

    return (
      <TouchableOpacity
        testID='testID'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: theme.COLORS.BACKGROUND5,
          borderBottomWidth: 1.5,
        }}
        onPress={() => {}}>
        <View
          style={{
            padding: theme.SIZES.BASE * 1.25,
            width: width,
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
              <View style={{justifyContent: 'space-evenly'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: width - theme.SIZES.BASE * 8,
                  }}>
                  <Text
                    style={{
                      fontSize: theme.SIZES.B1,
                      fontWeight: 'bold',
                      color: theme.COLORS.TEXT1,
                    }}>
                    {'Q: ' + question.toString()}
                  </Text>
                </View>
                {answer != '' && (
                  <Text
                    style={{
                      fontSize: theme.SIZES.C2,
                      color: theme.COLORS.TEXT2,
                      width: width - theme.SIZES.BASE * 8,
                    }}>
                    {'A: ' + answer.toString()}
                  </Text>
                )}
              </View>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', marginTop: theme.SIZES.BASE * 0.5}}>
            {Object.entries(tags).map((responseObj, i) => (
              <Chip
                title={'#' + responseObj[1]}
                key={i}
                containerStyle={{
                  marginVertical: theme.SIZES.BASE * 0.625,
                  marginRight: 6,
                }}
                buttonStyle={{
                  backgroundColor: theme.COLORS.PRIMARY4,
                  borderRadius: 4,
                  paddingVertical: 1,
                  marginVertical: 0,
                  paddingHorizontal: 7,
                  marginHorizontal: 0,
                }}
                titleStyle={{
                  color: theme.COLORS.PRIMARY1,
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: 12,
                }}
              />
            ))}
          </View>
          <View
            style={{flexDirection: 'row', marginTop: theme.SIZES.BASE * 0.5}}>
            <Text
              style={{
                fontSize: theme.SIZES.B1,
                color: theme.COLORS.TEXT2,
                marginRight: theme.SIZES.BASE,
              }}>
              {moment(qnaDateObject).format('hh:mm a')} &#183; Date asked:{' '}
              {moment(qnaDateObject).format('M/D/YY')}
            </Text>

            <View style={{width: theme.SIZES.BASE * 4, flex: 1}} />

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {}}>
                <ArrowUpShortSvg
                  style={{
                    marginTop: 3,
                    marginHorizontal: 6,
                  }}
                />

                <Text
                  style={{
                    fontSize: theme.SIZES.B1,
                    color: theme.COLORS.TEXT2,
                    marginRight: theme.SIZES.BASE,
                  }}>
                  {JSON.stringify(this.state.numLikes)}
                </Text>
              </TouchableOpacity>

              {answer != '' && (
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => {}}>
                  <MessagesSvg
                    style={{
                      marginTop: 3,
                      marginHorizontal: 6,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: theme.SIZES.B1,
                      color: theme.COLORS.TEXT2,
                    }}>
                    {numComments}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SocialCard;
