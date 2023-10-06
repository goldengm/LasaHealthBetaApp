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

export function bulimiaPage({ navigation, ...rest }) {
  const condName = "Bulimia Nervosa";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bulimianervosa.jpg?VersionId=apVFoHyB5dwqdi6SZLL5iGsNvTY5nRu5";
  const condDescription =
    "Bulimia nervosa, often called bulimia, is a type of eating disorder. Eating disorders are mental health problems that cause extreme and dangerous eating behaviors. These extreme eating behaviors cause other serious health problems and sometimes death. Some eating disorders also involve extreme exercise. \n Women with bulimia eat a lot of food in a short amount of time and feel a lack of control over eating during this time (called binging). People with bulimia then try to prevent weight gain by getting rid of the food (called purging). Purging may be done by: \n Making yourself throw up \n Taking laxatives. Laxatives can include pills or liquids that speed up the movement of food through your body and lead to bowel movements. \n Women with bulimia may also try to prevent weight gain after binging by exercising a lot more than normal, eating very little or not at all (fasting), or taking pills to urinate often. \n Women with bulimia usually have self-esteem that is closely linked to their body image.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bulimianervosa.jpg?VersionId=apVFoHyB5dwqdi6SZLL5iGsNvTY5nRu5"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Bulimia nervosa</h1>  -->
            <p><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="buh-LEE-me-ah nur-VOH-suh">Bulimia nervosa</a>, often called bulimia, is a type of eating disorder.</strong> People with bulimia eat large amounts of food at one time, then try to get rid of the food or weight gain by throwing up, taking laxatives, fasting (not eating anything), or exercising a lot more than normal. Bulimia affects more girls and women than boys and men. Bulimia is a serious health problem, but people with bulimia can get better with treatment.</p>

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
      title: "What is bulimia?",
      content: `

    <div class="answer"><p>Bulimia nervosa, often called bulimia, is a type of eating disorder. Eating disorders are mental health problems that cause extreme and dangerous eating behaviors. These extreme eating behaviors cause other serious health problems and sometimes death. Some eating disorders also involve extreme exercise.</p>

<p>Women with bulimia eat a lot of food in a short amount of time and feel a lack of control over eating during this time (called binging). People with bulimia then try to prevent weight gain by getting rid of the food (called purging). Purging may be done by:</p>

<ul>
	<li>Making yourself throw up</li>
	<li>Taking laxatives. Laxatives can include pills or liquids that speed up the movement of food through your body and lead to bowel movements.</li>
</ul>

<p>Women with bulimia may also try to prevent weight gain after binging by exercising a lot more than normal, eating very little or not at all (fasting), or taking pills to urinate often.</p>

<p>Women with bulimia usually have self-esteem that is closely linked to their body image.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What is the difference between bulimia and other eating disorders? ",
      content: `

    <div class="answer"><p>Women with eating disorders, such as bulimia,&nbsp;<a href="/mental-health/mental-health-conditions/eating-disorders/anorexia-nervosa">anorexia</a>, and&nbsp;<a href="/mental-health/mental-health-conditions/eating-disorders/binge-eating-disorder">binge eating disorder</a>, have a mental health condition that affects how they eat, and sometimes how they exercise. These eating disorders threaten their health.</p>

<p>Unlike women with anorexia, women with bulimia often have a normal weight. Unlike women with binge eating disorder, women with bulimia purge, or try to get rid of the food or weight after binging. Binging and purging are usually done in private. This can make it difficult to tell if a loved one has bulimia or another eating disorder.</p>

<p>It is possible to have more than one eating disorder in your lifetime. Regardless of what type of eating disorder you may have, you can get better with treatment.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who is at risk for bulimia?",
      content: `

    <div class="answer"><p>Bulimia affects more women than men. It affects up to 2% of women<sup><a href="#">1</a>&nbsp;</sup>and happens to women of all races and ethnicities.<a href="#references"><sup>2</sup></a></p>

<p>Bulimia affects more girls and younger women than older women. On average, women develop bulimia at 18 or 19.<a href="#references"><sup>3</sup></a>&nbsp;Teen girls between 15 and 19 and young women in their early 20s are most at risk. But eating disorders are happening more often in older women. In one recent study, 13% of American women over 50 had signs of an eating disorder.<a href="#references"><sup>4</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of bulimia?",
      content: `

    <div class="answer"><p>Someone with bulimia may be thin, overweight, or have a normal weight. It can be difficult to tell based on a person's weight whether someone has bulimia. This is because binging and purging is most often done in private. However, family or friends may see empty food wrappers in unexpected places or vomit in the home.</p>

<p>Over time, some symptoms of bulimia may include:<a href="#references"><sup>5</sup></a></p>

<ul>
	<li>Swollen cheeks or jaw area</li>
	<li>Calluses or scrapes on the knuckles (if using fingers to induce vomiting)</li>
	<li>Teeth that look clear instead of white and are increasingly sensitive and decaying</li>
	<li>Broken blood vessels in the eyes</li>
	<li>Acid reflux, constipation, and other gastrointestinal problems</li>
	<li>Severe dehydration</li>
</ul>

<p>Girls or women with bulimia may also have behavior changes such as:</p>

<ul>
	<li>Often going to the bathroom right after eating (to throw up)</li>
	<li>Exercising a lot, even in bad weather or when hurt or tired</li>
	<li>Acting moody or sad, hating the way she looks, or feeling hopeless</li>
	<li>Having problems expressing anger</li>
	<li>Not wanting to go out with friends or do activities she once enjoyed</li>
</ul>

<p>People with bulimia often have other mental health problems, including depression, anxiety, or substance abuse.<a href="#references"><sup>6</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes bulimia?",
      content: `

    <div class="answer"><p>Researchers are not sure exactly what causes bulimia and other eating disorders. Researchers think that eating disorders might happen because of a combination of a person's biology and life events. This combination includes having specific genes, a person's biology, body image and self-esteem, social experiences, family health history, and sometimes other mental health illnesses.&nbsp;&nbsp;</p>

<p>Researchers are also studying unusual activity in the brain, such as changing levels of serotonin or other chemicals, to see how it may affect eating. Learn more about&nbsp;<a href="https://clinicaltrials.gov/ct2/results?term=bulimia&amp;Search=Search" target="_blank" title="Search of: bulimia">current research</a>&nbsp;on bulimia.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does bulimia affect a woman's health?",
      content: `

    <div class="answer"><p>Purging through vomiting or taking laxatives can prevent your body from getting the important nutrients it needs from food. Over time, bulimia can affect your body in the following ways:<a href="#references"><sup>5</sup></a><a href="/a-z-topics/bulimia-nervosa#references"><sup>,</sup></a><a href="#references"><sup>7</sup></a><a href="/a-z-topics/bulimia-nervosa#references"><sup>,</sup></a><a href="#references"><sup>8</sup></a></p>

<ul>
	<li>Stomach damage from overeating</li>
	<li>Electrolyte imbalance (having levels of sodium, potassium, or other minerals that are too high or too low, which can lead to heart attack or heart failure)</li>
	<li>Ulcers and other damage to your throat from vomiting</li>
	<li>Irregular periods or not having periods, which can cause problems getting pregnant</li>
	<li>Tooth decay from vomiting</li>
	<li>Dehydration</li>
	<li>Problems having bowel movements or damage to the intestines from laxative abuse</li>
</ul>

<p>Long-term studies of 20 years or more show that women who had an eating disorder in the past usually reach and maintain a healthy weight after treatment.<a href="#references"><sup>9</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is bulimia diagnosed?",
      content: `

    <div class="answer"><p>Your doctor or nurse will ask you questions about your symptoms and medical history. It may be difficult to talk to a doctor or nurse about secret eating, purging, or exercise behaviors. But doctors and nurses want to help you get better. Being honest about your eating behaviors with a doctor or nurse is a good way to ask for help.</p>

<p>Your doctor may do blood or urine tests to rule out other possible causes of your symptoms. Your doctor may also do other tests to see whether you have any other health problems caused by bulimia. These tests may include kidney function tests or an electrocardiogram (ECG or EKG) to see if or how repeated binging and purging has affected your health.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is bulimia treated?",
      content: `

    <div class="answer"><p>Your doctor may refer you to a team of doctors, nutritionists, and therapists who will work to help you get better.</p>

<p>Treatment plans may include one or more of the following:<a href="#references"><sup>6</sup></a></p>

<ul>
	<li><strong>Nutrition therapy</strong>. People who purge (make themselves throw up or take laxatives) regularly should be treated by a doctor. Purging can cause life-threatening electrolyte imbalances. Some people with bulimia may need to be hospitalized if they have serious heart or kidney problems.<a href="#references"><sup>10</sup></a></li>
	<li><strong>Psychotherapy.&nbsp;</strong>Sometimes called "talk therapy," psychotherapy is counseling to help you change harmful thoughts or behaviors. This type of therapy may focus on the importance of talking about your feelings and how they affect what you do. For example, you might talk about how stress triggers a binge. You may work one-on-one with a therapist or in a group with others who have bulimia.</li>
	<li><strong>Nutritional counseling.</strong>&nbsp;A registered dietitian or counselor can help you eat in a healthier way than binging and purging.</li>
	<li><strong>Support groups&nbsp;</strong>can be helpful for some people with bulimia when added to other treatment. In support groups, girls or women and sometimes their families meet and share their stories.</li>
	<li><strong>Medicine.&nbsp;</strong>Fluoxetine (Prozac) is the only medicine approved by the Food and Drug Administration (FDA) for treating bulimia, but only in adults.<a href="#references"><sup>11</sup></a>&nbsp;It may help reduce binging and purging and improve your thoughts about eating. Some antidepressants may help girls and women with bulimia who also have depression or anxiety.</li>
</ul>

<p>Most girls and women do get better with treatment and are able to eat and exercise in healthy ways again.<a href="/a-z-topics/bulimia-nervosa#references"><sup>12</sup></a> Some may get better after the first treatment. Others get well but may relapse and need treatment again.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does bulimia affect pregnancy?",
      content: `

    <div class="answer"><p>Bulimia can cause problems getting pregnant and during pregnancy.</p>

<p>Repeated purging and binging can make your menstrual cycle irregular (your period comes some months but not others) or your period may stop for several months. Irregular or missing periods mean you may not&nbsp;<a href="/glossary#ovulation" title="glossary | womenshealth.gov">ovulate</a>, or release an egg from the ovary, every month. This can make it difficult to get pregnant.<a href="/a-z-topics/bulimia-nervosa#references"><sup>13</sup></a>&nbsp;However, if you do not want to have children right now and you have sex, you should use birth control.</p>

<p>Bulimia can also cause problems during pregnancy. Bulimia raises your risk for:</p>

<ul>
	<li>Miscarriage (pregnancy loss)<a href="#references"><sup>14</sup></a></li>
	<li>Premature birth (also called preterm birth), or childbirth before 37 weeks of pregnancy</li>
	<li>Delivery by cesarean section (C-section)</li>
	<li>Having a low birth weight baby (less than five pounds, eight ounces at birth)</li>
	<li>Having a baby with a birth defect<a href="#references"><sup>15</sup></a></li>
	<li>Depression after the baby is born<a href="#references"><sup>16</sup></a>&nbsp;(<a href="/mental-health/mental-health-conditions/postpartum-depression" title="Depression during and after pregnancy | womenshealth.gov">postpartum depression</a>)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "If I had an eating disorder in the past, can I still get pregnant? ",
      content: `

    <div class="answer"><p>Women who have recovered from bulimia and have normal menstrual cycles have a better chance of getting&nbsp;<a href="/pregnancy" title="Pregnancy | womenshealth.gov">pregnant</a>&nbsp;and having a safe and healthy pregnancy.</p>

<p>If you had an eating disorder in the past, it may take you a little longer to get pregnant (about six months to a year) compared to women who never had an eating disorder.<a href="#references"><sup>17</sup></a></p>

<p>Tell your doctor if you had an eating disorder in the past and are trying to become pregnant.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "If I take medicine to treat bulimia, can I breastfeed my baby? ",
      content: `

    <div class="answer"><p>Maybe. Some medicines used to treat bulimia can pass through breastmilk. Certain antidepressants can be used safely during breastfeeding.</p>

<p>Talk to your doctor to find out what medicine works best for you. Learn more about medicines and breastfeeding in our&nbsp;<a href="/breastfeeding/breastfeeding-home-work-and-public/breastfeeding-and-everyday-life/#9" title="Breastfeeding and everyday life | womenshealth.gov">Breastfeeding</a>&nbsp;section. You can also enter a medicine into the&nbsp;<a href="http://toxnet.nlm.nih.gov/newtoxnet/lactmed.htm" target="_blank" title="Drugs and Lactation Database (LactMed)">LactMed® database</a>&nbsp;to find out if the medicine passes through breastmilk and any about possible side effects for your nursing baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about bulimia?",
      content: `

    <div class="answer"><p>For more information about bulimia, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="https://www.mentalhealth.gov/what-to-look-for/eating-disorders/bulimia" title="MentalHealth.gov Bulimia">MentalHealth.gov</a></li>
	<li><a href="http://www.nimh.nih.gov/health/topics/eating-disorders/index.shtml">National Institute of Mental Health, NIH, HHS</a><br>
	Phone Number:&nbsp;866-615-6464</li>
	<li><a href="http://www.apa.org/" class="external-link external-popup" target="_blank">American Psychological Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 800-374-2721</li>
	<li><a href="http://www.nationaleatingdisorders.org" class="external-link external-popup" target="_blank">National Eating Disorders Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 800-931-2237</li>
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
	<li>Smink, F.R.E., van Hoeken, D., Hoek, H. W. (2013).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/24060914">Epidemiology, course, and outcome of eating disorders</a>. <em>Current Opinion in Psychiatry</em>; 26(6); 543-8.</li>
	<li>Marques, L., Alegria, M., Becker, A.E., Chen, C., Fang, A., Chosak, A., et al. (2011). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3011052/">Comparative Prevalence, Correlates of Impairment, and Service Utilization for Eating Disorders across U.S. Ethnic Groups: Implications for Reducing Ethnic Disparities in Health Care Access for Eating Disorders</a>. <em>International Journal of Eating Disorders</em><em>;</em> 44(5): 412-420.</li>
	<li>National Collaborating Centre for Mental Health (UK).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmedhealth/PMH0051873/">Core Interventions in the Treatment and Management of Anorexia Nervosa, Bulimia Nervosa and Related Eating Disorders.</a> <em>NICE Clinical Guidelines</em>, No. 9. The British Psychological Society &amp; The Royal College of Psychiatrists: Leicester, UK; 2004.</li>
	<li>Gagne, D.A., Van Holle, A., Brownley, K.A., Runfola, C.D., Hofmeier, S., Branch, K.E., et al. (2012). <a href="http://onlinelibrary.wiley.com/doi/10.1002/eat.22030/abstract" class="external-link external-popup" target="_blank">Eating disorder symptoms and weight and shape concerns in a large web-based convenience sample of women ages 50 and above: Results of the gender and body image (GABI) study <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>International Journal of Eating Disorders; </em>45(7): 832-844.</li>
	<li value="5">Mehler, P.S., Rylander, M. (2015). <a href="https://jeatdisord.biomedcentral.com/articles/10.1186/s40337-015-0044-4" class="external-link external-popup" target="_blank">Bulimia Nervosa – medical complications. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Journal of Eating Disorders; </em>3:12.</li>
	<li value="6">Rushing, J.M., Jones, L.E., Carney, C.P. (2003). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC419300/">Bulimia Nervosa: A Primary Care Review</a>. <em>The Primary Care Companion to the Journal of Clinical Psychiatry; </em>5(5): 217-224.</li>
	<li value="7">Fairburn, C.G., Harrison, P.J. (2003). <a href="http://www.ncbi.nlm.nih.gov/pubmed/12573387">Eating disorders.</a> <em>Lancet</em>; 361(9355):407-416.</li>
	<li value="8">National Eating Disorders Association. (n.d.). <a href="http://www.nationaleatingdisorders.org/laxative-abuse-some-basic-facts" class="external-link external-popup" target="_blank">Laxative Abuse: Some Basic Facts <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;</li>
	<li value="9">Murray, H. B., Tabri, N., Thomas, J. J., Herzog, D. B., Franko, D. L., Eddy, K. T. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/28188643">Will I get fat? 22-year weight trajectories of individuals with eating disorders</a>.<em> Int J Eat Disord</em>. Epub ahead of print.</li>
	<li value="10">Jauregui-Garrido, B., Jauregui-Lobera, I. (2012). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3292410/">Sudden death in eating disorders.</a> <em>Vasc Health Risk Manag</em>, 91–8.</li>
	<li value="11">Food and Drug Administration. (2016). <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/018936s108lbl.pdf">Label for PROZAC (fluoxetine)</a> (PDF, 951 KB).</li>
	<li value="12">Eddy, K. T., Tabri, N., Thomas, J. J., Murray, H. B., Keshaviah, A., Hastings, E., et al. (2017). <a href="http://www.ncbi.nlm.nih.gov/pubmed/28002660">Recovery from anorexia nervosa and bulimia nervosa at 22-year follow-up</a>. <em>J Clin Psychiatry, 78</em>(2), 184-189.</li>
	<li value="13">Morgan, J.F., Lacey, J.H., Sedgwick, P.M. (1999). <a href="http://www.ncbi.nlm.nih.gov/pubmed/10211167">Impact of pregnancy on bulimia nervosa.</a> <em>British Journal of Psychiatry; </em>174: 135-140.</li>
	<li value="14">Morgan, J.F., Lacey, J.H., Chung, E. (2006). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16738083">Risk of postnatal depression, miscarriage, and preterm birth in bulimia nervosa: retrospective controlled study.</a> <em>Psychosomatic Medicine;</em> 68(3): 487-492.</li>
	<li value="15">Morrill, E.S., Nickols-Richardson, H.M. (2001). <a href="http://www.ncbi.nlm.nih.gov/pubmed/11320952">Bulimia nervosa during pregnancy: a review.</a> <em>Journal of the American Dietetic Association;</em> 101(4): 448-454.</li>
	<li value="16">Mazzeo, S.E., Slof-Op't Landt, M.C., Jones, I., Mitchell, K., Kendler, K.S., Neale, M.C., et al. (2006). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16498586">Associations among postpartum depression, eating disorders, and perfectionism in a population-based sample of adult women.</a> <em>International Journal of Eating Disorders; </em>39(3): 202-211.</li>
	<li value="17">Easter A, Treasure J, Micali N. (2011). <a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1471-0528.2011.03077.x/full" class="external-link external-popup" target="_blank">Fertility and prenatal attitudes towards pregnancy in women with eating disorders: results from the Avon Longitudinal Study of Parents and Children <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>BJOG</em>;118:1491–1498.</li>
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
