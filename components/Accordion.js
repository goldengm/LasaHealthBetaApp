import React from 'react';
import {StyleSheet, View} from 'react-native';
import produce from 'immer';
import {theme} from '../constants';
import {
  Text,
  ListItem,
  // , Icon as rnIcon
} from 'react-native-elements';

// //  this is a tmp example
// data = [
//   {
//     title: <Text>Hello</Text>,
//     content: <Text>CONNNNNT</Text>,
//   },
//   {
//     title: <Text>HELLO2</Text>,
//     content: <Text>CONTU</Text>,
//   },
// ];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    const {data, customTitleFilter, customContentFilter} = this.props;
    //  setup expanded state for each accordion item
    let tmpList = [];
    data.map((l, i) => {
      tmpList.push(false);
    });
    this.state = {expandedList: tmpList};

    //  set up custom filters if passed
    if (customTitleFilter) {
      this.titleFilter = customTitleFilter;
    } else {
      this.titleFilter = function (passedElement) {
        return <Text>{passedElement}</Text>;
      };
    }
    if (customContentFilter) {
      this.contentFilter = customContentFilter;
    } else {
      this.contentFilter = function (passedElement) {
        return passedElement;
      };
    }
  }

  handleExpandedChange = (ind, expanded) => {
    this.setState(
      produce(draft => {
        draft.expandedList[ind] = expanded;
      }),
    );
  };

  render() {
    const {data, style, ...props} = this.props;

    const accordionStyles = {
      ...styles.accordionStyle,
      ...style,
    };

    return (
      <View style={{width: '100%'}}>
        {data.map((l, i) => (
          <View key={i} style={{marginVertical: theme.SIZES.BASE * 0.3}}>
            <ListItem.Accordion
              content={
                <ListItem.Content>{this.titleFilter(l.title)}</ListItem.Content>
              }
              isExpanded={this.state.expandedList[i]}
              containerStyle={{
                ...accordionStyles,
                marginVertical: 0,
                marginHorizontal: 0,
              }}
              key={i}
              onPress={() => {
                this.handleExpandedChange(i, !this.state.expandedList[i]);
              }}
              {...props}>
              {this.state.expandedList[i] && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    {this.contentFilter(l.content)}
                  </ListItem.Content>
                </ListItem>
              )}
            </ListItem.Accordion>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  accordionStyle: {
    marginVertical: 0,
    paddingVertical: theme.SIZES.BASE * 0.5,
    fontFamily: theme.FONTS.TEXT,
    flex: 1,
  },
});

export default Accordion;
