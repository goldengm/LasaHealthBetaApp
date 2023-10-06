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

export function chlamydiaPage({ navigation, ...rest }) {
  const condName = "Chlamydia";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Chlamydia.jpg?VersionId=iGWpnn404A57MvIhpJzdhe.w.xMyC_OJ";
  const condDescription =
    "Chlamydia is a sexually transmitted infection (STI). Chlamydia is usually spread through vaginal, oral, or anal sex. Chlamydia is one of the most common STIs in women, especially young women ages 15 to 24. It often has no symptoms. Antibiotics can treat chlamydia. If left untreated, chlamydia can cause serious health problems for women, such as difficulty getting pregnant.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Chlamydia.jpg?VersionId=iGWpnn404A57MvIhpJzdhe.w.xMyC_OJ"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Chlamydia</h1>  -->
            <p><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="kluh-MID-ee-uh">Chlamydia</a> is a&nbsp;<a href="/a-z-topics/sexually-transmitted-infections" title="Sexually transmitted infections (STIs) | womenshealth.gov">sexually transmitted infection (STI)</a>. </strong>Chlamydia is usually spread through vaginal, oral, or anal sex. Chlamydia is one of the most common STIs in women, especially young women ages 15 to 24. It often has no symptoms. Antibiotics can treat chlamydia. If left untreated, chlamydia can cause serious health problems for women, such as difficulty getting pregnant.</p>

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
      title: "What is chlamydia?",
      content: `

    <div class="answer"><p>Chlamydia is an&nbsp;<a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs) | womenshealth.gov">STI</a>&nbsp;that is caused by the bacteria&nbsp;<em>Chlamydia trachomatis.</em>&nbsp;It is an especially serious problem for women because it can damage the female reproductive organs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets chlamydia?",
      content: `

    <div class="answer"><p>Chlamydia is one of the most common STIs for women in the United States. In 2015, more than 1 million women in the United States were diagnosed with chlamydia.<sup><a href="#references" title="Sources">1</a></sup> It is most common in young women 15 to 24 years old.<sup><a href="#references" title="Sources">2</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get chlamydia?",
      content: `

    <div class="answer"><p>Chlamydia is spread through:</p>

<ul>
	<li>Vaginal, oral, or anal sex. Chlamydia can be spread even if there are no symptoms. This means you can get chlamydia from someone who has no symptoms.</li>
	<li>Genital touching. A man does not need to ejaculate (come) for chlamydia to spread. Chlamydia can also be passed between women who have sex with women.</li>
	<li>Childbirth from a mother to her baby</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of chlamydia?",
      content: `

    <div class="answer"><p>Chlamydia is known as a "silent" infection, because most women who have chlamydia do not have symptoms. If you do have symptoms, you may not notice them until several weeks after you get chlamydia.</p>

<p>Symptoms may include:</p>

<ul>
	<li>Bleeding between periods</li>
	<li>Burning when urinating</li>
	<li>Fever</li>
	<li>Low back pain</li>
	<li>Lower abdominal pain</li>
	<li>Nausea</li>
	<li>Pain during sex</li>
	<li>Unusual vaginal discharge</li>
</ul>

<p>If you think you may have chlamydia, you and your sex partner(s) need to see a doctor as soon as possible.</p>

<p>Chlamydia that does not have any symptoms can still lead to future health problems (including not being able to get pregnant). The only way to know if you or a partner has chlamydia is to get tested.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to get tested for chlamydia?",
      content: `

    <div class="answer"><ul>
	<li>If you are <strong>24 or younger and have sex,</strong> you need to get tested for chlamydia.<sup><a href="#references" title="Sources">3</a></sup> Chlamydia is most common in women between 15 and 24 years old.<sup><a href="#references" title="Sources">2</a></sup> You need to get tested if you have had any symptoms of chlamydia since your last negative test result or if your sex partner has chlamydia.</li>
	<li>If you are <strong>older than 24,</strong> you need to get tested if, in the past year or since your last test, you:<sup><a href="#references" title="Sources">3</a></sup>
	<ul>
		<li>Had a new sex partner</li>
		<li>Had your sex partner tell you they have chlamydia</li>
		<li>Traded sex for money or drugs</li>
		<li>Have had chlamydia or another STI in the past</li>
		<li>Did not use condoms during sex and are in a relationship that is not monogamous, meaning you or your partner has sex with other people</li>
	</ul>
	</li>
</ul>

<p>You also need to be tested if you are pregnant or if you have any symptoms of chlamydia.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is chlamydia diagnosed?",
      content: `

    <div class="answer"><p>There are two ways that a doctor or nurse tests for chlamydia:</p>

<ul>
	<li>A <strong>urine test.</strong> This is the most common. You urinate (pee) into a cup. Your urine is then tested for chlamydia.</li>
	<li>A <strong>swab test.</strong> Your doctor uses a cotton swab to take a fluid sample from an infected place (vagina, cervix, rectum, or throat). The fluid is then tested for chlamydia.</li>
</ul>

<p>A <a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test</a> is <em>not</em> used to detect chlamydia.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is chlamydia treated?",
      content: `

    <div class="answer"><p>Your doctor or nurse will prescribe antibiotics to treat chlamydia. Antibiotics can cure chlamydia. But they cannot fix any permanent damage done to your body, including scarring of your reproductive organs. For this reason, you should get tested and take the antibiotics as soon as possible.</p>

<p>For the antibiotics to work, you must finish all of the antibiotics that your doctor gives you, even if the symptoms go away. Do not share your antibiotics for chlamydia with anyone. If symptoms do not go away after treatment, see your doctor or nurse.</p>

<p>Tell your doctor if you are pregnant. Your doctor can give you antibiotics that are safe to take during pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if chlamydia is not treated?",
      content: `

    <div class="answer"><p>Untreated chlamydia can cause serious health problems in women, including:</p>

<ul>
	<li><a href="/publications/our-publications/fact-sheet/pelvic-inflammatory-disease.html" title="Pelvic inflammatory disease | womenshealth.gov">Pelvic inflammatory disease</a> (PID), an infection of a woman's reproductive organs. PID can lead to chronic pelvic pain, pregnancy problems, and infertility (meaning you can't get pregnant). Untreated chlamydia is a common cause of PID. It affects about 10% to 15% of women with untreated chlamydia.<sup><a href="#references" title="Sources">4</a></sup></li>
	<li>Increased risk of getting HIV (the virus that causes AIDS) from sexual activity</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I have chlamydia?",
      content: `

    <div class="answer"><p>Chlamydia is easy to treat. But you need to be tested and treated as soon as possible.</p>

<p>If you have chlamydia:</p>

<ul>
	<li><strong>See a doctor or nurse as soon as possible.</strong> Antibiotics will treat chlamydia, but they will not fix any permanent damage to your reproductive organs.</li>
	<li><strong>Take all of your medicine.</strong> Even if symptoms go away, you need to finish all of the antibiotics.</li>
	<li><strong>Tell your sex partner(s)</strong> so they can be tested and treated. If they are not tested and treated you could get chlamydia again.</li>
	<li><strong>Avoid sexual contact until you and your partner(s) have been treated and cured.</strong> Even after you finish your antibiotics, you can get chlamydia again if you have sex with someone who has chlamydia.</li>
	<li><strong>See your doctor or nurse again if you have symptoms that don't go away</strong> within a few days after finishing the antibiotics.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does chlamydia affect pregnancy?",
      content: `

    <div class="answer"><p>For pregnant women, chlamydia may lead to premature birth, or babies born before 37 weeks of pregnancy. Premature birth is the most common cause of infant death and can lead to long-term health and development problems in children.<sup><a href="#references" title="Sources">5</a></sup></p>

