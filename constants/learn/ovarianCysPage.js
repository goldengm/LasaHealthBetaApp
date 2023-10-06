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

export function ovarianCysPage({ navigation, ...rest }) {
  const condName = "Ovarian Cysts";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Ovariancysts.jpg?VersionId=_GkGwgO5VJ5WzBv6R14ENikRulWDxSod";
  const condDescription =
    "Ovarian cysts are fluid-filled sacs in the ovary. They are common and usually form during ovulation. Ovulation happens when the ovary releases an egg each month. Many women with ovarian cysts don't have symptoms. The cysts are usually harmless.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Ovariancysts.jpg?VersionId=_GkGwgO5VJ5WzBv6R14ENikRulWDxSod"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Ovarian cysts</h1>  -->
            <p><strong>Ovarian cysts are fluid-filled sacs in the ovary. </strong>They are common and usually form during ovulation. Ovulation happens when the ovary releases an egg each month. Many women with ovarian cysts don't have symptoms. The cysts are usually harmless.</p>

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
      title: "What are ovarian cysts?",
      content: `

    <div class="answer"><p>A cyst is a fluid-filled sac. It can form in many places in the body. Ovarian cysts form in or on the ovaries.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of ovarian cysts?",
      content: `

    <div class="answer"><p>The most common types of ovarian cysts (called functional cysts) form during the menstrual cycle. They are usually benign (not cancerous).</p>

<p>The two most common types of cysts are:</p>

<ul>
	<li><b>follicle cysts.</b>&nbsp;In a normal&nbsp;<a href="/pregnancy/menstrual-cycle">menstrual cycle</a>, an ovary releases&nbsp;an egg each month. The egg grows inside a tiny sac called a follicle. When the egg matures, the follicle breaks open to release the egg. follicle cysts form when the follicle doesn't break open to release the egg. This causes the follicle to continue growing into a cyst. follicle cysts often have no symptoms and go away in one to three months.</li>
	<li><b>Corpus luteum cysts.</b>&nbsp;Once the follicle breaks open and releases the egg, the empty follicle sac shrinks into a mass of cells called corpus luteum. Corpus luteum makes hormones to prepare for the next egg for the next menstrual cycle. Corpus luteum cysts form if the sac doesn't shrink. Instead, the sac reseals itself after the egg is released, and then fluid builds up inside. Most corpus luteum cysts go away after a few weeks. But, they can grow to almost four inches wide. They also may bleed or twist the ovary and cause pain. Some medicines used to cause ovulation can raise the risk of getting these cysts.</li>
</ul>

<p>Other types of benign ovarian cysts are less common:</p>

<ul>
	<li><b>Endometriomas</b>&nbsp;are caused by&nbsp;<a href="/a-z-topics/endometriosis">endometriosis</a>. Endometriosis happens when the lining of the uterus (womb) grows outside of the uterus.</li>
	<li><b>Dermoids</b>&nbsp;come from cells present from birth and do not usually cause symptoms.</li>
	<li><b>Cystadenomas</b>&nbsp;are filled with watery fluid and can sometimes grow large.</li>
</ul>

<p>In some women, the ovaries make many small cysts. This is called&nbsp;<a href="/publications/our-publications/fact-sheet/polycystic-ovary-syndrome.html">polycystic ovary syndrome</a>&nbsp;(PCOS). PCOS can cause problems with the ovaries and with getting pregnant.</p>

<p>Malignant (cancerous) cysts are rare. They are&nbsp;<a href="#3">more common in older women</a>. Cancerous cysts are&nbsp;<a href="/publications/our-publications/fact-sheet/ovarian-cancer.html">ovarian cancer</a>. For this reason, ovarian cysts should be checked by your doctor. Most ovarian cysts are not cancerous.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets ovarian cysts?",
      content: `

    <div class="answer"><p>Ovarian cysts are common in women with regular periods. In fact, most women make at least one follicle or corpus luteum cyst every month. You may not be aware that you have a cyst unless there is a problem that causes the cyst to grow or if multiple cysts form. About 8% of premenopausal women develop large cysts that need treatment.<sup><a href="#references" title="View Source">1</a></sup></p>

<p>Ovarian cysts are less common after menopause. Postmenopausal women with ovarian cysts are at higher risk for ovarian cancer.</p>

<p>At any age, see your doctor if you think you have a cyst. See your doctor also if you have symptoms such as bloating, needing to urinate more often, pelvic pressure or pain, or abnormal (unusual) vaginal bleeding. These can be signs of a cyst or other serious problem.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes ovarian cysts?",
      content: `

    <div class="answer"><p>The most common causes of ovarian cysts include:</p>

<ul>
	<li><b>Hormonal problems.</b>&nbsp;Functional cysts usually go away on their own without treatment. They may be caused by hormonal problems or by drugs used to help you ovulate.</li>
	<li><b>Endometriosis.</b>&nbsp;Women with endometriosis can develop a type of ovarian cyst called an endometrioma. The endometriosis tissue may attach to the ovary and form a growth. These cysts can be painful during sex and during your period.</li>
	<li><b>Pregnancy.</b>&nbsp;An ovarian cyst normally develops in early pregnancy to help support the pregnancy until the placenta forms. Sometimes, the cyst stays on the ovary until later in the pregnancy and&nbsp;<a href="#13">may need to be removed</a>.</li>
	<li><b>Severe pelvic infections.</b>&nbsp;Infections can spread to the ovaries and fallopian tubes and cause cysts to form.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of ovarian cysts?",
      content: `

    <div class="answer"><p>Most ovarian cysts are small and don't cause symptoms.</p>

<p><b>If a cyst does cause symptoms,</b>&nbsp;you may have pressure, bloating, swelling, or pain in the lower abdomen on the side of the cyst. This pain may be sharp or dull and may come and go.</p>

<p><b>If a cyst ruptures,</b>&nbsp;it can cause sudden, severe pain.</p>

<p><b>If a cyst causes twisting of an ovary,</b>&nbsp;you may have pain along with nausea and vomiting.</p>

<p><b>Less common symptoms</b>&nbsp;include:</p>

<ul>
	<li>Pelvic pain</li>
	<li>Dull ache in the lower back and thighs</li>
	<li>Problems emptying the bladder or bowel completely</li>
	<li>Pain during sex</li>
	<li>Unexplained weight gain</li>
	<li>Pain during your period</li>
	<li>Unusual (not normal) vaginal bleeding</li>
	<li>Breast tenderness</li>
	<li>Needing to urinate more often</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are ovarian cysts found?",
      content: `

    <div class="answer"><p>If you have symptoms of ovarian cysts, talk to your doctor. Your doctor may do a pelvic exam to feel for swelling of a cyst on your ovary.</p>

<p>If a cyst is found, your doctor will either watch and wait or order tests to help plan treatment. Tests include:</p>

<ul>
	<li><b>Ultrasound.</b>&nbsp;This test uses sound waves to create images of the body. With ultrasound, your doctor can see the cyst's:

	<ul>
		<li>Shape</li>
		<li>Size</li>
		<li>Location</li>
		<li>Mass (whether it is fluid-filled, solid, or mixed)</li>
	</ul>
	</li>
	<li><b>Pregnancy test</b>&nbsp;to rule out pregnancy</li>
	<li><b>Hormone level tests</b>&nbsp;to see if there are hormone-related problems</li>
	<li><b>Blood test.</b>&nbsp;If you are past menopause, your doctor may give you a test to measure the amount of cancer-antigen 125 (CA-125) in your blood. The amount of CA-125 is higher with ovarian cancer. In premenopausal women, many other illnesses or diseases besides cancer can cause higher levels of CA-125.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are ovarian cysts ever an emergency?",
      content: `

    <div class="answer"><p>Yes, sometimes. If your doctor told you that you have an ovarian cyst and you have any of the following symptoms, get medical help right away:</p>

<ul>
	<li>Pain with fever and vomiting</li>
	<li>Sudden, severe abdominal pain</li>
	<li>Faintness, dizziness, or weakness</li>
	<li>Rapid breathing</li>
</ul>

<p>These symptoms could mean that your cyst has broken open, or ruptured. Sometimes, large, ruptured cysts can cause heavy bleeding.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will my ovarian cyst require surgery?",
      content: `

    <div class="answer"><p>Maybe. The National Institutes of Health estimates that 5% to 10% of women have surgery to remove an ovarian cyst. Only 13% to 21% of these cysts are cancerous.<sup><a href="#references" title="View Source">2</a></sup></p>

<p><b>Your cyst may require surgery</b>&nbsp;if you are past menopause or if your cyst:</p>

<ul>
	<li>Does not go away after several menstrual cycles</li>
	<li>Gets larger</li>
	<li>Looks unusual on the ultrasound</li>
	<li>Causes pain</li>
</ul>

<p><b>If your cyst does not require surgery,</b>&nbsp;your doctor may:</p>

<ul>
	<li>Talk to you about pain medicine. Your doctor may recommend over-the-counter medicine or prescribe stronger medicine for pain relief.</li>
	<li>Prescribe hormonal birth control if you have cysts often. Hormonal birth control, such as the pill, vaginal ring, shot, or patch, help prevent ovulation. This may lower your chances of getting more cysts.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What types of surgeries remove ovarian cysts?",
      content: `

    <div class="answer"><p>If your cyst requires surgery, your doctor will either remove just the cyst or the entire ovary.</p>

<p>Surgery can be done in two different ways:</p>

<ul>
	<li>Laparoscopy (lap-uh-ROSS-kuh-pee). With this surgery, the doctor makes a very small cut above or below your belly button to look inside your pelvic area and remove the cyst. This is often recommended for smaller cysts that look benign (not cancerous) on the ultrasound.</li>
	<li>Laparotomy (lap-uh-ROT-uh-mee). Your doctor may choose this method if the cyst is large and may be cancerous. This surgery uses a larger cut in the abdomen to remove the cyst. The cyst is then tested for cancer. If it is likely to be cancerous, it is best to see a gynecologic oncologist, who &nbsp;may need to remove the ovary and other tissues, like the uterus.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can ovarian cysts lead to cancer?",
      content: `

    <div class="answer"><p>Yes, some ovarian cysts can become cancerous. But most ovarian cysts are not cancerous.</p>

<p>The risk for ovarian cancer increases as you get older. Women who are past menopause with ovarian cysts have a higher risk for&nbsp;<a href="/publications/our-publications/fact-sheet/ovarian-cancer.html">ovarian cancer</a>. Talk to your doctor about your risk for ovarian cancer. Screening for ovarian cancer is not recommended for most women.<sup><a href="#references" title="View Source">3</a></sup>&nbsp;This is because testing can lead to "false positives."&nbsp; A false positive is a test result that says a woman has ovarian cancer when she does not.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can ovarian cysts make it harder to get pregnant?",
      content: `

    <div class="answer"><p>Typically, no. Most ovarian cysts do not affect your chances of getting pregnant. Sometimes, though, the illness causing the cyst can make it harder to get pregnant. Two conditions that cause ovarian cysts and affect fertility are:</p>

<ul>
	<li><a href="/a-z-topics/endometriosis"><b>Endometriosis</b></a><b>,</b>&nbsp;which happens when the lining of the uterus (womb) grows outside of the uterus. Cysts caused by endometriosis are called endometriomas.</li>
	<li><a href="/publications/our-publications/fact-sheet/polycystic-ovary-syndrome.html"><b>Polycystic ovary syndrome (PCOS)</b></a><b>,</b>&nbsp;one of the leading causes of infertility (problems getting pregnant). Women with PCOS often have many small cysts on their ovaries.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do ovarian cysts affect pregnancy?",
      content: `

    <div class="answer"><p>Ovarian cysts are common during pregnancy. Typically, these cysts are benign (not cancerous) and harmless.<sup><a href="#references" title="View Source">4</a></sup>&nbsp;Ovarian cysts that continue to grow during pregnancy can rupture or twist or cause problems during childbirth. Your doctor will monitor any ovarian cyst found during pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I prevent ovarian cysts?",
      content: `

    <div class="answer"><p>No, you cannot prevent functional ovarian cysts if you are ovulating. If you get ovarian cysts often, your doctor may prescribe hormonal&nbsp;<a href="/a-z-topics/birth-control-methods">birth control</a>&nbsp;to stop you from ovulating. This will help lower your risk of getting new cysts.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about ovarian cysts?",
      content: `

    <div class="answer"><p>For more information on ovarian cysts, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.nichd.nih.gov/"><b><i>Eunice Kennedy Shriver</i>&nbsp;National Institute of Child Health and Human Development (NICHD), NIH, HHS</b></a><br>
	<b>Phone Number:</b>&nbsp;800-370-2943 (TDD: 888-320-6942)</li>
	<li><a href="http://familydoctor.org/" class="external-link external-popup" target="_blank"><b>American Academy of Family Physicians (AAFP)</b> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<b>Phone Number:</b>&nbsp;800-274-2237</li>
	<li><a href="http://www.acog.org/" class="external-link external-popup" target="_blank"><b>American College of Obstetricians and Gynecologists (ACOG)</b> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<b>Phone Number:</b>&nbsp;800-673-8444</li>
	<li><a href="http://www.reproductivefacts.org/" class="external-link external-popup" target="_blank"><b>American Society for Reproductive Medicine</b> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<b>Phone Number:</b>&nbsp;205-978-5000</li>
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
	<li>Ross, E.K. (2013).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/23908107">Incidental Ovarian Cysts: When to Reassure, When to Reassess, When to Refer</a>.&nbsp;<i>Cleveland Clinic Journal of Medicine;</i>&nbsp;80(8): 503–514. Retrieved from 2013 article.</li>
	<li>NIH consensus conference (1995). Ovarian cancer: screening, treatment, and follow-up. NIH Consensus Development Panel on Ovarian Cancer.&nbsp;<i>JAMA;</i>&nbsp;273: 491–497.&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/7837369">Retrieved from 2013 article</a>.</li>
	<li>U.S. Preventive Services Task Force (2016).&nbsp;<a href="http://www.uspreventiveservicestaskforce.org/uspstf/uspsovar.htm" class="external-link external-popup" target="_blank">Screening for Ovarian Cancer <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Horowitz, N.S. (2011).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/22031242">Management of adnexal masses in pregnancy</a>.&nbsp;<i>Clinical Obstetrics &amp; Gynecology;</i>&nbsp;54: 519–527.</li>
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
