import { acnePage } from "./acnePage";
import { anemiaPage } from "./anemiaPage";
import { anorexiaPage } from "./anorexiaPage";
import { anxietyPage } from "./anxietyPage";
import { asthmaPage } from "./asthmaPage";
import { autoimPage } from "./autoimPage";
import { bacVagPage } from "./bacVagPage";
import { bingeEatingPage } from "./bingeEatingPage";
import { birthControlPage } from "./birthControlPage";
import { bladderPage } from "./bladderPage";
import { bladderPainPage } from "./bladderPainPage";
import { bleedPage } from "./bleedPage";
import { bodyImagePage } from "./bodyImagePage";
import { breastCancerPage } from "./breastCancerPage";
import { breastfeedingPage } from "./breastfeedingPage";
import { breastReconPage } from "./breastReconPage";
import { bulimiaPage } from "./bulimiaPage";
import { cancerPage } from "./cancerPage";
import { caregiverPage } from "./caregiverPage";
import { cervicalCancerPage } from "./cervicalCancerPage";
import { cfsmePage } from "./cfsmePage";
import { chlamydiaPage } from "./chlamydiaPage";
import { copdPage } from "./copdPage";
import { ctsPage } from "./ctsPage";
import { deprPregPage } from "./deprPregPage";
import { deprPage } from "./deprPage";
import { diabetesPage } from "./diabetesPage";
import { domViolencePage } from "./domViolencePage";
import { douchPage } from "./douchPage";
import { drDrugsPage } from "./drDrugsPage";
import { eatingPage } from "./eatingPage";
import { embcPage } from "./embcPage";
import { endoPage } from "./endoPage";
import { fgmPage } from "./fgmPage";
import { fibromPage } from "./fibromPage";
import { fitnessPage } from "./fitnessPage";
import { folicPage } from "./folicPage";
import { genHerpPage } from "./genHerpPage";
import { genWarPage } from "./genWarPage";
import { getActivePage } from "./getActivePage";
import { gonorPage } from "./gonorPage";
import { gravesPage } from "./gravesPage";
import { hashPage } from "./hashPage";
import { healthyEatPage } from "./healthyEatPage";
import { healthyWeightPage } from "./healthyWeightPage";
import { heartDiseasePage } from "./heartDiseasePage";
import { hivPage } from "./hivPage";
import { hpvPage } from "./hpvPage";
import { hysterPage } from "./hysterPage";
import { ibdPage } from "./ibdPage";
import { ibsPage } from "./ibsPage";
import { infertPage } from "./infertPage";
import { insomniaPage } from "./insomniaPage";
import { lupusPage } from "./lupusPage";
import { mammoPage } from "./mammoPage";
import { mecfsPage } from "./mecfsPage";
import { menopausePage } from "./menopausePage";
import { menstPage } from "./menstPage";
import { mentalPage } from "./mentalPage";
import { migrainePage } from "./migrainePage";
import { myastheniaPage } from "./myastheniaPage";
import { oralHealthPage } from "./oralHealthPage";
import { osteoPage } from "./osteoPage";
import { ovarianCanPage } from "./ovarianCanPage";
import { ovarianCysPage } from "./ovarianCysPage";
import { overweightPage } from "./overweightPage";
import { ovulationPage } from "./ovulationPage";
import { papPage } from "./papPage";
import { pcosPage, pcosScreening } from "./pcosPage";
import { periPage } from "./periPage";
import { pidPage } from "./pidPage";
import { popPage } from "./popPage";
import { pregPage } from "./pregPage";
import { premenPage } from "./premenPage";
import { sexualAsltPage } from "./sexualAsltPage";
import { sicklePage } from "./sicklePage";
import { sleepPage } from "./sleepPage";
import { stdsPage } from "./stdsPage";
import { stressPage } from "./stressPage";
import { strokePage } from "./strokePage";
import { syphilisPage } from "./syphilisPage";
import { thyroidPage } from "./thyroidPage";
import { trichPage } from "./trichPage";
import { utCancerPage } from "./utCancerPage";
import { utfibPage } from "./utfibPage";
import { utiPage } from "./utiPage";
import { vericosePage } from "./vericosePage";
import { violencePage } from "./violencePage";
import { viralHepPage } from "./viralHepPage";
import { yeastPage } from "./yeastPage";

