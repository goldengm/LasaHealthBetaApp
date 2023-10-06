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

export function bacVagPage({ navigation, ...rest }) {
  const condName = "Bacterial Vaginosis";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bacterialvaginosis.jpg?VersionId=o9XvSGwRVmBU63fMsxejDVtCKb5w8fUQ";
  const condDescription =
    "Bacterial vaginosis (BV) is a condition caused by changes in the amount of certain types of bacteria in your vagina. BV is common, and any woman can get it. BV is easily treatable with medicine from your doctor or nurse. If left untreated, it can raise your risk for sexually transmitted infections (STIs) and cause problems during pregnancy.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bacterialvaginosis.jpg?VersionId=o9XvSGwRVmBU63fMsxejDVtCKb5w8fUQ"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Bacterial vaginosis</h1>  -->
            <p><strong>Bacterial vaginosis (BV) is a condition</strong> caused by changes in the amount of certain types of bacteria in your vagina. BV is common, and any woman can get it. BV is easily treatable with medicine from your doctor or nurse. If left untreated, it can raise your risk for sexually transmitted infections (STIs) and cause problems during pregnancy.</p>

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
      title: "What is bacterial vaginosis (BV)?",
      content: `

    <div class="answer"><p>Bacterial vaginosis (BV) is a condition caused by changes in the amount of certain types of bacteria in your vagina. BV can develop when your vagina has more harmful bacteria than good bacteria.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets BV?",
      content: `

    <div class="answer"><p>BV is the most common vaginal condition in women ages 15 to 44.<sup><a href="#references" title="Sources">1</a></sup>&nbsp;But women of any age can get it, even if they have never had sex.</p>

<p>You may be more at risk for BV if you:</p>

<ul>
	<li>Have a new sex partner</li>
	<li>Have multiple sex partners</li>
	<li><a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet">Douche</a><sup><a href="#references" title="Sources">2</a></sup></li>
	<li>Do not use condoms or&nbsp;<a href="/glossary#dental_dam" title="Dental dam definition">dental dams</a></li>
	<li>Are pregnant. BV is common during&nbsp;<a href="/pregnancy/" title="Pregnancy">pregnancy</a>. About 1 in 4 pregnant women get BV.<sup><a href="#references" title="Sources">3</a></sup>&nbsp;The risk for BV is higher for pregnant women because of the hormonal changes that happen during pregnancy.</li>
	<li>Are African-American. BV is twice as common in African-American women as in white women.<sup><a href="#references" title="Sources">4</a></sup></li>
	<li>Have an intrauterine device (IUD), especially if you also have irregular bleeding<sup><a href="#references" title="Sources">5</a></sup></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get BV?",
      content: `

    <div class="answer"><p>Researchers are still studying how women get BV. You can get BV without having sex, but BV is more common in women who are sexually active. Having a new sex partner or multiple sex partners, as well as douching, can upset the balance of good and harmful bacteria in your vagina. This raises your risk of getting BV.<a href="#references"><sup>1</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of BV?",
      content: `

    <div class="answer"><p>Many women have no symptoms. If you do have symptoms, they may include:</p>

<ul>
	<li>Unusual vaginal discharge. The discharge can be white (milky) or gray. It may also be foamy or watery. Some women report a strong fish-like odor, especially after sex.</li>
	<li>Burning when urinating</li>
	<li>Itching around the outside of the vagina</li>
	<li>Vaginal irritation</li>
</ul>

<p>These symptoms may be similar to&nbsp;<a href="/publications/our-publications/fact-sheet/vaginal-yeast-infections.html" title="Vaginal yeast infections fact sheet">vaginal yeast infections</a>&nbsp;and other health problems. Only your doctor or nurse can tell you for sure whether you have BV.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What is the difference between BV and a vaginal yeast infection? ",
      content: `

    <div class="answer"><p>BV and&nbsp;<a href="/publications/our-publications/fact-sheet/vaginal-yeast-infections.html" title="Vaginal yeast infections fact sheet">vaginal yeast infections</a>&nbsp;are both common causes of vaginal discharge. They have similar symptoms, so it can be hard to know if you have BV or a yeast infection. Only your doctor or nurse can tell you for sure if you have BV.</p>

<p>With BV, your discharge may be white or gray but may also have a fishy smell. Discharge from a yeast infection may also be white or gray but may look like cottage cheese.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is BV diagnosed?",
      content: `

    <div class="answer"><p>There are tests to find out if you have BV. Your doctor or nurse takes a sample of vaginal discharge. Your doctor or nurse may then look at the sample under a microscope, use an in-office test, or send it to a lab to check for harmful bacteria. Your doctor or nurse may also see signs of BV during an exam.</p>

<p>Before you see a doctor or nurse for a test:</p>

<ul>
	<li>Don't&nbsp;<a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet">douche</a>&nbsp;or use vaginal deodorant sprays. They might cover odors that can help your doctor diagnose BV. They can also irritate your vagina.</li>
	<li>Make an appointment for a day when you do not have your period.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is BV treated?",
      content: `

    <div class="answer"><p>BV is treated with&nbsp;<a href="https://www.cdc.gov/std/tg2015/bv.htm">antibiotics</a>&nbsp;prescribed by your doctor.</p>

<p>If you get BV, your male sex partner won't need to be treated. But, if you are female and have a female sex partner, she might also have BV. If your current partner is female, she needs to see her doctor. She may also need treatment.</p>

<p>It is also possible to get BV again. Learn how to&nbsp;<a href="#11" title="How can I lower my risk of BV?">lower your risk for BV</a>.</p>

<p>BV and vaginal yeast infections are treated differently. BV is treated with antibiotics prescribed by your doctor. Yeast infections can be treated with over-the-counter medicines. But you cannot treat BV with over-the-counter yeast infection medicine.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if BV is not treated?",
      content: `

    <div class="answer"><p>If BV is untreated, possible problems may include:<sup><a href="#references" title="Sources">6</a></sup></p>

<ul>
	<li><strong>Higher risk of getting STIs, including HIV.</strong>&nbsp;Having BV can raise your risk of getting&nbsp;<a href="/glossary#HIV" title="HIV definition">HIV</a>,&nbsp;<a href="/publications/our-publications/fact-sheet/genital-herpes.html" title="Genital herpes fact sheet">genital herpes</a>,&nbsp;<a href="/glossary#chlamydia" title="Chlamydia definition">chlamydia</a>,&nbsp;<a href="/publications/our-publications/fact-sheet/pelvic-inflammatory-disease.html" title="Pelvic inflammatory fact sheet">pelvic inflammatory disease</a>, and&nbsp;<a href="/glossary#gonorrhea" title="Gonorrhea definition">gonorrhea</a>. Women with HIV who get BV are also more likely to pass HIV to a male sexual partner.</li>
	<li><strong>Pregnancy problems.</strong>&nbsp;BV can lead to premature birth or a low-birth-weight baby (smaller than 5 1/2 pounds at birth). All pregnant women with symptoms of BV should be tested and treated if they have it.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I have BV?",
      content: `

    <div class="answer"><p>BV is easy to treat. If you think you have BV:</p>

<ul type="disc">
	<li><strong>See a doctor or nurse</strong>.&nbsp;<a href="https://www.cdc.gov/std/tg2015/bv.htm">Antibiotics</a>&nbsp;will treat BV.</li>
	<li><strong>Take all of your medicine</strong>. Even if symptoms go away, you need to finish&nbsp;<em>all</em>&nbsp;of the antibiotic.</li>
	<li><strong>Tell your sex partner(s) if she is female&nbsp;</strong>so she can be treated.</li>
	<li><strong>Avoid sexual contact until you finish your treatment.</strong></li>
	<li><strong>See your doctor or nurse again if you have symptoms that don't go away</strong>&nbsp;within a few days after finishing the antibiotic.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is it safe to treat pregnant women who have BV?",
      content: `

    <div class="answer"><p>Yes. The medicine used to treat BV is safe for pregnant women. All pregnant women with symptoms of BV should be tested and treated if they have it.</p>

<p>If you do have BV, you can be treated safely at any stage of your pregnancy. You will get the same <a href="https://www.cdc.gov/std/tg2015/bv.htm#preg" title="CDC - Bacterial Vaginosis - 2015 STD Treatment Guidelines">antibiotic</a> given to women who are not pregnant.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I lower my risk of BV?",
      content: `

    <div class="answer"><p>Researchers do not know exactly how BV spreads. Steps that might lower your risk of BV include:</p>

<ul>
	<li><strong>Keeping your vaginal bacteria balanced.</strong> Use warm water only to clean the outside of your vagina. You do not need to use soap. Even mild soap can cause irritate your vagina. Always wipe front to back from your vagina to your&nbsp;<a href="/glossary#anus" title="Anus definition">anus</a>. Keep the area cool by wearing cotton or cotton-lined underpants.</li>
	<li><strong>Not douching.</strong> Douching upsets the balance of good and harmful bacteria in your vagina. This may raise your risk of BV. It may also make it easier to get BV again after treatment. Doctors do not recommend douching.</li>
	<li><strong>Not having sex.</strong> Researchers are still studying how women get BV. You can get BV without having sex, but BV is more common in women who have sex.</li>
	<li><strong>Limiting your number of sex partners.</strong> Researchers think that your risk of getting BV goes up with the number of partners you have.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How can I protect myself if I am a female and my female partner has BV? ",
      content: `

    <div class="answer"><p>If your partner has BV, you might be able to lower your risk by using protection during sex.</p>

<ul>
	<li>Use a&nbsp;<a href="/glossary#dental_dam" title="Dental dam definition">dental dam</a>&nbsp;every time you have sex. A dental dam is a thin piece of latex that is placed over the vagina before oral sex.</li>
	<li>Cover sex toys with condoms before use. Remove the condom and replace it with a new one before sharing the toy with your partner.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about BV?",
      content: `

    <div class="answer"><p>For more information about bacterial vaginosis, call the OWH Helpline at 1-800-994-9662, or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.cdc.gov/nchhstp/" title="CDC - NCHHSTP">National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP)</a>, CDC, HHS</strong><br>
	<strong>Phone Number</strong>: 800-232-4636</li>
	<li><strong><a href="http://www.acog.org/" title="The American Congress of Obstetricians and Gynecologists - ACOG" class="external-link external-popup" target="_blank">American College of Obstetricians and Gynecologists <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone Number</strong>: 202-638-5577</li>
	<li><a href="http://www.ashasexualhealth.org/" title="American Sexual Health Association" class="external-link external-popup" target="_blank"><strong>American Sexual Health Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number</strong>: 919-361-8400</li>
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
	<li>Centers for Disease Control and Prevention. (2017).&nbsp;<a href="http://www.cdc.gov/std/bv/stdfact-bacterial-vaginosis.htm" title="Bacterial Vaginosis – CDC Fact Sheet">Bacterial Vaginosis</a>.</li>
	<li>Klebanoff, M.A., et al. (2010).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2811217/" title="NCBI - Personal Hygenic Behaviors and Bacterial Vaginosis">Personal Hygienic Behaviors and Bacterial Vaginosis</a>.&nbsp;<em>Sex Transm Dis</em>; 37(2):94-9.</li>
	<li>Koumans, E.H., Sternberg, M., Bruce, C., McQuillan, G., Kendrick, J., Sutton, M., Markowitz, L. (2007).&nbsp;<a href="http://journals.lww.com/stdjournal/Fulltext/2007/11000/The_Prevalence_of_Bacterial_Vaginosis_in_the.6.aspx" title="Jouranl of the American Sexaully Transmitted Diseases Association" class="external-link external-popup" target="_blank">The Prevalence of Bacterial Vaginosis in the United States, 2001-2004; Associations with Symptoms, Sexual Behaviors, and Reproductive Health <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>Sexually Transmitted Diseases;&nbsp;</em>34(11): 864-869.</li>
	<li>Ness, R.B., et al. (2003).&nbsp;<a href="http://www.researchgate.net/publication/10756980_Can_known_risk_factors_explain_racial_differences_in_the_occurrence_of_bacterial_vaginosis" title="National Center for Biotechnology Information" class="external-link external-popup" target="_blank">Can known risk factors explain racial differences in the occurrence of bacterial vaginosis? <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;<em>J Natl Med Assoc</em>; 95:201–212.</li>
	<li>Madden, T. et al. (2012).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/22337109" title="National Center for Biotechnology Information">Risk of bacterial vaginosis in users of the intrauterine device: a longitudinal study</a>.&nbsp;<em>Sex Transm Dis;&nbsp;</em>39(3): 217-222.</li>
	<li>Centers for Disease Control and Prevention. (2015). <a href="https://www.cdc.gov/std/tg2015/bv.htm">Bacterial Vaginosis.</a>&nbsp;Sexually Transmitted Diseases Treatment Guidelines, 2015.</li>
</ol>
</div>

`,
    },
  ];
  return [condName, condImURL, condDescription, condHeader, condQA];
}

export function bacVagScreening({ navigation, ...rest }) {
  const screeningTree = [
    {
      title: "Bacterial Vaginosis Question1",
      content: (
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            p
            style={{
              // marginVertical: theme.SIZES.BASE / 2,
              textAlign: "center",
            }}
            color={theme.COLORS.DEFAULT}
          >
            PCOS is hormonal disorder involving infrequent, irregular or
            prolonged menstrual periods, and often excess male hormone
            (androgen) levels. The ovaries develop numerous small collections of
            fluid — called follicles — and may fail to regularly release eggs.​
          </Text>
        </View>
      ),
    },
    {
      title: "Bacterial Veginosis Question2",
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
