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

export function mecfsPage({ navigation, ...rest }) {
  const condName = "Myalgic encephalomyelitis/chronic fatigue syndrome";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-publi…me.jpg?VersionId=bu8XSjQOYteG3XDgFvqeZdSyiCC.kubH";
  const condDescription =
    "ME/CFS is a complex, debilitating illness. ME/CFS may be diagnosed after six months or more of extreme fatigue that is not improved by bed rest and that may get worse after activities that use physical or mental energy. \n Symptoms affect different parts of the body and can include unrefreshing sleep, weakness, muscle and joint pain, problems with concentration or memory, and headaches. Symptoms may be mild to severe. They may come and go, or they may last for weeks, months, or years. They also can happen over time or come on suddenly.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Chronicfatiguesyndrome.jpg?VersionId=bu8XSjQOYteG3XDgFvqeZdSyiCC.kubH"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Chronic fatigue syndrome</h1>  -->
            <p><strong>Chronic fatigue syndrome (CFS), </strong>also referred to as myalgic encephalomyelitis (ME) or ME/CFS, is a complex, chronic illness that affects about 1 million Americans. Women are two to four times more likely than men to be diagnosed with ME/CFS. People with ME/CFS experience a range of symptoms that makes it hard to do the daily tasks that most of us do without thinking — like dressing or bathing. Currently, there are no Food and Drug Administration-approved treatments specific for ME/CFS. Usually, treatments focus on relieving the symptoms.</p>

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
      title: "What is ME/CFS?",
      content: `

    <div class="answer"><p>ME/CFS is a complex, debilitating illness. ME/CFS may be diagnosed after six months or more of extreme fatigue that is not improved by bed rest and that may get worse after activities that use physical or mental energy.</p>

<p>Symptoms affect different parts of the body and can include unrefreshing sleep, weakness, muscle and joint pain, problems with concentration or memory, and headaches. Symptoms may be mild to severe. They may come and go, or they may last for weeks, months, or years. They also can happen over time or come on suddenly.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes ME/CFS?",
      content: `

    <div class="answer"><p>No one knows for sure what causes ME/CFS. Many people say it started after a flu-like illness or other infection, such as a cold or stomach bug. It also can follow infection with the Epstein-Barr virus (the virus that causes mononucleosis or "mono"). Some people with ME/CFS report that it started after a time of great physical stress, such as following surgery.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of ME/CFS?",
      content: `

    <div class="answer"><p>The symptoms of ME/CFS can come and go or a person may have these symptoms all of the time. At first, one may feel like she has the flu. The main symptoms include:</p>

<ul>
	<li>Feeling extremely exhausted for more than 24 hours after physical or mental exercise</li>
	<li>Not feeling refreshed after sleeping, or having trouble sleeping</li>
	<li>Having a hard time concentrating, or problems with attention and memory</li>
	<li>Feeling dizzy or faint when sitting up or standing (due to a drop in blood pressure)</li>
	<li>Muscle pain or aches</li>
	<li>Pain or aches in joints without swelling or redness</li>
	<li>Headaches of a new type, pattern, or strength</li>
	<li>Tender lymph nodes in the neck or under the arm</li>
	<li>Sore throat that is constant or goes away and comes back often</li>
</ul>

<p>Less-common symptoms of ME/CFS include:</p>

<ul>
	<li>Visual problems (blurring, sensitivity to light, eye pain)</li>
	<li>Psychological symptoms (irritability, mood swings, panic attacks, anxiety)</li>
	<li>Chills and night sweats</li>
	<li>Low grade fever or low body temperature</li>
	<li>Irritable bowel</li>
	<li>Allergies and sensitivities to foods, odors, chemicals, medications, and sound</li>
	<li>Numbness, tingling, or burning sensations in the face, hands, or feet</li>
</ul>

<p>Symptoms of ME/CFS vary widely from person to person and may be serious or mild. Most symptoms are invisible to others, which can make it hard for friends, family members, and the public to understand the challenges a person with ME/CFS faces. If you think you may have ME/CFS, talk to your doctor.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common is ME/CFS?",
      content: `

    <div class="answer"><p>Experts think ME/CFS affects about 1 million Americans. Many of these cases have not been diagnosed.</p>

<p>Women are two to four times more likely than men to develop ME/CFS. Children do develop ME/CFS, but not as often as adults or adolescents.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is ME/CFS diagnosed?",
      content: `

    <div class="answer"><p>Because many symptoms of ME/CFS are also symptoms of other illnesses or side effects of medicine, your doctor will need to do physical exams and tests to help determine if you have ME/CFS. There are no standard lab tests to diagnose ME/CFS.</p>

<p>If you think you may have ME/CFS, see your doctor. Your doctor may:</p>

<ul>
	<li>Ask you about your physical and mental health.</li>
	<li>Do a physical exam.</li>
	<li>Order lab tests based on your symptoms, such as urine and blood tests, which will tell your doctor if something other than ME/CFS might be causing your symptoms.</li>
	<li>Order tests that check for problems found in people with ME/CFS.</li>
	<li>Classify you as having ME/CFS if:
	<ol>
		<li>You have the main symptoms of ME/CFS, including extreme fatigue or exhaustion that does not go away and that prevents you from doing the things you want and need to do for you and your family; exhaustion that comes after mental or physical exercise; sleep problems; and pain; <strong>AND</strong></li>
		<li>You have had the extreme fatigue and other symptoms for 6 months or longer (3 months or longer for children and adolescents); <strong>AND</strong></li>
		<li>You and your doctor cannot find another explanation for your symptoms.</li>
	</ol>
	</li>
</ul>

<p>The process to make a final diagnosis of ME/CFS can take a long time, so try to be patient. It is usually best to develop a relationship — and follow up often — with one doctor so that he or she can get to know you and see how you respond to treatment over time.</p>

<p>While these tests are being done, talk to your doctor about ways to ease your symptoms. Your doctor may also need to learn more about ME/CFS to help you. If you feel your doctor has doubts about it being a "real" illness, share this document and the links to resources found at the end. If disbelief or doubts continue, consider seeing another doctor for a&nbsp;second opinion. Contact a local university medical school, research center, or one of the resources listed below for help finding a doctor who treats people with ME/CFS.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is ME/CFS treated?",
      content: `

    <div class="answer"><p>Right now, there is no cure or FDA-approved treatments for ME/CFS. But, there are things you and your doctor can do to help ease your symptoms. Because the symptoms of ME/CFS vary from person to person, the management plan you discuss with your doctor may look very different from the plan of another person with ME/CFS.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Can complementary or alternative medicine help manage the symptoms of ME/CFS?",
      content: `

    <div class="answer"><p>Some people say that complementary or alternative medicine has helped their ME/CFS symptoms. Keep in mind that many alternative treatments, dietary supplements, and herbal remedies claim to cure ME/CFS, but some might do more harm than good. Talk to your doctor before trying alternative therapies to be sure they're safe.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can I do to cope with ME/CFS?",
      content: `

    <div class="answer"><p>Talking about your feelings with a friend or family member can help. Sometimes it also helps to talk with people who are going through the same thing. Consider joining an ME/CFS support group. See the "ME/CFS Organizations" section at the end of this fact sheet for a list of organizations that offer additional information on ME/CFS and can help you find ME/CFS support groups.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will I still be able to work with ME/CFS?",
      content: `

    <div class="answer"><p>Research shows that about half of people with ME/CFS work part-time or full-time jobs. For some people with ME/CFS, the ability to work is possible thanks to a supportive employer and certain workplace accommodations, including a flexible schedule, a quiet comfortable place to rest, and memory aids.</p>

<p>But, if you can't work because of ME/CFS, you may be eligible for Social Security benefits. Learn more about <a href="https://www.cdc.gov/me-cfs/resources/disability.html" title="Fact Sheet: Providing Medical Evidence to SSA for Individuals with Chronic Fatigue Syndrome - Guide for Health Professionals">applying for disability through the Social Security Administration</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "I don't have insurance. How can the Affordable Care Act help me? ",
      content: `

    <div class="answer"><p>If you're uninsured or have been denied coverage in the past for ME/CFS, the Health Insurance Marketplace may be able to provide you with access to affordable coverage. With health insurance plans in the Marketplace, you can no longer be refused coverage just because you have a pre-existing health condition.&nbsp;<a href="https://www.healthcare.gov/do-i-qualify-for-medicaid" title="How to Qualify For Medicaid and CHIP Health Care Coverage">Medicaid</a>&nbsp;and the&nbsp;<a href="https://www.healthcare.gov/are-my-children-eligible-for-chip" title="Children's Health Insurance Program (CHIP) Eligibility Requirements">Children's Health Insurance Program (CHIP)</a>&nbsp;also can't refuse to cover you or charge you more because of a health condition. They also can't charge women more than men. Learn more about the Affordable Care Act and the Health Insurance Marketplace at&nbsp;<a href="https://www.healthcare.gov/" title="Health Insurance Marketplace">Healthcare.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the latest research on ME/CFS?",
      content: `

    <div class="answer"><p>Today, we have a better understanding of ME/CFS, but researchers are still searching for the cause(s). ME/CFS is sometimes seen in members of the same family, perhaps because of a genetic link. Researchers are also testing a variety of treatments for ME/CFS, including anti-viral medications and medications that affect the immune system.</p>

<p>Researchers also are looking at ways to help health care providers identify and diagnose ME/CFS more quickly. HHS currently supports a&nbsp;<a href="https://www.hhs.gov/advcomcfs/index.html" title="Chronic Fatigue Syndrome Advisory Committee (CFSAC)">study led by the Institute of Medicine (IOM)</a>&nbsp;to recommend improved and updated criteria to help physicians make a diagnosis of ME/CFS. The IOM's recommendations may also guide future research.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about ME/CFS?",
      content: `

    <div class="answer"><p>For more information on ME/CFS, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<h3>Federal Government</h3>

<ul>
	<li><strong>Agency for Healthcare Research and Quality (AHRQ)</strong>

	<ul>
		<li><strong><a href="http://www.guideline.gov/content.aspx?id=38316" title="National Guideline Clearinghouse | Chronic fatigue syndrome/myalgic encephalomyelitis. A primer for clinical practitioners.">Chronic fatigue syndrome/myalgic encephalomyelitis. A primer for clinical practitioners</a></strong></li>
	</ul>
	</li>
	<li><a href="http://www.cdc.gov/cfs/" title="CDC - Chronic Fatigue Syndrome (CFS)"><strong>Centers for Disease Control and Prevention (CDC)</strong></a><br>
	Phone Number: 800-232-4636</li>
	<li><strong><a href="https://www.hhs.gov/advcomcfs/index.html" title="Chronic Fatigue Syndrome Advisory Committee (CFSAC)">Chronic Fatigue Syndrome Advisory Committee, HHS</a></strong></li>
	<li><strong>Social Security Administration</strong>
	<ul>
		<li><strong><a href="http://www.socialsecurity.gov/OP_Home/rulings/di/01/SSR2014-01-di-01.html" title="SSR 14-1p: Titles II and XVI: Evaluating Cases Involving Chronic Fatigue Syndrome (CFS)">Revised Social Security Ruling about Evaluating Cases Involving Chronic Fatigue Syndrome for Social Security Disability</a></strong></li>
	</ul>
	</li>
	<li><strong><a href="https://www.nih.gov/mecfs" title="Trans-NIH Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS) Research Working Group">Trans-NIH ME/CFS Research Working Group</a>, NIH</strong></li>
</ul>

<h3>ME/CFS Organizations</h3>

<ul>
	<li><a href="http://www.iacfsme.org/" title="IACFSME Home" class="external-link external-popup" target="_blank"><strong>International Association for CFS/ME</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 847-258-7248</li>
	<li><a href="http://www.masscfids.org/" title="Massachusetts CFIDS/ME &amp; FM Association Home" class="external-link external-popup" target="_blank"><strong>Massachusetts CFIDS/ME &amp; FM Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 617-471-5559</li>
	<li><strong><a href="http://www.njcfsa.org/" title="New Jersey ME/CFS Association" class="external-link external-popup" target="_blank">New Jersey ME/CFS Association, Inc. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong></li>
	<li>Email:&nbsp;<a href="mailto:helpdesk@njcfsa.org">helpdesk@njcfsa.org</a></li>
	<li><strong><a href="https://batemanhornecenter.org/" title="OFFER Website" class="external-link external-popup" target="_blank">Bateman Horne Center <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong></li>
	<li><strong><a href="http://www.pandoraorg.net/" title="PANDORA Home Page" class="external-link external-popup" target="_blank">Patient Alliance for Neuro-endocrine-immune Disorders Organization for Research and Advocacy (PANDORA) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	Phone Number: 231-360-6830</li>
	<li><a href="http://www.phoenixrising.me/" title="Phoenix Rising — A Chronic Fatigue Syndrome (ME/CFS) and NeuroEndocrineImmune (NEI) Conditions Website" class="external-link external-popup" target="_blank"><strong>Phoenix Rising</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><strong><a href="http://www.rmcfa.org/index.html" title="RMCFA - ME/CFS - Fibromyalgia (FMS) education, advocacy, awareness and support center" class="external-link external-popup" target="_blank">Rocky Mountain CFS/ME &amp; FM Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	Phone Number: 303-423-7367</li>
	<li><strong><a href="http://www.solvecfs.org/" title="Solve ME/CFS Initiative | Leveraging patient-centered research to cure ME/CFS" class="external-link external-popup" target="_blank">Solve ME/CFS Initiative <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	Phone Number: 704-365-2343</li>
	<li><a href="http://www.wicfs-me.org/" title="WI ME/CFS ASSOCIATION, INC." class="external-link external-popup" target="_blank"><strong>Wisconsin ME/CFS Association, Inc.</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 608-834-1001</li>
</ul>

<h3>ME/CFS Research Institutes</h3>

<ul>
	<li><a href="http://www.nova.edu/nim/index.html" title="Institute for Neuro Immune Medicine | Nova Southeastern University" class="external-link external-popup" target="_blank"><strong>Institute for Neuro Immune Medicine at Nova Southeastern University</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 800-541-6682</li>
	<li><strong><a href="http://www.cfsknowledgecenter.ning.com/" title="ME-CFSCommunity.com" class="external-link external-popup" target="_blank"><em>ME-CFS</em>Community <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong></li>
	<li><a href="http://www.openmedicinefoundation.org/" title="Neuro Immune Disease, Fundraising for a Cure / OMF- Open Medicine Foundation" class="external-link external-popup" target="_blank"><strong>Open Medicine Foundation</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 650-351-0310</li>
	<li><a href="http://www.simmaronresearch.com/" title="Home | Simmaron ResearchSimmaron Research" class="external-link external-popup" target="_blank"><strong>Simmaron Research</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 775-298-0030</li>
	<li><a href="https://med.stanford.edu/chronicfatiguesyndrome.html" title="Stanford ME/CFS Initiative - Department of Medicine - School of Medicine - Stanford Medicine" class="external-link external-popup" target="_blank"><strong>Stanford ME/CFS Initiative</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://nvcbr.org" title="Nevada Center for Biomedical Research" class="external-link external-popup" target="_blank"><strong>Nevada Center for Biomedical Research</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 775-682-8250</li>
</ul>
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
