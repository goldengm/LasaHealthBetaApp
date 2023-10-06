import * as actions from '../constants/index';
import produce from 'immer';

// initialStateUPPR = {
//   userReportsDir: {
//     userReports: {},
//     bannedUsers: [UID,...]

//   },
//   userPublicProfileDir: {
//     UID: {
//       //  userPublicProfile
//       name: "",
//       description: "",
//       avatar: "",
//       attributes: [],
//       knowledgeStrengths: [],
//       searchAttributes: [],
//       friendsList: [UID,...],
//       blockedList: [UID,...]
//       chatroomList [CRID,....]  e.x."chatroom-CRID"
//     }
//   }
// };

initialStateUPPR = {
  uid: -1,
  name: 'Update Name Here',
  location: 'Update Location Here',
  description: 'Update Description Here',
  avatar: 'Choose avatar TMP',
  healthConditions: [],
};

export default userPublicProfileReducer = (state = initialStateUPPR, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.UPDATE_USER_PUBLIC_PROFILE_UID:
        draft.uid = action.payload;
        break;
      case actions.UPDATE_USER_PUBLIC_PROFILE:
        draft.uid = action.payload.uid;
        draft.name = action.payload.name;
        draft.description = action.payload.description;
        break;
      case actions.UPDATE_USER_PUBLIC_PROFILE_NAME:
        draft.name = action.payload.name;
        break;
      case actions.UPDATE_USER_PUBLIC_PROFILE_LOCATION:
        draft.location = action.payload.location;
        break;
      case actions.UPDATE_USER_PUBLIC_PROFILE_DESCRIPTION:
        draft.description = action.payload.description;
        break;
      case actions.UPDATE_USER_PUBLIC_PROFILE_AVATAR:
        draft.avatar = action.payload.avatar;
        break;
      case actions.ADD_USER_PUBLIC_PROFILE_CONDITION:
        if (!draft.healthConditions.includes(action.payload.conditionName)) {
          draft.healthConditions.push(action.payload.conditionName);
        }
        break;

      case actions.REMOVE_USER_PUBLIC_PROFILE_CONDITION:
        if (draft.healthConditions.includes(action.payload.conditionName)) {
          draft.healthConditions = draft.healthConditions.filter(
            item => item != action.payload.conditionName,
          );
        }
        break;

      default:
        break;
    }
  });
