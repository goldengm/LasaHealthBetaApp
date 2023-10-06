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

export function periPage({ navigation, ...rest }) {
  const condName = "Perimenopause";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Earlyorprematuremenopause.jpg?VersionId=U6ZFni..fvpyy6SOnmv715ywWH4Ofl5l";
  const condDescription =
    "Perimenopause (PER-ee-MEN-oh-pawz), or the menopausal transition, is the time leading up to your last period. Perimenopause means 'around menopause.' \n Perimenopause is a long transition to menopause, or the time when your periods stop permanently and you can no longer get pregnant. As your body transitions to menopause, your hormone levels may change randomly, causing menopause symptoms unexpectedly.  During this transition, your ovaries make different amounts of the hormones estrogen (ES-truh-jin) and progesterone (proh-JES-tuh-RONE) than usual. \n Irregular periods happen during this time because you may not ovulate every month. Your periods may be longer or shorter than usual. You might skip a few months or have unusually long or short menstrual cycles. Your period may be heavier or lighter than before. Many women also have hot flashes and other menopause symptoms during this transition.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Menopausebasics.jpg?VersionId=G93vBlP6qfjshM6tmWC3Mushe0.DM_GK"></div>    -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Menopause basics</h1>  -->
            <p><strong>Menopause is when your period stops permanently. </strong>Menopause is a normal part of a woman's life. It is sometimes called "the change of life." Menopause does not happen all at once. As your body transitions to menopause over several years, you may have menopause symptoms and irregular periods. The average age for menopause in the United States is 52.</p>

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
      title: "What is menopause?",
      content: `

    <div class="answer"><p>Menopause is when your periods stop permanently and you can no longer get pregnant. You have reached menopause only after it has been a full year since your last period. This means you have not had any bleeding, including spotting, for 12 months in a row.</p>

<p>After menopause your ovaries make very low levels of the hormones estrogen and progesterone. These low hormone levels can raise your risk for <a href="/menopause/menopause-and-your-health/#1" title="how will menopause affect my health?">certain health problems</a>.&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is perimenopause, or the transition to menopause?",
      content: `

    <div class="answer"><p>Perimenopause (PER-ee-MEN-oh-pawz), or the menopausal transition, is the time leading up to your last period. Perimenopause means “around menopause.”</p>

<p>Perimenopause is a long transition to menopause, or the time when your periods stop permanently and you can no longer get pregnant. As your body transitions to menopause, your hormone levels may change randomly, causing menopause symptoms unexpectedly.&nbsp; During this transition, your ovaries make different amounts of the hormones estrogen (ES-truh-jin) and progesterone (proh-JES-tuh-RONE) than usual.</p>

<p>Irregular periods happen during this time because you may not ovulate every month. Your periods may be longer or shorter than usual. You might skip a few months or have unusually long or short menstrual cycles. Your period may be heavier or lighter than before. Many women also have hot flashes and other menopause symptoms during this transition.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "When does the transition to menopause usually start?",
      content: `

    <div class="answer"><p>Perimenopause, the transition to menopause, usually starts in a woman's mid- to late 40s.<a href="#references" title="references"><sup>1</sup></a> On average, women are in perimenopause for four years before their periods stop.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How will I know if I am starting the transition to menopause? ",
      content: `

    <div class="answer expanded"><p>Sometimes it can be hard for you and your doctor to tell whether you are in perimenopause, the transition to menopause:</p>

<ul>
	<li><strong>Symptoms: </strong>Tell your doctor or nurse about any menopause symptoms, such as hot flashes or trouble sleeping.</li>
	<li><strong>Irregular periods: </strong>Track your periods. Irregular periods may be your first sign of menopause.</li>
	<li><strong>Hormone levels: </strong>Your doctor may test the amount of hormones in your blood if your periods stopped at an early age (before 40). Doctors don’t usually recommend this test unless there is a medical reason to do so. This is because, for most women, hormone levels go up and down in an unpredictable way during the transition to menopause. So it is difficult to tell for sure whether you have gone through menopause or are getting close to it based on this blood test.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How will menopause affect me?",
      content: `

    <div class="answer"><p>Symptoms of menopause may begin suddenly and be very noticeable, or they may be very mild at first. Symptoms may happen most of the time once they begin, or they may happen only once in a while. Some women notice changes in many areas. Some menopausal symptoms, such as moodiness, are similar to symptoms of premenstrual syndrome (PMS). Others may be new to you. For example:</p>

<ul>
	<li>Your menstrual periods may not come as regularly as before. They also might last longer or be shorter. You might skip some months. Periods might stop for a few months and then start up again.</li>
	<li>Your periods might be heavier or lighter than before.</li>
	<li>You might have hot flashes and problems sleeping.</li>
	<li>You might experience mood swings or be irritable.</li>
	<li>You might experience vaginal dryness. Sex may be uncomfortable or painful.</li>
	<li>You may have less interest in sex. It may take longer for you to get aroused.</li>
</ul>

<p>Other possible changes are not as noticeable. For example, you might begin to lose bone density because you have less estrogen. This can lead to <a href="http://www.womenshealth.gov/glossary#osteoporosis" title="glossary">osteoporosis</a>, a condition that causes bones to become weak and break easily. Changing estrogen levels can also&nbsp;raise cholesterol levels and increase your risk for <a href="http://www.womenshealth.gov/heart-health-stroke/index.html" title="Heart disease and stroke">heart disease and stroke</a>.</p>

<p>Talk to your doctor about possible <a href="/menopause/menopause-treatment" title="Menopause treatment">treatment</a> for your menopause symptoms if they bother you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How long does the transition to menopause last?",
      content: `

    <div class="answer"><p>Perimenopause, the transition to menopause, can last between two and eight years before your periods stop permanently. For most women, this transition to menopause lasts about four years. You will know you have reached menopause only after it has been a full year since your last period. This means you have not had any bleeding, including spotting, for 12 months in a row.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Should I continue using birth control during the transition to menopause?",
      content: `

    <div class="answer"><p>Yes. You can still get pregnant during perimenopause, the transition to menopause, even if you miss your period for a month or a few months. During perimenopause you may still ovulate, or release an egg, on some months.</p>

<p>But it is impossible to know for sure when you will ovulate. If you don’t want to get pregnant, you should continue to use birth control until one full year after your last period. Talk to your doctor about your birth control needs. Learn more about different <a href="/publications/our-publications/fact-sheet/birth-control-methods.html" title="Birth control methods">birth control methods</a>.&nbsp;</p>

<p>You can’t get pregnant after menopause, but anyone who has sex can get <a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections">sexually transmitted infections</a>&nbsp;(STIs, or STDs). If you are not in a monogamous relationship in which you and your partner have sex with each other and no one else, protect yourself by using a male condom or <a href="/glossary#dental_dam" title="glossary">dental dam</a><strong>&nbsp;</strong>correctly every time you have vaginal, oral, or anal sex. After menopause you may be more likely to get an STI from sex without a condom. Vaginal dryness or irritation is more common after menopause and can cause small cuts or tears during sex, exposing you to STIs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "When does menopause usually happen?",
      content: `

    <div class="answer"><p>Menopause happens when you have gone 12 months in a row without a period. The average age of menopause in the United States is 52. The range for women is usually between 45 and 58.<a href="#references" title="references"><sup>2</sup></a> One way to tell when you might go through menopause is the age your mother went through it.<a href="#references" title="references"><sup>3</sup></a></p>

<p>Menopause may happen earlier if you:</p>

<ul>
	<li><strong>Never had children.</strong> Pregnancy, especially more than one pregnancy, may delay menopause.<a href="#references" title="references"><sup>4</sup></a></li>
	<li><strong>Smoke.</strong> Studies show smoking can cause you to start menopause up to two years earlier than women who don’t smoke.<a href="#references" title="references"><sup>5</sup></a></li>
</ul>

<p><a href="/menopause/early-premature-menopause/index.html" title="Early menopause (premature menopause) ">Certain health problems</a><strong>&nbsp;</strong>can also cause you to start menopause earlier.</p>

<p align="left">Menopause usually happens on its own. However, you may enter menopause earlier than you normally would if you have had chemotherapy or surgery to remove both ovaries. Learn more about early menopause on our <a href="/menopause/early-or-premature-menopause" title="Early menopause (premature menopause) page.">Early or premature menopause</a>&nbsp;page.&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What happens after menopause?",
      content: `

    <div class="answer"><p align="left">After menopause you will no longer be able to get pregnant and you will no longer get a period. If you have any type of vaginal bleeding after menopause, you should see a doctor as soon as possible. Vaginal bleeding after menopause is not normal and can mean that you have a serious health problem. &nbsp;</p>

<p align="left">You may experience any of the following after menopause:</p>

<ul>
	<li><strong>Low hormone levels. </strong>With menopause, your ovaries make very little of the hormones estrogen and progesterone. Because of changing hormone levels, you may develop <a href="/menopause/menopause-and-your-health" title="menopause and your health ">certain health risks</a>,&nbsp;including osteoporosis, <a href="/heart-health-stroke/index.html" title="Heart Disease and Stroke">heart disease, and stroke</a>.</li>
	<li align="left"><strong>Menopause symptoms instead of period problems. </strong>After menopause, most women get relief from <a href="/menstrual-cycle/period-problems" title="period problems">period problems</a> or menopause <a href="/menopause/menopause-symptoms-and-relief" title="menopause symptoms and relief">symptoms</a>. However, you may still experience symptoms such as hot flashes because of changing estrogen levels. One recent study found that hot flashes can continue for up to 14 years after menopause.<sup><a href="#references" title="references">6</a>,<a href="#references" title="references">7</a></sup></li>
	<li align="left"><strong>Vaginal dryness</strong>. Vaginal dryness may be more common post-menopause. Learn more about <a href="/menopause/menopause-treatment" title="menopause treatment">treatments</a>&nbsp;for vaginal dryness.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about menopause?",
      content: `

    <div class="answer"><p>For more information about menopause, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li align="left"><a href="http://www.nlm.nih.gov/medlineplus/ency/article/004016.htm" title="Aging changes in the female reproductive system">Aging changes in the female reproductive system</a> — Information from the National Library of Medicine</li>
	<li align="left"><a href="http://www.nia.nih.gov/health/publication/menopause" title="Health and Aging: Menopause">Health &amp; Aging: Menopause</a> —&nbsp;Information from the National Institute on Aging (NIA)</li>
	<li align="left"><a href="https://www.nichd.nih.gov/health/topics/menopause/Pages/default.aspx" title="Menopause">Menopause</a> — Information from the <em>Eunice Kennedy Shriver</em> National Institute of Child Health and Human Development</li>
	<li align="left"><a href="http://www.menopause.org/for-women/menopauseflashes" title="The North American Menopause Society: Menopause Flashes" class="external-link external-popup" target="_blank"><em>Menopause Flashes</em> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Web magazine from the North American Menopause Society</li>
	<li align="left"><a href="http://www.arhp.org/publications-and-resources/patient-resources/fact-sheets/perimenopause/" title="Health Matters Fact Sheets" class="external-link external-popup" target="_blank">Perimenopause: Changes, Treatment, Staying Healthy <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the Association of Reproductive Health Professionals</li>
	<li align="left"><a href="https://www.health.harvard.edu/womens-health/perimenopause-rocky-road-to-menopause" title="perimenopause" class="external-link external-popup" target="_blank">Perimenopause: Rocky road to menopause <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Article from the Harvard Medical School</li>
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
	<li>Grady, D. (2006). <a href="http://www.nejm.org/doi/full/10.1056/NEJMcp054015" title="The New England Journal of Medicine: Management of Menopausal Symptoms" class="external-link external-popup" target="_blank">Management of Menopausal Symptoms <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>New England Journal of Medicine; </em>355: 2338–2347.</li>
	<li>Shifren, J.L., Gass, M.L.S., for the NAMS Recommendations for Clinical Care of Midlife Women Working Group. (2014). <a href="http://www.menopause.org/docs/default-source/2014/nams-recomm-for-clinical-care.pdf" title="Special Feature: The North American Menopause Society Recommendations for Clinical Care of Midlife Women" class="external-link external-popup" target="_blank">The North American Menopause Society Recommendations for Clinical Care of Midlife Women <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>Menopause;</em> 21(10): 1038–1062.</li>
	<li>Mishra, G.D., Cooper, R., Tom, S.E., Kuh, D. (2009). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3287288/" title="Early life circumstances and their impact on mmenarche and menopause">Early life circumstances and their impact on menarche and menopause</a>.&nbsp;<em>Womens Health;</em> 5: 175–190.</li>
	<li>Avis,&nbsp;N.E., McKinlay,&nbsp;S.M. (1991). <a href="http://www.maturitas.org/article/0378-5122(91)90286-Y/abstract" title="A longitudinal analysis of women's attitudes toward the menopause: Results from the Massachusetts Women's Health Study" class="external-link external-popup" target="_blank">A longitudinal analysis of women's attitudes toward the menopause: Results from the Massachusetts Women's Health Study <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Maturitas</em>; 13: 65–79.</li>
	<li>women.smokefree.gov. (n.d.). <a href="http://women.smokefree.gov/11-harmful-effects-of-smoking-on-women%E2%80%99s-health.aspx" title="Harmful Effects of Smoking on Women’s Health">11 Harmful Effects of Smoking on Women’s Health</a>&nbsp;</li>
	<li>Avis, N.E., Crawford, S.L., Greendale, G., Bromberger, J.T., Everson-Rose, S.A., Gold, E.B., et al. (2015). <a href="http://archinte.jamanetwork.com/article.aspx?articleid=2110996" title="Duration of Menopausal Vasomotor Symptoms Over the Menopause Transition&nbsp;" class="external-link external-popup" target="_blank">Duration of Menopausal Vasomotor Symptoms Over the Menopause Transition <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>JAMA Internal Medicine</em>; 175(4): 531–539.</li>
	<li>Tepper, P.G., Brooks, M.M., Randolph, J.F., Crawford, S.L., Khoudary, E., Gold, E.B., et al. (2016). <a href="http://www.ncbi.nlm.nih.gov/pubmed/27404029" title="Characterizing the trajectories of vasomotor symptoms across the menopausal transition">Characterizing the trajectories of vasomotor symptoms across the menopausal transition</a>.&nbsp;<em>Menopause; </em>23(10): 1067–1074.</li>
</ol>
</div>
`,
    },
  ];
  return [condName, condImURL, condDescription, condHeader, condQA];
}

export function periScreening({ navigation, ...rest }) {
  const screeningTree = [
    {
      title: "Perimenopause Question1",
      content: (
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            p
            style={{
              // marginVertical: theme.SIZES.BASE / 2,
              textAlign: "center",
            }}
            color={theme.COLORS.DEFAULT}
          >
            PCOS is hormonal disorder involving infrequent, irregular or
            prolonged menstrual periods, and often excess male hormone
            (androgen) levels. The ovaries develop numerous small collections of
            fluid — called follicles — and may fail to regularly release eggs.​
          </Text>
        </View>
      ),
    },
    {
      title: "Perimenopause Question2",
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
