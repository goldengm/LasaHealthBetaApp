import {device, expect, element, by, waitFor} from 'detox';
import {password} from './localSecurityInfo';

sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

//
//  Testing friend requests
//  1) log into testtrudy11@lasahealth.com
//  2) go to connect tab, then add a new friend, and search for u38vh1TestName
//  3) send friend request to u38vh1TestName
//  4) log out, log into testtrudy10@lasahealth.com
//  5) find new friend request and reject friend request
//  u38vh1TestName

describe('Testing Community Friend Requests', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.setURLBlacklist([
      '.*127.0.0.1.*',
      '.*https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel.*',
      '.*https://firestore.googleapis.com/google.firestore.v1.Firestore/Write/channel.*',
    ]);
  });

  beforeEach(async () => {
    // await device.launchApp();
    await device.reloadReactNative();

    await waitFor(element(by.id('pageScrollview')))
      .toBeVisible()
      .withTimeout(20000);
    // await device.reloadReactNative();
    // await waitFor(element(by.text("Welcome back"))).toBeVisible();
  });

  afterAll(async () => {
    // await detox.cleanup();
  });

  it('test adding and rejecting a friend request', async () => {
    await element(by.id('pageScrollview')).scrollTo('bottom');
    await element(by.id('loginButton')).tap();
    await element(by.id('pageScrollview')).scrollTo('bottom');
    await element(by.id('emailInput')).typeText('testtrudy11@lasahealth.com');
    await element(by.id('pageScrollview')).scrollTo('bottom');
    await element(by.id('passwordInput')).typeText(password);
    await element(by.id('pageScrollview')).scrollTo('bottom');
    // await sleep(1000);
    //  first click dismisses the keyboard
    await element(by.id('loginButton')).tap();
    await element(by.id('loginButton')).tap();
    // await waitFor(element(by.id("passwordVisibleButton")))
    // .toExist()
    // .withTimeout(20000);
    await waitFor(element(by.id('HomeScreenView')))
      .toExist()
      .withTimeout(25000);

    await element(by.id('footerConnectButton')).tap();
    await waitFor(element(by.id('addNewFriendButton')))
      .toExist()
      .withTimeout(20000);

    await element(by.id('addNewFriendButton')).tap();
    await waitFor(element(by.id('findAFriendTextInput')))
      .toExist()
      .withTimeout(20000);

    await element(by.id('findAFriendTextInput')).typeText('u38vh1TestName\n');

    // await element(by.id('pageScrollview2')).scrollTo('bottom');
    // await element(by.id('pageScrollview2')).tap();
    await waitFor(element(by.id('friendSearchButton')))
      .toExist()
      .withTimeout(20000);
    await element(by.id('friendSearchButton')).tap();

    // FriendResult

    await waitFor(element(by.id('ResultsView')))
      .toExist()
      .withTimeout(20000);
    // await waitFor(element(by.type('FriendResult'))).tap();
    await element(by.id('UserProfileResult')).tap();

    await waitFor(element(by.id('amieProfileView')))
      .toExist()
      .withTimeout(20000);
    await waitFor(element(by.id('requestFriendButton')))
      .toExist()
      .withTimeout(20000);
    await element(by.id('requestFriendButton')).tap();

    await waitFor(element(by.id('footerLearnButton')))
      .toExist()
      .withTimeout(20000);
    await element(by.id('footerLearnButton')).tap();

    await waitFor(element(by.id('headerMenuButton')))
      .toExist()
      .withTimeout(20000);
    await element(by.id('headerMenuButton')).tap();

    await waitFor(element(by.id('logoutButton')))
      .toExist()
      .withTimeout(20000);
    await element(by.id('logoutButton')).tap();

    await waitFor(element(by.id('emailInput')))
      .toExist()
      .withTimeout(20000);
    await element(by.id('emailInput')).typeText('testtrudy10@lasahealth.com\n');
    // await element(by.id('pageScrollview')).scrollTo('bottom');
    await element(by.id('passwordInput')).typeText(password + '\n');
    // await element(by.id('pageScrollview')).scrollTo('bottom');
    // await sleep(1000);
    //  first click dismisses the keyboard
    // await element(by.id('loginButton')).tap();
    await element(by.id('loginButton')).tap();
    // await waitFor(element(by.id("passwordVisibleButton")))
    // .toExist()
    // .withTimeout(20000);
    await waitFor(element(by.id('HomeScreenView')))
      .toExist()
      .withTimeout(25000);

    await element(by.id('footerConnectButton')).tap();
    await waitFor(element(by.id('viewFriendsButton')))
      .toExist()
      .withTimeout(20000);

    await element(by.id('viewFriendsButton')).tap();
    await waitFor(element(by.id('MessagesView')))
      .toExist()
      .withTimeout(20000);

    await waitFor(element(by.id('friendRejectButton')))
      .toExist()
      .withTimeout(40000);
    await element(by.id('friendRejectButton')).tap();
    await waitFor(element(by.id('friendRejectButton')))
      .not.toExist()
      .withTimeout(20000);
    // await waitFor(element(by.id('friendRequest').and(by.text('Lauraly'))))
    //   .toExist()
    //   .withTimeout(20000);
  });
});
