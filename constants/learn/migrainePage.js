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

export function migrainePage({ navigation, ...rest }) {
  const condName = "Migraine";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Migraine.jpg?VersionId=VOVXD5KS.lI9h2JWC13ligmyEOMkyWSj";
  const condDescription =
    "Migraine is a medical condition. Most people who suffer from migraines get headaches that can be quite severe. A migraine headache is usually an intense, throbbing pain on one, or sometimes, both sides of the head. Most people with migraine headache feel the pain in the temples or behind one eye or ear, although any part of the head can be involved. Besides pain, migraine also can cause nausea and vomiting and sensitivity to light and sound. Some people also may see spots or flashing lights or have a temporary loss of vision. \n Migraine can occur any time of the day, though it often starts in the morning. The pain can last a few hours or up to one or two days. Some people get migraines once or twice a week. Others, only once or twice a year. Most of the time, migraines are not a threat to your overall health. But migraine attacks can interfere with your day-to-day life. \n We don't know what causes migraine, but some things are more common in people who have them: \n Most often, migraine affects people between the ages of 15 and 55. \n Most people have a family history of migraine or of disabling headache. \n They are more common in women. \n Migraine often becomes less severe and less frequent with age.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Migraine.jpg?VersionId=VOVXD5KS.lI9h2JWC13ligmyEOMkyWSj"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Migraine</h1>  -->
            <p><strong>Migraine </strong>is a medical condition.&nbsp;A<strong> migraine headache </strong>is usually an intense, throbbing pain on one, or sometimes, both sides of the head.&nbsp;Migraine pain and symptoms affect 29.5 million Americans. About three out of four people who have migraines are women. Migraine is the most common form of disabling headache that sends patients to see their doctors.</p>

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
      title: "What is migraine?",
      content: `

    <div class="answer"><p>Migraine is a medical condition. Most people who suffer from migraines get headaches that can be quite severe. A migraine headache is usually an intense, throbbing pain on one, or sometimes, both sides of the head. Most people with migraine headache feel the pain in the temples or behind one eye or ear, although any part of the head can be involved. Besides pain, migraine also can cause nausea and vomiting and sensitivity to light and sound. Some people also may see spots or flashing lights or have a temporary loss of vision.</p>

<p>Migraine can occur any time of the day, though it often starts in the morning. The pain can last a few hours or up to one or two days. Some people get migraines once or twice a week. Others, only once or twice a year. Most of the time, migraines are not a threat to your overall health. But migraine attacks can interfere with your day-to-day life.</p>

<p>We don't know what causes migraine, but some things are more common in people who have them:</p>

<ul>
	<li>Most often, migraine affects people between the ages of 15 and 55.</li>
	<li>Most people have a family history of migraine or of disabling headache.</li>
	<li>They are more common in women.</li>
	<li>Migraine often becomes less severe and less frequent with age.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common are migraines?",
      content: `

    <div class="answer"><p>Migraine pain and symptoms affect 29.5 million Americans. Migraine is the most common form of disabling headache that sends patients to see their doctors.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes migraines?",
      content: `

    <div class="answer"><p>The exact cause of migraine is not fully understood. Most researchers think that migraine is due to abnormal changes in levels of substances that are naturally produced in the brain. When the levels of these substances increase, they can cause inflammation. This inflammation then causes blood vessels in the brain to swell and press on nearby nerves, causing pain.</p>

<p>Genes also have been linked to migraine. People who get migraines may have abnormal genes that control the functions of certain brain cells.</p>

<p>Experts do know that people with migraines react to a variety of factors and events, called triggers. These triggers can vary from person to person and don't always lead to migraine. A combination of triggers — not a single thing or event — is more likely to set off an attack. A person's response to triggers also can vary from migraine to migraine. Many women with migraine tend to have attacks triggered by:</p>

<ul>
	<li>Lack of or too much sleep</li>
	<li>Skipped meals</li>
	<li>Bright lights, loud noises, or strong odors</li>
	<li>Hormone changes during the menstrual cycle</li>
	<li>Stress and anxiety, or relaxation after stress</li>
	<li>Weather changes</li>
	<li>Alcohol (often red wine)</li>
	<li>Caffeine (too much or withdrawal)</li>
	<li>Foods that contain&nbsp;<i>nitrates</i>, such as hot dogs and lunch meats</li>
	<li>Foods that contain MSG (monosodium glutamate), a flavor enhancer found in fast foods, broths, seasonings, and spices</li>
	<li>Foods that contain&nbsp;<i>tyramine</i>, such as aged cheeses, soy products, fava beans, hard sausages, smoked fish, and Chianti wine</li>
	<li>Aspartame (NutraSweet<sup>®</sup>&nbsp;and Equal<sup>®</sup>)</li>
</ul>

<p>To pinpoint your migraine triggers, keep a headache diary. Each day you have a migraine headache, put that in your diary. Also write down the:</p>

<ul>
	<li>The time of day your headache started</li>
	<li>Where you were and what you were doing when the migraine started</li>
	<li>What you ate or drank 24 hours before the attack</li>
	<li>Each day you have your period, not just the first day&nbsp; (This can allow you and your doctor to see if your headaches occur at the same or similar time as your period.)</li>
</ul>

<p>Talk with your doctor about what sets off your headaches to help find the right treatment for you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are there different kinds of migraine?",
      content: `

    <div class="answer"><p>Yes, there are many forms of migraine. The two forms seen most often are migraine with aura and migraine without aura.</p>

<p><strong>Migraine with aura (previously called classical migraine).</strong>&nbsp;With a migraine with aura, a person might have these sensory symptoms (the so-called "aura") 10 to 30 minutes before an attack:</p>

<ul>
	<li>Seeing flashing lights, zigzag lines, or blind spots</li>
	<li>Numbness or tingling in the face or hands</li>
	<li>Disturbed sense of smell, taste, or touch</li>
	<li>Feeling mentally "fuzzy"</li>
</ul>

<p>Only one in five people who get migraine experience an aura. Women have this form of migraine less often than men.</p>

<p><strong>Migraine without aura (previously called common migraine).</strong>&nbsp;With this form of migraine, a person does not have an aura but has all the other features of an attack.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How can I tell if I have a migraine or just a bad tension-type headache?",
      content: `

    <div class="answer"><p>Compared with migraine, tension-type headache is generally less severe and rarely disabling. Compare your symptoms with those in this chart to see what type of headache you might be having.</p>

<table summary="This table allows you to differenciate between Migraine and Tension-Type headache by comparing symptoms of both (column headings)">
	<caption align="top">Migraine vs. bad tension-type headache</caption>
	<tbody>
		<tr>
			<th>Symptom</th>
			<th>Tension headache</th>
			<th>Migraine headache</th>
		</tr>
		<tr>
			<td>Intensity of pain: Mild-to-moderate</td>
			<td>x</td>
			<td>x</td>
		</tr>
		<tr>
			<td>Intensity of pain: Moderate-to-severe</td>
			<td>&nbsp;</td>
			<td>x</td>
		</tr>
		<tr>
			<td>Quality of pain: Intense pounding or throbbing and/or debilitating</td>
			<td>&nbsp;</td>
			<td>x</td>
		</tr>
		<tr>
			<td>Quality of pain: Distracting, but not debilitating</td>
			<td>x</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Quality of pain: Steady ache</td>
			<td>x</td>
			<td>x</td>
		</tr>
		<tr>
			<td>Location of pain: One side of head</td>
			<td>&nbsp;</td>
			<td>x</td>
		</tr>
		<tr>
			<td>Location of pain: Both sides of head</td>
			<td>x</td>
			<td>x</td>
		</tr>
		<tr>
			<td>Nausea, vomiting</td>
			<td>&nbsp;</td>
			<td>x</td>
		</tr>
		<tr>
			<td>Sensitivity to light and/or sounds</td>
			<td>rare</td>
			<td>x</td>
		</tr>
		<tr>
			<td>Aura before onset of headache</td>
			<td>&nbsp;</td>
			<td>x</td>
		</tr>
	</tbody>
</table>

<p><em>Note: Rebound headache may have features of tension and/or migraine headache. Adapted from a table produced by the American Council for Headache Education.</em></p>

<p>Although fatigue and stress can bring on both tension and migraine headaches, migraines can be triggered by certain foods, changes in the body's hormone levels, and even changes in the weather.</p>

<p>There also are differences in how types of headaches respond to treatment with medicines. Although some over-the-counter drugs used to treat tension-type headaches sometimes help migraine headaches, the drugs used to treat migraine attacks do not work for tension-type headaches for most people.</p>

<p>You can't tell the difference between a migraine and a tension-type headache by how often they occur. Both can occur at irregular intervals. Also, in rare cases, both can occur daily or almost daily.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I tell if I have a migraine or a sinus headache?",
      content: `

    <div class="answer"><p>Many people confuse a sinus headache with a migraine because pain and pressure in the sinuses, nasal congestion, and watery eyes often occur with migraine. To find out if your headache is sinus or migraine, ask yourself these questions:</p>

<p>In addition to my sinus symptoms, do I have:</p>

<ol>
	<li>Moderate-to-severe headache</li>
	<li>Nausea</li>
	<li>Sensitivity to light</li>
</ol>

<p>If you answer “yes” to two or three of these questions, then most likely you have migraine with sinus symptoms. A true sinus headache is rare and usually occurs due to sinus infection. In a sinus infection, you would also likely have a fever and thick nasal secretions that are yellow, green, or blood-tinged. A sinus headache should go away with treatment of the sinus infection.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "When should I seek help for my headaches?",
      content: `

    <div class="answer"><p>Sometimes, headache can signal a more serious problem. You should talk to your doctor about your headaches if:</p>

<ul>
	<li>You have several headaches per month and each lasts for several hours or days</li>
	<li>Your headaches disrupt your home, work, or school life</li>
	<li>You have nausea, vomiting, vision, or other sensory problems (such as numbness or tingling)</li>
	<li>You have pain around the eye or ear</li>
	<li>You have a severe headache with a stiff neck</li>
	<li>You have a headache with confusion or loss of alertness</li>
	<li>You have a headache with convulsions</li>
	<li>You have a headache after a blow to the head</li>
	<li>You used to be headache-free, but now have headaches a lot</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What tests are used to find out if I have migraine?",
      content: `

    <div class="answer"><p>If you think you get migraine headaches, talk with your doctor. Before your appointment, write down:</p>

<ol>
	<li>How often you have headaches</li>
	<li>Where the pain is</li>
	<li>How long the headaches last</li>
	<li>When the headaches happen, such as during your period</li>
	<li>Other symptoms, such as nausea or blind spots</li>
	<li>Any family history of migraine</li>
	<li>All the medicines that you are taking for all your medical problems, even the over-the-counter medicines (better still, bring the medicines in their containers to the doctor)</li>
	<li>All the medicines you have taken in the past that you can recall and, if possible, the doses you took and any side effects you had</li>
</ol>

<p>Your doctor may also do an exam and ask more questions about your health history. This could include past head injury and sinus or dental problems. Your doctor may be able to diagnose migraine just from the information you provide.</p>

<p>You may get a blood test or other tests, such as CT scan or MRI, if your doctor thinks that something else is causing your headaches. Work with your doctor to decide on the best tests for you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are migraine headaches more common in women than men?",
      content: `

    <div class="answer"><p>Yes. About three out of four people who have migraines are women. Migraines are most common in women between the ages of 20 and 45. At this time of life women often have more job, family, and social duties. Women tend to report more painful and longer lasting headaches and more symptoms, such as nausea and vomiting. All these factors make it hard for a woman to fulfill her roles at work and at home when migraine strikes.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "I get migraines right before my period. Could they be related to my menstrual cycle?",
      content: `

    <div class="answer"><p>More than half of migraines in women occur right before, during, or after a woman has her period. This often is called "menstrual migraine." But, just a small fraction of women who have migraine around their period only have migraine at this time. Most have migraine headaches at other times of the month as well.</p>

<p>How the menstrual cycle and migraine are linked is still unclear. We know that just before the cycle begins, levels of the female hormones, estrogen and progesterone, go down sharply. This drop in hormones may trigger a migraine, because estrogen controls chemicals in the brain that affect a woman's pain sensation.</p>

<p>Talk with your doctor if you think you have menstrual migraine. You may find that medicines, making lifestyle changes, and home treatment methods can prevent or reduce the pain.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can migraine be worse during menopause?",
      content: `

    <div class="answer"><p>If your migraine headaches are closely linked to your menstrual cycle,&nbsp;<a href="/glossary#menopause">menopause</a>&nbsp;may make them less severe. As you get older, the nausea and vomiting may decrease as well. About two-thirds of women with migraines report that their symptoms improve with menopause.</p>

<p>But for some women, menopause worsens migraine or triggers them to start. It is not clear why this happens.&nbsp;<a href="/glossary#MHT">Menopausal hormone therapy</a>, which is prescribed for some women during menopause, may be linked to migraines during this time. In general, though, the worsening of migraine symptoms goes away once menopause is complete.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can using birth control pills make my migraines worse?",
      content: `

    <div class="answer"><p>In some women,&nbsp;<a href="/a-z-topics/birth-control-methods">birth control</a>&nbsp;pills improve migraine. The pills may help reduce the number of attacks and their attacks may become less severe. But in other women, the pills may worsen their migraines. In still other women, taking birth control pills has no effect on their migraines.</p>

<p>The reason for these different responses is not well understood. &nbsp;For women whose migraines get worse when they take birth control pills, their attacks seem to occur during the last week of the cycle. This is because the last seven pills in most monthly pill packs don't have hormones; they are there to keep you in the habit of taking your birth control daily. Without the hormones, your body's estrogen levels drop sharply. This may trigger migraine in some women.</p>

<p>Talk with your doctor if you think birth control pills are making your migraines worse. Switching to a pill pack in which all the pills for the entire month contain hormones and using that for three months in a row can improve headaches. Lifestyle changes, such as getting on a regular sleep pattern and eating healthy foods, can help too.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can stress cause migraines?",
      content: `

    <div class="answer"><p>Yes. Stress can trigger both migraine and tension-type headache. Events like getting married, moving to a new home, or having a baby can cause stress. But studies show that everyday stresses —&nbsp;<i>not</i>&nbsp;major life changes — cause most headaches. Juggling many roles, such as being a mother and wife, having a career, and financial pressures, can be daily stresses for women.</p>

<p>Making time for yourself and finding healthy ways to deal with stress are important. Some things you can do to help prevent or reduce stress include:</p>

<ul>
	<li>Eating healthy foods</li>
	<li>Being active (at least 30 minutes most days of the week is best)</li>
	<li>Doing relaxation exercises</li>
	<li>Getting enough sleep</li>
</ul>

<p>Try to figure out what causes you to feel stressed. You may be able to cut out some of these stressors. For example, if driving to work is stressful, try taking the bus or subway. You can take this time to read or listen to music, rather than deal with traffic. For stressors you can't avoid, keeping organized and doing as much as you can ahead of time will help you to feel in control.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are migraines treated?",
      content: `

    <div class="answer"><p>Migraine has no cure. But your migraines can be managed with your doctor's help. Together, you will find ways to treat migraine symptoms when they happen, as well as ways to help make your migraines less frequent and severe. Your treatment plan may include some or all of these methods.</p>

<p><strong>Medicine.</strong>&nbsp;There are two ways to approach the treatment of migraines with drugs: stopping a migraine in progress (called "abortive" or "acute" treatment) and prevention. Many people with migraine use both forms of treatment.</p>

<p><strong>Acute treatment.&nbsp;</strong>Over-the-counter pain-relief drugs such as aspirin, acetaminophen, or NSAIDs (nonsteroidal anti-inflammatory drugs) like ibuprofen relieve mild migraine pain for some people. If these drugs don't work for you, your doctor might want you to try a prescription drug. Two classes of drugs that doctors often try first are:</p>

<ul>
	<li>Triptans, which work by balancing the chemicals in the brain. Examples include sumatriptan (Imitrex<sup>®</sup>), rizatriptan (Maxalt<sup>®</sup>), zolmitriptan (Zomig<sup>®</sup>), almotriptan (Axert<sup>®</sup>), eletriptan (Relpax<sup>®</sup>), naratriptan (Amerge<sup>®</sup>), and frovatriptan (Frova<sup>®</sup>). Triptans can come as tablets that you swallow, tablets that dissolve on your tongue, nasal sprays, and as a shot. They should not be used if you have heart disease or high blood pressure.</li>
	<li>Ergot derivatives (ergotamine tartrate and dihydoergotamine), which work in the same way as triptans. They should not be used if you have heart disease or high blood pressure.</li>
</ul>

<p>Most acute drugs for migraine work best when taken right away, when symptoms first begin. Always carry your migraine medicine with you in case of an attack. For people with extreme migraine pain, a powerful “rescue” drug might be prescribed, too. Because not everyone responds the same way to migraine drugs, you will need to work with your doctor to find the treatment that works best for you.</p>

<p><strong>Prevention.</strong>&nbsp;Some medicines used daily can help prevent attacks. Many of these drugs were designed to treat other health conditions, such as&nbsp;<a href="/glossary#epilepsy">epilepsy</a>&nbsp;and&nbsp;<a href="/glossary#depression">depression</a>. Some examples are:</p>

<ul>
	<li>Antidepressants, such as amitriptyline (Elavil<sup>®</sup>) or venlafaxine (Effexor<sup>®</sup>)</li>
	<li>Anticonvulsants, such as divalproex sodium (Depakote<sup>®</sup>) or topiramate (Topamax<sup>®</sup>)</li>
	<li>Beta-blockers, such as propranolol (Inderal<sup>®</sup>) or timolol (Blocadren<sup>®</sup>)</li>
	<li>Calcium channel blockers, such as verapamil</li>
</ul>

<p>These drugs may not prevent all migraines, but they can help a lot. Hormone therapy may help prevent attacks in women whose migraines seem to be linked to their menstrual cycle. Ask your doctor about prevention drugs if:</p>

<ul>
	<li>Your migraines do not respond to drugs for symptom relief</li>
	<li>Your migraines are disabling or cause you to miss work, family activities, or social events</li>
	<li>You are using pain-relief drugs more than two times a week</li>
</ul>

<p><strong>Lifestyle changes.</strong>&nbsp;Practicing these habits can reduce the number of migraine attacks:</p>

<ul>
	<li>Avoid or limit triggers.</li>
	<li>Get up and go to bed the same time every day.</li>
	<li>Eat healthy foods and do not skip meals.</li>
	<li>Engage in regular physical activity.</li>
	<li>Limit alcohol and caffeine intake.</li>
	<li>Learn ways to reduce and cope with stress.</li>
</ul>

<p><strong>Alternative methods.</strong>&nbsp;Biofeedback has been shown to help some people with migraine. It involves learning how to monitor and control your body's responses to stress, such as lowering heart rate and easing muscle tension. Other methods, such as acupuncture and relaxation, may help relieve stress. Counseling also can help if you think your migraines may be related to depression or anxiety. Talk with your doctor about these treatment methods.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are rebound migraines?",
      content: `

    <div class="answer"><p>Women who use acute pain-relief medicine more than two or three times a week or more than 10 days out of the month can set off a cycle called rebound. As each dose of medicine wears off, the pain comes back, leading the patient to take even more. This overuse causes your medicine to stop helping your pain and actually start causing headaches. Rebound headaches can occur with both over-the-counter and prescription pain-relief medicines. They can also occur whether you take them for headache or for another type of pain. Talk to your doctor if you're caught in a rebound cycle.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "I'm pregnant. Can my migraines still be treated?",
      content: `

    <div class="answer"><p>Some migraine medicines should not be used when you are pregnant because they can cause birth defects and other problems. This includes over-the-counter medicines, such as aspirin and ibuprofen. Talk with your doctor if migraine is a problem while you are pregnant or if you are planning to become pregnant. Your doctor might suggest a medicine that will help you and that is safe during pregnancy. Home treatment methods, such as doing relaxation exercises and using cold packs, also might help ease your pain. The good news is that for most women migraines improve or stop from about the third month of the pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "I am breastfeeding. Will taking medicine for migraine hurt my baby? ",
      content: `

    <div class="answer"><p>Ask your doctor about what migraine medicines are safe to take while breastfeeding. Some medicines can be passed through breast milk and might be harmful to your baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are some ways I can prevent migraine?",
      content: `

    <div class="answer"><p>The best way to prevent migraine is to find out what triggers your attacks and avoid or limit these triggers. Since migraine headaches are more common during times of stress, finding healthy ways to cut down on and cope with stress might help. Talk with your doctor about starting a fitness program or taking a class to learn relaxation skills.</p>

<p>Talk with your doctor if you need to take your pain-relief medicine more than twice a week. Doing so can lead to rebound headaches. If your doctor has prescribed medicine for you to help prevent migraine, take them exactly as prescribed. Ask what you should do if you miss a dose and how long you should take the medicine. Talk with your doctor if the amount of medicine you are prescribed is not helping your headaches.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do when a migraine begins?",
      content: `

    <div class="answer"><p>Work with your doctor to come up with a plan for managing your migraines. Keeping a list of home treatment methods that have worked for you in the past also can help. When symptoms begin:</p>

<ul>
	<li>If you take migraine medicine, take it right away.</li>
	<li>Drink fluids, if you don't have nausea during your migraine.</li>
	<li>Lie down and rest in a dark, quiet room, if that is practical.</li>
</ul>

<p>Some people find the following useful:</p>

<ul>
	<li>A cold cloth on your head</li>
	<li>Rubbing or applying pressure to the spot where you feel pain</li>
	<li>Massage or other relaxation exercises</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about migraine?",
      content: `

    <div class="answer"><p>For more information about migraine, call the OWH Helpline&nbsp;at 1-800-994-9662&nbsp;or contact the following organizations:</p>

<ul>
	<li><a href="http://www.achenet.org/" class="external-link external-popup" target="_blank"><strong>American Headache Society Committee on Headache Education</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;856-423-0043</li>
	<li><a href="http://www.migraines.org/" class="external-link external-popup" target="_blank"><strong>Migraine Awareness Group: A National Understanding For Migraineurs</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;703-349-1929</li>
	<li><a href="http://www.migraineresourcenetwork.com/" class="external-link external-popup" target="_blank"><strong>Migraine Resource Network</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.headaches.org/" class="external-link external-popup" target="_blank"><strong>National Headache Foundation</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;888-643-5552 or 312-274-2650</li>
	<li><a href="https://www.ninds.nih.gov"><strong>National Institute of Neurological Disorders and Stroke, NIH, HHS</strong></a><br>
	<strong>Phone:</strong>&nbsp;800-352-9424 or 301-496-5751 (TDD: 301-468-5981)</li>
</ul>
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
