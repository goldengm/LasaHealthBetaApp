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

export function douchPage({ navigation, ...rest }) {
  const condName = "Douching";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Douching.jpg?VersionId=CJVZraHYgU3QQ9j3Ne5LCfNhlsvP0NPk";
  const condDescription =
    "The word 'douche' means to wash or soak. Douching is washing or cleaning out the inside of the vagina with water or other mixtures of fluids. Most douches are sold in stores as prepackaged mixes of water and vinegar, baking soda, or iodine. The mixtures usually come in a bottle or bag. You squirt the douche upward through a tube or nozzle into your vagina. The water mixture then comes back out through your vagina. \n Douching is different from washing the outside of your vagina during a bath or shower. Rinsing the outside of your vagina with warm water will not harm your vagina. But, douching can lead to many different health problems. \n Most doctors recommend that women do not douche.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Douching.jpg?VersionId=CJVZraHYgU3QQ9j3Ne5LCfNhlsvP0NPk"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Douching</h1>  -->
            <p><strong>Douching is washing or cleaning out the vagina with water or other mixtures of fluids.&nbsp;</strong>In the United States, almost one in five women 15 to 44 years old douche.&nbsp;Doctors recommend that you do <strong>not</strong> douche. Douching can lead to many health problems, including problems getting pregnant. Douching is also linked to vaginal infections and sexually transmitted infections (STIs).</p>

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
      title: "What is douching?",
      content: `

    <div class="answer"><p>The word "douche" means to wash or soak. Douching is washing or cleaning out the inside of the vagina with water or other mixtures of fluids. Most douches are sold in stores as prepackaged mixes of water and vinegar, baking soda, or iodine. The mixtures usually come in a bottle or bag. You squirt the douche upward through a tube or nozzle into your vagina. The water mixture then comes back out through your vagina.</p>

<p>Douching is different from washing the outside of your vagina during a bath or shower. Rinsing the outside of your vagina with warm water will not harm your vagina. But, douching can lead to many different health problems.</p>

<p>Most doctors recommend that women do not douche.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common is douching?",
      content: `

    <div class="answer"><p>In the United States, almost one in five women 15 to 44 years old douche.</p>

<p>More African-American and Hispanic women douche than white women.<a href="#references"><sup>2</sup></a>&nbsp;Douching is also common in teens of all races and ethnicities.<a href="#references"><sup>3,4</sup></a></p>

<p>Studies have not found any health benefit to douching. But, studies have found that <a href="#4" title="What health problems are linked to douching?">douching is linked to many health problems</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why should women not douche?",
      content: `

    <div class="answer"><p>Most doctors recommend that women do not douche. Douching can change the necessary balance of vaginal flora (bacteria that live in the vagina) and natural acidity in a healthy vagina.</p>

<p>A healthy vagina has good and harmful bacteria. The balance of bacteria helps maintain an acidic environment. The acidic environment protects the vagina from infections or irritation.</p>

<p>Douching can cause an overgrowth of harmful bacteria. This can lead to a&nbsp;<a href="/publications/our-publications/fact-sheet/vaginal-yeast-infections.html" title="Vaginal yeast infection | womenshealth.gov">yeast infection</a>&nbsp;or&nbsp;<a href="/publications/our-publications/fact-sheet/bacterial-vaginosis.html" title="Bacterial Vaginosis fact sheet | womenshealth.gov">bacterial vaginosis</a>. If you already have a vaginal infection, douching can push the bacteria causing the infection up into the&nbsp;<a href="/glossary#uterus" title="glossary definition of uterus | womenshealth.gov">uterus</a>,&nbsp;<a href="/glossary#fallopian" title="glossary definition of fallopian tubes | womenshealth.gov">fallopian tubes</a>, and&nbsp;<a href="/glossary#ovaries" title="glossary definition of ovaries | womenshealth.gov">ovaries</a>. This can lead to&nbsp;<a href="/publications/our-publications/fact-sheet/pelvic-inflammatory-disease.html" title="Pelvic inflammatory disease | womenshealth.gov">pelvic inflammatory disease</a>, a serious health problem.</p>

<p>Douching is also&nbsp;<a href="#4" title="What health problems are linked to douching?">linked to other health problems</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What health problems are linked to douching?",
      content: `

    <div class="answer"><p>Health problems linked to douching include:<a href="#references"><sup>5</sup></a></p>

<ul>
	<li><a href="/publications/our-publications/fact-sheet/bacterial-vaginosis.html" title="Bacterial Vaginosis fact sheet | womenshealth.gov">Bacterial vaginosis (BV)</a>, which is an infection in the vagina. Women who douche often (once a week) are five times more likely to develop BV than women who do not douche.<a href="#references"><sup>6</sup></a></li>
	<li><a href="/publications/our-publications/fact-sheet/pelvic-inflammatory-disease.html" title="Pelvic inflammatory disease | womenshealth.gov">Pelvic inflammatory disease</a>, an infection in the reproductive organs that is often caused by an&nbsp;<a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs) | womenshealth.gov">STI</a></li>
	<li><a href="#12" title="How does douching affect pregnancy?">Problems during pregnancy</a>, including preterm birth and ectopic pregnancy</li>
	<li>STIs, including HIV</li>
	<li>Vaginal irritation or dryness</li>
