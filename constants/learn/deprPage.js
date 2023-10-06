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

export function deprPage({ navigation, ...rest }) {
  const condName = "Depression";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Depression.jpg?VersionId=99zDmFD3ySU1S4NhWWABAkAUIa.UbX27";
  const condDescription =
    "Depression is a mental health illness when someone feels sad (including crying often), empty, or hopeless most of the time (or loses interest in or takes no pleasure in daily activities) for at least 2 weeks. Depression affects a person’s ability to work, go to school, or have relationships with friends and family. Depression is one of the most common mental health conditions in the United States.2 It is an illness that involves the body, mood, and thoughts. It can affect the way you eat and sleep, the way you feel about yourself, and the way you think about things. \n It is different from feeling “blue” or “down” or just sad for a few hours or a couple of days. Depression is also different from grief over losing a loved one or experiencing sadness after a trauma or difficult event. It is not a condition that can be willed or wished away. People who have depression cannot just “pull themselves” out of it.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Depression.jpg?VersionId=99zDmFD3ySU1S4NhWWABAkAUIa.UbX27"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Depression</h1>  -->
            <p><strong>Life is full of ups and downs, but when you feel sad, empty, or hopeless most of the time for at least 2 weeks or those feelings keep you from your regular activities, you may have depression.</strong> Depression is a serious mental health condition. In the past year, women were almost twice as likely as men to have symptoms of depression.<a href="#references"><sup>1</sup></a> Depression is not a normal part of being a woman. Most women, even those with the most severe depression, can get better with treatment.</p>

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
      title: "What is depression?",
      content: `

    <div class="answer"><p>Depression is a mental health illness when someone feels sad (including crying often), empty, or hopeless most of the time (or loses interest in or takes no pleasure in daily activities) for at least 2 weeks. Depression affects a person’s ability to work, go to school, or have relationships with friends and family. Depression is one of the most common mental health conditions in the United States.<a href="#references"><sup>2</sup></a> It is an illness that involves the body, mood, and thoughts. It can affect the way you eat and sleep, the way you feel about yourself, and the way you think about things.</p>

<p>It is different from feeling “blue” or “down” or just sad for a few hours or a couple of days. Depression is also different from grief over losing a loved one or experiencing sadness after a trauma or difficult event. It is not a condition that can be willed or wished away. People who have depression cannot just “pull themselves” out of it.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are there different types of depression? ",
      content: `

    <div class="answer"><p>Yes. Different kinds of depression include:</p>

<ul>
	<li><strong>Major depressive disorder.</strong> Also called major depression, this is a combination of symptoms that affects a person’s ability to sleep, work, study, eat, and enjoy hobbies and everyday activities.</li>
	<li><strong>Dysthymic disorder.</strong> Also called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="dis-THEYE-mee-uh">dysthymia</a>, this kind of depression lasts for 2 years or more. The symptoms are less severe than those of major depression but can prevent you from living normally or feeling well.</li>
</ul>

<p>Other types of depression have slightly different symptoms and may start after a certain event. These types of depression include:</p>

<ul>
	<li><strong>Psychotic depression</strong><strong>,</strong> when a severe depressive illness happens with some form of psychosis, such as a break with reality, <a href="/glossary#hallucination">hallucinations</a>, and <a href="/glossary#delusion">delusions</a></li>
	<li><a href="/mental-health/mental-health-conditions/postpartum-depression"><strong>Postpartum depression</strong></a><strong>,</strong> which is diagnosed if a new mother has a major depressive episode after delivery. Depression can also begin during pregnancy, called prenatal depression.</li>
	<li><strong>Seasonal affective disorder (SAD),</strong> which is a depression during the winter months, when there is less natural sunlight</li>
	<li><strong>Bipolar depression, </strong>which is the depressive phase of <a href="/mental-health/mental-health-conditions/bipolar-disorder-manic-depressive-illness">bipolar illness</a>&nbsp;and requires different treatment than major depression</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets depression?",
      content: `

    <div class="answer"><p>Women are twice as likely as men to be diagnosed with depression.<a href="#references"><sup>1</sup></a> It is more than twice as common for African-American, Hispanic, and white women to have depression compared to Asian-American women. Depression is also more common in women whose families live below the federal poverty line.<a href="#references"><sup>3</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes depression? ",
      content: `

    <div class="answer"><p>There is no single cause of depression. Also, different types of depression may have different causes. There are many reasons why a woman may have depression:</p>

<ul>
	<li><strong>Family history</strong><strong>.</strong> Women with a family history of depression may be more at risk. But depression can also happen in women who don’t have a family history of depression.</li>
	<li><strong>Brain changes.</strong> The brains of people with depression look and function differently from those of people who don’t have depression.</li>
	<li><strong>Chemistry. </strong>In someone who has depression, parts of the brain that manage mood, thoughts, sleep, appetite, and behavior may not have the right balance of chemicals.</li>
	<li><strong>Hormone levels. </strong>Changes in the female hormones estrogen and progesterone during the menstrual cycle, pregnancy, postpartum period, perimenopause, or menopause may all raise a woman’s risk for depression. Having a miscarriage can also put a woman at higher risk for depression.</li>
	<li><strong>Stress</strong><strong>.</strong> Serious and stressful life events, or the combination of several stressful events, such as trauma, loss of a loved one, a bad relationship, work responsibilities, caring for children and aging parents, abuse, and poverty, may trigger depression in some people.</li>
	<li><strong>Medical</strong><strong> problems.</strong> Dealing with a serious health problem, such as <a href="/heart-disease-and-stroke/stroke">stroke</a>, heart attack, or cancer, can lead to depression. Research shows that people who have a serious illness and depression are more likely to have more serious types of both conditions.<a href="#references"><sup>4</sup></a> Some medical illnesses, like Parkinson’s disease, <a href="/a-z-topics/thyroid-disease#5">hypothyroidism</a>, and stroke, can cause changes in the brain that can trigger depression.</li>
	<li><strong>Pain. </strong>Women who feel emotional or physical pain for long periods are much more likely to develop depression.<a href="#references"><sup>5</sup></a> The pain can come from a chronic (long-term) health problem, accident, or trauma such as <a href="/relationships-and-safety/sexual-assault-and-rape/sexual-assault">sexual assault</a> or abuse.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of depression?",
      content: `

    <div class="answer"><p>Not all people with depression have the same symptoms. Some people might have only a few symptoms, while others may have many. How often symptoms happen, how long they last, and how severe they are may be different for each person.</p>

<p>If you have any of the following symptoms for at least 2 weeks, talk to a doctor or nurse or mental health professional:</p>

<ul>
	<li>Feeling sad, “down,” or empty, including crying often</li>
	<li>Feeling hopeless, helpless, worthless, or useless</li>
	<li>Loss of interest in hobbies and activities that you once enjoyed</li>
	<li>Decreased energy</li>
	<li>Difficulty staying focused, remembering, or making decisions</li>
	<li>Sleeplessness, early morning awakening, or oversleeping and not wanting to get up</li>
	<li>Lack of appetite, leading to weight loss, or eating to feel better, leading to weight gain</li>
	<li>Thoughts of hurting yourself</li>
	<li>Thoughts of death or suicide</li>
	<li>Feeling easily annoyed, bothered, or angered</li>
	<li>Constant physical symptoms that do not get better with treatment, such as headaches, upset stomach, and pain that doesn’t go away</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is depression linked to other health problems?",
      content: `

    <div class="answer"><p>Depression is linked to many health problems in women, including:<a href="#references"><sup>6</sup></a></p>

<ul>
	<li><a href="/heart-disease-and-stroke/heart-disease"><strong>Heart disease</strong></a><strong>. </strong>People with heart disease are about twice as likely to have depression as people who don’t have heart disease.<a href="#references"><sup>7</sup></a></li>
	<li><a href="/healthy-weight"><strong>Obesity</strong></a><strong>.</strong> Studies show that 43% of adults with depression have obesity. Women, especially white women, with depression are more likely to have obesity than women without depression are.<a href="#references"><sup>8</sup></a> Women with depression are also more likely than men with depression to have obesity.<a href="#references"><sup>8</sup></a></li>
	<li><strong><a href="/cancer">Cancer</a>.</strong> Up to 1 in 4 people with cancer may also experience depression. More women with cancer than men with cancer experience depression.<a href="#references"><sup>9</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is depression diagnosed? ",
      content: `

    <div class="answer"><p>Talk to your doctor or nurse if you have symptoms of depression. Certain medicines and some health problems (such as viruses or a thyroid disorder) can cause the same symptoms as depression. Sometimes depression can be part of another mental health condition.</p>

<p>Diagnosis of depression includes a mental health professional asking questions about your life, emotions, struggles, and symptoms. The doctor, nurse, or mental health professional may order lab tests on a sample of your blood or urine and do a regular checkup to rule out other problems that could be causing your symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is depression treated? ",
      content: `

    <div class="answer"><p>Your doctor or mental health professional may treat depression with therapy, medicine, or a combination of the two. Your doctor or nurse may refer you to a mental health specialist for therapy.</p>

<p>Some people with milder forms of depression get better after a few months of therapy. People with moderate to severe depression might need therapy and a type of medicine called an antidepressant. Antidepressants change the levels of certain chemicals in your brain. It may take several weeks for antidepressants to work. There are different types of antidepressant medicines, and some work better than others for certain people. Some people get better only with both treatments — therapy and antidepressants. <a href="#9">Learn what you can do</a> if these treatments don't help.</p>

<p>Having depression can make some people more likely to turn to drugs or alcohol to cope. But drugs or alcohol can make your mental health condition worse and can affect how antidepressants work. Talk to your therapist or doctor or nurse about any alcohol or drug use.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if the treatments I try for depression don’t work?",
      content: `

    <div class="answer"><p>Give treatments time to work. It may take several weeks for the antidepressants to start working.&nbsp;Do not suddenly stop taking medicine for depression without talking to your doctor or nurse first.</p>

<p>If you have <a href="#2">major depressive disorder</a> and have tried at least 2 types of antidepressants but your symptoms are not getting better, you may have treatment-resistant depression. If you have this type of depression, you may be able to try a treatment called esketamine. Esketamine is a nasal spray that has been approved by the Food and Drug Administration (FDA) for treatment-resistant depression when taken together with an antidepressant.<a href="#references"><sup>10</sup></a> Do not take esketamine if you are pregnant or breastfeeding. Talk to your doctor or nurse about the benefits and risks of esketamine. <a href="https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-post-partum-depression">Learn more about esketamine from the FDA</a>.</p>

<p>If you have severe depression, you can also ask your doctor or nurse if electroconvulsive therapy (ECT) and other brain stimulation therapies are treatment options.<a href="#references"><sup>11</sup></a> Learn more about ECT from the <a href="https://www.nimh.nih.gov/health/topics/depression/index.shtml#part_145399">National Institutes of Mental Health</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "I think I may have depression. How can I get help?",
      content: `

    <div class="answer"><p>Talk to someone like a doctor, nurse, psychiatrist, mental health professional, or social worker about your symptoms. You can also find no-cost or low-cost help in your state by using the <a href="https://findtreatment.samhsa.gov/" title="Behavioral Health Treatment Services Locator">mental health services locator</a> on the&nbsp;top left side (desktop view) or bottom (mobile view) of this page.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if I have thoughts of hurting myself?",
      content: `

    <div class="answer"><p>If you are thinking about hurting or even killing yourself, <strong>get help now.</strong> Call 911 or the&nbsp;<a href="http://www.suicidepreventionlifeline.org/" title="National Suicide Prevention Lifeline" class="external-link external-popup" target="_blank">National Suicide Prevention Lifeline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;at 1-800-273-TALK (8255).</p>

<p>You might feel like your pain is too overwhelming to bear, but those feelings don’t last forever. People do make it through suicidal thoughts. Many thoughts of suicide are impulses that go away after a short period of time.<a href="#references"><sup>12</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I take St. John’s wort to treat depression? ",
      content: `

    <div class="answer"><p>Taking St. John’s wort for depression has not been approved by the Food and Drug Administration (FDA). Studies show mixed results about the plant’s ability to treat depression.<a href="#references"><sup>13</sup></a></p>

<p>It may be dangerous to take St. John’s wort if you also take other medicines. St. John’s wort can make many medicines not work at all or may cause dangerous or life-threatening side effects. The medicines used to treat heart disease, HIV, depression, seizures, certain cancers, and organ transplant rejection may not work or may have dangerous side effects if taken with St. John’s wort. St. John’s wort may also make birth control pills not work, which increases the chance you will get pregnant when you don’t want to.<sup><a href="#references">14</a> </sup>It is crucial that you tell your doctor or nurse if you take St. John’s wort.</p>

<p>Depression is a serious mental illness that can be successfully treated with therapy and FDA-approved medicines. FDA-approved medicines and natural treatments can have side effects. It’s best to talk to a doctor or nurse about treatment for depression.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does exercise help treat depression?",
      content: `

    <div class="answer"><p>For some people, yes. Researchers think that exercise may work better than no treatment at all to treat depression.<sup><a href="#references">15</a></sup> They also think that regular exercise can lower your risk of getting depression and help many depression symptoms get better.<a href="#references"><sup>16</sup></a> Researchers do not know whether exercise works as well as therapy or medicine to treat depression.<sup><a href="#references">15</a></sup> People with depression often find it very difficult to exercise, even though they know it will help make them feel better. Walking is a good way to begin exercising if you haven’t exercised recently.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Are there other natural or complementary treatments for depression?",
      content: `

    <div class="answer"><p>Researchers are studying natural and complementary treatments (add-on treatments to medicine or therapy) for depression. Currently, none of the natural or complementary treatments are proven to work as well as medicine and therapy for depression. However, natural or complementary treatments that have little or no risk, like exercise, meditation, or relaxation training, may help improve your depression symptoms and usually will not make them worse.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Will treatment for depression affect my chances of getting pregnant? ",
      content: `

    <div class="answer"><p>Maybe. Some medicines, such as some types of antidepressants, may make it more difficult for you to get pregnant, but more research is needed.<a href="#references"><sup>17</sup></a> Talk to your doctor about other treatments for depression that don’t involve medicine if you are trying to get pregnant. For example, a type of talk therapy called cognitive behavioral therapy (CBT) helps women with depression.<a href="#references"><sup>18</sup></a> This type of therapy has little to no risk for women trying to get pregnant. During CBT, you work with a mental health professional to explore why you are depressed and train yourself to replace negative thoughts with positive ones. Certain mental health care professionals specialize in depression related to infertility.</p>

<p>Women who are already taking an antidepressant and who are trying to get pregnant should talk to their doctor or nurse about the risks and benefits of stopping the medicine. Learn more about taking medicines during pregnancy in our <a href="/a-z-topics/pregnancy-and-medicines">Pregnancy</a> section.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about depression?",
      content: `

    <div class="answer"><p>For more information about depression, call the OWH Helpline at 1-800-994-9662 or check out these resources from the following organizations:</p>

<ul>
	<li><a href="http://www.helpguide.org/home-pages/depression.htm" title="Depression – HelpGuide.org" class="external-link external-popup" target="_blank">Depression <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from HelpGuide.org.</li>
	<li><a href="http://www.dbsalliance.org/site/PageServer?pagename=education_depression" title="Depression – Depression and Bipolar Support Alliance" class="external-link external-popup" target="_blank">Depression <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the Depression and Bipolar Support Alliance.</li>
	<li><a href="https://www.nimh.nih.gov/health/publications/depression-in-women-tr-16-4779/index.shtml" title="Depression in Women: 5 Things You Should Know">Depression in Women: 5 Things You Should Know</a>&nbsp;&nbsp;— Brochure from the National Institute of Mental Health.</li>
	<li><a href="https://www.nimh.nih.gov/health/publications/older-adults-and-depression-qf-16-7697/index.shtml" title="Older Adults and Depression">Older Adults and Depression</a> — Booklet from the National Institute of Mental Health.</li>
	<li><a href="http://www.mentalhealthamerica.net/conditions/postpartum-disorders" title="Postpartum Disorders" class="external-link external-popup" target="_blank">Postpartum Disorders <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from Mental Health America.</li>
	<li><a href="https://nccih.nih.gov/health/stjohnswort/sjw-and-depression.htm" title="St. John’s Wort and Depression: In Depth">St. John’s Wort and Depression: In Depth</a>&nbsp;— Information from the National Center for Complementary and Integrative Health.</li>
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
	<li>Substance Abuse and Mental Health Services Administration Center for Behavioral Health Statistics and Quality (SAMHSA). (2018). <a href="https://www.samhsa.gov/data/sites/default/files/cbhsq-reports/NSDUHDetailedTabs2017/NSDUHDetailedTabs2017.pdf">2017 National Survey on Drug Use and Health: Detailed Tables. Table 8.56A</a> (PDF, 36.1 MB).</li>
	<li>SAMHSA Center for Behavioral Health Statistics and Quality. (2016). <a href="https://www.samhsa.gov/data/sites/default/files/NSDUH-FFR1-2015/NSDUH-FFR1-2015/NSDUH-FFR1-2015.pdf">Key substance use and mental health indicators in the United States: Results from the 2015 National Survey on Drug Use and Health</a> (PDF, 2.3 MB). HHS Publication No. SMA 16-4984, NSDUH Series H-51. Rockville, MD: SAMHSA.</li>
	<li>Brody, D.J., Pratt, L.A., Hughes, J. (2018). <a href="https://www.cdc.gov/nchs/products/databriefs/db303.htm">Prevalence of depression among adults aged 20 and over: United States, 2013–2016</a>. NCHS Data Brief, no 303. Hyattsville, MD: National Center for Health Statistics.</li>
	<li>Kang, H.-J., Kim, S.-Y., Bae, K.-Y., Kim, S.-W., Chin, I.-S., Yoon, J.-S., et al. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4406996/">Comorbidity of Depression with Physical Disorders: Research and Clinical Implications</a>. <em>Chonnam Medical Journal</em>; 51(1): 8–18.</li>
	<li>Trivedi, M.H. (2004). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC486942/">The Link Between Depression and Physical Symptoms</a>. <em>The Primary Care Companion to the Journal of Clinical Psychiatry</em>; 6(Suppl 1): 12–16.</li>
	<li>Chapman, D.P., Perry, G.S., Strine, T.W. (2005). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1323317/">The Vital Link Between Chronic Disease and Depressive Disorders</a>. <em>Preventing Chronic Disease</em>; 2(1): A14.</li>
	<li>Lichtman, J.H., Bigger, J.T., Blumenthal, J.A., Frasure-Smith, N., Kaufmann, P.G., Lespérance, F., et al. (2008). <a href="http://circ.ahajournals.org/content/118/17/1768" class="external-link external-popup" target="_blank">Depression and Coronary Heart Disease <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Circulation</em>; 118: 1768–1775.</li>
	<li>Pratt, L.A., Brody, D.J. (2014). <a href="https://www.cdc.gov/nchs/products/databriefs/db167.htm">Depression and Obesity in the U.S. Adult Household Population, 2005–2010</a>. NCHS Data Brief No. 167. Hyattsville, MD: National Center for Health Statistics.</li>
	<li>Linden, W., Vodermaier, A., Mackenzie, R., Greig, D. (2012). <a href="https://www.ncbi.nlm.nih.gov/pubmed/22727334/">Anxiety and depression after cancer diagnosis: prevalence rates by cancer type, gender, and age</a>. <em>Journal of Affective Disorders</em>; 141(2–3): 343–351.</li>
	<li>U.S. Food and Drug Administration. (2019). <a href="https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-post-partum-depression">FDA approves first treatment for post-partum depression</a>.</li>
	<li>National Institute of Mental Health. (2018). <a href="https://www.nimh.nih.gov/health/topics/depression/index.shtml#part_145399">Depression: Treatment and therapies</a>.</li>
	<li>Cáceda, R., Durand, D., Cortes, E., Prendes-Alvarez, S., Moskovciak, T., Harvey, P.D., et al. (2014). <a href="https://www.ncbi.nlm.nih.gov/pubmed/24988311">Impulsive choice and psychological pain in acutely suicidal depressed patients</a>. <em>Psychosomatic Medicine</em>; 76(6): 445–451.</li>
	<li>National Center for Complementary and Integrative Health (NCCIH). (2016). <a href="https://nccih.nih.gov/health/stjohnswort/sjw-and-depression.htm">St. John's Wort and Depression: In Depth</a>.</li>
	<li>NCCIH. (2016). <a href="https://nccih.nih.gov/health/stjohnswort/ataglance.htm">Fact Sheet: St. John's Wort</a>.</li>
	<li>Cooney, G.M., Dwan, K., Greig, C.A., Lawlor, D.A., Rimer, J., Waugh, F.R., et al. (2013). <a href="http://onlinelibrary.wiley.com/doi/10.1002/14651858.CD004366.pub6/abstract" class="external-link external-popup" target="_blank">Exercise for depression <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Cochrane Database of Systematic Reviews</em>; 9.</li>
	<li>U.S. Department of Health and Human Services. (2018). <a href="https://health.gov/paguidelines/second-edition/pdf/Physical_Activity_Guidelines_2nd_edition.pdf">Physical Activity Guidelines for Americans, 2nd edition</a> (PDF, 14.2 MB).</li>
	<li>Casilla-Lennon, M.M., Meltzer-Brody, S., Steiner, A.Z. (2016). <a href="http://www.ajog.org/article/S0002-9378(16)00220-9/fulltext" class="external-link external-popup" target="_blank">The effect of antidepressants on fertility <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>American Journal of Obstetrics and Gynecology</em>; 215(3): 314.e1–314.e5.</li>
	<li>Driessen, E., Hollon, S.D. (2010). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2933381/">Cognitive Behavioral Therapy for Mood Disorders: Efficacy, Moderators and Mediators</a>. <em>Psychiatric Clinics of North America</em>; 33(3): 537–555.</li>
</ol>

<ol>
	<li>Substance Abuse and Mental Health Services Administration Center for Behavioral Health Statistics and Quality (SAMHSA). (2018). <a href="https://www.samhsa.gov/data/sites/default/files/cbhsq-reports/NSDUHDetailedTabs2017/NSDUHDetailedTabs2017.pdf">2017 National Survey on Drug Use and Health: Detailed Tables. Table 8.56A</a> (PDF, 36.1 MB).</li>
	<li>SAMHSA Center for Behavioral Health Statistics and Quality. (2016). <a href="https://www.samhsa.gov/data/sites/default/files/NSDUH-FFR1-2015/NSDUH-FFR1-2015/NSDUH-FFR1-2015.pdf">Key substance use and mental health indicators in the United States: Results from the 2015 National Survey on Drug Use and Health</a> (PDF, 2.3 MB). HHS Publication No. SMA 16-4984, NSDUH Series H-51. Rockville, MD: SAMHSA.</li>
	<li>Brody, D.J., Pratt, L.A., Hughes, J. (2018). <a href="https://www.cdc.gov/nchs/products/databriefs/db303.htm">Prevalence of depression among adults aged 20 and over: United States, 2013–2016</a>. NCHS Data Brief, no 303. Hyattsville, MD: National Center for Health Statistics.</li>
	<li>Kang, H.-J., Kim, S.-Y., Bae, K.-Y., Kim, S.-W., Chin, I.-S., Yoon, J.-S., et al. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4406996/">Comorbidity of Depression with Physical Disorders: Research and Clinical Implications</a>. <em>Chonnam Medical Journal</em>; 51(1): 8–18.</li>
	<li>Trivedi, M.H. (2004). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC486942/">The Link Between Depression and Physical Symptoms</a>. <em>The Primary Care Companion to the Journal of Clinical Psychiatry</em>; 6(Suppl 1): 12–16.</li>
	<li>Chapman, D.P., Perry, G.S., Strine, T.W. (2005). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1323317/">The Vital Link Between Chronic Disease and Depressive Disorders</a>. <em>Preventing Chronic Disease</em>; 2(1): A14.</li>
	<li>Lichtman, J.H., Bigger, J.T., Blumenthal, J.A., Frasure-Smith, N., Kaufmann, P.G., Lespérance, F., et al. (2008). <a href="http://circ.ahajournals.org/content/118/17/1768" class="external-link external-popup" target="_blank">Depression and Coronary Heart Disease <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Circulation</em>; 118: 1768–1775.</li>
	<li>Pratt, L.A., Brody, D.J. (2014). <a href="https://www.cdc.gov/nchs/products/databriefs/db167.htm">Depression and Obesity in the U.S. Adult Household Population, 2005–2010</a>. NCHS Data Brief No. 167. Hyattsville, MD: National Center for Health Statistics.</li>
	<li>Linden, W., Vodermaier, A., Mackenzie, R., Greig, D. (2012). <a href="https://www.ncbi.nlm.nih.gov/pubmed/22727334/">Anxiety and depression after cancer diagnosis: prevalence rates by cancer type, gender, and age</a>. <em>Journal of Affective Disorders</em>; 141(2–3): 343–351.</li>
	<li>U.S. Food and Drug Administration. (2019). <a href="https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-post-partum-depression">FDA approves first treatment for post-partum depression</a>.</li>
	<li>National Institute of Mental Health. (2018). <a href="https://www.nimh.nih.gov/health/topics/depression/index.shtml#part_145399">Depression: Treatment and therapies</a>.</li>
	<li>Cáceda, R., Durand, D., Cortes, E., Prendes-Alvarez, S., Moskovciak, T., Harvey, P.D., et al. (2014). <a href="https://www.ncbi.nlm.nih.gov/pubmed/24988311">Impulsive choice and psychological pain in acutely suicidal depressed patients</a>. <em>Psychosomatic Medicine</em>; 76(6): 445–451.</li>
	<li>National Center for Complementary and Integrative Health (NCCIH). (2016). <a href="https://nccih.nih.gov/health/stjohnswort/sjw-and-depression.htm">St. John's Wort and Depression: In Depth</a>.</li>
	<li>NCCIH. (2016). <a href="https://nccih.nih.gov/health/stjohnswort/ataglance.htm">Fact Sheet: St. John's Wort</a>.</li>
	<li>Cooney, G.M., Dwan, K., Greig, C.A., Lawlor, D.A., Rimer, J., Waugh, F.R., et al. (2013). <a href="http://onlinelibrary.wiley.com/doi/10.1002/14651858.CD004366.pub6/abstract" class="external-link external-popup" target="_blank">Exercise for depression <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Cochrane Database of Systematic Reviews</em>; 9.</li>
	<li>U.S. Department of Health and Human Services. (2018). <a href="https://health.gov/paguidelines/second-edition/pdf/Physical_Activity_Guidelines_2nd_edition.pdf">Physical Activity Guidelines for Americans, 2nd edition</a> (PDF, 14.2 MB).</li>
	<li>Casilla-Lennon, M.M., Meltzer-Brody, S., Steiner, A.Z. (2016). <a href="http://www.ajog.org/article/S0002-9378(16)00220-9/fulltext" class="external-link external-popup" target="_blank">The effect of antidepressants on fertility <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>American Journal of Obstetrics and Gynecology</em>; 215(3): 314.e1–314.e5.</li>
	<li>Driessen, E., Hollon, S.D. (2010). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2933381/">Cognitive Behavioral Therapy for Mood Disorders: Efficacy, Moderators and Mediators</a>. <em>Psychiatric Clinics of North America</em>; 33(3): 537–555.</li>
</ol>
</div>
`,
    },
  ];
  return [condName, condImURL, condDescription, condHeader, condQA];
}

export function deprScreening({ navigation, ...rest }) {
  const screeningTree = [
    {
      title: "Depression Question1",
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
      title: "Depression Question2",
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
