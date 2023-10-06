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

export function getActivePage({ navigation, ...rest }) {
  const condName = "Getting Active";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Howtobeactiveforhealth.jpg?VersionId=HNrPTHtSYl.Oa80VNbeNWAD7zJ.tDnwi";
  const condDescription =
    "Being physically active is one of the most important steps you can take to get and stay healthy. Women of all ages and abilities benefit from getting active. Everyone should try to be active for at least 30 minutes every day. Physical activity, or exercise, will help you feel better and be healthier.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Physicalactivityforallwomen.jpg?VersionId=54LS_KTm7X62GOmQvReld4OeTpsZInS6"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Physical activity for all women</h1>  -->
            <p><strong>Physical activity is important for all women throughout their lives.</strong> Read on for ways you can change your physical activity routine to fit your needs based on your age, stage of life, or physical abilities.</p>

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
      title: "Physical activity for every woman",
      content: `

    <div class="answer"><p>Regular physical activity benefits your health. Any physical activity is better than no physical activity. The <a href="https://health.gov/PAGuidelines/">Physical Activity Guidelines</a> can help you plan <a href="/getting-active/how-be-active-health#3">how much physical activity to do</a> each week. Learn <a href="#2">ways to get started</a> and talk to your doctor or nurse about how to fit physical activity into your life.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Physical activity for larger women ",
      content: `

    <div class="answer expanded"><p>Carrying extra weight can make moving around much more difficult.</p>

<p>If you have <a href="/healthy-weight/weight-and-obesity">overweight or obesity</a>&nbsp;and you want to begin exercising, start slowly by moving more around your home. Try doing stretches or lifting weights while watching TV. You can lift cans of food, jugs of water, or other household items as weights.</p>

<p>Walking in a safe place near where you live is a great way to begin getting more exercise or physical activity for women of any age or shape. You don’t need special clothes or sports equipment, just comfortable walking shoes. Start with 10-minute walks at a comfortable pace (you can still breathe normally and talk while walking) at least three days a week. Add more minutes of walking and increase how fast you walk as your body gets used to the activity.</p>

<p>Here are some tips to get you started:</p>

<ul>
	<li><strong>Get moving at home.</strong> You don’t have to leave your house to be active. Try a free on-demand workout video, a free online workout video, or a DVD from your local library.</li>
	<li><strong>Choose activities like swimming or riding a stationary bike</strong> <strong>if your feet or joints hurt when you stand.</strong> These activities put less stress on your joints because your legs are not supporting the weight of your body. Ask your doctor or nurse for help in coming up with a physical activity plan that is right for you.</li>
	<li><strong>Physical activity does not have to be hard or boring to be good for you.</strong> Anything that gets you moving — even for only a few minutes a day — is a great start. Being physically active on a regular basis can make a big difference in your health.</li>
</ul>

<p>Find more information about <a href="http://win.niddk.nih.gov/publications/active.htm" title="Staying Active at Any Size">how to be active at any size</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Physical activity for older women",
      content: `

    <div class="answer"><p>As you get older, it’s important to stay active. Regular physical activity can help keep you healthy and strong. Physical activity offers many benefits for older women:<a href="#references"><sup>1</sup></a><sup>,</sup><a href="#references"><sup>2</sup></a></p>

<ul>
	<li>Preventing muscle and bone loss</li>
	<li>Reducing the risk of falling and breaking bones</li>
	<li>Helping prevent or delay conditions like diabetes and heart disease</li>
	<li>Reducing the joint swelling and pain of arthritis</li>
	<li>Reducing symptoms of anxiety and depression</li>
	<li>Helping make you feel good and enjoy life more</li>
	<li>Helping you stay independent longer</li>
</ul>

<p>All women of all ages, shapes, and abilities should get at least 2 hours and 30 minutes each week of moderate-intensity <a href="/getting-active/how-be-active-health#9">aerobic physical activity</a>. You also need muscle-strengthening activities on at least two days each week.</p>

<p>Balance exercises are important for all women, but especially older women who are at a higher risk of falls. This includes women who have had falls in the recent past or have trouble walking. Researchers know that doing balance and muscle-strengthening activities for at least 1 hour and 30 minutes a week helps lower the chance that you will fall down and hurt yourself. Examples of these exercises include tai chi, walking backward, and standing from a sitting position.<a href="#references"><sup>3</sup></a></p>

<p>Getting active can help you live a longer, healthier life. Learn <a href="https://go4life.nia.nih.gov/exercises/flexibility" title="Try These Exercises">exercises and stretches</a> you can do at any age to improve your health.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Physical activity for women with disabilities",
      content: `

    <div class="answer"><p>A disability may make it harder to stay active, but there are still many ways to be physically active. There are also many reasons why being physically active is important if you have a disability.</p>

<p>Physical activity helps with flexibility, mobility, and coordination. Getting regular physical activity can also help you stay independent by preventing health problems, such as <a href="/heart-disease-and-stroke/heart-disease">heart disease</a>, that can make it harder for you to take care of yourself.</p>

<p>Benefits of physical activity for women with disabilities include:<a href="#references"><sup>4</sup></a></p>

<ul>
	<li>Helping lower the risk of heart disease, high blood pressure, colon cancer, and diabetes</li>
	<li>Helping improve your endurance and muscle strength, including toning muscles you may use less often because of your disability</li>
	<li>Reducing symptoms of anxiety and depression</li>
	<li>Reducing the joint swelling and pain of arthritis</li>
</ul>

<p>Women with disabilities should try to get the same amount of physical activity as all adults. That means getting at least 2 hours and 30 minutes each week of moderate-intensity <a href="/getting-active/how-be-active-health#9">aerobic physical activity</a>&nbsp;and two or more days each week of muscle-strengthening activities. <a href="http://www.nchpad.org/Articles/7/Disability~Condition" title="Disability/Condition" class="external-link external-popup" target="_blank">Get more information and see a list of exercises to try based on your abilities <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</p>

<p>Before you start, talk to your doctor, physical therapist, or exercise specialist about how you can modify physical activity to accommodate your disability.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Did we answer your question about physical activity for all women? ",
      content: `

    <div class="answer"><p>For more information about physical activity for all women, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://www.health.gov/paguidelines/guidelines/chapter5.aspx">Active Older Adults</a> — Information from the 2008 Physical Activity Guidelines for Americans.</li>
	<li><a href="http://www.nchpad.org/Articles/9/Exercise~and~Fitness" class="external-link external-popup" target="_blank">Exercise and Fitness <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Fact sheets on various exercises from the National Center on Health, Physical Activity and Disability (NCHPAD).</li>
	<li><a href="http://go4life.nia.nih.gov/">Go4Life</a> — Exercise and physical activity campaign from the National Institute on Aging.</li>
	<li><a href="http://www.health.gov/paguidelines/guidelines/chapter7.aspx" title="Additional Considerations for Some Adults">Physical Activity for People with Disabilities</a> — Information from the 2008 Physical Activity Guidelines for Americans.</li>
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
	<li>National Institute on Aging. (n.d.). <a href="https://www.nia.nih.gov/health/exercise-physical-activity">Exercise and Physical Activity</a>.</li>
	<li>Kendall, K., Fairman, C.M. (2014). <a href="http://www.sciencedirect.com/science/article/pii/S2095254614000386" class="external-link external-popup" target="_blank">Women and exercise in aging. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Journal of Sport and Health Science</em>; 3(3): 170–178.</li>
	<li>U.S. Department of Health and Human Services. (2008). <a href="https://health.gov/paguidelines/guidelines/chapter5.aspx">Physical Activity Guidelines for Americans: Active Older Adults, Chapter 5.</a></li>
	<li>National Center on Health, Physical Activity and Disability. (n.d.). <a href="http://www.nchpad.org/14/73/Exercise~Guidelines~for~People~with~Disabilities" class="external-link external-popup" target="_blank">Exercise Guidelines for People with Disabilities. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
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