<p>Babies born to mothers who have chlamydia can get:</p>

<ul>
	<li><strong>Infections in their eyes,</strong> called conjunctivitis (kuhn-junk-tih-VEYE-tuhss) or pinkeye. Signs include discharge from the eyes and swollen eyelids. The signs most often show up within two weeks after birth.</li>
	<li><strong>Pneumonia.</strong> Signs include congestion, cough, and rapid or labored breathing, although these are not always present. Signs most often show up one to three months after birth.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent chlamydia?",
      content: `

    <div class="answer"><p>The best way to prevent chlamydia or any STI is to not have vaginal, oral, or anal sex.</p>

<p>If you do have sex, lower your risk of getting an STI with the following steps:</p>

<ul>
	<li><strong>Use condoms.</strong> Condoms are the best way to prevent STIs when you have sex. Because a man does not need to ejaculate (come) to give or get chlamydia, make sure to put the condom on before the penis touches the vagina, mouth, or anus. Other methods of <a href="/a-z-topics/birth-control-methods" title="Birth control methods | womenshealth.gov">birth control</a>, like birth control pills, shots, implants, or <a href="/glossary#diaphragm" title="glossary definition of diaphragm | womenshealth.gov">diaphragms</a>, will not protect you from STIs.</li>
	<li><strong>Get tested.</strong> Be sure you and your partner are tested for STIs. Talk to each other about the test results before you have sex.</li>
	<li><strong>Be monogamous.</strong> Having sex with just one partner can lower your risk for STIs. After being tested for STIs, be faithful to each other. That means that you have sex only with each other and no one else.</li>
	<li><strong>Limit your number of sex partners.</strong> Your risk of getting STIs goes up with the number of partners you have.</li>
	<li><strong>Do not douche.</strong> <a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet | womenshealth.gov">Douching</a> removes some of the normal bacteria in the vagina that protects you from infection. This may increase your risk of getting STIs.<sup><a href="#references" title="Sources">4</a></sup></li>
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
      title: "Can women who have sex with women get chlamydia?",
      content: `

    <div class="answer"><p>Yes. It is possible to get chlamydia, or any other STI, if you are a woman who has sex only with women. Chlamydia lives in the reproductive tract of an infected woman and can pass to a sex partner, whether male or female.</p>

