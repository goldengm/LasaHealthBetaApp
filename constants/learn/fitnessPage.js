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

export function fitnessPage({ navigation, ...rest }) {
  const condName = "Fitness";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Physicalactivityandyourmenstrualcycle.jpg?VersionId=BOcnEphE4IySk44sZvrYE9A4c69JWyeI";
  const condDescription =
    "Being physically active is one of the most important steps you can take to get and stay healthy. Women of all ages and abilities benefit from getting active. Everyone should try to be active for at least 30 minutes every day. Physical activity, or exercise, will help you feel better and be healthier.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Howtobeactiveforhealth.jpg?VersionId=HNrPTHtSYl.Oa80VNbeNWAD7zJ.tDnwi"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>How to be active for health</h1>  -->
            <p><strong>Regular physical activity (exercise) can help lower your risk for many diseases</strong> that affect women, including <a href="/heart-disease-and-stroke/heart-disease">heart disease</a> and <a href="/heart-disease-and-stroke/stroke">stroke</a>. Exercise can also help relieve symptoms of some conditions, such as depression, type 2 diabetes, and high blood pressure. Women need to do different types of physical activities to reach or stay at a healthy weight and build strength and endurance.</p>

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
      title: "How can physical activity help my health? ",
      content: `

    <div class="answer expanded"><p>Getting regular physical activity is one of the best things you can do for your health. Regular physical activity can help:<a href="#references"><sup>1</sup></a></p>

<ul>
	<li>Lower your blood pressure and cholesterol</li>
	<li>Lower your risk of dying early</li>
	<li>Help you lose weight (if you combine it with cutting calories) or keep your weight where it is as you get older</li>
	<li>Improve depression</li>
	<li>Improve sleep</li>
	<li>Lower your risk of diseases such as breast cancer, colon cancer, type 2 diabetes, heart disease, and stroke</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can physical activity help my health as I age?",
      content: `

    <div class="answer"><p>Physical activity can help with your health when you get older. Regular physical activity helps:</p>

<ul>
	<li>Keep bones strong</li>
	<li>Prevent hip fracture (breaking your hip)</li>
	<li>Decrease pain from arthritis</li>
	<li>Prevent dementia</li>
	<li>Maintain the independence to do basic everyday activities, like getting dressed, going to the bathroom, bathing, and eating</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How much physical activity should I do?",
      content: `

    <div class="answer"><p>Researchers know that the more physical activity you do, the more your health benefits. The more time you spend being active each week, the lower your risk is for dying early.<a href="#references"><sup>1</sup></a></p>

<p>The <a href="http://www.health.gov/PAGuidelines/">Physical Activity Guidelines</a> suggest that <strong>each week</strong>, women get at least:</p>

<ul>
	<li>2 hours and 30 minutes (150 minutes) of moderate-intensity aerobic physical activity. You know you are doing a moderate-intensity activity when your heart is beating faster but you can still carry on a conversation. Try a brisk, 30-minute walk five times a week.</li>
</ul>

<p class="rteindent1"><strong>OR</strong></p>

<ul>
	<li>1 hour and 15 minutes (75 minutes) of vigorous-intensity aerobic activity. You know you are doing a vigorous-intensity physical activity when you are breathing hard and it is difficult to have a conversation. This could be a 40-minute jog or step class twice a week.</li>
</ul>

<p class="rteindent1"><strong>OR</strong></p>

<ul>
	<li>A combination of moderate- and vigorous-intensity aerobic activity</li>
</ul>

<p class="rteindent1"><strong>AND</strong></p>

<ul>
	<li>Muscle-strengthening activities on two or more days</li>
</ul>

<p>You should aim for these amounts, but any physical activity is better than no physical activity. Try to spread your activity out over the week so that you are active on at least three days. You need to be active for at least 10 minutes at a time to get health benefits.</p>

<p>Physical activity should be in addition to the normal activities of daily living, such as cleaning, walking from the parking lot, or taking public transportation.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I exercise if I have underweight, overweight, or obesity? ",
      content: `

    <div class="answer"><p>Maybe. People who are <a href="/healthy-weight/underweight">underweight</a>&nbsp;due to an eating disorder should not exercise unless their doctor tells them to. Your doctor or nurse can help you develop an exercise plan that is healthy and safe for a person of your current weight.</p>

<p>Women who have overweight or obesity should talk to their doctor or nurse about any concerns they have about beginning an exercise program. For most people, any amount or type of physical activity will help your overall health. Physical activity can also improve muscle strength, balance, and flexibility.<a href="#references"><sup>1</sup></a></p>

<p>Check out these <a href="/getting-active/physical-activity-all-women">tips for getting started</a>, and talk to your doctor or nurse about a plan that is right for you based on your fitness level.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I exercise if I never have before?",
      content: `

    <div class="answer"><p>Yes. Start slowly if you haven’t been physically active before or if it has been a while. Talk to your doctor or nurse about exercise if you have a health condition.</p>

<p>Check out these <a href="/getting-active/physical-activity-all-women#2">tips for getting started</a>. Also, talk to your doctor or nurse about ways you can fit physical activity into your life.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How much physical activity do I need to lose weight?",
      content: `

    <div class="answer"><p>Everyone is different. How quickly you burn calories when you are physically active can be very different from other people, based on your <a href="/healthy-weight/weight-and-obesity#3">specific genes, biology, and past</a>. While scientists know that there are 3,500 calories in a pound, burning 500 extra calories every day (or 3,500 calories in a week) does not always result in losing exactly one pound. This is also true if you eat 500 fewer calories every day for a week, for a total of 3,500 fewer calories in one week.</p>

<p>Find a personalized healthy eating plan using the&nbsp;<a href="https://www.choosemyplate.gov/MyPlatePlan">MyPlate Plan</a>&nbsp;tool. The best way to lose weight is to combine healthy eating with exercise.</p>

<p>Learn more about <a href="/healthy-weight/weight-loss-and-women">losing weight with regular physical activity and healthy eating</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How much physical activity should I do if I’m trying to avoid weight gain?",
      content: `

    <div class="answer"><p>Everyone is different. Physical activity is important to help you maintain your weight. But the amount of physical activity you need to stay the same weight depends on your <a href="/healthy-weight/weight-and-obesity#3">specific genes, biology, past</a>, and age.</p>

<p>Some women can maintain their weight by doing five hours or less of moderate-intensity activity a week. Some women may need to do more than five hours of moderate-intensity activity a week to stay at the same weight.<a href="#references"><sup>2</sup></a></p>

<p>Talk to your doctor or nurse about how much physical activity you need and how to do it safely.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I avoid gaining weight after menopause?",
      content: `

    <div class="answer"><p>As you age, and especially in the years after menopause, you may find it harder to maintain your weight. You may need to increase the amount of physical activity you get and lower how many calories you eat to stay the same weight. Learn more about <a href="/healthy-weight/weight-loss-and-women#6">avoiding weight gain after menopause</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What types of physical activity should I do to be healthy or lose weight?",
      content: `

    <div class="answer"><p>You should do two types of physical activities on a regular basis: aerobic and muscle-strengthening activities.</p>

<h3>Aerobic activities</h3>

<p>Aerobic activities (also called “cardio”) make you breathe harder and your heart beat faster. During aerobic activities, such as running or dancing, you move your whole body, or a combination of arms and legs, over and over again.</p>

<p>Watch this <a href="https://www.youtube.com/watch?v=GEvJlmpZCoM" title="Physical Activity Guidelines - What Counts As Aerobic?" class="external-link external-popup" target="_blank">video <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> from the Centers for Disease Control and Prevention (CDC) to learn more about aerobic activities.</p>

<h3>Muscle-strengthening activities</h3>

<p>Muscle-strengthening activities include working out with weight machines, free weights, or exercise bands. You also can do exercises that use your own body weight to create resistance, such as yoga, sit-ups, or push-ups.</p>

<p>The muscle you build helps you have the strength to do daily activities, such as climbing stairs or carrying groceries.</p>

<p>During strength training, you should do different exercises to work all the major muscle groups of your body (legs, hips, back, chest, abdomen, shoulders, and arms). You should try to do muscle-strengthening activities on two or more days each week. Allow one day in between sessions to avoid too much stress on your muscles and joints.</p>

<p>Watch <a href="http://www.cdc.gov/physicalactivity/everyone/videos/index.html" title="Physical Activity: Videos">these videos</a>&nbsp;from the CDC to learn more about muscle-strengthening activities you can do at home or at the gym.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Will I bulk up too much if I do weightlifting or strength training? ",
      content: `

    <div class="answer"><p>Many women do not do any type of muscle-strengthening exercise because they are afraid of becoming too muscular. But women’s bodies are different from men’s bodies. Women naturally have more body fat and less muscle. Unless you are a professional bodybuilder or athlete, it is very unlikely that you would become more muscular or bulky than you would like from strength training.</p>

<p>Strength training or weightlifting is very healthy for most women.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about physical activity and women? ",
      content: `

    <div class="answer"><p>For more information about how to be active for your health, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://www.health.gov/paguidelines/default.aspx" title="Physical Activity Guidelines">2008 Physical Activity Guidelines for Americans</a>&nbsp;— The latest available official guide for Americans with the recommended amount of physical activity that adults and children should do weekly.</li>
	<li><a href="http://www.cdc.gov/nccdphp/dnpa/physical/pdf/PA_Intensity_table_2_1.pdf">General Physical Activities Defined by Level of Intensity</a> (PDF, 65 KB) — Information from the Centers for Disease Control and Prevention (CDC).</li>
	<li><a href="http://www.cdc.gov/physicalactivity/everyone/videos/index.html" title="Physical Activity Guidelines">Physical Activity for Everyone: Videos</a>&nbsp;— Videos on physical activity from the CDC.</li>
	<li><a href="http://www.heart.org/HEARTORG/Conditions/More/CardiacRehab/Strength-and-Balance-Exercises_UCM_307384_Article.jsp" class="external-link external-popup" target="_blank">Strength and Balance Exercises <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Exercises from the American Heart Association.</li>
	<li><a href="http://win.niddk.nih.gov/publications/walking.htm">Walking: A Step in the Right Direction</a>&nbsp;— Publication on walking programs from the National Institute of Diabetes and Digestive and Kidney Diseases.</li>
	<li><a href="http://www.aafp.org/afp/2003/0115/p371.html" class="external-link external-popup" target="_blank">Weight-Training and Weight-Lifting Safety <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Fact sheet from the American Academy of Family Physicians.</li>
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
	<li>U.S. Department of Health and Human Services. (2008). <a href="https://health.gov/paguidelines/guidelines/chapter2.aspx">Physical Activity Guidelines for Americans: Physical Activity Has Many Health Benefits, Chapter 2.</a></li>
	<li>U.S. Department of Health and Human Services. (2008). <a href="https://health.gov/paguidelines/guidelines/chapter4.aspx">Physical Activity Guidelines for Americans: Active Adults, Chapter 4.</a></li>
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
