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

export function genHerpPage({ navigation, ...rest }) {
  const condName = "Genital herpes";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Genitalherpes.jpg?VersionId=Xzoc2rCZ6c9KByEBxpuR94rsepiDdQxb";
  const condDescription =
    "Genital herpes is an STI caused by the herpes simplex viruses type 1 (HSV-1) and type 2 (HSV-2). HSV-1 and HSV-2 cause the same symptoms, are both contagious, and are treated with the same medicine. But, they are different in some ways: \n HSV-1 most often causes infections of the mouth and lips, called cold sores or 'fever blisters.' Symptoms are often milder than genital herpes, and you may get fewer outbreaks.2 It can spread to the genital area during oral sex and cause genital herpes. If HSV-1 spreads to the genital area, it is still HSV-1. \n HSV-2 is the most common cause of genital herpes. It is spread through vaginal, oral, or anal sex. HSV-2 can spread to the mouth during oral sex. If HSV-2 spreads to the mouth or lips during oral sex, it is still HSV-2.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Genitalherpes.jpg?VersionId=Xzoc2rCZ6c9KByEBxpuR94rsepiDdQxb"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Genital herpes</h1>  -->
            <p><strong>Genital herpes is a&nbsp;<a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs) | womenshealth.gov">sexually transmitted infection (STI)</a>.</strong> Genital herpes is usually spread by having vaginal, oral, or anal sex. One in five women ages 14 to 49 has genital herpes.<sup><a href="#references" title="Sources">1</a></sup>&nbsp;There is no cure for herpes. But you can take medicine to prevent outbreaks and to lower your risk of passing genital herpes to your partner.</p>

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
      title: "What is genital herpes?",
      content: `

    <div class="answer"><p>Genital herpes is an&nbsp;<a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs) | womenshealth.gov">STI</a>&nbsp;caused by the herpes simplex viruses type 1 (HSV-1) and type 2 (HSV-2). HSV-1 and HSV-2 cause the same symptoms, are both contagious, and are treated with the same medicine. But, they are different in some ways:</p>

<ul>
	<li><strong>HSV-1</strong>&nbsp;most often causes infections of the mouth and lips, called cold sores or "fever blisters." Symptoms are often milder than genital herpes, and you may get fewer outbreaks.<sup><a href="#references" title="Sources">2</a></sup>&nbsp;It can spread to the genital area during oral sex and cause genital herpes. If HSV-1 spreads to the genital area, it is still HSV-1.</li>
	<li><strong>HSV-2</strong>&nbsp;is the most common cause of genital herpes. It is spread through vaginal, oral, or anal sex. HSV-2 can spread to the mouth during oral sex. If HSV-2 spreads to the mouth or lips during oral sex, it is still HSV-2.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets genital herpes?",
      content: `

    <div class="answer"><p>Genital herpes is more common in women than men. One in five women ages 14 to 49 has genital herpes, compared with one in 10 men ages 14 to 49.<sup><a href="#references" title="Sources">3</a></sup></p>

<p>A woman's anatomy (body) puts her more at risk for genital herpes than men. Small tears in vaginal tissue can make it easier to get genital herpes.</p>

<p>Genital herpes is also much more common in African-American women. One in two African-American women between the ages of 14 and 49 is infected with HSV-2 that causes genital herpes.<sup><a href="#references" title="Sources">3</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get genital herpes?",
      content: `

    <div class="answer"><p>Genital herpes is spread through:</p>

<ul>
	<li>Vaginal, oral, or anal sex. The herpes virus is usually spread through contact with open sores. But you also can get herpes from someone without any symptoms or sores.</li>
	<li>Genital touching</li>
	<li>Childbirth from a mother to her baby</li>
	<li>Breastfeeding if a baby touches an open sore</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does a cold sore on my mouth mean I have genital herpes?",
      content: `

    <div class="answer"><p>No, a cold sore on your mouth usually means you have herpes simplex virus type 1 (HSV-1). You can get HSV-1 by kissing someone or sharing utensils, towels, razors, or lipstick with someone who has HSV-1.</p>

