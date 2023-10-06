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

export function gravesPage({ navigation, ...rest }) {
  const condName = "Graves' disease";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Gravesdisease.jpg?VersionId=z9cSk2RZnOzfcRTZgU2rregfSBgYwODr";
  const condDescription =
    "Graves' disease is an autoimmune disease that damages the thyroid gland. Graves' disease affects more women than men. It is the most common cause of hyperthyroidism (overactive thyroid gland). Symptoms of Graves' disease may include bulging eyes, weight loss, and a fast metabolism. Hyperthyroidism due to Graves' disease is treatable with medicine. But if left untreated, Graves' disease can cause osteoporosis, heart problems, and problems getting pregnant and during pregnancy.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Gravesdisease.jpg?VersionId=z9cSk2RZnOzfcRTZgU2rregfSBgYwODr"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Graves' disease</h1>  -->
            <p><strong>Graves' disease is an <a href="/a-z-topics/autoimmune-diseases">autoimmune disease</a> that damages the thyroid gland.</strong> Graves' disease affects more women than men. It is the most common cause of <a href="/a-z-topics/thyroid-disease">hyperthyroidism</a> (overactive thyroid gland). Symptoms of Graves' disease may include bulging eyes, weight loss, and a fast metabolism. Hyperthyroidism due to Graves' disease is treatable with medicine. But if left untreated, Graves' disease can cause osteoporosis, heart problems, and problems getting pregnant and during pregnancy.</p>

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
      title: "What is Graves' disease?",
      content: `

    <div class="answer"><p>Graves' disease is an <a href="/glossary#autoimmune">autoimmune disease</a> that affects the thyroid gland. Your thyroid is a small gland at the base of your neck. Your thyroid gland makes <a href="/glossary#hormone">hormones</a> that control many activities in your body, including how fast your heart beats and how fast you burn calories.</p>

<p>In a person with Graves' disease, the immune system makes <a href="/glossary#antibodies">antibodies</a> that cause the thyroid to make more thyroid hormone than the body needs. Graves' disease most often leads to <a href="/a-z-topics/thyroid-disease">hyperthyroidism</a>. Hyperthyroidism causes your metabolism to speed up.<a href="#references"><sup>1</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets Graves' disease?",
      content: `

    <div class="answer"><p>Graves' disease is more common in women than in men. Women are most often affected between the ages of 30 and 60.<a href="#references"><sup>1</sup></a></p>

<p>Some women are more likely to develop Graves' disease than other women. Your risk is higher if you:<a href="#references"><sup>1</sup></a></p>

<ul>
	<li><strong>Have a family history. </strong>Graves' disease may run in families. Researchers are working to find the gene or genes involved.</li>
	<li><strong>Have another autoimmune disease</strong>, such as rheumatoid arthritis, <a href="/a-z-topics/diabetes">type 1 diabetes</a>, pernicious <a href="/a-z-topics/iron-deficiency-anemia">anemia</a>, or <a href="/lupus">lupus</a>.</li>
	<li><strong>Are under stress.</strong> Severe emotional <a href="/a-z-topics/stress-and-your-health">stress</a> or trauma may trigger Graves' disease.</li>
	<li><strong>Recently had a baby. </strong><a href="/pregnancy">Pregnancy</a> affects the thyroid gland. The risk of developing Graves' disease is seven times higher in the year after giving birth. This suggests that pregnancy might trigger or reveal Graves' disease in some women.</li>
	<li><strong>Have a history of infection.</strong> Infection may play a role in the development of Graves' disease. Researchers have found a link between Graves' disease and infection with the virus that causes mononucleosis ("mono"; Epstein-Barr virus).<a href="#references"><sup>2</sup></a></li>
	<li><strong>Smoke.</strong> Smoking raises your risk for Graves' disease. It is also a leading risk factor for the eye problem seen in Graves' disease, called <a href="#4">Graves' ophthalmopathy</a>.<a href="#references"><sup>3</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of Graves' disease?",
      content: `

    <div class="answer"><p>Many of the symptoms of Graves' disease are the same as those of other causes of <a href="/a-z-topics/thyroid-disease">hyperthyroidism</a>. Other signs are found only in Graves' disease.<a href="#references"><sup>4</sup></a></p>

<p>Symptoms of Graves' disease include:</p>

<ul>
	<li>Bulging eyes (only in Graves' disease)</li>
	<li>Thickening and reddening of the skin, especially on the shins and upper feet (only in Graves' disease)</li>
	<li>Irritability or nervousness</li>
	<li>Tiredness or muscle weakness</li>
	<li>Heat sensitivity</li>
	<li>Trouble sleeping</li>
	<li>Shaky hands</li>
	<li>Rapid and irregular heartbeat</li>
	<li>Diarrhea</li>
	<li>Weight loss without dieting</li>
	<li>goiter, which is an enlarged thyroid that can cause the neck to look swollen</li>
</ul>

<p>The symptoms of Graves' disease can start slowly or very suddenly. Some people do not have any symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What eye problems are caused by Graves' disease?",
      content: `

    <div class="answer"><p>Graves' disease can lead to an eye problem called Graves' <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="ophthalmopathy">ophthalmopathy</a>. It affects up to half of people with Graves' disease.<a href="#references"><sup>5</sup></a> The main symptoms of Graves' ophthalmopathy are eyes that seem to bulge out of their eye sockets, problems seeing, and irritated eyes.</p>

<p>Graves' ophthalmopathy happens when cells from your body's immune (defense) system attack the tissues around your eyes. The result is inflammation and swelling in the eye socket, causing the eyeball to bulge out. If left untreated, damage to the nerves in the eyes can also lead to blindness.</p>

<p>Smoking (including secondhand smoke) is the leading risk factor for Graves' ophthalmopathy. Quitting smoking lowers your risk for developing Graves' ophthalmopathy.<a href="#references"><sup>3</sup></a> If you already have Graves' ophthalmopathy, quitting smoking can help your treatment work better.</p>

<p>Graves' ophthalmopathy is treated with eye drops and eyeglasses, radiation therapy, or eye surgery. Your treatment will depend on how serious your eye problems are.<a href="#references"><sup>4</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes Graves' disease?",
      content: `

    <div class="answer"><p>Graves' disease is triggered by some process in the body's immune system, which normally protects the body from infection. In Graves' disease, the body makes an antibody that attacks the cells of the thyroid gland.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does Graves' disease affect women?",
      content: `

    <div class="answer"><p>Women are more likely to get Graves' disease than men. Graves' disease also affects women differently than men. In addition to causing heart problems and osteoporosis, Graves' disease in women can cause:</p>

<ul>
	<li><strong>Problems with your menstrual period. </strong>Your thyroid hormone can affect your menstrual cycle. Too much thyroid hormone can cause irregular menstrual periods and make your periods lighter than normal.</li>
	<li><strong>Problems getting pregnant. </strong>Irregular menstrual cycles can make it harder for women with Graves' disease to get pregnant. About half of women with Graves' disease have <a href="#10">problems getting pregnant</a>.<a href="#references"><sup>5</sup></a></li>
	<li><strong>Problems during pregnancy.</strong> Graves' disease can cause problems for you <a href="#12">during pregnancy</a> and for your unborn baby's development.</li>
	<li><strong>Problems after pregnancy.</strong> Graves' disease often gets better during the last three months of pregnancy, but it may get worse after delivery.<a href="#references"><sup>6</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is Graves' disease diagnosed?",
      content: `

    <div class="answer"><p>To diagnose Graves' disease, your doctor will do a physical exam and may do some tests. Tests that can help you find out if you have Graves' disease include:</p>

<ul>
	<li><strong>Thyroid function tests.</strong> These tests check your blood for levels of the main thyroid hormone (T4) and thyroid-stimulating hormone (TSH). A high level of T4 plus a low level of TSH is a sign of an overactive thyroid gland. Sometimes, routine screening of thyroid function shows mild overactive thyroid in a person without symptoms. When this happens, your doctor may suggest treatment or watchful waiting to see if levels return to normal.</li>
	<li><strong>Radioactive iodine uptake (RAIU) test.</strong> This test tells how much iodine the thyroid gland is using. The thyroid gland uses iodine to make thyroid hormone. Higher levels of iodine suggest Graves' disease. The RAIU test can also help rule out other possible causes of an overactive thyroid gland.</li>
	<li><strong>Antibody tests.</strong> These blood tests look for antibodies that suggest Graves' disease.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is Graves' disease treated?",
      content: `

    <div class="answer"><p>Treatments for Graves' disease lower the amount of thyroid hormone in your body or block the action of thyroid hormone. There are three main treatments for Graves' disease:<a href="#references"><sup>7</sup></a></p>

<ul>
	<li><strong>Antithyroid medicine.</strong> The Food and Drug Administration has approved two medicines for Graves' disease: <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="methimazole">methimazole</a>, or MMI; and <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="PROH-puhl-theye-oh-YUR-uh-sil">propylthiouracil</a>, or PTU. These medicines keep the thyroid gland from making too much thyroid hormone. They are often given to patients before thyroid surgery or radioiodine therapy. You cannot take MMI in the early stages of pregnancy, because it may hurt your developing baby.</li>
	<li><strong>Radioactive iodine (RAI).</strong> RAI is a type of iodine that damages the thyroid gland by giving it radiation. The RAI destroys thyroid cells so that your thyroid gland cannot make as much thyroid hormone. This cures the overactive thyroid gland, but it can lead to underactive thyroid gland. If this happens, you will need to take thyroid hormone for the rest of your life.</li>
	<li><strong>Surgery to remove all or most of the thyroid.</strong> As with RAI, surgery cures overactive thyroid but can lead to underactive thyroid. You will need to take thyroid hormone to replace the needed thyroid hormone that your body can no longer make.</li>
</ul>

<p>Your doctor may also suggest you take a medicine called a <strong>beta blocker</strong>. Beta blockers block some of the effects of excess thyroid hormone on your body. They slow down your heart rate and reduce symptoms such as shaking and nervousness. Beta blockers work quickly and can help you feel better while you wait for additional treatment to start working.</p>

<p>All medicines have risks. You should talk to your doctor about the benefits and risks of all medicines.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What could happen if Graves' disease is not treated?",
      content: `

    <div class="answer"><p>Without treatment, Graves' disease can lead to other health problems, including:</p>

<ul>
	<li>Thyroid storm, a very rare, life-threatening condition caused by too much thyroid hormone that suddenly increases your heart rate, blood pressure, and temperature to dangerously high levels. A stressful event, such as trauma, surgery, or infection, may trigger thyroid storm.</li>
	<li>Heart problems, such as irregular heartbeat (arrhythmia), atrial fibrillation, and heart failure<a href="#references"><sup>8</sup></a></li>
	<li>Bone loss that can lead to osteoporosis. Bone loss after menopause raises a woman's risk for weak and fragile bones that break easily. Graves' disease can speed up bone loss.<a href="#references"><sup>9</sup></a></li>
	<li>Problems during pregnancy for you and your baby</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does Graves' disease affect my chances of getting pregnant? ",
      content: `

    <div class="answer"><p>Women with Graves' disease often have irregular <a href="/menstrual-cycle">menstrual periods</a>. If your periods are irregular, you may not ovulate each month, which can make it difficult to get pregnant.</p>

<p>In a man, Graves' disease can harm the sperm, which can make it difficult for you to get pregnant.<a href="#references"><sup>10</sup></a></p>

<p>Treatment of Graves' disease can often make your menstrual periods regular and restore fertility in women and men.<a href="#references"><sup>11</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does pregnancy affect the thyroid?",
      content: `

    <div class="answer"><p>Normal hormone changes during <a href="/pregnancy">pregnancy</a> cause thyroid hormone levels to increase. The thyroid gland may also enlarge slightly in healthy women during pregnancy, but not enough to be felt. These changes do not affect the pregnancy or your unborn baby.</p>

<p>Undiagnosed thyroid gland problems can harm you and your unborn baby. Symptoms of normal pregnancy, such as fatigue and feeling hot, can make it easy to overlook thyroid problems that cause the same symptoms. Tell your doctor or nurse if you have symptoms of overactive thyroid or notice a goiter.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does Graves' disease affect pregnancy?",
      content: `

    <div class="answer"><p>Untreated or poorly treated Graves' disease can lead to problems during pregnancy, such as:</p>

<ul>
	<li><a href="/glossary#preeclampsia">Preeclampsia</a></li>
	<li><a href="/glossary#preterm_birth">Premature birth</a></li>
	<li><a href="/glossary#placental_abruption">Placental abruption</a></li>
	<li><a href="/glossary#miscarriage">Miscarriage</a></li>
	<li>Heart failure</li>
</ul>

<p>It also can lead to serious problems for your baby, such as:</p>

<ul>
	<li>Fast heart rate</li>
	<li><a href="/glossary#low_birth_weight">Low birth weight</a></li>
	<li><a href="/glossary#stillbirth">Stillbirth</a></li>
	<li>Birth defects</li>
	<li>Thyroid problems</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is Graves' disease treated during pregnancy?",
      content: `

    <div class="answer"><p>During pregnancy, you may need to see an <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="endocrinologist">endocrinologist</a>, a doctor who treats people with hormone problems. Your doctors will check your thyroid levels during pregnancy.</p>

<p>You cannot get radioiodine therapy during pregnancy. It can cause problems with your pregnancy and to your unborn baby. Your doctor may give you anti-thyroid medicine instead. Propylthiouracil (PTU) is safe to take throughout pregnancy.<a href="#references"><sup>4</sup></a></p>

<p>Also, your treatment may change during your pregnancy. For some women with Graves' disease, symptoms are worse in the first trimester and then get better for the rest of the pregnancy as thyroid hormone levels change. Some women can stop taking anti-thyroid medicines in the last four to eight weeks of pregnancy if their thyroid activity becomes normal. Your doctor will check your thyroid hormone levels again after childbirth.<a href="#references"><sup>4</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I breastfeed if I take medicine to treat Graves' disease? ",
      content: `

    <div class="answer"><p>Yes. Mothers taking the <a href="#8">anti-thyroid drug</a> propylthiouracil (PTU) can safely breastfeed.<a href="#references"><sup>12</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about Graves' disease?",
      content: `

    <div class="answer"><p>For more information about Graves' disease, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.endocrine.niddk.nih.gov/" title="Endocrine Diseases"><strong>National Endocrine and Metabolic Diseases Information Service, NIDDK, NIH, HHS</strong></a><br>
	Phone Number: 1-888-828-0904</li>
	<li><a href="http://www.aarda.org/" title="American Autoimmune Related Diseases Association, Inc." class="external-link external-popup" target="_blank"><strong>American Autoimmune Related Diseases Association, Inc.</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 586-776-3900</li>
	<li><a href="http://www.thyroid.org/" title="American Thyroid Association" class="external-link external-popup" target="_blank"><strong>American Thyroid Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-THYROID (849-7643)</li>
	<li><a href="http://www.hormone.org/" title="Hormone Health Network" class="external-link external-popup" target="_blank"><strong>The Hormone Health Network</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
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
	<li>Girgis, C.M., Champion, B.L., Wall, J.R., (2011). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3474632/">Current Concepts in Graves' Disease</a>. <em>Therapeutic Advances in Endocrinology and Metabolism; </em>2(3): 135–144.</li>
	<li>Janegova, A., Janega, P., Rychly, B., Kuracinova, K., Babal, P. (2015). <a href="http://www.ncbi.nlm.nih.gov/pubmed/25931043">The role of Epstein-Barr virus infection in the development of autoimmune thyroid diseases</a>. <em>Endokrynologia Polska;</em> 66(2): 132–136.</li>
	<li>Stan, M.N., Bahn, R.S. (2010). <a href="http://www.ncbi.nlm.nih.gov/pubmed/20578901">Risk factors for development or deterioration of Graves' ophthalmopathy</a>. <em>Thyroid; </em>20(7): 777–783.</li>
	<li>Tanda, M.L., Piantanida, E., Liparulo, L., Veronesi, G., Lai, A., Sassi, L., … Bartalena, L. (2013). <a href="http://www.ncbi.nlm.nih.gov/pubmed/23408569">Prevalence and natural history of Graves' orbitopathy in a large series of patients with newly diagnosed Graves' hyperthyroidism seen at a single center</a>. <em>Journal of Clinical Endocrinology &amp; Metabolism;</em> 98(4): 1443–1449.</li>
	<li>Quintono-Moro, A., Zantut-Wittmann, D., Tambascia, M., da Costa Machado, H., Fernandes, A. (2014). <a href="http://www.hindawi.com/journals/ije/2014/982705/cta/" class="external-link external-popup" target="_blank">High prevalence of infertility among women with Graves' disease and Hashimoto's thyroiditis. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>International Journal of Endocrinology</em>. doi:10.1155/2014/982705.</li>
	<li>American Thyroid Association. (n.d.). <a href="http://www.thyroid.org/faq-thyroid-disease-and-pregnancy/" class="external-link external-popup" target="_blank">FAQ: Thyroid disease and pregnancy. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Burch, H.B., Cooper, D.S. (2015). <a href="https://www.ncbi.nlm.nih.gov/pubmed/26670972">Management of Graves Disease: A Review</a>. <em>JAMA; </em>314(23): 2544–54.</li>
	<li>Uchida, T., Takeno, K., Goto, M., Kanno, R., Kubo, S., Takahashi, S., … Watada, H. (2010). <a href="http://www.ncbi.nlm.nih.gov/pubmed/20513982">Superior thyroid artery mean peak systolic velocity for the diagnosis of thyrotoxicosis in Japanese patients.</a> <em>Endocrine Journal;</em> 57(5): 439–443.</li>
	<li>Park, S.E., Cho, M.A., Kim, S.H., Rhee, Y., Kang, E.S., Ahn, C.W. (2007). The adaptation and relationship of FGF-23 to changes in mineral metabolism in Graves' disease. <em>Clinical Endocrinology (Oxford);</em> 66(6): 854–858.</li>
	<li>Hudson, R.W., Edwards, A.L. (1992). <a href="http://www.ncbi.nlm.nih.gov/pubmed/1597395">Testicular function in hyperthyroidism.</a> <em>Journal of Andrology;</em> 13: 117–124.</li>
	<li>Trokoudes, K.M., Skordis, N., Picolos, M.K. (2006). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16794427">Infertility and thyroid disorders.</a> <em>Current Opinion in Obstetrics &amp; Gynecology; </em>18(4): 446–451.</li>
	<li>Mandel, S.J., Cooper, D.S. (2013). <a href="http://press.endocrine.org/doi/full/10.1210/jcem.86.6.7573" class="external-link external-popup" target="_blank">The use of antithyroid drugs in pregnancy and lactation. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Journal of Clinical Endocrinology &amp; Metabolism; </em>86(6).</li>
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
