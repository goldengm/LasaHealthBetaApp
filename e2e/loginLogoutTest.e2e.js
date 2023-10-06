import {device, expect, element, by, waitFor} from 'detox';
import {password} from './localSecurityInfo';

sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

describe('Testing Login / Logout generaly', () => {
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

  it('checking for welcome message on app load', async () => {
    await element(by.id('pageScrollview')).scrollTo('bottom');
    await element(by.id('loginButton')).tap();
    await expect(element(by.text('Hi, Welcome Back!'))).toBeVisible();
  });

  it('checking login click interactions', async () => {
    await element(by.id('pageScrollview')).scrollTo('bottom');
    await element(by.id('loginButton')).tap();
    await element(by.id('pageScrollview')).scrollTo('bottom');
    await element(by.id('passwordVisibleButton')).tap();
    await element(by.id('passwordVisibleButton')).tap();
    await element(by.id('passwordVisibleButton')).tap();
    // await waitFor(element(by.id("passwordVisibleButton")))
    // .toExist()
    // .withTimeout(20000);
    await expect(element(by.id('passwordVisibleButton'))).toExist();
  });

  it('clicking rememberMe', async () => {
    await element(by.id('pageScrollview')).scrollTo('bottom');
    await element(by.id('loginButton')).tap();
    await element(by.id('pageScrollview')).scrollTo('bottom');
    await element(by.id('rememberMeButton')).tap();
    await element(by.id('rememberMeButton')).tap();
    await element(by.id('rememberMeButton')).tap();
    await expect(element(by.id('rememberMeButton'))).toBeVisible();
  });

  it('login dummy user', async () => {
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
  });
});
