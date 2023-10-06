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

export function insomniaPage({ navigation, ...rest }) {
  const condName = "Insomnia";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Insomnia.jpg?VersionId=VjPA6bmg9FUu5azs5CJw1MN4eEGUFSkN";
  const condDescription =
    "Insomnia is a common sleep disorder. It is defined as an inability to go to sleep, waking up too early, or feeling unrested after sleep for at least three nights a week for at least three months. Most adult women need to get seven or more hours of sleep a night to feel rested.3 \n Chronic or long-term insomnia makes it difficult to accomplish routine tasks like going to work or school and taking care of yourself. Insomnia can lead to or contribute to the development of other health problems, such as depression, heart disease, and stroke.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Insomnia.jpg?VersionId=VjPA6bmg9FUu5azs5CJw1MN4eEGUFSkN"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Insomnia</h1>  -->
            <p><strong>Insomnia is one of the most commonly reported sleep problems</strong>. One in four women has some insomnia symptoms, such as trouble falling asleep, trouble staying asleep, or both.<a href="#references"><sup>1</sup></a> About one in seven adults has chronic (long-term) insomnia.<a href="#references"><sup>2</sup></a> Chronic insomnia can affect your ability to do daily tasks like working, going to school, or caring for yourself. Insomnia is more common in women, especially older women, than in men.</p>

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
      title: "What is insomnia?",
      content: `

    <div class="answer"><p>Insomnia is a common sleep disorder. It is defined as an inability to go to sleep, waking up too early, or feeling unrested after sleep for at least three nights a week for at least three months. Most adult women need to get seven or more hours of sleep a night to feel rested.<a href="#references"><sup>3</sup></a></p>

<p>Chronic or long-term insomnia makes it difficult to accomplish routine tasks like going to work or school and taking care of yourself. Insomnia can lead to or contribute to the development of other health problems, such as depression, heart disease, and stroke.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of insomnia?",
      content: `

    <div class="answer"><p>There are two types of insomnia:</p>

<ul>
	<li><strong>Primary insomnia. </strong>Primary insomnia is a disorder. It is not a symptom or a side effect of another medical condition. Your doctor may diagnose your sleeplessness as primary insomnia after ruling out other medical conditions as a cause.</li>
	<li><strong>Secondary insomnia. </strong>Secondary insomnia is caused by or happens alongside other health conditions or as a side effect of prescribed medicines. It can be acute (short-term) or chronic (long-term). Most people with chronic insomnia have secondary insomnia.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes primary insomnia?",
      content: `

    <div class="answer"><p>The exact cause of primary insomnia is unknown. It may be lifelong, or it can happen because of changes in your routine during travel or stressful life events.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes secondary insomnia?",
      content: `

    <div class="answer"><p>Conditions that may trigger or happen at the same time as secondary insomnia include:</p>

<ul>
	<li>Mental health conditions, such as depression,<a href="#references"><sup>4</sup></a> anxiety,<a href="#references"><sup>4</sup></a> or post-traumatic stress disorder (PTSD)<a href="#references"><sup>5</sup></a></li>
	<li>Traumatic brain injury (TBI)<a href="#references"><sup>6</sup></a></li>
	<li>Neurological (brain) disorders, such as Alzheimer's disease or Parkinson's disease</li>
	<li>Conditions that cause chronic pain, such as arthritis</li>
	<li>Conditions that make it hard to breathe, such as asthma and sleep apnea</li>
	<li>Trouble with hormones, including <a href="/a-z-topics/thyroid-disease">thyroid</a> problems</li>
	<li>Gastrointestinal disorders, such as heartburn</li>
	<li><a href="/heart-disease-and-stroke/stroke">Stroke</a></li>
	<li>Other sleep disorders, such as <a href="/glossary#restless_leg_syndrome">restless legs syndrome (RLS)</a></li>
	<li>Menopause symptoms, such as hot flashes</li>
	<li>Cancer</li>
	<li>Side effects of medicines, like those to treat cancer, asthma, heart disease, allergies, and colds</li>
</ul>

<p>Talk to your doctor or nurse if you think another health problem could be causing insomnia.</p>

<p>Other things that can keep you from getting enough sleep include:</p>

<ul>
	<li><strong>Caffeine, tobacco, and alcohol.</strong> Caffeine and nicotine in tobacco products can disrupt sleep, especially if taken within several hours of going to bed. Alcohol may make it easier to fall asleep at first, but it can cause you to wake up too early and not be able to fall back asleep.</li>
	<li><strong>A traumatic event.</strong> People who witness or experience a traumatic event, such as an accident, natural disaster, physical attack, or war, can have trouble falling and staying asleep. Getting treatment for symptoms of anxiety or PTSD as a result of the trauma can help insomnia get better.</li>
	<li><strong>A bad sleep environment.</strong> Having a bed or place to sleep that is uncomfortable, unsafe, noisy, or too bright can make it difficult to fall asleep.</li>
	<li><strong>A partner with sleep problems.</strong> If you sleep with a partner who snores or has sleep apnea, your sleep may be more restless and interrupted. Snoring and sleep apnea can be treated.</li>
	<li><strong>Pregnancy. </strong>During pregnancy, especially in the third trimester, you may wake up more often than usual because of discomfort, leg cramps, or needing to use the bathroom.</li>
	<li><strong>Having a new baby.</strong> Changing hormone levels after childbirth can disrupt your sleep. Very young babies do not usually sleep longer than a few hours at a time and need to be fed every few hours.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets insomnia?",
      content: `

    <div class="answer"><p>Anyone can get insomnia, but it affects more women than men. More than one in four women in the United States experience insomnia, compared with fewer than one in five men.<a href="#references"><sup>1</sup></a> In one study, women of all ages reported worse sleep quality than men, including taking longer to fall asleep, sleeping for shorter periods of time, and feeling sleepier when awake.<a href="#references"><sup>7</sup></a><sup>,</sup><a href="#references"><sup>8</sup></a></p>

<p>Older women are at a higher risk of insomnia. Other people at risk for insomnia include those who:<a href="#references"><sup>9</sup></a><sup>,</sup><a href="#references"><sup>10</sup></a></p>

<ul>
	<li>Have a lot of stress</li>
	<li>Have <a href="/a-z-topics/depression">depression</a><a href="#references"><sup>11</sup></a> or other mental health conditions<a href="#references"><sup>4</sup></a></li>
	<li>Work nights or have an irregular sleep schedule, such as shift workers<a href="#references"><sup>12</sup></a></li>
	<li>Travel long distances with time changes, such as air travelers</li>
	<li>Have certain medical conditions, like sleep apnea, asthma, and <a href="/a-z-topics/fibromyalgia">fibromyalgia</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why do more women than men have insomnia?",
      content: `

    <div class="answer"><p>Women may be more likely to have insomnia than men because women experience unique hormonal changes that can cause insomnia symptoms. These include hormonal changes during:</p>

<ul>
	<li><strong>The </strong><a href="/menstrual-cycle"><strong>menstrual cycle</strong></a><strong>, </strong>especially in the days leading up to their period when many women report problems going to sleep and staying asleep.<a href="#references"><sup>13</sup></a> This is especially common in women who have <a href="/menstrual-cycle/premenstrual-syndrome/premenstrual-dysphoric-disorder-pmdd">premenstrual dysphoric disorder (PMDD)</a>, a more severe type of premenstrual syndrome (PMS).<a href="#references"><sup>14</sup></a></li>
	<li><a href="/pregnancy"><strong>Pregnancy</strong></a><strong>,</strong> especially in the third trimester, when women may wake up often because of discomfort, leg cramps, or needing to use the bathroom.</li>
	<li><a href="/menopause"><strong>Perimenopause and menopause</strong></a><strong>,</strong> when hot flashes and night sweats can disturb sleep.</li>
</ul>

<p>Also, some health problems that can cause <a href="#2">secondary insomnia</a> are more common in women than in men. These include:</p>

<ul>
	<li><a href="/a-z-topics/depression"><strong>Depression</strong></a><strong> and </strong><a href="/node/"><strong>anxiety</strong></a><strong>.</strong> People with insomnia are 10 times more likely to have depression, and 17 times more likely to have anxiety.<a href="#references"><sup>15</sup></a> Researchers aren't sure if mental health conditions lead to insomnia or if insomnia leads to mental health conditions.<a href="#references"><sup>4</sup></a> But not getting enough sleep may make mental health conditions worse.</li>
	<li><a href="/a-z-topics/fibromyalgia"><strong>Fibromyalgia</strong></a><strong>.</strong> The pain experienced with fibromyalgia can make it difficult to fall asleep and stay asleep.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How long does insomnia last?",
      content: `

    <div class="answer"><p>It depends. Insomnia can be acute (short-term) or chronic (long-term). While acute insomnia may last for only a few days or weeks, chronic insomnia can last for three months or more.<a href="#references"><sup>16</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of insomnia?",
      content: `

    <div class="answer"><p>The most common symptom of insomnia is difficulty sleeping — either going to sleep, staying asleep, or waking up too early. If you have insomnia, you may:</p>

<ul>
	<li>Lie awake for a long time without going to sleep</li>
	<li>Wake up during the night and find it difficult to go back to sleep</li>
	<li>Not feel rested when you wake up</li>
</ul>

<p>Lack of sleep may cause other symptoms during the daytime. For example, you may wake up feeling tired, and you may have low energy during the day. It can also cause you to feel anxious, depressed, or irritable, and you may have a hard time concentrating or remembering things.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does insomnia affect women's health?",
      content: `

    <div class="answer"><p>Insomnia can cause you to feel tired, anxious, or irritable in the short term. Over time, lack of sleep may increase your risk for more serious problems, including:</p>

<ul>
	<li>Accidents</li>
	<li>Health problems, including diabetes and high blood pressure<a href="#references"><sup>3</sup></a><sup>,</sup><a href="#references"><sup>9</sup></a></li>
	<li>Increased risk for falls, especially in older women<a href="#references"><sup>17</sup></a></li>
</ul>

<p>Women who have long-term insomnia may be more at risk than men with long-term insomnia for mood problems, heart disease and stroke, and obesity.<a href="#references"><sup>18</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is insomnia diagnosed?",
      content: `

    <div class="answer"><p>To find out if you have insomnia, your doctor will do a physical exam and ask you about your symptoms, daily habits, and stress levels.</p>

<p>Your doctor may also:</p>

<ul>
	<li><strong>Ask you about your sleep habits. </strong>Try to keep a sleep diary for one or two weeks before you see your doctor. Write down the times you go to sleep, wake up, and take naps. Keep track of how long you sleep each night and how you feel throughout the day. If you still have a menstrual period, track your cycle on your calendar also.</li>
	<li><strong>Do tests to rule out other medical problems that might cause insomnia. </strong>These might include blood tests to check for thyroid problems or other medical conditions.</li>
	<li><strong>Talk to you about the medicines you take. </strong>Some medicines, including some used to treat heart problems and depression, may cause sleep problems.<a href="#references"><sup>19</sup></a> Tell your doctor or nurse about all the medicines you take, including prescription and over-the-counter medicines. Your doctor or nurse will help you find medicines that work best for you.</li>
	<li><strong>Ask you to do a sleep study, called a polysomnogram (PSG).</strong> During a sleep study, you stay overnight at a sleep center or medical facility. You are hooked up to monitors that record brain activity, eye movements, heart rate, and blood pressure while you sleep. Machines also record snoring, chest movements, the amount of oxygen in your blood, and how much air moves through your nose while you breathe.</li>
</ul>

<p>You can also get a diagnosis from a doctor who specializes in sleep medicine. Find a <a href="https://www.behavioralsleep.org/index.php/united-states-sbsm-members" title="Society of Behavioral Sleep Medicine Members" class="external-link external-popup" target="_blank">sleep medicine doctor <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> near you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is insomnia treated?",
      content: `

    <div class="answer"><p><strong>If your insomnia is caused by a short-term change in your sleep/wake schedule,</strong> such as with jet lag, your sleep schedule will probably return to normal on its own.</p>

<p><strong>Chronic or long-term insomnia</strong> can be treated with <a href="#18">steps you can try at home to sleep better</a>, <a href="#12">cognitive behavioral therapy (CBT)</a>, and <a href="#13">prescription medicines</a>.</p>

<p><strong>If insomnia is a symptom or side effect of another health problem,</strong> your doctor may recommend treating the other health problem at the same time. When the other health problem is treated, secondary insomnia often goes away on its own. For example, if menopause symptoms, such as hot flashes, are keeping you awake, your doctor might try treating your hot flashes first. Research suggests that older women who use hormone replacement therapy, eat healthy foods based on a Mediterranean diet, and limit how much caffeine and alcohol they drink may have fewer sleep problems than women who did not do those things.<a href="#references"><sup>20</sup></a></p>

<p>Talk to your doctor or nurse if you have symptoms of insomnia, and ask about the best ways to treat insomnia.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does cognitive behavioral therapy help treat insomnia? ",
      content: `

    <div class="answer"><p>Research shows that cognitive behavioral therapy (CBT) works as well as prescription medicine for many people who have chronic or long-term insomnia.<a href="#references"><sup>21</sup></a> CBT helps you change thoughts and actions that may get in the way of sleep.</p>

<p>This type of therapy is also used to treat conditions such as depression, anxiety disorders, and eating disorders. For success with CBT, you may need to see a therapist weekly for two months or more.<a href="#references"><sup>21</sup></a> CBT may involve:</p>

<ul>
	<li>Keeping a diary to track your sleep</li>
	<li>Replacing negative thoughts about sleep with positive thinking. This includes linking being in bed to being asleep and not to the problems you have falling asleep.</li>
	<li>Talking with a therapist alone or in group sessions. This can help you identify and change any unhelpful thoughts and behaviors about sleep.</li>
	<li>Learning <a href="#18">habits that can help you sleep better</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What prescription medicines treat insomnia?",
      content: `

    <div class="answer"><p>Prescription medicines can help treat short-term or long-term insomnia.<a href="#references"><sup>2</sup></a> But your doctor or nurse may have you try <a href="#12">cognitive behavioral therapy</a> first rather than medicine to treat insomnia.<a href="#references"><sup>2</sup></a></p>

<p>The types of prescription medicines used to treat insomnia include <a href="/glossary#sedative">sedatives</a> and certain kinds of antidepressants.<a href="#references"><sup>22</sup></a> Prescription sleep medicines can have serious side effects, including sleepiness during the daytime and increased risk of falls for older adults.<a href="#references"><sup>2</sup></a><sup>,</sup><a href="#references"><sup>17</sup></a> They can also affect women differently than men. In 2013, the Food and Drug Administration (FDA) required drug companies to lower the recommended dose for women of certain prescription sleep medicines with zolpidem, because women's bodies do not break down the medicine as quickly as men's bodies do.<a href="#references"><sup>23</sup></a></p>

<p>If you decide to use a prescription sleep medicine:</p>

<ul>
	<li>Ask your doctor, nurse, or pharmacist about any warnings and potential side effects of the medicine.</li>
	<li>Take the medicine at the time of day your doctor tells you to.</li>
	<li>Do not drive or do other activities that require you to be alert and sober.</li>
	<li>Take only the amount of medicine prescribed by your doctor.</li>
	<li>Tell your doctor, nurse, or pharmacist about all other medicines you take, both over-the-counter and prescription.</li>
	<li>Call your doctor or nurse right away if you have any problems while using the medicine.</li>
	<li>Do not drink alcohol.</li>
	<li>Do not take medicines that your doctor has not prescribed to you.</li>
	<li>Talk to your doctor or nurse if you want to stop using the sleep medicine. You need to stop taking some sleep medicines gradually (a little at a time).</li>
</ul>

<p>When taking sleep medicine, make sure to give yourself enough time to get a full night of sleep. A full night of sleep is usually at least seven hours. Ask your doctor or pharmacist to tell you about any side effects of taking sleep medicine, such as grogginess that may make it difficult to drive. Talk to your doctor or nurse if your insomnia symptoms continue longer than four weeks.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I take an over-the-counter (OTC) medicine for insomnia? ",
      content: `

    <div class="answer"><p>OTC medicines, or sleep aids, may help some people with insomnia symptoms, but they are not meant for regular or long-term use. Many OTC sleep medicines contain <a href="/glossary#antihistamines">antihistamines</a> that are usually used to treat allergies.</p>

<p>If you decide to use an OTC sleep medicine:</p>

<ul>
	<li>Ask your doctor, nurse, or pharmacist about any warnings and potential side effects of the medicine.</li>
	<li>Take the medicine at the time of day your doctor tells you to.</li>
	<li>Do not drive or do other activities that require you to be alert and sober.</li>
	<li>Take only the amount of medicine suggested by your doctor.</li>
	<li>Tell your doctor, nurse, or pharmacist about all other medicines you take, both over-the-counter and prescription.</li>
	<li>Call your doctor or nurse right away if you have any problems while using the medicine.</li>
	<li>Do not drink alcohol.</li>
	<li>Do not use drugs that your doctor has not prescribed to you.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I take a supplement or natural product for insomnia?",
      content: `

    <div class="answer"><p>Some dietary supplements also claim to help people sleep. Manufacturers may label dietary supplements like melatonin as "natural" products.</p>

<p>The Food and Drug Administration (FDA) does not regulate dietary supplements in the same way it regulates medicines. The FDA does not test supplements for safety or effectiveness (to see if the supplement is safe for humans and works in the way it's supposed to). The FDA can remove supplements from the market if they are found to be unsafe.</p>

<p><a href="#16">Learn more about complementary and alternative sleep aids</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do complementary or alternative sleep aids work?",
      content: `

    <div class="answer"><p>There isn't enough scientific evidence to say whether most complementary and alternative sleep aids help treat insomnia.<a href="#references"><sup>24</sup></a></p>

<ul>
	<li><strong>Certain relaxation techniques</strong> may be safe and effective in treating long-term insomnia. These techniques include using music, meditation, and yoga to relax the mind and body before sleeping.<a href="#references"><sup>24</sup></a></li>
	<li><strong>Some dietary supplements</strong> also claim to help people sleep. Manufacturers may label dietary supplements like melatonin as a "natural" product. Most of these products have not been proven to help people with insomnia. Melatonin may be useful for treating short-term insomnia for shift workers or people who have jet lag, but you should probably not take it long-term.<a href="#references"><sup>24</sup></a></li>
</ul>

<p>The Food and Drug Administration (FDA) does not regulate dietary supplements like vitamins, minerals, and herbs in the same way it regulates medicines. Use this <a href="https://nccih.nih.gov/health/herbs/understanding-interactions" title="Know the Science: How Medications and Supplements Can Interact">Understanding Drug-Supplement Interactions tool</a> to learn how dietary supplements may interact with the prescription and over-the-counter medicines you take.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why is sleep important?",
      content: `

    <div class="answer"><p>Sleep is essential for good health. During sleep, our bodies and brains repair themselves. Some research suggests our brains use the time during sleep to clear away toxins that build up during the day.<a href="#references"><sup>25</sup></a> Sleep is also important to our ability to learn and form memories. Not getting enough sleep puts people at risk for health problems, including high blood pressure, obesity, and depression.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can I do to sleep better?",
      content: `

    <div class="answer"><p>It can be difficult to change everyday habits, but if you can stick with some of these changes, you might be able to improve your sleep. You may need to try these tips for several days in a row to improve sleep.</p>

<p>Try these tips at home to improve sleep:</p>

<ul>
	<li>Try to go to sleep at the same time each night or when you get sleepy.</li>
	<li>Try to get up at the same time each morning, regardless of how well you slept.</li>
	<li>Do not nap longer than 30 minutes or anytime between 3 p.m. and bedtime.</li>
	<li>Go outside every day for at least 15 to 20 minutes. The natural light will help you get into a natural pattern of sleeping.</li>
	<li>Before bedtime, try to avoid bright, artificial light from computer screens, mobile phones, or televisions. Do not allow electronic devices in the bedroom.</li>
	<li>Follow a regular, relaxing routine at the same time each night when you get ready for bed.</li>
	<li>Go to bed only after winding down and when you are ready to sleep. Do not read in bed, listen to music, or do other activities that engage your mind and can keep you awake.</li>
	<li>Keep your bedroom dark, quiet, and cool for sleeping. Use a sleep mask or light-blocking curtains. Use earplugs, a fan, or a white noise machine or app on your phone to block out sounds.</li>
	<li>Do not drink alcohol or caffeine or use nicotine for at least five hours before bedtime.</li>
	<li>Get regular physical activity during the daytime. Exercise or physical activity close to bedtime, or anytime in the five or six hours before sleeping, can make it harder to fall asleep.</li>
	<li>Do not eat heavy meals or drink a lot of liquids two to three hours before bed.</li>
	<li>If you still cannot sleep after about 15 minutes of getting into bed and turning out the light, get out of bed and do something relaxing until you feel sleepy.</li>
	<li>See your doctor or a sleep specialist if you think that you have insomnia or another sleep problem.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about insomnia?",
      content: `

    <div class="answer"><p>For more information on insomnia, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="https://www.nhlbi.nih.gov/about/scientific-divisions/national-center-sleep-disorders-research" title="National Center on Sleep Disorders Research (NCSDR)"><strong>National Center on Sleep Disorders Research, NHLBI, NIH</strong></a><br>
	Phone Number: 301-592-8573</li>
	<li><a href="http://sleepeducation.org/" title="Sleep Education" class="external-link external-popup" target="_blank"><strong>American Academy of Sleep Medicine — Sleep Education</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 630-737-9700</li>
	<li><a href="https://sleep.org/" class="external-link external-popup" target="_blank"><strong>National Sleep Foundation</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 703-243-1697</li>
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
	<li>Kessler, R.C., Berglund, P.A., Coulouvrat, C., Hajak, G., Roth, T., Shahly, V., et al. (2011). <a href="https://www.ncbi.nlm.nih.gov/pubmed/21886353">Insomnia and the performance of US workers: results from the America insomnia survey</a>. <em>Sleep</em><em>;</em> 34(9): 1161-1171.</li>
	<li>Sateia, M.J., Buysse, D.J., Krystal, A.D., Neubauer, D.N., Heald, J.L. (2017). <a href="http://www.aasmnet.org/Resources/pdf/PharmacologicTreatmentofInsomnia.pdf" class="external-link external-popup" target="_blank">Clinical Practice Guideline for the Pharmacologic Treatment of Chronic Insomnia in Adults: An American Academy of Sleep Medicine Clinical Practice Guideline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 1.83 MB). <em>Journal of Clinical Sleep Medicine;</em> 13(2): 307-349.</li>
	<li>American Academy of Sleep Medicine and Sleep Research Society. (2015). <a href="http://www.aasmnet.org/Resources/pdf/Adultsleepdurationconsensus.pdf" class="external-link external-popup" target="_blank">Recommended Amount of Sleep for a Healthy Adult: A Joint Consensus Statement of the American Academy of Sleep Medicine and Sleep Research Society <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 244 KB). <em>Journal of Clinical Sleep Medicine;</em> 11(6): 591–592.</li>
	<li>Winokur, A. (2015). <a href="http://www.sciencedirect.com/science/article/pii/S0193953X15000763?via=ihub" class="external-link external-popup" target="_blank">The Relationship Between Sleep Disturbances and Psychiatric Disorders: Introduction and Overview <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Psychiatric Clinics of North America</em>; 38(4): 603-614.</li>
	<li>Pigeon, W.R., Gallegos, A.M. (2015). <a href="http://www.sciencedirect.com/science/article/pii/S1556407X14001271?showall%3Dtrue%26via%3Dihub" class="external-link external-popup" target="_blank">Posttraumatic Stress Disorder and Sleep <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Sleep Medicine Clinics</em>; 10(1): 41-48.</li>
	<li>Viola-Saltzman, M., Watson, N.F. (2012). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3482689/">Traumatic Brain Injury and Sleep Disorders</a>. <em>Neurologic Clinics; </em>30(4): 1299-1312.</li>
	<li>Zhang, B, Wing, Y.K. (2006). <a href="https://www.ncbi.nlm.nih.gov/pubmed/16453985?access_num=16453985&amp;link_type=MED&amp;dopt=Abstract">Sex differences in insomnia: a meta-analysis</a><em>.</em> <em>Sleep</em>: 29<em>(1):</em> 85<em>–</em>93<em>.</em></li>
	<li>Mallampalli, M.P., Carter, C.L. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4089020/">Exploring Sex and Gender Differences in Sleep Health: A Society for Women's Health Research Report</a>. <em>Journal of Women's Health</em>; 23(7): 553-562.</li>
	<li>Winkelman, J.W. (2015). <a href="http://www.nejm.org/doi/full/10.1056/NEJMcp1412740" class="external-link external-popup" target="_blank">Insomnia Disorder <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>New England Journal of Medicine;</em> 373: 1437-1444.</li>
	<li>Roth, T., (2007). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1978319/">Insomnia: Definition, Prevalence, Etiology, and Consequences</a>. <em>Journal of Clinical Sleep Medicine; </em>3(5 Suppl): S7-S10.</li>
	<li>Soehner, A.M., Kaplan, K.A., Harvey, A.G. (2014). <a href="https://www.ncbi.nlm.nih.gov/pubmed/24953480">Prevalence and clinical correlates of co-occurring insomnia and hypersomnia symptoms in depression</a>. <em>Journal of Affective Disorders; </em>167: 93-7.</li>
	<li>Roth, T., Roehrs, T. (2003). <a href="https://www.ncbi.nlm.nih.gov/pubmed/14626537">Insomnia: epidemiology, characteristics, and consequences</a>. <em>Clinical Cornerstone</em>; 5(3): 5-15.</li>
	<li>Nowakowski, S., Meers, J., Heimbach, E. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4327930/">Sleep and Women's Health</a>. <em>Sleep Medicine Research; </em>4(1): 1-22.</li>
	<li>Jehan, S., Auguste, E., Hussain, M., Pandi-Perumal, S.R., Gupta, R., Attarian, H., et al. (2016). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5323065/">Sleep and Premenstrual Syndrome</a>. <em>Journal of Sleep Medicine and Disorders; </em>3(5): 1061.</li>
	<li>Taylor, D.J., Lichstein, K.L., Durrence, H.H., Reidel, B.W., Bush, A.J. (2005). <a href="https://www.ncbi.nlm.nih.gov/pubmed?Db=pubmed&amp;Cmd=ShowDetailView&amp;TermToSearch=16335332&amp;ordinalpos=9&amp;itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum">Epidemiology of insomnia, depression, and anxiety</a>. <em>Sleep</em>; 28(11):1457-1464.</li>
	<li>Lamberg, L. (2014). <a href="http://psychnews.psychiatryonline.org/doi/full/10.1176/appi.pn.2014.8b20" class="external-link external-popup" target="_blank">Manual Updates Sleep Disorder Diagnoses <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. Clinical and Research News.</li>
	<li>Stone, K.L., Ancoli-Israel, S., Blackwell, T., Ensrud, K.E., Cauley, J.A., Redline, S., et al. (2008). <a href="https://www.ncbi.nlm.nih.gov/pubmed/18779464">Actigraphy-measured sleep characteristics and risk of falls in older women</a>. <em>Archives of Internal Medicine; </em>168(16): 1768-75.</li>
	<li>Mong, J.A., Cusmano, D.M. (2016). <a href="http://rstb.royalsocietypublishing.org/content/371/1688/20150110" class="external-link external-popup" target="_blank">Sex differences in sleep: impact of biological sex and sex steroids <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Philosophical Transactions of the Royal Society B</em>; 371(1688).</li>
	<li>Harvard Medical School. (2010). <a href="http://www.health.harvard.edu/newsletter_article/medications-that-can-affect-sleep" class="external-link external-popup" target="_blank">Medications that can affect sleep <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Jaussent, I., Dauvilliers, Y., Ancelin, M-L., Dartigues, J-F., Tavernier, B., Touchon, J., et al. (2011). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3179987/">Insomnia symptoms in older adults: associated factors and gender differences</a>. <em>American Journal of Geriatric Psychiatry</em>; 19(1): 88–97.</li>
	<li>Pigeon, W.R. (2010). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4294319/">Treatment of Adult Insomnia With Cognitive–Behavioral Therapy</a>. <em>Journal of Clinical Psychology; </em>66(11): 1148-1160.</li>
	<li>Minkel, J., Krystal, A.D. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3763861/">Optimizing the Pharmacologic Treatment of Insomnia: Current Status and Future Horizons.</a> <em>Sleep Medicine Clinic; </em>8(3): 333-350.</li>
	<li>Food and Drug Administration. (2013). <a href="https://www.fda.gov/ForConsumers/ConsumerUpdates/ucm322743.htm">Some Sleep Drugs Can Impair Driving</a>.</li>
	<li>National Center of Complementary and Integrative Health. (2015). <a href="https://nccih.nih.gov/health/sleep/ataglance.htm">Sleep Disorders: In Depth</a>.</li>
	<li>Xie, L., Kang, H., Xu, Q., Chen, M.J., Liao, Y., et al. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3880190/">Sleep Drives Metabolite Clearance from the Adult Brain</a> . <em>Science; </em>342(6156): 10.1126/science.1241224.</li>
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
