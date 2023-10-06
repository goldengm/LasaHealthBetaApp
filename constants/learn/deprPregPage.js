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

export function deprPregPage({ navigation, ...rest }) {
  const condName = "Postpartum depression";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Postpartumdepression.jpg?VersionId=GJNKIegWV_BAuV2FRJskuIpUvDucKUTT";
  const condDescription =
    "“Postpartum” means the time after childbirth. Most women get the “baby blues,” or feel sad or empty, within a few days of giving birth. For many women, the baby blues go away in 3 to 5 days. If your baby blues don’t go away or you feel sad, hopeless, or empty for longer than 2 weeks, you may have postpartum depression. Feeling hopeless or empty after childbirth is not a regular or expected part of being a mother. \n Postpartum depression is a serious mental illness that involves the brain and affects your behavior and physical health. If you have depression, then sad, flat, or empty feelings don’t go away and can interfere with your day-to-day life. You might feel unconnected to your baby, as if you are not the baby’s mother, or you might not love or care for the baby. These feelings can be mild to severe. \n Mothers can also experience anxiety disorders during or after pregnancy.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Postpartumdepression.jpg?VersionId=GJNKIegWV_BAuV2FRJskuIpUvDucKUTT"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Postpartum depression</h1>  -->
            <p><strong>Your body and mind go through many changes during and after pregnancy.</strong> If you feel empty, emotionless, or sad all or most of the time for longer than 2 weeks during or after pregnancy, reach out for help. If you feel like you don't love or care for your baby, you might have postpartum depression. Treatment for depression, such as therapy or medicine, works and will help you and your baby be as healthy as possible in the future.</p>

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
      title: "What is postpartum depression?",
      content: `

    <div class="answer"><p>“Postpartum” means the time after childbirth. Most women get the “baby blues,” or feel sad or empty, within a few days of giving birth. For many women, the baby blues go away in 3 to 5 days. If your baby blues don’t go away or you feel sad, hopeless, or empty for longer than 2 weeks, you may have postpartum depression. Feeling hopeless or empty after childbirth is not a regular or expected part of being a mother.</p>

<p>Postpartum depression is a serious mental illness that involves the brain and affects your behavior and physical health. If you have depression, then sad, flat, or empty feelings don’t go away and can interfere with your day-to-day life. You might feel unconnected to your baby, as if you are not the baby’s mother, or you might not love or care for the baby. These feelings can be mild to severe.</p>

<p>Mothers can also experience <a href="/mental-health/mental-health-conditions/anxiety-disorders">anxiety disorders</a> during or after pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common is postpartum depression?",
      content: `

    <div class="answer"><p>Depression is a common problem after&nbsp;<a href="/pregnancy">pregnancy</a>. One in 9 new mothers has postpartum depression.<a href="#references"><sup>1</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I know if I have postpartum depression?",
      content: `

    <div class="answer"><p>Some normal changes after pregnancy can cause symptoms similar to those of depression. Many mothers feel overwhelmed when a new baby comes home. But if you have any of the following symptoms of depression for more than 2 weeks, call your doctor, nurse, or midwife:</p>

<ul>
	<li>Feeling restless or moody</li>
	<li>Feeling sad, hopeless, or overwhelmed</li>
	<li>Crying a lot</li>
	<li>Having thoughts of hurting the baby</li>
	<li>Having thoughts of hurting yourself</li>
	<li>Not having any interest in the baby, not feeling connected to the baby, or feeling as if your baby is someone else’s baby</li>
	<li>Having no energy or motivation</li>
	<li>Eating too little or too much</li>
	<li>Sleeping too little or too much</li>
	<li>Having trouble focusing or making decisions</li>
	<li>Having memory problems</li>
	<li>Feeling worthless, guilty, or like a bad mother</li>
	<li>Losing interest or pleasure in activities you used to enjoy</li>
	<li>Withdrawing from friends and family</li>
	<li>Having headaches, aches and pains, or stomach problems that don’t go away</li>
</ul>

<p>Some women don’t tell anyone about their symptoms. New mothers may feel embarrassed, ashamed, or guilty about feeling depressed when they are supposed to be happy. They may also worry they will be seen as bad mothers. Any woman can become depressed during pregnancy or after having a baby. It doesn’t mean you are a bad mom. You and your baby don’t have to suffer. There is help. Your doctor can help you figure out whether your symptoms are caused by depression or something else.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes postpartum depression?",
      content: `

    <div class="answer"><p>Hormonal changes may trigger symptoms of postpartum depression. When you are pregnant, levels of the female hormones <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="ESS-truh-jen">estrogen</a> and <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="proh-JESS-tur-ohn">progesterone</a> are the highest they’ll ever be. In the first 24 hours after childbirth, hormone levels quickly drop back to normal, pre-pregnancy levels. Researchers think this sudden change in hormone levels may lead to depression.<a href="#references"><sup>2</sup></a> This is similar to hormone changes before a woman’s period but involves much more extreme swings in hormone levels.</p>

<p>Levels of thyroid hormones may also drop after giving birth. The thyroid is a small gland in the neck that helps regulate how your body uses and stores energy from food. Low levels of thyroid hormones can cause symptoms of depression. A simple blood test can tell whether this condition is causing your symptoms. If so, your doctor can prescribe thyroid medicine.</p>

<p>Other feelings may contribute to postpartum depression. Many new mothers say they feel:</p>

<ul>
	<li>Tired after labor and delivery</li>
	<li>Tired from a lack of sleep or broken sleep</li>
	<li>Overwhelmed with a new baby</li>
	<li>Doubts about their ability to be a good mother</li>
	<li>Stress from changes in work and home routines</li>
	<li>An unrealistic need to be a perfect mom</li>
	<li>Grief about loss of who they were before having the baby</li>
	<li>Less attractive</li>
	<li>A lack of free time</li>
</ul>

<p>These feelings are common among new mothers. But postpartum depression is a serious health condition and can be treated. Postpartum depression is not a regular or expected part of being a new mother.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some women more at risk of postpartum depression?",
      content: `

    <div class="answer"><p>Yes. You may be more at risk of postpartum depression if you:<a href="#references"><sup>3</sup></a></p>

<ul>
	<li>Have a personal history of depression or bipolar disorder</li>
	<li>Have a family history of depression or bipolar disorder</li>
	<li>Do not have support from family and friends</li>
	<li>Were depressed during pregnancy</li>
	<li>Had problems with a previous pregnancy or birth</li>
	<li>Have relationship or money problems</li>
	<li>Are younger than 20</li>
	<li>Have alcoholism, use illegal drugs, or have some other problem with drugs</li>
	<li>Have a baby with special needs</li>
	<li>Have difficulty breastfeeding</li>
	<li>Had an unplanned or unwanted pregnancy</li>
</ul>

<p>The U.S. Preventive Services Task Force recommends that doctors look for and ask about symptoms of depression during and after pregnancy, regardless of a woman’s risk of depression.<a href="#references"><sup>4</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What is the difference between “baby blues” and postpartum depression? ",
      content: `

    <div class="answer"><p>Many women have the baby blues in the days after childbirth. If you have the baby blues, you may:</p>

<ul>
	<li>Have mood swings</li>
	<li>Feel sad, anxious, or overwhelmed</li>
	<li>Have crying spells</li>
	<li>Lose your&nbsp;appetite</li>
	<li>Have trouble sleeping</li>
</ul>

<p>The baby blues usually go away in 3 to 5 days after they start. The symptoms of postpartum depression last longer and are more severe. Postpartum depression usually begins within the first month after childbirth, but it can begin during pregnancy or for up to a year after birth.<a href="#references"><sup>5</sup></a></p>

<p>Postpartum depression needs to be treated by a doctor or nurse.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is postpartum psychosis?",
      content: `

    <div class="answer"><p>Postpartum <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="seye-KOH-suhss">psychosis</a> is rare. It happens in up to 4 new mothers out of every 1,000 births. It usually begins in the first 2 weeks after childbirth. It is a medical emergency. Women who have bipolar disorder or another mental health condition called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="SKIT-soh-uh-FEK-tiv">schizoaffective</a> disorder have a higher risk of postpartum psychosis. Symptoms may include:</p>

<ul>
	<li>Seeing or hearing things that aren’t there</li>
	<li>Feeling confused most of the time</li>
	<li>Having rapid mood swings within several minutes (for example, crying hysterically, then laughing a lot, followed by extreme sadness)</li>
	<li>Trying to hurt yourself or your baby</li>
	<li>Paranoia (thinking that others are focused on harming you)</li>
	<li>Restlessness or agitation</li>
	<li>Behaving recklessly or in a way that is not normal for you</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I have symptoms of postpartum depression? ",
      content: `

    <div class="answer"><p>Call your doctor, nurse, midwife, or pediatrician if:</p>

<ul>
	<li>Your baby blues don’t go away after 2 weeks</li>
	<li>Symptoms of depression get more and more intense</li>
	<li>Symptoms of depression begin within 1 year of delivery and last more than 2 weeks</li>
	<li>It is difficult to work or get things done at home</li>
	<li>You cannot care for yourself or your baby (e.g., eating, sleeping, bathing)</li>
	<li>You have thoughts about hurting yourself or your baby</li>
</ul>

<p>Ask your partner or a loved one to call for you if necessary. Your doctor, nurse, or midwife can ask you questions to test for depression. They can also refer you to a mental health professional for help and treatment.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What can I do at home to feel better while seeing a doctor for postpartum depression?",
      content: `

    <div class="answer"><p>Here are some ways to begin feeling better or getting more rest, in addition to talking to a health care professional:</p>

<ul>
	<li>Rest as much as you can. Sleep when the baby is sleeping.</li>
	<li>Don’t try to do too much or to do everything by yourself. Ask your partner, family, and friends for help.</li>
	<li>Make time to go out, visit friends, or spend time alone with your partner.</li>
	<li>Talk about your feelings with your partner, supportive family members, and friends.</li>
	<li>Talk with other mothers so that you can learn from their experiences.</li>
	<li>Join a support group. Ask your doctor or nurse about groups in your area.</li>
	<li>Don’t make any major life changes right after giving birth. More major life changes in addition to a new baby can cause unneeded stress. Sometimes big changes can’t be avoided. When that happens, try to arrange support and help in your new situation ahead of time.</li>
</ul>

<p>It can also help to have a partner, a friend, or another caregiver who can help take care of the baby while you are depressed.&nbsp;If you are feeling depressed during pregnancy or after having a baby, don’t suffer alone. Tell a loved one and call your doctor right away.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is postpartum depression treated?",
      content: `

    <div class="answer"><p>The common types of treatment for postpartum depression are:</p>

<ul>
	<li><strong>Therapy.</strong> During therapy, you talk to a therapist, psychologist, or social worker to learn strategies to change how depression makes you think, feel, and act.</li>
	<li>
	<p><strong>Medicine.</strong> There are different types of medicines for postpartum depression. All of them must be prescribed by your doctor or nurse. The most common type is antidepressants. Antidepressants can help relieve symptoms of depression and some can be taken while you're breastfeeding. Antidepressants may take several weeks to start working.</p>

	<p>The Food and Drug Administration (FDA) has also approved a medicine called brexanolone to treat postpartum depression in adult women.<sup><a href="#references">6</a></sup> Brexanolone is given by a doctor or nurse through an IV for 2½ days (60 hours). Because of the risk of side effects, this medicine can only be given in a clinic or office while you are under the care of a doctor or nurse. Brexanolone may not be safe to take while pregnant or breastfeeding.</p>

	<p>Another type of medicine called esketamine can treat depression and is given as a nasal (nose) spray in a doctor's office or clinic. Esketamine can hurt an unborn baby. You should not take esketamine if you are pregnant or breastfeeding.</p>
	</li>
	<li><strong>Electroconvulsive therapy (ECT).</strong> This can be used in extreme cases to treat postpartum depression.</li>
</ul>

<p>These treatments can be used alone or together. Talk with your doctor or nurse about the benefits and risks of taking medicine to treat depression when you are pregnant or breastfeeding.</p>

<p>Having depression can affect your baby. Getting treatment is important for you and your baby. Taking medicines for depression or going to therapy does not make you a bad mother or a failure. Getting help is a sign of strength.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if postpartum depression is not treated?",
      content: `

    <div class="answer"><p>Untreated postpartum depression can affect your ability to parent. You may:</p>

<ul>
	<li>Not have enough energy</li>
	<li>Have trouble focusing on the baby's needs and your own needs</li>
	<li>Feel moody</li>
	<li>Not be able to care for your baby</li>
	<li>Have a higher risk of attempting suicide</li>
</ul>

<p>Feeling like a bad mother can make depression worse. It is important to <a href="/mental-health/get-help-now">reach out for help if you feel depressed</a>.</p>

<p>Researchers believe postpartum depression in a mother can affect her child throughout childhood, causing:<a href="#references"><sup>7</sup></a></p>

<ul>
	<li>Delays in language development and problems learning</li>
	<li>Problems with mother-child bonding</li>
	<li>Behavior problems</li>
	<li>More crying or agitation</li>
	<li>Shorter height<a href="#references"><sup>8</sup></a> and higher risk of obesity in pre-schoolers<a href="#references"><sup>9</sup></a></li>
	<li>Problems dealing with stress and adjusting to school and other social situations<a href="#references"><sup>10</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about postpartum depression?",
      content: `

    <div class="answer"><p>For more information about postpartum depression, call the OWH Helpline at 1-800-994-9662 or check out these resources from the following organizations:</p>

<ul>
	<li><a href="https://nichd.nih.gov/ncmhep/initiatives/moms-mental-health-matters/moms/Pages/default.aspx" title="Moms’ Mental Health Matters">Mom’s Mental Health Matters</a> — Initiative from the <em>Eunice Kennedy Shriver </em>National Institute of Child Health and Human Development’s National Child and Maternal Health Education Program.</li>
	<li><a href="http://www.apa.org/pi/women/resources/reports/postpartum-depression.aspx" title="What is postpartum depression and anxiety?" class="external-link external-popup" target="_blank">What is postpartum depression &amp; anxiety? <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Brochure from the American Psychological Association.</li>
	<li><a href="http://www.helpguide.org/articles/depression/postpartum-depression-and-the-baby-blues.htm" title="Postpartum Depression and the Baby Blues" class="external-link external-popup" target="_blank">Postpartum Depression and the Baby Blues: Signs Symptoms, Coping Tips, and Treatment <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from HelpGuide.org.</li>
</ul>
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
	<li>Ko, J.Y., Rockhill, K.M., Tong, V.T., Morrow, B., Farr, S.L. (2017). <a href="http://dx.doi.org/10.15585/mmwr.mm6606a1" class="external-link external-popup" target="_blank">Trends in Postpartum Depressive Symptoms — 27 States, 2004, 2008, and 2012 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>MMWR Morb Mortal Wkly Rep</em>; 66: 153–158.</li>
	<li>Schiller, C.E., Meltzer-Brody, S., Rubinow, D.R. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4363269/">The Role of Reproductive Hormones in Postpartum Depression</a>. <em>CNS Spectrums</em>; 20(1): 48–59.</li>
	<li>Sit, D.K., Wisner, K.L. (2009). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2736559/">The Identification of Postpartum Depression</a>. <em>Clinical Obstetrics and Gynecology</em>; 52(3): 456–468.</li>
	<li>U.S. Preventive Services Task Force. (2016). <a href="https://www.uspreventiveservicestaskforce.org/Page/Document/RecommendationStatementFinal/depression-in-adults-screening1" class="external-link external-popup" target="_blank">Depression in Adults: Screening <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Alhusen, J.L., Alvarez, C. (2016). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4841178/">Perinatal depression</a>. <em>The Nurse Practitioner</em>; 41(5): 50–55.</li>
	<li>U.S. Food and Drug Administration. (2019). <a href="https://www.fda.gov/NewsEvents/Newsroom/PressAnnouncements/ucm633919.htm">FDA approves first treatment for post-partum depression</a>.</li>
	<li>Stein, A., Perason, R.M., Goodman, S.H., Rapa, E., Rahman, A., McCallum, M., et al. (2014). <a href="https://www.ncbi.nlm.nih.gov/pubmed/25455250">Effects of perinatal mental disorders on the fetus and child</a>. <em>Lancet</em>; 384(9956): 1800–1819.</li>
	<li>Surkan, P.J., Ettinger, A.K., Hock, R.S., Ahmed, S., Strobino, D.M., Minkovitz, C.S. (2014). <a href="https://bmcpediatr.biomedcentral.com/articles/10.1186/1471-2431-14-185" class="external-link external-popup" target="_blank">Early maternal depressive symptoms and child growth trajectories: a longitudinal analysis of a nationally representative US birth cohort <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>BMC Pediatrics</em>; 14: 185.</li>
	<li>Benton, P.M., Skouteris, H., Hayden, M. (2015). <a href="http://www.sciencedirect.com/science/article/pii/S0195666314007880?via%3Dihub" class="external-link external-popup" target="_blank">Does maternal psychopathology increase the risk of pre-schooler obesity? A systematic review <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Appetite</em>; 87(1): 259–282.</li>
	<li>Korhonen, M., Luoma, I., Salmelin, R., Tamminen, T. (2014). <a href="https://www.ncbi.nlm.nih.gov/pubmed/24070429">Maternal depressive symptoms: Associations with adolescents' internalizing and externalizing problems and social competence</a>. <em>Nordic Journal of Psychiatry</em>; 68(5): 323–332.</li>
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