<p>Talk to your partner about her sexual history before having sex, and ask your doctor or nurse for an STI test if you are at risk.<sup><a href="#references" title="Sources">6</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about chlamydia?",
      content: `

    <div class="answer"><p>For more information about chlamydia, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/nchhstp/" target="_blank" title="CDC - NCHHSTP Home">National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP), CDC, HHS</a><br>
	<strong>Phone Number:</strong> 800-232-4636</li>
	<li><a href="http://www.niaid.nih.gov" target="_blank" title="National Institute of Allergy and Infectious Diseases (NIAID)">National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</a><br>
	<strong>Phone Number:</strong> 866-284-4107 (TDD: 800-877-8339)</li>
	<li><a href="http://www.ashasexualhealth.org/" title="American Sexual Health Association" class="external-link external-popup" target="_blank">American Sexual Health Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
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
      title: "Related information from womenshealth.gov",
      content: `

    <div class="answer"><ul>
	<li><a href="/publications/our-publications/fact-sheet/genital-herpes.html" title="Genital herpes | womenshealth.gov">Genital herpes</a></li>
	<li><a href="/publications/our-publications/fact-sheet/genital-warts.html" title="Genital warts | womenshealth.gov">Genital warts</a></li>
	<li><a href="/publications/our-publications/fact-sheet/gonorrhea.html" title="Gonorrhea | womenshealth.gov">Gonorrhea</a></li>
	<li><a href="/hiv-and-aids/" title="HIV and AIDS | womenshealth.gov">HIV and AIDS</a></li>
	<li><a href="/publications/our-publications/fact-sheet/human-papillomavirus.html" title="Human papillomavirus | womenshealth.gov">Human papillomavirus (HPV)</a></li>
	<li><a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test</a></li>
	<li><a href="/publications/our-publications/fact-sheet/pelvic-inflammatory-disease.html" title="Pelvic inflammatory disease | womenshealth.gov">Pelvic inflammatory disease</a></li>
	<li><a href="/pregnancy/index.html" title="Pregnancy | womenshealth.gov">Pregnancy</a></li>
	<li><a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs) | womenshealth.gov">Sexually transmitted infections (STI)</a></li>
	<li><a href="/publications/our-publications/fact-sheet/sti-pregnancy-breastfeeding.html" title="Sexually transmitted infections, pregnancy, and breastfeeding | womenshealth.gov">Sexually transmitted infections, pregnancy, and breastfeeding</a></li>
	<li><a href="/publications/our-publications/fact-sheet/syphilis.html" title="Syphilis fact sheet | womenshealth.gov">Syphilis</a></li>
	<li><a href="/publications/our-publications/fact-sheet/trichomoniasis.html" title="Trichomoniasis | womenshealth.gov">Trichomoniasis</a></li>
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
	<li>Centers for Disease Control and Prevention. (2016).&nbsp;<a href="https://www.cdc.gov/std/stats15/tables/4.htm">2015 Sexually Transmitted Disease Surveillance, Table 4</a>.</li>
	<li>Centers for Disease Control and Prevention. 2016).&nbsp;<a href="https://www.cdc.gov/std/stats15/figures/5.htm">2015 Sexually Transmitted Disease Surveillance, Figure 5.</a></li>
	<li>U.S. Preventive Services Task Force. (2014). <a href="http://www.uspreventiveservicestaskforce.org/Page/Topic/recommendation-summary/chlamydia-and-gonorrhea-screening?ds=1&amp;s=chlamydia" target="_blank" title="Final Update Summary: Chlamydia and Gonorrhea: Screening - US Preventive Services Task Force" class="external-link external-popup">Chlamydia and Gonorrhea: Screening <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/STD/infertility/default.htm" target="_blank" title="Infertility &amp; STDs - STD Information from CDC">STDs and Infertility</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/reproductivehealth/maternalinfanthealth/PretermBirth.htm" target="_blank" title="Preterm Birth | Maternal and Infant Health | Reproductive Health | CDC">Preterm Birth</a>.</li>
	<li>Centers for Disease Control and Prevention. (2017). <a href="http://www.cdc.gov/std/tg2015/specialpops.htm" target="_blank" title="Special Populations - 2015 STD Treatment Guidelines">2015 Sexually Transmitted Diseases Treatment Guidelines: Special Populations</a>.</li>
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