</ul>

<p>Researchers are studying whether douching causes these problems or whether women at higher risk for these health problems are more likely to douche.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Should I douche to get rid of vaginal odor or other problems? ",
      content: `

    <div class="answer"><p>No. You should not douche to try to get rid of vaginal odor or other vaginal problems like discharge, pain, itching, or burning.</p>

<p>Douching will only cover up odor for a short time and will make other problems worse. Call your doctor or nurse if you have:</p>

<ul>
	<li>Vaginal discharge that smells bad</li>
	<li>Vaginal itching and thick, white, or yellowish-green discharge with or without an odor</li>
	<li>Burning, redness, and swelling in or around the vagina</li>
	<li>Pain when urinating</li>
	<li>Pain or discomfort during sex</li>
</ul>

<p>These may be signs of a vaginal infection, or an STI. Do not douche before seeing your doctor or nurse. This can make it hard for the doctor or nurse to find out what may be wrong.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Should I douche to clean inside my vagina?",
      content: `

    <div class="answer"><p>No. Doctors recommend that women do not douche. You do not need to douche to clean your vagina. Your body naturally flushes out and cleans your vagina. Any strong odor or irritation usually means something is wrong.</p>

<p>Douching also can raise your chances of a vaginal infection or an STI. If you have questions or concerns, talk to your doctor.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the best way to clean my vagina?",
      content: `

    <div class="answer"><p>It is best to let your vagina clean itself. The vagina cleans itself naturally by making mucous. The mucous washes away blood, semen, and vaginal discharge.</p>

<p>If you are worried about vaginal odor, talk to your doctor or nurse. But you should know that even healthy, clean vaginas have a mild odor that changes throughout the day. Physical activity also can give your vagina a stronger, muskier scent, but this is still normal.</p>

<p>Keep your vagina clean and healthy by:</p>

<ul>
	<li>Washing the outside of your vagina with warm water when you bathe. Some women also use mild soaps. But, if you have sensitive skin or any current vaginal infections, even mild soaps can cause dryness and irritation.</li>
	<li>Avoiding scented tampons, pads, powders, and sprays. These products may increase your chances of getting a vaginal infection.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can douching before or after sex prevent STIs?",
      content: `

    <div class="answer"><p>No. Douching before or after sex&nbsp;<strong>does not</strong>&nbsp;prevent STIs. In fact, douching removes some of the normal bacteria in the vagina that protect you from infection. This can actually increase your risk of getting STIs, including HIV, the virus that causes AIDS.&nbsp;<a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs) | womenshealth.gov">Learn ways to prevent STIs</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Should I douche if I had sex without using protection or if the condom broke?",
      content: `

    <div class="answer"><p>No. Douching removes some of the normal bacteria in the vagina that protect you from infection. This can increase your risk of getting STIs, including HIV. Douching also does not protect against pregnancy.</p>

<p>If you had sex without using protection or if the condom broke during sex, see a doctor right away. You can get medicine to help prevent HIV and unwanted pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Should I douche if I was sexually assaulted?",
      content: `

    <div class="answer"><p>No, you should not douche, bathe, or shower. As hard as it may be to not wash up, you may wash away important evidence if you do. Douching may also increase your risk of getting STIs, including HIV. Go to the nearest hospital emergency room as soon as possible. The National Sexual Assault Hotline at 800-656-HOPE (4673) can help you find a hospital able to collect evidence of sexual assault. Your doctor or nurse can help you get medicine to help prevent HIV and unwanted pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can douching after sex prevent pregnancy?",
      content: `

    <div class="answer"><p>No. Douching&nbsp;<strong>does not</strong>&nbsp;prevent pregnancy. It should never be used for birth control. If you had sex without using birth control or if your birth control method did not work correctly (failed), you can use&nbsp;<a href="/a-z-topics/emergency-contraception" title="Emergency contraception (emergency birth control) fact sheet | womenshealth.gov">emergency contraception</a>&nbsp;to keep from getting pregnant.</p>

<p>If you need birth control, talk to your doctor or nurse about which type of&nbsp;<a href="/a-z-topics/birth-control-methods" title="Birth control methods fact sheet | womenshealth.gov">birth control method</a>&nbsp;is best for you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does douching affect pregnancy?",
      content: `

    <div class="answer"><p>Douching can make it harder to get pregnant and can cause problems during pregnancy:</p>