<p>HSV-1 cannot turn into HSV-2 (the type of genital herpes spread by sexual contact), but you can get a cold sore on your mouth from HSV-2 if you give oral sex to someone with HSV-2. Cold sores caused by HSV-1 or HSV-2 are contagious. You can spread it to other people or other parts of your body if you touch an open sore and then touch another part of your body. That means if you have a cold sore and give oral sex to someone, that person will get the herpes virus on his or her genitals.</p>

<p>Avoid touching your cold sore as much as possible. If you touch your cold sore, wash your hands right away to avoid spreading the infection to other parts of your body or other people.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What is the difference between genital herpes and genital warts? ",
      content: `

    <div class="answer"><p>Both genital herpes and&nbsp;<a href="/publications/our-publications/fact-sheet/genital-warts.html" title="Genital warts | womenshealth.gov">genital warts</a>&nbsp;are STIs, are spread through skin-to-skin contact, and are caused by a virus. But the viruses that cause genital herpes and genital warts are different:</p>

<ul>
	<li>Herpes simplex virus (HSV) is the virus that causes genital herpes.</li>
	<li><a href="/a-z-topics/human-papillomavirus" title="Human papillomavirus | womenshealth.gov">Human papillomavirus (HPV)</a>&nbsp;is the virus that causes genital warts.</li>
</ul>

<p>There is no cure for either genital herpes or genital warts. But, different medicines can help manage the symptoms of herpes and treat the complications of HPV infections that can cause genital warts.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of genital herpes?",
      content: `

    <div class="answer"><p>Most women with genital herpes do not know they have it. But, if you get symptoms with the first outbreak of genital herpes, they can be severe. Genital herpes also can be severe and long-lasting in people whose&nbsp;<a href="/glossary#immune_system" title="glossary definition of immune system | womenshealth.gov">immune systems</a>&nbsp;do not work properly, such as women with HIV.</p>

<p>Within a few days of sexual contact with someone who has the herpes virus, sores (small red bumps that may turn into blisters) may show up where the virus entered your body, such as on your mouth or vagina. Some women might confuse mild sores for insect bites or something else. After a few days, sores become crusted and then heal without scarring. Sometimes, a second set of sores appear soon after the first outbreak, and symptoms can happen again.</p>

<p>The first signs of genital herpes usually show up two to 12 days after having sexual contact with someone who has herpes. Symptoms can last from two to four weeks. There are other early symptoms of genital herpes:</p>

<ul>
	<li>Feeling of pressure in the abdomen</li>
	<li>Flu-like symptoms, including fever</li>
	<li>Itching or burning feeling in the genital or anal area</li>
	<li>Pain in the legs, buttocks, or genital area</li>
	<li>Swollen glands</li>
	<li>Unusual vaginal discharge</li>
</ul>

<p>If you have any symptoms of genital herpes, see a doctor or nurse.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is genital herpes diagnosed?",
      content: `

    <div class="answer"><p>Often, your doctor can diagnose genital herpes by looking at visible sores. Your doctor or nurse may also use a cotton swab to take a fluid sample from a sore to test in a lab.</p>

<p>Genital herpes can be hard to diagnose, especially between outbreaks. Blood tests that look for&nbsp;<a href="/glossary#antibodies" title="glossary definition of antibodies | womenshealth.gov">antibodies</a>&nbsp;to the herpes virus can help diagnose herpes in women without symptoms or between outbreaks.</p>

<p>A&nbsp;<a href="/publications/our-publications/fact-sheet/pap-test.html" title="Pap test | womenshealth.gov">Pap test</a>&nbsp;is&nbsp;<em>not</em>&nbsp;used to detect genital herpes.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is genital herpes treated?",
      content: `

    <div class="answer"><p>Herpes has no cure. But antiviral medicines can prevent or shorten outbreaks during the time you take the medicine. Also, daily suppressive therapy (for example, daily use of antiviral medicine) for herpes can lower your chance of spreading the infection to your partner.</p>

<p>Your doctor will either give you antiviral medicine to take right after getting outbreak symptoms or to take regularly to try to stop outbreaks from happening. Talk to your doctor about treatment options.</p>

<p>During outbreaks, you can take the following steps to speed healing and prevent spreading herpes to other parts of your body or to other people:</p>

