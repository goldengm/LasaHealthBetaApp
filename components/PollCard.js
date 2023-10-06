import React from 'react';
import {Dimensions, View, Text} from 'react-native';

import {theme} from '../constants';
import {CheckBox, LinearProgress} from 'react-native-elements';

import RadioCheckedSvg from '../assets/amie/connect/icons/radio-checked.svg';
import RadioUncheckedSvg from '../assets/amie/connect/icons/radio-unchecked.svg';

const {width} = Dimensions.get('screen');
class PollCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPollIndex: -1,
      totalVotes: 0,
    };
  }

  handlePollSelect = index => {
    this.setState({
      selectedPollIndex: index,
    });
  };

  componentDidMount() {
    let temp = 0;
    const {pollOptions} = this.props;
    pollOptions.map((item, index) => {
      temp += item['votes_num'];
    });
    this.setState({totalVotes: temp});
  }

  render() {
    const {
      style,
      testID,
      title = 'Default Title',
      subtitle = 'Default Subtitle',
      pollOptions = [],
      ...props
    } = this.props;
    const {selectedPollIndex} = this.state;


    return (
      <View
        testID='testID'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderTopColor: theme.COLORS.BACKGROUND2,
          borderTopWidth: 6,
          backgroundColor: theme.COLORS.WHITE
        }}>
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
            <View style={{justifyContent: 'space-evenly'}}>
              <Text
                style={{
                  fontSize: theme.SIZES.C3,
                  fontWeight: 'bold',
                  color: theme.COLORS.ERROR1,
                }}>
                {title}
              </Text>
              <Text
                style={{
                  fontSize: theme.SIZES.B1,
                  fontWeight: 'bold',
                  color: theme.COLORS.TEXT1,
                  marginTop: 4,
                  marginBottom: theme.SIZES.BASE,
                }}>
                {subtitle}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: -10,
            }}>
            {pollOptions.map((poll, i) => {
              return (
                <View>
                  <CheckBox
                    key={poll.id}
                    checkedColor={theme.COLORS.PRIMARY2}
                    title={poll.name}
                    checked={i === selectedPollIndex}
                    textStyle={{
                      color: theme.COLORS.TEXT1,
                      fontSize: theme.SIZES.B2,
                      fontFamily: theme.FONTS.TEXT,
                      fontWeight: '400',
                    }}
                    containerStyle={{
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                    checkedIcon={<RadioCheckedSvg />}
                    uncheckedIcon={<RadioUncheckedSvg />}
                    onPress={() => {
                      this.handlePollSelect(i);
                    }}
                  />
                  {selectedPollIndex >= 0 && (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                      }}>
                      <LinearProgress
                        value={
                          (i === selectedPollIndex) ? 
                          ((poll.votes_num + 1) / (this.state.totalVotes + 1)) :
                          ((poll.votes_num) / (this.state.totalVotes + 1))
                        }
                        style={{
                          width: '90%',
                          marginLeft: 10,
                          marginVertical: 10,
                          height: 8,
                          borderRadius: 4,
                        }}
                        color={theme.COLORS.PRIMARY}
                      />
                      <Text
                        style={{
                          marginLeft: 8,
                          marginTop: 2,
                          color: theme.COLORS.TEXT1,
                        }}>
                        {
                          (i === selectedPollIndex) ? 
                          ((poll.votes_num + 1) / (this.state.totalVotes + 1) * 100).toFixed(1) :
                          ((poll.votes_num) / (this.state.totalVotes + 1) * 100).toFixed(1)
                        }%
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

export default PollCard;
