import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import TouchableOpacity from './TouchableOpacity';

import {theme} from '../constants';

const {width} = Dimensions.get('screen');
class SocialCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reactionCounts: {smile: 0, thumbsUp: 0, muscle: 0, cry: 0, heart: 0},
    };
  }

  componentDidMount() {
    
  }

  render() {
    const {
      style,
      testID,
      title = 'Default Title',
      body = 'Default Body',
      ...props
    } = this.props;

    return (
      <TouchableOpacity
        testID="testID"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderTopColor: theme.COLORS.BACKGROUND5,
          borderTopWidth: 6,
          paddingVertical: theme.SIZES.BASE,
        }}
        onPress={() => {}}>
        <View
          style={{
            paddingVertical: theme.SIZES.BASE,
            paddingHorizontal: theme.SIZES.BASE,
            width: width,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{justifyContent: 'space-evenly'}}>
              <Text
                style={{
                  fontSize: theme.SIZES.B1,
                  fontWeight: 'bold',
                  color: theme.COLORS.TEXT1,
                  marginBottom: theme.SIZES.BASE * 0.5,
                }}>
                {title}
              </Text>
              <Text
                testID='testID'
                style={{
                  fontSize: theme.SIZES.C2,
                  color: theme.COLORS.TEXT2,
                  width: width - theme.SIZES.BASE * 4,
                }}>
                {body}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SocialCard;