<ul>
	<li>Keep sores clean and dry.</li>
	<li>Try not to touch the sores.</li>
	<li>Wash your hands after any contact with the sores.</li>
	<li>Avoid all sexual contact from the time you first notice symptoms until the sores have healed.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can genital herpes come back?",
      content: `

    <div class="answer"><p>Yes. Genital herpes symptoms can come and go, but the virus stays inside your body even after all signs of the infection have gone away. The virus becomes "active" from time to time, leading to an outbreak. Some people have outbreaks only once or twice. Other people may have four or five outbreaks within a year. Over time, the outbreaks usually happen less often and are less severe.</p>

<p>Experts do not know what causes the virus to become active. Some women say the virus comes back when they are sick, under stress, out in the sun, or during their period.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I have genital herpes?",
      content: `

    <div class="answer"><p>If you have genital herpes:</p>

<ul>
	<li><strong>See a doctor or nurse as soon as possible</strong>&nbsp;for testing and treatment.</li>
	<li><strong>Take all of the medicine.</strong>&nbsp;Even if symptoms go away, you need to finish all of the antiviral medicine.</li>
	<li><strong>Tell your sex partner(s)</strong>&nbsp;so they can be tested and treated if necessary.</li>
	<li><strong>Avoid any sexual contact</strong>&nbsp;while you are being treated for genital herpes or while you have an outbreak.</li>
	<li><strong>Remember that genital herpes is a lifelong disease.</strong>&nbsp;Even though you may not have a genital herpes outbreak for long periods of time, you can still pass the virus to another person at any time. Talk with your doctor or nurse about how to prevent passing the virus to another person.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does genital herpes affect pregnancy?",
      content: `

    <div class="answer"><ul>
	<li><strong>If you get genital herpes during pregnancy,</strong>&nbsp;you can spread genital herpes to your baby during delivery.</li>
	<li><strong>If you had genital herpes before pregnancy,</strong>&nbsp;your baby is still at risk of getting herpes, but the risk is lower.</li>
</ul>

<p>Most women with genital herpes have healthy babies. But babies who get herpes from their mother have neonatal herpes. Neonatal herpes is a serious condition that can cause problems in a newborn baby such as brain damage, eye problems, or even death.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can pregnant women take genital herpes medicine?",
      content: `

    <div class="answer"><p>Researchers do not know if all antiviral medicines for genital herpes are safe for pregnant women. If you are pregnant, make sure you tell your doctor or nurse that you have genital herpes, even if you are not having an outbreak.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I breastfeed if I have genital herpes?",
      content: `

    <div class="answer"><p>Yes, you can breastfeed if you have genital herpes, but not if you have a herpes sore on one of your breasts. If you have genital herpes, it is possible to spread the infection to any part of your breast, including your nipple and areola.</p>

<p>If you have any genital herpes sores on one or both of your breasts:</p>

<ul>
	<li>You can keep breastfeeding as long as your baby or pumping equipment does not touch a herpes sore.</li>
	<li>Do not breastfeed from the breast with sores. Herpes is spread through contact with sores and can be dangerous to a newborn baby.</li>
	<li>Pump or hand-express your milk from the breast with sores until the sores heal. Pumping will help keep up your milk supply and prevent your breast from getting overly full and painful. You can store your milk to give to your baby in a bottle for another feeding. But if parts of your pump also touch the sore(s) while pumping, throw the milk away.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can genital herpes cause other problems?",
      content: `

    <div class="answer"><p>For most women, genital herpes does not usually cause serious health problems.</p>

