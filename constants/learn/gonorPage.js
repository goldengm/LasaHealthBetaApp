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

export function gonorPage({ navigation, ...rest }) {
  const condName = "Gonorrhea";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Gonorrhea.jpg?VersionId=YlgAsNdoFHdjXeQeYENW7aK3RJUNb0MH";
  const condDescription =
    "Gonorrhea is a sexually transmitted infection (STI). It is usually spread by having vaginal, oral, or anal sex. In 2014, gonorrhea affected more than 162,000 women in the United States.1 Antibiotics can treat gonorrhea. If left untreated, it can cause serious health problems, including problems getting pregnant.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Gonorrhea.jpg?VersionId=YlgAsNdoFHdjXeQeYENW7aK3RJUNb0MH"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Gonorrhea</h1>  -->
            <p><strong>Gonorrhea is a <a href="/a-z-topics/sexually-transmitted-infections" title="Sexually transmitted infections (STIs) | womenshealth.gov">sexually transmitted infection (STI)</a>.</strong> It&nbsp;is&nbsp;usually spread by having vaginal, oral, or anal sex. In 2014, gonorrhea affected more than 162,000 women in the United States.<sup><a href="#references" title="Sources">1</a></sup>&nbsp;Antibiotics can treat gonorrhea. If left untreated, it can cause serious health problems, including problems getting pregnant.</p>

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
      title: "What is gonorrhea?",
      content: `

    <div class="answer"><p>Gonorrhea is an&nbsp;<a href="/a-z-topics/sexually-transmitted-infections" title="Sexually transmitted infections (STIs) | womenshealth.gov">STI</a>&nbsp;that is caused by the bacteria&nbsp;<em>Neisseria gonorrhoeae.</em>&nbsp;It is an especially serious problem for women because it can damage the female reproductive organs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets gonorrhea?",
      content: `

    <div class="answer"><p>In 2014, gonorrhea affected more than 162,000 women in the United States.<sup><a href="#references" title="Sources">1</a></sup>&nbsp;Gonorrhea most often affects women ages 15 to 24. But, gonorrhea is becoming more common in older women too.<sup><a href="#references" title="Sources">1</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get gonorrhea?",
      content: `

    <div class="answer"><p>Gonorrhea is spread through:</p>

<ul>
	<li>Vaginal, oral, or anal sex. Gonorrhea can be spread even if there are no symptoms. This means you can get gonorrhea from someone who has no signs or symptoms.</li>
	<li>Genital touching. A man does not need to ejaculate (come) for gonorrhea to spread. Touching infected fluids from the vagina or penis and then touching your eyes can cause an eye infection. Gonorrhea can also be passed between women who have sex with women.</li>
	<li>Childbirth from woman to her baby</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the signs and symptoms of gonorrhea?",
      content: `

    <div class="answer"><p>Most women with gonorrhea do not have any signs or symptoms. If you do get symptoms, they are often mild and can be mistaken for a bladder or vaginal infection.</p>

<p>Signs or symptoms of gonorrhea depend on where you are first infected by the gonorrhea bacteria.</p>

<p>Signs and symptoms in the genital area can include:</p>

<ul>
	<li>Pain or burning when urinating</li>
	<li>More vaginal discharge than usual</li>
	<li>Vaginal discharge that looks different than usual</li>
	<li>Bleeding between periods</li>
	<li>Pain in the pelvis or abdomen</li>
</ul>

<p>Signs and symptoms in other parts of the body include:</p>

<ul>
	<li><strong>Rectum/anus:</strong>&nbsp;anal itching, pus-like discharge, bright red blood on toilet tissue, or painful bowel movements</li>
	<li><strong>Eyes:</strong>&nbsp;pain, itching, sensitivity to light, pus-like discharge</li>
	<li><strong>Throat:</strong>&nbsp;sore throat, swollen glands in your neck</li>
	<li><strong>Joints (such as your knee):</strong>&nbsp;warmth, redness, swelling, or pain while moving</li>
</ul>

<p>Gonorrhea can cause serious health problems, even if you do not have any signs or symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to get tested for gonorrhea?",
      content: `

    <div class="answer"><ul>
	<li>If you are&nbsp;<strong>24 or younger and have sex,</strong>&nbsp;you need to get tested for gonorrhea. Gonorrhea is most common in women between ages 15 and 24.<sup><a href="#references" title="Sources">2</a></sup>&nbsp;You need to get tested if you have had any symptoms of gonorrhea since your last negative test result or if your sex partner has gonorrhea.</li>
	<li>If you are&nbsp;<strong>older than 24,</strong>&nbsp;you need to get tested if, in the past year or since your last test, you:<sup><a href="#references" title="Sources">2</a></sup>
	<ul>
		<li>Had a new sex partner</li>
		<li>Had your sex partner tell you they have gonorrhea</li>
		<li>Have had gonorrhea or another STI in the past</li>
		<li>Traded sex for money or drugs in the past</li>
		<li>Do not use condoms during sex and are in a relationship that is not monogamous, meaning you or your partner has sex with other people</li>
	</ul>
	</li>
</ul>

<p>You also need to get tested if you have any symptoms of gonorrhea.</p>

<p>Testing is very important, because women with untreated gonorrhea can develop serious health problems. If you are tested for gonorrhea, you also need to get tested for other STIs, including&nbsp;<a href="/a-z-topics/chlamydia" title="Chlamydia | womenshealth.gov">chlamydia</a>,&nbsp;<a href="/a-z-topics/syphilis" title="Syphilis | womenshealth.gov">syphilis</a>, and&nbsp;<a href="/hiv-and-aids" title="HIV/AIDS | womenshealth.gov">HIV</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is gonorrhea diagnosed?",
      content: `

    <div class="answer"><p>There are two ways that a doctor or nurse tests for gonorrhea:</p>

<ul>
	<li>A&nbsp;<strong>urine test.</strong>&nbsp;This is the most common. You urinate (pee) into a cup. Your urine is then tested for gonorrhea.</li>
	<li>A&nbsp;<strong>swab test.</strong>&nbsp;Your doctor or nurse uses a cotton swab to take a fluid sample from an infected place (cervix, rectum, or throat). The fluid is then tested for gonorrhea.</li>
</ul>

<p>A&nbsp;<a href="/a-z-topics/pap-test" title="Pap test | womenshealth.gov">Pap test</a>&nbsp;is&nbsp;<em>not</em>&nbsp;used to detect gonorrhea.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is gonorrhea treated?",
      content: `

    <div class="answer"><p>Your doctor or nurse will give you antibiotics to treat gonorrhea. The antibiotics are usually a pill you swallow.</p>

<p>Although antibiotics can cure gonorrhea, they cannot fix any permanent damage done to your body. For this reason, it is important to get tested and to take the antibiotics as soon as possible.</p>

<p>For the antibiotics to work, you must finish all of the antibiotics that your doctor gives you, even if the symptoms go away. Do not share your antibiotics for gonorrhea with anyone. If symptoms do not go away after treatment, see your doctor or nurse. It is possible to get gonorrhea again if you have sex with someone who has gonorrhea. Tell your recent sex partner(s) so they can be tested and treated.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if gonorrhea is not treated?",
      content: `

    <div class="answer"><p>Gonorrhea that is not treated can cause serious health problems in women:<sup><a href="#references" title="Sources">3</a></sup></p>

<ul>
	<li><a href="/a-z-topics/pelvic-inflammatory-disease" title="Pelvic inflammatory disease | womenshealth.gov">Pelvic inflammatory disease (PID)</a>, an infection of a woman's reproductive organs. PID can lead to chronic pelvic pain, pregnancy problems, and infertility, meaning you can't get pregnant. Untreated gonorrhea is a common cause of PID.</li>
	<li>Higher risk of getting HIV or spreading HIV</li>
	<li>Although it does not happen very often, gonorrhea can cause widespread infection in other parts of the body, such as the blood, joints, heart, or brain. This can lead to death.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I have gonorrhea?",
      content: `

    <div class="answer"><p>Gonorrhea is easy to treat. But you need to get tested and treated as soon as possible.</p>

<p>If you have gonorrhea:</p>

<ul>
	<li><strong>See a doctor or nurse as soon as possible.</strong>&nbsp;Antibiotics will treat gonorrhea, but they will not fix any permanent damage to your reproductive organs.</li>
	<li><strong>Take all of the antibiotics.</strong>&nbsp;Even if symptoms go away, you need to finish all of the antibiotics.</li>
	<li><strong>Tell your sex partner(s)</strong>&nbsp;so they can be tested and treated. If they are not tested and treated you could get gonorrhea again.</li>
	<li><strong>Avoid sexual contact until you and your partner(s) have been treated and cured.</strong>&nbsp;Even after you finish your antibiotics, you can get gonorrhea again if you have sex with someone who has gonorrhea.</li>
	<li><strong>See your doctor or nurse again if you have symptoms that don't go away</strong>&nbsp;within a few days after finishing the antibiotics.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does gonorrhea affect pregnancy?",
      content: `

    <div class="answer"><p>For pregnant women, untreated gonorrhea raises the risk of:</p>

<ul>
	<li>Miscarriage</li>
	<li>Premature birth (babies born before 37 weeks of pregnancy). Premature birth is the most common cause of infant death and can lead to long-term health and developmental problems in children.<sup><a href="#references" title="Sources">4</a></sup></li>
	<li><a href="/glossary#low_birth_weight" title="glossary definition of low birth weight | womenshealth.gov">Low birth weight</a></li>
	<li>Water breaking too early. This can lead to premature birth.</li>
</ul>

<p>Babies born to infected mothers are at risk for:</p>

<ul>
	<li>Blindness. Treating the newborn's eyes with medicine right after birth can prevent eye infection. The U.S. Preventive Services Task Force strongly recommends — and most states require by law — that all babies be treated with medicated eye ointments soon after birth.<sup><a href="#references" title="Sources">5</a></sup></li>
	<li>Joint infection</li>
	<li>Life-threatening blood infection</li>
</ul>

<p>Treatment of gonorrhea as soon as it is found in pregnant women will lower the risk of these problems for both mother and baby. Your baby will get antibiotics if you have gonorrhea or if your baby has a gonorrheal eye infection.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent gonorrhea?",
      content: `

    <div class="answer"><p>The best way to prevent gonorrhea or any STI is to not have vaginal, oral, or anal sex.</p>

<p>If you do have sex, lower your risk of getting an STI with the following steps:</p>

<ul>
	<li><strong>Use condoms.</strong>&nbsp;Condoms are the best way to prevent STIs when you have sex. Because a man does not need to ejaculate (come) to give or get gonorrhea, make sure to put the condom on before the penis touches the vagina, mouth, or anus. Other methods of&nbsp;<a href="/a-z-topics/birth-control-methods" title="Birth control methods fact sheet | womenshealth.gov">birth control</a>, like birth control pills, shots, implants, or&nbsp;<a href="/glossary#diaphragm" title="glossary definition of diaphragm | womenshealth.gov">diaphragms</a>, will not protect you from STIs.</li>
	<li><strong>Get tested.</strong>&nbsp;Be sure you and your partner are tested for STIs. Talk to each other about your test results before you have sex.</li>
	<li><strong>Be monogamous.</strong>&nbsp;Having sex with just one partner can lower your risk for STIs. After being tested for STIs, be faithful to each other. That means that you have sex only with each other and no one else.</li>
	<li><strong>Limit your number of sex partners.</strong>&nbsp;Your risk of getting STIs goes up with the number of partners you have.</li>
	<li><strong>Do not douche.</strong>&nbsp;<a href="/a-z-topics/douching" title="Douching fact sheet | womenshealth.gov">Douching</a>&nbsp;removes some of the normal bacteria in the vagina, and may increase your risk of getting STIs.</li>
	<li><strong>Do not abuse alcohol or drugs.</strong>&nbsp;Drinking too much alcohol or using drugs increases risky behavior and may put you at risk of sexual assault and possible exposure to STIs.</li>
</ul>

<p>The steps work best when used together. No single step can protect you from every single type of STI.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can women who have sex with women get gonorrhea?",
      content: `

    <div class="answer"><p>Yes. It is possible to get gonorrhea, or any other STI, if you are a woman who has sex only with women.</p>

<p>Talk to your partner about her sexual history before having sex, and ask your doctor about getting tested if you have signs or symptoms of gonorrhea.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about gonorrhea?",
      content: `

    <div class="answer"><p>For more information about gonorrhea, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.cdc.gov/nchhstp/" target="_blank" title="CDC - NCHHSTP Home">National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP), CDC, HHS</a></strong><br>
	Phone Number:&nbsp;800-232-4636</li>
	<li><strong><a href="http://www.niaid.nih.gov/" target="_blank" title="National Institute of Allergy and Infectious Diseases (NIAID)">National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</a></strong><br>
	Phone Number:&nbsp;866-284-4107 (TDD: 800-877-8339)</li>
	<li><strong><a href="http://www.ashasexualhealth.org/" target="_blank" title="Home - American Sexual Health Association" class="external-link external-popup">American Sexual Health Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	Phone Number:&nbsp;800-227-8922</li>
	<li><strong><a href="http://www.plannedparenthood.org/" target="_blank" title="Planned Parenthood | Official Site" class="external-link external-popup">Planned Parenthood <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	Phone Number:&nbsp;800-230-7526</li>
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
	<li>Centers for Disease Control and Prevention. (2015).&nbsp;<a href="http://www.cdc.gov/std/stats14/tables/15.htm" target="_blank" title="2014 STD Surveillance | CDC">2014 Sexually Transmitted Disease Surveillance, Table 15.</a></li>
	<li>U.S. Preventive Services Task Force. (2015).&nbsp;<a href="http://www.uspreventiveservicestaskforce.org/Page/Document/UpdateSummaryFinal/chlamydia-and-gonorrhea-screening?ds=1&amp;s=chlamydia" target="_blank" title="Final Update Summary: Chlamydia and Gonorrhea: Screening - US Preventive Services Task Force" class="external-link external-popup">Screening for Chlamydia and Gonorrhea <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Centers for Disease Control and Prevention. (2015).&nbsp;<a href="http://www.cdc.gov/std/gonorrhea/stdfact-gonorrhea-detailed.htm?s_cid=cs_074" target="_blank" title="Detailed STD Facts - Gonorrhea">Gonorrhea - CDC Fact Sheet</a>.</li>
	<li>Centers for Disease Control and Prevention. (2014).&nbsp;<a href="http://www.cdc.gov/reproductivehealth/maternalinfanthealth/PretermBirth.htm" target="_blank" title="Preterm Birth | Maternal and Infant Health | Reproductive Health | CDC">Preterm Birth</a>.</li>
	<li>U.S. Preventive Services Task Force. (2015).&nbsp;<a href="http://www.uspreventiveservicestaskforce.org/uspstf10/gonoculproph/gonocup.htm" target="_blank" title="Final Update Summary: Ocular Prophylaxis for Gonococcal Ophthalmia Neonatorum: Preventive Medication - US Preventive Services Task Force" class="external-link external-popup">Ocular Prophylaxis for Gonococcal Ophthalmia Neonatorium: Preventive Medication <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
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
