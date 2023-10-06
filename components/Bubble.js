import React from 'react';
import {StyleSheet, View} from 'react-native';
import TouchableOpacity from './TouchableOpacity';
import {theme} from '../constants';
import {Text} from 'react-native-elements';
import Icon from './Icon';

const maxBubbleNameLen = 8;

class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:
        props.initialSelectedState == null ? false : props.initialSelectedState,
    };
  }

  handleSelectedChange = selected => {
    this.setState({selected});
  };

  componentDidUpdate(prevProp, prevState) {
    const {
      uniqueSelectionSymptom,
      connectedSymptom,
      // bubbleName,
      customBubbleUniqueDeselect,
    } = this.props;

    //  FIXMETUNA:  if the unique selection symptom is supplied, pass a true of false
    //  selected state to the bubble depending on the curent uniqueSelectionSymptom state
    if (
      !(uniqueSelectionSymptom == null) &&
      !(uniqueSelectionSymptom[0].Type === '') &&
      this.state.selected
    ) {
      //  if the connect symptom is not currently the uniquely selected one, unselect
      if (
        !(connectedSymptom.Name === uniqueSelectionSymptom[0].Name) ||
        !(connectedSymptom.Category === uniqueSelectionSymptom[0].Category) ||
        !(connectedSymptom.BodyPart === uniqueSelectionSymptom[0].BodyPart) ||
        !(connectedSymptom.Type === uniqueSelectionSymptom[0].Type)
      ) {
        customBubbleUniqueDeselect();
        this.handleSelectedChange(false);
      }
    }
  }

  reduceBubbleName = bubbleName => {
    let bubbleNameParts = bubbleName.split(' ');
    let newName = '';
    for (let namePart of bubbleNameParts) {
      if (!(newName == '')) {
        newName = newName + ' ';
      }
      if (namePart.length > maxBubbleNameLen) {
        newName = newName + namePart.slice(0, maxBubbleNameLen);
      } else {
        newName = newName + namePart;
      }
    }
    if (bubbleName.length <= maxBubbleNameLen * 2) {
      return newName;
    }
    return (
      newName.slice(0, maxBubbleNameLen) +
      '\n' +
      newName.slice(maxBubbleNameLen, maxBubbleNameLen * 2)
    );
  };

  handleBubblePress = newVal => {
    const {customOnPress, bubbleName} = this.props;
    this.handleSelectedChange(newVal);
    customOnPress(newVal);
  };

  render() {
    const {
      iconName,
      bubbleName,
      style,
      customOnPress,
      viewBackgroundColor,
      connectedSymptom,
      disabled = false,
      ...props
    } = this.props;

    const bubbleStyles = {
      ...styles.petalBubble,
      ...style,
      backgroundColor: this.state.selected
        ? style['backgroundColor']
        : theme.COLORS.WHITE,
    };

    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: viewBackgroundColor,
        }}>
        <TouchableOpacity
          testID={'BubbleButton'}
          style={bubbleStyles}
          onPress={() => {
            if (!disabled) {
              this.handleBubblePress(!this.state.selected);
            }
          }}>
          <Icon
            name={iconName}
            family="amielineal"
            size={30}
            fill={
              this.state.selected
                ? theme.COLORS.WHITE
                : style['backgroundColor']
            }
            style={{zIndex: 5}}
            width={bubbleStyles.width * 0.65}
            height={bubbleStyles.height * 0.65}
          />
        </TouchableOpacity>
        <Text style={styles.bubbleText}>
          {this.reduceBubbleName(bubbleName)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
    fontFamily: theme.FONTS.TEXT,
  },
  petalBubble: {
    marginHorizontal: 8,
    borderRadius: 60,
    width: 60,
    height: 60,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.FONTS.TEXT,
  },
  bubbleText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: theme.FONTS.TEXT,
  },
});

export default Bubble;
