import React from 'react';
import userPublicProfileReducer from '../../redux/reducers/userPublicProfileReducer';
import * as actions from '../../redux/constants/index';

jest.mock('react-native-elements', () => ({}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

beforeEach(async () => {
  // store = await createTestStore();
});

const initialState = {
    uid: -1,
    name: 'Update Name Here',
    location: 'Update Location Here',
    description: 'Update Description Here',
    avatar: 'Choose avatar TMP',
    healthConditions: [],
};

describe('userPublicProfileReducer general tests', () => {
  it('Testing UPDATE_USER_PUBLIC_PROFILE_UID', () => {
    const actionObj = {
        type: actions.UPDATE_USER_PUBLIC_PROFILE_UID,
        payload: 2
    }

    const returned = userPublicProfileReducer(initialState, actionObj);
    expect(returned.uid).toEqual(2);
  });

  it('Testing UPDATE_USER_PUBLIC_PROFILE', () => {
    const actionObj = {
        type: actions.UPDATE_USER_PUBLIC_PROFILE,
        payload: {
            uid: 1,
            name: 'PublicUser',
            description: "This is PublicUser"
        }
    }

    const returned = userPublicProfileReducer(initialState, actionObj);
    expect(returned.description).toEqual('This is PublicUser');
  });

  it('Testing UPDATE_USER_PUBLIC_PROFILE_NAME', () => {
    const actionObj = {
        type: actions.UPDATE_USER_PUBLIC_PROFILE_NAME,
        payload: {
            name: 'PublicUser',
        }
    }

    const returned = userPublicProfileReducer(initialState, actionObj);
    expect(returned.name).toEqual('PublicUser');
  });

  it('Testing UPDATE_USER_PUBLIC_PROFILE_LOCATION', () => {
    const actionObj = {
        type: actions.UPDATE_USER_PUBLIC_PROFILE_LOCATION,
        payload: {
            location: 'location',
        }
    }

    const returned = userPublicProfileReducer(initialState, actionObj);
    expect(returned.location).toEqual('location');
  });

  it('Testing UPDATE_USER_PUBLIC_PROFILE_DESCRIPTION', () => {
    const actionObj = {
        type: actions.UPDATE_USER_PUBLIC_PROFILE_DESCRIPTION,
        payload: {
            description: 'description'
        }
    }

    const returned = userPublicProfileReducer(initialState, actionObj);
    expect(returned.description).toEqual('description');
  });

  it('Testing UPDATE_USER_PUBLIC_PROFILE_AVATAR', () => {
    const actionObj = {
        type: actions.UPDATE_USER_PUBLIC_PROFILE_AVATAR,
        payload: {
            avatar: 'avatar'
        }
    }

    const returned = userPublicProfileReducer(initialState, actionObj);
    expect(returned.avatar).toEqual('avatar');
  });

  it('Testing ADD_AND_REMOVE_USER_PUBLIC_PROFILE_CONDITION', () => {
    const actionObj = {
        type: actions.ADD_USER_PUBLIC_PROFILE_CONDITION,
        payload: {
            conditionName: 'conditionName',
        }
    }
    const actionObj2 = {
        type: actions.REMOVE_USER_PUBLIC_PROFILE_CONDITION,
        payload: {
            conditionName: 'conditionName',
        }
    }

    const returned = userPublicProfileReducer(initialState, actionObj);
    expect(returned.healthConditions[0]).toEqual('conditionName');

    const returned2 = userPublicProfileReducer(returned, actionObj2);
    expect(returned2.healthConditions).toEqual([]);
  });

  

});
