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

export function syphilisPage({ navigation, ...rest }) {
  const condName = "Syphilis";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Syphilis.jpg?VersionId=_1SELN12eJANHnD1wrKc6Xuj0pDKQvu1";
  const condDescription =
    "Syphilis is a sexually transmitted infection (STI). It is spread by vaginal, oral, or anal sex. A pregnant woman can also spread syphilis to her baby. Syphilis is easy to treat with medicine in the early stages. But without treatment, syphilis progresses to a late stage and can damage your body's organs, leading to severe illness and even death.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Syphilis.jpg?VersionId=_1SELN12eJANHnD1wrKc6Xuj0pDKQvu1"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Syphilis</h1>  -->
            <p><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="SIF-uh-luhss">Syphilis</a> is a <a href="/a-z-topics/sexually-transmitted-infections" title="Sexually transmitted infections (STIs) | womenshealth.gov">sexually transmitted infection (STI)</a>.</strong> It is spread by vaginal, oral, or anal sex. A pregnant woman can also spread syphilis to her baby. Syphilis is easy to treat with medicine in the early stages. But without treatment, syphilis progresses to a late stage and can damage your body's organs, leading to severe illness and even death.</p>

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
      title: "What is syphilis?",
      content: `

    <div class="answer"><p>Syphilis is an <a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs) | womenshealth.gov">STI</a> caused by bacteria.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets syphilis?",
      content: `

    <div class="answer"><p>Syphilis is more common in men than women. In 2015, of the almost 24,000 people in the United States diagnosed in the first or second stage of syphilis, more than 2,200 were women. This number has gone up since 2014.<sup><a href="#references">1</a></sup> But, women with syphilis who are pregnant are at high risk for passing syphilis to their unborn babies. Untreated syphilis can cause stillbirth (babies who are born dead) or infant death soon after birth.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get syphilis?",
      content: `

    <div class="answer"><p>Syphilis is spread:</p>

<ul>
	<li>Through direct contact with a syphilis sore or rash during vaginal, oral, or anal sex. Sores can be on or in the external genitals, vagina, anus, or rectum. They can also be on the lips or tongue or other parts of the body.</li>
	<li>From a mother to her baby during pregnancy, childbirth, or breastfeeding</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different stages of syphilis?",
      content: `

    <div class="answer"><p>Syphilis has four stages:</p>

<ol>
	<li><a href="#5">Primary stage</a></li>
	<li><a href="#6">Secondary stage</a></li>
	<li><a href="#7">Inactive (latent) stage</a></li>
	<li><a href="#8">Late (tertiary) stage</a></li>
</ol>

<p>Each stage of syphilis has different symptoms. A person with syphilis can pass it to others during the primary and secondary stages.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What happens during the first (primary) stage of syphilis? ",
      content: `

    <div class="answer"><p>A sore appears in the first, or primary, stage. Sometimes, more than one sore appears. The time between infection with syphilis and the appearance of the sore can range from 10 to 90 days (average time is three weeks).</p>

<p>The sore is usually firm, round, small, and painless. It appears at the spot where the infection entered your body. In women this can include the vulva, vagina, cervix, anus, rectum, tongue, lips, or other parts of the body.<sup><a href="#references">2</a></sup></p>

<p>In this stage, syphilis can be passed to others through contact with the sore during vaginal, oral, or anal sex. The sore usually lasts three to six weeks and heals on its own. But if the syphilis infection is not treated, it moves to the second stage.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What happens during the second (secondary) stage of syphilis? ",
      content: `

    <div class="answer"><p>The second stage can start as the sore is healing or up to several weeks after it has healed. It usually starts with a rash on one or more areas of the body.</p>

<p>Some or all of these signs or symptoms can appear:</p>

<ul>
	<li>Skin rash with rough, red, or reddish-brown spots. The rash may appear on your stomach, chest, palms, or bottoms of your feet. The rash usually does not itch.</li>
	<li>Sores on the throat, mouth, or cervix</li>
	<li>Fever</li>
	<li>Swollen glands</li>
	<li>Patchy hair loss</li>
	<li>Headaches and muscle aches</li>
	<li>Weight loss</li>
	<li>Tiredness</li>
</ul>

<p>In this stage, the infection can be passed to others through contact with open sores during vaginal, oral, or anal sex. The rash and other symptoms will go away on their own. But without treatment, the syphilis infection will move to the latent and possibly late stages of disease.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What happens during the inactive (latent) stage of syphilis? ",
      content: `

    <div class="answer"><p>The inactive, or latent, stage of syphilis starts when symptoms from the first and second stages go away. The latent stage can last for many years. During this stage, the infection lives in your body even though you have no signs or symptoms.</p>

<p>You cannot pass syphilis to anyone else during the latent stage. But during the first year of latency, symptoms of the second stage (such as the rash or sore) may return in some women. If you have sores, you can infect others.</p>

<p>Without treatment, the infection may advance to the late stage.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What happens during the late (tertiary) stage of syphilis? ",
      content: `

    <div class="answer"><p>In the late stage, the disease can hurt your organs, including the brain, nerves, eyes, heart, blood vessels, liver, bones, and joints. This damage can lead to nerve problems, paralysis, blindness, deafness, dementia, and other health problems. Late-stage syphilis can lead to death.</p>

<p>Late stage syphilis is very rare. You will only reach the late stage of syphilis if you do not receive treatment earlier.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to get tested for syphilis?",
      content: `

    <div class="answer"><p>Ask your doctor or nurse about getting tested for syphilis if:</p>

<ul>
	<li>You have signs or symptoms of syphilis</li>
	<li>You think you might have been exposed to someone with syphilis</li>
	<li>You have been diagnosed with another STI, including HIV</li>
	<li>You are pregnant. All pregnant women need to be tested for syphilis at their first checkup. Some pregnant women need to be tested again, later in the pregnancy. Ask your doctor or nurse about retesting.</li>
	<li>Your or your partner's sexual behavior puts you at risk for STIs (having sex with multiple partners, having unprotected sex, or having sex with men who have sex with men). Ask your doctor or nurse how often you should be retested.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is syphilis diagnosed?",
      content: `

    <div class="answer"><p>There are two ways that a doctor or nurse tests for syphilis:</p>

<ul>
	<li>Taking a sample of your blood and sending it to a lab for testing</li>
	<li>Looking at fluid from a syphilis sore under a special type of microscope (this can only be done when you can see a sore)</li>
</ul>

<p>A <a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test</a> is <em>not</em> used to detect syphilis.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is syphilis treated?",
      content: `

    <div class="answer"><p>Penicillin (an antibiotic) is the best medicine to treat syphilis at all stages. How much penicillin you have to take and how long you have to take it for depend on the stage of syphilis and your symptoms. One dose of penicillin is usually enough to treat people who have had syphilis for less than one year. If you are in a later stage of syphilis, you may need more medicine.</p>

<p>Do not have sex until the syphilis sores are completely gone. Your sex partners need to be tested. If they have syphilis, they will need to take penicillin.</p>

<p>Syphilis can be cured if it is found early and treated. Syphilis can damage the heart or brain if it is not treated in the early stages. Syphilis can be cured in the later stages, but it may not be possible to fix the damage done to the heart or brain.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if I have an allergy to medicine used to treat syphilis? ",
      content: `

    <div class="answer"><p>The medicine used to treat syphilis is penicillin. If you are allergic to penicillin, other medicines might work during the early stages of syphilis.</p>

<p>You cannot take these other medicines during pregnancy. If you are pregnant and allergic to penicillin, your doctor will work with you to help you become less sensitive to the penicillin before you are treated with it.</p>

<p>In late syphilis, penicillin will prevent further harm, but it cannot fix any permanent damage already done to internal organs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if syphilis is not treated?",
      content: `

    <div class="answer"><p>Without treatment, syphilis can lead to severe illness and even death.</p>

<p>Having syphilis also raises your risk of getting or giving HIV, the virus that causes AIDS. The open sores caused by syphilis make it easier for HIV to spread through sexual contact. If you have a syphilis sore, you are two to five times more likely to get HIV if exposed through sex.<sup><a href="#references">4</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does syphilis affect pregnancy?",
      content: `

    <div class="answer"><p><strong>Pregnant women</strong>&nbsp;can pass syphilis to their babies during pregnancy or birth. Syphilis can cause miscarriage, stillbirth, or the baby's death soon after birth. Untreated syphilis in pregnant women results in infant death in up to 40% of cases.<sup><a href="#references">3</a></sup></p>

<p><strong>Babies</strong>&nbsp;born to mothers who have syphilis may not have signs or symptoms of syphilis at birth. But if not treated right away, the baby may develop serious problems within a few weeks. These include:</p>

<ul>
	<li>Skin sores and rashes</li>
	<li>Fever</li>
	<li>Jaundice</li>
	<li>Anemia</li>
	<li>Swollen liver and spleen</li>
</ul>

<p>Untreated syphilis in babies can cause developmental delays, seizures, or death.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is syphilis treated during pregnancy?",
      content: `

    <div class="answer"><p>The U.S. Preventive Services Task Force recommends that all pregnant women be tested for syphilis.<sup><a href="#references">5</a></sup> Pregnant women with syphilis need to be treated right away with penicillin. For women who are allergic to penicillin, no other medicines are available for treatment. Your doctor will help you become less sensitive to the penicillin so it can be used before your baby is born.</p>

<p>Treatment with penicillin will prevent passing syphilis to the baby. But women who are treated during the second half of pregnancy are at risk of premature labor and problems with their unborn baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I breastfeed if I have syphilis?",
      content: `

    <div class="answer"><p>Yes, you can breastfeed if you have syphilis, but not if you have a sore on one or both of your breasts. If you have syphilis, it is possible to spread the infection to any part of your breast, including your nipple and areola. You can then spread syphilis to your baby.</p>

<p>If you have any syphilis sores on one or both of your breasts:</p>

<ul>
	<li>You can keep breastfeeding as long as your baby or pumping equipment does not touch a sore.</li>
	<li>Pump or hand-express your milk from the breast with sores until the sores heal. Pumping will help keep up your milk supply and prevent your breast from getting overly full and painful. You can store your milk to give to your baby in a bottle for another feeding. But if parts of your breast pump also touch the sore(s) while pumping, throw the milk away.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I have syphilis?",
      content: `

    <div class="answer"><p>Syphilis can be treated. But you need to be tested and treated as soon as possible.</p>

<p>If you have syphilis:</p>

<ul>
	<li><strong>See a doctor or nurse as soon as possible.</strong> Penicillin will treat syphilis, but it will not fix any permanent damage done to your internal organs.</li>
	<li><strong>Take all of your medicine.</strong> Even if the symptoms go away, you still need to finish all of the penicillin. If symptoms continue after treatment, see your doctor or nurse.</li>
	<li><strong>Tell your sex partner(s)</strong> so they can be tested and treated. If they are not tested and treated you could get syphilis again.</li>
	<li><strong>Avoid <em>any</em> sexual activity while you are being treated for syphilis.</strong> Don't have sexual contact until the syphilis sores are completely healed.</li>
	<li>After you have completed treatment for syphilis, <strong>get retested after 6 months and 12 months.</strong> Your doctor or nurse may recommend more frequent follow-up tests.</li>
	<li><strong>Get tested for HIV.</strong> If your test result is negative, ask your doctor or nurse if you need to be retested and when.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent syphilis?",
      content: `

    <div class="answer"><p>The best way to prevent syphilis or any STI is to not have vaginal, oral, or anal sex.</p>

<p>If you do have sex, lower your risk of getting an STI with the following steps:</p>

<ul>
	<li><strong>Use condoms.</strong> Condoms are the best way to prevent STIs when you have sex. Because a man does not need to ejaculate (come) to spread syphilis, make sure to put the condom on before the penis touches the vagina, mouth, or anus. Also, other methods of <a href="/publications/our-publications/fact-sheet/birth-control-methods.html" title="Birth control methods fact sheet | womenshealth.gov">birth control</a>, like birth control pills, shots, implants, or <a href="/glossary#diaphragm" title="glossary definition of diaphragm | womenshealth.gov">diaphragms</a>, will not protect you from STIs.</li>
	<li><strong>Get tested.</strong> Be sure you and your partner are tested for STIs. Talk to each other about your test results before you have sex.</li>
	<li><strong>Be monogamous.</strong> Having sex with just one partner can lower your risk for STIs. After being tested for STIs, be faithful to each other. That means that you have sex only with each other and no one else.</li>
	<li><strong>Limit your number of sex partners.</strong> Your risk of getting STIs goes up with the number of partners you have.</li>
	<li><strong>Do not douche.</strong> <a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet | womenshealth.gov">Douching</a> removes some of the normal bacteria in the vagina, and may increase your risk of getting STIs.</li>
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
      title: "Can women who have sex with women get syphilis?",
      content: `

    <div class="answer"><p>Yes. It is possible to get syphilis, or any other STI, if you are a woman who has sex only with women.</p>

<p>Talk to your partner about her sexual history before having sex, and ask your doctor or nurse about getting tested if you have signs or symptoms of syphilis. Use a <a href="/glossary#dental_dam" title="glossary definition of dental dam | womenshealth.gov">dental dam</a> during oral sex and avoid sexual activity during an outbreak.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about syphilis?",
      content: `

    <div class="answer"><p>For more information about syphilis, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.cdc.gov/nchhstp/" target="_blank" title="CDC - NCHHSTP Home">National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP), CDC, HHS</a></strong><br>
	<strong>Phone Number:</strong>&nbsp;800-232-4636</li>
	<li><strong><a href="http://www.niaid.nih.gov/" target="_blank" title="National Institute of Allergy and Infectious Diseases (NIAID)">National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</a></strong><br>
	<strong>Phone Number:</strong>&nbsp;866-284-4107 (TDD: 800-877-8339)</li>
	<li><strong><a href="http://www.ashasexualhealth.org/" target="_blank" title="Home - American Sexual Health Association" class="external-link external-popup">American Sexual Health Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone Number:</strong>&nbsp;800-227-8922</li>
	<li><strong><a href="http://www.plannedparenthood.org/" target="_blank" title="Planned Parenthood | Official Site" class="external-link external-popup">Planned Parenthood <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone Number:</strong>&nbsp;800-230-7526</li>
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
	<li>Centers for Disease Control and Prevention. (2016). <a href="https://www.cdc.gov/std/stats15/syphilis.htm">2015 Sexually Transmitted Disease Surveillance; National Profiles: Syphilis</a></li>
	<li>Chandra, A., Mosher, W. D., Copen, C., &amp; Sionean, C. (2011). Sexual behavior, sexual attraction, and sexual identity in the United States: Data from the 2006–2008 National Survey of Family Growth. <em>National Health Statistics Report,</em> 3(36), 1–36.</li>
	<li>Centers for Disease Control and Prevention. (2017).&nbsp;<a href="http://www.cdc.gov/std/syphilis/STDFact-Syphilis-detailed.htm" target="_blank" title="STD Facts - Syphilis (Detailed)">Syphilis - CDC Fact Sheet</a>.</li>
	<li>Centers for Disease Control and Prevention. (1998). <a href="http://www.cdc.gov/mmwr/preview/mmwrhtml/00054174.htm" target="_blank" title="HIV Prevention Through Early Detection and Treatment of Other Sexually Transmitted Diseases — United States Recommendations of the Advisory Committee for HIV and STD Prevention">HIV prevention through early detection and treatment of other sexually transmitted diseases—United States. Recommendations of the Advisory Committee for HIV and STD prevention</a>. <em>MMWR Recommendations and Reports,</em>47(RR–12), 1–24.</li>
	<li>U.S. Preventive Services Task Force. (2015). <a href="http://www.uspreventiveservicestaskforce.org/uspstf09/syphilis/syphpgrs.htm" target="_blank" title="Final Update Summary: Syphilis Infection in Pregnancy: Screening - US Preventive Services Task Force" class="external-link external-popup">Screening for Syphilis Infection in Pregnancy <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
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
