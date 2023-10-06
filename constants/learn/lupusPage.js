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

export function lupusPage({ navigation, ...rest }) {
  const condName = "Lupus";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Lupusandwomen.jpg?VersionId=QR3FR0n.skSL9uioe3lH0GHnuNojrzOT";
  const condDescription =
    "Lupus is a chronic (lifelong) autoimmune disease that can damage any part of the body. With autoimmune diseases, the body’s immune (defense) system cannot tell the difference between viruses, bacteria, and other germs and the body’s healthy cells, tissues, or organs. Because of this, the immune system attacks and destroys these healthy cells, tissues, or organs.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Lupusandwomen.jpg?VersionId=QR3FR0n.skSL9uioe3lH0GHnuNojrzOT"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Lupus and women</h1>  -->
            <p><strong>Lupus is a chronic, autoimmune disease</strong> that affects more women than men. If you have lupus, your risk is higher for other health problems that are common in women, such as heart disease and osteoporosis.</p>

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
      title: "What is lupus?",
      content: `

    <div class="answer"><p>Lupus is a chronic (lifelong) autoimmune disease that can damage any part of the body. With autoimmune diseases, the body’s immune (defense) system cannot tell the difference between viruses, bacteria, and other germs and the body’s healthy cells, tissues, or organs. Because of this, the immune system attacks and destroys these healthy cells, tissues, or organs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of lupus?",
      content: `

    <div class="answer"><p>There are several different types of lupus:</p>

<ul>
	<li><strong><a href="#3">Systemic lupus erythematosus (SLE)</a></strong>&nbsp;is the most common and most serious type of lupus. SLE affects all parts of the body.</li>
	<li><a href="#4"><strong>Cutaneous</strong><strong> <strong>lupus erythematosus</strong></strong></a>, which affects only the skin</li>
	<li><a href="#5"><strong>Drug-induced lupus</strong></a>, a short-term type of lupus caused by certain medicines</li>
	<li><a href="#6"><strong>Neonatal lupus</strong></a>, a rare type of lupus that affect newborn babies</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is systemic lupus erythematosus (SLE)?",
      content: `

    <div class="answer"><p>SLE is the most common type of lupus. SLE can be mild or severe and can affect different parts of the body. Common symptoms include <a href="/glossary#fatigue" title="glossary">fatigue</a>, hair loss, sun sensitivity, painful and swollen joints, unexplained <a href="/glossary#fever" title="glossary">fever</a>, skin rashes, and kidney problems.</p>

<p>There is no one test for SLE. Usually your doctor will ask you about your family and personal medical history and your symptoms. Your doctor will also do some laboratory tests.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is cutaneous lupus erythematosus (CLE)?",
      content: `

    <div class="answer"><p>This type of lupus is a skin disease that can affect people with or without SLE. “Cutaneous” means “skin.” Symptoms may include rashes, hair loss, swelling of the blood vessels, ulcers, and sun sensitivity. To find out if you have cutaneous lupus and what kind it is, your doctor will remove a small piece of the rash or sore and look at it under a microscope.</p>

<p>There are two major kinds of cutaneous lupus:</p>

<ul>
	<li><strong>Discoid</strong> <strong>lupus erythematosus</strong> <strong>(DLE).</strong> A discoid rash usually begins as a red raised rash that becomes scaly or changes color to a dark brown. These rashes often appear on the face and scalp, but they may affect other areas. Many people with DLE have scarring. Sometimes DLE causes sores in the mouth or nose. If you have DLE, there is a small chance that you will later get SLE.</li>
	<li><strong>Subacute cutaneous lupus erythematosus</strong> causes skin lesions that appear on parts of the body exposed to sun. These lesions do not cause scars.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is drug-induced lupus?",
      content: `

    <div class="answer"><p><strong>Drug-induced lupus is caused by certain medicines. </strong>The symptoms of drug-induced lupus are like those of SLE, such as joint pain, muscle pain, and fever. But symptoms are usually not as serious. Also, drug-induced lupus rarely affects major organs. Most often, the disease goes away when the medicine is stopped.</p>

<p>The medicines that most commonly cause drug-induced lupus are used to treat other chronic health problems. These include <a href="/glossary#seizures" title="glossary">seizures</a>, <a href="/glossary#BP" title="glossary">high blood pressure</a>, or <a href="/aging/diseases-conditions/rheumatoid-arthritis.html" title="Arthritis: Rheumatoid arthritis">rheumatoid arthritis</a>. But not everyone who takes these medicines will get drug-induced lupus.<br>
&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is neonatal lupus?",
      content: `

    <div class="answer"><p>Neonatal lupus is a rare condition in infants that is caused by certain antibodies from the mother. These antibodies can be found in mothers who have lupus. But, if you have lupus, this does not mean you will definitely pass it to your baby. Most infants of mothers with lupus are healthy.</p>

<p>It is also possible for an infant to have neonatal lupus even though the mother does not have lupus currently. But, if a baby is born with lupus, often the mother will develop lupus later in life.</p>

<p>At birth, an infant with neonatal lupus may have a skin rash, liver problems, or low blood cell counts. These symptoms often go away completely after several months and have no lasting effects. Infants with neonatal lupus also can have a rare but serious heart defect.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets lupus?",
      content: `

    <div class="answer"><p>Anyone can get lupus. It is difficult to know how many people in the United States have lupus, because the symptoms are different for every person. It is estimated that 1.5 million Americans have lupus.<a href="#references"><sup>1</sup></a><sup> </sup>Other estimates range from 161,000 to 322,000 Americans with systemic lupus erythematosus (SLE).<sup><a href="#references">2</a></sup><strong> </strong></p>

<p>About 9 out of 10 diagnoses of lupus are in women ages 15 to 44.<sup><a href="#references">3</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does lupus affect women?",
      content: `

    <div class="answer expanded"><p>Lupus is most common in women ages 15 to 44, or during the years they can have children. Having lupus raises your risk of other health problems. Lupus can also make these problems happen earlier in life compared to women who do not have lupus.</p>

<p>These health problems include:</p>

<ul>
	<li><strong><a href="/heart-disease-and-stroke/heart-disease" title="glossary">Heart disease</a>.</strong> Lupus raises the risk of the most common type of heart disease, called <a href="/glossary#coronary" title="glossary">coronary artery disease</a>&nbsp;(CAD). This is partly because people with lupus have more CAD risk factors, which include <a href="/glossary#BP" title="glossary">high blood pressure</a>, high <a href="/glossary#cholesterol" title="glossary">cholesterol</a>, and <a href="/glossary#diabetes" title="glossary">type 2 diabetes</a>. Lupus causes inflammation (swelling), which also increases the risk for CAD. Women with lupus may be less ­­active because of <a href="/glossary#fatigue" title="glossary">fatigue</a>, joint problems, and muscle pain, and this also puts them at risk for heart disease. In one study, women with lupus were 50 times more likely to have chest pain or a <a href="/heartattack/" title="Make the Call, Don’t Miss a Beat">heart attack</a>&nbsp;than other women of the same age.<sup><a href="#references">4</a></sup></li>
	<li><a href="/publications/our-publications/fact-sheet/osteoporosis.html" title="Osteoporosis fact sheet"><strong>Osteoporosis</strong></a><strong>.</strong> Medicines that treat lupus may cause bone loss. Bone loss can lead to osteoporosis, a condition that causes weak and broken bones. Also, pain and fatigue can keep women with lupus from getting <a href="/fitness-nutrition/how-to-be-active-for-health/index.html" title="How to Be Active for Health">physical activity</a>. Staying active can help prevent bone loss.</li>
	<li><strong>Kidney disease.</strong> More than half of all people with lupus have kidney problems, called <a href="http://www.niddk.nih.gov/health-information/health-topics/kidney-disease/lupus-nephritis/Pages/index.aspx" title="Lupus and Kidney Disease (Lupus Nephritis)">lupus nephritis</a>.<sup><a href="#references">5</a>&nbsp;</sup>Kidney problems often begin within the first five years after lupus symptoms start to appear. This is one of the more serious complications of lupus. Also, kidney inflammation is not usually painful so you don’t know when it’s happening. That is why it’s important for people with lupus to get regular urine and blood tests for kidney disease. Treatment for lupus nephritis works best if caught early.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does lupus affect women of color?",
      content: `

    <div class="answer"><p>African-American women are three times more likely to get lupus than white women.<a href="#references"><sup>6</sup></a> &nbsp;Lupus is also more common in Hispanic, Asian, and Native American and Alaskan Native women.<a href="#references"><sup>7</sup></a></p>

<p>African-American and Hispanic women usually get lupus at a younger age and have more severe symptoms, including kidney problems, than women of other groups. African-Americans with lupus also have more problems with <a href="/glossary#seizures" title="glossary">seizures</a>, <a href="/heart-disease-and-stroke/stroke" title="Stroke">strokes</a>, and dangerous swelling of the heart. Hispanic women with lupus also have more heart problems than women of other groups. Researchers think that genes play a role in how lupus affects minority women.</p>

<p>&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes lupus?",
      content: `

    <div class="answer"><p>Researchers are still studying possible causes of lupus. We do know that lupus is not a disease you can catch from someone else. Genes play an important role but are not the only reason a person will get lupus. Even someone with one or more of the genes associated with lupus has only a small chance of actually getting the disease. Researchers are studying possible causes such as:</p>

<ul>
	<li>The environment. Sunlight, <a href="/publications/our-publications/fact-sheet/stress-your-health.html" title="Stress and your health fact sheet">stress</a>, smoking, certain medicines, and <a href="/glossary#virus" title="glossary">viruses</a><strong>&nbsp;</strong>may trigger symptoms in people who are most likely to get lupus due to their genes.</li>
	<li><a href="/glossary#hormone" title="glossary">Hormones</a>&nbsp;such as <a href="/glossary#estrogen" title="glossary">estrogen</a>. Lupus is more common in women during their childbearing years when estrogen levels are highest.</li>
	<li>Problems with the <a href="/glossary#immune_system" title="glossary">immune system</a>.&nbsp;</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about lupus? ",
      content: `

    <div class="answer"><p>For more information about lupus, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://www.niddk.nih.gov/health-information/health-topics/kidney-disease/lupus-nephritis/Pages/index.aspx" title="Lupus and Kidney Disease (Lupus Nephritis)">Lupus Nephritis</a>&nbsp;— Information from the National Institute of Diabetes and Digestive Diseases</li>
	<li><a href="http://www.lupus.org/answers/topic/understanding-lupus" title="Understanding Lupus" class="external-link external-popup" target="_blank">Understanding lupus <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the Lupus Foundation of America</li>
	<li><a href="http://www.niams.nih.gov/Health_Info/Lupus/lupus_ff.asp" title="Fast Facts About Lupus ">What is Lupus?</a>&nbsp;— Information from the National Institute of Arthritis and Musculoskeletal and Skin Diseases in several languages, including Spanish, Korean, and Chinese</li>
	<li><a href="http://www.niams.nih.gov/Health_Info/Bone/Osteoporosis/Conditions_Behaviors/osteoporosis_lupus.asp" title="What People With Lupus Need to Know About Osteoporosis">What people with lupus need to know about osteoporosis</a>&nbsp;— Information from the National Institute of Arthritis and Musculoskeletal and Skin Diseases</li>
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
	<li>Lawrence, R.C., Felson, D.T., Helmick, C.G., Arnold, L.M., Choi, H., Deyo, R.A., et al, for the National Arthritis Data Workgroup. (2008). <a href="http://www.ncbi.nlm.nih.gov/pubmed/18163497">Estimates of the prevalence of arthritis and other rheumatic conditions in the United States: Part II.</a> <em>Arthritis Rheum</em>; 58(1):26–35.</li>
	<li>Helmick, C.G., Felson, D.T., Lawrence, R.C., Gabriel, S., Hirsch, R., Kwoh, C.K., et al, for the National Arthritis Data Workgroup. (2008). <a href="https://www.ncbi.nlm.nih.gov/pubmed/18163481">Estimates of the prevalence of arthritis and other rheumatic conditions in the United States: Part I</a>. <em>Arthritis Rheum</em>; 58(1):15–25.</li>
	<li>Centers for Disease Control and Prevention. (2015). <a href="http://www.cdc.gov/arthritis/basics/lupus.htm">Systemic lupus erythematosus (SLE or lupus)</a>.</li>
	<li>Manzi, S, et al. (1997). <a href="http://www.ncbi.nlm.nih.gov/pubmed/9048514">Age-specific incidence rates of MI and angina in women with SLE: comparison with the Framingham Study</a>. <em>Am J Epidemiol</em>; 145: 408-15.</li>
	<li>Lee, Y.H., Woo, J.H., Choi, S.J., Ji, J.D., Song, G.G. (2010). <a href="http://www.ncbi.nlm.nih.gov/pubmed/20064907">Induction and maintenance therapy for lupus nephritis: a systematic review and meta-analysis</a>. <em>Lupus</em>; 19:703–710.</li>
	<li>Fernandez, M., Calvo-Alen, J., Alarcon, G.S., et al. (2005). <a href="https://www.ncbi.nlm.nih.gov/pubmed/15934092">Systemic lupus erythematosus in a multiethnic US cohort (LUMINA): XXI. Disease activity, damage accrual, and vascular events in pre- and postmenopausal women.</a> <em>Arthritis Rheum</em>;52:1655–1664.&nbsp;</li>
	<li>Dall’Era M. Chapter 21. Systemic lupus erythematosus. In: Imboden JB, Hellman DB, Stone JH. (Eds). Current Rheumatology Diagnosis and Treatment. 3<sup>rd</sup>&nbsp;ed. New York, NY:McGraw-Hill; 2013.&nbsp;</li>
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
