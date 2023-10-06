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

export function pidPage({ navigation, ...rest }) {
  const condName = "Pelvic inflammatory disease (PID)";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Pelvicinflammatorydisease.jpg?VersionId=G4p5NT1l1nnbiDgIK0WZswYvL4CB.BEp";
  const condDescription =
    "Pelvic inflammatory disease (PID) is an infection of a woman's reproductive organs. In 2013, about 88,000 women ages 15–44 in the United States were diagnosed with PID.1 PID is often caused by a sexually transmitted infection (STI). If left untreated, PID can cause problems getting pregnant, problems during pregnancy, and long-term pelvic pain.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Pelvicinflammatorydisease.jpg?VersionId=G4p5NT1l1nnbiDgIK0WZswYvL4CB.BEp"></div>    -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Pelvic inflammatory disease</h1>  -->
            <p><strong>Pelvic inflammatory disease (PID) is an infection of a woman's reproductive organs. </strong>In 2013, about 88,000 women ages 15–44 in the United States were diagnosed with PID.<sup><a href="#references" title="Sources">1</a></sup>&nbsp;PID is often caused by a&nbsp;<a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STI) fact sheet | womenshealth.gov">sexually transmitted infection (STI)</a>. If left untreated, PID can cause problems getting pregnant, problems during pregnancy, and long-term pelvic pain.</p>

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
      title: "What is PID?",
      content: `

    <div class="answer"><p>PID is an infection of a woman's reproductive organs. The reproductive organs include the&nbsp;<a href="/glossary#uterus" title="glossary definition of uterus | womenshealth.gov">uterus</a>&nbsp;(womb),&nbsp;<a href="/glossary#fallopian" title="glossary definition of fallopian tubes | womenshealth.gov">fallopian tubes</a>,&nbsp;<a href="/glossary#ovaries" title="glossary definition of ovaries | womenshealth.gov">ovaries</a>, and&nbsp;<a href="/glossary#cervix" title="glossary definition of cervix | womenshealth.gov">cervix</a>.</p>

<p>PID can be caused by many different types of bacteria. Usually PID is caused by bacteria from STIs. Sometimes PID is caused by normal bacteria found in the vagina.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets PID?",
      content: `

    <div class="answer"><p>PID affects about 5% of women in the United States.<sup><a href="#references" title="Sources">2</a></sup>&nbsp;Your risk for PID is higher if you:<sup><a href="#references" title="Sources">3</a></sup></p>

<ul>
	<li>Have had an STI</li>
	<li>Have had PID before</li>
	<li>Are younger than 25 and have sex. PID is most common in women 15 to 24 years old.</li>
	<li>Have more than one sex partner or have a partner who has multiple sexual partners</li>
	<li>Douche.&nbsp;<a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet | womenshealth.gov">Douching</a>&nbsp;can push bacteria into the reproductive organs and cause PID. Douching can also hide the signs of PID.</li>
	<li>Recently had an&nbsp;<a href="/glossary#iud" title="glossary definition of intrauterine device | womenshealth.gov">intrauterine device</a>&nbsp;(IUD) inserted.<sup><a href="#references" title="Sources">4</a></sup>&nbsp;The risk of PID is higher for the first few weeks only after insertion of an IUD, but PID is rare after that. Getting tested for STIs before the IUD is inserted lowers your risk for PID.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get PID?",
      content: `

    <div class="answer"><p>A woman can get PID if bacteria move up from her vagina or cervix and into her reproductive organs. Many different types of bacteria can cause PID. Most often, PID is caused by infection from two common STIs:&nbsp;<a href="/publications/our-publications/fact-sheet/gonorrhea.html" title="Gonorrhea | womenshealth.gov">gonorrhea</a>&nbsp;and&nbsp;<a href="/publications/our-publications/fact-sheet/chlamydia.html" title="Chlamydia | womenshealth.gov">chlamydia</a>. The number of women with PID has dropped in recent years. This may be because more women are getting tested regularly for chlamydia and gonorrhea.<sup><a href="#references" title="Sources">5</a></sup></p>

<p>You can also get PID without having an STI. Normal bacteria in the vagina can travel into a woman's reproductive organs and can sometimes cause PID. Sometimes the bacteria travel up to a woman's reproductive organs because of&nbsp;<a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet | womenshealth.gov">douching</a>. Do not douche. No doctor or nurse recommends douching.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the signs and symptoms of PID?",
      content: `

    <div class="answer"><p>Many women do not know they have PID because they do not have any signs or symptoms. When symptoms do happen, they can be mild or more serious.</p>

<p>Signs and symptoms include:</p>

<ul>
	<li>Pain in the lower abdomen (this is the most common symptom)</li>
	<li>Fever (100.4° F or higher)</li>
	<li>Vaginal discharge that may smell foul</li>
	<li>Painful sex</li>
	<li>Pain when urinating</li>
	<li>Irregular menstrual periods</li>
	<li>Pain in the upper right abdomen (this is rare)</li>
</ul>

<p>PID can come on fast, with extreme pain and fever, especially if it is caused by gonorrhea.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is PID diagnosed?",
      content: `

    <div class="answer"><p>To diagnose PID, doctors usually do a physical exam to check for signs of PID and test for STIs.&nbsp;<strong>If you think that you may have PID, see a doctor or nurse as soon as possible.</strong></p>

<p>If you have pain in your lower abdomen, your doctor or nurse will check for:</p>

<ul>
	<li>Unusual discharge from your vagina or cervix</li>
	<li>An abscess (collection of pus) near your ovaries or fallopian tubes</li>
	<li>Tenderness or pain in your reproductive organs</li>
</ul>

<p>Your doctor may do tests to find out whether you have PID or a different problem that looks like PID. These can include:<sup><a href="#references" title="Sources">4</a></sup></p>

<ul>
	<li>Tests for STIs, especially gonorrhea and chlamydia. These infections can cause PID.</li>
	<li>A test for a&nbsp;<a href="/publications/our-publications/fact-sheet/urinary-tract-infection.html" title="Urinary tract infection fact sheet | womenshealth.gov">urinary tract infection</a>&nbsp;or other conditions that can cause pelvic pain</li>
	<li>Ultrasound or another imaging test so your doctor can look at your internal organs for signs of PID</li>
</ul>

<p>A&nbsp;<a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test</a>&nbsp;is&nbsp;<em>not</em>&nbsp;used to detect PID.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is PID treated?",
      content: `

    <div class="answer"><p>Your doctor or nurse will give you antibiotics to treat PID. Most of the time, at least two antibiotics are used that work against many different types of bacteria.&nbsp;<strong>You must take all of your antibiotics, even if your symptoms go away.</strong>&nbsp;This helps to make sure the infection is fully cured. See your doctor or nurse again two to three days after starting the antibiotics to make sure they are working.</p>

<p>Your doctor or nurse may suggest going into the hospital to treat your PID if:</p>

<ul>
	<li>You are very sick</li>
	<li>You are pregnant</li>
	<li>Your symptoms do not go away after taking the antibiotics or if you cannot swallow pills. If this is the case, you will need IV antibiotics.</li>
	<li>You have an abscess in a fallopian tube or ovary</li>
</ul>

<p>If you still have symptoms or if the abscess does not go away after treatment, you may need surgery. Problems caused by PID, such as chronic pelvic pain and scarring, are often hard to treat. But sometimes they get better after surgery.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if PID is not treated?",
      content: `

    <div class="answer"><p>Without treatment, PID can lead to serious problems like&nbsp;<a href="/glossary#infertility" title="glossary definition of infertility | womenshealth.gov">infertility</a>,&nbsp;<a href="/glossary#ectopic" title="glossary definition of ectopic pregnancy | womenshealth.gov">ectopic pregnancy</a>, and chronic pelvic pain (pain that does not go away).&nbsp;<strong>If you think you may have PID, see a doctor or nurse as soon as possible.</strong></p>

<p>Antibiotics will treat PID, but they will not fix any permanent damage done to your internal organs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I get pregnant if I have had PID?",
      content: `

    <div class="answer"><p>Maybe. Your chances of getting pregnant are lower if you have had PID more than once. When you have PID, bacteria can get into the fallopian tubes or cause&nbsp;<a href="/glossary#inflammation" title="glossary definition of inflammation | womenshealth.gov">inflammation</a>&nbsp;of the fallopian tubes. This can cause scarring in the tissue that makes up your fallopian tubes.</p>

<p>Scar tissue can block an egg from your ovary from entering or traveling down the fallopian tube to your uterus (womb). The egg needs to be fertilized by a man's sperm and then attach to your uterus for pregnancy to happen. Even having just a little scar tissue can keep you from getting pregnant without fertility treatment.</p>

<p>Scar tissue from PID can also cause a dangerous ectopic pregnancy (a pregnancy outside of the uterus) instead of a normal pregnancy. Ectopic pregnancies are more than six times more common in women who have had PID compared with women who have not had PID.<sup><a href="#references" title="Sources">6</a></sup>&nbsp;Most of these pregnancies end in miscarriage.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent PID?",
      content: `

    <div class="answer"><p>You may not be able to prevent PID. It is not always caused by an STI. Sometimes, normal bacteria in your vagina can travel up to your reproductive organs and cause PID.</p>

<p>But, you can lower your risk of PID by not douching. You can also prevent STIs by not having vaginal, oral, or anal sex.</p>

<p>If you do have sex, lower your risk of getting an STI with the following steps:</p>

<ul>
	<li><strong>Use condoms.</strong>&nbsp;Condoms are the best way to prevent STIs when you have sex. Because a man does not need to ejaculate (come) to give or get STIs, make sure to put the condom on before the penis touches the vagina, mouth, or anus. Other methods of&nbsp;<a href="/a-z-topics/birth-control-methods" title="Birth control methods fact sheet | womenshealth.gov">birth control</a>, like birth control pills, shots, implants, or&nbsp;<a href="/glossary#diaphragm" title="glossary definition of diaphragm | womenshealth.gov">diaphragms</a>, will not protect you from STIs.</li>
	<li><strong>Get tested.</strong>&nbsp;Be sure you and your partner are tested for STIs. Talk to each other about the test results before you have sex.</li>
	<li><strong>Be monogamous.</strong>&nbsp;Having sex with just one partner can lower your risk for STIs. After being tested for STIs, be faithful to each other. That means that you have sex only with each other and no one else.</li>
	<li><strong>Limit your number of sex partners.</strong>&nbsp;Your risk of getting STIs goes up with the number of partners you have.</li>
	<li><strong>Do not douche.</strong>&nbsp;<a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet | womenshealth.gov">Douching</a>&nbsp;removes some of the normal bacteria in the vagina that protect you from infection. Douching may also raise your risk for PID by helping bacteria travel to other areas, like your uterus, ovaries, and fallopian tubes.</li>
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
      title: "Can women who have sex with women get PID?",
      content: `

    <div class="answer"><p>Yes. It is possible to get PID, or an STI, if you are a woman who has sex only with women.</p>

<p>Talk to your partner about her sexual history before having sex, and ask your doctor about getting tested if you have signs or symptoms of PID.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about PID?",
      content: `

    <div class="answer"><p>For more information about PID, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/nchhstp/" target="_blank" title="CDC - NCHHSTP Home">National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP), CDC, HHS</a><br>
	<strong>Phone Number:</strong>&nbsp;800-232-4636</li>
	<li><a href="http://www.niaid.nih.gov/" target="_blank" title="National Institute of Allergy and Infectious Diseases (NIAID)">National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</a><br>
	<strong>Phone Number:</strong>&nbsp;866-284-4107 (TDD: 800-877-8339)</li>
	<li><a href="http://www.ashastd.org/" target="_blank" title="Home - American Sexual Health Association" class="external-link external-popup">American Sexual Health Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong>&nbsp;800-227-8922</li>
	<li><a href="http://www.plannedparenthood.org/" target="_blank" title="Planned Parenthood | Official Site" class="external-link external-popup">Planned Parenthood <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong>&nbsp;800-230-7526</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Related information and fact sheets from womenshealth.gov ",
      content: `

    <div class="answer"><ul>
	<li><a href="/publications/our-publications/fact-sheet/chlamydia.html" title="Chlamydia | womenshealth.gov">Chlamydia fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/douching.html" title="Douching | womenshealth.gov">Douching fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/genital-herpes.html" title="Genital herpes | womenshealth.gov">Genital herpes fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/genital-warts.html" title="Genital warts | womenshealth.gov">Genital warts fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/gonorrhea.html" title="Gonorrhea | womenshealth.gov">Gonorrhea fact sheet</a></li>
	<li><a href="/hiv-and-aids/" title="HIV and AIDS | womenshealth.gov">HIV/AIDS</a></li>
	<li><a href="/publications/our-publications/fact-sheet/human-papillomavirus.html" title="Human papillomavirus | womenshealth.gov">Human papillomavirus (HPV)</a></li>
	<li><a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test fact sheet</a></li>
	<li><a href="/pregnancy/index.html" title="Pregnancy | womenshealth.gov">Pregnancy</a></li>
	<li><a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STI) | womenshealth.gov">Sexually transmitted diseases fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/sti-pregnancy-breastfeeding.html" title="Sexually transmitted infections, pregnancy, and breastfeeding | womenshealth.gov">Sexually transmitted infections, pregnancy, and breastfeeding</a></li>
	<li><a href="/publications/our-publications/fact-sheet/syphilis.html" title="Syphilis fact sheet | womenshealth.gov">Syphilis fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/trichomoniasis.html" title="Trichomoniasis | womenshealth.gov">Trichomoniasis fact sheet</a></li>
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
	<li>Centers for Disease Control and Prevention. (2014).&nbsp;<a href="http://www.cdc.gov/std/stats13/tables/45.htm" target="_blank" title="Table 45 | Sexually Transmitted Disease Surveillance 2013 | CDC">2013 Sexually Transmitted Diseases Surveillance</a>.</li>
	<li>Leichliter, J., Chandra, A., Aral, S.O. (2013).&nbsp;<a href="http://www.cdc.gov/std/stats13/figures/e.htm" target="_blank" title="2013 STD Surveillance - Figure E">Correlates of Self-Reported Pelvic Inflammatory Disease Treatment in Sexually Experienced Reproductive-Aged Women in the United States, 1995 and 2006–2010</a>.&nbsp;<em>Sex Transm Dis;</em>&nbsp;40(5):413–418.</li>
	<li>Centers for Disease Control and Prevention. (2015).&nbsp;<a href="http://www.cdc.gov/std/pid/stdfact-pid.htm" target="_blank" title="Pelvic Inflammatory Disease - CDC Fact Sheet">PID</a>.</li>
	<li>Centers for Disease Control and Prevention. (2015).&nbsp;<a href="http://www.cdc.gov/std/tg2015/pid.htm" target="_blank" title="Pelvic Inflammatory Disease (PID) - 2015 STD Treatment Guidelines">2015 Sexually Transmitted Diseases Treatment Guidelines: Pelvic Inflammatory Disease (PID)</a>.</li>
	<li>Centers for Disease Control and Prevention. (2014).&nbsp;<a href="http://www.cdc.gov/std/stats13/womenandinf.htm#pid" target="_blank" title="2013 STD Surveillance STDs in Women and Infants | CDC">STDs in Women and Infants</a>.</li>
	<li>Weström, L., Joesoef, R., Reynolds, G., Hagdu, A., Thompson, S.E. (1992).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/1411832" target="_blank" title="Pelvic inflammatory disease and fertility. A cohort study of 1,844 women with laparoscopically verified disease and 657 control women with normal l… - PubMed - NCBI<br />
">Pelvic inflammatory disease and fertility. A cohort study of 1,844 women with laparoscopically verified disease and 657 control women with normal laparoscopic results</a>.&nbsp;<em>Sexually Transmitted Diseases;</em>&nbsp;19(4): 185–192.</li>
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
