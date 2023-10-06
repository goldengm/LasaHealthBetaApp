import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {theme} from '../constants';
import Chip from './Chip';

class EmojiPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedIndex: -1,
    };
  }

  componentDidMount() {
    
  }

  setSelectedIndex = value => {
    this.setState({selectedIndex: value});
  };

  render() {
    const {onSelect, emojiList, testID, ...props} = this.props;

    const maxEmojiCountInRow = 5;
    let emojiMatrix = [];
    for (let i = 0; i < Math.ceil(emojiList.length / maxEmojiCountInRow); i++) {
      let newRow = [];
      for (let j = 0; j < maxEmojiCountInRow; j++) {
        let currentIndex = i * maxEmojiCountInRow + j;
        newRow = newRow.concat(emojiList[currentIndex]);
      }
      emojiMatrix = emojiMatrix.concat([newRow]);
    }

    return (
      <View>
        {emojiMatrix.map((row, rowIndex) => {
          return (
            <View key={rowIndex} style={{flexDirection: 'row'}}>
              {row.map((emoji, colIndex) => {
                const currentIndex = rowIndex * maxEmojiCountInRow + colIndex;
                return (
                  <Chip
                    testID='testID'
                    key={currentIndex}
                    buttonStyle={{
                      backgroundColor:
                        this.state.selectedIndex == currentIndex
                          ? theme.COLORS.BACKGROUND6
                          : theme.COLORS.WHITE,
                      marginHorizontal: 0,
                      paddingHorizontal: 0,
                      marginVertical: 0,
                      paddingVertical: 0,
                      width: theme.SIZES.BASE * 3,
                      height: theme.SIZES.BASE * 2.5,
                    }}
                    titleStyle={{
                      color: theme.COLORS.TEXT1,
                      fontFamily: theme.FONTS.TEXT,
                      fontSize: 26,
                    }}
                    title={emoji}
                    onPress={() => {
                      this.setSelectedIndex(currentIndex);
                      onSelect && onSelect(emoji);
                    }}
                  />
                );
              })}
            </View>
          );
        })}
      </View>
    );
  }
}

// const styles = StyleSheet.create({});

export default EmojiPicker;
