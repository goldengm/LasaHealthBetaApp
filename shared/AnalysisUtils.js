import * as Print from 'expo-print';
// import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';
import XDate from 'xdate';

export const statsConstants = {
  dayLengthMinutes: 1440,
  weekLengthMinutes: 1440 * 7,
  monthLengthMinutes: 1440 * 30,
  yearLengthMinutes: 1440 * 365,
  dayLengthMilliseconds: 1440 * 60 * 1000,
  halfdayLengthMilliseconds: 720 * 60 * 1000,
  maxDataPointsXAxis: 7,
  menstrualCycle: {
    phases: ['Menstruation', 'Follicular Phase', 'Ovulation', 'Luteal Phase'],
    avgPhaseStartDays: {
      Menstruation: 1,
      'Follicular Phase': 4,
      Ovulation: 14,
      'Luteal Phase': 15,
    },
    avgCycleLength: 28,
    hormones: {
      FSH: {
        MenstruationStart: 'Medium',
        MenstruationEnd: 'High',
        FollicularStart: 'Low',
        FollicularEnd: 'High',
        OvulationStart: 'High',
        OvulationEnd: 'High',
        LutealStart: 'Low',
        LutealEnd: 'Low',
      },
      LH: {
        MenstruationStart: 'Low',
        MenstruationEnd: 'Medium',
        FollicularStart: 'Low',
        FollicularEnd: 'High',
        OvulationStart: 'High',
        OvulationEnd: 'Low',
        LutealStart: 'Low',
        LutealEnd: 'Low',
      },
      Estrogen: {
        MenstruationStart: 'Low',
        MenstruationEnd: 'Low',
        FollicularStart: 'Medium',
        FollicularEnd: 'High',
        OvulationStart: 'Low',
        OvulationEnd: 'Low',
        LutealStart: 'Medium',
        LutealEnd: 'Low',
      },
      Progesterone: {
        MenstruationStart: 'Low',
        MenstruationEnd: 'Low',
        FollicularStart: 'Low',
        FollicularEnd: 'Low',
        OvulationStart: 'Low',
        OvulationEnd: 'Low',
        LutealStart: 'High',
        LutealEnd: 'High',
      },
    },
    fertility: {
      MenstruationStart: 'Low',
      MenstruationEnd: 'Low',
      FollicularStart: 'Medium',
      FollicularEnd: 'High',
      OvulationStart: 'High',
      OvulationEnd: 'High',
      LutealStart: 'Medium',
      LutealEnd: 'Low',
    },
    mood: {
      MenstruationStart: 'Bad',
      MenstruationEnd: 'Bad',
      FollicularStart: 'Good',
      FollicularEnd: 'Good',
      OvulationStart: 'Good',
      OvulationEnd: 'Good',
      LutealStart: 'Neutral',
      LutealEnd: 'Irritable',
    },
    commonSymptoms: {
      MenstruationStart: ['Cramping', 'Fatigue'],
      MenstruationEnd: ['Cramping', 'Fatigue'],
      FollicularStart: ['energetic', 'happy', 'inspired'],
      FollicularEnd: ['energetic', 'happy', 'inspired', 'high labido'],
      OvulationStart: ['high labido'],
      OvulationEnd: ['high labido'],
      LutealStart: ['moody', 'stressed', 'cravings'],
      LutealEnd: ['moody', 'stressed'],
    },
  },
};

export async function exportSymptomHistoryToPDF(trackingLogP, userProfileP) {
  let trackingLogNew = {};

  Object.entries(trackingLogP).forEach(item => {
    const tsTmp = item[0];
    const logEntryTmp = item[1];
    const dateObj = new XDate(parseInt(tsTmp) * 60000);
    const dateStr = dateObj.toString('MMMM dd, yyyy');
    trackingLogNew[dateStr] = logEntryTmp;
  });

  const myJSONTrackingLog = JSON.stringify(trackingLogNew, undefined, 2);
  const myName = userProfileP.Name;
  const myEmail = userProfileP.Email;

  const html = `
        <!DOCTYPE html>
        <html>
            <body>
                <h2>Symptom History Report for ${myName}</h2>
                <h4>Email: ${myEmail}</h4>
                <h4>Logged Symptom History:</h4>
                <pre id="json">${myJSONTrackingLog}</pre>
            </body>
        </html>
    `;

  console.log('Creating and Saving PDF for: ', myName, myEmail);
  createAndSavePDF(html);
}

export const createAndSavePDF = async html => {
  try {
    const {uri} = await Print.printToFileAsync({html});
    console.log('URI for pdf output: ', uri);
    await Sharing.shareAsync(uri);
    // if (Platform.OS === 'ios') {
    //   await Sharing.shareAsync(uri);
    // } else {
    //   await Sharing.shareAsync(uri);
    //   // const permission = await MediaLibrary.requestPermissionsAsync();
    //   // if (permission.granted) {
    //   //   await MediaLibrary.saveToLibraryAsync(uri);
    //   //   // const asset = await MediaLibrary.createAssetAsync(uri);
    //   // }
    // }
  } catch (error) {
    console.error(error);
  }
};

export function getDateFromTS(timeTS) {
  if (!(timeTS == null) && parseInt(timeTS) > 0) {
    const currentDateObj = new XDate();
    const passedTSObj = new XDate(timeTS);
    const currentTSDate = currentDateObj.toString('M/d');
    const passTSDate = passedTSObj.toString('M/d');
    const newTSStr =
      passedTSObj.toString('h:mm') +
      (passedTSObj.getHours() > 11 ? 'pm' : 'am') +
      (currentTSDate == passTSDate ? '' : '  ' + passTSDate);
    return newTSStr;
  } else {
    return '';
  }
}
