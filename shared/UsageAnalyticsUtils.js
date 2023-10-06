import {Mixpanel} from 'mixpanel-react-native';
import mixpanelKeys from '../mixpanel.secretkeys.json';

export class MixpanelManager {
  static sharedInstance =
    MixpanelManager.sharedInstance || new MixpanelManager();

  constructor() {
    const trackAutomaticEvents = true;
    this.mixpanel = new Mixpanel(
      mixpanelKeys['projectToken'],
      trackAutomaticEvents,
    );
    this.mixpanel.init();
    this.mixpanel.setLoggingEnabled(true);
  }
}

export const MixpanelInstance = MixpanelManager.sharedInstance.mixpanel;
