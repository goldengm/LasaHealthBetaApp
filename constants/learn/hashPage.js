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

export function hashPage({ navigation, ...rest }) {
  const condName = "Hashimoto's Disease";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Hashimotosdisease.jpg?VersionId=Kj0KSrs99QcICZ9mYDTSn0r3DmlccyYc";
  const condDescription =
    "Hashimoto's disease is an autoimmune disease that affects the thyroid gland. Your thyroid is a small gland at the base of your neck. Your thyroid gland makes hormones that control many activities in your body, including how fast your heart beats and how fast you burn calories. \n In people with Hashimoto's disease, the immune system makes antibodies that attack the thyroid gland. This damages your thyroid gland, so it does not make enough thyroid hormone. Hashimoto's disease often leads to hypothyroidism. Hypothyroidism, when severe, can cause your metabolism to slow down, which can lead to weight gain, fatigue, and other symptoms.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Hashimotosdisease.jpg?VersionId=Kj0KSrs99QcICZ9mYDTSn0r3DmlccyYc"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Hashimoto's disease</h1>  -->
            <p><strong>Hashimoto's disease, or Hashimoto's thyroiditis, is an autoimmune disease that damages the thyroid gland. </strong>Hashimoto's disease affects more women than men. It is the most common cause of hypothyroidism (underactive thyroid). Hypothyroidism is treatable with medicine. If left untreated, hypothyroidism can cause problems getting pregnant and problems during pregnancy. Symptoms of hypothyroidism include fatigue, weight gain, depression, and joint pain.</p>

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
      title: "What is Hashimoto's disease?",
      content: `

    <div class="answer"><p>Hashimoto's disease is an <a href="/glossary#autoimmune">autoimmune disease</a> that affects the thyroid gland. Your thyroid is a small gland at the base of your neck. Your thyroid gland makes <a href="/glossary#hormone">hormones</a> that control many activities in your body, including how fast your heart beats and how fast you burn calories.</p>

<p>In people with Hashimoto's disease, the immune system makes <a href="/glossary#antibodies">antibodies</a> that attack the thyroid gland. This damages your thyroid gland, so it does not make enough thyroid hormone. Hashimoto's disease often leads to <a href="/a-z-topics/thyroid-disease">hypothyroidism</a>. Hypothyroidism, when severe, can cause your metabolism to slow down, which can lead to weight gain, fatigue, and other symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets Hashimoto's disease?",
      content: `

    <div class="answer"><p>Hashimoto's disease affects more women than men. It can happen in teens and young women, but it most often appears between ages 40 and 60.<a href="#references"><sup>1</sup></a> Hashimoto's disease often runs in families.</p>

<p>Your risk of getting Hashimoto's disease is higher if you have another <a href="/a-z-topics/autoimmune-diseases">autoimmune disease</a>, such as rheumatoid arthritis, celiac disease, <a href="/a-z-topics/diabetes">type 1 diabetes</a>, pernicious anemia (vitamin B12 deficiency&nbsp;anemia), or <a href="/lupus">lupus</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of Hashimoto's disease?",
      content: `

    <div class="answer"><p>You may not have any symptoms of Hashimoto's disease for years. The first sign is often an enlarged thyroid, called a goiter. The goiter may cause the front of your neck to look swollen. You may feel it in your throat, or it may be hard to swallow. But most people don't have any symptoms, and goiters rarely cause pain.</p>

<p>Some women with Hashimoto's disease have problems getting pregnant.</p>

<p>Hashimoto's disease often leads to an underactive thyroid gland (hypothyroidism). Symptoms of an underactive thyroid include feeling tired, feeling cold when others do not, constipation, weight gain, and heavier-than-normal menstrual periods. <a href="/a-z-topics/thyroid-disease">Learn more</a> about hypothyroidism.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes Hashimoto's disease?",
      content: `

    <div class="answer"><p>Researchers aren't sure exactly what causes Hashimoto's disease. Studies show that it is more common in women than men.</p>

<p>Your risk is higher if you:<a href="#references"><sup>2</sup></a></p>

<ul>
	<li><strong>Have a family history.</strong> Hashimoto's disease may run in families. Researchers are working to find the gene or genes involved.</li>
	<li><strong>Recently had a baby.</strong> Some women have thyroid problems after having a baby, called <a href="/a-z-topics/thyroid-disease">postpartum thyroiditis</a>. The thyroid often returns to normal within 12 to 18 months after symptoms start. But if you have a history of postpartum thyroiditis, your risk is higher for developing permanent hypothyroidism.<a href="#references"><sup>3</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does Hashimoto's disease affect women?",
      content: `

    <div class="answer"><p>Women are more likely than men to get Hashimoto's disease. It also affects women differently than men. Most problems from Hashimoto's disease happen when women develop hypothyroidism. Hypothyroidism can cause:</p>

<ul>
	<li><strong>Problems with your menstrual cycle. </strong>Your thyroid hormone can affect your menstrual cycle. Too little thyroid hormone can lead to irregular menstrual cycles or periods that are heavier than normal.</li>
	<li><strong>Problems getting pregnant. </strong>Irregular menstrual cycles can make it harder for women with Hashimoto's to get pregnant. Studies show that almost half of women with hypothyroidism due to Hashimoto's disease had problems getting pregnant. Most of these women were recently diagnosed with hypothyroidism or had not yet started treatment for hypothyroidism.<a href="#references"><sup>4</sup></a></li>
	<li><strong>Problems during pregnancy.</strong> The unborn baby's brain and nervous system need thyroid hormone to develop. Untreated or poorly treated Hashimoto's disease can lead to <a href="/glossary#miscarriage">miscarriage</a>, birth defects, or <a href="#9">other problems</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is Hashimoto's disease treated?",
      content: `

    <div class="answer"><p>Hashimoto’s disease is treated with a daily dose of <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="lee-voh-thye-ROKS-een">levothyroxine</a>. This is the same hormone that your thyroid gland makes. You will probably need to take thyroid hormone pills for the rest of your life. Talk to your doctor or nurse about any questions or concerns.</p>

<p>You may have to see your doctor or nurse a few times to test the level of thyroid stimulating hormone (TSH) in your body. Thyroid hormone acts very slowly in the body, so it can take several months after the start of treatment for symptoms to go away. Once your TSH level is normal, your doctor or nurse will need to see you less often.</p>

<p>The same treatment dose usually works for many years. But your TSH levels may change sometimes, especially during pregnancy, if you have <a href="/heart-disease-and-stroke/heart-disease">heart disease</a>, or if you take <a href="/glossary#MHT">menopausal hormone therapy</a>. Your doctor or nurse may need to adjust your dose.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is Hashimoto's disease diagnosed?",
      content: `

    <div class="answer"><p>If you have symptoms of hypothyroidism, your doctor or nurse will do an exam and order one or more tests. Tests used to find out whether you have hypothyroidism and Hashimoto's disease include:</p>

<ul>
	<li><strong>Thyroid function test.</strong> This blood test tells whether your body has the right amounts of thyroid stimulating hormone (TSH) and thyroid hormone. A high level of TSH is a sign of an underactive thyroid. When the thyroid begins to fail, the pituitary gland makes more TSH to trigger the thyroid to make more thyroid hormone. When the damaged thyroid can no longer keep up, your thyroid hormone levels drop below normal.</li>
	<li><strong>Antibody test.</strong> This blood test tells whether you have the antibodies that suggest Hashimoto’s disease. More than one in 10 people have the antibodies but have normal thyroid function. Having only the antibodies does not cause hypothyroidism.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What can happen if hypothyroidism from Hashimoto's disease is not treated?",
      content: `

    <div class="answer"><p>If left untreated, hypothyroidism from Hashimoto’s disease can cause other health problems, including:</p>

<ul>
	<li><a href="/glossary#infertility">Infertility</a></li>
	<li><a href="/glossary#miscarriage">Miscarriage</a></li>
	<li>Giving birth to a baby with birth defects</li>
	<li>High <a href="/glossary#cholesterol">cholesterol</a></li>
</ul>

<p>Very rarely, severe underactive thyroid, called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="mik-suh-DEE-muh">myxedema</a>, can lead to:</p>

<ul>
	<li>Heart failure</li>
	<li>Seizures</li>
	<li>Coma</li>
	<li>Death</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does Hashimoto's disease affect pregnancy?",
      content: `

    <div class="answer"><p>Untreated or poorly treated hypothyroidism can lead to problems during pregnancy, such as:</p>

<ul>
	<li><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="pree-ee-CLAMP-see-uh">Preeclampsia</a></li>
	<li><a href="/a-z-topics/iron-deficiency-anemia">Anemia</a></li>
	<li><a href="/glossary#miscarriage">Miscarriage</a></li>
	<li><a href="/glossary#placental_abruption">Placental abruption</a></li>
	<li>Postpartum bleeding</li>
</ul>

<p>It also can lead to serious problems for your baby, such as:</p>

<ul>
	<li><a href="/glossary#premature_birth">Premature birth</a></li>
	<li><a href="/glossary#low_birth_weight">Low birth weight</a></li>
	<li><a href="/glossary#stillbirth">Stillbirth</a></li>
	<li>Birth defects</li>
	<li>Thyroid problems</li>
</ul>

<p>Symptoms of normal pregnancy, like fatigue and weight gain, can make it easy to overlook thyroid problems in pregnancy. If you have symptoms of an underactive thyroid or notice a goiter, it’s important to tell your doctor or nurse.</p>

<p>Some women develop thyroid problems in the first year after giving birth. This is called postpartum <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="thahy-roid-AHY-tiss">thyroiditis</a>. It often begins with mild symptoms of an overactive thyroid, which last two to four months. Most women then develop symptoms of an underactive thyroid, which can last up to a year and requires treatment. Most often, thyroid function returns to normal as the thyroid heals.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How is hypothyroidism from Hashimoto's disease treated during pregnancy?",
      content: `

    <div class="answer"><p>During pregnancy, you may need to see both your OB/GYN and an <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="en-doh-krih-NOL-uh-jist">endocrinologist</a>, a doctor who treats people with hormone problems.</p>

<p>Levothyroxine, the medicine used to treat Hashimoto’s disease, is important to take during pregnancy. But you may need a higher dose than usual to support your unborn baby’s development. Your doctor or nurse will likely check your thyroid hormone levels every six to eight weeks during your pregnancy. After you have your baby, you will likely go back to your pre-pregnancy dose.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Can I breastfeed if I take medicine to treat Hashimoto's disease? ",
      content: `

    <div class="answer"><p>Yes. Small amounts of levothyroxine (the medicine for hypothyroidism) do pass through breastmilk. But it will not cause problems for your baby.<a href="#references"><sup>5</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about Hashimoto's disease?",
      content: `

    <div class="answer"><p>For more information about Hashimoto's disease, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.endocrine.niddk.nih.gov/" title="Endocrine Diseases"><strong>National Institute of Digestive and Diabetes and Kidney Diseases (NIDDK), NIH, HHS</strong></a><br>
	Phone Number: 1-888-828-0904</li>
	<li><a href="http://www.aarda.org/" class="external-link external-popup" target="_blank"><strong>American Autoimmune Related Diseases Association, Inc.</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 586-776-3900</li>
	<li><a href="http://www.thyroid.org/" class="external-link external-popup" target="_blank"><strong>American Thyroid Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-THYROID (849-7643)</li>
	<li><a href="http://www.hormone.org/" class="external-link external-popup" target="_blank"><strong>The Hormone Health Network</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-HORMONE (467-6663)</li>
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
	<li>National Institute of Diabetes and Digestive and Kidney Diseases. (2017). <a href="https://www.niddk.nih.gov/health-information/endocrine-diseases/hashimotos-disease">Hashimoto’s Disease</a>.</li>
	<li>Zaletel, K., &amp; Gaberšček, S. (2011). <a href="http://www.ncbi.nlm.nih.gov/pubmed/22654557">Hashimoto’s thyroiditis: From genes to the disease</a>. <em>Current Genomics, 12</em>(8), 576–588.</li>
	<li>Lazarus, J. H., (2011). <a href="http://www.ncbi.nlm.nih.gov/pubmed/21378224">The continuing saga of postpartum thyroiditis</a>. <em>Journal of Clinical Endocrinology and Metabolism, 96</em>(3), 614–616.</li>
	<li>Quintono-Moro, A., Zantut-Wittmann, D., Tambascia, M., da Costa Machado, H., &amp; Fernandes, A. (2014). <a href="http://www.hindawi.com/journals/ije/2014/982705/cta/" class="external-link external-popup" target="_blank">High prevalence of infertility among women with Graves’ disease and Hashimoto’s thyroiditis. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>International Journal of Endocrinology, 2014 </em>(982705). doi:10.1155/2014/982705.</li>
	<li>DailyMed. (2016). <a href="http://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e95720f2-91c9-a6d0-f7d5-8bcb94d07bbc&amp;">Levothyroxine sodium</a>. National Library of Medicine.</li>
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