export const topicsList = [
  "Acne",
  "Iron-deficiency anemia",
  "Anorexia nervosa",
  "Anxiety disorders",
  "Asthma",
  "Autoimmune Diseases",
  "Bacterial Vaginosis",
  "Binge eating disorder",
  "Birth Control Methods",
  "Bladder Control / Urinary Incontinence",
  "Bladder Pain",
  "Bleeding Disorders",
  "Body Image",
  "Breast Cancer",
  "Breastfeeding",
  "Breast Reconstruction After Mastectomy",
  "Bulimia Nervosa",
  "Cancer",
  "Caregiver Stress",
  "Cervical Cancer",
  "Chronic Fatigue Syndrome / Myalgic Encephalomyelitis",
  "Chlamydia",
  "Chronic obstructive pulmonary disease",
  "Carpal tunnel syndrome",
  "Postpartum depression",
  "Depression",
  "Diabetes",
  "Domestic violence/abuse",
  "Douching",
  "Date rape drugs",
  "Eating Discorders",
  "Emergency birth control/emergency contraception",
  "Endometriosis",
  "Female genital mutilation or cutting",
  "Fibromyalgia",
  "Fitness",
  "Folic Acid",
  "Genital herpes",
  "Genital Warts",
  "Getting Active",
  "Gonorrhea",
  "Graves' disease",
  "Hashimoto's Disease",
  "Nutrition / Healthy Eating",
  "Healthy Weight",
  "Heart Disease",
  "HIV and AIDS",
  "Human papillomavirus",
  "Hysterectomy",
  "Inflammatory bowel disease",
  "Irritable bowel syndrome (IBS)",
  "Infertility",
  "Insomnia",
  "Lupus",
  "Mammograms",
  "Myalgic encephalomyelitis/chronic fatigue syndrome",
  "Menopause",
  "Menstrual Cycle (Period)",
  "Mental Health",
  "Migraine",
  "Myasthenia gravis",
  "Oral Health",
  "Osteoporosis",
  "Ovarian Cancer",
  "Ovarian Cysts",
  "Overweight, obesity, and weight loss",
  "Ovulation",
  "Pap and HPV tests",
  "Polycystic Ovary Syndrome (PCOS)",
  "Perimenopause",
  "Pelvic inflammatory disease (PID)",
  "Pelvic organ prolapse",
  "Pregnancy",
  "Premenstrual syndrome (PMS)",
  "Sexual Assault",
  "Sickle Cell Disease",
  "Sleep and your health",
  "Sexually transmitted infections",
  "Stress and your health",
  "Stroke",
  "Syphilis",
  "Thyroid Disease",
  "Trichomoniasis",
  "Uterine Cancer",
  "Uterine Fibroids",
  "Urinary Tract Infection",
  "Varicose veins and spider veins",
  "Relationships and Safety",
  "Viral Hepatitis",
  "Vaginal yeast infections",
];

export const screeningList = [
  "Polycystic Ovary Syndrome (PCOS)",
  "Endometriosis",
];

