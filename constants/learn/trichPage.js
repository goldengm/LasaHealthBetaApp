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

export function trichPage({ navigation, ...rest }) {
  const condName = "Trichomoniasis";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Trichomoniasis.jpg?VersionId=l.qgxL2RzZM2R8IpLRygiUa1BacYaUE1";
  const condDescription =
    "Trichomoniasis (TRIK-uh-muh-NEYE-uh-suhss) or 'trich' is a sexually transmitted infection (STI) caused by a parasite. The parasite is spread most often through vaginal, oral, or anal sex. It is one of the most common STIs in the United States and affects more women than men. It is treated easily with antibiotics, but many women do not have symptoms. If left untreated, trichomoniasis can raise your risk of getting HIV.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Trichomoniasis.jpg?VersionId=l.qgxL2RzZM2R8IpLRygiUa1BacYaUE1"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Trichomoniasis</h1>  -->
            <p>Trichomoniasis&nbsp;(TRIK-uh-muh-NEYE-uh-suhss)&nbsp;or "trich" is a&nbsp;<a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STI) fact sheet | womenshealth.gov">sexually transmitted infection (STI)</a>&nbsp;caused by a&nbsp;<a href="/glossary/#parasite" title="Glossary definition of parasite | womenshealth.gov">parasite</a>. The parasite is spread most often through vaginal, oral, or anal sex. It is one of the most common STIs in the United States and affects more women than men. It is treated easily with antibiotics, but many women do not have symptoms. If left untreated, trichomoniasis can raise your risk of getting HIV.</p>

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
      title: "What is trichomoniasis?",
      content: `

    <div class="answer"><p>Trichomoniasis is an STI caused by a&nbsp;<a href="/glossary#parasite" title="glossary definition of parasite | womenshealth.gov">parasite</a>. It is one of the most common STIs in the United States.<sup><a href="#references" title="Sources">1</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets trichomoniasis?",
      content: `

    <div class="answer"><p>Trichomoniasis is more common in women than men. It affects more than 2 million women ages 14 to 49 in the United States.<sup><a href="#references" title="Sources">2</a></sup></p>

<p>Trichomoniasis affects more African-American women than white and Hispanic women. The risk for African-American women goes up with age and lifetime number of sex partners.<sup><a href="#references" title="Sources">2</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get trichomoniasis?",
      content: `

    <div class="answer"><p>Trichomoniasis is spread through:</p>

<ul>
	<li>Vaginal, oral, or anal sex. Trichomoniasis can be spread even if there are no symptoms. This means you can get trichomoniasis from someone who has no signs or symptoms.</li>
	<li>Genital touching. A man does not need to ejaculate (come) for trichomoniasis to spread. Trichomoniasis can also be passed between women who have sex with women.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of trichomoniasis?",
      content: `

    <div class="answer"><p>Most infected women have no symptoms. If you do get symptoms, they might appear five to 28 days after exposure and can include:</p>

<ul>
	<li>Irritation and itching in the genital area</li>
	<li>Thin or frothy discharge with an unusual foul odor that can be clear, white, yellowish, or greenish</li>
	<li>Discomfort during sex and when urinating</li>
	<li>Lower abdominal pain (this is rare)</li>
</ul>

<p>If you think you may have trichomoniasis, you and your sex partner(s) need to see a doctor or nurse as soon as possible.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is trichomoniasis diagnosed?",
      content: `

    <div class="answer"><p>To find out whether you have trichomoniasis, your doctor or nurse may:</p>

<ul>
	<li>Do a&nbsp;<a href="/glossary#pelvic" title="glossary definition of pelvic exam | womenshealth.gov">pelvic exam</a></li>
	<li>Use a cotton swab to take a fluid sample from your vagina to look for the parasite under a microscope</li>
	<li>Do a lab test, such as a&nbsp;<a href="/glossary#dna" title="glossary definition of DNA test | womenshealth.gov">DNA test</a>&nbsp;or a fluid culture. A culture tests uses urine or a swab from your vagina. The parasite then grows in a lab. It takes up to a week for the parasite to grow enough to be seen.</li>
</ul>

<p>A&nbsp;<a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test</a>&nbsp;is&nbsp;<em>not</em>&nbsp;used to detect trichomoniasis.</p>

<p>If you have trichomoniasis, you need to be tested for other STIs too.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is trichomoniasis treated?",
      content: `

    <div class="answer"><p>Trichomoniasis is easily cured with one of two antibiotics:</p>

