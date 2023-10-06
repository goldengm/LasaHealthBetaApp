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

export function hivPage({ navigation, ...rest }) {
  const condName = "HIV and AIDS";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/HIVandAIDS.jpg?VersionId=MvNqV1JeU.ML56pFT1tCbs.EeeitxVWV";
  const condDescription =
    "The human immunodeficiency virus (HIV) is a sexually transmitted infection (STI). HIV can lead to acquired immunodeficiency syndrome (AIDS). One in four people in the United States with HIV is female. In the United States, women are most likely to get HIV from having sex with a man.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/WomenandHIV.jpg?VersionId=hhUHMsv6f1ZQRQ3XczMqpFvWkvzG2obw"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Women and HIV</h1>  -->
            <p><strong>One in four people living with HIV in the United States is a woman.&nbsp;</strong>Women of all ages, races, and ethnicities can get HIV, but some women are more at risk than others.</p>

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
      title: "Who is at risk for HIV?",
      content: `

    <div class="answer"><p>All women can get HIV, but your risk for getting HIV is higher if you:</p>

<ul>
	<li>Have unprotected sex</li>
	<li>Have injected illegal drugs, either now or in the past</li>
	<li>Had sex with someone to get money or drugs in return&nbsp;or with someone who has traded sex for money or drugs</li>
	<li>Had sex with someone who
	<ul>
		<li>Has HIV</li>
		<li>Has sex with both men and women</li>
		<li>Injects drugs</li>
	</ul>
	</li>
	<li>Have another&nbsp;<a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html">sexually transmitted infection (STI)</a></li>
	<li>Had a blood transfusion between 1978 and 1985</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Women who have sex with men",
      content: `

    <div class="answer"><p>In the United States, most women get HIV from having sex with a man.<a href="#references"><sup>3</sup></a></p>

<p><strong>Women are more likely than men to get HIV during&nbsp;<a href="/glossary#vagina">vaginal</a>&nbsp;sex because:</strong></p>

<ul>
	<li>The vagina has a larger surface area (compared with the penis) that can be exposed to HIV-infected&nbsp;<a href="/glossary#semen">semen</a>.</li>
	<li>Semen can stay in your vagina for several days after sex. This means you are exposed to the virus longer.</li>
	<li>Having a <a href="/publications/our-publications/fact-sheet/vaginal-yeast-infections.html">vaginal yeast infection</a>, <a href="/publications/our-publications/fact-sheet/bacterial-vaginosis.html">bacterial vaginosis</a>, or an untreated <a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html">sexually transmitted infection (STI)</a> makes HIV transmission more likely. This is because the yeast or bacterial infection or STI brings white blood cells (and therefore&nbsp;<a href="http://aids.gov/hiv-aids-basics/just-diagnosed-with-hiv-aids/understand-your-test-results/cd4-count/">CD4 </a><a href="http://aids.gov/hiv-aids-basics/just-diagnosed-with-hiv-aids/understand-your-test-results/cd4-count/">cells</a>&nbsp;that can be infected with HIV) into the vaginal area. Small cuts on the skin of your vagina (common with genital ulcers from&nbsp;<a href="/publications/our-publications/fact-sheet/genital-herpes.html">herpes</a>&nbsp;or <a href="/publications/our-publications/fact-sheet/syphilis.html">syphilis</a>) are hard to notice but may allow HIV to pass into your body.</li>
</ul>

<p><strong>As a woman, you&nbsp;are more likely to get HIV during vaginal sex when:</strong></p>

<ul>
	<li>You are unaware of your partner's risk factors for HIV. Some men, for example, have sex with men as well as women but do not tell their female partners.</li>
	<li>Your male partner was recently infected. During this time, the amount of HIV in his semen is higher. Exposure during early infection may cause up to half of all HIV transmissions in the United States.<a href="#references"><sup>2, 4</sup></a></li>
	<li>Your partners do not use male latex condoms or you do not use female condoms correctly every time you have sex.</li>
	<li>You have a history of sexual abuse, which can lead to riskier future behavior.</li>
	<li>You have sex with multiple partners or have sex with someone who is having sex with multiple partners.</li>
	<li>You have sex in exchange for money or drugs.</li>
	<li>You misuse drugs or alcohol before or during sex.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Women who inject drugs or share needles",
      content: `

    <div class="answer"><p>Women who use injection drugs or share needles or syringes and other injection equipment are at high risk for HIV. In fact, sharing needles is the second most common way that HIV is spread. (Sex is the most common way that HIV is spread.) Use of injected drugs also raises your risk for risky behaviors, such as not using a condom during sex. In a study of U.S. cities with high levels of HIV, 72% of women who injected drugs reported having sex without a condom in the past year.<a href="#references"><sup>5</sup></a></p>

<p>If you use injection drugs, talk to your doctor about medicine, called&nbsp;<a href="http://www.cdc.gov/hiv/risk/prep/index.html">pre-exposure prophylaxis (PrEP)</a>, to prevent getting HIV.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Women who have sex with women",
      content: `

    <div class="answer"><p>Women who have sex only with women might think they are safe from HIV. This type of HIV transmission is rare. If you are a woman and your female partner has HIV, you can get it if you have cuts, bleeding gums, or sores in your mouth and you give oral sex. It is also possible to spread HIV through menstrual blood and shared sex toys.<a href="#references"><sup>6</sup></a></p>

<p>As a woman who has sex with women, it is also possible to get HIV if:</p>

<ul>
	<li>You inject or your partner injects drugs with someone who has HIV</li>
	<li>You have&nbsp;or your partner has sex with a man who has HIV</li>
	<li>You are trying to get pregnant and use semen that has not been tested for HIV or <a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html">sexually transmitted infections (STIs)</a></li>
</ul>

<p>Lower your risk of getting HIV or passing it to your partner:</p>

<ul>
	<li>Know your HIV status and your partner's HIV status.</li>
	<li>Take steps to <a href="/hiv-and-aids/hiv-prevention">protect yourself and others from HIV</a>.</li>
	<li>Use latex condoms correctly and every time if you have sex with men.</li>
	<li>Use <a href="/glossary#dental_dam">dental dams</a> correctly.</li>
	<li>Never share sex toys.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Younger women",
      content: `

    <div class="answer"><p>Young women are at risk for HIV:</p>

<ul>
	<li>According to a 2013 survey, only half of female high school students used a condom the last time they had sex. Only one in eight female high school students in the study had ever been tested for HIV.<a href="#references"><sup>7</sup></a></li>
	<li>Younger women are more likely to have a&nbsp;<a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html">sexually transmitted infection (STI</a>).<a href="#references"><sup>8</sup></a> Having an untreated STI makes HIV transmission more likely. An untreated vaginal yeast or bacterial infection can also increase the risk of transmission. This is because the infection brings white blood cells (and therefore <a href="http://aids.gov/hiv-aids-basics/just-diagnosed-with-hiv-aids/understand-your-test-results/cd4-count/">CD4 cells</a> that can be infected with HIV) into the area. This is especially true for women, because small cuts on the skin of the vagina are hard to notice but may allow HIV to pass into your body.</li>
	<li>Teen girls and younger women are at higher risk for HIV infection than adult women, because their reproductive tract is still developing.<a href="#references"><sup>9</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Older women",
      content: `

    <div class="answer"><p>Women over 50 are still at risk for HIV. Older women are more likely than younger women to be diagnosed with HIV much later after they are first infected.<a href="#references"><sup>10</sup></a></p>

<p>This may be because older women may think they do not need condoms, because they do not worry about getting pregnant. They may not talk about safe sex with their doctors or partner or get tested regularly for HIV and other <a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html">sexually transmitted infections (STIs)</a>. Their doctors may also not suspect their symptoms could be caused by HIV.<a href="#references"><sup>10</sup></a> A later diagnosis can mean a later start to treatment and possibly more damage to your immune system. It can also raise the risk of spreading HIV to other people.</p>

<p>You can get HIV at any age. In fact, the decrease in hormone levels during and after <a href="/menopause/">menopause</a> means your vagina will probably not be as lubricated (wet) as it used to be. This means that you have a greater risk for tiny cuts in your vagina during sex that can make it easier for HIV to get in.</p>

<p><strong>Other health concerns</strong></p>

<p>Older women with HIV also need to think about other health problems, such as heart disease and osteoporosis. If you have HIV, talk to your doctor about steps you can take to lower your risk of these problems. Ask about&nbsp;<a href="/screening-tests-and-vaccines/">screening tests</a> you might need as you age.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "African-American and Hispanic women",
      content: `

    <div class="answer"><p>Women of color, especially African-American and Hispanic women, are disproportionately affected by HIV.</p>

<ul>
	<li><strong>African-American women</strong>&nbsp;made up more than 61% of new HIV infections among women in 2015&nbsp;but are only 14% of the female population in the United States.<a href="#references"><sup>11, 12</sup></a> African-American women face the highest risk of HIV and other <a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html">sexually transmitted infections (STIs)</a> compared with women of other groups.<a href="#references"><sup>13</sup></a> However, many African-American women do not know their HIV status. Poverty, stigma, and fear of discrimination may prevent women from getting tested or seeking care if infected.</li>
	<li><strong>Hispanic women</strong> made up 15% of new HIV infections among women in 2015.<a href="#references"><sup>11</sup></a> Cultural challenges may raise Hispanic women's risk for HIV. Hispanic women may avoid seeking testing, counseling, or treatment if infected because of their immigration status, stigma, or fear of discrimination. Poverty may also prevent Hispanic women from getting care.</li>
</ul>

<p><a href="https://www.cdc.gov/actagainstaids/campaigns/tctt/index.html"><strong>Act Against AIDS: Take Charge. Take the Test.</strong></a></p>

<p>Take Charge. Take the Test.™ urges African-American women to get tested for HIV. The program is part of the Act Against AIDS campaign by the Centers for Disease Control and Prevention. The effort helps you recognize your risk of getting HIV and the need for HIV testing. It provides you with the information and help you need to take charge of your life — whatever your HIV test result.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about HIV and women?",
      content: `

    <div class="answer"><p>For more information about HIV and women, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="https://www.aids.gov/hiv-aids-basics/">HIV/AIDS Basics</a> — Information from HIV.gov.</li>
	<li><a href="http://www.cdc.gov/hiv/risk/racialethnic/aa/index.html">HIV Among African Americans</a> — Fact sheet from the Centers for Disease Control and Prevention (CDC).</li>
	<li><a href="http://www.cdc.gov/hiv/risk/racialEthnic/aian/index.html">HIV Among American Indians and Alaska Natives</a> — Fact sheet from the CDC.</li>
	<li><a href="http://www.cdc.gov/hiv/group/racialethnic/asians/">HIV&nbsp;Among Asians</a>&nbsp;— Fact sheet from the CDC.</li>
	<li><a href="http://www.cdc.gov/hiv/risk/racialethnic/hispaniclatinos/index.html">HIV Among Hispanics/Latinos</a> — Fact sheet from the CDC.</li>
	<li><a href="http://www.cdc.gov/hiv/risk/racialethnic/nhopi/index.html">HIV/AIDS Among Native Hawaiians and Other Pacific Islanders in the United States</a> — Fact sheet from the CDC.</li>
	<li><a href="http://today.duke.edu/2012/03/aidsabuse" target="_blank" class="external-link external-popup">HIV and the Long Tail of Child Sexual Abuse <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Report from Duke University's Global Health Institute.</li>
	<li><a href="http://www.sfaf.org/hiv-info/hot-topics/hivision/hiv-and-aging-vienna-satellite-2010-07-19-executive-summary.pdf" target="_blank" class="external-link external-popup">HIV/AIDS and Aging: Emerging Issues in Research, Care, Treatment, and Prevention <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Meeting summary on heart disease and bone loss and their affect on aging women with HIV.</li>
	<li><a href="http://www.thebody.com/content/art44411.html?ic=sabottom" target="_blank" class="external-link external-popup">HIV/AIDS Resource Center for Women <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information for women living with HIV.</li>
	<li><a href="http://www.avert.org/lesbians-safe-sex.htm" target="_blank" class="external-link external-popup">Lesbians &amp; Bisexual Women Sex <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Fact sheet from AVERT.</li>
	<li><a href="http://www.thewellproject.org/hiv-information/menopause-and-hiv" target="_blank" class="external-link external-popup">Menopause and HIV <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the Well Project.</li>
	<li><a href="http://www.americanbar.org/publications/human_rights_magazine_home/human_rights_vol37_2010/spring2010/sex_trafficking_and_hiv_aids_a_deadly_junction_for_women_and_girls.html" target="_blank" class="external-link external-popup">Sex Trafficking and HIV/AIDS: A Deadly Junction for Women <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— <em>Human Rights</em> Magazine story from the American Bar Association's AIDS Coordination Project.</li>
	<li><a href="https://obamawhitehouse.archives.gov/sites/default/files/docs/hiv_vaw_grhd_report.pdf">Update on Efforts to Address the Intersection of HIV/AIDS, Violence Against Women and Girls, and Gender-Related Health Disparities</a>&nbsp;— Report from the White House.</li>
	<li><a href="http://www.who.int/gender/violence/vawandhiv/en/" target="_blank" class="external-link external-popup">Violence Against Women and HIV/AIDS <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the World Health Organization.</li>
	<li><a href="http://www.kff.org/hivaids/upload/6092-11.pdf" target="_blank" class="external-link external-popup">Women and HIV/AIDS in the United States <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Report from the Henry J. Kaiser Family Foundation.</li>
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
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hiv/statistics/basics/ataglance.html">HIV in the United States: <em>At A Glance</em></a>.</li>
	<li>Health Resources and Services Administration. (2013). <a href="http://hab.hrsa.gov/sites/default/files/hab/clinical-quality-management/womenwithaids_0.pdf">A Guide to the Clinical Care of Women with HIV</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="https://www.cdc.gov/hiv/pdf/library/reports/surveillance/cdc-hiv-surveillance-report-2015-vol-27.pdf">HIV Surveillance Report, Vol. 27</a>.</li>
	<li>Brenner, B.G., Roger, M., Routy, J.P., Moisi, D., Ntemgawa, M., Matte, C., et al. (2007). <a href="http://www.ncbi.nlm.nih.gov/pubmed/17330784">High rates of forward transmission events after acute/early HIV-1 infection</a>. <em>Journal of Infectious Diseases</em>;&nbsp;195 (7)<em>:</em>&nbsp;951–959.</li>
	<li>Centers for Disease Control and Prevention. (2015). <a href="http://www.cdc.gov/hiv/risk/idu.html">HIV and Injection Drug Use</a>.</li>
	<li>Centers for Disease Control and Prevention. (2014). <a href="http://www.cdc.gov/mmwr/preview/mmwrhtml/mm6310a1.htm">Likely Female-to-Female Sexual Transmission of HIV — Texas, 2012</a>. <em>MMWR</em>; 63(10): 209–212.</li>
	<li>Centers for Disease Control and Prevention. (2014). <a href="http://www.cdc.gov/mmwr/pdf/ss/ss6304.pdf">Youth Risk Behavior Surveillance — United States, 2013</a>. <em>MMWR; </em>63(4).</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hiv/risk/age/youth/index.html">HIV Among Youth</a>.</li>
	<li>Henry-Reid, L.M., Martinez, J. (2008). <a href="http://www.ncbi.nlm.nih.gov/pubmed/18463462">Care of the adolescent with HIV</a>. <em>Clinical Obstetrics and Gynecology</em>; 8(51): 319–328.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hiv/risk/age/olderamericans/">HIV Among People Aged 50 and Over</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="https://www.cdc.gov/hiv/pdf/library/reports/surveillance/cdc-hiv-surveillance-report-2015-vol-27.pdf">HIV Surveillance Report, Vol. 27</a>.</li>
	<li>U.S. Census Bureau. (2015). <a href="http://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?src=bkmk">Annual Estimates of the Resident Population by Sex, Race Alone or in Combination, and Hispanic Origin for the United States, States, and Counties: April 1, 2010 to July 1, 2014</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hiv/group/racialethnic/africanamericans/">HIV Among African Americans</a>.</li>
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
