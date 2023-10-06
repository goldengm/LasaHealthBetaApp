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

export function genWarPage({ navigation, ...rest }) {
  const condName = "Genital Warts";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Genitalwarts.jpg?VersionId=2.WCclgDW99hY1Zd0yNT9EAG8nZeBNTa";
  const condDescription =
    "Genital warts are a type of sexually transmitted infection (STI) caused by the human papillomavirus (HPV). You can get genital warts through vaginal, oral, or anal sex. Genital warts appear as a small bump or group of bumps in the genital area. There is no treatment for HPV, but genital warts can be treated by your doctor.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Genitalwarts.jpg?VersionId=2.WCclgDW99hY1Zd0yNT9EAG8nZeBNTa"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Genital warts</h1>  -->
            <p><strong>Genital warts</strong> are a type of&nbsp;<a href="/a-z-topics/sexually-transmitted-infections" title="Sexually transmitted infections (STIs) | womenshealth.gov">sexually transmitted infection</a>&nbsp;(STI) caused by the&nbsp;<a href="/a-z-topics/human-papillomavirus" title="Human papillomavirus | womenshealth.gov">human papillomavirus</a>&nbsp;(HPV). You can get genital warts through vaginal, oral, or anal sex. Genital warts appear as a small bump or group of bumps in the genital area. There is no treatment for HPV, but genital warts can be treated by your doctor.</p>

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
      title: "What are genital warts?",
      content: `

    <div class="answer"><p>Genital warts are a type of STI caused by the human papillomavirus (HPV). While there is no cure for&nbsp;<a href="/a-z-topics/human-papillomavirus" title="Human papillomavirus | womenshealth.gov">HPV</a>, you can get treated for genital warts. Genital warts appear as a small bump or group of bumps in the genital area. Some genital warts are so small you cannot see them.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets genital warts?",
      content: `

    <div class="answer"><p>About 400,000 Americans get genital warts each year.<sup><a href="#references" title="Sources">1</a></sup>&nbsp;Researchers estimate that genital warts are more common in men.<sup><a href="#references" title="Sources">2</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get genital warts?",
      content: `

    <div class="answer"><p>Nearly all cases of genital warts are caused by HPV.</p>

<p>Genital warts are spread most often through direct skin-to-skin contact during vaginal or anal sex. HPV, the virus that causes genital warts, can be spread even if the person does not have any genital warts that you can see.</p>

<p>Rarely, genital warts are spread:</p>

<ul>
	<li>By giving oral sex to someone who has HPV or genital warts</li>
	<li>By receiving oral sex from someone who has HPV or genital warts on his or her mouth, lips, or tongue</li>
	<li>During childbirth from a woman to her baby</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the signs and symptoms of genital warts?",
      content: `

    <div class="answer"><p>Genital warts usually appear as a small bump or group of bumps in the genital area. They are flesh-colored and can be flat or look bumpy like cauliflower. Some genital warts are so small you cannot see them.</p>

<p>In women, genital warts can grow:</p>

<ul>
	<li>Inside the vagina</li>
	<li>On the&nbsp;<a href="/glossary#vulva" title="glossary definition of vulva | womenshealth.gov">vulva</a>, cervix, or groin</li>
	<li>In or around the anus</li>
	<li>On the lips, mouth, tongue, or throat (this is very rare)</li>
</ul>

<p>In men, genital warts can grow:</p>

<ul>
	<li>On the penis</li>
	<li>On the scrotum, thigh, or groin</li>
	<li>In or around the anus</li>
	<li>On the lips, mouth, tongue, or throat (this is very rare)</li>
</ul>

<p>Genital warts can cause itching, burning, and discomfort. Talk to your doctor if you think you have genital warts.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How long does it take for genital warts to appear?",
      content: `

    <div class="answer"><p>Warts usually appear within months after having sexual contact with someone with the HPV types that cause genital warts. Sometimes the warts appear in just days or weeks, while other people do not show genital warts until years later. Some people may get HPV but never get genital warts.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are genital warts treated?",
      content: `

    <div class="answer"><p>There is no cure for HPV, but genital warts can be removed. If you decide to have warts removed, do not use over-the-counter medicines meant for other kinds of warts. There are special, prescription-only treatments for genital warts. Your doctor or nurse must prescribe the medicine for you.</p>

<p>Your doctor or nurse may apply a chemical to treat the warts in the doctor's office, or prescribe a cream for you to apply at home. Surgery is also an option. Your doctor may:</p>

<ul>
	<li>Use an electric current to burn off the warts</li>
	<li>Use a light/laser to destroy warts</li>
	<li>Freeze off the warts</li>
	<li>Cut out the warts</li>
</ul>

<p>Treatment can only remove the genital wart. Treatment does not cure HPV, the virus that causes genital warts.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I have to treat genital warts?",
      content: `

    <div class="answer"><p>No. Some people choose not to treat genital warts. If left untreated, genital warts may go away, stay the same, or grow in size and number. Genital warts will not turn into cancer.</p>

<p>Even if you treat the genital warts, you can still spread genital warts and HPV, the virus that causes genital warts, to other people. Doctors do not know how long you are contagious after warts appear.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Could I still have HPV if I get my genital warts removed? ",
      content: `

    <div class="answer"><p>Yes. Even when warts are treated, you may still have HPV. This is why warts can come back after treatment. You can still spread HPV to other people after genital warts are removed.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do genital warts affect pregnancy?",
      content: `

    <div class="answer"><p>If you had genital warts that went away on their own or were treated, you will probably not have any problems during your pregnancy. Tell your doctor or nurse if you or your partner has ever had genital warts.</p>

<p>Genital warts in women during pregnancy might:</p>

<ul>
	<li>Bleed and grow (in size and number) due to hormonal changes in the body during pregnancy.</li>
	<li>Block the birth canal. If this happens, you may need a cesarean section (C-section) delivery.</li>
	<li>Expose babies to HPV types that cause warts in the babies' airways. This very rare condition is called&nbsp;<a href="http://www.nidcd.nih.gov/health/voice/pages/laryngeal.aspx" target="_blank" title="Recurrent Respiratory Papillomatosis or Laryngeal Papillomatosis [NIDCD]">recurrent respiratory papillomatosis</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent genital warts?",
      content: `

    <div class="answer"><p>The best way to prevent genital warts or any STI is to not have vaginal, oral, or anal sex.</p>

<p>If you do have sex, lower your risk of getting an STI with the following steps:</p>

<ul>
	<li><strong>Get the HPV vaccine.</strong> The Food and Drug Administration (FDA) approved the HPV vaccine for people ages 9 through 45. The HPV vaccine protects against HPV types that cause most genital warts and most cervical cancers.&nbsp;Find a clinic near you where you can <a href="https://vaccinefinder.org/" title="HealthMap Vaccine Finder" class="external-link external-popup" target="_blank">get the HPV vaccine <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li><strong>Use condoms.</strong> Condoms are the best way to prevent STIs when you have sex. Make sure to put the condom on before the penis touches the vagina, mouth, or anus. HPV, the virus that causes genital warts, can infect areas that are not covered by a condom. You can get genital warts from direct skin-to-skin contact. Other methods of <a href="/a-z-topics/birth-control-methods" title="Birth control methods fact sheet | womenshealth.gov">birth control</a>, like birth control pills, shots, implants, or <a href="/glossary#diaphragm" title="glossary definition of diaphragm | womenshealth.gov">diaphragms</a>, will not protect you from STIs.</li>
	<li><strong>Get tested.</strong> Be sure you and your partner are tested for STIs. Talk to each other about the test results before you have sex.</li>
	<li><strong>Be monogamous.</strong> Having sex with just one partner can lower your risk for STIs. After being tested for STIs, be faithful to each other. That means that you have sex only with each other and no one else.</li>
	<li><strong>Limit your number of sex partners.</strong> Your risk of getting STIs goes up with the number of partners you have.</li>
	<li><strong>Do not douche.</strong> <a href="/a-z-topics/douching" title="Douching fact sheet | womenshealth.gov">Douching</a> removes some of the normal bacteria in the vagina that protects you from infection. This may increase your risk of getting STIs.</li>
	<li><strong>Be aware of how much alcohol you drink and keep control of your own drink. </strong>Some people use alcohol or drugs as a way to make a person drunk or high. Someone who is drunk, drugged, or high on drugs is unable to consent or understand what is happening. This puts you at risk of sexual assault and possible exposure to STIs.</li>
</ul>

<p>The steps work best when used together. No single step can protect you from every single type of STI.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can women who have sex with women get genital warts?",
      content: `

    <div class="answer"><p>Yes. It is possible to get genital warts, or any other STI, if you are a woman who has sex only with women.</p>

<p>Talk to your partner about her sexual history before having sex, and ask your doctor about getting tested if you have signs or symptoms of genital warts.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about genital warts?",
      content: `

    <div class="answer"><p>For more information about genital warts, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

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
	<li>Centers for Disease Control and Prevention. (2015).&nbsp;<a href="http://www.cdc.gov/std/stats13/tables/45.htm" target="_blank" title="Table 45 | Sexually Transmitted Disease Surveillance 2013 | CDC">Sexually Transmitted Disease Surveillance 2013 – Table 45</a>.</li>
	<li>Centers for Disease Control and Prevention. (2015).&nbsp;<a href="http://www.cdc.gov/std/stats13/figures/51.htm" target="_blank" title="2013 STD Surveillance - Figure 51">Sexually Transmitted Disease Surveillance 2013 – Figure 51</a>.</li>
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