export function getWikiPage(topicName, props) {
  switch (topicName) {
    case "Acne":
      return acnePage(props);
      break;
    case "Iron-deficiency anemia":
      return anemiaPage(props);
      break;
    case "Anorexia nervosa":
      return anorexiaPage(props);
      break;
    case "Anxiety disorders":
      return anxietyPage(props);
      break;
    case "Asthma":
      return asthmaPage(props);
      break;
    case "Autoimmune Diseases":
      return autoimPage(props);
      break;
    case "Bacterial Vaginosis":
      return bacVagPage(props);
      break;
    case "Binge eating disorder":
      return bingeEatingPage(props);
      break;
    case "Birth Control Methods":
      return birthControlPage(props);
      break;
    case "Bladder Control / Urinary Incontinence":
      return bladderPage(props);
      break;
    case "Bladder Pain":
      return bladderPainPage(props);
      break;
    case "Bleeding Disorders":
      return bleedPage(props);
      break;
    case "Body Image":
      return bodyImagePage(props);
      break;
    case "Breast Cancer":
      return breastCancerPage(props);
      break;
    case "Breastfeeding":
      return breastfeedingPage(props);
      // return acnePage(props);

      break;
    case "Breast Reconstruction After Mastectomy":
      return breastReconPage(props);
      break;
    case "Bulimia Nervosa":
      return bulimiaPage(props);
      break;
    case "Cancer":
      return cancerPage(props);
      break;
    case "Caregiver Stress":
      return caregiverPage(props);
      break;
    case "Cervical Cancer":
      return cervicalCancerPage(props);
      break;
    case "Chronic Fatigue Syndrome / Myalgic Encephalomyelitis":
      return cfsmePage(props);
      break;
    case "Chlamydia":
      return chlamydiaPage(props);
      break;
    case "Chronic obstructive pulmonary disease":
      return copdPage(props);
      break;
    case "Carpal tunnel syndrome":
      return ctsPage(props);
      break;
    case "Postpartum depression":
      // return acnePage(props);

      return deprPregPage(props);
      break;
    case "Depression":
      return deprPage(props);
      break;
    case "Diabetes":
      return diabetesPage(props);
      break;
    case "Domestic violence/abuse":
      return domViolencePage(props);
      break;
    case "Douching":
      return douchPage(props);
      break;
    case "Date rape drugs":
      // return acnePage(props);

      return drDrugsPage(props);
      break;
    case "Eating Discorders":
      return eatingPage(props);
      break;
    case "Emergency birth control/emergency contraception":
      return embcPage(props);
      break;
    case "Endometriosis":
      return endoPage(props);
      break;
    case "Female genital mutilation or cutting":
      return fgmPage(props);
      break;
    case "Fibromyalgia":
      return fibromPage(props);
      break;
    case "Fitness":
      return fitnessPage(props);
      break;
    case "Folic Acid":
      return folicPage(props);
      break;
    case "Genital herpes":
      return genHerpPage(props);
      break;
    case "Genital Warts":
      return genWarPage(props);
      break;
    case "Getting Active":
      return getActivePage(props);
      break;
    case "Gonorrhea":
      // return acnePage(props);

      return gonorPage(props);
      break;
    case "Graves' disease":
      return gravesPage(props);
      break;
    case "Hashimoto's Disease":
      return hashPage(props);
      break;
    case "Nutrition / Healthy Eating":
      return healthyEatPage(props);
      break;
    case "Healthy Weight":
      return healthyWeightPage(props);
      break;
    case "Heart Disease":
      return heartDiseasePage(props);
      break;
    case "HIV and AIDS":
      return hivPage(props);
      break;
    case "Human papillomavirus":
      return hpvPage(props);
      break;
    case "Hysterectomy":
      return hysterPage(props);
      break;
    case "Inflammatory bowel disease":
      return ibdPage(props);
      break;
    case "Irritable bowel syndrome (IBS)":
      return ibsPage(props);
      break;
    case "Infertility":
      return infertPage(props);
      break;
    case "Insomnia":
      return insomniaPage(props);
      break;
    case "Lupus":
      return lupusPage(props);
      break;
    case "Mammograms":
      return mammoPage(props);
      break;
    case "Myalgic encephalomyelitis/chronic fatigue syndrome":
      return mecfsPage(props);
      break;
    case "Menopause":
      return menopausePage(props);
      break;
    case "Menstrual Cycle (Period)":
      return menstPage(props);
      break;
    case "Mental Health":
      return mentalPage(props);
      break;
    case "Migraine":
      return migrainePage(props);
      break;
    case "Myasthenia gravis":
      return myastheniaPage(props);
      break;
    case "Oral Health":
      // return acnePage(props);

      return oralHealthPage(props);
      break;
    case "Osteoporosis":
      return osteoPage(props);
      break;
    case "Ovarian Cancer":
      return ovarianCanPage(props);
      break;
    case "Ovarian Cysts":
      return ovarianCysPage(props);
      break;
    case "Overweight, obesity, and weight loss":
      return overweightPage(props);
      break;
    case "Ovulation":
      return ovulationPage(props);
      break;
    case "Pap and HPV tests":
      // return acnePage(props);
      return papPage(props);
      break;
    case "Polycystic Ovary Syndrome (PCOS)":
      return pcosPage(props);
      break;
    case "Perimenopause":
      return periPage(props);
      break;
    case "Pelvic inflammatory disease (PID)":
      return pidPage(props);
      break;
    case "Pelvic organ prolapse":
      return popPage(props);
      break;
    case "Pregnancy":
      return pregPage(props);
      break;
    case "Premenstrual syndrome (PMS)":
      return premenPage(props);
      break;
    case "Sexual Assault":
      return sexualAsltPage(props);
      break;
    case "Sickle Cell Disease":
      return sicklePage(props);
      break;
    case "Sleep and your health":
      return sleepPage(props);
      break;
    case "Sexually transmitted infections":
      return stdsPage(props);
      break;
    case "Stress and your health":
      return stressPage(props);
      break;
    case "Stroke":
      return strokePage(props);
      break;
    case "Syphilis":
      return syphilisPage(props);
      break;
    case "Thyroid Disease":
      return thyroidPage(props);
      break;
    case "Trichomoniasis":
      return trichPage(props);
      break;
    case "Uterine Cancer":
      return utCancerPage(props);
      break;
    case "Uterine Fibroids":
      return utfibPage(props);
      break;
    case "Urinary Tract Infection":
      return utiPage(props);
      break;
    case "Varicose veins and spider veins":
      return vericosePage(props);
      break;
    case "Relationships and Safety":
      return violencePage(props);
      break;
    case "Viral Hepatitis":
      return viralHepPage(props);
      break;
    case "Vaginal yeast infections":
      return yeastPage(props);
      break;
    default:
      break;
  }
  return null;
}

export function getCondScreening(topicName, props) {
  switch (topicName) {
    case "Endometriosis":
      return pcosScreening(props);
      break;
    case "Polycystic Ovary Syndrome (PCOS)":
      return pcosScreening(props);
      break;
    default:
      break;
  }
  return null;
}
