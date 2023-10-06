import React, {Component} from 'react';
import {PanResponder, Animated} from 'react-native';

export default class Draggable extends Component {
  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY(),
    };

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        console.log('ON MOVE');
        return Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5;
      },

      onMoveShouldSetPanResponderCapture: (_, gestureState) => {
        return false;
      },

      onStartShouldSetPanResponder: (event, gestureState) => {
        console.log('ON START');
        return true;
      },

      onStartShouldSetPanResponderCapture: (event, gestureState) => {
        return false;
      },
      onPanResponderGrant: (event, gestureState) => {
        console.log('Pan responder grant');

        if (this.props.customOnStartDrag) {
          this.props.customOnStartDrag(event, gestureState);
        }
      },
      onPanResponderMove: Animated.event(
        [null, {dx: this.state.pan.x, dy: this.state.pan.y}],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: (event, gestureState) => {
        const releasedX = gestureState.moveX;
        const releasedY = gestureState.moveY;
        console.log('Pan responder release', releasedX, releasedY);

        Promise.resolve().then(() => {
          if (this.props.customOnDragRelease) {
            return this.props.customOnDragRelease(releasedX, releasedY);
          } else {
            return null;
          }
        });

        Animated.spring(this.state.pan, {
          toValue: {x: 0, y: 0},
          friction: 5,
          useNativeDriver: false,
        }).start();
      },
    });
  }

  render() {
    const {children, style} = this.props;
    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),
    };

    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={{...panStyle, ...style}}>
        {children}
      </Animated.View>
    );
  }
}
