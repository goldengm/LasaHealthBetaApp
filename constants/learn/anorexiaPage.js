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

export function anorexiaPage({ navigation, ...rest }) {
  const condName = "Anorexia nervosa";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Anorexianervosa.jpg?VersionId=RtRNl.dZNk27X8kufk1CAeS6xan3dano";
  const condDescription =
    "Anorexia nervosa, often called anorexia, is a type of eating disorder. Eating disorders are mental health problems that cause extreme and dangerous eating behaviors. These extreme eating behaviors cause other serious health problems and sometimes death. Some eating disorders also involve extreme exercise.\n\n Women with anorexia severely limit the amount of food they eat to prevent weight gain. People with anorexia usually have an intense fear of gaining weight and may think they are fat even when they are thin. Women with anorexia may also exercise too much so that they do not gain weight. Over time, eating so little food leads to serious health problems and sometimes death.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Anorexianervosa.jpg?VersionId=RtRNl.dZNk27X8kufk1CAeS6xan3dano"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Anorexia nervosa</h1>  -->
            <p><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="an-uh-RECK-see-uh nur-VOH-suh">Anorexia nervosa</a>, often called anorexia, is a type of eating disorder.</strong> People with anorexia eat so little that they have unhealthy weight loss and become dangerously thin. They may think they are overweight or fat even when they are underweight or thin. Anorexia affects more girls and women than boys and men. Anorexia is a serious health problem that can increase the risk of early death. But people with anorexia can get better with treatment.</p>

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
      title: "What is anorexia?",
      content: `

    <div class="answer"><p>Anorexia nervosa, often called anorexia, is a type of eating disorder. Eating disorders are mental health problems that cause extreme and dangerous eating behaviors. These extreme eating behaviors cause other serious health problems and sometimes death. Some eating disorders also involve extreme exercise.</p>

<p>Women with anorexia severely limit the amount of food they eat to prevent weight gain. People with anorexia usually have an intense fear of gaining weight and may think they are fat even when they are thin. Women with anorexia may also exercise too much so that they do not gain weight. Over time, eating so little food leads to serious health problems and sometimes death.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What is the difference between anorexia and other eating disorders?",
      content: `

    <div class="answer"><p>Women with eating disorders, such as anorexia,&nbsp;<a href="/mental-health/mental-health-conditions/eating-disorders/bulimia-nervosa">bulimia</a>, and&nbsp;<a href="/mental-health/mental-health-conditions/eating-disorders/binge-eating-disorder">binge eating disorder</a>, have a mental health condition that affects how they eat, and sometimes how they exercise. These eating disorders threaten their health.</p>

<p>Unlike women with bulimia and binge eating disorder, girls and women with anorexia do not eat enough to sustain basic bodily functions.&nbsp;Women with bulimia and binge eating disorder usually binge, or eat too much while feeling out of control.</p>

<p>It is possible to have more than one eating disorder in your lifetime. Regardless of what type of eating disorder you may have, you can get better with treatment.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who is at risk for anorexia?",
      content: `

    <div class="answer"><p>Anorexia is more common among girls and women than boys and men.<a href="#references"><sup>1</sup></a></p>

<p>Anorexia is also more common among girls and younger women than older women. On average, girls develop anorexia at 16 or 17.<a href="#references"><sup>2</sup></a>&nbsp;Teen girls between 13 and 19 and young women in their early 20s are most at risk. But eating disorders are happening more often in older women. In one recent study, 13% of American women over 50 had signs of an eating disorder.<a href="#references"><sup>3</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of anorexia?",
      content: `

    <div class="answer"><p>Anorexia causes physical and psychological changes. A girl or woman with anorexia often looks very thin and may not act like herself.</p>

<p>Some other symptoms of anorexia include:</p>

<ul>
	<li>Sadness</li>
	<li>Moodiness</li>
	<li>Confused or slow thinking</li>
	<li>Poor memory or judgment</li>
	<li>Thin, brittle hair and nails</li>
	<li>Feeling cold all the time because of a drop in internal body temperature</li>
	<li>Feeling faint, dizzy, or weak</li>
	<li>Feeling tired or sluggish</li>
	<li>Irregular periods or never getting a period</li>
	<li>Dry, blotchy, or yellow skin</li>
	<li>Growth of fine hair all over the body (called lanugo)</li>
	<li>Severe constipation or bloating</li>
	<li>Weak muscles or swollen joints</li>
</ul>

<p>Girls or women with anorexia may also have behavior changes such as:</p>

<ul>
	<li>Talking about weight or food all the time</li>
	<li>Not eating or eating very little</li>
	<li>Refusing to eat in front of others</li>
	<li>Not wanting to go out with friends</li>
	<li>Making herself throw up</li>
	<li>Taking laxatives or diet pills</li>
	<li>Exercising a lot</li>
</ul>

<p>People with anorexia may also have other health problems, including depression, anxiety, or substance abuse.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes anorexia?",
      content: `

    <div class="answer"><p>Researchers are not sure exactly what causes anorexia and other eating disorders. Researchers think that eating disorders might happen because of a combination of a person’s biology and life events. This combination includes having specific genes, a person’s biology, body image and self-esteem, social experiences, family health history, and sometimes other mental health illnesses.&nbsp;&nbsp;</p>

<p>Researchers are also studying unusual activity in the brain, such as changing levels of serotonin or other chemicals, to see how it may affect eating. Learn more about&nbsp;<a href="https://clinicaltrials.gov/ct2/results?term=anorexia&amp;recr=Open" target="_blank" title=" Search of: anorexia">current research</a>&nbsp;on anorexia.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does anorexia affect a woman’s health?",
      content: `

    <div class="answer"><p>With anorexia, your body doesn’t get the energy that it needs from food, so it slows down and stops working normally. Over time, anorexia can affect your body in the following ways:<a href="#references"><sup>4</sup></a></p>

<ul>
	<li>Heart problems, including low blood pressure, a slower heart rate, irregular heartbeat, heart attack, and sudden death from heart problems<a href="#references"><sup>5</sup></a></li>
	<li>Anemia (when your red blood cells do not carry enough oxygen to your body) and other blood problems</li>
	<li>Thinning of the bones (osteopenia or osteoporosis)</li>
	<li>Kidney stones or kidney failure</li>
	<li>Lack of periods, which can cause problems getting pregnant</li>
	<li>During pregnancy, a higher risk for miscarriage, cesarean delivery, or having a baby with low birth weight</li>
</ul>

<p>Anorexia is a serious illness that can also lead to death. Studies have found that more women and girls die from anorexia than any other eating disorder or serious mental health problem such as depression.<a href="#references"><sup>6</sup></a>&nbsp;Many people with anorexia also have other mental health problems such as depression or anxiety.<a href="#references"><sup>7</sup></a><a href="/a-z-topics/anorexia-nervosa#references"><sup>,</sup></a><a href="#references"><sup>8</sup></a></p>

<p>Long-term studies of 20 years or more show that women who had an eating disorder in the past usually reach and maintain a healthy weight after treatment.<a href="#references"><sup>9</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is anorexia diagnosed?",
      content: `

    <div class="answer"><p>Your doctor or nurse will ask you questions about your symptoms and medical history. It may be difficult to talk to a doctor or nurse about secret eating or exercise behaviors. But doctors and nurses want to help you be healthy. Being honest about your eating and exercise behaviors with a doctor or nurse is a good way to ask for help.</p>

<p>Your doctor will do a physical exam and other tests, such as blood tests and a urine test, to rule out other health problems that may cause severe weight loss.</p>

<p>Your doctor may also do other tests, such as kidney function tests, bone density tests, or an electrocardiogram (ECG or EKG), to see if or how severe weight loss has affected your health.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is anorexia treated?",
      content: `

    <div class="answer"><p>Your doctor may refer you to a team of doctors, nutritionists, and therapists who will work to help you get better. If you live with family members they may be invited to participate in some of your treatment.</p>

<p>Treatment plans may include one or more of the following:</p>

<ul>
	<li><strong>Nutrition therapy</strong>. Doctors, nurses, and counselors will help you eat healthy to reach and maintain a healthy weight. Some girls or women may need to be hospitalized or participate in a residential treatment program (live temporarily at a medical facility) to make sure they eat enough to recover. Hospitalization may also be required to monitor any heart problems in people with anorexia. Reaching a healthy weight is a key part of the recovery process so that your body's biology, including thoughts and feelings in your brain, work correctly.</li>
	<li><strong>Psychotherapy.</strong>&nbsp;Sometimes called "talk therapy," psychotherapy is counseling to help you change any harmful thoughts or behaviors. This therapy may focus on the importance of talking about your feelings and how they affect what you do. You may work one-on-one with a therapist or in a group with others who have anorexia. For girls with anorexia, counseling may involve the whole family.</li>
	<li><strong>Support groups</strong>&nbsp;can be helpful for some people with anorexia when added to other treatment<strong>.</strong>&nbsp;In support groups, girls or women and sometimes their families meet and share their stories.</li>
	<li><strong>Medicine.</strong>&nbsp;Studies suggest that medicines like antidepressants can help some girls and women with anorexia by improving the depression and anxiety symptoms that often go along with anorexia.</li>
</ul>

<p>Most girls and women do get better with treatment and are able to eat and exercise in healthy ways again.<sup><a href="#">10</a>&nbsp;</sup>Some may get better after the first treatment. Others get well but may relapse and need treatment again.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does anorexia affect pregnancy?",
      content: `

    <div class="answer"><p>Anorexia can cause problems getting pregnant and during pregnancy.</p>

<p>Extreme weight loss can cause missed menstrual periods because you may not&nbsp;<a href="/glossary#ovulation" title="glossary | womenshealth.gov">ovulate</a>, or release an egg from the ovary. When you do not weigh enough to ovulate, it is difficult to get pregnant. However, if you do not want to have children right now and you have sex, you should use birth control.</p>

<p>Anorexia can also cause problems during pregnancy. Anorexia raises your risk for:</p>

<ul>
	<li>Miscarriage (pregnancy loss)</li>
	<li>Premature birth (also called preterm birth), or childbirth before 37 weeks of pregnancy</li>
	<li>Delivery by cesarean section (C-section)</li>
	<li>Having a low birth weight baby (less than five pounds, eight ounces at birth)</li>
	<li>Depression after the baby is born (<a href="/mental-health/mental-health-conditions/postpartum-depression" title="glossary | womenshealth.gov">postpartum depression</a>)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "If I had an eating disorder in the past, can I still get pregnant?",
      content: `

    <div class="answer"><p>Yes. Women who have recovered from anorexia, are at a healthy weight, and have normal menstrual cycles have a better chance of getting&nbsp;<a href="/pregnancy/" title="Pregnancy | womenshealth.gov">pregnant</a>&nbsp;and having a safe and healthy pregnancy.</p>

<p>If you had an eating disorder in the past, it may take you a little longer to get pregnant (about six months to a year) compared to women who never had an eating disorder.<a href="#references"><sup>11</sup></a></p>

<p>Tell your doctor if you had an eating disorder in the past and are trying to become pregnant.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "If I take medicine to treat anorexia, can I breastfeed my baby?",
      content: `

    <div class="answer"><p>Maybe. Some medicines used to treat anorexia can pass through breastmilk. Certain antidepressants can be used safely during breastfeeding.</p>

<p>Talk to your doctor to find out which medicine works best for you. Learn more about medicines and breastfeeding in our&nbsp;<a href="/breastfeeding/breastfeeding-home-work-and-public/breastfeeding-and-everyday-life/#9">Breastfeeding</a>&nbsp;section. You can also enter a medicine into the&nbsp;<a href="http://toxnet.nlm.nih.gov/newtoxnet/lactmed.htm" target="_blank" title="Drugs and Lactation Database (LactMed)">LactMed® database</a>&nbsp;to find out if the medicine passes through breastmilk and about any possible side effects for your nursing baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about anorexia?",
      content: `

    <div class="answer"><p>For more information about anorexia, call the OWH Helpline at 1-800-994-9662, or contact the following organizations:</p>

<ul>
	<li><a href="https://www.mentalhealth.gov/what-to-look-for/eating-disorders/anorexia">MentalHealth.gov</a></li>
	<li><a href="http://www.nimh.nih.gov/health/topics/eating-disorders/index.shtml">National Institute of Mental Health, NIH, HHS</a><br>
	Phone Number:&nbsp;866-615-6464</li>
	<li><a href="http://www.apa.org/" class="external-link external-popup" target="_blank">American Psychological Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 800-374-2721</li>
	<li><a href="http://www.anad.org/" class="external-link external-popup" target="_blank">National Association of Anorexia Nervosa and Associated Disorders <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 847-831-3438</li>
	<li><a href="http://www.nationaleatingdisorders.org/" class="external-link external-popup" target="_blank">National Eating Disorders Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
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
	<li>Smink, F. E., van Hoeken, D., &amp; Hoek, H. W. (2012). <a href="https://www.ncbi.nlm.nih.gov/pubmed/22644309">Epidemiology of eating disorders: Incidence, prevalence and mortality rates</a>. <em>Current Psychiatry Reports</em>;14(4):406-414.</li>
	<li>National Collaborating Centre for Mental Health (UK).<a href="https://www.ncbi.nlm.nih.gov/pubmedhealth/PMH0051873/"> Core Interventions in the Treatment and Management of Anorexia Nervosa, Bulimia Nervosa and Related Eating Disorders.</a> <em>NICE Clinical Guidelines</em>, No. 9. The British Psychological Society &amp; The Royal College of Psychiatrists: Leicester, UK; 2004.</li>
	<li>Gagne, D.A., et al. (2012). <a href="http://onlinelibrary.wiley.com/doi/10.1002/eat.22030/abstract" class="external-link external-popup" target="_blank">Eating disorder symptoms and weight and shape concerns in a large web-based convenience sample of women ages 50 and above: Results of the gender and body image (GABI) study <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>International Journal of Eating Disorders; </em>45(7):832-844.</li>
	<li value="4">Mehler, P.S., Brown, C. (2015). <a href="https://jeatdisord.biomedcentral.com/articles/10.1186/s40337-015-0040-8" class="external-link external-popup" target="_blank">Anorexia nervosa – medical complications. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Journal of Eating Disorders; </em>3:11.</li>
	<li value="5">Jauregui-Garrido, B., Jauregui-Lobera, I. (2012). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3292410/">Sudden death in eating disorders.</a> <em>Vasc Health Risk Manag</em> , 91–8.</li>
	<li value="6">Arcelus, J., et al. (2011). <a href="http://archpsyc.jamanetwork.com/article.aspx?articleid=1107207" class="external-link external-popup" target="_blank">Mortality rates in patients with anorexia nervosa and other eating disorders. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Archives of General Psychiatry</em>; 68(7):724-731.&nbsp;</li>
	<li value="7">Bulik, C.M., Sullivan, P.F., Carter, F.A., et al. (1996). <a href="https://www.ncbi.nlm.nih.gov/pubmed/8879912">Lifetime anxiety disorders in women with bulimia nervosa</a>.&nbsp;<em>Compr Psychiatry</em>; 37(5):368–74.&nbsp;</li>
	<li value="8">Smith, C., Steiner, H. (1992). <a href="https://www.ncbi.nlm.nih.gov/pubmed/1400114">Psychopathology in Anorexia Nervosa and Depression</a>.&nbsp;<em>J Am Acad Child Adolesc Psychiatry</em>; 31(5):841–3.&nbsp;</li>
	<li value="9">Murray, H. B., Tabri, N., Thomas, J. J., Herzog, D. B., Franko, D. L., Eddy, K. T. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/28188643">Will I get fat? 22-year weight trajectories of individuals with eating disorders</a>.<em> Int J Eat Disord</em>. Epub ahead of print.</li>
	<li value="10">Eddy, K. T., Tabri, N., Thomas, J. J., Murray, H. B., Keshaviah, A., Hastings, E., et al. (2017). <a href="http://www.ncbi.nlm.nih.gov/pubmed/28002660">Recovery from anorexia nervosa and bulimia nervosa at 22-year follow-up</a>. <em>J Clin Psychiatry, 78</em>(2), 184-189.</li>
	<li value="11">Easter, A., Treasure, J., Micali, N. (2011). <a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1471-0528.2011.03077.x/full" class="external-link external-popup" target="_blank">Fertility and prenatal attitudes towards pregnancy in women with eating disorders: results from the Avon Longitudinal Study of Parents and Children <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>BJOG</em>; 118:1491–1498.</li>
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
