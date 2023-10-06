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

export function mentalPage({ navigation, ...rest }) {
  const condName = "Mental Health";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/styles/large/public/bucket-images/Goodmentalhealth.jpg?VersionId=HtWSdpoWRdby9cs0paE6Y7O8Apn7Xzck&itok=bn0NS12v";
  const condDescription =
    "Good mental health is essential to overall well-being. More than 1 in 5 women in the United States experienced a mental health condition in the past year, such as depression or anxiety.1 Many mental health conditions, such as depression and bipolar disorder, affect more women than men or affect women in different ways from men.2,3 Most serious mental health conditions cannot be cured. But they can be treated, so you can get better and live well.4";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/HowdoIknowifIhaveamentalhealthcondition.jpg?VersionId=_u0ZMXwKM1myXcbiD2dnUG3DFle4PzAr"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>How do I know if I have a mental health condition?</h1>  -->
            <p><strong>Understanding what is considered "normal" mental health can be difficult. </strong>For example, when does nervousness become a phobia? When does "just feeling sad" become depression, which is a serious condition? A mental health professional can help you figure out whether you have a mental health condition. If you do, treatment can help you feel better. People can and do recover from mental health conditions.</p>

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
      title: "How can I tell if I have a mental health condition? ",
      content: `

    <div class="answer expanded"><p>If you’re experiencing a change in your thoughts, behaviors, or moods that is interfering with your work or relationships for longer than 2 weeks, you may have a mental health condition. It can be difficult to tell whether you have a mental health condition if you feel sadness, anxiety, or other intense emotions most of the time. Many mental health conditions first appear early in life, usually before 25 years old.</p>

<p><a href="#3">Symptoms of a mental health condition</a>&nbsp;can include extreme anxiety most of the time, feelings of hopelessness about everything, or drug or alcohol abuse.</p>

<p>If you are in any doubt about your mental health, reach out to your doctor or nurse, a mental health professional, or a trusted loved one for help. If you have health insurance, this type of health care might be called “behavioral health” by your insurance plan. Many insurance plans call problems with drug or alcohol misuse “substance abuse” services.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are mental health conditions really medical problems?",
      content: `

    <div class="answer"><p>Yes. Mental health conditions are medical problems and can have just as big an effect on your life as physical problems. Researchers know that the brains of people with mental health conditions often work differently from others. Some mental health conditions are related to higher or lower levels of certain brain chemicals. Events such as violence, abuse, and other traumatic experiences can make mental health conditions worse or more difficult to manage.</p>

<p>Many people with mental health conditions may be embarrassed to talk to a counselor or doctor or nurse about mental health or may think it’s a sign of weakness. But mental health conditions are health problems just like physical illnesses, and getting help when you need it is actually a sign of strength. If you are concerned about your mental health, do not hesitate to <a href="/relationships-and-safety/get-help">talk to someone or get help</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of a mental health condition?",
      content: `

    <div class="answer"><p>Talk to a mental health professional if you are experiencing:</p>

<ul>
	<li>A lack of interest in things that you used to enjoy</li>
	<li>Crying spells</li>
	<li>Lack of motivation</li>
	<li>Inability to concentrate</li>
	<li>Significant changes in your eating or sleeping patterns</li>
	<li>An inability to cope with problems or daily activities</li>
	<li>More anxiety than usual over events or situations</li>
	<li>Feelings of hopelessness</li>
	<li>Sudden changes in your personality for no reason</li>
	<li>An inability to stop thinking about certain ideas or memories</li>
	<li>Sadness for longer than 2 weeks</li>
	<li>Thoughts about suicide (call 911 if you are in immediate danger)</li>
	<li>Drug or alcohol abuse or illegal use of prescription drugs</li>
	<li>Extreme mood swings</li>
	<li>Violent behavior or a lot of anger or hostility</li>
	<li>Hearing voices or seeing things that other people don’t hear or see</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are mental health conditions diagnosed?",
      content: `

    <div class="answer"><p>There is no one test for mental health conditions. Your doctor, nurse, or a mental health professional may ask you about your symptoms and experiences and how long you’ve had them and talk with you about ways to deal with them.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are mental health conditions treated?",
      content: `

    <div class="answer"><p>Treatment for a mental health condition depends on the specific condition and how severe it is. Your doctor, nurse, or therapist may give you medicine, or your doctor or nurse may refer you for therapy, or do both. In very rare but serious cases when your life is in danger, such as a suicide attempt, you may need to stay at a hospital or other treatment facility.</p>

<p>There are also different types of therapy for different types of mental health conditions. For example, phobias (fears of specific things or situations that make a person avoid everyday activities) are treated differently from depression. Certain types of therapy can teach you skills to retrain how you think or act.</p>

<p>Other types of support that can help include building life skills (such as how to find a job or a place to live), learning how to manage your thoughts, eating healthy and exercising, finding a new community (such as a place of worship or a hobby group), and joining support groups.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does mental health treatment work?",
      content: `

    <div class="answer"><p>Yes, people can get better with treatment and other types of support. Different types of supports and treatments might work for different people. Try different types of treatment and support until you find what works for you. You may need to try different approaches at different times in life.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I help make my treatment work?",
      content: `

    <div class="answer"><p>If you have been diagnosed with a mental health condition, it’s important that you follow the advice of your mental health professional. You may need more than one treatment or a different treatment if your symptoms do not get better.</p>

<ul>
	<li><strong>Take your medicines as directed.</strong> Some medicines take time to work. Medicines may also have side effects. Work with your doctor or nurse to find the medicine that works best for you. Some people stop taking the medicine once they start feeling better, but this can be risky. Stopping a medicine very suddenly may cause serious side effects, including thoughts of suicide. Try not to stop taking medicine without talking to your doctor or nurse first. If you have concerns about your medicine, let your doctor or nurse know so you can work together to adjust the amount of medicine or find a different medicine.</li>
	<li><strong>Participate fully in therapy.</strong> Therapy, sometimes called “talk therapy,” works best when you attend sessions as scheduled, are honest with yourself and your therapist, and do any “homework” between sessions.</li>
	<li><strong>Reach out to friends and family or others for support.</strong> You are not alone. There are people who want to help you. If you are having thoughts about hurting yourself or someone else, call the&nbsp;<a href="http://www.suicidepreventionlifeline.org/" class="external-link external-popup" target="_blank">National Suicide Prevention Lifeline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;at 1-800-273-TALK (8255).</li>
	<li><strong>Learn steps you can take to stay mentally healthy.</strong> Get enough sleep, make healthy eating choices, and get regular physical activity. Learn more <a href="/mental-health/good-mental-health/steps-good-mental-health">steps you can take to support good mental health</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will the medicine I take make me gain weight?",
      content: `

    <div class="answer"><p>Maybe. Some medicines that doctors prescribe for mental health conditions can make women more likely to gain weight than other types of medicine. This may be due to how your body processes the medicine. It may also be because getting treatment for a mental health condition can improve your appetite if you weren’t eating well before treatment.<a href="#references"><sup>1</sup></a></p>

<p>The most common medicines linked to weight gain are a type of medicine called antipsychotics, often used to treat schizophrenia (a serious mental health condition). Some antidepressants and mood stabilizers, which can be used to treat depression and bipolar disorder, can also increase the chances of gaining weight.<a href="#references"><sup>2</sup></a></p>

<p>All medicines have risks. Talk to your doctor or nurse about the benefits and risks of your medicines. If you’re concerned about gaining weight from your medicine, talk to your doctor or nurse about whether a different medicine or treatment method may work better.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get help paying for mental health treatment?",
      content: `

    <div class="answer"><p>Most health insurance plans cover mental health treatment in the same ways they cover medical or surgical treatments. There is not a different <a href="https://www.healthcare.gov/glossary/co-payment/" title="Heathcare.gov co-payment">copay</a>, <a href="https://www.healthcare.gov/glossary/co-insurance/" title="Healthcare.gov coinsurance">coinsurance</a>, or <a href="https://www.healthcare.gov/glossary/deductible/" title="Healthcare.gov deductible">deductible</a>&nbsp;for mental health treatment.</p>

<ul>
	<li>If you have insurance, check with your insurance provider to find out what’s included in your plan. If you have insurance through your employer, you may be able to get help through an employee assistance program (EAP). Through your EAP, you may be able to get short-term counseling for stress, mental health symptoms, and substance abuse.</li>
	<li>If you have <a href="https://www.medicaid.gov/medicaid/benefits/bhs/index.html" title="Behavioral Health Services">Medicaid</a>, your plan will&nbsp;provide some mental health services. Some plans offer substance use disorder services.</li>
	<li>If you have <a href="https://www.medicare.gov/Pubs/pdf/10184-Medicare-Mental-Health-Bene.pdf" title="Medicare &amp; Your Mental Health Benefits">Medicare</a>, your plan may help cover mental health services, including hospital stays, visits to a therapist, and medicines you may need.</li>
</ul>

<p>If you do not have insurance, use the <a href="https://findtreatment.samhsa.gov" title="Behavioral Health Treatment Services Locator">mental health services locator</a>&nbsp;on this page to find free or low-cost care on a sliding scale according to your income.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Did we answer your question about knowing if you have a mental health condition?",
      content: `

    <div class="answer"><p>For more information about knowing whether you have a mental health condition, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://www.nami.org/Learn-More/Know-the-Warning-Signs" class="external-link external-popup" target="_blank">Know the Warning Signs <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the National Alliance on Mental Illness.</li>
	<li><a href="http://www.mentalhealthamerica.net/recognizing-warning-signs" class="external-link external-popup" target="_blank">Mental Illness and the Family: Recognizing Warning Signs and How to Cope <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from Mental Health America.</li>
	<li><a href="https://www.samhsa.gov/treatment/mental-disorders">Treatments for Mental Disorders</a>&nbsp;— Information on types of mental disorders, including signs and symptoms, from the Substance Abuse and Mental Health Services Administration.</li>
	<li><a href="https://www.psychiatry.org/patients-families/warning-signs-of-mental-illness" class="external-link external-popup" target="_blank">Warning Signs of Mental Illness <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the American Psychiatric Association.</li>
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
	<li>Sathyanarayana Rao, T.S., Asha, M.R., Ramesh, B.N., Jagannatha Rao, K.S. (2008). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2738337/">Understanding nutrition, depression, and mental illnesses</a>. <em>Indian Journal of Psychiatry</em>; 50(2): 77–82.</li>
	<li>Correll, C.U., Detraux, J., De Lepeleire, J., De Hert, M. (2015). <a href="https://www.ncbi.nlm.nih.gov/pubmed/26043321">Effects of antipsychotics, antidepressants and mood stabilizers on risk for physical diseases in people with schizophrenia, depression and bipolar disorder</a>. <em>World Psychiatry</em>; 14(2): 119–136.</li>
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