<p>Women with HIV can have severe herpes outbreaks that are long-lasting. Herpes also may play a role in the spread of HIV. Herpes sores can make it easier for HIV to get into your body. Also, herpes can make people who are HIV-positive more likely to spread the infection to someone else.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent genital herpes?",
      content: `

    <div class="answer"><p>The best way to prevent genital herpes or any STI is to not have vaginal, oral, or anal sex.</p>

<p>If you do have sex, lower your risk of getting an STI with the following steps:</p>

<ul>
	<li><strong>Use condoms.</strong>&nbsp;Condoms are the best way to prevent STIs when you have sex. Because a man does not need to ejaculate (come) to give or get some STIs, make sure to put the condom on before the penis touches the vagina, mouth, or anus. Other methods of&nbsp;<a href="/a-z-topics/birth-control-methods" title="Birth control methods fact sheet | womenshealth.gov">birth control</a>, like birth control pills, shots, implants, or&nbsp;<a href="/glossary#diaphragm" title="glossary definition of diaphragm | womenshealth.gov">diaphragms</a>, will not protect you from STIs.</li>
	<li><strong>Get tested.</strong>&nbsp;Be sure you and your partner are tested for STIs. Talk to each other about the test results before you have sex.</li>
	<li><strong>Be monogamous.</strong>&nbsp;Having sex with just one partner can lower your risk for STIs. After being tested for STIs, be faithful to each other. That means that you have sex only with each other and no one else.</li>
	<li><strong>Limit your number of sex partners.</strong>&nbsp;Your risk of getting STIs goes up with the number of partners you have.</li>
	<li><strong>Do not douche.</strong>&nbsp;<a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet | womenshealth.gov">Douching</a>&nbsp;removes some of the normal bacteria in the vagina that protects you from infection. This may increase your risk of getting STIs.<sup><a href="#references" title="Sources">4</a></sup></li>
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
      title: "Can women who have sex with women get genital herpes?",
      content: `

    <div class="answer"><p>Yes. It is possible to get genital herpes, or any other STI, if you are a woman who has sex only with women.</p>

<p>Talk to your partner about her sexual history before having sex, and ask your doctor or nurse about getting tested if you have signs or symptoms of genital herpes. Use a&nbsp;<a href="/glossary#dental_dam" title="glossary definition of dental dam | womenshealth.gov">dental dam</a>&nbsp;during oral sex and avoid sexual activity during an outbreak.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about genital herpes?",
      content: `

    <div class="answer"><p>For more information about genital herpes, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/nchhstp/" target="_blank" title="CDC - NCHHSTP Home">National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP), CDC, HHS</a>&nbsp;<br>
	<strong>Phone Number:</strong>&nbsp;800-232-4636</li>
	<li><a href="http://www.niaid.nih.gov/" target="_blank" title="National Institute of Allergy and Infectious Diseases (NIAID)">National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</a>&nbsp;<br>
	<strong>Phone Number:</strong>&nbsp;866-284-4107 (TDD: 800-877-8339)</li>
	<li><a href="http://www.ashasexualhealth.org/stdsstis/herpes/" target="_blank" title="Herpes - American Sexual Health Association" class="external-link external-popup">Herpes Resource Center, ASHA <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong>&nbsp;800-230-6039</li>
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
	<li>Centers for Disease Control and Prevention. (2017).&nbsp;<a href="http://www.cdc.gov/std/herpes/stdfact-herpes-detailed.htm" target="_blank" title="STD Facts - Genital Herpes (Detailed version)">Genital Herpes - CDC Fact Sheet</a>.</li>
	<li>Kriebs, J.M. (2008).&nbsp;<a href="http://www.medscape.com/viewarticle/573984" target="_blank" title="Understanding Herpes Simplex Virus: Transmission, Diagnosis, and Considerations in Pregnancy Management" class="external-link external-popup">Understanding Herpes Simplex Virus: Transmission, Diagnosis, and Considerations in Pregnancy Management <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>Journal of Midwifery and Women's Health;</em>&nbsp;53(3): 202–208.</li>
	<li>Centers for Disease Control and Prevention. (2016).&nbsp;<a href="https://www.cdc.gov/std/stats15/figures/51.htm">2015 Sexually Transmitted Diseases Surveillance – Figure 51</a>.</li>
	<li>Cherpes, T.L., Meyn, L.A., Krohn, M.A., Hillier, S.L. (2003).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/12916131" target="_blank" title="Risk factors for infection with herpes simplex virus type 2: role of smoking, douching, uncircumcised males, and vaginal flora. - PubMed - NCBI">Risk factors for infection with herpes simplex virus type 2: role of smoking, douching, uncircumcised males, and vaginal flora</a>.&nbsp;<em>Sexually Transmitted Diseases;</em>&nbsp;30(5):405–410.</li>
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
