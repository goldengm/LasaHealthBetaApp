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

export function bleedPage({ navigation, ...rest }) {
  const condName = "Bleeding Disorders";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bleedingdisorders.jpg?VersionId=D1MELw44VKh8V_qdFqB2wNc_oCq.vYvs";
  const condDescription =
    "A bleeding disorder is a health problem that makes it difficult for a person to stop bleeding. Normally when a person is hurt, a blood clot forms to stop the bleeding quickly. For blood to clot, your body needs a type of blood cell called platelets and blood proteins called clotting factors. \n If you have a bleeding disorder, your platelets or clotting factors do not work correctly or your body does not make enough platelets or clotting factors. This makes it easy for too much bleeding to happen during normal bodily functions such as a menstrual period. People with a bleeding disorder can also bleed too much or for too long after an injury, dental work, childbirth, or surgery.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bleedingdisorders.jpg?VersionId=D1MELw44VKh8V_qdFqB2wNc_oCq.vYvs"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Bleeding disorders</h1>  -->
            <p><strong>A bleeding disorder </strong>is a health problem that makes it difficult for a person to stop bleeding. As many as one in 10 women with heavy menstrual periods may have a bleeding disorder.<a href="#references"><sup>1</sup></a> The most common type of bleeding disorder in women is von Willebrand disease (VWD). If left untreated, bleeding disorders raise your risk for anemia and dangerous bleeding after childbirth.</p>

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
      title: "What is a bleeding disorder?",
      content: `

    <div class="answer"><p>A bleeding disorder is a health problem that makes it difficult for a person to stop bleeding. Normally when a person is hurt, a blood clot forms to stop the bleeding quickly. For blood to clot, your body needs a type of blood cell called platelets and blood proteins called clotting factors.</p>

<p>If you have a bleeding disorder, your platelets or clotting factors do not work correctly or your body does not make enough platelets or clotting factors. This makes it easy for too much bleeding to happen during normal bodily functions such as a menstrual period. People with a bleeding disorder can also bleed too much or for too long after an injury, dental work, childbirth, or surgery.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets bleeding disorders?",
      content: `

    <div class="answer"><p>Bleeding disorders affect both women and men. But bleeding disorders can cause more problems for women because of heavy bleeding during menstrual periods and the risk of dangerous bleeding after childbirth.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Does heavy bleeding during my menstrual period mean that I have a bleeding disorder? ",
      content: `

    <div class="answer"><p>It might. As many as one in 10 women with <a href="/publications/our-publications/fact-sheet/menstruation.html">heavy periods</a>&nbsp;may have some type of bleeding disorder.<a href="#references"><sup>1 </sup></a></p>

<p>But other causes of heavy periods include:</p>

<ul>
	<li><strong>Certain health problems.</strong> Heavy bleeding can be a sign of <a href="/publications/our-publications/fact-sheet/thyroid-disease.html" title="Thyroid disease | womenshealth.gov">thyroid</a>&nbsp;problems or <a href="/publications/our-publications/fact-sheet/uterine-fibroids.html" title="Uterine fibroids | womenshealth.gov">uterine fibroids</a>.&nbsp;</li>
	<li><strong>Reproductive problems.</strong> In a normal menstrual cycle, your body discards your uterine lining with each period. If your hormones get out of balance or if you do not <a href="/glossary#ovulation" title="glossary | womenshealth.gov">ovulate</a>, the uterine lining can build up too much. This can cause heavy bleeding as the lining is discarded during the next menstrual period.</li>
	<li><strong>Certain medicines.</strong> Some anti-inflammatory medicines and blood thinners can lead to heavy or long periods.</li>
</ul>

<p>Talk to your doctor or nurse if you have heavy periods.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How can I tell if I have heavy bleeding during my menstrual period? ",
      content: `

    <div class="answer"><p>Your menstrual period is heavy if you:</p>

<ul>
	<li>Soak through a pad or tampon every hour or two</li>
	<li>Have menstrual bleeding for more than 7 days in a row</li>
	<li>Have menstrual blood with clots larger than a quarter</li>
</ul>

<p>Menstrual blood is a combination of tissues and blood, so it often comes out in large clumps or clots. These clots are different from the clotting factors that your body needs to help stop bleeding from a cut or other injury. Having many large menstrual blood clots (larger than a quarter) in your menstrual flow is a sign of abnormal or heavy bleeding.</p>

<p>Women with heavy&nbsp;menstrual bleeding often have to change their daily activities because of the bleeding. If you have to change your regular work or school schedule or activities because of too much bleeding during your period, then you probably have heavy menstrual bleeding that is not normal.</p>

<p>Talk to your doctor or nurse if you think you have heavy bleeding. Your doctor will want to do tests to find out what is causing the heavy bleeding. Treatments include medicines or surgery.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes bleeding disorders?",
      content: `

    <div class="answer"><p>Usually, bleeding disorders are inherited, passed down from parent to child when you are born. But it’s possible to have a bleeding disorder even if your parents did not. Talk to your doctor or nurse about your risks if bleeding disorders run in your family.</p>

<p>Sometimes, bleeding disorders can be caused by other health problems or medicines you take:<a href="#references"><sup>2</sup></a></p>

<ul>
	<li>Liver disease. Your liver makes most of the blood clotting factors (proteins in the blood) you need.</li>
	<li>Kidney disease, especially in the advanced stages</li>
	<li>Side effects from certain medicines, such as blood thinners (anticoagulants), certain pain medicines, or long-term use of antibiotics</li>
	<li>Thyroid hormone imbalance</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are symptoms of bleeding disorders?",
      content: `

    <div class="answer"><p>Some common symptoms of bleeding disorders include:</p>

<ul>
	<li>Large bruises from a minor bump or injury</li>
	<li>Nosebleeds that are difficult to stop or happen often</li>
	<li><a href="#4">Heavy menstrual bleeding</a></li>
	<li>Heavy vaginal bleeding from other conditions, such as <a href="/a-z-topics/endometriosis" title="Endometriosis | womenshealth.gov">endometriosis</a> (EN-doh-MEE-tree-OH-suhss)</li>
	<li>Blood in stool or urine</li>
	<li>Bleeding too much or for a long time after an injury, surgery, or dental work</li>
	<li><a href="/publications/our-publications/fact-sheet/anemia.html" title="Anemia | womenshealth.gov">Anemia</a>, which causes you to become pale or feel tired or weak</li>
	<li>Bleeding into joints, muscles, and organs</li>
</ul>

<p>If you have any of these symptoms, talk with your doctor or nurse. These can also be a symptom of another health problem.<br>
&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What types of bleeding disorders affect women?",
      content: `

    <div class="answer"><p>Bleeding disorders in women and girls are often inherited, meaning the disorders run in families. Sometimes bleeding disorders happen when a girl or woman does not have any family history of a bleeding disorder. Women can also develop bleeding disorders as a side effect of certain medicines or from other health problems.</p>

<h3>Von Willebrand disease (VWD)</h3>

<p>VWD is the most common inherited bleeding disorder in women in the United States.<a href="#references"><sup>3</sup></a> Your blood contains a protein called von Willebrand factor. People with VWD either don’t have enough von Willebrand factor or it doesn’t work correctly. This can lead to heavy bleeding that can be difficult to stop. Women with VWD may have:<a href="#references"><sup>4,5</sup></a></p>

<ul>
	<li>Unusually heavy and long <a href="/glossary#menstruating" title="glossary | womenshealth.gov">menstrual periods</a> (this is the most common symptom)</li>
	<li>Nosebleeds that are difficult to stop or happen often</li>
	<li>Bleeding gums</li>
	<li>Blood in stool or urine</li>
	<li>Bleeding too much or for a long time after an injury, surgery, or dental work</li>
	<li>Easy bruising</li>
	<li>Heavy or prolonged bleeding during or after childbirth</li>
</ul>

<h3>Hemophilia</h3>

<p>Hemophilia is another type of bleeding disorder that is well-known but rare. Hemophilia usually runs in families. Hemophilia affects both women and men, but most children born with hemophilia are male. Women can be carriers of hemophilia, meaning they have one active gene for hemophilia and one inactive gene for hemophilia. Women who are carriers of hemophilia can pass either the inactive or active hemophilia gene on to their children. Some women who are carriers have a mild or less serious form of hemophilia and are at risk for heavy bleeding and bleeding with pregnancy or after childbirth. If you have heavy bleeding, your doctor or nurse may test you for hemophilia. &nbsp;</p>

<p><a href="https://www.nhlbi.nih.gov/science/blood-disorders-and-blood-safety" title="Blood Disorders | NHLBI">Learn about other types of common bleeding disorders</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do bleeding disorders affect pregnancy?",
      content: `

    <div class="answer"><p>Women with bleeding disorders are at risk of complications during and after <a href="/pregnancy" title="Pregnancy | womenshealth.gov">pregnancy</a>:</p>

<ul>
	<li><a href="/publications/our-publications/fact-sheet/anemia.html" title="Anemia | womenshealth.gov">Iron-deficiency anemia</a></li>
	<li>Bleeding during pregnancy</li>
	<li>Dangerous bleeding after childbirth (called postpartum hemorrhage)</li>
</ul>

<p>If you have a bleeding disorder (or think you have one) and are thinking of becoming pregnant, talk to your doctor first. You may also want to find a doctor who specializes in high-risk pregnancies.<a href="#references"><sup>6</sup></a> Because bleeding disorders run in families, your baby may also have a bleeding disorder.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are bleeding disorders diagnosed?",
      content: `

    <div class="answer"><p>To diagnose a bleeding disorder, your doctor will:</p>

<ul>
	<li>Talk to you about your symptoms and any history of bleeding disorders in your family</li>
	<li>Do a physical exam</li>
	<li>Do blood tests. Your doctor may do tests on your blood to check for anemia caused by blood loss. Your doctor may also check the amount of platelets and white blood cells that you have and how well your liver and kidney are working. Other blood tests for blood clotting problems will tell your doctor whether you have a bleeding disorder and what type you have.</li>
</ul>

<p>You may need to see a hematologist (hee-muh-TOL-uh-jist) for special blood tests to detect a bleeding disorder. A hematologist is a doctor who specializes in problems with the blood.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are bleeding disorders treated?",
      content: `

    <div class="answer"><p>There is no cure for bleeding disorders, but for many people medicine can help control the symptoms. People with mild bleeding problems may only need treatment before or after surgery and dental work or after an injury. If your symptoms are more serious, you may need to take medicine more often.</p>

<p>Common treatments for bleeding disorders include:</p>

<ul>
	<li><strong>Birth control.</strong> Hormonal birth control methods, such as the pill, patch, shot, vaginal ring, and hormonal intrauterine device (IUD), increase the amount of some clotting factors in your blood. They may also control <a href="/publications/our-publications/fact-sheet/menstruation.html" title="Menstruation and the menstrual cycle | womenshealth.gov">heavy periods</a> in women with some bleeding disorders.</li>
	<li><strong>Iron supplements.</strong> If you are anemic and don’t have enough iron in your blood, you may need iron supplements to bring your red blood cell levels back up to normal.</li>
	<li><strong>Hormones. </strong>Your doctor may give you a hormone called desmopressin acetate [dess-moh-PRESS-uhn A-suh-tayt] (DDAVP) if you have certain bleeding disorders, such as von Willebrand’s disease or hemophilia. DDAVP helps your body release stored clotting factors into your blood. DDAVP can prevent heavy periods and nosebleeds. It is also used before surgery or to stop bleeding when it happens. You can get DDAVP as nasal spray.</li>
	<li><strong>Antifibrinolytics </strong>(an-teye-FEYE-bruhn-uhl-IHT-ihks)<strong>.</strong> This medicine stops blood clots from breaking down too quickly before healing happens. This can be a problem in some bleeding disorders. If you have a bleeding disorder, your doctor may give you antifibrinolytics before dental work, to stop nosebleeds, or to control heavy periods. You can take antifibrinolytics as a pill or liquid.</li>
	<li><strong>Clotting factor concentrates.</strong> You may need this medicine if your blood does not have enough blood proteins or clotting factors. Adding these proteins to the blood prevents or controls bleeding. Different clotting factors treat different kinds of bleeding disorders. This type of treatment is used for surgery, serious injury, or when other treatments do not work. Clotting factor concentrates must be given through an intravenous (IV) tube.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if bleeding disorders are not treated?",
      content: `

    <div class="answer"><p>Bleeding disorders can raise your risk for <a href="/publications/our-publications/fact-sheet/anemia.html" title="Anemia | womenshealth.gov">anemia</a> and dangerous bleeding after surgery or childbirth. They can also affect your quality of life. Women with heavy menstrual bleeding may miss days of work or school due to side effects from blood loss, including fatigue, or the need to manage heavy bleeding.</p>

<p>Without treatment, bleeding disorders can also lead to:</p>

<ul>
	<li>The need for blood transfusions<a href="#references"><sup>7</sup></a></li>
	<li>Arthritis and breakdown of joints (because of bleeding in those areas)</li>
	<li>Bleeding into other areas of the body</li>
	<li><a href="/publications/our-publications/fact-sheet/hysterectomy.html" title="Hysterectomy | womenshealth.gov">Hysterectomy</a>&nbsp;or other surgery. Many women who do not know they have a bleeding disorder may get a hysterectomy or other procedure to help control heavy menstrual periods.<a href="#references"><sup>8</sup></a></li>
</ul>

<p>If you know you have a bleeding disorder, tell your doctor, nurse, midwife, and dentist to prevent dangerous complications.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about bleeding disorders?",
      content: `

    <div class="answer"><p>For more information about bleeding disorders, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/ncbddd/blooddisorders/index.html" title="Blood Disorders | CDC">Centers for Disease Control and Prevention, CDC, HHS</a><br>
	<strong>Phone Number</strong><strong>:</strong> 800-232-4636</li>
	<li><a href="http://www.nhlbi.nih.gov/health/resources/blood" title="Blood Disorders | NHLBI">National Heart, Lung, and Blood Institute (NHLBI), NIH, HHS</a><br>
	<strong>Phone Number</strong><strong>:</strong> 301-592-8573</li>
	<li><a href="http://www.hematology.org/Patients/Blood-Disorders.aspx" title="Blood Disorders | American Society of Hematology" class="external-link external-popup" target="_blank">American Society of Hematology <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number</strong><strong>:</strong> 202-776-0544</li>
	<li><a href="http://www.hemophiliafed.org/bleeding-disorders/" title="Bleeding Disorders | Hemophilia Federation of America" class="external-link external-popup" target="_blank">Hemophilia Federation of America <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number</strong><strong>:</strong> 800-230-9797</li>
	<li><a href="https://www.hemophilia.org/" class="external-link external-popup" target="_blank">National Hemophilia Foundation <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number</strong><strong>:</strong> 800-424-2634</li>
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
	<li>Dilley, A., Drews, C., Miller, C., Lally, C., Austin, H., Ramaswamy, D., et al. (2001). <a href="http://www.sciencedirect.com/science/article/pii/S0029784400012242" class="external-link external-popup" target="_blank">von Willebrand disease and other inherited bleeding disorders in women with diagnosed menorrhagia <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Obstetrics &amp; Gynecology, 97 </em>(4), 630–636.</li>
	<li>National Library of Medicine. (2015). <a href="http://www.nlm.nih.gov/medlineplus/ency/article/001304.htm">Bleeding disorders.</a></li>
	<li>James, A.H. (2006). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16433937">Von Willebrand disease.</a> <em>Obstetrical &amp; Gynecological Survey</em>;61 (2):136–45.</li>
	<li>James, A.H., Jamison, M.G. (2007). <a href="http://www.ncbi.nlm.nih.gov/pubmed/17403089">Bleeding events and other complications during pregnancy and childbirth in women with von Willebrand disease.</a> <cite>Journal of Thrombosis and Haemostasis</cite>; 5:1165–9.&nbsp;</li>
	<li>Sadler,&nbsp;J.E., Rodeghiero,&nbsp;F. (2005). <a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1538-7836.2005.01245.x/full" class="external-link external-popup" target="_blank">ISTH SSC Subcommittee on von Willebrand Factor. Provisional criteria for the diagnosis of VWD type 1 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<cite>Journal of Thrombosis and Haemostasis; </cite>3<cite>(</cite>4<cite>):</cite>775<cite>-</cite>777<cite>.</cite></li>
	<li>CDC. (2017). <a href="http://www.cdc.gov/ncbddd/vwd/women.html">von Willebrand Disease: Pregnancy and Childbirth</a>.</li>
	<li>CDC. (2017). <a href="http://www.cdc.gov/ncbddd/blooddisorders/women/index.html">What Should You Know About Blood Disorders in Women?</a></li>
	<li>Kouides, P.A., et al. (2009). <a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1365-2141.2009.07610.x/full" class="external-link external-popup" target="_blank">Multisite management study of menorrhagia with abnormal laboratory haemostasis: a prospective crossover study of intranasal desmopressin and oral tranexamic acid <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>British Journal of Haematology; </em>145(2): 212-220.</li>
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
