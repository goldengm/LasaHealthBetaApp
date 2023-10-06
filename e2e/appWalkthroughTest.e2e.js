import {device, expect, element, by, waitFor} from 'detox';
import {password} from './localSecurityInfo';

sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

describe('Walking through entire app, testing stability', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.setURLBlacklist([
      '.*127.0.0.1.*',
      '.*https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel.*',
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

  it('walkthrough core app', async () => {
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
    //  home screen
    await waitFor(element(by.id('HomeScreenView')))
      .toExist()
      .withTimeout(25000);
    //  track screen
    await element(by.id('footerTrackButton')).tap();
    await waitFor(element(by.id('calenderView')))
      .toExist()
      .withTimeout(20000);
    //  learn screen
    await element(by.id('footerLearnButton')).tap();
    await waitFor(element(by.id('endo101CourseButton')))
      .toExist()
      .withTimeout(20000);
    //  connect screen
    await element(by.id('footerConnectButton')).tap();
    await waitFor(element(by.id('viewFriendsButton')))
      .toExist()
      .withTimeout(20000);
    //  track add symptom screen
    await element(by.id('footerAddEntryButton')).tap();
    await element(by.id('pageScrollview1')).scrollTo('bottom');
    await waitFor(element(by.id('notesInput')))
      .toExist()
      .withTimeout(20000);
    await element(by.id('notesInput')).typeText('testing');

    //  submit an entry
    await element(by.id('pageScrollview1')).tap();
    await element(by.id('pageScrollview1')).scrollTo('bottom');
    await element(by.id('submitButton')).tap();
    await waitFor(element(by.id('calenderView')))
      .toExist()
      .withTimeout(20000);

    //  back to Learn
    await element(by.id('footerLearnButton')).tap();
    await waitFor(element(by.id('endo101CourseButton')))
      .toExist()
      .withTimeout(20000);
    //  settings menu
    await element(by.id('headerMenuButton')).tap();
    // await element(by.id("pageScrollview")).scrollTo("bottom");
    await waitFor(element(by.id('userAvatarButton')))
      .toExist()
      .withTimeout(20000);
    //  chatbot screen
    await element(by.id('footerConnectButton')).tap();
    await waitFor(element(by.id('headerChatButton')))
      .toExist()
      .withTimeout(20000);
    await element(by.id('headerChatButton')).tap();
    await waitFor(element(by.id('MessagesView')))
      .toExist()
      .withTimeout(20000);

    //  visit home, then garden
    await element(by.id('footerHomeButton')).tap();
    await waitFor(element(by.id('gardenPreviewOverviewButton')))
      .toExist()
      .withTimeout(20000);
    await element(by.id('gardenPreviewOverviewButton')).tap();
    await waitFor(element(by.id('gardenPlotRow1View')))
      .toExist()
      .withTimeout(20000);
  });

  // it('should have welcome screen', async () => {
  //   await expect(element(by.id('welcome'))).toBeVisible();
  // });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
