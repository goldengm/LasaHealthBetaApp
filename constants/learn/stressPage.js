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

export function stressPage({ navigation, ...rest }) {
  const condName = "Stress and your health";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Stressandyourhealth.jpg?VersionId=YQ0yx9xp8I37hW26e7dLu2t19D2XxNpP";
  const condDescription =
    "Stress is how your body reacts to certain situations, such as sudden danger or long-lasting challenge. During stressful events, your body releases chemicals called hormones, such as adrenaline. Adrenaline gives you a burst of energy that helps you cope and respond to stress. For example, one kind of stress is the jolt you may feel when a car pulls out in front of you. This jolt of adrenaline helps you quickly hit the brakes to avoid an accident. \n Stress can range from mild and short-term to more extreme and long-lasting. Chronic (long-lasting) stress can affect your mental and physical health.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Stressandyourhealth.jpg?VersionId=YQ0yx9xp8I37hW26e7dLu2t19D2XxNpP"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Stress and your health</h1>  -->
            <p><strong>Stress is a reaction to a change or a challenge.</strong> In the short term, stress can be helpful. It makes you more alert and gives you energy to get things done. But long-term stress can lead to serious health problems. Women are more likely than men to report symptoms of stress, including headaches and upset stomach. Women are also more likely to have mental health conditions that are made worse by stress, such as depression or anxiety.<a href="#references"><sup>1</sup></a></p>

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
      title: "What is stress?",
      content: `

    <div class="answer"><p>Stress is how your body reacts to certain situations, such as sudden danger or long-lasting challenge. During stressful events, your body releases chemicals called hormones, such as adrenaline. Adrenaline gives you a burst of energy that helps you cope and respond to stress. For example, one kind of stress is the jolt you may feel when a car pulls out in front of you. This jolt of adrenaline helps you quickly hit the brakes to avoid an accident.</p>

<p>Stress can range from mild and short-term to more extreme and long-lasting. Chronic (long-lasting) stress can affect your <a href="#4">mental and physical health</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are some symptoms of stress?",
      content: `

    <div class="answer"><p>Stress affects everyone differently. Some ways that chronic or long-term stress affects women include:</p>

<ul>
	<li>Pain, including back pain</li>
	<li>Acne and other skin problems, like rashes or hives</li>
	<li>Headaches</li>
	<li>Upset stomach</li>
	<li>Feeling like you have no control</li>
	<li>Forgetfulness</li>
	<li>Lack of energy</li>
	<li>Lack of focus</li>
	<li>Overeating or not eating enough</li>
	<li>Being easily angered</li>
	<li>Trouble sleeping</li>
	<li>Drug and alcohol misuse</li>
	<li>Loss of interest in things you once enjoyed</li>
	<li>Less interest in sex than usual</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes stress?",
      content: `

    <div class="answer"><p>People can feel stress from many different things. Examples of common causes of short-term stress include:</p>

<ul>
	<li>Getting stuck in traffic or missing the bus</li>
	<li>An argument with your spouse or partner</li>
	<li>Money problems</li>
	<li>A deadline at work</li>
</ul>

<p>Examples of common causes of long-term stress include:</p>

<ul>
	<li><strong>Poverty and financial worries. </strong>Depression is more common in women whose families live below the federal poverty line.<a href="#references"><sup>2</sup></a> Women in poverty who care for children or other family members as well as themselves may experience more severe stress.<a href="#references"><sup>3,4</sup></a></li>
	<li><strong>Discrimination.</strong> All women are at risk for discrimination, such as gender discrimination at work. Some women experience discrimination based on their race, ethnicity, or sexual orientation.<a href="#references"><sup>5,6</sup></a> Stressful events, such as learning a new culture (for those new to the United States) or experiencing discrimination, put women at higher risk for depression or anxiety.</li>
	<li><strong>Traumatic events. </strong>Experiencing trauma, such as being in an accident or disaster or going through emotional, physical, or <a href="/relationships-and-safety/sexual-assault-and-rape/sexual-assault">sexual assault</a> or abuse as a child or an adult, may put you at higher risk of depression<a href="#references"><sup>7</sup></a> and other disorders.<a href="#references"><sup>8</sup></a> Women are more likely than men to experience certain types of violence, such as sexual violence,<a href="#references"><sup>9</sup></a> that are more likely to cause mental health conditions, such as post-traumatic stress disorder (PTSD).</li>
</ul>

<p>Ongoing, low-level stress can be hard to notice, but it can also lead to serious health problems. If you feel stressed, <a href="#8">try these tips</a> to help you manage your stress. If you need more help managing stress, talk to a doctor, nurse, or mental health professional.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does stress affect women’s health?",
      content: `

    <div class="answer"><p>Some of the health effects of stress are the same for men and women. For example, stress can cause trouble sleeping and weaker <a href="/glossary#immune_system">immune systems</a>. But there are other ways that stress affects women.</p>

<ul>
	<li><strong>Headaches and migraines.</strong> When you are stressed, your muscles tense up. Long-term tension can lead to headache, migraine, and general body aches and pains. Tension-type headaches are common in women.<a href="#references"><sup>10</sup></a></li>
	<li><strong>Depression and anxiety.</strong> In the past year, women were almost twice as likely as men to have symptoms of depression.<a href="#references"><sup>11</sup></a> Women are more likely than men to have an anxiety disorder, including post-traumatic stress disorder, panic disorder, or obsessive-compulsive disorder.<a href="#references"><sup>12</sup></a> Research suggests that women may feel the symptoms of stress more or get more of the symptoms of stress than men. This can raise their risk of depression and anxiety.<a href="#references"><sup>1</sup></a></li>
	<li><strong>Heart problems.</strong> High stress levels can raise your blood pressure and heart rate. Over time, high blood pressure can cause serious health problems, such as stroke and heart attacks. Younger women with a history of heart problems especially may be at risk of the negative effects of stress on the heart.<a href="#references"><sup>13</sup></a> <a href="/heart-disease-and-stroke/heart-disease/heart-disease-risk-factors/behaviors">Learn more about stress and heart disease.</a></li>
	<li><strong>Upset stomach. </strong>Short-term stress can cause stomach issues such as diarrhea or vomiting. Long-term stress can lead to irritable bowel syndrome (IBS), a condition that is twice as common in women as in men.<a href="#references"><sup>14</sup></a> Stress can make IBS symptoms such as gas and bloating worse.</li>
	<li><strong>Obesity.</strong> The link between stress and weight gain is stronger for women than for men.<a href="#references"><sup>15</sup></a> Stress increases the amount of a hormone in your body called cortisol, which can lead to overeating and cause your body to store fat.</li>
	<li><strong>Problems getting pregnant.</strong> Women with higher levels of stress are more likely to have problems getting pregnant than women with lower levels of stress. Also, not being able to get pregnant when you want to can be a source of stress.<a href="#references"><sup>16</sup></a></li>
	<li><strong>Menstrual cycle problems. </strong>Women who experience chronic or long-term stress may have more severe premenstrual syndrome (PMS) symptoms<a href="#references"><sup>17</sup></a> or irregular periods. Some studies link past abuse or trauma to more severe PMS.<a href="#references"><sup>18</sup></a></li>
	<li><strong>Decreased sex drive.</strong> Women with long-term stress may take longer to get aroused and may have less sex drive than women with lower levels of stress. While not surprising, at least one study found that women with higher stress levels were more distracted during sex than other women.<a href="#references"><sup>19</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is post-traumatic stress disorder (PTSD)?",
      content: `

    <div class="answer"><p>PTSD is an illness that some people experience after going through trauma. PTSD can happen to someone who has lived through or witnessed a violent crime or war. It can also happen after a sudden traumatic event like a death of a loved one, physical or sexual abuse, or a severe car crash.</p>

<p>Women are about twice as likely as men to develop PTSD. Some PTSD symptoms also are more common in women than in men. For example, women are more likely to:<a href="#references"><sup>20</sup></a></p>

<ul>
	<li>Be jumpy</li>
	<li>Have more trouble feeling emotions</li>
	<li>Avoid whatever reminds them of the trauma</li>
	<li>Feel depressed and anxious</li>
</ul>

<p>Learn more about the <a href="/mental-health/mental-health-conditions/post-traumatic-stress-disorder">symptoms and treatments for PTSD</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do women react to stress differently than men do?",
      content: `

    <div class="answer"><p>Yes, studies show that women are more likely than men to experience <a href="#2">symptoms of stress</a>. Women who are stressed are more likely than men who are stressed to experience depression and anxiety.<a href="#references"><sup>21</sup></a> Experts do not fully know the reason for the differences, but it may be related to how men’s and women’s bodies process stress hormones. Long-term stress especially is more likely to cause problems with moods and anxiety in women.<a href="#references"><sup>22</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does stress affect pregnancy?",
      content: `

    <div class="answer"><p>It is normal to feel stressed during pregnancy. Your body and your hormones are changing, and you may worry about your baby and the changes he or she will bring to your life. But too much stress during pregnancy can hurt you and your baby’s health.</p>

<p>Stress during pregnancy can make normal pregnancy discomforts, like trouble sleeping and body aches, even worse. It can also lead to more serious problems, such as:</p>

<ul>
	<li><strong>Depression.</strong> Depression during pregnancy or after birth can affect your baby’s development. <a href="/mental-health/mental-health-conditions/postpartum-depression">Learn more about depression during and after pregnancy</a>.</li>
	<li><strong>Problems eating (not eating enough or eating too much).</strong> Women who are <a href="/healthy-weight/underweight">underweight</a> or who gain too much weight during pregnancy are at risk for <a href="/pregnancy/youre-pregnant-now-what/pregnancy-complications">complications</a>, including premature delivery (delivery before 37 weeks of pregnancy) and <a href="/a-z-topics/diabetes#2">gestational diabetes</a>. Get a personalized <a href="http://resources.nationalacademies.org/Pregnancy/WhatToGain.html" class="external-link external-popup" target="_blank">recommendation <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> on how much weight to gain during pregnancy.</li>
	<li><strong>High blood pressure.</strong> High blood pressure during pregnancy puts you at risk of a serious condition called <a href="/glossary#preeclampsia">preeclampsia</a>, premature delivery, and having a low-birth-weight infant (baby weighing less than 5½ pounds).</li>
</ul>

<p>Talk to your doctor about your stress, and <a href="#8">try these tips</a> to help manage your stress. Learn about <a href="/breastfeeding/breastfeeding-home-work-and-public/breastfeeding-and-everyday-life#8">how stress affects breastfeeding</a> too.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can I do to help manage my stress?",
      content: `

    <div class="answer"><p>Everyone has to deal with stress at some point in their lives. You can take steps to help handle stress in a positive way.</p>

<ul>
	<li><strong>Take deep breaths</strong><strong>.</strong> This forces you to breathe slower and helps your muscles relax. The extra oxygen sends a message to your brain to calm and relax the body.</li>
	<li><strong>Stretch</strong><strong>.</strong> Stretching can also help relax your muscles and make you feel less tense.</li>
	<li><strong>Write out your thoughts. </strong>Keeping a journal or simply writing down the things you are thankful for can help you handle stress.</li>
	<li><strong>Take time for yourself</strong><strong>.</strong> It could be listening to music, reading a good book, or going to a movie.</li>
	<li><strong>Meditate. </strong>Studies show that meditation, a set time of stillness to focus the mind on a positive or neutral thought, can help lower stress.<a href="#references"><sup>23</sup></a> In addition to traditional medical treatments, meditation also may help improve anxiety, some menopause symptoms, and side effects from cancer treatments and may lower blood pressure.<a href="#references"><sup>24</sup></a> Meditation is generally safe for everyone, and free meditation guides are widely available online.</li>
	<li><strong>Get enough sleep</strong><strong>.</strong> Most adults need 7 to 9 hours of sleep a night to feel rested.</li>
	<li><strong>Eat right</strong><strong>.</strong> Caffeine or high-sugar snack foods give you jolts of energy that wear off quickly. Instead, eat foods with B vitamins, such as bananas, fish, avocados, chicken, and dark green, leafy vegetables. Studies show that B vitamins can help relieve stress by regulating nerves and brain cells.<a href="#references"><sup>25</sup></a> You can also take a vitamin B supplement if your doctor or nurse says it is OK.</li>
	<li><strong>Get moving</strong><strong>.</strong> Physical activity can relax your muscles and improve your mood. Physical activity also may help relieve symptoms of depression and anxiety.<a href="#references"><sup>26</sup></a> Physical activity boosts the levels of “feel-good” chemicals in your body called endorphins. Endorphins can help improve your mood.</li>
	<li><strong>Try not to deal with stress in unhealthy ways</strong><strong>.</strong> This includes drinking too much alcohol, using drugs, smoking, or overeating. These coping mechanisms may help you feel better in the moment but can add to your stress levels in the long term. Try substituting healthier ways to cope, such as spending time with friends and family, exercising, or finding a new hobby.</li>
	<li><strong>Talk to friends or family members. </strong>They might help you see your problems in new ways and suggest solutions. Or, just being able to talk to a family member or friend about a source of stress may help you feel better.</li>
	<li><strong>Get help from a professional if you need it</strong><strong>.</strong> Your doctor or nurse may suggest counseling or prescribe medicines, such as antidepressants or sleep aids. You can also find a therapist in your area using the mental health services locator on the&nbsp;top left side (desktop view) or bottom (mobile view) of this page. If important relationships with family or friends are a source of stress, a counselor can help you learn new emotional and relationship skills.</li>
	<li><strong>Get organized</strong><strong>.</strong> Being disorganized is a sign of stress, but it can also cause stress. To-do lists help organize both your work and home life. Figure out what is most important to do at home and at work and do those things first.</li>
	<li><strong>Help others</strong><strong>.</strong> Volunteering in your community can help you make new friends and feel good about helping others.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about stress and your health? ",
      content: `

    <div class="answer"><p>For more information about stress and your health, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="https://www.nimh.nih.gov/health/publications/stress/index.shtml">5 Things You Should Know About Stress</a>&nbsp;— Fact sheet from the National Institute of Mental Health.</li>
	<li><a href="https://www.apa.org/helpcenter/stress.aspx" class="external-link external-popup" target="_blank">How stress affects your health <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Fact sheet from the American Psychological Association.</li>
	<li><a href="https://medlineplus.gov/ency/article/001942.htm">Learn to manage stress</a>&nbsp;— Tutorial on managing stress from the U.S. National Library of Medicine.</li>
	<li><a href="https://www.mentalhelp.net/articles/mental-and-emotional-impact-of-stress/" class="external-link external-popup" target="_blank">Mental and Emotional Impact of Stress <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from MentalHelp.net.</li>
	<li><a href="https://www.heartmath.org/resources/stress-and-well-being-survey/?data=84" class="external-link external-popup" target="_blank">Personal Well-Being Survey™ <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Assessment you can take to better understand your stress from the HeartMath<sup>®</sup> Institute.</li>
	<li><a href="http://www.mentalhealthamerica.net/conditions/stress" class="external-link external-popup" target="_blank">Stress <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from Mental Health America.</li>
	<li><a href="http://www.marchofdimes.org/pregnancy/stress-and-pregnancy.aspx" class="external-link external-popup" target="_blank">Stress and pregnancy <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Fact sheet from the March of Dimes.</li>
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
	<li>Hammen, C., Kim, E.Y., Eberhart, N.K., Brennan, P.A. (2009). <a href="https://www.ncbi.nlm.nih.gov/pubmed/19496077">Chronic and acute stress and the predictors of major depression in women</a>. <em>Depression and Anxiety</em>; 26(8): 718–723.</li>
	<li>Brody, D.J., Pratt, L.A., Hughes, J. (2018). <a href="https://www.cdc.gov/nchs/products/databriefs/db303.htm">Prevalence of depression among adults aged 20 and over: United States,&nbsp;2013–2016</a>. NCHS Data Brief, no 303. Hyattsville, MD: National Center for Health Statistics.</li>
	<li>Wadsworth, M.E. (2012). <a href="https://link.springer.com/article/10.1007/s10879-011-9192-2" class="external-link external-popup" target="_blank">Working with Low-income Families: Lessons Learned from Basic and Applied Research on Coping with Poverty-related Stress <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Journal of Contemporary Psychotherapy</em>; 42(1): 17–25.</li>
	<li>Sapolsky, R.M. (2004). <a href="http://www.reed.edu/biology/courses/BIO342/2010_syllabus/2010_readings/9_sapolsky_2004_stress.pdf" class="external-link external-popup" target="_blank">Social Status and Health in Humans and Other Animals <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Annual Review of Anthropology</em>; 33: 393–418.</li>
	<li>Perry, B.L., Harp, K.L.H., Oser, C.B. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3783344/">Racial and Gender Discrimination in the Stress Process: Implications for African American Women’s Health and Well-Being</a>. <em>Sociological Perspectives</em>; 56(1): 25–48.</li>
	<li>Meyer, I.H. (2003). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2072932/">Prejudice, Social Stress, and Mental Health in Lesbian, Gay, and Bisexual Populations: Conceptual Issues and Research Evidence</a>. <em>Psychological Bulletin</em>; 129(5): 674–697.</li>
	<li>Chapman, D.P., Whitfield, C.L., Felitti, V.J., Dube, S.R., Edwards, V.J., Anda, R.F. (2004). <a href="https://www.ncbi.nlm.nih.gov/pubmed/15488250">Adverse childhood experiences and the risk of depressive disorders in adulthood</a>. <em>Journal of Affective Disorders</em>; 82(2): 217–225.</li>
	<li>Gilbert, L.K., Breiding, M.J., Merrick, M.T., Thompson, W.W., Ford, D.C., Dhingra, S.S., et al. (2015). <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Childhood+Adversity+and+Adult+Chronic+Disease%3A+An+Update+from+Ten+States+and+the+District+of+Columbia%2C+2010">Childhood adversity and adult chronic disease: an update from ten states and the District of Columbia, 2010</a>. <em>American Journal of Preventive Medicine</em>; 48(3): 345–9.</li>
	<li>Smith, S.G., Chen, J., Basile, K.C., Gilbert, L.K., Merrick, M.T., Patel, N., et al. (2017). <a href="https://www.cdc.gov/violenceprevention/pdf/NISVS-StateReportBook.pdf">The National Intimate Partner and Sexual Violence Survey: 2010–2012 State Report</a>. Atlanta, GA: National Center for Injury Prevention and Control, Centers for Disease Control and Prevention.</li>
	<li>Farooq, K., Williams, P. (2008). <a href="http://ceaccp.oxfordjournals.org/content/8/4/138.full" class="external-link external-popup" target="_blank">Headache and chronic facial pain <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Continuing Education in Anaesthesia, Critical Care &amp; Pain</em>; 8(4): 138–142.</li>
	<li>Substance Abuse and Mental Health Services Administration (SAMHSA) Center for Behavioral Health Statistics and Quality. (2018). <a href="https://www.samhsa.gov/data/sites/default/files/cbhsq-reports/NSDUHDetailedTabs2017/NSDUHDetailedTabs2017.pdf">2017 National Survey on Drug Use and Health: Detailed Tables. Table 8.56A</a> (PDF, 36.1 MB).</li>
	<li>SAMHSA. (2013). Table 4: Specific mental illness and substance use disorders among adults, by sex: percentage, United States, 2001/2002. <em><a href="https://store.samhsa.gov/product/Behavioral-Health-United-States-2012/SMA13-4797">Behavioral Health, United States, 2012</a></em><em>.</em> HHS Publication No. (SMA) 13-4797. Rockville, MD: Substance Abuse and Mental Health Services Administration.</li>
	<li>Vaccarino, V., Shah, A.J., Rooks, C., Ibeanu, I., Nye, J.A., Pimple, P., et al. (2014). <a href="http://www.ncbi.nlm.nih.gov/pubmed/24608039">Sex differences in mental stress-induced myocardial ischemia in young survivors of an acute myocardial infarction</a>. <em>Psychosomatic Medicine</em>; 76(3): 171–180.</li>
	<li>Grundmann, O., Yoon, S.L. (2010). <a href="https://www.ncbi.nlm.nih.gov/pubmed/20074154">Irritable bowel syndrome: epidemiology, diagnosis and treatment: an update for health-care practitioners</a>. <em>Journal of Gastroenterology and Hepatology</em><em>;</em> 25(4): 691–699.</li>
	<li>Michopoulos, V. (2016). <a href="http://www.sciencedirect.com/science/article/pii/S003193841630244X#bb0050" class="external-link external-popup" target="_blank">Stress-induced alterations in estradiol sensitivity increase risk for obesity in women <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Physiology &amp; Behavior</em>; 166: 56–64.</li>
	<li>Louis, G.M., Lum, K.J., Sundaram, R., Chen, Z., Kim, S., Lynch, C.D., et al. (2011). <a href="http://www.ncbi.nlm.nih.gov/pubmed/20688324">Stress reduces conception probabilities across the fertile window: evidence in support of relaxation</a>. <em>Fertility and Sterility</em>; 95(7): 2184–2189.</li>
	<li>Gollenberg, A.L., Hediger, M.L., Mumford, S.L., Whitcomb, B.W., Hovey, K.M., Wactawski-Wende, J., et al. (2010). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2875955/">Perceived Stress and Severity of Perimenstrual Symptoms: The BioCycle Study</a>. <em>Journal of Women’s Health</em>; 19(5): 959–967.</li>
	<li>Bertone-Johnson, E.R., Whitcomb, B.W., Missmer, S.A., Manson, J.E., Hankinson, S.E., Rich-Edwards, J.W. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4158950/">Early Life Emotional, Physical, and Sexual Abuse and the Development of Premenstrual Syndrome: A Longitudinal Study</a>. <em>Journal of Women’s Health (Larchmont)</em>; 23(9): 729–739.</li>
	<li>Hamilton, L.D, Meston, C.M. (2013). <a href="http://onlinelibrary.wiley.com/doi/10.1111/jsm.12249/abstract" class="external-link external-popup" target="_blank">Chronic Stress and Sexual Function in Women <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Journal of Sexual Medicine</em>; 10(10): 2443–2454.</li>
	<li>U.S. Department of Veteran Affairs, National Center for PTSD. (2015). <a href="http://www.ptsd.va.gov/public/PTSD-overview/women/women-trauma-and-ptsd.asp">Women, Trauma, and PTSD</a>.</li>
	<li>Verma, R., Balhara, Y.P.S., Gupta, C.S. (2011). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3425245/">Gender differences in stress response: Role of developmental and biological determinants</a>. <em>Industrial Psychiatry Journal</em>; 20(1): 4–10.</li>
	<li>Bangasser, D.A. (2013). <a href="http://www.bsd-journal.com/content/4/1/2" class="external-link external-popup" target="_blank">Sex differences in stress-related receptors: “micro” differences with “macro” implications for mood and anxiety disorders <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Biology of Sex Differences</em>; 4(2).</li>
	<li>Goyal, M., Singh, S., Sibinga, E.M.S., Gould, N.F., Rowland-Seymour, A., Sharma, R., et al. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4142584/">Meditation Programs for Psychological Stress and Well-Being: A Systematic Review and Meta-analysis</a>. <em>JAMA Internal Medicine</em>; 174(3), 357–368.</li>
	<li>National Center for Complementary and Integrative Health. (2015). <a href="https://nccih.nih.gov/health/tips/meditation">8 Things to Know About Meditation for Health</a>.</li>
	<li>Stough, C., Scholey, A., Lloyd, J., Spong, J., Myers, S., Downey, L.A. (2011). <a href="http://www.ncbi.nlm.nih.gov/pubmed/21905094">The effect of 90 day administration of a high dose vitamin B-complex on work stress</a>. <em>Human Psychopharmacology</em>; 26(7): 470–476.</li>
	<li>U.S. Department of Health and Human Services. (2018). <a href="https://health.gov/paguidelines/second-edition/pdf/Physical_Activity_Guidelines_2nd_edition.pdf">Physical Activity Guidelines for Americans, 2nd edition</a> (PDF, 14.2 MB).</li>
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
