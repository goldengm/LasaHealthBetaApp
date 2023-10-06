import React, {useState, useRef} from 'react';
import {
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
  View,
  Text,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from './Icon';

import {theme, styles} from '../constants';
import Button from './Button';

import Blob1 from '../assets/ui/general/Blob1.svg';
const {width} = Dimensions.get('screen');

const style = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 16,
  },
});

const SwipeableListitemCard = ({
  name,
  iconName,
  iconType,
  iconBackgroundColor,
  customOnPressUpdate = () => {},
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const swipeableEl = useRef(null);

  const renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    const pressHandler = () => {
      setModalVisible(!modalVisible);
    };

    return (
      <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
        <RectButton
          style={[style.rightAction, {backgroundColor: color}]}
          onPress={pressHandler}>
          <Text style={style.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (progress, _dragAnimatedValue) => (
    <View
      style={{
        width: 72,
        flexDirection: 'row',
      }}>
      {renderRightAction('Delete', '#dd2c00', 72, progress)}
    </View>
  );

  const renderConfirmationModal = () => {
    return (
      <View
        testID='testID'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          customOnBackdropPress={() => {
            setModalVisible(!modalVisible);
          }}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
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
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 0,
                  paddingTop: 0,
                }}>
                <Text>Are you sure you want to delete {name}?</Text>
              </View>

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
                    title="Yes"
                    onPress={() => {
                      customOnPressUpdate(name);
                      setModalVisible(!modalVisible);
                      swipeableEl.current.close();
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
                    title="No"
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      swipeableEl.current.close();
                    }}></Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <Swipeable ref={swipeableEl} renderRightActions={renderRightActions}>
      <View
        style={{
          justifyContent: 'center',
          width: width - theme.SIZES.BASE * 2,
          borderWidth: 1,
          borderColor: theme.COLORS.BACKGROUND4,
          borderRadius: theme.SIZES.BASE,
          paddingHorizontal: theme.SIZES.BASE,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: theme.SIZES.BASE * 0.7,
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              marginRight: theme.SIZES.BASE * 1.5,
            }}>
            <View
              style={{
                alignContent: 'center',
                alignItems: 'center',
                marginHorizontal: 0,
                paddingHorizontal: 0,
                marginTop: 14,
              }}>
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Blob1
                  style={{
                    position: 'absolute',
                    color: iconBackgroundColor,
                    preserveAspectRatio: 'none',
                    top: -20,
                  }}
                  height={70}
                  width={70}
                />

                <Icon
                  type={iconType}
                  name={iconName}
                  fill={theme.COLORS.TEXT1}
                  color={theme.COLORS.TEXT1}
                  style={{top: 2}}
                />
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'space-evenly'}}>
            <Text
              style={{
                fontSize: theme.SIZES.B1,
                fontWeight: '700',
                color: theme.COLORS.TEXT1,
                width: width - theme.SIZES.BASE * 8,
              }}>
              {name}
            </Text>
          </View>
        </View>
        {renderConfirmationModal(customOnPressUpdate)}
      </View>
    </Swipeable>
  );
};

export default SwipeableListitemCard;
