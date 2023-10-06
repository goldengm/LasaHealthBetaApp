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

export function sleepPage({ navigation, ...rest }) {
  const condName = "Sleep and your health";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Sleepandyourhealth.jpg?VersionId=HBzy23ePfUU2Uu0zHDfvqYX9PV.pBhN3";
  const condDescription =
    "Your mind and body are healthier when you sleep well. Your body needs time every day to rest and heal. Some sleep disorders, such as insomnia, sleep apnea, and restless leg syndrome, make it harder to fall asleep or stay asleep. This can lead to daytime sleepiness and make it more difficult to stay in good mental health. \n Having a sleep problem can also trigger a mental health condition or make current mental health conditions worse. Also, mental health conditions or treatments can sometimes cause sleep problems.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Sleepandyourhealth.jpg?VersionId=HBzy23ePfUU2Uu0zHDfvqYX9PV.pBhN3"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Sleep and your health</h1>  -->
            <p><strong>Sleep affects your mental and physical health. </strong>Getting good sleep helps boost your mind and mood and can help prevent health problems. Women are more likely than men to have insomnia and other sleep problems.<a href="#references"><sup>1</sup></a> Changing hormones during the menstrual cycle, pregnancy, and menopause can affect how well a woman sleeps. But there are steps you can take to get the rest you need.</p>

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
      title: "How does sleep affect my mental health?",
      content: `

    <div class="answer"><p>Your mind and body are healthier when you sleep well. Your body needs time every day to rest and heal. Some sleep disorders, such as <a href="/a-z-topics/insomnia">insomnia</a>, sleep apnea, and restless leg syndrome, make it harder to fall asleep or stay asleep. This can lead to daytime sleepiness and make it more difficult to stay in good mental health.</p>

<p>Having a sleep problem can also trigger a mental health condition or make current mental health conditions worse. Also, mental health conditions or treatments can sometimes cause sleep problems.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How much sleep do women need each night?",
      content: `

    <div class="answer"><p>Most adults need between 7 and 9 hours of sleep a night to feel refreshed, although women who are pregnant may need more and older adults may average less.<a href="#references"><sup>2</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What sleep problems affect women?",
      content: `

    <div class="answer"><p>Sleep problems that affect women more or differently from men include:</p>

<ul>
	<li><a href="/a-z-topics/insomnia"><strong>Insomnia</strong></a><strong>.</strong> More than 1 in 4 women in the United States experience insomnia, or the inability to fall asleep or stay asleep.<a href="#references"><sup>3</sup></a> Insomnia is also more common in people with depression and anxiety, which also affect more women than men.<a href="#references"><sup>4</sup></a></li>
	<li><a href="/glossary#restless_leg_syndrome"><strong>Restless leg syndrome</strong></a><strong>.</strong> More women than men experience restless leg syndrome.<a href="#references"><sup>5</sup></a> It can happen to women of all ages, but it happens most often during <a href="/pregnancy">pregnancy</a>.<a href="#references"><sup>6</sup></a> Also, some medicines used to treat depression can cause restless leg syndrome. Depression is more likely to affect women compared to men.</li>
	<li><strong>Sleep apnea. </strong>Sleep apnea may be underdiagnosed in women. Snoring is one of the main signs of sleep apnea. Women with sleep apnea may be underdiagnosed, because they usually report more general symptoms, such as insomnia, anxiety, and nightmares.<a href="#references"><sup>7</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why do women have more sleep problems?",
      content: `

    <div class="answer"><p>Women may be more likely to have sleep problems because women experience hormonal changes during certain times and events that are unique to women. These include:</p>

<ul>
	<li><a href="/menstrual-cycle/premenstrual-syndrome"><strong>Premenstrual syndrome (PMS)</strong></a> <strong>and </strong><a href="/menstrual-cycle/premenstrual-syndrome/premenstrual-dysphoric-disorder-pmdd"><strong>premenstrual dysphoric disorder (PMDD)</strong></a><strong>.</strong> Women with PMS commonly report trouble sleeping.<a href="#references"><sup>8</sup></a> Nearly 7 in 10 women with PMDD say they have problems going to sleep and staying asleep in the days leading up to their period.<a href="#references"><sup>9</sup></a></li>
	<li><a href="/pregnancy"><strong>Pregnancy</strong></a><strong>,</strong> especially in the third trimester, when women may wake up more often than usual because of discomfort, leg cramps, or needing to use the bathroom.</li>
	<li><a href="/menopause/menopause-basics#2"><strong>Perimenopause</strong></a><strong>,</strong> when hot flashes and night sweats often can disturb sleep. Also, about half of women report problems sleeping after menopause.<a href="#references"><sup>10</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I know if I have a sleep disorder?",
      content: `

    <div class="answer"><p>Talk to your doctor if:</p>

<ul>
	<li>You often have difficulty sleeping and the <a href="#8">sleeping tips</a>&nbsp;are not working for you</li>
	<li>You awaken during the night gasping for breath</li>
	<li>Your partner says that your breathing stops when you are sleeping</li>
	<li>Your partner says that your legs move rapidly during sleep</li>
	<li>You snore loudly</li>
	<li>You have to get up more than twice during the night to urinate</li>
	<li>You wake up feeling like you haven’t slept or are exhausted</li>
	<li>You fall asleep often during the day</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are sleep disorders diagnosed?",
      content: `

    <div class="answer"><p>To determine whether your sleep problems are caused by a sleep disorder or another mental or physical health problem, your doctor will ask you questions about your medical and sleep history. Sometimes it can take several visits to a doctor to figure out the cause of your sleep problems.</p>

<p>Your doctor or nurse may:</p>

<ul>
	<li><strong>Ask about any new or ongoing health problems or stress.</strong></li>
	<li><strong>Ask about your sleep habits.</strong> Consider keeping a sleep diary for 1 or 2 weeks before you see your doctor. Write down when you go to sleep, wake up, and take naps.<a href="#references"><sup>11</sup></a> Keep track of how long you sleep each night and you how feel throughout the day. Some free apps for your mobile phone may also help you track sleep.</li>
	<li><strong>Do a physical exam. </strong>This can help your doctor rule out other medical problems that might cause sleep problems. You might need blood tests to check for thyroid problems or other health problems.</li>
	<li><strong>Recommend a sleep study.</strong> If your doctor thinks a sleep disorder is causing your sleep problems, you may be asked to do a sleep study. Sleep studies may record brain activity, eye movements, heart rate, and breathing patterns while you stay overnight at a sleep center. A study can also record how much oxygen is in your blood and how much air moves through your nose while you breathe, as well as your snoring and other measurements.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I take an over-the-counter (OTC) medicine to help me sleep? ",
      content: `

    <div class="answer"><p>Yes, but talk to your doctor or nurse about your sleep problems before using an OTC product. Your sleep problem may be a symptom of a different medical problem that needs to be treated. Also, OTC products are not meant for regular or long-term use. If you decide to use a sleep medicine, doctors recommend that you:</p>

<ul>
	<li>Read the medicine label and directions first.</li>
	<li>Use the medicine at the time of day directed by your doctor or nurse.</li>
	<li>Do not drive or do activities that require you to be alert.</li>
	<li>Always take only the amount your doctor or nurse tells you to take.</li>
	<li>Tell your doctor or nurse about other medicines you use.</li>
	<li>Call your doctor or nurse right away if you have any problems while using the medicine.</li>
	<li>Do not drink alcohol or use drugs.</li>
	<li>Talk to your doctor or nurse if you want to stop using the sleep medicine. Some medicines must be stopped gradually.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can I try at home to help me sleep better?",
      content: `

    <div class="answer"><p>Try these tips to help improve your sleep:</p>

<ul>
	<li>Try to go to sleep when you feel sleepy and then get up at the same time each morning.</li>
	<li>Do not take naps after 3 p.m. if you normally sleep at night.</li>
	<li>Do not drink caffeinated or alcoholic drinks or smoke late in the day or at night.</li>
	<li>Exercise on most days. Exercise or physical activity done too close to bedtime can make it harder to fall asleep. Experts recommend exercising at least 5 or 6 hours before your bedtime, especially if you have <a href="/a-z-topics/insomnia">insomnia</a>.</li>
	<li>Do not eat or drink a lot within about 3 hours of bedtime.</li>
	<li>Keep your bedroom dark, quiet, and cool. If light is a problem, try a sleeping mask. If noise is a problem, try earplugs, a fan, or a “white noise” machine to cover up the sounds.</li>
	<li>Follow a routine to help relax and wind down before sleep, such as reading a book, listening to music, or taking a bath.</li>
	<li>If you cannot sleep within 20 minutes of going to bed or don’t feel drowsy, get out of bed. Read or do a quiet activity until you feel sleepy. Then try going back to bed.</li>
	<li>Do not do anything in your bed that could make you more awake. Using a mobile phone, watching TV, or eating in bed can make it harder for you to fall asleep in bed.</li>
	<li>Do not look at lighted screens like a laptop or smartphone before bed.</li>
	<li>See your doctor or a <a href="https://sleepfoundation.org/find-sleep-professional" title="Find a Sleep Professional" class="external-link external-popup" target="_blank">sleep specialist <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> if you think that you have a sleep problem.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I improve my sleep with a new baby?",
      content: `

    <div class="answer"><p>Having a baby can make it a challenge to get enough sleep. It can take babies weeks or months to adjust to a sleeping routine or to start sleeping through the night. Also, changing hormone levels after giving birth can disrupt your sleep for a time. For some women, severe swings in hormone levels during and after pregnancy may cause a mental health condition called <a href="/mental-health/mental-health-conditions/postpartum-depression">postpartum depression</a>. Postpartum depression can also cause trouble sleeping.</p>

<p>If you have a new baby, here are some ways to get more rest or get help:</p>

<ul>
	<li>Sleep when the baby is sleeping.</li>
	<li>Don’t try to do too much or to do everything by yourself. Ask your partner, family, and friends for help.</li>
	<li>Have a partner, a friend, or another caregiver help take care of your baby for a while so you can sleep.</li>
	<li>Talk with other mothers so that you can learn from their experiences.</li>
	<li>Join a support group for new mothers. Ask your doctor, nurse, or midwife about groups in your area.</li>
	<li>If you go back to work after childbirth, ask your employer if you can work part-time or reduced hours at first.</li>
</ul>

<p>If you continue to have trouble sleeping, or if you think you are depressed, talk to your doctor, nurse, or midwife.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about sleep and your health?",
      content: `

    <div class="answer"><p>For more information on sleep and your health, call the OWH Helpline at 1-800-994-9662 or check out these resources from the following organizations:</p>

<ul>
	<li><a href="https://www.cdc.gov/sleep/resources.html">Sleep and Sleep Disorders</a>&nbsp;— Resources from the Centers for Disease Control and Prevention.</li>
	<li><a href="https://sleepfoundation.org/sleep-topics/women-and-sleep" class="external-link external-popup" target="_blank">Women and Sleep <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the National Sleep Foundation.</li>
	<li><a href="https://www.nhlbi.nih.gov/files/docs/public/sleep/healthy_sleep.pdf">Your Guide to Healthy Sleep</a>&nbsp;— Information from the National Heart, Lung, and Blood Institute.</li>
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
	<li>Nowakowski, S., Meers, J., Heimbach, E. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4327930/">Sleep and Women’s Health</a>. <em>Sleep Medicine Research</em>; 4(1): 1–22.</li>
	<li>Hirshkowitz, M., Whiton, K., Albert, S.M., Alessi, C., Bruni, O., DonCarlos, L., et al. (2015). <a href="http://www.sleephealthjournal.org/article/S2352-7218%2815%2900015-7/fulltext" class="external-link external-popup" target="_blank">National Sleep Foundation’s sleep time duration recommendations: methodology and results summary <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Sleep Health</em>; 1(1): 40–43.</li>
	<li>Kessler, R.C., Berglund, P.A., Coulouvrat, C., Hajak, G., Roth, T., Shahly, V., et al. (2011). <a href="https://www.ncbi.nlm.nih.gov/pubmed/21886353">Insomnia and the performance of US workers: results from the America insomnia survey</a>. <em>Sleep</em>; 34(9): 1161–1171.</li>
	<li>Zhang, B., Wing, Y.K. (2006). <a href="https://www.ncbi.nlm.nih.gov/pubmed/16453985">Sex differences in insomnia: a meta-analysis</a>. <em>Sleep</em>; 29: 85–93.</li>
	<li>Ohayon, M.M., O’Hara, R., Vitiello, M.V. (2012). <a href="https://www.ncbi.nlm.nih.gov/pubmed/21795081">Epidemiology of restless legs syndrome: a synthesis of the literature</a>. <em>Sleep Medicine Reviews</em>; 16(4): 283–295.</li>
	<li>Srivanitchapoom, P., Pandey, S., Hallett, M. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4058350/">Restless legs syndrome and pregnancy: A review</a>. <em>Parkinsonism Related Disorders</em>; 20(7): 716–722.</li>
	<li>Wimms, A., Woehrle, H., Ketheeswaran, S., Ramanan, D., Armitstead, J. (2016). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5028797/">Obstructive Sleep Apnea in Women: Specific Issues and Interventions</a>.&nbsp;<em>Biomed Research International; 2016: 1764837. </em></li>
	<li>Baker, F.C., Driver, H.S. (2007). <a href="http://www.sciencedirect.com/science/article/pii/S1389945706006216?showall%3Dtrue%26via%3Dihub#bib81" class="external-link external-popup" target="_blank">Circadian rhythms, sleep, and the menstrual cycle <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Sleep Medicine</em>; 8(6): 613–622.</li>
	<li>Jehan, S., Auguste, E., Hussain, M., Pandi-Perumal, S.R., Brzezinski, A., Gupta, R., et al. (2016). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5323065/">Sleep and Premenstrual Syndrome</a>. <em>Journal of Sleep Medicine and Disorders</em>; 3(5): 1061.</li>
	<li>Jehan, S., Masters-Isarilov, A., Salifu, I., Zizi, F., Jean-Louis, G., Pandi-Perumal, S.R., et al. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4621258/">Sleep Disorders in Postmenopausal Women</a>. <em>Journal of Sleep Disorders and Therapy</em>; 4(5): 1000212.</li>
	<li>National Heart, Lung, and Blood Institute. (2017). <a href="https://www.nhlbi.nih.gov/node/4610">How To Discuss Sleep With Your Doctor</a>.</li>
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
