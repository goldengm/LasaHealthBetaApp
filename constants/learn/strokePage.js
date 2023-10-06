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

export function strokePage({ navigation, ...rest }) {
  const condName = "Stroke";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Strokeandwomen.jpg?VersionId=gGGvvYKuKDWUJb5KqSiLy6K8lbQMk5Bs";
  const condDescription =
    "A stroke is sometimes called a 'brain attack.' Stroke happens when blood flow to a part of the brain stops or is blocked by a blood clot or plaque, and brain cells begin to die. \n There are two types of stroke: \n Stroke caused by a blockage of blood flow to the brain (ischemic [ih-SKEE-mik] stroke). This is the most common type of stroke. This type of stroke happens most often when an artery is clogged with plaque (atherosclerosis) or a blood clot. \n Stroke caused by bleeding into the brain (hemorrhagic [hem-uh-RAJ-ik] stroke). This type of stroke happens when a blood vessel in the brain bursts, and blood bleeds into the brain. This type of stroke can be caused by an aneurysm, which is a thin or weak spot in an artery that can burst. \n Both types of stroke can cause brain cells to die. Depending on which part of the brain the stroke affects, you may have problems with your speech, movement, balance, vision, or memory. \n If you think you are having a stroke, call 911.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    <div class="carousel landing-page-header">
  <div class="slick slick-carousel slick-initialized slick-slider slick-dotted" id="content-page-carousel">
              <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 4524px; transform: translate3d(-348px, 0px, 0px);"><div class="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" style="width: 348px;" tabindex="-1">
          
        <div class="background">
        <!--    <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/6_0.jpg?VersionId=kje.OsrxCZy8NCpHTF4nMNmL.22CaF6L" alt="woman working at desk">   -->
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          
      </div>
      </div>
          </div>
        </div>
      
      </article>`; //  this is html
  const condQA = [
    {
      title: "There are some other important ways that stroke affect women. ",
      content: `

<p>&nbsp;</p>

<p><a href="https://www.womenshealth.gov/heart-disease-and-stroke/stroke/stroke-and-women" tabindex="-1">Learn more about how stroke affects women.</a></p>
</div>
      
      </div>
  
        </div><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 348px;" tabindex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/1_1.jpg?VersionId=U3ZauajdYkOpOArbOe8aP4f1yIORzkFb" alt="happy couple smiling">
      </div>
      <div class="heading-description">
        
            <div class="field__item"><h1>How does stroke affect women differently than men?</h1>

<p>&nbsp;</p>

<p>Stroke affects women differently than men in several ways.</p>
</div>
      
      </div>
  
        </div><div class="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 348px;" tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/2_1.jpg?VersionId=Ku5d3gKNdrLj4lY0RY2shaCyLnmZHDot" alt="three women in white shirts">
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          `,
    },
    {
      title: "More women die from stroke than men.",
      content: `

<p>&nbsp;</p>

<ul>
	<li>More women have strokes later in life.<sup>1</sup></li>
	<li>After age 85, stroke affects many more women than men.<sup>1,2</sup></li>
	<li>It is twice as common for women between 20 and 39 to have a stroke than men of the same age.<sup>1</sup></li>
</ul>
</div>
      
      </div>
  
        </div><div class="slick-slide" data-slick-index="2" aria-hidden="true" style="width: 348px;" tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/3_1.jpg?VersionId=SY6CAEZqfcraruGbX7qU.Dkbm8rkba4_" alt="woman in hospital bed with doctor beside her">
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          `,
    },
    {
      title: "More women than men:",
      content: `

<p>&nbsp;</p>

<ul>
	<li>Have another stroke within 5 years of the first stroke<a href="https://www.womenshealth.gov/heart-disease-and-stroke/stroke/stroke-and-women/how-does-stroke-affect-women-differently-men#references" tabindex="-1"><sup>3</sup></a></li>
</ul>
</div>
      
      </div>
  
        </div><div class="slick-slide" data-slick-index="3" aria-hidden="true" style="width: 348px;" tabindex="-1" role="tabpanel" id="slick-slide03" aria-describedby="slick-slide-control03">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/4_1.jpg?VersionId=6JxRBvh.W6miGrDThhbATmefuFsjbojZ" alt="woman receiving medical treatment">
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          
          `,
    },
    {
      title: "Women have unique risk factors for stroke, such as:",
      content: `




<p>&nbsp;</p>

<ul>
	<li>History of problems during pregnancy like gestational diabetes or preeclampsia</li>
	<li>Use of hormonal birth control while smoking</li>
	<li>Use of menopausal hormone therapy during or after menopause &nbsp;</li>
</ul>
</div>
      
      </div>
  
        </div><div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 348px;" tabindex="-1" role="tabpanel" id="slick-slide04" aria-describedby="slick-slide-control04">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/5_1.jpg?VersionId=sg6HKGska2etyf.QC8b8hb.2OPDCBguh" alt="woman with hands to her temples">
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          
          `,
    },
    {
      title:
        "Some risk factors for stroke are more common in women than in men. ",
      content: `





<p>&nbsp;</p>

<ul>
	<li>These include migraine with aura, atrial fibrillation (irregular heartbeat), and diabetes.<sup>4&nbsp;</sup></li>
	<li>Learn more about <a href="https://www.womenshealth.gov/heart-disease-and-stroke/stroke/stroke-risk-factors" tabindex="-1">stroke risk factors that affect women</a>.</li>
</ul>
</div>
      
      </div>
  
        </div><div class="slick-slide" data-slick-index="5" aria-hidden="true" style="width: 348px;" tabindex="-1" role="tabpanel" id="slick-slide05" aria-describedby="slick-slide-control05">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/6_0.jpg?VersionId=kje.OsrxCZy8NCpHTF4nMNmL.22CaF6L" alt="woman working at desk">
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          
          `,
    },
    {
      title: "There are some other important ways that stroke affect women. ",
      content: `




<p>&nbsp;</p>

<p><a href="https://www.womenshealth.gov/heart-disease-and-stroke/stroke/stroke-and-women" tabindex="-1">Learn more about how stroke affects women.</a></p>
</div>
      
      </div>
  
        </div><div class="slick-slide slick-cloned" data-slick-index="6" id="" aria-hidden="true" style="width: 348px;" tabindex="-1">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/1_1.jpg?VersionId=U3ZauajdYkOpOArbOe8aP4f1yIORzkFb" alt="happy couple smiling">
      </div>
      <div class="heading-description">
        
            <div class="field__item"><h1>How does stroke affect women differently than men?</h1>

<p>&nbsp;</p>

<p>Stroke affects women differently than men in several ways.</p>
</div>
      
      </div>
  
        </div><div class="slick-slide slick-cloned" data-slick-index="7" id="" aria-hidden="true" style="width: 348px;" tabindex="-1">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/2_1.jpg?VersionId=Ku5d3gKNdrLj4lY0RY2shaCyLnmZHDot" alt="three women in white shirts">
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          
          `,
    },
    {
      title: "More women die from stroke than men.",
      content: `






<p>&nbsp;</p>

<ul>
	<li>More women have strokes later in life.<sup>1</sup></li>
	<li>After age 85, stroke affects many more women than men.<sup>1,2</sup></li>
	<li>It is twice as common for women between 20 and 39 to have a stroke than men of the same age.<sup>1</sup></li>
</ul>
</div>
      
      </div>
  
        </div><div class="slick-slide slick-cloned" data-slick-index="8" id="" aria-hidden="true" style="width: 348px;" tabindex="-1">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/3_1.jpg?VersionId=SY6CAEZqfcraruGbX7qU.Dkbm8rkba4_" alt="woman in hospital bed with doctor beside her">
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          
          `,
    },
    {
      title: "More women than men:",
      content: `





<p>&nbsp;</p>

<ul>
	<li>Have another stroke within 5 years of the first stroke<a href="https://www.womenshealth.gov/heart-disease-and-stroke/stroke/stroke-and-women/how-does-stroke-affect-women-differently-men#references" tabindex="-1"><sup>3</sup></a></li>
</ul>
</div>
      
      </div>
  
        </div><div class="slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true" style="width: 348px;" tabindex="-1">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/4_1.jpg?VersionId=6JxRBvh.W6miGrDThhbATmefuFsjbojZ" alt="woman receiving medical treatment">
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          
          `,
    },
    {
      title: "Women have unique risk factors for stroke, such as:",
      content: `






<p>&nbsp;</p>

<ul>
	<li>History of problems during pregnancy like gestational diabetes or preeclampsia</li>
	<li>Use of hormonal birth control while smoking</li>
	<li>Use of menopausal hormone therapy during or after menopause &nbsp;</li>
</ul>
</div>
      
      </div>
  
        </div><div class="slick-slide slick-cloned" data-slick-index="10" id="" aria-hidden="true" style="width: 348px;" tabindex="-1">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/5_1.jpg?VersionId=sg6HKGska2etyf.QC8b8hb.2OPDCBguh" alt="woman with hands to her temples">
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          
          
          `,
    },
    {
      title:
        "Some risk factors for stroke are more common in women than in men. ",
      content: `







<p>&nbsp;</p>

<ul>
	<li>These include migraine with aura, atrial fibrillation (irregular heartbeat), and diabetes.<sup>4&nbsp;</sup></li>
	<li>Learn more about <a href="https://www.womenshealth.gov/heart-disease-and-stroke/stroke/stroke-risk-factors" tabindex="-1">stroke risk factors that affect women</a>.</li>
</ul>
</div>
      
      </div>
  
        </div><div class="slick-slide slick-cloned" data-slick-index="11" id="" aria-hidden="true" style="width: 348px;" tabindex="-1">
          
        <div class="background">
          <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/2021-02/6_0.jpg?VersionId=kje.OsrxCZy8NCpHTF4nMNmL.22CaF6L" alt="woman working at desk">
      </div>
      <div class="heading-description">
        
            <div class="field__item">
          
          `,
    },
    {
      title: "There are some other important ways that stroke affect women. ",
      content: `






<p>&nbsp;</p>

<p><a href="https://www.womenshealth.gov/heart-disease-and-stroke/stroke/stroke-and-women" tabindex="-1">Learn more about how stroke affects women.</a></p>
</div>
      
      </div>
  
        </div></div></div>
              
              
              
              
              
        <ul class="slick-dots" style="" role="tablist"><li class="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 6" tabindex="0" aria-selected="true">1</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 6" tabindex="-1">2</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 6" tabindex="-1">3</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 6" tabindex="-1">4</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide04" aria-label="5 of 6" tabindex="-1">5</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control05" aria-controls="slick-slide05" aria-label="6 of 6" tabindex="-1">6</button></li></ul></div>
</div>
<div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    
    `,
    },
    {
      title: "Sources ",
      content: `






    <div class="answer expanded"><ol>
	<li>Benjamin, E. J., Virani, S. S., Callaway, C. W., Chamberlain, A. M., Chang, A. R., Cheng, S., … Muntner, P. (2018). <a href="http://circ.ahajournals.org/content/early/2018/01/30/CIR.0000000000000558" class="external-link external-popup" target="_blank">Heart Disease and Stroke Statistics—2018 Update: A Report From the American Heart Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Circulation</em>, <em>137</em>, e67–e492.</li>
	<li>Ahnstedt, H., McCullough, L. D., &amp; Cipolla, M. J. (2016). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4929018/">The Importance of Considering Sex Differences in Translational Stroke Research</a>.&nbsp;<em>Translational Stroke Research</em>,<em>&nbsp;7</em>(4), 261–273.</li>
	<li>Persky, R. W., Turtzo, L. C., &amp; McCullough, L. D. (2010).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861793/" target="_blank">Stroke in women: disparities and outcomes</a>.&nbsp;<em>Current Cardiology Reports, 12</em>(1), 6–13.</li>
	<li>Bushnell, C. A., McCullough, L. D., Awad, I. A., Chireau, M. V., Fedder, W. N., Furie, K. L., … Walters, M. R. (2014).&nbsp;<a href="http://stroke.ahajournals.org/content/early/2014/02/06/01.str.0000442009.06663.48" target="_blank" class="external-link external-popup">Guidelines for the Prevention of Stroke in Women. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;<em>Stroke,</em><em>&nbsp;47</em>(9).</li>
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