<ul>
	<li>Metronidazole&nbsp;(me-truh-NYD-uh-zohl)</li>
	<li>Tinidazole&nbsp;(teye-NID-uh-zohl)</li>
</ul>

<p>These antibiotics are usually a pill you swallow in a single dose.</p>

<p>If you are treated for trichomoniasis, your sex partner(s) needs to be treated too. Do not have sex until you and your sex partner(s) finish taking all of the antibiotics and have no symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if trichomoniasis is not treated?",
      content: `

    <div class="answer"><p>Most people with trichomoniasis have no symptoms and never know they have it. Even without symptoms, it can be passed to others.</p>

<p>If you have trichomoniasis, you are at higher risk of getting&nbsp;<a href="/glossary#HIV" title="glossary definition of HIV | womenshealth.gov">HIV</a>&nbsp;(the virus that causes AIDS) if you are exposed to HIV. If you are HIV-positive, having trichomoniasis also raises your risk of passing HIV to your sex partner(s). The Centers for Disease Control and Prevention recommends that women with HIV get screened for trichomoniasis at least once a year.<sup><a href="#references" title="Sources">3</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I have trichomoniasis?",
      content: `

    <div class="answer"><p>Trichomoniasis is easy to treat. But you need to be tested and treated as soon as possible.</p>

<p>If you have trichomoniasis:</p>

<ul>
	<li><strong>See a doctor or nurse as soon as possible.</strong>&nbsp;Antibiotics will treat trichomoniasis.</li>
	<li><strong>Take all of your medicine.</strong>&nbsp;Even if symptoms go away, you need to finish all of the antibiotics.</li>
	<li><strong>Tell your sex partner(s)</strong>&nbsp;so they can be tested and treated.</li>
	<li><strong>Avoid sexual contact until you and your partner(s) have been treated and cured.</strong>&nbsp;Even after you finish your antibiotics, you can get trichomoniasis again if you have sex with someone who has trichomoniasis.</li>
	<li><strong>See your doctor or nurse again if you have symptoms that don't go away</strong>&nbsp;within a few days after finishing the antibiotics.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does trichomoniasis affect pregnancy?",
      content: `

    <div class="answer"><p>Pregnant women with trichomoniasis are at higher risk of premature birth (babies born before 37 weeks of pregnancy) or a low-birth-weight baby (less than 5 1/2 pounds). Premature birth and a low birth weight raise the risk of health and developmental problems at birth and later in life.</p>

<p>The antibiotic metronidazole can be used to treat trichomoniasis during any stage of pregnancy. Talk to your doctor about the benefits and risks of taking any medicine during pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I take medicine for trichomoniasis if I am breastfeeding? ",
      content: `

    <div class="answer"><p>You can take the antibiotic metronidazole if you are breastfeeding. Your doctor may suggest waiting 12 to 24 hours after taking metronidazole before breastfeeding. Do not take tinidazole if you are breastfeeding.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent trichomoniasis?",
      content: `

    <div class="answer"><p>The best way to prevent trichomoniasis or any STI is to not have vaginal, oral, or anal sex.</p>

<p>If you do have sex, lower your risk of getting an STI with the following steps:</p>

<ul>
	<li><strong>Use condoms.</strong>&nbsp;Condoms are the best way to prevent STIs when you have sex. Because a man does not need to ejaculate (come) to give or get trichomoniasis, make sure to put the condom on before the penis touches the vagina, mouth, or anus. Other methods of&nbsp;<a href="/a-z-topics/birth-control-methods" title="Birth control methods fact sheet | womenshealth.gov">birth control</a>, like birth control pills, shots, implants, or&nbsp;<a href="/glossary#diaphragm" title="glossary definition of diaphragm | womenshealth.gov">diaphragms</a>, will not protect you from STIs.</li>
	<li><strong>Get tested.</strong>&nbsp;Be sure you and your partner are tested for STIs. Talk to each other about the test results before you have sex.</li>
	<li><strong>Be monogamous.</strong>&nbsp;Having sex with just one partner can lower your risk for STIs. After being tested for STIs, be faithful to each other. That means that you have sex only with each other and no one else.</li>
	<li><strong>Limit your number of sex partners.</strong>&nbsp;Your risk of getting STIs goes up with the number of partners you have.</li>
	<li><strong>Do not douche.</strong>&nbsp;<a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet | womenshealth.gov">Douching</a>&nbsp;removes some of the normal bacteria in the vagina that protects you from infection. This may increase your risk of getting STIs.</li>
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
      title: "Can women who have sex with women get trichomoniasis?",
      content: `

    <div class="answer"><p>Yes. It is possible to get trichomoniasis, or any other STI, if you are a woman who has sex only with women.</p>

