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

export function bingeEatingPage({ navigation, ...rest }) {
  const condName = "Binge eating disorder";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bingeeatingdisorder.jpg?VersionId=kqbenZD5QRwZ0dSgIy3HW6IOOqbMT9_q";
  const condDescription =
    "Binge eating disorder is a type of eating disorder. Eating disorders are mental health problems that cause extreme and dangerous eating behaviors. These extreme eating behaviors cause other serious health problems and sometimes death. Some eating disorders also involve extreme exercise. \n According to the American Psychiatric Association, women with binge eating disorder feel out of control and eat too much (binge), at least once a week for at least three months. During binges women with binge eating disorder usually eat faster than normal, eat until they are uncomfortable, eat when they are not physically hungry, and feel embarrassed, disgusted, or depressed because of the binges. Women with this type of eating disorder may be overweight or obese.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bingeeatingdisorder.jpg?VersionId=kqbenZD5QRwZ0dSgIy3HW6IOOqbMT9_q"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Binge eating disorder</h1>  -->
            <p><strong>Binge eating disorder is the most common type of eating disorder in the United States.&nbsp;</strong>People with binge eating disorder often feel out of control and eat a large amount of food at one time (called a binge). Unlike other eating disorders, people who have binge eating disorder do not throw up the food or exercise too much. Binge eating disorder is a serious health problem, but people with binge eating disorder can get better with treatment.</p>

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
      title: "What is binge eating disorder?",
      content: `

    <div class="answer"><p>Binge eating disorder is a type of eating disorder. Eating disorders are mental health problems that cause extreme and dangerous eating behaviors. These extreme eating behaviors cause other serious health problems and sometimes death. Some eating disorders also involve extreme exercise.</p>

<p>According to the American Psychiatric Association, women with binge eating disorder feel out of control and eat too much (binge), at least once a week for at least three months. During binges women with binge eating disorder usually eat faster than normal, eat until they are uncomfortable, eat when they are not physically hungry, and feel embarrassed, disgusted, or depressed because of the binges. Women with this type of eating disorder may be overweight or obese.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What is the difference between binge eating disorder and other eating disorders? ",
      content: `

    <div class="answer"><p>Women with eating disorders, such as binge eating disorder,&nbsp;<a href="/mental-health/mental-health-conditions/eating-disorders/bulimia-nervosa">bulimia</a>, and&nbsp;<a href="/mental-health/mental-health-conditions/eating-disorders/anorexia-nervosa">anorexia</a>, have a mental health condition that affects how they eat, and sometimes how they exercise. These eating disorders threaten their health.</p>

<p>Unlike people with anorexia or bulimia, people with binge eating disorder do not throw up their food, exercise a lot, or starve themselves. People with binge eating disorder are often overweight or obese. But not all people with binge eating disorder are overweight, and being overweight does not always mean you have binge eating disorder.</p>

<p>It is possible to have more than one eating disorder in your lifetime. Regardless of what type of eating disorder you may have, you can get better with treatment.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who is at risk for binge eating disorder?",
      content: `

    <div class="answer"><p>Binge eating disorder affects more than 3% of women in the United States. More than half of people with binge eating disorder are women.<a href="#references"><sup>1</sup></a></p>

<p>Binge eating disorder affects women of all races and ethnicities. It is the most common eating disorder among Hispanic, Asian-American, and African-American women.<a href="#references"><sup>2</sup></a><a href="/a-z-topics/binge-eating-disorder#references"><sup>,</sup></a><a href="#references"><sup>3</sup></a><a href="/a-z-topics/binge-eating-disorder#references"><sup>,</sup></a><a href="#references"><sup>4</sup></a></p>

<p>Some women may be more at risk for binge eating disorder.</p>

<ul>
	<li>Women and girls who diet often are 12 times more likely to binge eat than women and girls who do not diet.<a href="#references"><sup>5</sup></a></li>
	<li>Binge eating disorder affects more young and middle-aged women than older women. On average, women develop binge eating disorder in their early to mid-20s.<sup><a href="#">6</a>&nbsp;</sup>But eating disorders are happening more often in older women. In one study, 13% of American women over 50 had signs of an eating disorder.<a href="#references"><sup>7</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of binge eating disorder?",
      content: `

    <div class="answer"><p>It can be difficult to tell whether someone has binge eating disorder. Many women with binge eating disorder hide their behavior because they are embarrassed. &nbsp;</p>

<p>You may have binge eating disorder if, for at least once a week over the past three months, you have binged. Binge eating disorder means you have at least three of these symptoms while binging:<a href="#references"><sup>8</sup></a></p>

<ul>
	<li>Eating faster than normal</li>
	<li>Eating until uncomfortably full</li>
	<li>Eating large amounts of food when not hungry</li>
	<li>Eating alone because of embarrassment</li>
	<li>Feeling disgusted, depressed, or guilty afterward</li>
</ul>

<p>People with binge eating disorder may also have other mental health problems, such as depression, anxiety, or substance abuse.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes binge eating disorder?",
      content: `

    <div class="answer"><p>Researchers are not sure exactly what causes binge eating disorder and other eating disorders. Researchers think that eating disorders might happen because of a combination of a person's biology and life events. This combination includes having specific genes, a person's biology, body image and self-esteem, social experiences, family health history, and sometimes other mental health illnesses.</p>

<p>Studies suggest that people with binge eating disorder may use overeating as a way to deal with anger, sadness, boredom, anxiety, or stress.<a href="#references"><sup>9</sup></a><a href="/a-z-topics/binge-eating-disorder#references"><sup>,</sup></a><a href="#references"><sup>10</sup></a></p>

<p>Researchers are studying how changing levels of brain chemicals may affect eating habits. Neuroimaging, or pictures of the brain, may lead to a better understanding of binge eating disorder.<a href="#references"><sup>11</sup></a></p>

<p>Learn more about&nbsp;<a href="http://clinicaltrials.gov/ct2/results?term=binge+eating+disorder&amp;Search=Search" target="_blank" title="Search of binge eating disorder">current research</a>&nbsp;on binge eating disorder.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does binge eating disorder affect a woman's health?",
      content: `

    <div class="answer"><p>Many, but not all, women with binge eating disorder are overweight or obese. Obesity raises your risk for many serious health problems:<a href="#references"><sup>12</sup></a></p>

<ul>
	<li>Type 2&nbsp;<a href="/a-z-topics/diabetes">diabetes</a></li>
	<li><a href="/heart-disease-and-stroke/heart-disease" title="Heart disease | womenshealth.gov">Heart disease</a></li>
	<li>High blood pressure</li>
	<li>High cholesterol</li>
	<li>Gallbladder disease</li>
	<li>Certain types of cancer, including breast, endometrial (a type of uterine cancer), colorectal, kidney, esophageal, pancreatic, thyroid, and gallbladder cancer<a href="#references"><sup>13</sup></a></li>
	<li>Problems with your menstrual cycle, including preventing&nbsp;<a href="/glossary#ovulation" title="glossary | womenshealth.gov">ovulation</a>, which can make it harder to get pregnant</li>
</ul>

<p>People with binge eating disorder often have other serious mental health illnesses such as depression, anxiety, or substance abuse. These problems can seriously affect a woman's everyday life and can be treated.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is binge eating disorder diagnosed?",
      content: `

    <div class="answer"><p>Your doctor or nurse will ask you questions about your symptoms and medical history. It may be difficult to talk to a doctor or nurse about secret eating behaviors. But doctors and nurses want to help you be healthy. Being honest about your eating behaviors with a doctor or nurse is a good way to ask for help.</p>

<p>Your doctor may also do blood, urine, or other tests for other health problems, such as heart problems or gallbladder disease, that can be caused by binge eating disorder.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is binge eating disorder treated?",
      content: `

    <div class="answer"><p>Your doctor may refer you to a team of doctors, nutritionists, and therapists who will work to help you get better.</p>

<p>Treatment plans may include one or more of the following:</p>

<ul>
	<li><strong>Psychotherapy</strong><strong>.</strong>&nbsp;Sometimes called "talk therapy," psychotherapy is counseling to help you change any harmful thoughts or behaviors. This therapy may focus on the importance of talking about your feelings and how they affect what you do. For example, you might talk about how stress triggers a binge. You may work one-on-one with a therapist or in a group with others who have binge eating disorder.</li>
	<li><strong>Nutritional counseling.</strong>&nbsp;A registered dietitian can help you eat in a healthier way.</li>
	<li><strong>Medicine,</strong>&nbsp;such as appetite suppressants or antidepressants prescribed by a doctor. Antidepressants may help some girls and women with binge eating disorder who also have anxiety or depression.</li>
</ul>

<p>Most girls and women do get better with treatment and are able to eat in healthy ways again.<a href="#references"><sup>14</sup></a>&nbsp;Some may get better after the first treatment. Others get well but may relapse and need treatment again.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does binge eating disorder affect pregnancy?",
      content: `

    <div class="answer"><p>Binge eating disorder can cause problems getting pregnant and during pregnancy. Pregnancy can also trigger binge eating disorder.</p>

<p>Obesity raises the level of the hormone estrogen in your body. Higher levels of estrogen can stop you from ovulating, or releasing an egg from the ovary. This can make it more difficult to get pregnant. However, if you do not want to have children right now and have sex, you should use birth control.</p>

<p>Overweight or obesity may also cause&nbsp;<a href="/pregnancy/youre-pregnant-now-what/pregnancy-complications" title="Pregnancy complications | womenshealth.gov">problems during pregnancy</a>. Overweight and obesity raises your risk for:</p>

<ul>
	<li>Gestational hypertension (high blood pressure during pregnancy) and&nbsp;<a href="/glossary#preeclampsia" title="glossary | womenshealth.gov">preeclampsia</a>&nbsp;(high blood pressure and kidney problems during pregnancy). If not controlled, both problems can threaten the life of the mother and the baby.</li>
</ul>

<ul>
	<li>Gestational diabetes (<a href="/glossary#diabetes" title="glossary | womenshealth.gov">diabetes</a>&nbsp;that starts during pregnancy). If not controlled, gestational diabetes can cause you to have a large baby. This raises your risk for a C-section.<a href="#references"><sup>15</sup></a></li>
</ul>

<p>Pregnancy can raise the risk for binge eating disorder in women who are at higher risk for eating disorders. In one study, almost half of the women with binge eating disorder got the condition during pregnancy. The research suggests that binge eating during pregnancy may be caused by:<a href="#references"><sup>16</sup></a></p>

<ul>
	<li>Worry over pregnancy weight gain. Women may binge because they feel a loss of control over their bodies because of the pregnancy weight.</li>
	<li>Greater stress during pregnancy</li>
	<li>Depression</li>
	<li>History of smoking and alcohol abuse</li>
	<li>Lack of social support</li>
</ul>

<p>After pregnancy, postpartum depression and weight from pregnancy can trigger binge eating disorder in women with a history of binge eating. Women with binge eating disorder before pregnancy often gain more weight during pregnancy than women without an eating disorder. Researchers think that weight gain during pregnancy may cause some women who had binge eating disorder before pregnancy to binge eat during pregnancy.<a href="#references"><sup>17</sup></a></p>
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

    <div class="answer"><p>Yes. Women who have recovered from binge eating disorder, are at a healthy weight, and have normal menstrual cycles have a better chance of getting&nbsp;<a href="/pregnancy" title="Pregnancy | womenshealth.gov">pregnant</a>&nbsp;and having a safe and healthy pregnancy.</p>

<p>Tell your doctor if you had an eating disorder in the past and are trying to become pregnant.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "If I take medicine to treat binge eating disorder, can I breastfeed my baby? ",
      content: `

    <div class="answer"><p>Maybe. Some medicines used to treat binge eating disorder can pass through breastmilk. Certain antidepressants can be used safely during breastfeeding.</p>

<p>Talk to your doctor to find out what medicine works best for you. Learn more about medicines and breastfeeding in our&nbsp;<a href="/breastfeeding/breastfeeding-home-work-and-public/breastfeeding-and-everyday-life/#9" title="Breastfeeding and everyday life | womenshealth.gov">Breastfeeding</a>&nbsp;section. You can also enter a medicine into the&nbsp;<a href="http://toxnet.nlm.nih.gov/newtoxnet/lactmed.htm" target="_blank" title="Drugs and Lactation Database (LactMed)">LactMed® database</a>&nbsp;to find out if the medicine passes through breastmilk and about any possible side effects for your nursing baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about binge eating disorder?",
      content: `

    <div class="answer"><p>For more information about binge eating disorder, call the OWH Helpline at 1-800-994-9662&nbsp;or contact the following organizations:</p>

<ul>
	<li><a href="https://www.mentalhealth.gov/what-to-look-for/eating-disorders/binge-eating">MentalHealth.gov</a></li>
	<li><a href="http://www.nimh.nih.gov/health/topics/eating-disorders/index.shtml">National Institute of Mental Health, NIH, HHS</a><br>
	Phone Number:&nbsp;866-615-6464</li>
	<li><a href="http://win.niddk.nih.gov/">Weight-control Information Network, NIDDK, NIH, HHS</a><br>
	Phone Number: 877-946-4627</li>
	<li><a href="http://www.apa.org/" class="external-link external-popup" target="_blank">American Psychological Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 800-374-2721</li>
	<li><a href="http://www.nationaleatingdisorders.org/" class="external-link external-popup" target="_blank">National Eating Disorders Association (NEDA) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 800-931-2237</li>
	<li><a href="http://www.obesity.org/" class="external-link external-popup" target="_blank">The Obesity Society <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 301-563-6526</li>
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
	<li>Hudson, J.I., Hiripi, E., Pope, H.G., Jr., Kessler, R.C. (2007). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16815322">The prevalence and correlates of eating disorders in the National Comorbidity Survey Replication.</a> <em>Biological Psychiatry;</em> 61: 348-58.</li>
	<li>Nicdao, E.G., Hong, S., Takeuchi, D.T. (2007). <a href="http://www.ncbi.nlm.nih.gov/pubmed/17879986">Prevalence and correlates of eating disorders among Asian Americans: results from the National Latino and Asian American Study</a>. <em>International Journal of Eating Disorders; </em>40: S22-S26.</li>
	<li>Alegria, M., Woo, M., Cao, Z., Torres, M., Meng, X.-l., Streigel-Moore, R. (2007). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2680162/?report=reader">Prevalence and correlates of eating disorders in Latinos in the United States</a>. <em>International Journal of Eating Disorders; </em>40: S15-S21.</li>
	<li>Marques, L., Alegria, M., Becker, A.E., Chen, C., Fang, A., Chosak, A., et al. (2011). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3011052/">Comparative Prevalence, Correlates of Impairment, and Service Utilization for Eating Disorders across U.S. Ethnic Groups: Implications for Reducing Ethnic Disparities in Health Care Access for Eating Disorders</a>. <em>International Journal of Eating Disorders</em><em>;</em> 44(5): 412-420.</li>
	<li>Neumark-Sztainer, D. (2005). <em>I'm, Like, SO Fat!; </em><em>Helping Your Teen Make Healthy Choices about Eating and Exercise in a Weight-Obsessed World.</em> New York: Guilford Press.</li>
	<li>Berkman, N. D., Brownley, K. A., Peat, C. M., et al. (2015). <a href="https://www.ncbi.nlm.nih.gov/pubmedhealth/PMH0084306/">Management and Outcomes of Binge-Eating Disorder</a>. <em>Comparative Effectiveness Reviews, No. 160</em>. Agency for Healthcare Research and Quality (US), Rockville , MD.</li>
	<li>Gagne, D.A., Von Holle, A., Brownley, K.A., Runfola, C.D., Hofmeier, S., Branch, K.E., et al. (2012). <a href="http://onlinelibrary.wiley.com/doi/10.1002/eat.22030/abstract" class="external-link external-popup" target="_blank">Eating disorder symptoms and weight and shape concerns in a large web-based convenience sample of women ages 50 and above: Results of the gender and body image (GABI) study <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>International Journal of Eating Disorders; </em>45(7): 832-844.</li>
	<li>American Psychiatric Association. <em>Diagnostic and statistical manual of mental disorders (5th ed.)</em>. Arlington, VA: American Psychiatric Association Publishing; 2013.</li>
	<li>Joke, V., Vansteenkiste, M., Soenens, B., Boone, L., Mouratidis, A. (2013). <a href="http://guilfordjournals.com/doi/abs/10.1521/jscp.2013.32.3.335" class="external-link external-popup" target="_blank">Daily ups and downs in women's binge eating symptoms: The role of basic psychological needs, general self-control, and emotional eating. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;<em>Journal of Social and Clinical Psychology;</em>&nbsp;32(3): 335-61.</li>
	<li>Kelly, N.R., Lydecker, J.A., Mazzeo, S.E. (2012). <a href="http://www.ncbi.nlm.nih.gov/pubmed/22664415">Positive cognitive coping strategies and binge eating in college women</a>. <em>Eating</em> <em>Behaviors;</em> 13(3): 289-92.</li>
	<li>Rikani, A.A., Choudhry, Z., Choudhry, A.M., Ikram, H., Asghar, M.W., Kajal, D., et al. (2013). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4117136/">A critique of the literature on etiology of eating disorders.</a> <em>Annals of Neurosciences;</em> 20(4): 157-161.</li>
	<li>National Heart, Lung, and Blood Institute. (2013). <a href="https://www.nhlbi.nih.gov/health/health-topics/topics/obe/risks">What Are the Health Risks of Overweight and Obesity?</a></li>
	<li>National Cancer Institute. (2012). <a href="http://www.cancer.gov/cancertopics/factsheet/Risk/obesity">Obesity and Cancer Risk</a>.</li>
	<li>Fairburn, C. G., Cooper, Z., Doll, H. A., et al. (2000). <a href="https://www.ncbi.nlm.nih.gov/pubmed/10891036">The natural course of bulimia nervosa and binge eating disorder in young women</a>. <em>Arch Gen Psychiatry</em>, 57(7), 659–665.</li>
	<li><em>Eunice Kennedy Shriver </em>National Institute of Child Health and Human Development. (2012). <a href="https://www.nichd.nih.gov/news/resources/spotlight/pages/051112-HBO-obesity.aspx">NIH Obesity Research Featured in HBO's The Weight of the Nation.</a></li>
	<li>Berg, C.K., Torgersen, L., Von Holle, A., Hamer, A., Bulik, C.M., Reichborn-Kjennerud, T. (2011). <a href="http://onlinelibrary.wiley.com/doi/10.1002/eat.20797/abstract" class="external-link external-popup" target="_blank">Factors associated with binge eating disorder in pregnancy <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>International Journal of Eating Disorders;</em> 44(2): 124-133.</li>
	<li>Knoph, C., Von Holle, A., Zerwas, S., Torgersen, L., Tambs, K., et al. (2013). <a href="http://onlinelibrary.wiley.com/enhanced/doi/10.1002/eat.22088/" class="external-link external-popup" target="_blank">Course and predictors of maternal eating disorders in the postpartum period <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>International Journal of </em><em>Eating Disorders;</em> 46(4): 355-368.</li>
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
