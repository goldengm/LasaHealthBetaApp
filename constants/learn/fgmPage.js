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

export function fgmPage({ navigation, ...rest }) {
  const condName = "Female genital mutilation or cutting";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Femalegenitalmutilationorcutting.jpg?VersionId=YzRHmIIknwfbVYGbHMeIq269zIwYqSLq";
  const condDescription =
    "Female genital mutilation or cutting (FGM/C) means piercing, cutting, removing, or sewing closed all or part of a girl's or woman's external genitals for no medical reason. Researchers estimate more than 513,000 girls and women in the U.S. have experienced or are at risk of FGM/C.1 Worldwide, as many as 140 million girls and women alive today have been cut.2 FGM/C is often a part of the culture in countries where it is practiced. But FGM/C has no health benefits and can cause long-term health problems. FGM/C is against the law in the U.S. and many other countries.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Femalegenitalmutilationorcutting.jpg?VersionId=YzRHmIIknwfbVYGbHMeIq269zIwYqSLq"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Female genital mutilation or cutting</h1>  -->
            <p><strong>Female genital mutilation or cutting (FGM/C)</strong> means piercing, cutting, removing, or sewing closed all or part of a girl's or woman's external genitals for no medical reason. Researchers estimate more than 513,000 girls and women in the U.S. have experienced or are at risk of FGM/C.<a href="#references"><sup>1</sup></a> Worldwide, as many as 140 million girls and women alive today have been cut.<a href="#references"><sup>2</sup></a> FGM/C is often a part of the culture in countries where it is practiced. But FGM/C has no health benefits and can cause long-term health problems. FGM/C is against the law in the U.S. and many other countries.</p>

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
      title: "What is FGM/C?",
      content: `

    <div class="answer"><p>The World Health Organization (WHO) and the United Nations (UN) define FGM/C as "any partial or total removal of the external female genitalia or any other injury of the female genital organs for nonmedical reasons." The United States also uses this definition in its efforts to end the practice.</p>

<p>FGM/C is sometimes called "female circumcision." FGM/C is not the same as&nbsp;<a href="/glossary#male-circumcision">male circumcision</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of FGM/C?",
      content: `

    <div class="answer"><p>The World Health Organization (WHO) describes four major types of FGM/C. Types 1 and 2 are the most common, but all types may be harmful.</p>

<p>The four types of FGM/C are:<a href="#references"><sup>3</sup></a></p>

<ul>
	<li><strong>Type 1:</strong> Partial or total removal of the clitoris. This is also called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="klit-er-i-DEK-tuh-mee">clitoridectomy</a>.</li>
	<li><strong>Type 2:</strong> Partial or total removal of the clitoris and the labia (the inner and outer "lips" that surround the vagina)</li>
	<li><strong>Type 3:</strong> Sewing the labia together to make the vaginal opening smaller. This is called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="in-fib-yuh-LEY-shuhn">infibulation</a>. The clitoris may be left in place.</li>
	<li><strong>Type 4:</strong> All other harm to the female genitalia for nonmedical purposes, including pricking, piercing, cutting, scraping, and cauterization (burning)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Where is FGM/C done?",
      content: `

    <div class="answer"><p>FGM/C is done mostly in parts of northern and central Africa, in the southern Sahara, and in parts of the Middle East and Asia. See the map of&nbsp;<a href="http://www.childinfo.org/files/FGCM_Lo_res.pdf" class="external-link external-popup" target="_blank">countries where FGM/C is practiced most often <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 22.7 MB).</p>

<p>Some immigrants in the United States and Western Europe from these countries also practice FGM/C, or may send their daughters back to their family homeland for FGM/C. Other immigrant families stop practicing FGM/C once they are in a new country.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why is FGM/C done?",
      content: `

    <div class="answer"><p>Different communities and cultures have different reasons for practicing FGM/C; the reasons are often complex and can change over time.<a href="#references"><sup>4</sup></a>&nbsp;Social acceptability is the most common reason. Families often feel pressure to have their daughter cut so she is accepted by their community. Other reasons may include:</p>

<ul>
	<li><strong>To help ensure a woman remains a virgin until marriage</strong></li>
	<li><strong>Hygiene.</strong> Some communities believe that the external female genitals that are cut (the clitoris or the labia or both) are unclean.</li>
	<li><strong>Rite of passage.</strong> In some countries, FGM/C is a part of the ritual that a girl goes through to be considered a woman.</li>
	<li><strong>Condition of marriage.</strong> In some countries, a girl or woman is cut in order to be suitable for marriage.</li>
	<li><strong>Belief that FGM/C increases sexual pleasure for the man</strong></li>
	<li><strong>Religious duty,</strong> although no religion's holy texts require FGM/C</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who is at risk of FGM/C?",
      content: `

    <div class="answer"><p>Girls and women who live in the&nbsp;<a href="http://www.childinfo.org/files/FGCM_Lo_res.pdf" class="external-link external-popup" target="_blank">countries where FGM/C is practiced most often <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 22.7 MB) have the highest risk. In some countries, only a small number of girls and women are cut. In other countries, nearly all girls and women are cut.<a href="#references"><sup>2</sup></a></p>

<p>The specific community or part of the country a girl or woman lives in can increase or decrease her risk of certain types of FGM/C. For example, different ethnic groups may perform different&nbsp;<a href="#2">types of FGM/C</a>. Also, how much wealth, education, and the type of education a girl's parents receive may influence their choice to have a daughter cut. Lastly, whether a community is urban or rural can affect the practice of FGM/C.</p>

<p>The age when girls are cut varies from country to country and even within communities.</p>

<ul>
	<li>Girls are most at risk between birth and 15 years. In about half of the countries in which FGM/C is practiced, girls are cut before 5 years old. In other countries, most girls are cut between 5 and 14.<a href="#references"><sup>4</sup></a></li>
	<li>Sometimes, FGM/C is done to adult women. Women may be cut just before marriage. Some communities wait until the first pregnancy.<a href="#references"><sup>5</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How many girls and women are affected by FGM/C?",
      content: `

    <div class="answer"><p>An estimated 100 to 140 million women alive today have undergone FGM/C. Three million girls and women may be at risk of FGM/C each year.<a href="#references"><sup>2</sup></a>&nbsp;The percentage of women who have been cut is very different from country to country. In Indonesia, 86% to 100% of girls and women have been cut.<a href="#references"><sup>6</sup></a>&nbsp;In Guinea and Somalia, more than 95% of girls and women have been cut. In Djibouti, Egypt, Eritrea, and Sierra Leone, it is near 90%. However, in Cameroon and Uganda, less than 2% of girls and women have been cut.</p>

<p>In the United States, available estimates suggest that more than 513,000 girls and women have experienced FGM/C or are at risk of FGM/C.<a href="#references"><sup>1</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does FGM/C cause health problems?",
      content: `

    <div class="answer"><p>FGM/C can cause immediate and long-term medical problems. How bad these problems are depends on:<a href="#references"><sup>7</sup></a></p>

<ul>
	<li>How clean (sterile) the place is where cutting happens. FGM/C is illegal in most countries and must be done in secret. In most of these countries, FGM/C is usually done on a floor, table, bed, or the ground. But, in some countries, such as Egypt, a loophole in the law allows doctors to do FGM/C in a sterile, medical site.<a href="#references"><sup>4</sup></a></li>
	<li>The experience of the person performing FGM/C and the tools used. The cutting is often done with glass, razor blades, or knives. The tools may not be sterilized between cuttings. In&nbsp;<a href="#2">type </a><a href="#2">3</a> FGM/C, the sewing may be done with thorns and without sterile thread.</li>
	<li>The type of FGM/C. Type 3 causes more health problems than type 1 or type 2.</li>
	<li>The general health of the girl or woman</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How does FGM/C affect a girl's or woman's health immediately after the cutting?",
      content: `

    <div class="answer"><p>The&nbsp;<a href="#2">type of FGM/C</a>&nbsp;done may affect how much and how serious health problems are after FGM/C. Type 3 causes more health problems than type 1 or type 2.</p>

<p>Immediate medical problems can include:<a href="#references"><sup>7</sup></a></p>

<ul>
	<li><strong>Severe pain.</strong> Girls usually don't get any pain medicine before or after they are cut.</li>
	<li><strong>Serious bleeding</strong></li>
	<li><strong>Infection of the wound.</strong> Girls can get fever, shock, and even die if the infection is not treated.</li>
	<li><strong>Trauma.</strong> Girls are held down often against their will and may not understand why.</li>
	<li><strong>Problems going to the bathroom,</strong> including burning and pain</li>
	<li><strong>Tetanus and other infectious diseases,</strong> such as&nbsp;<a href="/hiv-and-aids">HIV</a>, from unsterilized cutting tools</li>
	<li><strong>Death.</strong> Researchers do not know how many girls die because of FGM/C. Few records are kept, and deaths that may have been caused by FGM/C are often not reported as related to FGM/C.<a href="#references"><sup>8</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How does FGM/C affect a girl's or woman's health in the long term? ",
      content: `

    <div class="answer"><p>FGM/C can cause long-term problems with a girl's or woman's physical, mental, and sexual health. The&nbsp;<a href="#2">type of FGM/C</a>&nbsp;done may affect how much and how serious the health problems are. Type 2 and type 3 cause more serious health problems than type 1.</p>

<p>Long-term health problems include:<a href="#references"><sup>9</sup></a></p>

<ul>
	<li><strong>Infections,</strong> such as genital abscesses (sores filled with pus that must be drained) and infectious diseases such as hepatitis B. In one large study, more infections and infectious diseases such as&nbsp;<a href="/publications/our-publications/fact-sheet/urinary-tract-infection.html">urinary tract infections</a>,&nbsp;<a href="/a-z-topics/bacterial-vaginosis">bacterial vaginosis</a>, and&nbsp;<a href="/hiv-and-aids">HIV</a>&nbsp;were found in women with&nbsp;<a href="#2">type 3 FGM/C</a>.<a href="#references"><sup>10</sup></a>&nbsp;This is probably because the damage caused by FGM/C can make vaginal tissue more likely to tear during sex. This increases the risk of HIV and other&nbsp;<a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html">sexually transmitted infections</a>&nbsp;(STIs).</li>
	<li><strong>Problems having sex.</strong> Extra scar tissue from FGM/C (most common after type 2 or type 3) can cause pain, especially during sex. This can lead to a lack of interest in sex, vaginal dryness, and lower overall satisfaction.<a href="#references"><sup>11</sup></a>&nbsp;Scarring can also cause vaginal tissue to be less elastic than normal vaginal tissue. It might not stretch as easily for sex or childbirth.</li>
	<li><strong>Depression and anxiety.</strong> Girls may not understand what is being done to them or why. The effects of this painful experience are similar to those of&nbsp;<a href="/mental-health/illnesses/post-traumatic-stress-disorder.html">post-traumatic stress disorder</a>. Girls or women who have already been cut and are living in the United States may be disgraced or humiliated when they receive medical care.<a href="#references"><sup>12,13</sup></a>&nbsp;They may also fear that health care providers in the United States do not know how to take care of them.<a href="#references"><sup>14</sup></a>&nbsp;This can make adjusting to a new country more challenging.</li>
	<li><strong>Painful and prolonged menstrual periods.</strong> Type 3 FGM/C may cause some girls and women to have painful menstrual periods. Some women are left with only a small opening for urinating and menstrual bleeding. They may not be able to pass all of their menstrual blood. This can cause pain and periods that are longer than normal. Some women may also have infections over and over again.</li>
	<li><strong>Urinary problems.</strong> Type 3 FGM/C may slow or strain the normal flow of urine, which can cause urinary tract infections. Urine can also get trapped behind the scar and crystallize, forming hard masses called bladder, or urinary, stones.</li>
	<li><strong>Fistula, an opening between the urethra and vagina that lets urine run into the vagina.</strong> This can happen when the urethra is damaged during FGM/C. Fistula causes&nbsp;<a href="/a-z-topics/urinary-incontinence">incontinence</a>&nbsp;and other problems, including odors, and can cause girls and women to become social outcasts.</li>
</ul>

<p>Girls and women who come to the United States and have already been cut may face additional health problems. Doctors and other health care providers may not know how to adequately treat the girls' and women's unique health needs. In some cases, health care providers lack training on counseling and caring for girls and women who have been cut.<a href="#references"><sup>9</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does FGM/C affect pregnancy?",
      content: `

    <div class="answer"><p>FGM/C does not usually cause problems for a woman during pregnancy, but women who have been cut face unique health risks during childbirth. These include:<a href="#references"><sup>9</sup></a></p>

<ul>
	<li><strong>Prolonged labor.</strong> Women with&nbsp;<a href="#2">type 3 FGM/C</a>&nbsp;are at greatest risk for a longer second stage of labor.</li>
	<li><strong>Excessive bleeding after childbirth</strong></li>
	<li><strong>Higher risk for <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="eh-pih-zee-AH-tuh-mee">episiotomy</a></strong> during childbirth. A doctor makes a cut in the <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="pair-uh-NEE-um">perineum</a>, the flesh between the vagina and anus. There is also a higher risk that this flesh will tear on its own during birth. These risks are especially high for women who have had type 3 FGM/C.</li>
	<li><strong>Higher risk for cesarean section</strong> (C-section). Doctors who are unfamiliar with scarring from FGM/C may suggest a C-section. However, a C-section may not be necessary. Women with type 3 FGM/C may have their vagina safely re-opened (defibulated) during pregnancy or in labor and delivery. But health care providers may not have the experience or training to provide adequate health care for women who have been cut.<a href="#references"><sup>9,15</sup></a></li>
</ul>

<p>Risks to the infant include low birth weight (smaller than 5½ pounds at birth), breathing problems at birth, and stillbirth or early death.<a href="#references"><sup>16,17</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is FGM/C against the law?",
      content: `

    <div class="answer"><p>FGM/C is against the law in the United States. The United States and many other countries consider FGM/C a violation of women's rights and a form of child abuse. Federal law makes it a crime to perform FGM/C on a girl younger than 18 or to take or attempt to take a girl out of the United States for FGM/C. Girls and women who have experienced FGM/C are not at fault and have not broken any U.S. laws.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Why does the United States consider FGM/C to be violence against women and child abuse?",
      content: `

    <div class="answer"><p>The United States considers FGM/C to be a serious human rights abuse and a form of gender-based violence and child abuse.<a href="#references"><sup>18</sup></a> Many girls have FGM/C forced on them and have no choice about whether it happens. It is painful and offers no health benefits. And FGM/C often causes long-term physical and mental health problems. For these reasons, the U.S. government works with other governments and organizations to help end the practice.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can be done to end FGM/C?",
      content: `

    <div class="answer"><p>Governments and groups in the United States and around the world are working together to end the practice of FGM/C. Some approaches include:</p>

<ul>
	<li><strong>Community involvement.</strong> Successful efforts to end or reduce the practice of FGM/C have the following in common:<a href="#references"><sup>19</sup></a>

	<ul>
		<li>Individuals from the community become trainers and educators. Many programs use respected local women to teach other girls and women in their communities about the harmful effects of FGM/C.</li>
		<li>Efforts focus on community needs and strengths, and recommendations from community members.</li>
		<li>The programs and the leaders of organizations respect the traditions and social structure of the community. Program participants earn community trust so that sensitive issues like FGM/C can be discussed honestly.</li>
		<li>Culturally sensitive programs include the use of theater, songs, and games to educate families about FGM/C.</li>
	</ul>
	</li>
	<li><strong>Passing laws against FGM/C.</strong> FGM/C is illegal in most countries around the world, including many of the countries in which FGM/C is regularly practiced.</li>
</ul>

<p>Recent research shows that these efforts may be working. In some regions, education is changing attitudes and influencing a family's choice to have FGM/C performed. For example, in Egypt, 96% of women 45 to 49 years old were cut, but the percentage dropped to 81% among women 15 to 19 years old.<a href="#references"><sup>2</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What should I do if someone in the United States is at risk of FGM/C? ",
      content: `

    <div class="answer"><p>If you think a girl is at risk of FGM/C, contact your state's&nbsp;<a href="https://www.childwelfare.gov/organizations/?CWIGFunctionsaction=rols:main.dspList&amp;rolType=Custom&amp;RS_ID=5">child protective services agency</a>.</p>

<p>You may also contact the Human Rights and Special Prosecutions Section of the Department of Justice at 1-800-813-5863 or&nbsp;<a href="mailto:hrsptips@usdoj.gov">hrsptips@usdoj.gov</a>&nbsp;or the Human Rights Violator and War Crimes Unit of the Department of Homeland Security at 1-866-DHS-2-ICE (866-347-2423) or&nbsp;<a href="mailto:HRV.ICE@ice.dhs.gov">HRV.ICE@ice.dhs.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What can be done to improve the health of girls and women who have experienced FGM/C?",
      content: `

    <div class="answer"><p>Girls and women in the United States who have already been cut need access to clinically and culturally appropriate care from trained health care providers.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about FGM/C?",
      content: `

    <div class="answer"><p>For more information about FGM/C, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.globalhealth.gov/news-and-events/News/fgm.html" target="_blank" title="FEMALE GENITAL MUTILATION/CUTTING: UNITED STATES GOVERNMENT'S RESPONSE">GlobalHealth.gov, Office of Global Affairs, HHS</a><br>
	Phone Number:&nbsp;202-690-6174</li>
	<li><a href="http://www.usaid.gov/" target="_blank" title="U.S. Agency for International Development">U.S. Agency for International Development (USAID)</a><br>
	Phone Number:&nbsp;202-712-4810</li>
	<li><a href="http://www.brighamandwomens.org/Departments_and_Services/obgyn/services/africanwomenscenter/default.aspx" target="_blank" title="Female Genital Cutting | African Women's Health Center at BWH" class="external-link external-popup">African Women's Health Center <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number:&nbsp;617-732-4740</li>
	<li><a href="http://www.midwife.org" class="external-link external-popup" target="_blank">American College of Nurse-Midwives <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>
	<ul>
		<li><a href="http://www.midwife.org/ACNM/files/ACNMLibraryData/UPLOADFILENAME/000000000068/Female%20Circumcision%20Sept%202012.pdf" target="_blank" title="Female Circumcision" class="external-link external-popup">Position Statement: Female Circumcision <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 80 KB)</li>
	</ul>
	</li>
	<li>American College of Obstetricians and Gynecologists
	<ul>
		<li><a href="http://sales.acog.org/Female-Genital-Cutting-Clinical-Management-of-Circumcised-Women-Second-Edition-P349.aspx" target="_blank" title="Female Genital Cutting: Clinical Management of Circumcised Women, Second Edition | The College Online Bookstore" class="external-link external-popup">Female Genital Cutting: Clinical Management of Circumcised Women <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	</ul>
	</li>
	<li><a href="http://www.amnesty.org/en" target="_blank" title="Home | Amnesty International" class="external-link external-popup">Amnesty International <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number:&nbsp;212-807-8400</li>
	<li><a href="http://reproductiverights.org/" target="_blank" title="Center for Reproductive Rights" class="external-link external-popup">Center for Reproductive Rights <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>
	<ul>
		<li><a href="http://www.reproductiverights.org/sites/default/files/documents/pub_bp_fgmlawsusa.pdf" target="_blank" title="Legislation on Female Genital Mutilation in the United States" class="external-link external-popup">Legislation on Female Genital Mutilation in the United States <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 188 KB)</li>
	</ul>

	<p>Phone Number:&nbsp;917-637-3600</p>
	</li>
	<li><a href="http://www.lcsnw.org/seattle/iccs.html" target="_blank" title="International Counseling &amp; Community Services - Lutheran Community Services" class="external-link external-popup">International Counseling &amp; Community Services (ICCS) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number:&nbsp;206-816-3253</li>
	<li><a href="http://www.prb.org/" target="_blank" title="Population Reference Bureau" class="external-link external-popup">Population Reference Bureau <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-877-9881</li>
	<li><a href="http://www.rewa.org/" target="_blank" title="Refugee Women's Alliance (ReWA)" class="external-link external-popup">Refugee Women's Alliance <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number:&nbsp;206-721-0243</li>
	<li><a href="http://www.refugeewomensclinic.org/" target="_blank" title="Home | Refugee Women's Health Clinic" class="external-link external-popup">Refugee Women's Health Clinic <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number:&nbsp;602-344-1445</li>
	<li><a href="http://www.sautiyetu.us/" target="_blank" title="Sauti-Yetu - Giving Voice To Our Potential" class="external-link external-popup">Sauti Yetu: Center for African Women and Families <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number:&nbsp;718-665-2486</li>
	<li><a href="http://www.unicef.org/" target="_blank" title="UNICEF | Children's Rights &amp; Emergency Relief Organization" class="external-link external-popup">UNICEF <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>
	<ul>
		<li><a href="http://www.unicef.org/protection/57929_58002.html" target="_blank" title="Female genital mutilation/cutting | Child protection from violence, exploitation and abuse | UNICEF" class="external-link external-popup">Child protection from violence, exploitation and abuse <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
		<li><a href="http://www.childinfo.org/files/FGCM_Lo_res.pdf" target="_blank" title="Female Genital Mutilation/Cutting: A statistical overview and exploration of the dynamics of change" class="external-link external-popup">Female genital mutilation/cutting: A statistical overview and exploration of the dynamics of change <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 22.7 MB)</li>
	</ul>

	<p>Phone Number:&nbsp;212-686-5522</p>
	</li>
	<li><a href="http://www.who.int/" target="_blank" title="WHO | World Health Organization" class="external-link external-popup">World Health Organization (WHO) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>
	<ul>
		<li><a href="http://whqlibdoc.who.int/publications/2008/9789241596442_eng.pdf" target="_blank" title="Eliminating Female genital mutilation: An interagency statement" class="external-link external-popup">Eliminating female genital mutilation. An interagency statement <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 2.11 MB)</li>
		<li><a href="http://www.who.int/mediacentre/factsheets/fs241/en/" target="_blank" title="WHO | Female genital mutilation" class="external-link external-popup">Fact sheet: female genital mutilation <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	</ul>

	<p>Phone Number:&nbsp;011-41-791-2111</p>
	</li>
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
	<li>Goldberg, H., Stupp, P., Okoroh, E., Besera, G., Goodman, D. and Danel, I. (2016). <a href="https://www.ncbi.nlm.nih.gov/pubmed/26957669">Female genital mutilation/cutting in the United States: Updated estimates of women and girls at risk, 2012.</a> <em>Public Health Reports,</em> 131, 1–8.</li>
	<li>Population Reference Bureau. (2014). <a href="http://www.prb.org/pdf14/fgm-wallchart2014.pdf" title="Female Genital Mutilation/Cutting: Data and Trends – 2014 Update" class="external-link external-popup" target="_blank">Female genital mutilation/cutting: data and trends <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 870 KB).</li>
	<li>World Health Organization. (2008). <a href="http://whqlibdoc.who.int/publications/2008/9789241596442_eng.pdf" title="Eliminating Female genital mutilation: An interagency statement" class="external-link external-popup" target="_blank">Eliminating female genital mutilation. An interagency statement <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 2.11 MB).</li>
	<li>United Nations Children's Fund (UNICEF). (2013). <a href="http://www.childinfo.org/files/FGCM_Lo_res.pdf" title="Female Genital Mutilation/Cutting: A statistical overview and exploration of the dynamics of change" class="external-link external-popup" target="_blank">Female genital mutilation/cutting: a statistical overview and exploration of the dynamics of change <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 22.7 MB).</li>
	<li>United Nations Population Fund. <a href="http://www.unfpa.org/resources/female-genital-mutilation-fgm-frequently-asked-questions" class="external-link external-popup" target="_blank">Frequently asked questions on female genital mutilation/cutting. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Population Council. (2003). <a href="http://pdf.usaid.gov/pdf_docs/Pnacu138.pdf" title="Female Circumcision in Indonesia: Extent, Implications and Possible Interventions to Uphold Women's Health Rights">Female Circumcision in Indonesia</a> (PDF, 383 KB).</li>
	<li>Abdulcadir, J., Margairaz, C., Boulvain, M., &amp; Irion, O. (2011). <a href="https://www.ncbi.nlm.nih.gov/pubmed/21213149" title="SMW - Swiss Medical Weekly - Care of women with female genital mutilation/cutting">Care of women with female genital mutilation/cutting</a><a href="https://www.ncbi.nlm.nih.gov/pubmed/21213149">.</a> <em>Swiss Medical Weekly.</em> DOI: 10.4414/smw.2011.13137.</li>
	<li>Innocenti Digest UNICEF. (2005). <a href="http://www.unicef-irc.org/publications/pdf/fgm_eng.pdf" title="CHANGING A HARMFUL SOCIAL CONVENTION: FEMALE GENITAL MUTILATION/CUTTING" class="external-link external-popup" target="_blank">Changing a harmful social convention: female genital mutilation/cutting <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 635 KB).</li>
	<li>Reisel, D., &amp; Creighton, S. M. (2015). <a href="http://www.maturitas.org/article/S0378-5122%2814%2900326-0/pdf" title="Long term health consequences of Female Genital Mutilation (FGM)" class="external-link external-popup" target="_blank">Long-term health consequences of female genital mutilation (FGM) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 371 KB). <em>Maturitas,</em> 80, 48–51.</li>
	<li>Iavazzo, C., Sardi, T. A., &amp; Gkegkes, I. D. (2013). <a href="http://link.springer.com/article/10.1007%2Fs00404-012-2708-5" title="Female genital mutilation and infections: a systematic review of the clinical evidence - Springer" class="external-link external-popup" target="_blank">Female genital mutilation and infections: a systematic review of the clinical evidence. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><em> Archives of Gynecology and Obstetrics,</em> 287, 1137–1149.</li>
	<li>Andersson, S. H. A., Rymer, J., Joyce, D. W., Momoh, C., &amp; Gayle, C. M. (2012). <a href="http://onlinelibrary.wiley.com/doi/10.1111/1471-0528.12004/pdf" title="Sexual quality of life in women who have undergone female genital mutilation: a case–control study - Andersson - 2012 - BJOG: An International Journal of Obstetrics &amp; Gynaecology - Wiley Online Library" class="external-link external-popup" target="_blank">Sexual quality of life in women who have undergone female genital mutilation: a case-control study <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 12 KB). <em>BJOG: An International Journal of Obstetrics and Gynaecology,</em> 119(13), 1606–1611. DOI: 10.1111/1471-0528.12004.</li>
	<li>Brown, E., Carroll, J., Fogarty, C., &amp; Holt, C. (2010). <a href="https://www.ncbi.nlm.nih.gov/pubmed/20519725">"They get a C-section…they gonna die": Somali women's fears of obstetrical interventions in the United States.</a> <em>Journal of Transcultural Nursing,</em> 21(3), 220–227. DOI: 10.1177/1043659609358780.</li>
	<li>Beine, K., Fullerton, J., Palinka, L., &amp; Anders, B. (1995). <a href="https://www.ncbi.nlm.nih.gov/pubmed/7674057">Conceptions of prenatal care among Somali women in San Diego.</a> <em>Journal of Nurse Midwifery,</em> 40(4), 376–381.</li>
	<li>Pavlish, C.L., Noor, S., &amp; Brandt, J. (2010). <a href="https://www.ncbi.nlm.nih.gov/pubmed/20494500">Somali immigrant women and the American health care system: Discordant beliefs, divergent expectations, and silent worries.</a> <em>Social Science &amp; Medicine,</em> 71, 353–361.</li>
	<li>Nour, N. (2015). <a href="https://www.usaid.gov/sites/default/files/documents/1864/FGMC-Occasional-Paper-February-2015.pdf" title="FEMALE GENITAL MUTILATION/CUTTING: HEALTH PROVIDERS SHOULD BE ADVOCATES FOR CHANGE">Female Genital Mutilation/Cutting: Health Providers Should Be Advocates For Change</a> (PDF, 606 KB). Population Reference Bureau.</li>
	<li>Berg, R.C., &amp; Underland, V. (2013). <a href="http://www.hindawi.com/journals/ogi/2013/496564/abs/" title="The Obstetric Consequences of Female Genital Mutilation/Cutting: A Systematic Review and Meta-Analysis" class="external-link external-popup" target="_blank">The obstetrics consequences of female genital mutilation/cutting: a systematic review and meta-analysis <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Obstetrics &amp; Gynecology International,</em> 2013.</li>
	<li>World Health Organization. (2006). <a href="http://www.thelancet.com/journals/lancet/article/PIIS0140673606688053/abstract" title="Female genital mutilation and obstetric outcome: WHO collaborative prospective study in six African countries - The Lancet" class="external-link external-popup" target="_blank">Female genital mutilation and obstetric outcome: WHO collaborative prospective study in six African countries <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>The Lancet,</em> 367, 1835–1841.</li>
	<li>U.S. Department of Justice. (2015). <a href="http://www.justice.gov/criminal/hrsp/additional-resources/2015/01-22-15fgm-notice.pdf" title="U.S. Government Fact Sheet on Female Genital Mutilation or Cutting (FGM/C)">U.S. Government Fact Sheet on Female Genital Mutilation or Cutting (FGM/C)</a> (PDF, 17.5 KB).</li>
	<li>Population Reference Bureau. (2006). <a href="https://assets.prb.org/pdf07/FGM-C_Report.pdf" title="Abandoning Female Genital Mutilation/Cutting: AN IN-DEPTH LOOK AT PROMISING PRACTICES" class="external-link external-popup" target="_blank">Abandoning female genital mutilation/cutting: an in-depth look at promising practices <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 1.57 MB).</li>
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