<p>Talk to your partner about her sexual history before having sex, and ask your doctor about getting tested if you have signs or symptoms of trichomoniasis.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about trichomoniasis?",
      content: `

    <div class="answer"><p>For more information about trichomoniasis, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/nchhstp/" target="_blank" title="CDC - NCHHSTP Home">National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP), CDC, HHS</a><br>
	<strong>Phone Number:</strong>&nbsp;800-232-4636</li>
	<li><a href="http://www.niaid.nih.gov/" target="_blank" title="National Institute of Allergy and Infectious Diseases (NIAID)">National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</a><br>
	<strong>Phone Number:</strong>&nbsp;866- 284-4107 (TDD: 800-877-8339)</li>
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
      title: "Related information from womenshealth.gov",
      content: `

    <div class="answer"><ul>
	<li><a href="/publications/our-publications/fact-sheet/chlamydia.html" title="Chlamydia | womenshealth.gov">Chlamydia fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/genital-herpes.html" title="Genital herpes | womenshealth.gov">Genital herpes fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/genital-warts.html" title="Genital warts | womenshealth.gov">Genital warts fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/gonorrhea.html" title="Gonorrhea | womenshealth.gov">Gonorrhea fact sheet</a></li>
	<li><a href="/hiv-and-aids/" title="HIV and AIDS | womenshealth.gov">HIV/AIDS</a></li>
	<li><a href="/publications/our-publications/fact-sheet/human-papillomavirus.html" title="Human papillomavirus | womenshealth.gov">Human papillomavirus (HPV)</a></li>
	<li><a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/pelvic-inflammatory-disease.html" title="Pelvic inflammatory disease | womenshealth.gov">Pelvic inflammatory disease fact sheet</a></li>
	<li><a href="/pregnancy/index.html" title="Pregnancy | womenshealth.gov">Pregnancy</a></li>
	<li><a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs) | womenshealth.gov">Sexually transmitted infections fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/sti-pregnancy-breastfeeding.html" title="Sexually transmitted infections, pregnancy, and breastfeeding | womenshealth.gov">Sexually transmitted infections, pregnancy, and breastfeeding</a></li>
	<li><a href="/publications/our-publications/fact-sheet/syphilis.html" title="Syphilis fact sheet | womenshealth.gov">Syphilis fact sheet</a></li>
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
	<li>Centers for Disease Control and Prevention. (2017).&nbsp;<a href="http://www.cdc.gov/std/trichomonas/stdfact-trichomoniasis.htm" target="_blank" title="STD Facts - Trichomoniasis">Trichomoniasis – CDC Fact Sheet</a>.</li>
	<li>Centers for Disease Control and Prevention. (2017).&nbsp;<a href="http://www.cdc.gov/std/trichomonas/stats.htm" target="_blank" title="CDC - Trichomoniasis Statistics">Trichomoniasis Statistics</a></li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="https://www.cdc.gov/std/tg2015/trichomoniasis.htm">2015 Sexually Transmitted Diseases Treatment Guidelines; Diseases Characterized by Vaginal Discharge; Trichomoniasis</a>.</li>
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
