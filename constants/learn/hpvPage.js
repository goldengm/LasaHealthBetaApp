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

export function hpvPage({ navigation, ...rest }) {
  const condName = "Human papillomavirus";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Humanpapillomavirus.jpg?VersionId=v7DohK5pZsgyXtMdlHAGkCA4hyC4y.uO";
  const condDescription =
    "Human papillomavirus, or HPV, is the most common sexually transmitted infection (STI) in the United States. About 80% of women will get at least one type of HPV at some point in their lifetime.1 It is usually spread through vaginal, oral, or anal sex. Many women do not know they have HPV, because it usually has no symptoms and usually goes away on its own. Some types of HPV can cause illnesses such as genital warts or cervical cancer. There is a vaccine to help you prevent HPV.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Humanpapillomavirus.jpg?VersionId=v7DohK5pZsgyXtMdlHAGkCA4hyC4y.uO"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Human papillomavirus</h1>  -->
            <p><strong>Human <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="pap-uh-LOH-muh-veye-ruhss">papillomavirus</a>, or HPV, is the most common <a href="/a-z-topics/sexually-transmitted-infections" title="Sexually transmitted infections (STIs)">sexually transmitted infection (STI)</a> in the United States.</strong> About 80% of women will get at least one type of HPV at some point in their lifetime.<sup><a href="#references">1</a></sup> It is usually spread through vaginal, oral, or anal sex. Many women do not know they have HPV, because it usually has no symptoms and usually goes away on its own. Some types of HPV can cause illnesses such as genital warts or cervical cancer. There is a vaccine to help you prevent HPV.</p>

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
      title: "What is human papillomavirus (HPV)?",
      content: `

    <div class="answer"><p>HPV is the name for a group of viruses that includes more than 100 types. More than 40 types of HPV can be passed through sexual contact. The types that infect the genital area are called genital HPV.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets HPV?",
      content: `

    <div class="answer"><p>Genital HPV is the most common STI in the United States for both women and men. About 79 million Americans have HPV.<sup><a href="#references">2</a></sup> It is so common that 80% of women will get at least one type of HPV at some point in their lifetime.<sup><a href="#references">1</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get HPV?",
      content: `

    <div class="answer"><p>HPV is spread through:</p>

<ul>
	<li>Vaginal, oral, or anal sex. HPV can be spread even if there are no symptoms. This means you can get HPV from someone who has no signs or symptoms.</li>
	<li>Genital touching. A man does not need to ejaculate (come) for HPV to spread. HPV can also be passed between women who have sex with women.</li>
	<li>Childbirth from a woman to her baby</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of HPV?",
      content: `

    <div class="answer"><p>Most people with HPV do not have any symptoms. This is one reason why women need regular <a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap tests</a>. Experts recommend that you get your first Pap test at age 21.<sup><a href="#references">3</a></sup> The Pap test can find changes on the cervix caused by HPV. If you are a woman between ages 30 and 65, your doctor might also do an HPV test with your Pap test every five years. This is a DNA test that detects most types of HPV.</p>

<p>Another way to tell if you have an HPV infection is if you have <a href="/publications/our-publications/fact-sheet/genital-warts.html" title="Genital warts | womenshealth.gov">genital warts</a>. Genital warts usually appear as a small bump or group of bumps in the genital area. They can be small or large, raised or flat, or shaped like a cauliflower. Doctors can usually diagnose warts by looking at the genital area.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What health problems can HPV cause?",
      content: `

    <div class="answer"><p>HPV usually goes away on its own and does not cause any health problems. But when HPV does not go away, it can cause health problems including:</p>

<ul>
	<li><a href="/publications/our-publications/fact-sheet/cervical-cancer.html" title="Cervical cancer | womenshealth.gov">Cervical cancer</a></li>
	<li>Other genital cancers (such as cancers of the vulva, vagina, penis, or anus)</li>
	<li>Oropharyngeal cancer (cancer of the back of the throat, including the base of the tongue and tonsils)</li>
	<li><a href="/publications/our-publications/fact-sheet/genital-warts.html" title="Genital warts | womenshealth.gov">Genital warts</a></li>
	<li>Recurrent respiratory papillomatosis (a rare condition that causes warts to grow in the respiratory tract)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to get tested for HPV?",
      content: `

    <div class="answer"><ul>
	<li>If you are 21 to 29 years old, your doctor might suggest the HPV test if you have had an unusual or unclear <a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test</a>&nbsp;result. The test will help determine if HPV caused the abnormal cells on your cervix. Most women younger than 30 do not need the HPV test, because the immune system fights off HPV within two years in 90% of cases in that age group.<a href="#references"><sup>4</sup></a></li>
	<li>If you are 30 years or older, you may choose to have the HPV test along with the Pap test to screen for <a href="/publications/our-publications/fact-sheet/cervical-cancer.html" title="Cervical cancer | womenshealth.gov">cervical cancer</a>.</li>
	<li>If results of both tests are normal, your chance of getting cervical cancer in the next few years is very low. Your doctor might then say that you can wait up to five years for your next HPV screening.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does HPV affect pregnancy?",
      content: `

    <div class="answer"><p>HPV does not affect your chances of getting pregnant, but it may cause problems during pregnancy.</p>

<p>Some possible problems during pregnancy include:</p>

<ul>
	<li><strong>Cervical cell changes.</strong> Continue to get regular cervical cancer screening during and after pregnancy to help your doctor find any changes.</li>
	<li><strong>Genital warts that bleed and grow.</strong> Hormonal changes during pregnancy can cause any genital warts that you had before getting pregnant or that you get during pregnancy to bleed and grow (in size and number).</li>
	<li><strong>Cesarean section.</strong> If genital warts block the birth canal, you may need to have a <a href="/glossary#cesarean" title="glossary definition of cesarean section or C-section | womenshealth.gov">cesarean section</a> (C-section).</li>
	<li><strong>Health problems in the baby.</strong> A woman with genital HPV can — very rarely — pass it on to her baby. Babies and children may develop growths in their airways from HPV. This rare but potentially serious condition is called recurrent respiratory papillomatosis.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can HPV be cured?",
      content: `

    <div class="answer"><p>No, HPV has no cure. Most often, HPV goes away on its own. If HPV does not go away on its own, there are treatments for the genital warts and cervical cell changes caused by HPV.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent HPV?",
      content: `

    <div class="answer"><p>There are two ways to prevent HPV. One way is get an <a href="#10" title="What is the HPV vaccine?">HPV vaccine</a>. The other way to prevent HPV or any STI is to not have sexual contact with another person.</p>

<p>If you do have sex, lower your risk of getting an STI with the following steps:</p>

<ul>
	<li><strong>Use condoms.</strong> Condoms are the best way to prevent STIs when you have sex. Although HPV can also happen in female and male genital areas that are not protected by condoms, research shows that condom use is linked to lower cervical cancer rates. The HPV vaccine does not replace or decrease the need to wear condoms. Make sure to put the condom on before the penis touches the vagina, mouth, or anus. Also, other methods of <a href="/publications/our-publications/fact-sheet/birth-control-methods.html" title="Birth control methods fact sheet | womenshealth.gov">birth control</a>, like birth control pills, shots, implants, or <a href="/glossary#diaphragm" title="glossary definition of diaphragm | womenshealth.gov">diaphragms</a>, will not protect you from STIs.</li>
	<li><strong>Get tested.</strong> <strong>Be sure you and your partner are tested for STIs. Talk to each other about the test results before you have sex.</strong></li>
	<li><strong>Be monogamous.</strong> Having sex with just one partner can lower your risk for STIs. After being tested for STIs, be faithful to each other. That means that you have sex only with each other and no one else.</li>
	<li><strong>Limit your number of sex partners.</strong> Your risk of getting STIs goes up with the number of partners you have.</li>
	<li><strong>Do not douche.</strong> <a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet | womenshealth.gov">Douching</a> removes some of the normal bacteria in the vagina that protects you from infection. This may increase your risk of getting STIs.</li>
	<li><strong>Do not abuse alcohol or drugs.</strong> Drinking too much alcohol or using drugs increases risky behavior and may put you at risk of sexual assault and possible exposure to STIs.</li>
</ul>

<p>The steps work best when used together. No single step can protect you from every single type of STI.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the HPV vaccine?",
      content: `

    <div class="answer"><p>The HPV vaccine helps prevent cervical cancer, genital warts, and some other rare cancers. The Food and Drug Administration (FDA) approved the HPV vaccine to prevent HPV-related diseases, including cervical cancer in women.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "When can I get the HPV vaccine?",
      content: `

    <div class="answer"><p>Experts recommend that most people get the HPV vaccine at age 11 or 12. The HPV vaccine works best when you get it before you have any type of sexual contact with someone else. The Food and Drug Administration (FDA) approved the HPV vaccine for people ages 9 through 45.</p>

<p>There is not enough research to show whether the HPV vaccine is safe for pregnant and breastfeeding women. As a result, experts do not recommend the HPV vaccine for pregnant women. If you got an HPV vaccine shot while pregnant, wait until your pregnancy is over before getting any more HPV vaccine shots. You can also enroll in the HPV vaccine pregnancy registry by calling 1-800-986-8999. Talk to your doctor, nurse, or midwife about the HPV vaccine if you are breastfeeding and want to get the shots.</p>

<p>If you are 45 or younger and never had the HPV vaccine, or did not get all of the HPV shots, ask your doctor or nurse about getting vaccinated. When and how often you need HPV vaccine shots depends on your age and health history. Learn more about <a href="https://www.cdc.gov/hpv/parents/questions-answers.html" title="HPV | Questions and Answers | Human Papillomavirus | CDC">recommended doses of the HPV vaccine</a> from the Centers for Disease Control and Prevention (CDC).</p>

<p>Find a clinic near you where you can <a href="https://vaccinefinder.org/" title="HealthMap Vaccine Finder" class="external-link external-popup" target="_blank">get the HPV vaccine <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need the HPV vaccine if I have already had sexual contact? ",
      content: `

    <div class="answer"><p>Yes. You can still benefit from the HPV vaccine if you have already had sexual contact with someone else. The vaccine can protect you from HPV types you haven't gotten yet.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "If I get the HPV vaccine, do I still need to use a condom? ",
      content: `

    <div class="answer"><p>Yes. The vaccine does not replace or decrease the need to wear condoms. Using condoms lowers your risk of getting other types of HPV and other <a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs) | womenshealth.gov">STIs</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I still need a Pap test if I got the HPV vaccine?",
      content: `

    <div class="answer"><p>Yes. There are three reasons why:</p>

<ol>
	<li>Although the HPV vaccine&nbsp;protects against many of the HPV types that cause cervical cancer, it does not&nbsp;prevent <em>all</em> HPV types that cause cervical cancer.</li>
	<li>You might not be fully protected if you did not get all the vaccine doses (or at the recommended ages).</li>
	<li>You might not fully benefit from the vaccine if you were vaccinated after getting one or more types of HPV before vaccination.</li>
</ol>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Could I have HPV even if my Pap test was normal?",
      content: `

    <div class="answer"><p>Yes. You can have HPV but still have a normal Pap test. Changes on your cervix might not show up right away; or they might never appear. For women 30 years and older who get an HPV test and a <a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test</a>, a negative result on both the Pap and HPV tests means no cervical changes or HPV were found on the cervix. This means you have a very low chance of developing cervical cancer in the next few years.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "If I had HPV that went away on its own, can I get it again? ",
      content: `

    <div class="answer"><p>Yes. There are many types of HPV, so you can get it again.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can women who have sex with women get HPV?",
      content: `

    <div class="answer"><p>Yes. It is possible to get HPV, or any other STI, if you are a woman who has sex only with women.</p>

<p>Talk to your partner about her sexual history before having sex, and ask your doctor about getting tested if you have symptoms of HPV.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about HPV?",
      content: `

    <div class="answer"><p>For more information about HPV, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cancer.gov/cancertopics/causes-prevention/risk-factors/infectious-agents/hpv-fact-sheet" target="_blank" title="HPV and Cancer - National Cancer Institute">National Cancer Institute (NCI), NIH, HHS</a><br>
	<strong>Phone number:</strong> 800-422-6237</li>
	<li><a href="http://www.cdc.gov/nchhstp/" target="_blank" title="CDC - NCHHSTP Home">National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP), CDC, HHS</a><br>
	<strong>Phone Number:</strong> 800-232-4636</li>
	<li><a href="http://www.ashasexualhealth.org/" target="_blank" title="Home - American Sexual Health Association" class="external-link external-popup">American Sexual Health Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong> 800-227-8922</li>
	<li><a href="http://www.plannedparenthood.org/" target="_blank" title="Planned Parenthood | Official Site" class="external-link external-popup">Planned Parenthood <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong> 800-230-7526</li>
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
	<li>Myers, E.R., McCrory, D.C., Nanda, K., Bastian, L., Matchar, D.B. (2000). Mathematical model for the natural history of human papillomavirus infection and cervical carcinogenesis. <em>Am J Epidemiol;</em> 151:1158–1170.</li>
	<li>Centers for Disease Control and Prevention. (2017). <a href="http://www.cdc.gov/std/hpv/stdfact-hpv.htm" target="_blank" title="STD Facts - Human papillomavirus (HPV)">Genital HPV Infection - Fact Sheet</a>.</li>
	<li>U.S. Preventive Services Task Force. (2016). <a href="http://www.uspreventiveservicestaskforce.org/Page/Topic/recommendation-summary/cervical-cancer-screening?ds=1&amp;s=HPV" target="_blank" title="Final Update Summary: Cervical Cancer: Screening - US Preventive Services Task Force" class="external-link external-popup">Cervical Cancer: Screening <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Centers for Disease Control and Prevention. (2013). <a href="http://www.cdc.gov/std/stats/sti-estimates-fact-sheet-feb-2013.pdf" target="_blank" title="Estimates of Sexually Transmitted Infections in the United States, 2008">Incidence, Prevalence, and Cost of Sexually Transmitted Infections in the United States</a> (PDF, 1.6 MB).</li>
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
