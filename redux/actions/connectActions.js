import * as actions from '../constants/index';

export function setCurrentCRIDAction(newCRID) {
  return {
    type: actions.SET_CURRENT_CRID,
    payload: newCRID,
  };
}

export function setCurrentAmieUIDAction(amieUID) {
  return {
    type: actions.SET_CURRENT_AMIE_UID,
    payload: amieUID,
  };
}

export function setCurrentAmieProfileAction(amieProfile) {
  return {
    type: actions.SET_CURRENT_AMIE_PROFILE,
    payload: amieProfile,
  };
}

export function addProposedAmieAction(amieCRID) {
  return {
    type: actions.ADD_PROPOSED_AMIE,
    payload: amieCRID,
  };
}

export function removeProposedAmieAction(amieCRID) {
  return {
    type: actions.REMOVE_PROPOSED_AMIE,
    payload: amieCRID,
  };
}

export function updateChatroomAction(
  cridP,
  nameP,
  lastMessageP,
  lastMessageTSP,
  numReadP,
  numMessagesP,
) {
  return {
    type: actions.UPDATE_CHATROOM,
    payload: {
      crid: cridP,
      name: nameP,
      lastMessage: lastMessageP,
      lastMessageTS: lastMessageTSP,
      numRead: numReadP,
      numMessages: numMessagesP,
    },
  };
}

export function updateAllChatroomsAction(uidP, chatroomUpdatesP) {
  return {
    type: actions.UPDATE_ALL_CHATROOMS,
    payload: {
      uid: uidP,
      chatroomUpdates: chatroomUpdatesP,
    },
  };
}

export function updateLastMessageChatroomAction(cridP, lastMessageP) {
  return {
    type: actions.UPDATE_LAST_MESSAGE_CHATROOM,
    payload: {
      crid: cridP,
      lastMessage: lastMessageP,
    },
  };
}

export function updateNumReadChatroomAction(cridP, numReadP) {
  return {
    type: actions.UPDATE_NUM_READ_CHATROOM,
    payload: {
      crid: cridP,
      numRead: numReadP,
    },
  };
}

export function deleteChatroomAction(cridP) {
  return {
    type: actions.DELETE_CHATROOM,
    payload: {
      crid: cridP,
    },
  };
}

export function addChatroomAction(cridP, chatroomP) {
  return {
    type: actions.ADD_CHATROOM,
    payload: {
      crid: cridP,
      chatroom: chatroomP,
    },
  };
}

export function setReportedUIDAction(uidP) {
  return {
    type: actions.SET_REPORTED_UID,
    payload: uidP,
  };
}

export function setCachedQnaAction(valueP) {
  return {
    type: actions.SET_CACHED_QNA,
    payload: valueP,
  };
}

export function setLastCachedQnaRefreshTSAction(valueP) {
  return {
    type: actions.SET_LAST_CACHED_QNA_REFRESH_TS,
    payload: valueP,
  };
}

export function setCachedFeedAction(valueP) {
  return {
    type: actions.SET_CACHED_FEED,
    payload: valueP,
  };
}

export function setLastCachedFeedRefreshTSAction(valueP) {
  return {
    type: actions.SET_LAST_CACHED_FEED_REFRESH_TS,
    payload: valueP,
  };
}

export function setCachedFriendRequestsAction(valueP) {
  return {
    type: actions.SET_CACHED_FRIEND_REQUEST,
    payload: valueP,
  };
}

export function setLastCachedFriendRequestsRefreshTSAction(valueP) {
  return {
    type: actions.SET_LAST_CACHED_FRIEND_REQUESTS_REFRESH_TS,
    payload: valueP,
  };
}

export function setLastChatroomRefreshTSAction(valueP) {
  return {
    type: actions.SET_LAST_CHATROOM_REFRESH_TS,
    payload: valueP,
  };
}

export function setChatroomListAction(valueP) {
  return {
    type: actions.SET_CHATROOMLIST,
    payload: valueP,
  };
}

