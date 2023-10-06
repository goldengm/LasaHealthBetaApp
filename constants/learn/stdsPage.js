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

export function stdsPage({ navigation, ...rest }) {
  const condName = "Sexually transmitted infections";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Sexuallytransmittedinfections.jpg?VersionId=OwfTrxfq.wGaF6qSRReLrcGvh6U9sWKt";
  const condDescription =
    "Sexually transmitted infections (STIs) are also called sexually transmitted diseases, or STDs. STIs are usually spread by having vaginal, oral, or anal sex. More than 9 million women in the United States are diagnosed with an STI each year.1 Women often have more serious health problems from STIs than men, including infertility.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Sexuallytransmittedinfections.jpg?VersionId=OwfTrxfq.wGaF6qSRReLrcGvh6U9sWKt"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Sexually transmitted infections</h1>  -->
            <p><strong>Sexually transmitted infections (STIs) are also called sexually transmitted diseases, or STDs. </strong>STIs are usually spread by having vaginal, oral, or anal sex. More than 9 million women in the United States are diagnosed with an STI each year.<sup><a href="https://www.womenshealth.gov/publications/our-publications/fact-sheet/sexually-transmitted-infections.html#sources" title="Sources">1</a></sup>&nbsp;Women often have more serious health problems from STIs than men, including infertility.</p>

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
      title: "What is a sexually transmitted infection (STI)?",
      content: `

    <div class="answer"><p>An STI is an infection passed from one person to another person through sexual contact. An infection is when a bacteria, virus, or parasite enters and grows in or on your body. STIs are also called sexually transmitted diseases, or STDs.</p>

<p>Some STIs can be cured and some STIs cannot be cured. For those STIs that cannot be cured, there are medicines to manage the symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets STIs?",
      content: `

    <div class="answer"><p>Nearly 20 million people in the United States get an STI each year.<sup><a href="#references" title="Sources">2</a></sup>&nbsp;These infections affect women and men of all backgrounds and economic levels. But half of all new infections are among young people 15 to 24 years old.<sup><a href="#references" title="Sources">2</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do STIs affect women?",
      content: `

    <div class="answer"><p>Women often have more serious health problems from STIs than men:</p>

<ul>
	<li><a href="/publications/our-publications/fact-sheet/chlamydia.html" title="Chlamydia | womenshealth.gov">Chlamydia</a>&nbsp;and&nbsp;<a href="/publications/our-publications/fact-sheet/gonorrhea.html" title="Gonorrhea | womenshealth.gov">gonorrhea</a>, left untreated, raise the risk of chronic pelvic pain and life-threatening&nbsp;<a href="/glossary#ectopic" title="glossary definition of ectopic pregnancy | womenshealth.gov">ectopic pregnancy</a>. Chlamydia and gonorrhea also can cause infertility.</li>
	<li>Untreated syphilis in pregnant women results in infant death up to 40% of the time.<sup><a href="#references" title="Sources">3</a></sup></li>
	<li>Women have a higher risk than men of getting an STI during unprotected vaginal sex. Unprotected anal sex puts women at even more risk for getting an STI than unprotected vaginal sex.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get STIs?",
      content: `

    <div class="answer"><p>STIs are spread in the following ways:</p>

<ul>
	<li>Having unprotected (without a condom) vaginal, oral, or anal sex with someone who has an STI. It can be difficult to tell if someone has an STI. STIs can be spread even if there are no signs or symptoms.</li>
	<li>During genital touching. It is possible to get some STIs, such as syphilis and herpes, without having sex.</li>
	<li>Through sexual contact between women who have sex only with other women</li>
	<li>From a pregnant or breastfeeding woman to her baby</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can STIs cause health problems?",
      content: `

    <div class="answer"><p>Yes. Each STI causes different health problems for women. Certain types of untreated STIs can cause or lead to:</p>

<ul>
	<li>Problems getting pregnant or permanent infertility</li>
	<li>Problems during pregnancy and health problems for the unborn baby</li>
	<li>Infection in other parts of the body</li>
	<li>Organ damage</li>
	<li>Certain types of cancer, such as&nbsp;<a href="/publications/our-publications/fact-sheet/cervical-cancer.html" title="Cervical cancer | womenshealth.gov">cervical cancer</a></li>
	<li>Death</li>
</ul>

<p>Having certain types of STIs makes it easier for you to get&nbsp;<a href="/hiv-and-aids" title="HIV/AIDS | womenshealth.gov">HIV</a>&nbsp;(another STI) if you come into contact with it.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of STIs?",
      content: `

    <div class="answer"><p>Many STIs have only mild symptoms or no symptoms at all. When women have symptoms, they may be mistaken for something else, such as a&nbsp;<a href="/glossary#uti" title="glossary definition of urinary tract infection | womenshealth.gov">urinary tract infection</a>&nbsp;or&nbsp;<a href="/glossary#yeast" title="glossary definition of yeast infection | womenshealth.gov">yeast infection</a>. Get tested so that you can be treated for the correct infection.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I get tested for STIs?",
      content: `

    <div class="answer"><p>Ask your doctor or nurse about getting tested for STIs. Your doctor or nurse can tell you what test(s) you may need and how they are done. Testing for STIs is also called STI screening.</p>

<p>STI testing can include:</p>

<ul>
	<li>Pelvic and physical exam. Your doctor looks for signs of infection, such as warts, rashes, or discharge.</li>
	<li>Blood test. A nurse will draw some blood to test for an STI.</li>
	<li>Urine test. You urinate (pee) into a cup. The urine is then tested for an STI.</li>
	<li>Fluid or tissue sample. Your doctor or nurse uses a cotton swab to take fluid or discharge from an infected place on your body. The fluid is looked at under a microscope or sent to a lab for testing.</li>
</ul>

<p>Find a clinic near you&nbsp;where you can <a href="https://gettested.cdc.gov/" title="Get Tested | National HIV and STD Testing">get tested for STIs</a>. Find a clinic near you where you can <a href="https://vaccinefinder.org/" title="HealthMap Vaccine Finder" class="external-link external-popup" target="_blank">get vaccines for hepatitis B and human papillomavirus (HPV) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does a Pap test screen for STIs?",
      content: `

    <div class="answer"><p>No.&nbsp;<a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap testing</a>&nbsp;is mainly used to look for cell changes that could be cancer or precancer. However, your doctor may test you for&nbsp;<a href="/publications/our-publications/fact-sheet/human-papillomavirus.html" title="Human papillomavirus | womenshealth.gov">HPV</a>&nbsp;in addition to doing the Pap test if you are older than 30.</p>

<p>If you want to be tested for STIs, you must ask your doctor or nurse.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to get tested for STIs?",
      content: `

    <div class="answer"><p>If you are sexually active, talk to your doctor or nurse about STI testing. Which tests you will need and how often you need to get them will depend on you and your partner's sexual history.</p>

<p>You may feel embarrassed or that your sex life is too personal to share with your doctor or nurse. But being open and honest is the only way your doctor can help take care of you.&nbsp;<a href="/screening-tests-and-vaccines/" title="Screening Tests and Vaccines | womenshealth.gov">Find out what screening tests you may need</a>. Then talk to your doctor or nurse about what tests make sense for you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get free or low-cost STI testing?",
      content: `

    <div class="answer"><p>Under the&nbsp;<a href="http://www.healthcare.gov/" target="_blank" title="Health Insurance Marketplace | HealthCare.gov">Affordable Care Act</a>, most health insurance plans must cover the cost of STI screening or counseling at no cost to you.</p>

<ul>
	<li>If you have insurance, check with your insurance provider to find out what's included in your plan.</li>
	<li>If you don't have insurance, find&nbsp;<a href="https://www.hhs.gov/opa/title-x-family-planning/" target="_blank" title="Title X Family Planning">free or reduced cost testing and treatment for STIs</a>.</li>
	<li>If you have Medicare, find out how&nbsp;<a href="http://www.medicare.gov/coverage/sexually-transmitted-infections-screening-and-counseling.html" target="_blank" title="Sexually transmitted infections (STI) screening &amp; counseling | Medicare.gov">which STI tests are covered and how often</a>.</li>
	<li>If you have Medicaid, the benefits covered are different in each state, but certain benefits must be covered by every Medicaid program.&nbsp;<a href="https://www.medicaid.gov/about-us/contact-us/contact-state-page.html" target="_blank" title="Contact Your State With Questions | Medicaid.gov">Check with your state's program</a>&nbsp;to find out what's covered.</li>
</ul>

<p>For information about other services covered by the Affordable Care Act, visit&nbsp;<a href="http://www.healthcare.gov/" target="_blank" title="Health Insurance Marketplace | HealthCare.gov">HealthCare.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are STIs treated?",
      content: `

    <div class="answer"><p>For some STIs, treatment may involve taking medicine by mouth or getting a shot. For other STIs that can't be cured, like&nbsp;<a href="/publications/our-publications/fact-sheet/genital-herpes.html" title="Genital herpes | womenshealth.gov">herpes</a>&nbsp;or&nbsp;<a href="/hiv-and-aids" title="HIV/AIDS | womenshealth.gov">HIV and AIDS</a>, medicines can help reduce the symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "If I have an STI, does my partner have it too?",
      content: `

    <div class="answer"><p>Maybe. If the tests show that you have an STI, your doctor might want your partner to come in for testing. Or the doctor may give you a medicine to take home for your partner.</p>

<p>The STI may have spread to you or your partner from a former sex partner. This is why it is important to get tested after each new sex partner. Also, if you test positive for certain STIs (HIV, syphilis, or gonorrhea),&nbsp;<a href="/hiv-and-aids/living-hiv/telling-people-you-are-hiv-positive" title="Telling people you are HIV-positive | womenshealth.gov">some cities and states require you (or your doctor) to tell any past or current sex partners</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do medicines sold over the Internet prevent or treat STIs? ",
      content: `

    <div class="answer"><p>No. Only use medicines prescribed or suggested by your doctor.</p>

<p>Some drugs sold over the Internet claim to prevent or treat STIs. And some of these sites claim their medicines work better than the medicines your doctor prescribes. But in most cases this is not true, and no one knows how safe these products are or even what is in them.</p>

<p>Buying prescription and over-the-counter drugs on the Internet means you may not know exactly what you're getting. An illegal Internet pharmacy may try to sell you unapproved drugs, drugs with the wrong active ingredient, drugs with too much or too little of the active ingredient, or drugs with dangerous ingredients.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent an STI?",
      content: `

    <div class="answer"><p>The best way to prevent an STI is to not have vaginal, oral, or anal sex.</p>

<p>If you do have sex, lower your risk of getting an STI with the following steps:</p>

<ul>
	<li><strong>Get vaccinated.</strong>&nbsp;There are vaccines to protect against HPV and hepatitis B.</li>
	<li><strong>Use condoms.</strong>&nbsp;Condoms are the best way to prevent STIs when you have sex. Because a man does not need to ejaculate (come) to give or get some STIs, make sure to put the condom on before the penis touches the vagina, mouth, or anus. Other methods of&nbsp;<a href="/a-z-topics/birth-control-methods" title="Birth control methods fact sheet | womenshealth.gov">birth control</a>, like birth control pills, shots, implants, or&nbsp;<a href="/glossary#diaphragm" title="glossary definition of diaphragm | womenshealth.gov">diaphragms</a>, will not protect you from STIs.</li>
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
      title: "What research is being done on STIs and women?",
      content: `

    <div class="answer"><p>Research on STIs is a public health priority. Research is focused on prevention, diagnosis, and treatment.</p>

<ul>
	<li>Researchers are looking at ways to prevent STIs with vaccines and&nbsp;<a href="/glossary#microbicide" title="glossary definition of microbicide | womenshealth.gov">microbicides</a>. A microbicide is a gel or a cream that can be applied inside the vagina or anus to protect against STIs, including HIV.</li>
	<li>Scientists are working on vaccines to prevent HIV and herpes infections.</li>
	<li>Many women do not show any signs or have any symptoms for certain STIs, or have very mild symptoms that can be mistaken for other things. Researchers are studying the reasons why many STIs have no symptoms, which can delay diagnosis.</li>
</ul>

<p>Learn more about current research on STIs at&nbsp;<a href="http://www.clinicaltrials.gov/" target="_blank" title="Home - ClinicalTrials.gov">clinicaltrials.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about STIs?",
      content: `

    <div class="answer"><p>For more information about STIs, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/nchhstp/" target="_blank" title="CDC - NCHHSTP Home">National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP), CDC, HHS</a><br>
	<strong>Phone Number:</strong>&nbsp;800-232-4636</li>
	<li><a href="http://www.niaid.nih.gov/" target="_blank" title="National Institute of Allergy and Infectious Diseases (NIAID)">National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</a><br>
	<strong>Phone Number:</strong>&nbsp;866-284-4107 (TDD: 800-877-8339)</li>
	<li><a href="http://www.ashasexualhealth.org/" target="_blank" title="Home - American Sexual Health Association" class="external-link external-popup">American Sexual Health Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
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
	<li><a href="/publications/our-publications/fact-sheet/bacterial-vaginosis.html" title="Bacterial Vaginosis fact sheet | womenshealth.gov">Bacterial vaginosis fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/chlamydia.html" title="Chlamydia | womenshealth.gov">Chlamydia fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/genital-herpes.html" title="Genital herpes | womenshealth.gov">Genital herpes fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/genital-warts.html" title="Genital warts | womenshealth.gov">Genital warts fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/gonorrhea.html" title="Gonorrhea | womenshealth.gov">Gonorrhea fact sheet</a></li>
	<li><a href="/hiv-and-aids/" title="HIV and AIDS | womenshealth.gov">HIV/AIDS</a></li>
	<li><a href="/publications/our-publications/fact-sheet/human-papillomavirus.html" title="Human papillomavirus | womenshealth.gov">Human papillomavirus (HPV)</a></li>
	<li><a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/pelvic-inflammatory-disease.html" title="Pelvic inflammatory disease | womenshealth.gov">Pelvic inflammatory disease fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/sti-pregnancy-breastfeeding.html" title="Sexually transmitted infections, pregnancy, and breastfeeding | womenshealth.gov">Sexually transmitted infections, pregnancy, and breastfeeding</a></li>
	<li><a href="/publications/our-publications/fact-sheet/syphilis.html" title="Syphilis fact sheet | womenshealth.gov">Syphilis fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/trichomoniasis.html" title="Trichomoniasis | womenshealth.gov">Trichomoniasis fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/viral-hepatitis.html" title="Viral hepatitis fact sheet | womenshealth.gov">Viral hepatitis fact sheet</a></li>
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
	<li>Centers for Disease Control and Prevention. (2013).&nbsp;<a href="http://www.cdc.gov/std/stats/STI-Estimates-Fact-Sheet-Feb-2013.pdf" target="_blank" title="Estimates of Sexually Transmitted Infections in the United States, 2008">Incidence, Prevalence, and Cost of Sexually Transmitted Infections in the United States</a>&nbsp;(PDF, 1.6 MB).</li>
	<li>Satterwhite, C.L., et al. (2013).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/23403598" target="_blank" title="Sexually transmitted infections among US women and men: prevalence and incidence estimates, 2008. - PubMed - NCBI">Sexually transmitted infections among U.S. women and men: Prevalence and incidence estimates, 2008</a>.&nbsp;<em>Sexually Transmitted Diseases;</em>&nbsp;40(3): 187–193.</li>
	<li>Centers for Disease Control and Prevention. (2017).&nbsp;<a href="http://www.cdc.gov/std/syphilis/stdfact-syphilis-detailed.htm" target="_blank" title="STD Facts - Syphilis (Detailed)">Syphilis – CDC Fact Sheet</a>.</li>
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
