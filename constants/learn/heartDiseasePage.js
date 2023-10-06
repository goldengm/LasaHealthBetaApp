import React from "react";
//import { useSafeArea } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import { Text } from "react-native-elements";
import { theme } from "../../constants";
import supScript from "../../shared/TextUtils";

import Images from "../Images";
import {
  DrawerItem as DrawerCustomItem,
  Button,
  CheckBox,
} from "../../components";

export function heartDiseasePage({ navigation, ...rest }) {
  const condName = "Heart Disease";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Heartattackandwomen.jpg?VersionId=Kjgdvd1xS6lslzR6l9LsEaCTVxdZ34De";
  const condDescription =
    "Heart disease is the number one killer of women in the United States. Some of the symptoms and risk factors for heart disease and heart attack are different for women than men. Your risk may also be different from other women. But every woman can take steps to prevent heart disease by knowing her risk factors and making healthy changes.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Heartdiseaseandwomen.jpg?VersionId=l4A15bkzmghzwzfy50Hr3SmrejgXzTs5"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Heart disease and women</h1>  -->
            <p><strong>In the United States, almost one in four women dies from heart disease. </strong>Heart disease is the most common cause of death in American women.<a href="#references"><sup>1</sup></a> Some types of heart problems are more common in women.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
      </div>
      </div>
          </div>
        </div>
      
      </article>`; //  this is html
  const condQA = [
    {
      title: "What is heart disease?",
      content: `

    <div class="answer"><p>"Heart disease" refers to several types of problems that affect the heart. The most common type of heart disease is coronary artery disease (CAD). Heart disease is also called cardiovascular disease. Cardiovascular disease includes diseases of the blood vessels, which carry blood to different parts of your body. These include coronary artery disease, vascular (peripheral artery) disease, and stroke.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is coronary artery disease?",
      content: `

    <div class="answer"><p>Coronary artery disease (CAD) is also called coronary heart disease. CAD is the most common type of heart disease. In CAD, <a href="/glossary#plaque">plaque</a> builds up on the walls of the arteries that carry blood to the heart muscle. Over time, this buildup causes the arteries to narrow and harden, a process called <a href="/glossary#atherosclerosis">atherosclerosis</a> (ath-UH-roh-skluh-ROH-sis). Atherosclerosis prevents the heart from getting all the blood and oxygen it needs. This can lead to <a href="/glossary#angina">angina</a> (an-JEYE-nuh), or chest pain.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are some common types of heart problems that affect women? ",
      content: `

    <div class="answer expanded"><ul>
	<li><strong>Atherosclerosis.</strong> This condition happens when <a href="/glossary#plaque">plaque</a> buildup in the arteries over time causes the arteries to narrow and harden. When the plaque wears down or breaks open, a blood clot may develop. If the clot blocks blood flow to the heart, it can cause a <a href="/heart-disease-and-stroke/heart-disease/heart-attack-and-women">heart attack</a>.</li>
	<li><strong>Heart failure.</strong> This happens when the heart is not able to pump blood through the body as well as it should. Heart failure is a serious medical problem because many organs, such as the lungs and kidneys, are no longer able to get the blood they need. Heart failure symptoms include:
	<ul style="list-style-type:circle;">
		<li>Shortness of breath</li>
		<li>Swelling in feet, ankles, and legs</li>
		<li>Extreme fatigue (tiredness)</li>
	</ul>
	</li>
	<li><strong>Irregular heartbeat (arrhythmia</strong> [uh-RITH-mee-uh]<strong>).</strong> Arrhythmias are problems with the rate or rhythm of your heartbeat. Your heart may beat too fast, too slow, or with an irregular rhythm. Changes in heartbeats are harmless for most people. As you get older, you are more likely to have arrhythmias, partly as a result of changing estrogen levels.<a href="#references"><sup>2</sup></a> It's normal to feel a few flutters or for your heart to race once in a while.<strong> If you have flutters along with other symptoms of heart attack, such as dizziness or shortness of breath, call 911 right away.</strong></li>
	<li><strong>Atrial fibrillation (AY-tree-ul fih-brih-LAY-shun) (AF or Afib). </strong>Afib is a type of arrhythmia. Afib makes it easier for your blood to clot because your heart cannot pump as well as it should. This can lead to heart failure or stroke. Afib symptoms include heart flutters and, a fast heartbeat <strong>as well as</strong> dizziness and shortness of breath.</li>
	<li><strong>Heart valve disease.</strong> Heart valve disease affects the valves that control blood flow in and out of different parts of the heart. A birth defect, older age, or an infection can cause your heart valves to not open fully or close completely. This causes the heart to work harder to pump blood. Heart valve disease can lead to stroke as well as heart failure, blood clots, or sudden cardiac arrest. Heart valve disease can cause problems during pregnancy, when your heart already has to work harder than usual to supply blood to your unborn baby. Your doctor can help you prevent problems during pregnancy if you know you have heart valve disease. But, some women do not find out that they have a heart valve problem until they get pregnant.<a href="#references"><sup>3</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What are some types of heart problems that affect women more than men? ",
      content: `

    <div class="answer"><p>Certain types of heart problems affect women more than men.</p>

<h3>Chest pain (angina)</h3>

<p>About 4 million women in the United States suffer from angina (chest pain and discomfort).<a href="#references"><sup>4</sup></a> Angina also affects men, but women are more likely than men to get two specific types of angina: stable and variant (Prinzmetal's) angina.</p>

<ul>
	<li><strong>Stable angina. </strong>This is the most common type of angina<strong>. </strong>Women with stable angina may experience chest pain during physical activity or times of stress. The chest pain usually goes away with rest. But it can develop into unstable angina, the type of angina that happens most often while you are resting or sleeping. Unstable angina can lead to a heart attack or cardiac arrest.</li>
	<li><strong>Variant (Prinzmetal's) angina. </strong>This type of unstable angina is rare. It is caused by a spasm in the coronary arteries, which carry blood to the heart muscle. Triggers for the spasm can include exposure to cold weather, stress, smoking, or cocaine use. The spasms can lead to painful attacks, often while you are resting or sleeping. This type of unstable angina rarely causes a heart attack and can be treated with medicine.</li>
</ul>

<h3>Cardiac syndrome X</h3>

<p>Cardiac syndrome X is a health problem that happens when people with healthy, unblocked arteries have chest pain (angina) and coronary artery spasms. A spasm is when the artery pinches itself closed.</p>

<p>The cause of cardiac syndrome X is not known. Some possible causes include:</p>

<ul>
	<li><strong>Coronary microvascular disease (MVD).</strong> In some women, cardiac syndrome X may be caused by MVD, a disease found in tiny arteries near the heart. These arteries are too small to see on an angiogram, a diagnostic test that takes X-ray pictures of the arteries. Women with cardiac syndrome X caused by MVD are often younger than 50 and have a higher risk for heart attack. MVD affects about half of women with cardiac syndrome X.<a href="#references"><sup>5</sup></a></li>
	<li><strong>Hormonal changes.</strong> Changes in estrogen levels after <a href="/glossary#menopause">menopause</a> could make women more likely to have heart problems. Most women with cardiac syndrome X are postmenopausal or are going through menopause.<a href="#references"><sup>6</sup></a></li>
</ul>

<h3>Broken heart syndrome</h3>

<p><a href="http://www.nhlbi.nih.gov/health/health-topics/topics/broken-heart-syndrome/" target="_blank">Broken heart syndrome</a>, also called stress-induced cardiomyopathy (or takotsubo cardiomyopathy), can happen even if you're healthy. Researchers do not know the exact cause of broken heart syndrome. Symptoms are often triggered by extreme stress, such as intense grief, anger, or surprise. Women are more likely than men to experience broken heart syndrome. Experts think that a surge of stress hormones "stuns" the heart, causing intense, short-lived symptoms that usually don't cause permanent damage to the heart.</p>

<p>Most women who experience broken heart syndrome are older, between 58 and 75 years old.<a href="#references"><sup>7</sup></a> This is probably due to a drop in estrogen levels after menopause.</p>

<p>Broken heart syndrome can be misdiagnosed as a heart attack. The symptoms and test results are similar, but there are no blocked heart arteries. Instead, a part of your heart temporarily enlarges while the rest of the heart works normally. Broken heart syndrome can lead to short-term heart failure, but it is usually easily treatable.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I know if I have heart disease?",
      content: `

    <div class="answer"><p>The most common symptom of heart disease is chest pain or discomfort. However, some women who have coronary artery disease (CAD) have no symptoms. This is called silent CAD. Silent CAD may not be diagnosed until a woman has symptoms of a&nbsp;<a href="http://www.nhlbi.nih.gov/health/health-topics/topics/heartattack/">heart attack</a>, <a href="http://www.nhlbi.nih.gov/health/health-topics/topics/hf/">heart failure</a>, or an <a href="http://www.nhlbi.nih.gov/health/health-topics/topics/arr/">arrhythmia</a>&nbsp;(irregular heartbeat).</p>

<p>The illustration in the sidebar shows the major symptoms of heart disease that affect most women.</p>

<p><strong>Call 911 right away if you have the symptoms of a heart attack.</strong> Talk to your doctor or nurse if you have any other symptoms of heart disease.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Sources",
      content: `

    <div class="answer"><ol>
	<li>Centers for Disease Control and Prevention. (2015). <a href="http://www.cdc.gov/nchs/data/dvs/lcwk1_2014.pdf">Causes of Death, All races, female, all ages-United States, 2014.</a> Detailed Tables for the National Vital Statistics Report.</li>
	<li>Bhupathy, P., Haines, C.D., Leinwand, L.A. (2010). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2836937/">Influence of sex hormones and phytoestrogens on heart disease in men and women.</a> <em>Women's Health; </em>6(1): 77-95.</li>
	<li>Stout, K., Otto, C.M. (2007). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1955531/">Pregnancy in women with valvular heart disease.</a> <em>Heart; </em>93(5): 552-558.</li>
	<li>American Heart Association. (2013) <a href="http://www.heart.org/idc/groups/heart-public/@wcm/@sop/@smd/documents/downloadable/ucm_319576.pdf" class="external-link external-popup" target="_blank">Statistical Fact Sheet 2013 Update: Women and Cardiovascular Diseases <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Reis, S.E., Holubkov, R., Conrad Smith, A.J., Kelsey, S.F., Sharaf, B.L., Reicheck, N., … WISE Investigators. (2001). <a href="http://www.ncbi.nlm.nih.gov/pubmed/11320360">Coronary microvascular dysfunction is highly prevalent in women with chest pain in the absence of coronary artery disease: results from the NHLBI WISE study</a><em>.</em> <em>American Heart Journal, 141(</em>5), 735–741.</li>
	<li>Kaski, J.C., Rosano, G.M., Collins, P., Nihoyannopoulos, P., Maseri, A., &amp; Poole-Wilson, P.A. (1995). <a href="http://www.ncbi.nlm.nih.gov/pubmed/7884081">Cardiac syndrome X: clinical characteristics and left ventricular function. Long-term follow-up study</a><em>.</em> <em>Journal of the American College of Cardiology, 25</em>(4), 807–814.</li>
	<li>Prasad, A., Lerman, A., &amp; Rihal, C. S. (2008). <a href="http://www.ncbi.nlm.nih.gov/pubmed/18294473">Apical ballooning syndrome (Tako-Tsubo or stress cardiomyopathy): a mimic of acute myocardial infarction</a>. <em>American Heart Journal, 155</em>(3), 408–417.</li>
</ol>
</div>
`,
    },
  ];
  return [condName, condImURL, condDescription, condHeader, condQA];
}

