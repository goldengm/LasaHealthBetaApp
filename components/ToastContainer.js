import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import Toast from './Toast';
import {theme} from '../constants';

const {height, width} = Dimensions.get('window');

class ToastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: [],
    };
  }

  static defaultProps = {
    placement: 'bottom',
    offset: 10,
    swipeEnabled: true,
  };

  /**
   * Shows a new toast. Returns id
   */
  show = (message, toastOptions) => {
    let id = toastOptions?.id || Math.random().toString();
    const onDestroy = () => {
      toastOptions?.onClose && toastOptions?.onClose();
      this.setState({toasts: this.state.toasts.filter(t => t.id !== id)});
    };

    requestAnimationFrame(() => {
      this.setState({
        toasts: [
          {
            id,
            onDestroy,
            message,
            open: true,
            onHide: () => this.hide(id),
            ...this.props,
            ...toastOptions,
          },
          ...this.state.toasts.filter(t => t.open),
        ],
      });
    });

    return id;
  };

  /**
   * Updates a toast, To use this create you must pass an id to show method first, then pass it here to update the toast.
   */
  update = (id, message, toastOptions) => {
    this.setState({
      toasts: this.state.toasts.map(toast =>
        toast.id === id ? {...toast, message, ...toastOptions} : toast,
      ),
    });
  };

  /**
   * Removes a toast from stack
   */
  hide = id => {
    this.setState({
      toasts: this.state.toasts.map(t =>
        t.id === id ? {...t, open: false} : t,
      ),
    });
  };

  /**
   * Removes all toasts in stack
   */
  hideAll = () => {
    this.setState({
      toasts: this.state.toasts.map(t => ({...t, open: false})),
    });
  };

  /**
   * Check if a toast is currently open
   */
  isOpen = id => {
    return this.state.toasts.some(t => t.id === id && t.open);
  };

  renderBottomToasts() {
    const {toasts} = this.state;
    let {offset, offsetBottom} = this.props;
    let style = {
      bottom: offsetBottom || offset,
      width: width,
      justifyContent: 'flex-end',
      flexDirection: 'column',
    };
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        style={[styles.container, style]}
        pointerEvents="box-none">
        {toasts
          .filter(t => !t.placement || t.placement === 'bottom')
          .map(toast => (
            <Toast key={toast.id} {...toast} />
          ))}
      </KeyboardAvoidingView>
    );
  }

  renderTopToasts() {
    const {toasts} = this.state;
    let {offset, offsetTop} = this.props;
    let style = {
      top: offsetTop || offset,
      width: width,
      justifyContent: 'flex-start',
      flexDirection: 'column-reverse',
    };
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        style={[styles.container, style]}
        pointerEvents="box-none">
        {toasts
          .filter(t => t.placement === 'top')
          .map(toast => (
            <Toast key={toast.id} {...toast} />
          ))}
      </KeyboardAvoidingView>
    );
  }

  renderCenterToasts() {
    const {toasts} = this.state;
    let {offset, offsetTop} = this.props;
    let style = {
      top: offsetTop || offset,
      height: height,
      width: width,
      justifyContent: 'center',
      flexDirection: 'column-reverse',
    };

    const data = toasts.filter(t => t.placement === 'center');
    const foundToast = data.length > 0;

    if (!foundToast) return null;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        style={[styles.container, style]}
        pointerEvents="box-none">
        {toasts
          .filter(t => t.placement === 'center')
          .map(toast => (
            <Toast key={toast.id} {...toast} />
          ))}
      </KeyboardAvoidingView>
    );
  }

  render() {
    return (
      <>
        {this.renderTopToasts()}
        {this.renderBottomToasts()}
        {this.renderCenterToasts()}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: 'absolute',
    maxWidth: '100%',
    zIndex: 999999,
    elevation: 999999,
    alignSelf: 'center',
    marginBottom: theme.SIZES.BASE * 3,
    ...(Platform.OS === 'web' ? {overflow: 'hidden'} : null),
  },
  message: {
    color: theme.COLORS.BACKGROUND1,
  },
});

export default ToastContainer;
