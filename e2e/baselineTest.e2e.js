import {device, expect, element, by, waitFor} from 'detox';

describe('Baseline tests, should always pass', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await waitFor(element(by.id('pageScrollview')))
      .toBeVisible()
      .withTimeout(20000);
    // await device.launchApp();
  });

  afterAll(async () => {
    // await detox.cleanup();
  });

  it('returns true', async () => {
    return true;
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