export function pcosScreening({ navigation, ...rest }) {
  const screeningTree = [
    {
      title: "PCOS Question1",
      content: (
        <Text
          h2
          style={{
            // marginVertical: theme.SIZES.BASE / 2,
            textAlign: "center",
            color: theme.COLORS.DEFAULT,
          }}
        >
          PCOS is hormonal disorder involving infrequent, irregular or prolonged
          menstrual periods, and often excess male hormone (androgen) levels.
          The ovaries develop numerous small collections of fluid — called
          follicles — and may fail to regularly release eggs.​,
        </Text>
      ),
    },
    {
      title: "PCOS Question2",
      content: (
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>Do you ever have irregular periods?​ </Text>
        </View>
      ),
    },
  ];
  return screeningTree;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 75,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center",
  },
  headerIcon: {
    justifyContent: "center",
    alignItems: "center",
  },

  outlinedButton: {
    marginBottom: theme.SIZES.BASE,
    // width: width - theme.SIZES.BASE * 8,

    borderRadius: theme.SIZES.BASE * 1.75,
    borderWidth: 1,
    borderColor: theme.COLORS.BASE,
  },
  outlinedButton: {
    marginBottom: theme.SIZES.BASE,
    // width: width - theme.SIZES.BASE * 8,
    borderRadius: theme.SIZES.BASE * 1.75,
    borderWidth: 2,
    borderColor: theme.COLORS.BASE,
    // backgroundColor: theme.COLORS.SECONDARY,
  },
});

// export default getTopic1;

//  use with getTopic1(...props)
