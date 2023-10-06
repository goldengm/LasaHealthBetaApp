import * as actions from '../constants/index';

export function updateUserPublicProfileAction(uidP, nameP, descriptionP) {
  return {
    type: actions.UPDATE_USER_PUBLIC_PROFILE,
    payload: {
      uid: uidP,
      name: nameP,
      description: descriptionP,
    },
  };
}

export function updateUserPublicProfileNameAction(avatarP) {
  return {
    type: actions.UPDATE_USER_PUBLIC_PROFILE_NAME,
    payload: {
      name: avatarP,
    },
  };
}
export function updateUserPublicProfileAvatarAction(avatarP) {
  return {
    type: actions.UPDATE_USER_PUBLIC_PROFILE_AVATAR,
    payload: {
      avatar: avatarP,
    },
  };
}

export function updateUserPublicProfileLocationAction(locationP) {
  return {
    type: actions.UPDATE_USER_PUBLIC_PROFILE_LOCATION,
    payload: {
      location: locationP,
    },
  };
}

export function updateUserPublicProfileDescriptionAction(descriptionP) {
  return {
    type: actions.UPDATE_USER_PUBLIC_PROFILE_DESCRIPTION,
    payload: {
      description: descriptionP,
    },
  };
}

export function addUserPublicProfileConditionAction(conditionNameP) {
  return {
    type: actions.ADD_USER_PUBLIC_PROFILE_CONDITION,
    payload: {
      conditionName: conditionNameP,
    },
  };
}

export function removeUserPublicProfileConditionAction(conditionNameP) {
  return {
    type: actions.REMOVE_USER_PUBLIC_PROFILE_CONDITION,
    payload: {
      conditionName: conditionNameP,
    },
  };
}

export function updateUserPublicProfileUIDAction(value) {
  return {
    type: actions.UPDATE_USER_PUBLIC_PROFILE_UID,
    payload: value,
  };
}
