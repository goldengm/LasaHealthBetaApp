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

export function utfibPage({ navigation, ...rest }) {
  const condName = "Uterine Fibroids";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Uterinefibroids.jpg?VersionId=n6qwGGLjjgsB6fFAZOUy.v..Q4aLA8qt";
  const condDescription =
    "Fibroids are muscular tumors that grow in the wall of the uterus (womb). Fibroids are almost always benign (not cancerous). Not all women with fibroids have symptoms. Women who do have symptoms often find fibroids hard to live with. Some have pain and heavy menstrual bleeding. Treatment for uterine fibroids depends on your symptoms.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Uterinefibroids.jpg?VersionId=n6qwGGLjjgsB6fFAZOUy.v..Q4aLA8qt"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Uterine fibroids</h1>  -->
            <p><strong>Fibroids are muscular tumors that grow in the wall of the <a href="/glossary/#uterus">uterus</a> (womb). </strong>Fibroids are almost always benign (not cancerous). Not all women with fibroids have symptoms. Women who do have symptoms often find fibroids hard to live with. Some have pain and heavy menstrual bleeding.&nbsp;Treatment for uterine fibroids depends on your symptoms.</p>

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
      title: "What are fibroids?",
      content: `

    <div class="answer"><p>Fibroids are muscular tumors that grow in the wall of the&nbsp;<a href="/glossary#uterus">uterus</a> (womb). Another medical term for fibroids is <span class="pronounce-blue pronounce-blueJS"><a href="#">leiomyoma</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (leye-oh-meye-OH-muh)</span></span> or just "myoma". Fibroids are almost always benign (not cancerous). Fibroids can grow as a single tumor, or there can be many of them in the uterus. They can be as small as an apple seed or as big as a grapefruit. In unusual cases they can become very large.</p>

<p><img alt="Diagram of a woman's reproductive system" class="img-responsive" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/uterine-fibroids-1.gif"></p>

<p><img alt="Diagram showing fibroids on the uterus" class="img-responsive" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/uterine-fibroids-2.gif"></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why should women know about fibroids?",
      content: `

    <div class="answer"><p>About 20 percent to 80 percent of women develop fibroids by the time they reach age 50. Fibroids are most common in women in their 40s and early 50s. Not all women with fibroids have symptoms. Women who do have symptoms often find fibroids hard to live with. Some have pain and heavy menstrual bleeding. Fibroids also can put pressure on the bladder, causing frequent urination, or the rectum, causing rectal pressure. Should the fibroids get very large, they can cause the abdomen (stomach area) to enlarge, making a woman look pregnant.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets fibroids?",
      content: `

    <div class="answer"><p>There are factors that can increase a woman's risk of developing fibroids.</p>

<ul>
	<li><strong>Age.</strong> Fibroids become more common as women age, especially during the 30s and 40s through menopause. After menopause, fibroids usually shrink.</li>
	<li><strong>Family history.</strong> Having a family member with fibroids increases your risk. If a woman's mother had fibroids, her risk of having them is about three times higher than average.</li>
	<li><strong>Ethnic origin.</strong> African-American women are more likely to develop fibroids than white women.</li>
	<li><strong>Obesity.</strong> Women who are overweight are at higher risk for fibroids. For very heavy women, the risk is two to three times greater than average.</li>
	<li><strong>Eating habits.</strong> Eating a lot of red meat (e.g., beef) and ham is linked with a higher risk of fibroids. Eating plenty of green vegetables seems to protect women from developing fibroids.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Where can fibroids grow?",
      content: `

    <div class="answer"><p><img alt="Diagram showing fibroids on the uterus" class="img-responsive" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/uterine-fibroids-3.gif"></p>

<p>Most fibroids grow in the wall of the uterus. Doctors put them into three groups based on where they grow:</p>

<ul>
	<li><strong>Submucosal (sub-myoo-KOH-zuhl)</strong> fibroids grow into the uterine cavity.</li>
	<li><strong>Intramural (ihn-truh-MYOOR-uhl)</strong> fibroids grow within the wall of the uterus.</li>
	<li><strong>Subserosal (sub-suh-ROH-zuhl)</strong> fibroids grow on the outside of the uterus.</li>
</ul>

<p>Some fibroids grow on stalks that grow out from the surface of the uterus or into the cavity of the uterus. They might look like mushrooms. These are called <strong>pedunculated (pih-DUHN-kyoo-lay-ted)</strong> fibroids.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are symptoms of fibroids?",
      content: `

    <div class="answer"><p>Most fibroids do not cause any symptoms, but some women with fibroids can have:</p>

<ul>
	<li>Heavy bleeding (which can be heavy enough to cause <a href="/a-z-topics/iron-deficiency-anemia">anemia</a>) or painful periods</li>
	<li>Feeling of fullness in the pelvic area (lower stomach area)</li>
	<li>Enlargement of the lower abdomen</li>
	<li>Frequent urination</li>
	<li>Pain during sex</li>
	<li>Lower back pain</li>
	<li>Complications during pregnancy and labor, including a six-time greater risk of <a href="/glossary#cesarean">cesarean section</a></li>
	<li>Reproductive problems, such as <a href="/glossary#infertility">infertility</a>, which is very rare</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes fibroids?",
      content: `

    <div class="answer"><p>No one knows for sure what causes fibroids. Researchers think that more than one factor could play a role. These factors could be:</p>

<ul>
	<li>Hormonal (affected by <a href="/glossary#estrogen">estrogen</a> and <a href="/glossary#progesterone">progesterone</a> levels)</li>
	<li>Genetic (runs in families)</li>
</ul>

<p>Because no one knows for sure what causes fibroids, we also don't know what causes them to grow or shrink. We do know that they are under hormonal control — both estrogen and progesterone. They grow rapidly during pregnancy, when hormone levels are high. They shrink when anti-hormone medication is used. They also stop growing or shrink once a woman reaches menopause.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can fibroids turn into cancer?",
      content: `

    <div class="answer"><p>Fibroids are almost always benign (not cancerous). Rarely (less than one in 1,000) a cancerous fibroid will occur. This is called <strong><span class="pronounce-blue pronounce-blueJS"><a href="#">leiomyosarcoma.</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (leye-oh-meye-oh-sar-KOH-muh)</span></span></strong> Doctors think that these cancers do not arise from an already-existing fibroid. Having fibroids does not increase the risk of developing a cancerous fibroid. Having fibroids also does not increase a woman's chances of getting other forms of cancer in the uterus.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if I become pregnant and have fibroids?",
      content: `

    <div class="answer"><p>Women who have fibroids are more likely to have problems during pregnancy and delivery. This doesn't mean there will be problems. Most women with fibroids have normal pregnancies. The most common problems seen in women with fibroids are:</p>

<ul>
	<li><strong>Cesarean section.</strong> The risk of needing a c-section is six times greater for women with fibroids.</li>
	<li><strong>Baby is breech.</strong> The baby is not positioned well for vaginal delivery.</li>
	<li><strong>Labor fails to progress.</strong></li>
	<li><strong>Placental abruption.</strong> The placenta breaks away from the wall of the uterus before delivery. When this happens, the fetus does not get enough oxygen.</li>
	<li><strong>Preterm delivery.</strong></li>
</ul>

<p>Talk to your obstetrician if you have fibroids and become pregnant. All obstetricians have experience dealing with fibroids and pregnancy. Most women who have fibroids and become pregnant do not need to see an OB who deals with high-risk pregnancies.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I know for sure that I have fibroids?",
      content: `

    <div class="answer"><p>Your doctor may find that you have fibroids when you see her or him for a regular pelvic exam to check your uterus, ovaries, and vagina. The doctor can feel the fibroid with her or his fingers during an ordinary pelvic exam, as a (usually painless) lump or mass on the uterus. Often, a doctor will describe how small or how large the fibroids are by comparing their size to the size your uterus would be if you were pregnant. For example, you may be told that your fibroids have made your uterus the size it would be if you were 16 weeks pregnant. Or the fibroid might be compared to fruits, nuts, or a ball, such as a grape or an orange, an acorn or a walnut, or a golf ball or a volleyball.</p>

<p>Your doctor can do imaging tests to confirm that you have fibroids. These are tests that create a "picture" of the inside of your body without surgery. These tests might include:</p>

<ul>
	<li><strong>Ultrasound</strong> – Uses sound waves to produce the picture. The ultrasound probe can be placed on the abdomen or it can be placed inside the vagina to make the picture.</li>
	<li><strong>Magnetic resonance imaging</strong> (MRI) – Uses magnets and radio waves to produce the picture</li>
	<li><strong>X-rays</strong> – Uses a form of radiation to see into the body and produce the picture</li>
	<li><strong>Cat scan</strong> (CT) – Takes many X-ray pictures of the body from different angles for a more complete image</li>
	<li><strong><span class="pronounce-blue pronounce-blueJS"><a href="#">Hysterosalpingogram</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (hiss-tur-oh-sal-PIN-juh-gram)</span></span></strong> (HSG) or <strong><span class="pronounce-blue pronounce-blueJS"><a href="#">sonohysterogram</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (soh-noh-HISS-tur-oh-gram)</span></span></strong> – An HSG involves injecting x-ray dye into the uterus and taking x-ray pictures. A sonohysterogram involves injecting water into the uterus and making ultrasound pictures.</li>
</ul>

<p>You might also need surgery to know for sure if you have fibroids. There are two types of surgery to do this:</p>

<ul>
	<li><strong><span class="pronounce-blue pronounce-blueJS"><a href="#">Laparoscopy</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (lap-ar-OSS-koh-pee)</span></span></strong> – The doctor inserts a long, thin scope into a tiny incision made in or near the navel. The scope has a bright light and a camera. This allows the doctor to view the uterus and other organs on a monitor during the procedure. Pictures also can be made.</li>
	<li><strong><span class="pronounce-blue pronounce-blueJS"><a href="#">Hysteroscopy</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (hiss-tur-OSS-koh-pee)</span></span></strong> – The doctor passes a long, thin scope with a light through the vagina and cervix into the uterus. No incision is needed. The doctor can look inside the uterus for fibroids and other problems, such as polyps. A camera also can be used with the scope.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What questions should I ask my doctor if I have fibroids? ",
      content: `

    <div class="answer"><ul>
	<li>How many fibroids do I have?</li>
	<li>What size is my fibroid(s)?</li>
	<li>Where is my fibroid(s) located (outer surface, inner surface, or in the wall of the uterus)?</li>
	<li>Can I expect the fibroid(s) to grow larger?</li>
	<li>How rapidly have they grown (if they were known about already)?</li>
	<li>How will I know if the fibroid(s) is growing larger?</li>
	<li>What problems can the fibroid(s) cause?</li>
	<li>What tests or imaging studies are best for keeping track of the growth of my fibroids?</li>
	<li>What are my treatment options if my fibroid(s) becomes a problem?</li>
	<li>What are your views on treating fibroids with a hysterectomy versus other types of treatments?</li>
</ul>

<p>A second opinion is always a good idea if your doctor has not answered your questions completely or does not seem to be meeting your needs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are fibroids treated?",
      content: `

    <div class="answer"><p>Most women with fibroids do not have any symptoms. For women who do have symptoms, there are treatments that can help. Talk with your doctor about the best way to treat your fibroids. She or he will consider many things before helping you choose a treatment. Some of these things include:</p>

<ul>
	<li>Whether or not you are having symptoms from the fibroids</li>
	<li>If you might want to become pregnant in the future</li>
	<li>The size of the fibroids</li>
	<li>The location of the fibroids</li>
	<li>Your age and how close to menopause you might be</li>
</ul>

<p>If you have fibroids but do not have any symptoms, you may not need treatment. Your doctor will check during your regular exams to see if they have grown.</p>

<p style="color:#582c83;"><strong>Medications</strong></p>

<p>If you have fibroids and have mild symptoms, your doctor may suggest taking medication. Over-the-counter drugs such as ibuprofen or acetaminophen can be used for mild pain. If you have heavy bleeding during your period, taking an iron supplement can keep you from getting <a href="/a-z-topics/iron-deficiency-anemia">anemia</a> or correct it if you already are anemic.</p>

<p>Several drugs commonly used for birth control can be prescribed to help control symptoms of fibroids. Low-dose birth control pills do not make fibroids grow and can help control heavy bleeding. The same is true of progesterone-like injections (e.g., Depo-Provera®). An IUD (intrauterine device) called Mirena® contains a small amount of progesterone-like medication, which can be used to control heavy bleeding as well as for birth control.</p>

<p>Other drugs used to treat fibroids are "gonadotropin releasing hormone agonists" (GnRHa). The one most commonly used is Lupron®. These drugs, given by injection, nasal spray, or implanted, can shrink your fibroids. Sometimes they are used before surgery to make fibroids easier to remove. Side effects of GnRHas can include hot flashes, depression, not being able to sleep, decreased sex drive, and joint pain. Most women tolerate GnRHas quite well. Most women do not get a period when taking GnRHas. This can be a big relief to women who have heavy bleeding. It also allows women with anemia to recover to a normal blood count. GnRHas can cause bone thinning, so their use is generally limited to six months or less. These drugs also are very expensive, and some insurance companies will cover only some or none of the cost. GnRHas offer temporary relief from the symptoms of fibroids; once you stop taking the drugs, the fibroids often grow back quickly.</p>

<p style="color:#582c83;"><strong>Surgery</strong></p>

<p>If you have fibroids with moderate or severe symptoms, surgery may be the best way to treat them. Here are the options:</p>

<ul>
	<li><strong><span class="pronounce-blue pronounce-blueJS"><a href="#">Myomectomy</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (meye-oh-MEK-tuh-mee)</span></span></strong> – Surgery to remove fibroids without taking out the healthy tissue of the uterus. It is best for women who wish to have children after treatment for their fibroids or who wish to keep their uterus for other reasons. You can become pregnant after myomectomy. But if your fibroids were imbedded deeply in the uterus, you might need a cesarean section to deliver. Myomectomy can be performed in many ways. It can be major surgery (involving cutting into the abdomen) or performed with laparoscopy or hysteroscopy. The type of surgery that can be done depends on the type, size, and location of the fibroids. After myomectomy new fibroids can grow and cause trouble later. All of the possible risks of surgery are true for myomectomy. The risks depend on how extensive the surgery is.</li>
	<li><strong><span class="pronounce-blue pronounce-blueJS"><a href="#">Hysterectomy</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (hiss-tur-EK-tuh-mee)</span></span></strong> – Surgery to remove the uterus. This surgery is the only sure way to cure uterine fibroids. Fibroids are the most common reason that hysterectomy is performed. This surgery is used when a woman's fibroids are large, if she has heavy bleeding, is either near or past menopause, or does not want children. If the fibroids are large, a woman may need a hysterectomy that involves cutting into the abdomen to remove the uterus. If the fibroids are smaller, the doctor may be able to reach the uterus through the vagina, instead of making a cut in the abdomen. In some cases hysterectomy can be performed through the laparoscope. Removal of the ovaries and the cervix at the time of hysterectomy is usually optional. Women whose ovaries are not removed do not go into menopause at the time of hysterectomy. Hysterectomy is a major surgery. Although hysterectomy is usually quite safe, it does carry a significant risk of complications. Recovery from hysterectomy usually takes several weeks.</li>
	<li><strong><span class="pronounce-blue pronounce-blueJS"><a href="#">Endometrial ablation</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (en-doh-MEE-tree-uhl uh-BLAY-shuhn)</span></span></strong> – The lining of the uterus is removed or destroyed to control very heavy bleeding. This can be done with laser, wire loops, boiling water, electric current, microwaves, freezing, and other methods. This procedure usually is considered minor surgery. It can be done on an outpatient basis or even in a doctor's office. Complications can occur, but are uncommon with most of the methods. Most people recover quickly. About half of women who have this procedure have no more menstrual bleeding. About three in 10 women have much lighter bleeding. But, a woman cannot have children after this surgery.</li>
	<li><strong><span class="pronounce-blue pronounce-blueJS"><a href="#">Myolysis</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (meye-OL-uh-siss)</span></span></strong> – A needle is inserted into the fibroids, usually guided by laparoscopy, and electric current or freezing is used to destroy the fibroids.</li>
	<li><strong>Uterine Fibroid Embolization</strong> (UFE), or <strong>Uterine Artery Embolization</strong> (UAE) – A thin tube is thread into the blood vessels that supply blood to the fibroid. Then, tiny plastic or gel particles are injected into the blood vessels. This blocks the blood supply to the fibroid, causing it to shrink. UFE can be an outpatient or inpatient procedure. Complications, including early menopause, are uncommon but can occur. Studies suggest fibroids are not likely to grow back after UFE, but more long-term research is needed. Not all fibroids can be treated with UFE. The best candidates for UFE are women who:
	<ul>
		<li>Have fibroids that are causing heavy bleeding</li>
		<li>Have fibroids that are causing pain or pressing on the bladder or rectum</li>
		<li>Don't want to have a hysterectomy</li>
		<li>Don't want to have children in the future</li>
	</ul>
	</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What new treatments are available for uterine fibroids?",
      content: `

    <div class="answer"><p>The following methods are not yet standard treatments, so your doctor may not offer them or health insurance may not cover them.</p>

<ul>
	<li><strong>Radiofrequency ablation</strong> uses heat to destroy fibroid tissue without harming surrounding normal uterine tissue. The fibroids remain inside the uterus but shrink in size. Most women go home the same day and can return to normal activities within a few days.</li>
	<li><strong>Anti-hormonal drugs</strong> may provide symptom relief without bone-thinning side effects.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "More information on uterine fibroids",
      content: `

    <div class="answer"><p>For more information about uterine fibroids, call womenshealth.gov at 1-800-994-9662 (TDD: 888-220-5446) or contact the following organizations:</p>

<ul>
	<li><a href="http://www.acog.org/" class="external-link external-popup" target="_blank"><strong>American College of Obstetricians and Gynecologists</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong> 202-638-5577</li>
	<li><a href="http://www.fibroids.net/" class="external-link external-popup" target="_blank"><strong>Center for Uterine Fibroids</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong> 800-722-5520</li>
	<li><a href="http://www.nichd.nih.gov/"><strong>National Institute of Child Health and Human Development, NIH, HHS</strong></a><br>
	<strong>Phone:</strong> 800-370-2943 (TDD: 888-320-6942)</li>
</ul>
</div>
`,
    },
  ];
  return [condName, condImURL, condDescription, condHeader, condQA];
}

export function utfibScreening({ navigation, ...rest }) {
  const screeningTree = [
    {
      title: "Uterine Fibroids Question1",
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
      title: "Uterine Fibroids Question2",
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
