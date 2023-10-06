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

export function menstPage({ navigation, ...rest }) {
  const condName = "Menstrual Cycle (Period)";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Periodproblems.jpg?VersionId=elw5nPzr8WExwVpgVGZpbSHGJ5d2gyd2";
  const condDescription =
    "The menstrual cycle is the hormonal process a woman's body goes through each month to prepare for a possible pregnancy. Regular menstrual periods in the years between puberty and menopause are usually a sign that your body is working normally. Irregular or heavy, painful periods are not normal. Many women also get premenstrual syndrome (PMS) symptoms. You can take steps at home and talk to your doctor or nurse about ways to treat your period problems and PMS.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
                <div class="heading-description">
            <!-- <h1>Your menstrual cycle</h1>  -->
            <p>A menstrual cycle begins with the first day of your period, or menstruation [<strong>MEN-stroo-AY-shuhn</strong>] and starts over again when the next period begins. Throughout a monthly menstrual cycle, your body makes different amounts of chemicals called hormones to prepare for pregnancy. These changing hormone levels can cause menstrual symptoms. Menstrual cycles often change as a woman gets older. A normal cycle lasts between 24 and 38 days.</p>

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
      title: "What is menstruation? ",
      content: `

    <div class="answer"><p>Menstruation is a woman’s monthly bleeding, often called your “period.” When you menstruate, your body discards the monthly buildup of the lining of your <a href="http://www.womenshealth.gov/glossary#uterus">uterus</a> (womb). Menstrual blood and tissue flow from your uterus through the small opening in your <a href="http://www.womenshealth.gov/glossary#cervix" title="glossary ">cervix</a>&nbsp;and pass out of your body through your <a href="http://www.womenshealth.gov/glossary#vagina" title="glossary">vagina</a>.</p>

<p>During the monthly menstrual cycle, the uterus lining builds up to prepare for pregnancy. If you do not get pregnant, estrogen and progesterone hormone levels begin falling. Very low levels of estrogen and progesterone tell your body to begin menstruation.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the menstrual cycle? ",
      content: `

    <div class="answer"><p>The menstrual cycle is the monthly hormonal cycle a female’s body goes through to prepare for pregnancy. Your menstrual cycle is counted from the first day of your period up to the first day of your next period. Your hormone levels (estrogen and progesterone) usually change throughout the menstrual cycle and can cause menstrual symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How long is a typical menstrual cycle?",
      content: `

    <div class="answer expanded"><p>The typical menstrual cycle is 28 days long, but each woman is different.<a href="#references"><sup>2</sup></a> Also, a woman’s menstrual cycle length might be different from month-to-month. Your periods are still “regular” if they usually come every 24 to 38 days.<a href="#references"><sup>3</sup></a> This means that the time from the first day of your last period up to the start of your next period is at least 24 days but not more than 38 days.</p>

<p>Some women’s periods are so regular that they can predict the day and time that their periods will start. Other women are regular but can only predict the start of their period within a few days.&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is ovulation?",
      content: `

    <div class="answer"><p>Ovulation is when the ovary releases an egg so it can be fertilized by a sperm in order to make a baby. A woman is most likely to get pregnant if she has sex without birth control in the three days before and up to the day of ovulation (since the sperm are already in place and ready to fertilize the egg as soon as it is released). A man’s sperm can live for 3 to 5 days in a woman’s reproductive organs, but a woman’s egg lives for just 12 to 24 hours after ovulation.</p>

<p>Each woman’s cycle length may be different, and the time between ovulation and when the next period starts can be anywhere from one week (7 days) to more than 2 weeks (19 days).<a href="#references"><sup>4</sup></a></p>

<p>At different times in a woman’s life, ovulation may or may not happen:</p>

<ul>
	<li>Women who are <a href="/pregnancy/" title="Pregnancy">pregnant</a> do not ovulate.</li>
	<li>Women who are <a href="/breastfeeding/index.html" title="Breastfeeding">breastfeeding</a> may or may not ovulate. Women who are breastfeeding should talk to their doctor about <a href="/a-z-topics/birth-control-methods">birth control</a>&nbsp;methods if they do not want to get pregnant.</li>
	<li>During perimenopause, the transition to <a href="/menopause/index.html" title="menopause">menopause</a>, you may not ovulate every month.</li>
	<li>After menopause you do not ovulate.<br>
	&nbsp;</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I know if I’m ovulating?",
      content: `

    <div class="answer"><p>A few days before you ovulate, your vaginal mucus or discharge changes and becomes more slippery and clear. This type of mucus helps sperm move up into your uterus and into the fallopian tubes where it can fertilize an egg. Some women feel minor cramping on one side of their pelvic area when they ovulate. Some women have other signs of <a href="/glossary#ovulation" title="glossary">ovulation</a>.</p>

<p>Luteinizing hormone (LH) is a hormone released by your brain that tells the ovary to release an egg (called ovulation). LH levels begin to surge upward about 36 hours before ovulation, so some women and their doctors test for LH levels. LH levels peak about 12 hours before ovulation.<sup>1</sup> Women who are tracking ovulation to become pregnant will notice a slight rise in their basal temperature (your temperature after sleeping before you get out of bed) around ovulation. <a href="/pregnancy/you-get-pregnant/trying-conceive" title="trying to conceive">Learn more about tracking ovulation to become pregnant</a>.&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does my menstrual cycle change as I get older?",
      content: `

    <div class="answer"><p>Your cycles may change in different ways as you get older. Often, periods are heavier when you are younger (in your teens) and usually get lighter in your 20s and 30s. This is normal.</p>

<ul>
	<li><b>For a few years after your first period,</b> menstrual cycles longer than 38 days are common. Girls usually get more regular cycles within three years of starting their periods. If longer or irregular cycles last beyond that, see your doctor or nurse to rule out a health problem, such as <a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/polycystic-ovary-syndrome.html" title="Polycystic ovary syndrome">polycystic ovary syndrome (PCOS)</a>.<a href="#references"><sup>5</sup></a></li>
	<li><b>In your 20s and 30s,</b> your cycles are usually regular and can last anywhere from 24 to 38 days.</li>
	<li><b>In your 40s,</b> as your body starts the transition to <a href="http://www.womenshealth.gov/menopause/index.html" title="menopause">menopause</a>,&nbsp;your cycles might become irregular. Your menstrual periods might stop for a month or a few months and then start again. They also might be shorter or last longer than usual, or be lighter or heavier than normal.</li>
</ul>

<p>Talk to your doctor or nurse if you have menstrual cycles that are longer than 38 days or shorter than 24 days, or if you are worried about your menstrual cycle.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why should I keep track of my menstrual cycle? ",
      content: `

    <div class="answer"><p><b>If your periods are regular,</b> tracking them will help you know when you ovulate, when you are most likely to get pregnant, and when to expect your next period to start.</p>

<p><b>If your periods are not regular,</b> tracking them can help you share any problems with your doctor or nurse.</p>

<p><b>If you have period pain or bleeding that causes you to miss school or work</b>, tracking these period symptoms will help you and your doctor or nurse find treatments that work for you. Severe pain or bleeding that causes you to miss regular activities is not normal and can be treated.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I keep track of my menstrual cycle? ",
      content: `

    <div class="answer"><p>You can keep track of your menstrual cycle by marking the day you start your period on a calendar. After a few months, you can begin to see if your periods are regular or if your cycles are different each month.</p>

<p>You may want to track:</p>

<ul>
	<li><a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/premenstrual-syndrome.html" title="premenstrual syndrome">Premenstrual syndrome</a> (PMS) symptoms: Did you have cramping, headaches, moodiness, forgetfulness, bloating, or breast tenderness?</li>
	<li>When your bleeding begins: Was it earlier or later than expected?</li>
	<li>How heavy the bleeding was on your heaviest days: Was the bleeding heavier or lighter than usual? How many pads or tampons did you use?</li>
	<li>Period symptoms: Did you have pain or bleeding on any days that caused you to miss work or school?</li>
	<li>How many days your period lasted: Was your period shorter or longer than the month before?</li>
</ul>

<p>You can also download apps (sometimes for free) for your phone to track your periods. Some include features to track your PMS symptoms, energy and activity levels, and more.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "When does a girl usually get her first period? ",
      content: `

    <div class="answer"><p>The average age for a girl in the United States to get her first period is 12.<sup>6</sup><sup> </sup>This does not mean that all girls start at the same age.</p>

<p>A girl may start her period anytime between 8 and 15. The first period normally starts about two years after breasts first start to develop and pubic hair begins to grow. The age at which a girl’s mother started her period can help predict when a girl may start her period.</p>

<p>A girl should see her doctor if:</p>

<ul>
	<li>She starts her period before age 8.</li>
	<li>She has not had her first period by age 15.</li>
	<li>She has not had her first period within three years of breast growth.</li>
</ul>

<p>Get more information for girls about <a href="http://girlshealth.gov/body/period/index.html" title="Girlshealh.gov: Getting your period">getting their period</a> at girlshealth.gov.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How long does a woman usually have periods? ",
      content: `

    <div class="answer"><p>On average, women get a period for about 40 years of their life.<a href="#references"><sup>6</sup></a><sup>,<a href="#references">7</a></sup> Most women have regular periods until <a href="/menopause/menopause-basics" title="menopause basics">perimenopause</a>, the time when your body begins the change to menopause. Perimenopause, or transition to menopause, may take a few years. During this time, your period may not come regularly. Menopause happens when you have not had a period for 12 months in a row. For most women, this happens between the ages of 45 and 55. The average age of menopause in the United States is 52.</p>

<p>Periods also stop during pregnancy and may not come back right away if you breastfeed.</p>

<p>But if you don’t have a period for 90 days (three months), and you are not pregnant or breastfeeding, talk to your doctor or nurse. Your doctor will check for pregnancy or a health problem that can cause periods to stop or become irregular.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is a normal amount of bleeding during my period? ",
      content: `

    <div class="answer"><p>The average woman loses about two to three tablespoons of blood during her period.<a href="#references"><sup>8</sup></a> Your periods may be lighter or heavier than the average amount. What is normal for you may not be the same for someone else. Also, the flow may be lighter or heavier from month to month.</p>

<p>Your periods may also change as you get older. Some women have heavy bleeding during perimenopause, the transition to menopause. Symptoms of <a href="/menstrual-cycle/period-problems" title="period problems">heavy menstrual bleeding</a>&nbsp;may include:</p>

<ul>
	<li>Bleeding through one or more pads or tampons every one to two hours</li>
	<li>Passing blood clots larger than the size of quarters</li>
	<li>Bleeding that often lasts longer than eight days</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How often should I change my pad, tampon, menstrual cup, sponge, or period panties?",
      content: `

    <div class="answer"><p>Follow the instructions that came with your period product. Try to change or rinse your feminine hygiene product before it becomes soaked through or full.</p>

<ul>
	<li>Most women change their <strong>pads</strong> every few hours.</li>
	<li>A <strong>tampon</strong> should not be worn for more than 8 hours because of the risk of <a href="#13" title="What is toxic shock syndrome?">toxic shock syndrome (TSS)</a></li>
	<li><strong>Menstrual cups</strong> and <strong>sponges</strong> may only need to be rinsed once or twice a day.</li>
	<li><strong>Period panties</strong> (underwear with washable menstrual pads sewn in) can usually last about a day, depending on the style and your flow.</li>
</ul>

<p>Use a product appropriate in size and absorbency for your menstrual bleeding. The amount of menstrual blood usually changes during a period. Some women use different products on different days of their period, depending on how heavy or light the bleeding is.&nbsp;&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is toxic shock syndrome?",
      content: `

    <div class="answer"><p>Toxic shock syndrome (TSS) is a rare but sometimes deadly condition caused by bacteria that make toxins or poisons. In 1980, 63 women died from TSS. A certain brand of super absorbency tampons was said to be the cause. These tampons were taken off the market.</p>

<p>Today, most cases of TSS are not caused by using tampons. But, you could be at risk for TSS if you use more absorbent tampons than you need for your bleeding or if you do not change your tampon often enough (at least every four to eight hours). Menstrual cups, cervical caps, sponges, or diaphragms (anything inserted into your vagina) may also increase your risk for TSS if they are left in place for too long (usually 24 hours). Remove sponges within 30 hours and cervical caps within 48 hours.<a href="#references"><sup>9</sup></a><sup> </sup></p>

<p><strong>If you have any symptoms of TSS, take out the tampon, menstrual cup, sponge, or diaphragm, and call 911 or go to the hospital right away. </strong></p>

<p>Symptoms of TSS include:<a href="#references"><sup>10</sup></a></p>

<ul>
	<li>Sudden high fever</li>
	<li>Muscle aches</li>
	<li>Vomiting</li>
	<li>Nausea</li>
	<li>Diarrhea</li>
	<li>Rash</li>
	<li>Kidney or other organ failure</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does the menstrual cycle affect other health problems? ",
      content: `

    <div class="answer"><p>The changing hormone levels throughout the menstrual cycle can also affect other health problems:</p>

<ul>
	<li><a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/depression.html" title="depression"><strong>Depression</strong></a><strong>&nbsp;and </strong><a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/anxiety-disorders.html" title="anxiety disorders"><strong>anxiety disorders</strong></a><strong>.&nbsp;</strong>These conditions often overlap with premenstrual syndrome (PMS). Depression and anxiety symptoms are similar to PMS and may get worse before or during your period.</li>
	<li><b>Asthma.</b> Your asthma symptoms may be worse during some parts of your cycle.<a href="#references"><sup>11</sup></a></li>
	<li><a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/irritable-bowel-syndrome.html" title=" Irritable bowel syndrome"><strong>Irritable bowel syndrome (IBS)</strong></a><strong>.&nbsp;</strong>IBS causes cramping, bloating, and gas. Your IBS symptoms may get worse right before your period.</li>
	<li><a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/interstitial-cystitis.html" title="Bladder pain"><strong>Bladder pain syndrome</strong></a><strong>.&nbsp;</strong>Women with bladder pain syndrome are more likely to have painful cramps during PMS.</li>
</ul>

<p>Learn more about your <a href="/menstrual-cycle/your-menstrual-cycle-and-your-health" title="menstrual cycle and your health">menstrual cycle and your health</a>.&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about the menstrual cycle?",
      content: `

    <div class="answer"><p>For more information about the menstrual cycle, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://www.acog.org/Patients/FAQs/Abnormal-Uterine-Bleeding" title="Abnormal Uterine Bleeding Information" class="external-link external-popup" target="_blank">Abnormal Uterine Bleeding <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> – Information from the American College of Obstetricians and Gynecologists.</li>
	<li><a href="https://www.nichd.nih.gov/health/topics/menstruation/conditioninfo/Pages/default.aspx" title="About Menstruation">Menstruation and Menstrual Problems</a> – Information from the <em>Eunice Kennedy Shriver </em>National Institute of Child Health and Human Development</li>
	<li><a href="http://www.mayoclinic.org/diseases-conditions/toxic-shock-syndrome/basics/definition/con-20021326" title="Toxic Shock Syndrome Overview" class="external-link external-popup" target="_blank">Toxic Shock Syndrome <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;– Information from the Mayo Clinic</li>
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
	<li>Reed, B.G., Carr, B.R. (2015). <a href="https://www.ncbi.nlm.nih.gov/books/NBK279054/" title="TITLE: The Normal Menstrual Cycle and the Control of Ovulation">The Normal Menstrual Cycle and the Control of Ovulation.</a> Endotext [Internet]. South Dartmouth (MA): MDText.com, Inc.</li>
	<li>Chiazze, L., Brayer, F.T., Macisco, J.J., Parker, M.P., Duffy, B.J. (1968). <a href="http://jama.jamanetwork.com/article.aspx?articleid=337826" title="The Length and Variability of the Human Menstrual Cycle" class="external-link external-popup" target="_blank">The Length and Variability of the Human Menstrual Cycle <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>JAMA; </em>203(6): 377–380.</li>
	<li>Fraser, I.S., Critchley, H., Broder, M., Munro, M.G. (2011). <a href="http://www.pharllc.com/wp-content/uploads/2014/03/Fraser-Semin-Reprod-Med-2011.pdf" title="TITLE: The FIGO Recommendations on Terminologies and Definitions for Normal and Abnormal Uterine Bleeding" class="external-link external-popup" target="_blank">The FIGO Recommendations on Terminologies and Definitions for Normal and Abnormal Uterine Bleeding. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><em>The Seminars in Reproductive Medicine; </em>29(5): 383-390.</li>
	<li>Wilcox, A. J., Dunson, D., Baird, D. D. (2000). <a href="http://www.ncbi.nlm.nih.gov/pubmed/11082086" title="The timing of the “fertile window” in the menstrual cycle: day specific estimates from a prospective study">The timing of the "fertile window" in the menstrual cycle: day specific estimates from a prospective study</a>. <em>British Medical Journal</em>, 321(7271):1259-1262.</li>
	<li>American College of Obstetricians and Gynecologists. (2015). <a href="http://www.acog.org/Resources-And-Publications/Committee-Opinions/Committee-on-Adolescent-Health-Care/Menstruation-in-Girls-and-Adolescents-Using-the-Menstrual-Cycle-as-a-Vital-Sign" title="ACOG The American Congress of Obstetricians and Gynecologists" class="external-link external-popup" target="_blank">Menstruation in Girls and Adolescents: Using the Menstrual Cycle as a Vital Sign <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>McDowell, M.A., Brody, D.J., Hughes, J.P. (2007). <a href="http://www.jahonline.org/article/S1054-139X(06)00394-6/abstract" title="ACOG The American Congress of Obstetricians and Gynecologists" class="external-link external-popup" target="_blank">Has Age at Menarche Changed? Results from the National Health and Nutrition Examination Survey (NHANES) 1999–2004 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>Journal of Adolescent Health; </em>40(3): 227–231.</li>
	<li>Shifren, J.L., Gass, M.L.S., for the NAMS Recommendations for Clinical Care of Midlife Women Working Group. (2014). <a href="http://www.menopause.org/docs/default-source/2014/nams-recomm-for-clinical-care.pdf" title="Special Feature: The North American Menopause Society Recommendations for Clinical Care of Midlife Women" class="external-link external-popup" target="_blank">The North American Menopause Society Recommendations for Clinical Care of Midlife Women <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Menopause;</em> 21(10): 1038–1062.</li>
	<li>Centers for Disease Control and Prevention. (2015). <a href="http://www.cdc.gov/ncbddd/blooddisorders/women/menorrhagia.html" title="CDC: Blood Disorders in Women: Heavy Menstrual Bleeding">Heavy Menstrual Bleeding</a>.</li>
	<li>American College of Obstetricians and Gynecologists. (2016). <a href="https://www.acog.org/~/media/For%20Patients/faq022.pdf" title="Barrier Methods of Birth Control: Spermicide, Condom, Sponge, Diaphragm, and Cervical Cap." class="external-link external-popup" target="_blank">Barrier Methods of Birth Control: Spermicide, Condom, Sponge, Diaphragm, and Cervical Cap. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;</li>
	<li>Matsuda, Y., Kato, H., Ono, E., Kikuchi, K., Muraoka, M., Takagi, K. (2008). <a href="https://www.ncbi.nlm.nih.gov/pubmed/19090830" title=" Diagnosis of toxic shock syndrome by two different systems; clinical criteria and minoring of TSST-1-reactive T-cells.">Diagnosis of toxic shock syndrome by two different systems; clinical criteria and monitoring of TSST-1-reactive T cells</a>.&nbsp;<em>Microbiol Immunol</em>; 52(11):513-21.</li>
	<li>Zein, J.G., Erzurum, S.C. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4572514/">Asthma is Different in Women.</a> <i>Current Allergy and Asthma Reports; </i>15(6): 28.</li>
</ol>
</div>
`,
    },
  ];
  return [condName, condImURL, condDescription, condHeader, condQA];
}

export function menstScreening({ navigation, ...rest }) {
  const screeningTree = [
    {
      title: "Mestruation Question1",
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
      title: "Menstruation Question2",
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
