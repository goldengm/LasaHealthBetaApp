import * as actions from '../constants/index';
import produce from 'immer';

import {DeviceEventEmitter} from 'react-native';

const week1Progress = {
  weekProgress: 0,
  numModules: 6,
  module2Q1HasEndo: '',
  module2Q2EndoKnowledge: 0.0,
  module2Q3GoalsList: [],
  module3Q1Why: '',
  module6Q1: '',
  module6Q2: '',
  module6Q3: '',
  module6Q4Confidence1: '',
  module6Q4Confidence2: '',
  module6Q4Confidence3: '',
  module6Q5Progress1: '',
  module6Q5Progress2: '',
  module6Q5Progress3: '',
  module6Q6Rating: '',
};
const week2Progress = {
  weekProgress: 0,
  numModules: 6,

  module1Q1AvgMens: '',
  module1Q2HorProd: '',
  module1Q3BodyPart: {},
  module1Q4MensThick: '',

  module6Q1AvgMens: '',
  module6Q2HorProd: '',
  module6Q3BodyPart: {},
  module6Q4MensThick: '',

  module6Q5Confidence1: '',
  module6Q5Confidence2: '',
  module6Q5Confidence3: '',
  module6Q6Progress1: '',
  module6Q6Progress2: '',
  module6Q6Progress3: '',
  module6Q7Rating: '',
};
const week3Progress = {
  weekProgress: 0,
  numModules: 7,

  module1Q1EndoGrow: '',
  module1Q2EndoCause: '',
  module1Q3ComSymp: '',
  module1Q4WhyTrack: '',

  module2Q1EndoLes: [],

  module3Q1EndoStage: '',

  module4Q1SympFault: '',

  module5Q1PainDesc: '',
  module5Q2AgeStart: '',
  module5Q3SympImp: '',

  module7Q1EndoGrow: '',
  module7Q2EndoCause: '',
  module7Q3ComSymp: '',
  module7Q4WhyTrack: '',

  module7Q5Confidence1: '',
  module7Q5Confidence2: '',
  module7Q5Confidence3: '',
  module7Q6Progress1: '',
  module7Q6Progress2: '',
  module7Q6Progress3: '',
  module7Q7Rating: '',
};
const week4Progress = {
  weekProgress: 0,
  numModules: 9,

  module1Q1DiagTech: '',
  module1Q2LaprGold: '',
  module1Q3AdvoDoc: '',

  module2Q1FirstLearn: '',

  module7Q1DocLis: '',
  module7Q2DocPel: '',
  module7Q3DocImg: '',
  module7Q4DocLapr: '',
  module7Q5DocBiomark: '',

  module7Q6WhenDiagEndo: '',
  module7Q7ContextDiagEndo: '',
  module7Q8FeelDiagEndo: '',

  module8Q1Dismissed: '',
  module8Q2ExpDismissed: '',
  module8Q3AdvoPlan: '',

  module9Q1DiagTech: '',
  module9Q2LaprGold: '',
  module9Q3AdvoDoc: '',

  module9Q4Confidence1: '',
  module9Q4Confidence2: '',
  module9Q4Confidence3: '',
  module9Q5Progress1: '',
  module9Q5Progress2: '',
  module9Q5Progress3: '',
  module9Q6Rating: '',
};
const week5Progress = {
  weekProgress: 0,
  numModules: 7,

  module1Q1EndoSugery: '',
  module1Q2Excision: '',
  module1Q3LaproBenefits: '',
  module1Q4SurgeonCred: '',

  module2Q1HadLapro: '',
  module3Q1EndoTypes: {},

  module7Q1EndoSugery: '',
  module7Q2Excision: '',
  module7Q3LaproBenefits: '',
  module7Q4SurgeonCred: '',
  module7Q5Confidence1: '',
  module7Q6Confidence2: '',
  module7Q7Confidence3: '',
  module7Q8Progress1: '',
  module7Q9Progress2: '',
  module7Q10Progress3: '',
  module7Q11Rating: '',
};
const week6Progress = {
  weekProgress: 0,
  numModules: 7,

  module1Q1Gnrh: '',
  module1Q2OtcMeds: '',
  module1Q3IUD: '',
  module1Q4NoMeds: '',

  module6Q1MedGoals: '',
  module6Q2MedSymp: '',
  module6Q3MedEff: '',
  module6Q4MedExp: '',

  module7Q1Gnrh: '',
  module7Q2OtcMeds: '',
  module7Q3IUD: '',
  module7Q4NoMeds: '',
  module7Q5Confidence1: '',
  module7Q6Confidence2: '',
  module7Q7Confidence3: '',
  module7Q8Progress1: '',
  module7Q9Progress2: '',
  module7Q10Progress3: '',
  module7Q11Rating: '',
};
const week7Progress = {
  weekProgress: 0,
  numModules: 7,

  module1Q1PFHelp: '',
  module1Q2CureEndo: '',
  module1Q3ExBene: '',
  module1Q4TensPain: '',

  module3Q1BeenPFTherap: '',
  module3Q2HowEffectivePF: '',
  module3Q3ExpPF: '',
  module3Q4PFScreen: '',

  module4Q1ToolsUsed: '',
  module4Q2ToolsEffective: '',
  module4Q3ExpTools: '',

  module7Q1PFHelp: '',
  module7Q2CureEndo: '',
  module7Q3ExBene: '',
  module7Q4TensPain: '',
  module7Q5Confidence1: '',
  module7Q6Confidence2: '',
  module7Q7Confidence3: '',
  module7Q8Progress1: '',
  module7Q9Progress2: '',
  module7Q10Progress3: '',
  module7Q11Rating: '',
};
const week8Progress = {
  weekProgress: 0,
  numModules: 7,

  module1Q1EatCure: '',
  module1Q2ReducePain: '',
  module1Q3IncreasePain: '',

  module7Q1EatCure: '',
  module7Q2ReducePain: '',
  module7Q3IncreasePain: '',
  module7Q4Confidence1: '',
  module7Q5Confidence2: '',
  module7Q6Confidence3: '',
  module7Q7Progress1: '',
  module7Q8Progress2: '',
  module7Q9Progress3: '',
  module7Q10Rating: '',
};
const week9Progress = {
  weekProgress: 0,
  numModules: 6,

  module1Q1BestResearch: '',
  module1Q2UncertainProd: '',
  module1Q3MagRelax: '',
  module1Q4WarnScam: '',

  module4Q1AltManagement: '',
  module4Q2AltManEff: '',
  module4Q3AltManExp: '',

  module6Q1BestResearch: '',
  module6Q2UncertainProd: '',
  module6Q3MagRelax: '',
  module6Q4WarnScam: '',
  module6Q5Confidence1: '',
  module6Q6Confidence2: '',
  module6Q7Confidence3: '',
  module6Q8Progress1: '',
  module6Q9Progress2: '',
  module6Q10Progress3: '',
  module6Q11Rating: '',
};
const week10Progress = {
  weekProgress: 0,
  numModules: 7,

  module1Q1EndoImp: '',
  module1Q2EndoApp: '',
  module1Q3EndoInfert: '',
  module1Q4EndoInfertOptions: '',

  module6Q1EndoImp: '',
  module6Q2EndoApp: '',
  module6Q3EndoInfert: '',
  module6Q4EndoInfertOptions: '',
  module6Q5Confidence1: '',
  module6Q6Confidence2: '',
  module6Q7Confidence3: '',
  module6Q8Progress1: '',
  module6Q9Progress2: '',
  module6Q10Progress3: '',
  module6Q11Rating: '',
};
const week11Progress = {
  weekProgress: 0,
  numModules: 7,

  module1Q1Adeno: '',
  module1Q2FemAuto: '',
  module1Q3StartAction: '',

  module6Q1Adeno: '',
  module6Q2FemAuto: '',
  module6Q3StartAction: '',
  module6Q4Confidence1: '',
  module6Q5Confidence2: '',
  module6Q6Confidence3: '',
  module6Q7Progress1: '',
  module6Q8Progress2: '',
  module6Q9Progress3: '',
  module6Q10Rating: '',
};
const week12Progress = {
  weekProgress: 0,
  numModules: 7,

  module1Q1TherapyTech: '',
  module1Q2EmployEndo: '',
  module1Q3ADA: '',
  module1Q4TellDating: '',

  module2Q1CBTGoal: '',
  module2Q2CBTFeel: '',
  module2Q3CBTBecause: '',
  module2Q4ValueList: '',

  module7Q1TherapyTech: '',
  module7Q2EmployEndo: '',
  module7Q3ADA: '',
  module7Q4TellDating: '',
  module7Q5Confidence1: '',
  module7Q6Confidence2: '',
  module7Q7Confidence3: '',
  module7Q8Progress1: '',
  module7Q9Progress2: '',
  module7Q10Progress3: '',
  module7Q11Rating: '',
};