<ul>
	<li><strong>Trouble getting pregnant.</strong>&nbsp;Women who douched at least once a month had a harder time getting pregnant than those women who did not douche.<a href="#references"><sup>7</sup></a></li>
	<li><strong>Higher risk of ectopic pregnancy.</strong>&nbsp;Douching may increase a woman's chance of damaged fallopian tubes and&nbsp;<a href="/glossary#ectopic" title="glossary definition of ectopic pregnancy | womenshealth.gov">ectopic pregnancy</a>. Ectopic pregnancy is when the fertilized egg attaches to the inside of the fallopian tube instead of the uterus. If left untreated, ectopic pregnancy can be life-threatening. It can also make it hard for a woman to get pregnant in the future.</li>
	<li><strong>Higher risk of early childbirth.</strong>&nbsp;Douching raises your risk for premature birth. One study found that women who douched during pregnancy were more likely to deliver their babies early.<a href="#references"><sup>8</sup></a>&nbsp;This raises the risk for health problems for you and your baby.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about douching?",
      content: `

    <div class="answer"><p>For more information about douching, call the OWH Helpline at 1-800-994-9662.</p>
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
	<li>Centers for Disease Control and Prevention. (2015).&nbsp;<a href="http://www.cdc.gov/nchs/nsfg/key_statistics/d.htm#douching" target="_blank" title="Key Statistics from the National Survey of Family Growth">Key Statistics from the National Survey of Family Growth</a>.</li>
	<li>Chandra, A., Martinez, G., Mosher, W., Abma, J., &amp; Jones, J. (2005).<a href="http://www.cdc.gov/nchs/data/series/sr_23/sr23_025.pdf" target="_blank" title="Fertility, family planning, and reproductive health of U.S. women: Data from the 2002 National Survey of Family Growth">Fertility, family planning, and reproductive health of U.S. women: Data from the 2002 National Survey of Family Growth</a>.&nbsp;<em>Vital Health Statistics;</em>&nbsp;23(25), 1–160.</li>
	<li>Ott, M.A., Ofner, S.O., Fortenberry, J.D. (2009).&nbsp;<a href="http://www.readcube.com/articles/10.1111%2Fj.1743-6109.2008.01152.x?r3_referer=wol&amp;tracking_action=preview_click&amp;show_checkout=1" target="_blank" title="Beyond Douching: Use of Feminine Hygiene Products and STI Risk among Young Women" class="external-link external-popup">Beyond Douching: Use of Feminine Hygiene Products and STI Risk among Young Women <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>Journal of Sexual Medicine;</em>&nbsp;6: 1335–1340.</li>
	<li>Markham, C.M., Tortolero, S.R., Addy, R.C., Baumler, E.R., McKirahan, N.K., Escobar-Chaves, S.L., et al. (2007).&nbsp;<a href="http://www.jahonline.org/article/S1054-139X%2807%2900242-X/abstract" target="_blank" title="Factors Associated with Frequent Vaginal Douching Among Alternative School Youth" class="external-link external-popup">Factors Associated with Frequent Vaginal Douching Among Alternative School Youth <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>Journal of Adolescent Health;</em>&nbsp;41(5): 509–512.</li>
	<li>Ness, R.B., et al. (2002).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/12383547" target="_blank" title="Douching in relation to bacterial vaginosis, lactobacilli, and facultative bacteria in the vagina">Douching in relation to bacterial vaginosis, lactobacilli, and facultative bacteria in the vagina</a>.&nbsp;<em>Obstet Gynecol;</em>&nbsp;100:765–72.</li>
	<li>Allsworth, J., &amp; Peipert, J. (2007).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/17197596" target="_blank" title="Prevalence of bacterial vaginosis: 2001-2004 National Health and Nutrition Examination Survey data">Prevalence of bacterial vaginosis: 2001-2004 National Health and Nutrition Examination Survey data</a>.&nbsp;<em>Obstetrics and Gynecology;</em>&nbsp;109(1), 114–120.</li>
	<li>Baird, D.D., et al. (1996).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1380405/" target="_blank" title="Vaginal douching and reduced fertility">Vaginal douching and reduced fertility</a>.&nbsp;<em>American Journal of Public Health;</em>&nbsp;86(6): 844–50.</li>
	<li>Misra, D. P., &amp; Trabert, B. (2007).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/17306656" target="_blank" title="Vaginal douching and risk of preterm birth among African American women">Vaginal douching and risk of preterm birth among African American women</a>.&nbsp;<em>American Journal of Obstetrics and Gynecology;</em>&nbsp;196(2), 140 e141–140 e148.</li>
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
