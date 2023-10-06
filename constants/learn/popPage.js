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

export function popPage({ navigation, ...rest }) {
  const condName = "Pelvic organ prolapse";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Pelvicorganprolapse.jpg?VersionId=8fwSMGbNjgT3vwLFrJlYpPq7mFv14koD";
  const condDescription =
    "The pelvic muscles and tissues support the pelvic organs like a hammock. The pelvic organs include the bladder, uterus and cervix, vagina, and rectum, which is part of the bowel. A prolapse happens when the pelvis muscles and tissues can no longer support these organs because the muscles and tissues are weak or damaged. This causes one or more pelvic organs to drop or press into or out of the vagina. \n Pelvic organ prolapse is a type of pelvic floor disorder. The most common pelvic floor disorders are: \n Urinary incontinence (leaking of urine) \n Fecal incontinence (leaking of stool) \n Pelvic organ prolapse (weakening of the muscles and tissues supporting the organs in the pelvis)";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Pelvicorganprolapse.jpg?VersionId=8fwSMGbNjgT3vwLFrJlYpPq7mFv14koD"></div>    -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Pelvic organ prolapse</h1>  -->
            <p><strong>Pelvic organ prolapse happens when the muscles and tissues supporting the pelvic organs (the uterus, bladder, or rectum) become weak or loose. </strong>This allows one or more of the pelvic organs to drop or press into or out of the vagina. Many women are embarrassed to talk to their doctor about their symptoms or think that their symptoms are normal. But pelvic organ prolapse is treatable.</p>

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
      title: "What is pelvic organ prolapse?",
      content: `

    <div class="answer"><p>The pelvic muscles and tissues support the pelvic organs like a hammock. The pelvic organs include the bladder, uterus and cervix, vagina, and rectum, which is part of the bowel. A <strong>prolapse</strong> happens when the pelvis muscles and tissues can no longer support these organs because the muscles and tissues are weak or damaged. This causes one or more pelvic organs to drop or press into or out of the vagina.</p>

<p>Pelvic organ prolapse is a type of <a href="http://www.nichd.nih.gov/health/topics/pelvicfloor/Pages/default.aspx">pelvic floor disorder</a>. The most common pelvic floor disorders are:</p>

<ul>
	<li><a href="/publications/our-publications/fact-sheet/urinary-incontinence.html">Urinary incontinence</a> (leaking of urine)</li>
	<li>Fecal incontinence (leaking of stool)</li>
	<li>Pelvic organ prolapse (weakening of the muscles and tissues supporting the organs in the pelvis)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of pelvic organ prolapse?",
      content: `

    <div class="answer"><p>The different types of pelvic organ prolapse depend on the pelvic organ affected. The most common types include:</p>

<ul>
	<li><strong><a href="/glossary#cystocele">Dropped bladder</a> (called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="SIS-toe-seel">cystocele</a>)</strong>. This is the most common type of pelvic organ prolapse. This happens when the bladder drops into or out of the vagina.</li>
	<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="REK-toe-seel">Rectocele</a></strong>. This happens when the rectum bulges into or out of the vagina.</li>
	<li><strong>Dropped uterus (uterine prolapse)</strong>. This happens when the uterus bulges into or out of the vagina. Uterine prolapse is sometimes associated with small bowel prolapse (called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="EN-ter-oh-seel">enterocele</a>), where part of the small intestine, or small bowel, bulges into the vagina.</li>
</ul>

<p>Although it is rare, pelvic organ prolapse can also happen after a <a href="/a-z-topics/hysterectomy">hysterectomy</a>. Any part of the vaginal wall may drop, causing a bulge into or out of the vagina.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets pelvic organ prolapse?",
      content: `

    <div class="answer"><p>Pelvic floor disorders (urinary incontinence, fecal incontinence, and pelvic organ prolapse) affect one in five women in the United States.<sup><a href="#references">1</a></sup>&nbsp;Pelvic organ prolapse is less common than urinary or fecal incontinence but affects almost 3% of U.S. women.<a href="#references"><sup>1</sup></a> Pelvic organ prolapse happens more often in older women and in white and Hispanic women than in younger women or women of other racial and ethnic groups.<sup><a href="#references">2,3</a></sup></p>

<p>Some women develop more than one pelvic floor disorder, such as pelvic organ prolapse with urinary incontinence.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of pelvic organ prolapse?",
      content: `

    <div class="answer"><p>The pressure from prolapse can cause a bulge in the vagina that can sometimes be felt or seen. Women with pelvic organ prolapse may feel uncomfortable pressure during physical activity or sex.</p>

<p>Other symptoms of pelvic organ prolapse include:</p>

<ul>
	<li>Seeing or feeling a bulge or "something coming out" of the vagina</li>
	<li>A feeling of pressure, discomfort, aching, or fullness in the pelvis</li>
	<li>Pelvic pressure that gets worse with standing or coughing or as the day goes on</li>
	<li>Leaking urine (<a href="/publications/our-publications/fact-sheet/urinary-incontinence.html">incontinence</a>) or problems having a bowel movement</li>
	<li>Problems inserting tampons</li>
</ul>

<p>Some women say that their symptoms are worse at certain times of the day, during physical activity, or after standing for a long time. Talk to your doctor or nurse about your symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes pelvic organ prolapse?",
      content: `

    <div class="answer"><p>Pelvic organ prolapse happens when the muscles or connective tissues of the pelvis do not work as they should. The most common risk factors are:</p>

<ul>
	<li><strong>Vaginal childbirth,</strong> which can stretch and strain the pelvic floor. Multiple vaginal childbirths raise your risk for pelvic organ prolapse later in life.<sup><a href="#references">4</a></sup>&nbsp;But you can get prolapse even if you have never had children or if you had a cesarean, or C-section, delivery.</li>
	<li><strong>Long-term pressure on your abdomen,</strong> including pressure from obesity, chronic coughing, or straining often during bowel movements</li>
	<li><strong>Giving birth to a baby weighing more than 8½ </strong><strong>pounds</strong><a href="#references"><sup>5</sup></a></li>
	<li><strong>Aging.</strong> Pelvic floor disorders are more common in older women. About 37% of women with pelvic floor disorders are 60 to 79 years of age, and about half are 80 or older.<a href="#references"><sup>1</sup></a></li>
	<li><strong>Hormonal changes during <a href="/menopause">menopause</a>.</strong> Loss of the female hormone <a href="/glossary#estrogen">estrogen</a> during and after menopause can raise your risk for pelvic organ prolapse. Researchers are not sure exactly why this happens.<a href="#references"><sup>6</sup></a></li>
	<li><strong>Family history.</strong> Researchers are studying how genetics can play a role in pelvic organ prolapse.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is pelvic organ prolapse diagnosed?",
      content: `

    <div class="answer"><p>Your doctor will talk to you about your symptoms and do a pelvic exam. You may be asked to strain or cough during the exam so your doctor can see whether these actions cause prolapse or urine leakage. Your doctor may also do other tests to see whether you can completely empty your bladder when you go to the bathroom.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is pelvic organ prolapse treated?",
      content: `

    <div class="answer"><p>Treatment for pelvic organ prolapse depends on the type of prolapse you have, your symptoms, your age, other health problems, and whether you are sexually active.</p>

<p>Your treatment may include one or more of the following:</p>

<ul>
	<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="PES-uh-ree">Pessary</a><em>.</em></strong> A pessary is a removable device inserted into the vagina to support the pelvic organs. Pessaries come in many different shapes and sizes. Pessaries are often the first treatment your doctor will try.<a href="#references"><sup>7</sup></a> Certain types of pessaries can treat both pelvic organ prolapse and urinary incontinence.</li>
	<li><strong>Pelvic floor muscle therapy. </strong>Your doctor may show you how to do pelvic floor exercises or refer you to a physical therapist to do exercises to help strengthen the pelvic floor muscles. Pelvic floor muscle exercises can also help women who have pelvic organ prolapse as well as urinary incontinence.</li>
	<li><strong>Changing eating habits.</strong> If you have bowel problems, your doctor may recommend eating more foods with fiber. Fiber helps prevent constipation and straining during bowel movements. <a href="http://www.niddk.nih.gov/health-information/health-topics/digestive-diseases/fecal-incontinence/Pages/facts.aspx">Learn more about ways to treat fecal incontinence.</a></li>
	<li><strong>Surgery to support the uterus or vagina.</strong> During surgery, your doctor may use your own body tissue or synthetic mesh to help repair the prolapse and build pelvic floor support. This type of surgery is recommended for sexually active women with serious prolapse of the vagina or uterus. Surgery for prolapse can be done through your vagina or abdomen. Your doctor may use synthetic mesh to repair the prolapse through the abdomen. But, because of safety issues, mesh is no longer used to repair the prolapse through the vagina.<a href="#references"><sup>8</sup></a></li>
	<li><strong>Surgery to close the vagina. </strong>This surgery, called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="kol-po-KLI-sis">colpocleisis</a>, treats prolapse by closing the vaginal opening. This can be a good option for women who do not plan to have or who no longer have vaginal intercourse.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Is mesh safe to use during surgery to repair pelvic organ prolapse? ",
      content: `

    <div class="answer"><p>Mesh used to repair pelvic organ prolapse through the abdomen is safe. But, because of safety issues, mesh is no longer used to repair prolapse through the vagina.<a href="#references"><sup>8</sup></a></p>

<p>If you had surgery with mesh to repair pelvic organ prolapse through the vagina, you may not need to do anything if you do not have any symptoms or problems. Talk to your doctor or nurse if you notice any symptoms or problems, such as vaginal bleeding or discharge, pelvic pain, or pain during sex.</p>

<p><a href="https://www.fda.gov/MedicalDevices/ProductsandMedicalProcedures/ImplantsandProsthetics/UroGynSurgicalMesh/ucm262299.htm">Learn more</a> about what to do if you had this type of surgery from the Food and Drug Administration.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent pelvic organ prolapse?",
      content: `

    <div class="answer"><p>Researchers are studying ways to prevent pelvic organ prolapse. The following steps may reduce your risk of getting a pelvic floor problem:</p>

<ul>
	<li><strong>Maintain a healthy weight or lose weight (if you are overweight).</strong> Women who have&nbsp;overweight or obesity&nbsp;are more likely to have pelvic floor problems.</li>
	<li><strong>Choose foods with fiber. </strong>Fiber helps prevent constipation and straining during bowel movements. Preventing constipation may reduce the risk of some pelvic floor disorders.</li>
	<li><strong>Do not smoke.</strong> Smoking can lead to chronic cough, which puts stress on the pelvic floor muscles.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about pelvic organ prolapse?",
      content: `

    <div class="answer"><p>For more information about pelvic organ prolapse, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.nichd.nih.gov/health/topics/pelvicfloor/conditioninfo/Pages/default.aspx"><em>Eunice Kennedy Shriver </em>National Institute of Child Health and Human Development (NICHD), NIH, HHS</a><br>
	Phone Number: 1-800-370-2943</li>
	<li><a href="https://www.fda.gov/medicaldevices/productsandmedicalprocedures/implantsandprosthetics/urogynsurgicalmesh/">Food and Drug Administration</a><br>
	Phone Number: 1-888-463-6332</li>
	<li><a href="http://www.acog.org/Patients/Patient-Education-Videos/Pelvic-Organ-Prolapse" class="external-link external-popup" target="_blank">American College of Obstetricians and Gynecologists (ACOG) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-673-8444</li>
	<li><a href="https://www.iuga.org/" class="external-link external-popup" target="_blank">International Urogynecological Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 202-733-3234</li>
	<li><a href="https://pfdnetwork.azurewebsites.net/" class="external-link external-popup" target="_blank">Pelvic Floor Disorders Network <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 919-541-6271</li>
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
	<li>Nygaard, I., et al. (2008). <a href="https://www.ncbi.nlm.nih.gov/pubmed/18799443">Prevalence of Symptomatic Pelvic Floor Disorders in U.S. Women</a>. <em>JAMA; </em>300(11): 1311–1316.</li>
	<li>Whitcomb, E.L., et al. (2009). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2879888/">Racial Differences in Pelvic Organ Prolapse</a>. <em>Obstetrics and Gynecology; </em>114(6): 1271–1277.</li>
	<li>Kudish, B.I., Iglesia, C.B., Gutman, R.E., Sokol, A.I., Rodgers, A.K., Gass, M. et al. (2011). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4354733/">Risk Factors for Prolapse Development in White, Black, and Hispanic Women.</a> <em>Female Pelvic Med Reconstr Surg; </em>17(2): 80-90.</li>
	<li>Patel, D.A., et al. (2006). <a href="https://www.ncbi.nlm.nih.gov/pubmed/16579934">Childbirth and Pelvic Floor Dysfunction: An Epidemiologic Approach to the Assessment of Prevention Opportunities at Delivery</a>. <em>American Journal of Obstetrics &amp; Gynecology; 195</em>: 23–28.</li>
	<li>Fonti, Y., et al. (2009). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3279110/">Post Partum Pelvic Floor Changes</a>. <em>Journal of Prenatal Medicine; </em>3(4): 57–59.</li>
	<li>Sengupta, N., et al. (2013). <a href="http://www.medscape.com/viewarticle/814321_2" class="external-link external-popup" target="_blank">Urogynecological Risk Assessment in Postmenopausal <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Expert Review of Obstetrics &amp; Gynecology; </em>8(6): 625–637.</li>
	<li>Jones, K.A., et al. (2010). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2876320/pdf/RIOG003001_0003.pdf">Pessary Use in Pelvic Organ Prolapse and Urinary Incontinence</a>. <em>Reviews in Obstetrics &amp; Gynecology; </em>3(1). (PDF, 293.16 KB)</li>
	<li>Food and Drug Administration. (2019). <a href="https://www.fda.gov/medicaldevices/productsandmedicalprocedures/implantsandprosthetics/urogynsurgicalmesh/">Urogynecologic Surgical Mesh Implants</a>.</li>
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
