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

export function overweightPage({ navigation, ...rest }) {
  const condName = "Overweight, obesity, and weight loss";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Weightlossandwomen.jpg?VersionId=OIyaTVFbZYv.sgtZcssjHoeDxRxAhFDp";
  const condDescription =
    "More than 2 in 3 women in the United States have overweight or obesity.1 Extra weight leads to many diseases that affect women, such as heart disease, diabetes, and many cancers. It can be difficult to talk about your weight with a doctor or nurse. A doctor or nurse you feel comfortable with can be a powerful partner in helping you reach a healthier weight.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Weightandobesity.jpg?VersionId=OeqieYq01fo58MV6c72Fl2ZYYx4y5ZB3"></div>    -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Weight and obesity</h1>  -->
            <p><strong>More than 2 in 3 women in the United States have overweight or obesity.</strong><a href="#references"><sup>1</sup></a> Extra weight leads to many diseases that affect women, such as heart disease, diabetes, and many cancers. It can be difficult to talk about your weight with a doctor or nurse. A doctor or nurse you feel comfortable with can be a powerful partner in helping you reach a healthier weight.</p>

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
      title: "How do I know if I have overweight or obesity?",
      content: `

    <div class="answer"><p>You can use the body mass index (BMI) to find out whether your weight is in a healthy or unhealthy range. BMI is a tool to estimate body fat. Find your BMI by typing your height and weight into this <a href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/english_bmi_calculator/bmi_calculator.html" title="BMI Calculator | CDC">BMI calculator</a> from the Centers for Disease Control and Prevention.</p>

<ul>
	<li>Women with a BMI of 25 to 29.9 are considered&nbsp;overweight.</li>
	<li>Women with a BMI of 30 or more have&nbsp;obesity.</li>
</ul>

<p>BMI gives you a good idea of how healthy your weight is. But it doesn’t tell the whole story. BMI is less accurate in some people than in others. For example, if you are very muscular, you may be healthy even if your BMI is above 25. This is because muscle weighs more than fat.</p>

<p>Another way to figure out if you have a healthy weight is to measure your waist circumference (the distance around your waist). Researchers and doctors have agreed that women with a waist circumference larger than 35 inches are at higher risk for many health problems caused by overweight or obesity.<a href="#references"><sup>2</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes obesity?",
      content: `

    <div class="answer"><p>People develop obesity when their body stores more&nbsp;<a href="/glossary#calorie">calories</a>&nbsp;than it uses over time. Your body needs calories (and essential vitamins, minerals, and other nutrients) to work properly and to be active. But if your body stores more calories than it uses, you will gain weight.</p>

<p>Researchers know that a person's environment over a lifetime can influence whether obesity happens. While it's true that the food you eat is an important part of weight gain or loss, other parts of your life that you do not control can make obesity more likely.&nbsp;<a href="#6">Learn more about how where you live affects weight</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common are overweight and obesity? ",
      content: `

    <div class="answer expanded"><p>Overweight and obesity are very common in the United States. More than 2 in 3 women in the United States older than 20 have overweight or obesity.<a href="#references"><sup>1</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does overweight and obesity affect some women more than others?",
      content: `

    <div class="answer"><p>Women of all ages, races, and ethnicities have overweight and obesity. But overweight and obesity are more common among some groups:</p>

<ul>
	<li>About 4 in 5&nbsp;<strong>black or</strong> <strong>African-American women</strong>&nbsp;have overweight or obesity.<a href="#references"><sup>1</sup></a></li>
	<li>More than 3 in 4&nbsp;<strong>Hispanic or Latina women</strong>&nbsp;have overweight or obesity.<a href="#references"><sup>1</sup></a></li>
	<li><strong>Lesbians and bisexual women&nbsp;</strong>are more likely to have overweight or obesity than heterosexual women.<a href="#references"><sup>3</sup></a></li>
</ul>

<p>Many factors play a role in overweight and obesity, including <a href="#5">your family background and events in the past</a> and <a href="#6">the place where you live</a>.</p>

<p>Talk to your doctor or nurse if you are worried about your weight. There are some risk factors for overweight and obesity that you can't control. But your doctor or nurse may recommend eating habits and physical activity to help you reach a healthier weight. Also, some medicines can cause weight gain or make it difficult to lose weight. If you think your medicine is affecting your weight, talk to your doctor or nurse. You may be able to try a different medicine.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What individual factors unique to me can make it more likely that I'll gain weight?",
      content: `

    <div class="answer"><p>Obesity is a complex disease that is the result of many different parts of a person's life that happen over a long period of time. Things that can affect your weight include:</p>

<ul>
	<li><strong>Genes</strong>&nbsp;<strong>and</strong>&nbsp;<strong>family background.</strong>&nbsp;Obesity tends to run in families. But there is not one “fat” gene. There are many genes that may work together to make you more likely to gain weight. The situation you live in also affects your genes. When you are a baby or young child, your parents or caregivers control your eating and physical activity. This family background can influence your weight as an adult.</li>
	<li><strong>Metabolism.</strong>&nbsp;People's metabolism rates (how fast your body “burns” calories) may vary for many reasons, and this can affect weight gain and loss. For instance, men usually have more muscle and less fat than women do, so men's bodies might burn more calories more quickly. A woman's metabolism may change throughout her life, such as with the hormonal changes that happen during puberty, pregnancy, and menopause.</li>
	<li><strong>Age.&nbsp;</strong>Your metabolism may slow down as you get older. Also, as we age, we lose muscle. With less muscle to burn calories, we need fewer calories.</li>
	<li><strong>Trauma.</strong>&nbsp;Many events in the past that you didn't have control over and are not your fault can affect when and how quickly you gain weight. Women who experience serious, negative events during childhood, such as abuse or a parent with a problem with alcohol or drugs, are more likely to have obesity as adults.<a href="#references"><sup>4,5</sup></a> Researchers have found that girls who are sexually abused may be more likely to gain weight faster as young adults and develop obesity at a younger age.<a href="#references"><sup>6,7</sup></a> Also, women who experience a traumatic event at any time and develop&nbsp;<a href="/mental-health/mental-health-conditions/post-traumatic-stress-disorder">post-traumatic stress disorder (PTSD)</a>&nbsp;may be more likely to gain weight quickly after the traumatic event and develop obesity.<a href="#references"><sup>8</sup></a></li>
	<li><strong>Medicines.</strong>&nbsp;Many of the medicines that women take every day, including medicines for mental health conditions, sleep, and high blood pressure, can cause weight gain or make it difficult to lose weight. If you take any prescription medicine and have extra weight, talk to the doctor or nurse who prescribed the medicine about the best ways to safely lose weight and possible alternatives to that prescription medicine.</li>
	<li><strong>Sleep.</strong>&nbsp;Not getting enough high-quality <a href="/mental-health/good-mental-health/sleep-and-your-health/">sleep</a> can lead to weight gain.<a href="#references"><sup>9</sup></a>&nbsp;Researchers think this may be because low-quality sleep can affect your hormone levels, which can affect your appetite and food choices. Not getting enough sleep to feel rested may also affect how much physical activity or exercise you get throughout the day.<a href="#references"><sup>10</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How can the place where I live make it more likely that I'll gain weight?",
      content: `

    <div class="answer"><p>Many parts of our everyday lives may make weight gain very common. These include:</p>

<ul>
	<li><strong>Neighborhoods.&nbsp;</strong>How easy or safe is it to walk and be physically active? Some neighborhoods don't have sidewalks or parks. It may not be safe to walk around outside in other neighborhoods. Some places where people live have so much traffic that it may be difficult for people with disabilities to get around outside.</li>
	<li><strong>Healthy food availability.&nbsp;</strong>Are healthy food options close to where you live, work, or go to school? Many people do not have low-cost, healthy food options where they live. Some people live near many fast-food restaurants but no grocery stores.&nbsp;</li>
	<li><strong>Pollution.</strong>&nbsp;Is there air pollution or other pollution where you live? Some researchers found that air pollution, including secondhand smoke, is linked to obesity.<a href="#references"><sup>11,12</sup></a>&nbsp;Some researchers think that chemicals from pollution in the food we eat can lead to obesity in the United States. Sometimes living close to highways or other busy roads may increase your chances of obesity.<a href="#references"><sup>13,14</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What are the health effects for women who are at an unhealthy weight? ",
      content: `

    <div class="answer"><p>Overweight and obesity indirectly cause millions of deaths each year.<a href="#references"><sup>15,16</sup></a> Having overweight or obesity raises your risk for many serious health problems:</p>

<ul>
	<li><strong>Breathing problems.</strong> Women who have overweight or obesity may develop sleep apnea.<a href="#references"><sup>17</sup></a> Sleep apnea causes you to stop breathing briefly or to take shallow breaths while you sleep. It may be caused by fat in the neck that narrows the airways. People with sleep apnea do not get enough oxygen to their brain or body during sleep. This can cause many health problems, including <a href="/heart-disease-and-stroke/heart-disease/heart-disease-risk-factors/health-conditions">heart disease</a>.</li>
	<li><strong>Many types of cancer.</strong> Women who have overweight or obesity are more at risk for 13 different kinds of <a href="/cancer">cancer</a>: breast, colon and rectal, endometrial, gallbladder, stomach, esophagus (throat), liver, kidney, meningioma (cancer of the tissue that covers the brain and spinal cord), multiple myeloma (cancer of blood plasma cells), pancreatic, ovarian, and thyroid cancers.<a href="#references"><sup>18</sup></a></li>
	<li><strong>Diabetes.</strong> Extra weight makes you twice as likely to get <a href="/a-z-topics/diabetes">diabetes</a>. Weight loss can prevent diabetes. It can also help control blood glucose if you already have diabetes and make you less likely to need medicine to control diabetes.<a href="#references"><sup>19</sup></a></li>
	<li><strong>Heart disease.</strong> The more excess weight you have, the higher your risk of <a href="/heart-disease-and-stroke/heart-disease/heart-disease-risk-factors/health-conditions">heart disease</a>, which is the leading cause of death of women in the United States.<a href="#references"><sup>20</sup></a> This is true even if you have no other health conditions that raise your risk of heart disease. Learn more about <a href="/heart-disease-and-stroke/heart-disease/heart-disease-risk-factors/health-conditions#3">how overweight and obesity affect your risk for heart disease</a>.</li>
	<li><strong>High blood pressure.</strong> Compared with women who do not have overweight or obesity, women with overweight are twice as likely to have high blood pressure. Women with obesity are three times as likely to have it.<sup>19</sup> Losing weight helps reduce blood pressure. High blood pressure damages your arteries and can lead to many other serious health problems such as stroke and heart disease.</li>
	<li><strong>High cholesterol.</strong> Excess fat sends chemical signals that change how your body processes food. It raises LDL (bad) <a href="/glossary#cholesterol">cholesterol</a> and lowers HDL (good) cholesterol. This speeds the buildup of fatty plaque in our arteries. Losing weight can help get cholesterol to healthy levels. High LDL cholesterol can cause heart disease and other serious health problems.</li>
	<li><strong>Pregnancy </strong><strong>problems.</strong> If you have overweight or obesity, it may be <a href="/healthy-weight/weight-fertility-and-pregnancy">more difficult to get pregnant</a>. Overweight and obesity can also cause <a href="/pregnancy/youre-pregnant-now-what/pregnancy-complications">complications during pregnancy</a>, such as gestational diabetes or dangerously high blood pressure. Obesity can also cause a more serious condition called <a href="/glossary#preeclampsia">preeclampsia</a>. Getting early and regular <a href="/a-z-topics/prenatal-care">prenatal care</a> can help you and your doctor be aware of any problems and help prevent them.</li>
	<li><strong>Stroke.</strong> Having overweight or obesity increases your risk of <a href="/heart-disease-and-stroke/stroke">stroke</a>, especially when you <a href="#8">carry extra body fat around your waist</a> (apple-shaped body) rather than around your hips and thighs (pear-shaped body). Learn more about how excess weight can raise your risk for stroke.</li>
</ul>

<p>Even a small amount of weight loss (3% to 5% of your body weight or less) can help lower your risk for these health problems. If you are a 160-pound woman, losing just 5 to 8 pounds, or 3% to 5% of your body weight, can make you healthier. Talk to your doctor or nurse about your risk and how much weight you may need to lose.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does it matter where on my body I carry the weight?",
      content: `

    <div class="answer"><p><img alt="Illustration of a woman with an " apple-shaped="" data-entity-type="" data-entity-uuid="" src="null"></p>

<p>Yes. Where you carry your weight makes a difference in your health. Belly fat is more dangerous for your health than fat carried elsewhere.</p>

<p><strong>Apple-shaped and pear-shaped body types</strong></p>

<p>Some women tend to carry fat in the belly area (apple-shaped). Other women tend to carry fat in their hips and thighs (pear-shaped). Extra weight is never healthy, but being apple-shaped increases your risk for certain health problems, such as heart disease, type 2 diabetes, and colorectal cancer, more than being pear-shaped does.<a href="#references"><sup>21</sup></a> That is because the type of fat your body stores in your abdomen, near your stomach, is different from the type of fat stored in your thighs and hips.</p>

<p>BMI tells you about how much fat you have on your body, but it does not show where you carry your weight. To measure your waist size, stand up straight and place a tape measure around your middle, just above your hip bones. Measure your waist just after you breathe out.</p>

<p>Most women should aim for a&nbsp;<strong>waist size of less than 35 inches.</strong></p>

<p>Of course, this does not mean that if you carry your weight in your hips you should not worry. It's important for&nbsp;<em>all&nbsp;</em>women — no matter where you carry your weight — to be physically active and eat healthy to lower your risk for health problems.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "When should I talk to a doctor or nurse about my weight?",
      content: `

    <div class="answer"><p>If you are worried about your weight, or if you have overweight or obesity, talk to your doctor or nurse. Your weight can raise your risk for many health problems and make it harder to get pregnant.</p>

<p>Your doctor or nurse may suggest healthy eating changes and more physical activity to help you reach a healthy weight.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about weight and obesity?",
      content: `

    <div class="answer"><p>For more information about weight and obesity, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://win.niddk.nih.gov/publications/health_risks.htm" target="_blank">Health Risks of Being Overweight</a>&nbsp;— Information from the National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK).</li>
	<li><a href="https://www.niddk.nih.gov/health-information/weight-management/health-tips-african-americans">Health Tips for African-Americans</a> — Healthy weight resource from NIDDK.</li>
	<li><a href="http://www.cdc.gov/healthyweight/" target="_blank">Healthy Weight&nbsp;</a>— Information for women from the Centers for Disease Control and Prevention.</li>
	<li><a href="http://www.nichd.nih.gov/health/topics/obesity/Pages/default.aspx" target="_blank">Obesity and Overweight</a>&nbsp;— Information from the&nbsp;<em>Eunice Kennedy Shriver&nbsp;</em>National Institute of Child Health and Human Development.</li>
	<li><a href="http://www.nhlbi.nih.gov/health/health-topics/topics/obe/" target="_blank">Overweight and Obesity</a>&nbsp;— Information from the National Heart, Lung, and Blood Institute.</li>
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
	<li>Centers for Disease Control and Prevention (CDC) National Center for Health Statistics (NCHS). (2018).&nbsp;<a href="https://www.cdc.gov/nchs/hus/contents2017.htm#Table_058" target="_blank">Health, United States, 2017: With Chartbook on Long-term Trends in Health, Table 58</a>. Hyattsville, MD.</li>
	<li>Flint, A.J., Rexrode, K.M., Hu, F.B., Glynn, R.J., Caspard, H., Manson, J.E., et al. (2010).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2992336/" target="_blank">Body mass index, waist circumference, and risk of coronary heart disease: a prospective study among men and women.</a> <em>Obesity Research and Clinical Practice;&nbsp;</em>4(3): e171-e181.</li>
	<li>Newlin Lew, K., Dorsen, C., Melkus, G. D., &amp; Maclean, M. (2018). <a href="https://journals.sagepub.com/doi/abs/10.1177/0145721718776599" class="external-link external-popup" target="_blank">Prevalence of obesity, prediabetes, and diabetes in sexual minority women of diverse races/ethnicities: Findings from the 2014-2015 BRFSS surveys <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>The Diabetes Educator</em>; 44(4): 348-360.</li>
	<li>Williamson, D.F., Thompson, T.J., Anda, R.F., Dietz, W.H., Felitti, V.J. (2002).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/12119573" target="_blank">Body weight, obesity, and self-reported abuse in childhood</a>.&nbsp;<em>International Journal of Obesity</em>; 26(8):1075–1082.</li>
	<li>Alvarez, J., Pavao, J., Baumrind, N., Kimerling, R. (2007).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/17572308" target="_blank">The relationship between childhood abuse and adult obesity among Californian women</a>.&nbsp;<em>American Journal of Preventive Medicine</em>; 33(1): 28-33.</li>
	<li>Smith, H. A., Markovic, N., Danielson, M. E., Matthews, A., Youk, A., Talbott, E. O., et al. (2010).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2941402/" target="_blank">Sexual Abuse, Sexual Orientation, and Obesity in Women</a>.&nbsp;<em>Journal of Women's Health;</em>&nbsp;19(8): 1525-1532</li>
	<li>Noll, J. G., Zeller, M. H., Trickett, P. K., Putnam, F. W. (2007).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/17606550" target="_blank">Obesity Risk for Female Victims of Childhood Sexual Abuse: A Prospective Study</a>.&nbsp;<em>Pediatrics;</em>&nbsp;120(1): e61-e67.</li>
	<li>Kubzansky, L. D., Bordelois, P., Jun, H. J., Roberts, A. L., Cerda, M., Bluestone, N., et al. (2014).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4091890/" target="_blank">The Weight of Traumatic Stress: A Prospective Study of Posttraumatic Stress Disorder Symptoms and Weight Status in Women</a>.&nbsp;<em>JAMA Psychiatry;</em>&nbsp;71(1): 44-51.</li>
	<li>Chaput, J.P., Després, J.P., Bouchard, C., Tremblay, A. (2007).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/17228054" target="_blank">Short Sleep Duration Is Associated with Reduced Leptin Levels and Increased Adiposity: Results from the Quebec Family Study</a>.&nbsp;<em>Obesity (Silver Spring);</em>&nbsp;15(1): 253-261.</li>
	<li>Patel, S.R. (2009).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/19849803" target="_blank">Reduced sleep as an obesity risk factor.</a>&nbsp;<em>Obesity Reviews</em>, 10 (Supplement 2): 61–68.</li>
	<li>Moore, B. F., Clark, M. L., Bachand, A., Reynolds, S. J., Nelson, T. L., &amp; Peel, J. L. (2016).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/26713774" target="_blank">Interactions between diet and exposure to secondhand smoke on the prevalence of childhood obesity: Results from NHANES, 2007–2010</a>.&nbsp;<em>Environmental Health Perspectives</em>, 124(8), 1316–1322.</li>
	<li>Kermah, D., Shaheen, M., Pan, D., &amp; Friedman, T. C. (2017).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/28405342" target="_blank">Association between secondhand smoke and obesity and glucose abnormalities: Data from the National Health and Nutrition Examination Survey (NHANES 1999–2010)</a>.&nbsp;<em>BMJ Open Diabetes Research &amp; Care</em>, 5(1), e000324.</li>
	<li>Zong, G., Grandjean, P., Wu, H., Sun, Q. (2015).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/26237202" target="_blank">Circulating Persistent Organic Pollutants and Body Fat Distribution: Evidence from NHANES 1999–2004</a>.&nbsp;<em>Obesity (Silver Spring);</em>&nbsp;23(9): 1903-1910</li>
	<li>Wang, Y., Hollis-Hansen, K., Ren, X., Qiu, Y., and Qu, W. (2016).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/27706898" target="_blank">Do environmental pollutants increase obesity risk in humans?</a>&nbsp;<em>Obesity Reviews</em>, 17: 1179–1197.</li>
	<li>The Global BMI Mortality Collaboration. (2016).&nbsp;<a href="http://www.thelancet.com/journals/lancet/article/PIIS0140-6736(16)30175-1/abstract" target="_blank" class="external-link external-popup">Body-mass index and all-cause mortality: individual-participant-data meta-analysis of 239 prospective studies in four continents <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>Lancet;</em>&nbsp;388(10046): 776-786</li>
	<li>Aune, D., Sen, A., Prasad, M., Norat, T., Janszky, I., Tonstad, S., et al. (2016).&nbsp;<a href="http://www.bmj.com/content/353/bmj.i2156" target="_blank" class="external-link external-popup">BMI and all cause mortality: systemic review and non-linear dose-response meta-analysis of 230 cohort studies with 3.74 million participants <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>BMJ;</em>&nbsp;353: i2156.</li>
	<li>Drager, L.F., Togeiro, S.M., Polotsky, V.Y., Lorenzi-Filho, G. (2013).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/23770180" target="_blank">Obstructive sleep apnea: A cardiometabolic risk in obesity and the metabolic syndrome</a>.&nbsp;<em>Journal of the American College of Cardiology</em>; 62(7): 569–576.</li>
	<li>Steele, C.B., Thomas, C.C., Henley, S.J., Massetti, G.M., Galuska, D. A., et al. (2017).&nbsp;<a href="http://dx.doi.org/10.15585/mmwr.mm6639e1" target="_blank" class="external-link external-popup">Vital Signs: Trends in Incidence of Cancers Associated with Overweight and Obesity — United States, 2005–2014 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>Morbidity and Mortality Weekly Report (MMWR)</em>; 66(39):1052–1058.</li>
	<li>Janssen, I., Katzmarzyk, P.T, Ross, R. (2002).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/12374515" target="_blank">Body Mass Index, Waist Circumference, and Health Risk: Evidence in Support of Current National Institutes of Health Guidelines</a><em>.</em>&nbsp;<em>Archives of Internal Medicine;</em>162(18): 2074-2079.</li>
	<li>Wilson, P.W., D'Agostino, R.B., Sullivan, L., Parise, H., Kannel, W.B. (2002).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/12196085" target="_blank">Overweight and Obesity as Determinants of Cardiovascular Risk: The Framingham Experience.</a>&nbsp;<em>Archives of Internal Medicine;</em>&nbsp;162(16): 1867-1872.</li>
	<li>Folsom, A.R., Kushi, L.H., Anderson, K.E., Mink, P.J., Olson, J.E., Hong, C.P., et al. (2000).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/10904454" target="_blank">Associations of General and Abdominal Obesity with Multiple Health Outcomes in Older Women: The Iowa Women's Health Study</a><em>.</em>&nbsp;<em>Archives of Internal Medicine;</em>&nbsp;160(14): 2117-2128.</li>
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
