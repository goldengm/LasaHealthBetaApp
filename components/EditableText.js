import React from 'react';
import {Dimensions, Modal, View, Text} from 'react-native';
import Button from './Button';
import Input from './Input';
import TouchableOpacity from './TouchableOpacity';

import {theme, styles} from '../constants';

// import {getOS} from '../shared/PlatformUtils';

// const iosPlatform = () => getOS() == 'ios';
const {width} = Dimensions.get('screen');

class EditableText extends React.Component {
  constructor(props) {
    super(props);
    const {value} = this.props;
    this.state = {
      inputVisible: false,
      inputText: value ? value : '',

      valueToChange: '',
      lastConditionAdded: '',
    };
  }

  componentDidMount() {

  }

  setValueToChange = valueToChangeP => {
    this.setState({valueToChange: valueToChangeP});
  };

  setInputText = inputTextP => {
    this.setState({inputText: inputTextP});
  };

  setInputVisible = async inputVisibleP => {
    Promise.resolve()
      .then(() => this.setState({inputVisible: inputVisibleP}))
      .catch(error => {
        console.log(error);
      });
  };

  inputModal = dispatch => {
    const {inputVisible} = this.state;
    const {
      // level1Path,
      // level2Path,
      customOnPressUpdate,
      // defaultOnPressUpdateDisabled,
    } = this.props;
    return (
      <View
        testID='testID'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          testID='testMODAL'
          animationType="slide"
          transparent={true}
          visible={inputVisible}
          customOnBackdropPress={() => {
            this.setInputVisible(!inputVisible);
          }}
          onRequestClose={() => {
            this.setInputVisible(!inputVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: theme.COLORS.WHITE,
                borderRadius: 20,
                padding: theme.SIZES.BASE * 2,
                alignItems: 'center',
                shadowColor: theme.COLORS.BLACK,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <Input
                placeholder={'Enter value'}
                value={
                  this.state.inputText || this.state.inputText == ''
                    ? this.state.inputText
                    : 'Enter value'
                }
                multiline={true}
                inputContainerStyle={{
                  width: width - theme.SIZES.BASE * 10,
                  marginVertical: 0,
                  borderBottomWidth: 0,
                  fontFamily: theme.FONTS.TEXT,
                }}
                leftIcon={null}
                onChangeText={value => {
                  this.setInputText(value);
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: theme.SIZES.BASE,

                  width: width - theme.SIZES.BASE * 8,
                }}>
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    style={{
                      ...styles.outlinedButton,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                      borderColor: theme.COLORS.PRIMARY2,
                    }}
                    titleStyle={{
                      color: theme.COLORS.PRIMARY2,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title="Cancel"
                    onPress={() => {
                      this.setInputVisible(!inputVisible);
                    }}></Button>
                </View>

                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    testID="logHistoryButton"
                    style={{
                      ...styles.button,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                    }}
                    titleStyle={{
                      color: theme.COLORS.WHITE,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title="Update"
                    onPress={() => {
                      if (customOnPressUpdate) {
                        customOnPressUpdate(this.state.inputText);
                      }
                      this.setInputVisible(!inputVisible);
                    }}></Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  render() {
    const {
      style,
      testID,
      dispatch,
      navigation,
      // name,
      value,
      customOnPress,
      inputName,
      customTextStyle,
      ...props
    } = this.props;

    return (
      <View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            borderRadius: theme.SIZES.BASE,
            minWidth: theme.SIZES.BASE * 8,
          }}
          onPress={() => {
            this.setInputVisible(true);
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: theme.SIZES.B1,
                color: theme.COLORS.TEXT2,
                ...customTextStyle,
              }}>
              {value}
            </Text>
          </View>
        </TouchableOpacity>
        {this.inputModal(dispatch)}
      </View>
    );
  }
}

export default EditableText;