export function setLocalQnaUpdatesAction(valueP) {
  return {
    type: actions.SET_LOCAL_QNA_UPDATES,
    payload: valueP,
  };
}

export function setLocalFeedUpdatesAction(valueP) {
  return {
    type: actions.SET_LOCAL_FEED_UPDATES,
    payload: valueP,
  };
}

export function addQuestionToCachedQnaAction(timestampP, qnaP) {
  return {
    type: actions.ADD_QUESTION_TO_CACHED_QNA,
    payload: {
      timestamp: timestampP,
      qna: qnaP,
    },
  };
}

export function addStatusToCachedFeedAction(qidP, statusUpdateP) {
  return {
    type: actions.ADD_STATUS_TO_CACHED_FEED,
    payload: {
      qid: qidP,
      statusUpdate: statusUpdateP,
    },
  };
}

export function resetLocalQnaUpdatesAction() {
  return {
    type: actions.RESET_LOCAL_QNA_UPDATES,
    payload: {},
  };
}

export function resetLocalFeedUpdatesAction() {
  return {
    type: actions.RESET_LOCAL_FEED_UPDATES,
    payload: {},
  };
}

export function setCachedPublicProfilesAction(publicProfilesP) {
  return {
    type: actions.SET_CACHED_PUBLIC_PROFILES,
    payload: publicProfilesP,
  };
}
export function resetCachedPublicProfilesAction() {
  return {
    type: actions.RESET_CACHED_PUBLIC_PROFILES,
    payload: {},
  };
}
export function updateCachedPublicProfileAction(uidP, publicProfile) {
  return {
    type: actions.UPDATE_CACHED_PUBLIC_PROFILE,
    payload: {
      uid: uidP,
      publicProfile: publicProfile,
    },
  };
}

export function setFriendsListAction(friendsListP) {
  return {
    type: actions.SET_FRIENDS_LIST,
    payload: friendsListP,
  };
}
export function removeFriendFromFriendsListAction(fridP) {
  return {
    type: actions.REMOVE_FRIEND_FROM_FRIENDS_LIST,
    payload: fridP,
  };
}
export function addFriendToFriendsListAction(publicProfilesP) {
  return {
    type: actions.ADD_FRIEND_TO_FRIENDS_LIST,
    payload: publicProfilesP,
  };
}

export function markAllReadForCridAction(cridP) {
  return {
    type: actions.MARK_ALL_READ_FOR_CRID,
    payload: cridP,
  };
}

export function updateCachedFeedItemAction(fidP, updatedFeedItemP) {
  return {
    type: actions.UPDATE_CACHED_FEED_ITEM,
    payload: {
      fid: fidP,
      updatedFeedItem: updatedFeedItemP,
    },
  };
}

export function setUrgentFriendStatusReceivedAction(
  urgentFriendStatusReceivedP,
) {
  return {
    type: actions.SET_URGENT_FRIEND_STATUS_RECEIVED,
    payload: urgentFriendStatusReceivedP,
  };
}

export function attemptCachedPublicProfileUpdateAction(
  timestampP,
  publicProfileP,
) {
  return {
    type: actions.ATTEMPT_CACHED_PUBLIC_PROFILE_UPDATE,
    payload: {
      timestamp: timestampP,
      publicProfile: publicProfileP,
    },
  };
}

export function updatePublicProfileForCachedChatroomAction(
  cridP,
  publicProfileP,
) {
  return {
    type: actions.UPDATE_PUBLIC_PROFILE_FOR_CACHED_CHATROOM,
    payload: {
      crid: cridP,
      publicProfile: publicProfileP,
    },
  };
}

export function appendToCachedFeedAction(nextFeed) {
  return {
    type: actions.APPEND_TO_CACHED_FEED_ACTION,
    payload: nextFeed,
  };
}

export function setLastFeedSnapshotAction(lastFeedSnapshot) {
  return {
    type: actions.SET_LAST_FEED_SNAPSHOT_ACTION,
    payload: lastFeedSnapshot,
  };
}
