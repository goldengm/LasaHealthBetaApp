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

export function hysterPage({ navigation, ...rest }) {
  const condName = "Hysterectomy";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Hysterectomy.jpg?VersionId=jMAElqnT68ahnHyNF7iHTlPO.KecHNwV";
  const condDescription =
    "A hysterectomy is a surgery to remove a woman's uterus (also known as the womb). The uterus is where a baby grows when a woman is pregnant. During the surgery the whole uterus is usually removed. Your doctor may also remove your fallopian tubes and ovaries. After a hysterectomy, you no longer have menstrual periods and cannot become pregnant.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Hysterectomy.jpg?VersionId=jMAElqnT68ahnHyNF7iHTlPO.KecHNwV"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Hysterectomy</h1>  -->
            <p><strong>A hysterectomy is a surgery to remove a woman's uterus</strong> (also known as the womb). The uterus is where a baby grows when a woman is pregnant. During the surgery the whole uterus is usually removed. Your doctor may also remove your fallopian tubes and ovaries. After a hysterectomy, you no longer have menstrual periods and cannot become pregnant.</p>

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
      title: "What happens during a hysterectomy?",
      content: `

    <div class="answer"><p>Hysterectomy is a surgery to remove a woman's uterus (her womb). The whole uterus is usually removed. Your doctor also may remove your fallopian tubes and ovaries.</p>

<p>Talk to your doctor before your surgery to discuss your options. For example, if both ovaries are removed, you will have symptoms of menopause. Ask your doctor about the risks and benefits of removing your ovaries. You may also be able to try an&nbsp;<a href="#3" title="View Source">alternative to hysterectomy</a>, such as medicine or another type of treatment, first.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why would I need a hysterectomy?",
      content: `

    <div class="answer"><p>You may need a hysterectomy if you have one of the following:<sup><a href="#references" title="View Source">1</a></sup></p>

<ul>
	<li><b>Uterine fibroids.</b>&nbsp;<a href="/a-z-topics/uterine-fibroids">Uterine fibroids</a>&nbsp;are noncancerous growths in the wall of the uterus. In some women they cause pain or heavy bleeding.</li>
	<li><b>Heavy or unusual vaginal bleeding.</b>&nbsp;Changes in hormone levels, infection, cancer, or fibroids can cause heavy, prolonged bleeding.</li>
	<li><b>Uterine prolapse.</b>&nbsp;This is when the uterus slips from its usual place down into the vagina. This is more common in women who had several vaginal births, but it can also happen after menopause or because of obesity. Prolapse can lead to urinary and bowel problems and pelvic pressure.</li>
	<li><b>Endometriosis.</b>&nbsp;<a href="/a-z-topics/endometriosis">Endometriosis</a>&nbsp;happens when the tissue that normally lines the uterus grows outside of the uterus on the ovaries where it doesn't belong. This can cause severe pain and bleeding between periods.</li>
	<li><b>Adenomyosis.</b>&nbsp;In this condition the tissue that lines the uterus grows inside the walls of the uterus where it doesn't belong. The uterine walls thicken and cause severe pain and heavy bleeding.</li>
	<li><b>Cancer (or precancer) of the uterus, ovary, cervix, or endometrium (the lining of the uterus).</b>&nbsp;Hysterectomy may be the best option if you have cancer in one of these areas. Other treatment options may include chemotherapy and radiation. Your doctor will talk with you about the type of cancer you have and how advanced it is. Learn more about&nbsp;<a href="https://www.cancer.gov/about-cancer/treatment">treatment options for these cancers</a>&nbsp;at the National Cancer Institute.</li>
</ul>

<p>Keep in mind that there may be&nbsp;<a href="#3" title="View Source">alternative ways</a>&nbsp;to treat your health problem without having a hysterectomy. Hysterectomy is a major surgery. Talk with your doctor about all of your treatment options.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are some alternatives to hysterectomy?",
      content: `

    <div class="answer"><p>Hysterectomy is major surgery. Sometimes a hysterectomy may be medically necessary, such as with prolonged heavy bleeding or certain types of cancer. But sometimes you can try other treatments first. These include:</p>

<ul>
	<li><b>Watchful waiting.</b>&nbsp;You and your doctor may wish to wait if you have&nbsp;<a href="/a-z-topics/uterine-fibroids">uterine fibroids</a>, which tend to shrink after menopause.</li>
	<li><b>Exercises.</b>&nbsp;For uterine prolapse, you can try&nbsp;<a href="http://www.nlm.nih.gov/medlineplus/ency/article/003975.htm">Kegel exercises</a>&nbsp;(squeezing the pelvic floor muscles). Kegel exercises help restore tone to the muscles holding the uterus in place.</li>
	<li><b>Medicine.</b>&nbsp;Your doctor may give you medicine to help with&nbsp;<a href="/a-z-topics/endometriosis">endometriosis</a>. Over-the-counter pain medicines taken during your period also may help with pain and bleeding. Hormonal birth control, such as the pill, shot, or vaginal ring, or a hormonal intrauterine device (IUD) may help with irregular or heavy vaginal bleeding or periods that last longer than usual.</li>
	<li><b>Vaginal pessary (for uterine prolapse).</b>&nbsp;A pessary is a rubber or plastic donut-shaped object, similar to a diaphragm used for birth control. The pessary is inserted into the vagina to hold the uterus in place. Uterine prolapse happens when the&nbsp;uterus drops or “falls out” because it loses support after childbirth or pelvic surgery.&nbsp;</li>
	<li><b>Surgery.</b>&nbsp;You and your doctor may choose to try a surgery that involves smaller or fewer cuts than hysterectomy. The smaller cuts may help you heal faster with less scarring. Depending on your symptoms, these options may include:
	<ul>
		<li><b>Surgery to treat endometriosis.</b>&nbsp;Laparoscopic surgery uses a thin, lighted tube with a small camera. The doctor puts the camera and surgery tools into your pelvic area through very small cuts. This surgery can remove scar tissue or growths from endometriosis without harming the surrounding healthy organs such as ovaries. You may still get pregnant after this surgery.</li>
		<li><b>Surgery to help stop heavy or long-term vaginal bleeding.</b>
		<ul>
			<li>Dilation and curettage (D&amp;C) removes the lining of the uterus that builds up every month before your period. Often, a hysteroscopy is done at the same time. Your doctor inserts the hysteroscope (a thin telescope) into your uterus to see the inside of the uterine cavity. D&amp;C may also remove noncancerous growths or polyps from the uterus. After the D&amp;C, a new uterine lining will build up during your next menstrual cycle as usual. You may still get pregnant after this surgery.</li>
			<li>Endometrial ablation destroys the lining of the uterus permanently. Depending on the size and condition of your uterus, your doctor may use tools that freeze, heat, or use microwave energy to destroy the uterine lining. This surgery should not be used if you still want to become pregnant or if you have gone through menopause.</li>
		</ul>
		</li>
		<li><strong>Surgery to remove uterine fibroids without removing the uterus.</strong> This is called a myomectomy. Depending on the location of your fibroids, the myomectomy can be done through the pelvic area or through the vagina and cervix. You may be able to get pregnant after this surgery. If your doctor recommends this surgery, ask your doctor if a power morecellator will be used. The <a href="https://www.fda.gov/medicaldevices/productsandmedicalprocedures/surgeryandlifesupport/ucm584463.htm">FDA has warned against the use of power morcellators</a> for most women.</li>
		<li><b>Surgery to shrink fibroids without removing the uterus.</b>&nbsp;This is called myolysis. The surgeon heats the fibroids, which causes them to shrink and die. Myolysis may be done laparoscopically (through very small cuts in the pelvic area). You may still get pregnant after myolysis.</li>
	</ul>
	</li>
	<li><b>Treatments to shrink fibroids without surgery.</b>&nbsp;These treatments include uterine artery embolization (UAE) and magnetic resonance (MR)-guided focused ultrasound (MR[f]US). UAE puts tiny plastic or gel particles into the vessels supplying blood to the fibroid. Once the blood supply is blocked, the fibroid shrinks and dies. MR(f)US sends ultrasound waves to the fibroids that heat and shrink the fibroids. After UAE or MR(f)US, you will not be able to get pregnant.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common are hysterectomies?",
      content: `

    <div class="answer"><p>Each year in the United States, nearly 500,000 women get hysterectomies.<sup><a href="#references" title="View Source">2</a></sup>&nbsp;A hysterectomy is the second most common surgery among women in the United States. The most common surgery in women is childbirth by cesarean delivery (C-section).</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of hysterectomies?",
      content: `

    <div class="answer"><ul>
	<li>A&nbsp;<b>total&nbsp;hysterectomy</b>&nbsp;removes all of the uterus, including the cervix.&nbsp;The ovaries and the fallopian tubes may or may not be removed. This is the most common type of hysterectomy.</li>
	<li>A&nbsp;<b>partial</b>, also called&nbsp;<b>subtotal</b>&nbsp;or&nbsp;<b>supracervical</b>, hysterectomy removes just the upper part of the uterus. The cervix is left in place. The ovaries may or may not be removed.</li>
	<li>A&nbsp;<b>radical&nbsp;hysterectomy</b>&nbsp;removes all of the uterus, cervix, the tissue on both sides of the cervix, and the upper part of the vagina. A radical hysterectomy is most often used to treat certain types of cancer, such as cervical cancer. The fallopian tubes and the ovaries may or may not be removed.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will the doctor remove my ovaries during the hysterectomy? ",
      content: `

    <div class="answer"><p>Whether your ovaries are removed during the hysterectomy may depend on the reason for your hysterectomy.</p>

<p>Ovaries may be removed during hysterectomy to lower the risk for ovarian cancer. However, women who have not yet gone through menopause also lose the protection of estrogen, which helps protect women from conditions such as heart disease and osteoporosis.&nbsp;</p>

<p>Recent studies suggest that removing only the fallopian tubes but keeping the ovaries may help lower the risk for the most common type of ovarian cancer, which is believed to start in the fallopian tubes.<sup><a href="#references" title="View Source">3</a></sup></p>

<p>The decision to keep or remove your ovaries is one you can make after talking about the risks and benefits with your doctor.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will the hysterectomy cause me to enter menopause?",
      content: `

    <div class="answer"><p>All women who have a hysterectomy will stop getting their period. Whether you will have other symptoms of&nbsp;<a href="/menopause/">menopause</a>&nbsp;after a hysterectomy depends on whether your doctor removes your ovaries during the surgery.</p>

<p><b>If you keep your ovaries</b>&nbsp;<b>during the hysterectomy</b>, you should not have other menopausal symptoms right away. But you may have symptoms a few years younger than the average age for menopause (52 years).</p>

<p>Because your&nbsp;<a href="/glossary#uterus">uterus</a>&nbsp;is removed, you no longer have periods and cannot get pregnant. But your ovaries might still make hormones, so you might not have other signs of menopause. You may have hot flashes, a symptom of menopause, because the surgery may have blocked blood flow to the ovaries. This can prevent the ovaries from releasing estrogen.</p>

<p><b>If both ovaries are removed during the hysterectomy</b>, you will no longer have periods and you may have other menopausal symptoms right away. Because your hormone levels drop quickly without ovaries, your symptoms may be stronger than with natural menopause. Ask your doctor about ways to manage your symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is a hysterectomy performed?",
      content: `

    <div class="answer"><p>A hysterectomy can be done in several different ways. It will depend on your health history and the reason for your surgery. Talk to your doctor about the different options:</p>

<ul>
	<li><b>Abdominal hysterectomy.</b>&nbsp;Your doctor makes a cut, usually in your lower abdomen.</li>
	<li><b>Vaginal hysterectomy.</b>&nbsp;This is done through a small cut in the vagina.</li>
	<li><b>Laparoscopic hysterectomy.</b>&nbsp;A laparoscope is an instrument with a thin, lighted tube and a small camera that allows your doctor to see your pelvic organs. Laparoscopic surgery is when the doctor makes very small cuts to put the laparoscope and surgical tools inside of you. During a laparoscopic hysterectomy the uterus is removed through the small cuts made in either your abdomen or your vagina.</li>
	<li><b>Robotic surgery.</b>&nbsp;Your doctor guides a robotic arm to do the surgery through small cuts in your lower abdomen, like a laparoscopic hysterectomy.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How long does it take to recover from a hysterectomy?",
      content: `

    <div class="answer"><p>Recovering from a hysterectomy takes time. Most women stay in the hospital one to two days after surgery. Some doctors may send you home the same day of your surgery. Some women stay in the hospital longer, often when the hysterectomy is done because of cancer.</p>

<p>Your doctor will likely have you get up and move around as soon as possible after your hysterectomy. This includes going to the bathroom on your own. However, you may have to pee through a thin tube called a catheter for one or two days after your surgery.</p>

<p>The time it takes for you to return to normal activities depends on the type of surgery:</p>

<ul>
	<li><b>Abdominal surgery</b>&nbsp;can take from four to six weeks to recover.</li>
	<li><b>Vaginal, laparoscopic, or robotic surgery</b>&nbsp;can take from three to four weeks to recover.</li>
</ul>

<p>You should get plenty of rest and not lift heavy objects for four to six weeks after surgery. At that time, you should be able to take tub baths and resume sexual intercourse. How long it takes for you to recover will depend on your surgery and your health before the surgery. Talk to your doctor.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What changes can I expect after a hysterectomy?",
      content: `

    <div class="answer"><p>Hysterectomy is a major surgery, so&nbsp;<a href="#9" title="View Source">recovery</a>&nbsp;can take a few weeks. But for most women, the biggest change is a better quality of life. You should have relief from the symptoms that made the surgery necessary.</p>

<p>Other changes that you may experience after a hysterectomy include:</p>

<ul>
	<li><b>Menopause.</b>&nbsp;You will no longer have periods. If your ovaries are removed during the hysterectomy, you may have other menopause symptoms.</li>
	<li><b>Change in sexual feelings.</b>&nbsp;Some women have vaginal dryness or less interest in sex after a hysterectomy, especially if the ovaries are removed.</li>
	<li><b>Increased risk for other health problems.</b>&nbsp;If both ovaries are removed, this may put you at higher risk for certain conditions such as: bone loss, heart disease, and urinary incontinence (leaking of urine). Talk to your doctor about how to prevent these problems.</li>
	<li><b>Sense of loss.</b>&nbsp;Some women may feel grief or&nbsp;<a href="/publications/our-publications/fact-sheet/depression.html">depression</a>&nbsp;over the loss of fertility or the change in their bodies. Talk to your doctor if you have symptoms of depression, including feelings of sadness, a loss of interest in food or things you once enjoyed, or less energy, that last longer than a few weeks after your surgery.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will my sex life change after a hysterectomy?",
      content: `

    <div class="answer"><p>It might. If you had a good sex life before your hysterectomy, you should be able to return to it without any problems after recovery. Many women report a better sex life after hysterectomy because of relief from pain or heavy vaginal bleeding.</p>

<p>If your hysterectomy causes you to have symptoms of menopause, you may experience vaginal dryness or a lack of interest in sex. Using a water-based lubricant can help with dryness. Talk to your partner and try to allow more time to get aroused during sex. Talk with your doctor and get more tips in our&nbsp;<a href="/menopause/menopause-sexuality/">Menopause and sexuality</a>&nbsp;section.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "I've had a hysterectomy. Do I still need to have Pap tests? ",
      content: `

    <div class="answer"><p>Maybe. You will still need regular&nbsp;<a href="/publications/our-publications/fact-sheet/pap-test.html">Pap tests</a>&nbsp;(or Pap smear) to screen for cervical cancer if you:</p>

<ul>
	<li>Did not have your cervix removed</li>
	<li>Had a hysterectomy because of cancer or precancer</li>
</ul>

<p>Ask your doctor what is best for you and how often you should have Pap tests.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about hysterectomies?",
      content: `

    <div class="answer"><p>For more information about hysterectomy, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.ahrq.gov/">Agency for Healthcare Research and Quality (AHRQ), HHS</a><br>
	<b>Phone Number:</b>&nbsp;301-427-1364</li>
	<li><a href="http://www.cancer.gov/">National Cancer Institute (NCI)</a><br>
	<b>Phone Number:</b>&nbsp;800-422-6237</li>
	<li><a href="http://www.cdc.gov/reproductivehealth/">Division of Reproductive Health, National Center for Chronic Disease Prevention and Health Promotion, Centers for Disease Control and Prevention (CDC), HHS</a><br>
	<b>Phone Number:</b>&nbsp;800-323-4636</li>
	<li><a href="https://www.acog.org" class="external-link external-popup" target="_blank">American College of Obstetricians and Gynecologists (ACOG) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<b>Phone Number:</b>&nbsp;202-638-5577</li>
	<li><a href="http://www.facs.org/" class="external-link external-popup" target="_blank">American College of Surgeons (ACS) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<b>Phone Number:</b>&nbsp;800-621-4111</li>
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
	<li>American College of Obstetricians and Gynecologists. (2015).&nbsp;<a href="http://www.acog.org/~/media/For%20Patients/faq008.pdf?dmc=1&amp;ts=20140625T1147320648" class="external-link external-popup" target="_blank">Hysterectomy. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>CDC. (2010). National Hospital Discharge Survey.&nbsp;<a href="http://www.cdc.gov/nchs/data/nhds/4procedures/2010pro4_numberprocedureage.pdf">Procedures by selected patient characteristics – Number by procedure category and age.</a></li>
	<li>American College of Obstetricians and Gynecologists. (2013).&nbsp;<a href="http://www.acog.org/About-ACOG/News-Room/News-Releases/2013/Growing-Acceptance-of-Removing-Fallopian-Tubes" class="external-link external-popup" target="_blank">Growing Acceptance of Removing Fallopian Tubes But Keeping Ovaries to Lower Ovarian Cancer Risk <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
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