initialStateLR = {
  favorites: [],
  recommended: [],
  endo101Course: {
    courseProgress: 0,
    courseStartTimestamp: -1,
    week1: {}, //  let each week be flexible, don't specify more detail then this
    week2: {}, //  in the initial state
    week3: {},
    week4: {},
    week5: {},
    week6: {},
    week7: {},
    week8: {},
    week9: {},
    week10: {},
    week11: {},
    week12: {},
  },
};

export default learnReducer = (state = initialStateLR, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.ADD_FAVORITE_LEARN:
        if (!draft.favorites.includes(action.payload)) {
          draft.favorites = draft.favorites.concat(action.payload);
        }
        break;
      case actions.REMOVE_FAVORITE_LEARN:
        if (draft.favorites.includes(action.payload)) {
          draft.favorites = draft.favorites.filter(
            item => item !== action.payload,
          );
        }
        break;

      case actions.ADD_RECOMMENDED_LEARN:
        if (!draft.recommended.includes(action.payload)) {
          draft.recommended = draft.recommended.concat(action.payload);
        }
        break;
      case actions.REMOVE_RECOMMENDED_LEARN:
        if (draft.recommended.includes(action.payload)) {
          draft.recommended = draft.recommended.filter(
            item => item !== action.payload,
          );
        }
        break;

      case actions.INITIALIZE_ENDO101_COURSE:
        draft.endo101Course.courseProgress = 0;
        draft.endo101Course.courseStartTimestamp = Date.now();

        draft.endo101Course.week1 = week1Progress;
        draft.endo101Course.week2 = week2Progress;
        draft.endo101Course.week3 = week3Progress;
        draft.endo101Course.week4 = week4Progress;
        draft.endo101Course.week5 = week5Progress;
        draft.endo101Course.week6 = week6Progress;
        draft.endo101Course.week7 = week7Progress;
        draft.endo101Course.week8 = week8Progress;
        draft.endo101Course.week9 = week9Progress;
        draft.endo101Course.week10 = week10Progress;
        draft.endo101Course.week11 = week11Progress;
        draft.endo101Course.week12 = week12Progress;

        break;

      case actions.UPDATE_ENDO101_PROGRESS:
        DeviceEventEmitter.emit('event.toastNotification', {
          text: '🎉 Week complete! 🎉',
        });
        draft.endo101Course.courseProgress = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK1_PROGRESS:
        draft.endo101Course.week1 = week1Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK1_PROGRESS:
        if (action.payload > draft.endo101Course.week1.weekProgress) {
          draft.endo101Course.week1.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK1_NUMMODULES:
        draft.endo101Course.week1.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK1_MODULE2_Q1:
        draft.endo101Course.week1.module2Q1HasEndo = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE2_Q2:
        draft.endo101Course.week1.module2Q2EndoKnowledge = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE2_Q3:
        draft.endo101Course.week1.module2Q3GoalsList = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE3_Q1:
        draft.endo101Course.week1.module3Q1Why = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE6_Q1:
        draft.endo101Course.week1.module6Q1 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE6_Q2:
        draft.endo101Course.week1.module6Q2 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE6_Q3:
        draft.endo101Course.week1.module6Q3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK1_MODULE6_Q4_1:
        draft.endo101Course.week1.module6Q4Confidence1 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE6_Q4_2:
        draft.endo101Course.week1.module6Q4Confidence2 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE6_Q4_3:
        draft.endo101Course.week1.module6Q4Confidence3 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE6_Q5_1:
        draft.endo101Course.week1.module6Q5Progress1 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE6_Q5_2:
        draft.endo101Course.week1.module6Q5Progress2 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE6_Q5_3:
        draft.endo101Course.week1.module6Q5Progress3 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK1_MODULE6_Q6:
        draft.endo101Course.week1.module6Q6Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK2_PROGRESS:
        draft.endo101Course.week2 = week2Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK2_PROGRESS:
        if (action.payload > draft.endo101Course.week2.weekProgress) {
          draft.endo101Course.week2.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK2_NUMMODULES:
        draft.endo101Course.week2.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK2_MODULE1_Q1:
        draft.endo101Course.week2.module1Q1AvgMens = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK2_MODULE1_Q2:
        draft.endo101Course.week2.module1Q2HorProd = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK2_MODULE1_Q3:
        draft.endo101Course.week2.module1Q3BodyPart = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK2_MODULE1_Q4:
        draft.endo101Course.week2.module1Q4MensThick = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q1:
        draft.endo101Course.week2.module6Q1AvgMens = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q2:
        draft.endo101Course.week2.module6Q2HorProd = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q3:
        draft.endo101Course.week2.module6Q3BodyPart = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q4:
        draft.endo101Course.week2.module6Q4MensThick = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q5_1:
        draft.endo101Course.week2.module6Q5Confidence1 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q5_2:
        draft.endo101Course.week2.module6Q5Confidence2 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q5_3:
        draft.endo101Course.week2.module6Q5Confidence3 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q6_1:
        draft.endo101Course.week2.module6Q6Progress1 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q6_2:
        draft.endo101Course.week2.module6Q6Progress2 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q6_3:
        draft.endo101Course.week2.module6Q6Progress3 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK2_MODULE6_Q7:
        draft.endo101Course.week2.module6Q7Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK3_PROGRESS:
        draft.endo101Course.week3 = week3Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK3_PROGRESS:
        if (action.payload > draft.endo101Course.week3.weekProgress) {
          draft.endo101Course.week3.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK3_NUMMODULES:
        draft.endo101Course.week3.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK3_MODULE1_Q1:
        draft.endo101Course.week3.module1Q1EndoGrow = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE1_Q2:
        draft.endo101Course.week3.module1Q2EndoCause = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE1_Q3:
        draft.endo101Course.week3.module1Q3ComSymp = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE1_Q4:
        draft.endo101Course.week3.module1Q4WhyTrack = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE2_Q1:
        draft.endo101Course.week3.module2Q1EndoLes = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE3_Q1:
        draft.endo101Course.week3.module3Q1EndoStage = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE4_Q1:
        draft.endo101Course.week3.module4Q1SympFault = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE5_Q1:
        draft.endo101Course.week3.module5Q1PainDesc = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK3_MODULE5_Q2:
        draft.endo101Course.week3.module5Q2AgeStart = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE5_Q3:
        draft.endo101Course.week3.module5Q3SympImp = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q1:
        draft.endo101Course.week3.module7Q1EndoGrow = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q2:
        draft.endo101Course.week3.module7Q2EndoCause = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q3:
        draft.endo101Course.week3.module7Q3ComSymp = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q4:
        draft.endo101Course.week3.module7Q4WhyTrack = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q5_1:
        draft.endo101Course.week3.module7Q5Confidence1 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q5_2:
        draft.endo101Course.week3.module7Q5Confidence2 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q5_3:
        draft.endo101Course.week3.module7Q5Confidence3 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q6_1:
        draft.endo101Course.week3.module7Q6Progress1 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q6_2:
        draft.endo101Course.week3.module7Q6Progress2 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q6_3:
        draft.endo101Course.week3.module7Q6Progress3 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK3_MODULE7_Q7:
        draft.endo101Course.week3.module7Q7Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK4_PROGRESS:
        draft.endo101Course.week4 = week4Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK4_PROGRESS:
        if (action.payload > draft.endo101Course.week4.weekProgress) {
          draft.endo101Course.week4.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK4_NUMMODULES:
        draft.endo101Course.week4.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK4_MODULE1_Q1:
        draft.endo101Course.week4.module1Q1DiagTech = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE1_Q2:
        draft.endo101Course.week4.module1Q2LaprGold = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE1_Q3:
        draft.endo101Course.week4.module1Q3AdvoDoc = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE2_Q1:
        draft.endo101Course.week4.module2Q1FirstLearn = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE7_Q1:
        draft.endo101Course.week4.module7Q1DocLis = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE7_Q2:
        draft.endo101Course.week4.module7Q2DocPel = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE7_Q3:
        draft.endo101Course.week4.module7Q3DocImg = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE7_Q4:
        draft.endo101Course.week4.module7Q4DocLapr = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE7_Q5:
        draft.endo101Course.week4.module7Q5DocBiomark = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE7_Q6:
        draft.endo101Course.week4.module7Q6WhenDiagEndo = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE7_Q7:
        draft.endo101Course.week4.module7Q7ContextDiagEndo = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE7_Q8:
        draft.endo101Course.week4.module7Q8FeelDiagEndo = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE8_Q1:
        draft.endo101Course.week4.module8Q1Dismissed = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE8_Q2:
        draft.endo101Course.week4.module8Q2ExpDismissed = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE8_Q3:
        draft.endo101Course.week4.module8Q3AdvoPlan = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE9_Q1:
        draft.endo101Course.week4.module9Q1DiagTech = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE9_Q2:
        draft.endo101Course.week4.module9Q2LaprGold = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE9_Q3:
        draft.endo101Course.week4.module9Q3AdvoDoc = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK4_MODULE9_Q4_1:
        draft.endo101Course.week4.module9Q4Confidence1 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE9_Q4_2:
        draft.endo101Course.week4.module9Q4Confidence2 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE9_Q4_3:
        draft.endo101Course.week4.module9Q4Confidence3 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE9_Q5_1:
        draft.endo101Course.week4.module9Q5Progress1 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE9_Q5_2:
        draft.endo101Course.week4.module9Q5Progress2 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE9_Q5_3:
        draft.endo101Course.week4.module9Q5Progress3 = action.payload;
        break;
      case actions.UPDATE_ENDO101_WEEK4_MODULE9_Q6:
        draft.endo101Course.week4.module9Q6Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK5_PROGRESS:
        draft.endo101Course.week5 = week5Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK5_PROGRESS:
        if (action.payload > draft.endo101Course.week5.weekProgress) {
          draft.endo101Course.week5.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK5_NUMMODULES:
        draft.endo101Course.week5.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE1_Q1:
        draft.endo101Course.week5.module1Q1EndoSugery = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE1_Q2:
        draft.endo101Course.week5.module1Q2Excision = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE1_Q3:
        draft.endo101Course.week5.module1Q3LaproBenefits = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE1_Q4:
        draft.endo101Course.week5.module1Q4SurgeonCred = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE2_Q1:
        draft.endo101Course.week5.module2Q1HadLapro = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE3_Q1:
        draft.endo101Course.week5.module3Q1EndoTypes = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q1:
        draft.endo101Course.week5.module7Q1EndoSugery = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q2:
        draft.endo101Course.week5.module7Q2Excision = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q3:
        draft.endo101Course.week5.module7Q3LaproBenefits = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q4:
        draft.endo101Course.week5.module7Q4SurgeonCred = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q5:
        draft.endo101Course.week5.module7Q5Confidence1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q6:
        draft.endo101Course.week5.module7Q6Confidence2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q7:
        draft.endo101Course.week5.module7Q7Confidence3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q8:
        draft.endo101Course.week5.module7Q8Progress1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q9:
        draft.endo101Course.week5.module7Q9Progress2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q10:
        draft.endo101Course.week5.module7Q10Progress3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK5_MODULE7_Q11:
        draft.endo101Course.week5.module7Q11Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK6_PROGRESS:
        draft.endo101Course.week6 = week6Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK6_PROGRESS:
        if (action.payload > draft.endo101Course.week6.weekProgress) {
          draft.endo101Course.week6.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK6_NUMMODULES:
        draft.endo101Course.week6.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE1_Q1:
        draft.endo101Course.week6.module1Q1Gnrh = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE1_Q2:
        draft.endo101Course.week6.module1Q2OtcMeds = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE1_Q3:
        draft.endo101Course.week6.module1Q3IUD = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE1_Q4:
        draft.endo101Course.week6.module1Q4NoMeds = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE6_Q1:
        draft.endo101Course.week6.module6Q1MedGoals = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE6_Q2:
        draft.endo101Course.week6.module6Q2MedSymp = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE6_Q3:
        draft.endo101Course.week6.module6Q3MedEff = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE6_Q4:
        draft.endo101Course.week6.module6Q4MedExp = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q1:
        draft.endo101Course.week6.module7Q1Gnrh = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q2:
        draft.endo101Course.week6.module7Q2OtcMeds = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q3:
        draft.endo101Course.week6.module7Q3IUD = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q4:
        draft.endo101Course.week6.module7Q4NoMeds = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q5:
        draft.endo101Course.week6.module7Q5Confidence1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q6:
        draft.endo101Course.week6.module7Q6Confidence2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q7:
        draft.endo101Course.week6.module7Q7Confidence3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q8:
        draft.endo101Course.week6.module7Q8Progress1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q9:
        draft.endo101Course.week6.module7Q9Progress2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q10:
        draft.endo101Course.week6.module7Q10Progress3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK6_MODULE7_Q11:
        draft.endo101Course.week6.module7Q11Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK7_PROGRESS:
        draft.endo101Course.week7 = week7Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK7_PROGRESS:
        if (action.payload > draft.endo101Course.week7.weekProgress) {
          draft.endo101Course.week7.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK7_NUMMODULES:
        draft.endo101Course.week7.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE1_Q1:
        draft.endo101Course.week7.module1Q1PFHelp = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE1_Q2:
        draft.endo101Course.week7.module1Q2CureEndo = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE1_Q3:
        draft.endo101Course.week7.module1Q3ExBene = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE1_Q4:
        draft.endo101Course.week7.module1Q4TensPain = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE3_Q1:
        draft.endo101Course.week7.module3Q1BeenPFTherap = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE3_Q2:
        draft.endo101Course.week7.module3Q2HowEffectivePF = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE3_Q3:
        draft.endo101Course.week7.module3Q3ExpPF = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE3_Q4:
        draft.endo101Course.week7.module3Q4PFScreen = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE4_Q1:
        draft.endo101Course.week7.module4Q1ToolsUsed = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE4_Q2:
        draft.endo101Course.week7.module4Q2ToolsEffective = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE4_Q3:
        draft.endo101Course.week7.module4Q3ExpTools = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q1:
        draft.endo101Course.week7.module7Q1PFHelp = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q2:
        draft.endo101Course.week7.module7Q2CureEndo = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q3:
        draft.endo101Course.week7.module7Q3ExBene = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q4:
        draft.endo101Course.week7.module7Q4TensPain = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q5:
        draft.endo101Course.week7.module7Q5Confidence1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q6:
        draft.endo101Course.week7.module7Q6Confidence2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q7:
        draft.endo101Course.week7.module7Q7Confidence3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q8:
        draft.endo101Course.week7.module7Q8Progress1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q9:
        draft.endo101Course.week7.module7Q9Progress2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q10:
        draft.endo101Course.week7.module7Q10Progress3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK7_MODULE7_Q11:
        draft.endo101Course.week7.module7Q11Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK8_PROGRESS:
        draft.endo101Course.week8 = week8Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK8_PROGRESS:
        if (action.payload > draft.endo101Course.week8.weekProgress) {
          draft.endo101Course.week8.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK8_NUMMODULES:
        draft.endo101Course.week8.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE1_Q1:
        draft.endo101Course.week8.module1Q1EatCure = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE1_Q2:
        draft.endo101Course.week8.module1Q2ReducePain = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE1_Q3:
        draft.endo101Course.week8.module1Q3IncreasePain = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE7_Q1:
        draft.endo101Course.week8.module7Q1EatCure = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE7_Q2:
        draft.endo101Course.week8.module7Q2ReducePain = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE7_Q3:
        draft.endo101Course.week8.module7Q3IncreasePain = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE7_Q4:
        draft.endo101Course.week8.module7Q4Confidence1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE7_Q5:
        draft.endo101Course.week8.module7Q5Confidence2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE7_Q6:
        draft.endo101Course.week8.module7Q6Confidence3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE7_Q7:
        draft.endo101Course.week8.module7Q7Progress1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE7_Q8:
        draft.endo101Course.week8.module7Q8Progress2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE7_Q9:
        draft.endo101Course.week8.module7Q9Progress3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK8_MODULE7_Q10:
        draft.endo101Course.week8.module7Q10Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK9_PROGRESS:
        draft.endo101Course.week9 = week9Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK9_PROGRESS:
        if (action.payload > draft.endo101Course.week9.weekProgress) {
          draft.endo101Course.week9.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK9_NUMMODULES:
        draft.endo101Course.week9.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE1_Q1:
        draft.endo101Course.week9.module1Q1BestResearch = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE1_Q2:
        draft.endo101Course.week9.module1Q2UncertainProd = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE1_Q3:
        draft.endo101Course.week9.module1Q3MagRelax = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE1_Q4:
        draft.endo101Course.week9.module1Q4WarnScam = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE4_Q1:
        draft.endo101Course.week9.module4Q1AltManagement = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE4_Q2:
        draft.endo101Course.week9.module4Q2AltManEff = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE4_Q3:
        draft.endo101Course.week9.module4Q3AltManExp = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q1:
        draft.endo101Course.week9.module6Q1BestResearch = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q2:
        draft.endo101Course.week9.module6Q2UncertainProd = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q3:
        draft.endo101Course.week9.module6Q3MagRelax = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q4:
        draft.endo101Course.week9.module6Q4WarnScam = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q5:
        draft.endo101Course.week9.module6Q5Confidence1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q6:
        draft.endo101Course.week9.module6Q6Confidence2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q7:
        draft.endo101Course.week9.module6Q7Confidence3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q8:
        draft.endo101Course.week9.module6Q8Progress1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q9:
        draft.endo101Course.week9.module6Q9Progress2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q10:
        draft.endo101Course.week9.module6Q10Progress3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK9_MODULE6_Q11:
        draft.endo101Course.week9.module6Q11Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK10_PROGRESS:
        draft.endo101Course.week10 = week10Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK10_PROGRESS:
        if (action.payload > draft.endo101Course.week10.weekProgress) {
          draft.endo101Course.week10.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK10_NUMMODULES:
        draft.endo101Course.week10.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE1_Q1:
        draft.endo101Course.week10.module1Q1EndoImp = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE1_Q2:
        draft.endo101Course.week10.module1Q2EndoApp = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE1_Q3:
        draft.endo101Course.week10.module1Q3EndoInfert = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE1_Q4:
        draft.endo101Course.week10.module1Q4EndoInfertOptions = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q1:
        draft.endo101Course.week10.module6Q1EndoImp = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q2:
        draft.endo101Course.week10.module6Q2EndoApp = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q3:
        draft.endo101Course.week10.module6Q3EndoInfert = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q4:
        draft.endo101Course.week10.module6Q4EndoInfertOptions = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q5:
        draft.endo101Course.week10.module6Q5Confidence1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q6:
        draft.endo101Course.week10.module6Q6Confidence2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q7:
        draft.endo101Course.week10.module6Q7Confidence3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q8:
        draft.endo101Course.week10.module6Q8Progress1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q9:
        draft.endo101Course.week10.module6Q9Progress2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q10:
        draft.endo101Course.week10.module6Q10Progress3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK10_MODULE6_Q11:
        draft.endo101Course.week10.module6Q11Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK11_PROGRESS:
        draft.endo101Course.week11 = week11Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK11_PROGRESS:
        if (action.payload > draft.endo101Course.week11.weekProgress) {
          draft.endo101Course.week11.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK11_NUMMODULES:
        draft.endo101Course.week11.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE1_Q1:
        draft.endo101Course.week11.module1Q1Adeno = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE1_Q2:
        draft.endo101Course.week11.module1Q2FemAuto = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE1_Q3:
        draft.endo101Course.week11.module1Q3StartAction = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE6_Q1:
        draft.endo101Course.week11.module6Q1Adeno = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE6_Q2:
        draft.endo101Course.week11.module6Q2FemAuto = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE6_Q3:
        draft.endo101Course.week11.module6Q3StartAction = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE6_Q4:
        draft.endo101Course.week11.module6Q4Confidence1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE6_Q5:
        draft.endo101Course.week11.module6Q5Confidence2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE6_Q6:
        draft.endo101Course.week11.module6Q6Confidence3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE6_Q7:
        draft.endo101Course.week11.module6Q7Progress1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE6_Q8:
        draft.endo101Course.week11.module6Q8Progress2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE6_Q9:
        draft.endo101Course.week11.module6Q9Progress3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK11_MODULE6_Q10:
        draft.endo101Course.week11.module6Q10Rating = action.payload;
        break;

      case actions.RESET_ENDO101_WEEK12_PROGRESS:
        draft.endo101Course.week12 = week12Progress;
        break;
      case actions.UPDATE_ENDO101_WEEK12_PROGRESS:
        if (action.payload > draft.endo101Course.week12.weekProgress) {
          draft.endo101Course.week12.weekProgress = action.payload;
        }
        break;
      case actions.UPDATE_ENDO101_WEEK12_NUMMODULES:
        draft.endo101Course.week12.numModules = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE1_Q1:
        draft.endo101Course.week12.module1Q1TherapyTech = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE1_Q2:
        draft.endo101Course.week12.module1Q2EmployEndo = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE1_Q3:
        draft.endo101Course.week12.module1Q3ADA = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE1_Q4:
        draft.endo101Course.week12.module1Q4TellDating = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE2_Q1:
        draft.endo101Course.week12.module2Q1CBTGoal = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE2_Q2:
        draft.endo101Course.week12.module2Q2CBTFeel = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE2_Q3:
        draft.endo101Course.week12.module2Q3CBTBecause = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE2_Q4:
        draft.endo101Course.week12.module2Q4ValueList = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q1:
        draft.endo101Course.week12.module7Q1TherapyTech = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q2:
        draft.endo101Course.week12.module7Q2EmployEndo = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q3:
        draft.endo101Course.week12.module7Q3ADA = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q4:
        draft.endo101Course.week12.module7Q4TellDating = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q5:
        draft.endo101Course.week12.module7Q5Confidence1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q6:
        draft.endo101Course.week12.module7Q6Confidence2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q7:
        draft.endo101Course.week12.module7Q7Confidence3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q8:
        draft.endo101Course.week12.module7Q8Progress1 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q9:
        draft.endo101Course.week12.module7Q9Progress2 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q10:
        draft.endo101Course.week12.module7Q10Progress3 = action.payload;
        break;

      case actions.UPDATE_ENDO101_WEEK12_MODULE7_Q11:
        draft.endo101Course.week12.module7Q11Rating = action.payload;
        break;

      default:
        break;
    }
  });
