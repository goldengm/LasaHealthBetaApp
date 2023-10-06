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

export function bodyImagePage({ navigation, ...rest }) {
  const condName = "Body Image";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bodyimageandmentalhealth.jpg?VersionId=uQCN3NRwarkwU_JlNNtJ7hHPCyvYTNMW";
  const condDescription =
    "Body image is how you think and feel about your body. Women with a positive body image are more likely to have good mental health. But many women in the United States have negative body images, which can put them at higher risk of depression, eating disorders, or other mental and physical health problems. You can take steps to develop a healthier body image and get treatment for mental health conditions.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bodyimage.jpg?VersionId=JvNz35IIHb3mup6FCqI1meASVrPMEA82"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Body image</h1>  -->
            <p><strong>A healthy body image means you feel comfortable in your body and you feel good about the way you look.</strong> This includes what you think and feel about your appearance and how you judge your own self-worth. A negative body image can put you at higher risk of certain mental health conditions, such as eating disorders and depression.<a href="#references"><sup>1</sup></a></p>

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
      title: "What is body image?",
      content: `

    <div class="answer"><p>Your body image is what you think and how you feel when you look in the mirror or when you picture yourself in your mind. This includes how you feel about your appearance; what you think about your body itself, such as your height and weight; and how you feel within your own skin. Body image also includes how you behave as a result of your thoughts and feelings.<a href="#references"><sup>2</sup></a> You may have a positive or negative body image. Body image is not always related to your weight or size.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why is a healthy body image important?",
      content: `

    <div class="answer"><p>Women with a positive body image are more likely to have good physical and mental health. Girls and women with negative thoughts and feelings about their bodies are more likely to develop certain mental health conditions, such as eating disorders and depression. Researchers think that dissatisfaction with their bodies may be part of the reason more women than men have depression.<a href="#references"><sup>3</sup></a></p>

<p>A negative body image may also lead to low self-esteem, which can affect many areas of your life. You may not want to be around other people or may obsess constantly about what you eat or how much you exercise. But you can take steps to develop a healthier body image.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some people more likely to develop a negative body image? ",
      content: `

    <div class="answer"><p>Yes. Girls are more likely than boys to have a negative body image. This may be because many women in the United States feel pressured to measure up to strict and unrealistic social and cultural beauty ideals, which can lead to a negative body image.<a href="#references"><sup>4</sup></a></p>

<p>White girls and young women are slightly more likely to have a negative body image than African-American or Hispanic girls and young women.<a href="#references"><sup>5</sup></a> However, cultural beauty ideals change over time, and it can be difficult to correctly measure a complicated idea like body image among women from different backgrounds.<sup>6</sup> Children of parents who diet or who have a negative body image are also more likely to develop unhealthy thoughts about their own bodies.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why are women so focused on body image?",
      content: `

    <div class="answer"><p>In the United States, girls and women hear and see messages about how they look from the first moments they are alive, throughout much of their childhood, and into adulthood. Young girls and teens are more likely to be praised for how they look than for their thoughts or actions. The media focuses on showing women who are thin, attractive, and young. Images of these women are often edited using computer technology. As a result, girls and young women often try to reach beauty and body ideals that do not exist in the real world.<a href="#references"><sup>1</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes a negative body image?",
      content: `

    <div class="answer"><p>Past events and circumstances can cause you to have a negative body image, including:</p>

<ul>
	<li>Being teased or bullied as a child for how you looked</li>
	<li>Being told you’re ugly, too fat, or too thin or having other aspects of your appearance criticized</li>
	<li>Seeing images or messages in the media (including social media) that make you feel bad about how you look</li>
	<li>Having underweight, overweight, or obesity</li>
</ul>

<p>In rare cases, people can have such a distorted view of their bodies that they have a mental health condition called body dysmorphic disorder (BDD). BDD is a serious illness in which a person is preoccupied with minor or imaginary physical flaws. <a href="/mental-health/mental-health-conditions/body-dysmorphic-disorder">Learn more about BDD</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does overweight or obesity affect body image?",
      content: `

    <div class="answer"><p>Women who have <a href="/healthy-weight/weight-and-obesity">obesity</a> are more likely to have a negative body image, but not all women who have obesity or overweight are dissatisfied with their bodies. Women with a healthy weight can also have a negative body image, although obesity can make a woman's negative body image more severe.<a href="#references"><sup>7</sup></a></p>

<p>Weight is not the only part of a person's body that determines body image. Self-esteem, past history, daily habits such as grooming, and the particular shape of your body all contribute to body image. Weight is an important part of body image, but it is not the only part.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does underweight affect body image?",
      content: `

    <div class="answer"><p>Women who have <a href="/healthy-weight/underweight">underweight</a> due to a health condition like an eating disorder, cancer, or Crohn's disease may have a negative body image due to the effects of their condition. Women who have underweight without another health condition may also have a negative body image if others comment negatively on their weight or express other negative attitudes.</p>

<p>Weight is not the only part of a person's body that determines body image. Self-esteem, past history, daily habits such as grooming, and the particular shape of your body all contribute to body image. Weight is an important part of body image, but it is not the only part.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I have a healthy body image?",
      content: `

    <div class="answer expanded"><p>Research shows that if you have overweight or obesity, your body image may improve if you participate in a weight loss program, even if you don't lose as much weight as you hoped.<a href="#references"><sup>8</sup></a>&nbsp;The weight loss program should include a focus on healthy eating and physical activity.</p>

<p>If you are underweight and have a negative body image, you can work with a doctor or nurse to gain weight in a healthy way and treat any other health problems you have. If you are eating healthy and getting enough exercise, your weight may matter less in your body image.</p>

<p>The more you practice thinking positive thoughts about yourself and the fewer negative thoughts you have about your body, the better you will feel about who you are and how you look. While very few people are 100% positive about every aspect of their body, it can help to focus on the things you do like. Also, most people realize as they get older that how you look is only one part of who you are. Working on accepting how you look is healthier than constantly working to change how you look.</p>

<p>Read 10 tips from the&nbsp;<a href="https://www.nationaleatingdisorders.org/learn/general-information/ten-steps" target="_blank" class="external-link external-popup">National Eating Disorders Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;for creating a healthy, positive sense of your body.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I help my kids have a healthy body image?",
      content: `

    <div class="answer"><p>Your body image plays a role in how your kids see themselves. Studies show that daughters are twice as likely to have ideas about dieting when their mothers diet.<a href="https://www.womenshealth.gov/mental-health/body-image-and-mental-health/body-image#references"><sup>9</sup></a>&nbsp;If you want to lose weight to get healthy, pay attention to the language that you use with your kids. Rather than talking about “dieting,” explain that you are eating healthy foods. Together with your family, cook healthy meals, order healthy meals at restaurants, and get more physical activity. Teach your children about smart food choices and help them develop healthy eating and exercise habits.</p>

<p>You can help your children develop healthy body images by:</p>

<ul>
	<li>Making sure your children understand that weight gain and growth are normal parts of development, especially during puberty</li>
	<li>Not making negative statements about food, weight, and body size and shape&nbsp;<em>—</em>&nbsp;yours, your children's, or anyone else's</li>
	<li>Allowing your children to make decisions about food while making sure that plenty of healthy and nutritious meals and snacks are available</li>
	<li>Complimenting your children more on their efforts, talents, accomplishments, and personal values and less on their looks</li>
	<li>Limiting screen time. In addition to getting less exercise, kids who watch TV shows or movies or play online games often see unrealistic female bodies. Talk with kids about the media images you see.</li>
	<li>Encouraging your children's school to create policies against bullying</li>
	<li>Talking to your children often and showing them that you're always there to listen</li>
</ul>

<p>You may be teaching your kids harmful habits if you:</p>

<ul>
	<li>Often complain about your weight or your body shape</li>
	<li>Often try new “miracle” diets</li>
	<li>Tell your kids they would be more attractive if they lost weight</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some children more at risk of body image problems?",
      content: `

    <div class="answer"><p>Yes. Many things can trigger weight concerns for girls or boys and affect their eating habits in potentially unhealthy ways:</p>

<ul>
	<li>Having mothers who are very worried about their own weight</li>
	<li>Having mothers who are very worried about their kids’ weight and looks</li>
	<li>Natural weight gain and other body changes during puberty</li>
	<li>Peer pressure to look a certain way</li>
	<li>Struggles with self-esteem</li>
	<li>Media images showing the ideal female body as thin</li>
</ul>

<p>Many teenage girls of average weight think they have overweight and are not satisfied with their bodies. Having extreme weight concerns <em>—</em> and acting on those concerns <em>—</em> can harm girls’ social, physical, and emotional growth. Skipping meals or taking diet pills can lead to poor nutrition and difficulty learning. For some teens, extreme efforts to lose weight can lead to eating disorders&nbsp;such as anorexia or bulimia. For others, the pressure to be thin can lead to binge eating disorder <em>—</em> overeating that is followed by extreme guilt. Girls are also more likely than boys to risk their health by trying to lose weight in unhealthy ways, such as smoking.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is cosmetic surgery good or bad for a healthy body image? ",
      content: `

    <div class="answer"><p>It depends. If you are considering cosmetic surgery, you must be honest with yourself. Why do you want surgery, and what do you expect surgery to do for you? It is never a good idea to have cosmetic surgery to try to impress someone other than yourself. If a partner or spouse insists on you having cosmetic surgery, that is a type of abuse, and you should tell a doctor, a family member, or someone else who can help you think through the decision.</p>

<p>Because the changes resulting from cosmetic surgery are often dramatic and permanent, it’s important to have a clear understanding of how surgery might make you feel <em>—</em> before surgery.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about body image?",
      content: `

    <div class="answer"><p>For more information about body image, call the OWH Helpline at 1-800-994-9662 or check out the following resources and organizations:</p>

<ul>
	<li><a href="https://www.nationaleatingdisorders.org/20-ways-love-your-body" class="external-link external-popup" target="_blank">20 Ways to Love Your Body <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> —&nbsp;Information from the National Eating Disorders Association (NEDA).</li>
	<li><a href="http://my.clevelandclinic.org/healthy_living/mental_health/hic_fostering_a_positive_self-image.aspx" class="external-link external-popup" target="_blank">Fostering a Positive Self-Image <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> —&nbsp;Publication from the Cleveland Clinic.</li>
	<li><a href="http://www.plannedparenthood.org/health-topics/body-image-23374.htm" class="external-link external-popup" target="_blank">Health and Wellness <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> —&nbsp;Information from Planned Parenthood.</li>
	<li><a href="https://www.nationaleatingdisorders.org/blog/media-and-body-image" class="external-link external-popup" target="_blank">Media and Body Image <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> —&nbsp;Publication from NEDA.</li>
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
	<li>Grabe, S., Ward, L.M., Hyde, J.S. (2008).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/18444705" target="_blank">The role of the media in body image concerns among women: a meta-analysis of experimental and correlational studies</a>.&nbsp;<em>Psychological Bulletin</em>; 134(3): 460–476.</li>
	<li>National Eating Disorders Collaboration. (2017).&nbsp;<a href="http://www.nedc.com.au/body-image" target="_blank" class="external-link external-popup">What is body image? <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Ferreiro, F., Seoane, G., Senra, C. (2014).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/24331307" target="_blank">Toward understanding the role of body dissatisfaction in the gender differences in depressive symptoms and disordered eating: a longitudinal study during adolescence</a>.&nbsp;<em>Journal of Adolescence</em>; 37(1): 73–84.</li>
	<li>Furnham, A.,&nbsp;Badmin, N., Sneade, I. (2002).&nbsp;<a href="http://www.tandfonline.com/doi/abs/10.1080/00223980209604820" target="_blank" class="external-link external-popup">Body Image Dissatisfaction: Gender Differences in Eating Attitudes, Self-Esteem, and Reasons for Exercise <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>Journal of Psychology</em>; 136(6): 581–596.</li>
	<li>Grabe, S., Hyde, J.S. (2006).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/16822170" target="_blank">Ethnicity and body dissatisfaction among women in the United States: a meta-analysis</a>.&nbsp;<em>Psychological Bulletin</em>; 132: 622–640.</li>
	<li>Roberts, A., Cash, T.F., Feingold, A., Johnson, B.T. (2006).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/17154741" target="_blank">Are black-white differences in females' body dissatisfaction decreasing? A meta-analytic review</a>.&nbsp;<em>Journal of Consulting and Clinical Psychology</em>; 74(6): 1121–1131.</li>
	<li>Weinberger, N.A., Kersting, A., Riedel-Heller, S.G., Luck-Sikorski, C. (2016).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/28013298" target="_blank">Body Dissatisfaction in Individuals with Obesity Compared to Normal-Weight Individuals: A Systematic Review and Meta-Analysis</a>.&nbsp;<em>Obesity Facts</em>; 9(6): 424–441.</li>
	<li>Chao, H.L. (2015).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/25946138" target="_blank">Body image change in obese and overweight persons enrolled in weight loss intervention programs: a systematic review and meta-analysis</a>.&nbsp;<em>PLOS ONE</em>; 10(5): e0124036.</li>
	<li>Abramovitz, B.A., Birch, L.L. (2000).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2530935/" target="_blank">Five-year-old girls' ideas about dieting are predicted by their mothers' dieting</a>.&nbsp;<em>Journal of the American Dietetic Association</em>; 100(10): 1157–1163.</li>
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
