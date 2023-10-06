import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {auth, db} from '../../shared/firebaseUtils';
import {getCachedPublicProfile} from '../../shared/ServerUtils';

import {
  setCurrentAmieProfileAction,
  setCurrentAmieUIDAction,
  updateLastMessageChatroomAction,
  setCachedPublicProfilesAction,
  markAllReadForCridAction,
} from '../../redux/actions/connectActions';

import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage,
} from 'react-native-gifted-chat';
import cloneDeep from 'lodash/cloneDeep';
import {theme, styles} from '../../constants';
import {getSVG} from '../../constants/SVGs';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  setMessages = value => {
    console.log('TRying to set messages: ', JSON.stringify(value));
    return this.setState({messages: value});
  };

  componentDidMount() {
    console.log('USING LAYOUT CHAT< CRID: ', this.props.connect.currentCRID);
    const unsubscribe = db
      .collection('Chatrooms')
      .doc(this.props.connect.currentCRID)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot =>
        this.setMessages(
          snapshot.docs.map(doc => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          })),
        ),
      );

    //  FIXMETUNA:  update num read
    this.props.dispatch(
      markAllReadForCridAction(this.props.connect.currentCRID),
    );

    return this.unsubscribe;
  }

  navigateToAmiesProfileScreen = amieUID => {
    const {navigation} = this.props;
    Promise.resolve()
      .then(() => this.props.dispatch(setCurrentAmieUIDAction(amieUID)))
      .then(() =>
        getCachedPublicProfile(
          amieUID,
          this.props.connect.cachedPublicProfiles,
        ),
      )
      .then(([updatedCache, cachedPublicProfile]) => {
        console.log(
          'Cached Public Profile RESULTS: ',
          JSON.stringify(updatedCache),
          JSON.stringify(cachedPublicProfile),
        );
        if (!(updatedCache == null)) {
          this.props.dispatch(setCachedPublicProfilesAction(updatedCache));
        }
        return this.props.dispatch(
          setCurrentAmieProfileAction(cloneDeep(cachedPublicProfile)),
        );
      })
      .then(() => navigation.navigate('AmieProfile'))
      .catch(function (err) {
        console.warn(err);
      });
  };

  onSend = (
    messages = [],
  ) => {
    console.log('ONSEND CHAT< CRID: ', this.props.connect.currentCRID);
    console.log('ONSEND CHAT< Messages: ', JSON.stringify(messages));

    Promise.resolve()
      .then(() => {
        return this.setMessages(
          GiftedChat.append(this.state.messages, messages),
        );
      })
      .then(() => {
        console.log(
          'Current Chat messages: ',
          JSON.stringify(this.state.messages),
        );
        const {text} = this.state.messages[0];
        return this.props.dispatch(
          updateLastMessageChatroomAction(this.props.connect.currentCRID, text),
        );
      })
      .then(() => {
        const {_id, createdAt, text, user} = this.state.messages[0];
        console.log(
          'Current latest message metadata: ',
          JSON.stringify(_id),
          JSON.stringify(createdAt),
          JSON.stringify(text),
          JSON.stringify(user),
        );
        return db
          .collection('Chatrooms')
          .doc(this.props.connect.currentCRID)
          .collection('messages')
          .add({
            _id,
            createdAt,
            text,
            user,
          });
      })
      .catch(error => console.log(error));
  };

  renderAvatar = props => {
    const currentMessageUID = props.currentMessage?.user?._uid;

    const currentMessageAvatar = currentMessageUID
      ? this.props.connect.cachedPublicProfiles[currentMessageUID]
          ?.publicProfile?.avatar
      : '';

    return (
      <TouchableOpacity
        onPress={() => this.handleOnPressAvatar(props.currentMessage?.user)}>
        <View
          style={{
            width: 40,
            height: 40,
            marginTop: theme.SIZES.BASE,
            alignContent: 'center',
          }}>
          {getSVG(currentMessageAvatar)}
        </View>
      </TouchableOpacity>
    );
  };

  renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: theme.COLORS.PRIMARY2,
          },

          fontFamily: theme.FONTS.TEXT,
        }}
        textStyle={{
          right: {
            color: '#fff',
          },

          fontFamily: theme.FONTS.TEXT,
        }}
      />
    );
  };

  renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.COLORS.PRIMARY2} />
      </View>
    );
  };

  renderSend = props => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton
            icon="send-circle"
            size={32}
            color={theme.COLORS.PRIMARY2}
          />
        </View>
      </Send>
    );
  };

  scrollToBottomComponent = () => {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton
          icon="chevron-double-down"
          size={36}
          color={theme.COLORS.PRIMARY1}
        />
      </View>
    );
  };

  renderSystemMessage = props => {
    return (
      <SystemMessage
        {...props}
        wrapperStyle={styles.systemMessageWrapper}
        textStyle={styles.systemMessageText}
      />
    );
  };

  handleOnPressAvatar = params => {
    this.navigateToAmiesProfileScreen(params['_uid']);
  };

  render() {
    return (
      <View testID="giftedChatView" style={{flex: 1, alignContent: 'center'}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          onPressAvatar={this.handleOnPressAvatar}
          user={{
            _id: auth?.currentUser?.email,
            _uid: auth?.currentUser?.uid,
            name: auth?.currentUser?.displayName,
          }}
          placeholder="Type your message here..."
          alwaysShowSend={true}
          showUserAvatar
          scrollToBottom
          minComposerHeight={45}
          textInputStyle={styles.chatInput}
          renderBubble={this.renderBubble}
          renderAvatar={this.renderAvatar}
          renderLoading={this.renderLoading}
          renderSend={this.renderSend}
          scrollToBottomComponent={this.scrollToBottomComponent}
          renderSystemMessage={this.renderSystemMessage}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userPublicProfile: state.userPublicProfile,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(ChatScreen);
