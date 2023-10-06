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

export function ctsPage({ navigation, ...rest }) {
  const condName = "Carpal tunnel syndrome";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Carpaltunnelsyndrome.jpg?VersionId=F1.ARYdu_jH1kLKi4Quuv2MWTjKMtQEF";
  const condDescription =
    "CTS is the name for a group of problems that includes swelling, pain, tingling, and loss of strength in your wrist and hand. Your wrist is made of small bones that form a narrow groove or carpal tunnel. Tendons and a nerve called the median nerve must pass through this tunnel from your forearm into your hand. The median nerve controls the feelings and sensations in the palm side of your thumb and fingers. Sometimes swelling and irritation of the tendons can put pressure on the wrist nerve, causing the symptoms of CTS. A person's dominant hand is the one that is usually affected. However, nearly half of CTS sufferers have symptoms in both hands. \n CTS has become more common in the U.S. and is quite costly in terms of time lost from work and expensive medical treatment. The U.S. Department of Labor reported that in 2015 the average number of missed days of work due to CTS was 28 days.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Carpaltunnelsyndrome.jpg?VersionId=F1.ARYdu_jH1kLKi4Quuv2MWTjKMtQEF"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Carpal tunnel syndrome</h1>  -->
            <p><strong>Carpal tunnel syndrome (CTS) </strong>is the name for a group of problems that includes swelling, pain, tingling, and loss of strength in your wrist and hand. Women are three times more likely to have CTS than men.&nbsp;</p>

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
      title: "What is CTS?",
      content: `

    <div class="answer"><p>CTS&nbsp;is the name for a group of problems that includes swelling, pain, tingling, and loss of strength in your wrist and hand. Your wrist is made of small bones that form a narrow groove or carpal tunnel. Tendons and a nerve called the median nerve must pass through this tunnel from your forearm into your hand. The median nerve controls the feelings and sensations in the palm side of your thumb and fingers. Sometimes swelling and irritation of the tendons can put pressure on the wrist nerve, causing the symptoms of CTS. A person's dominant hand is the one that is usually affected. However, nearly half of CTS sufferers have symptoms in both hands.</p>

<p>CTS has become more common in the U.S. and is quite costly in terms of time lost from work and expensive medical treatment. The U.S. Department of Labor reported that in 2015 the average number of missed days of work due to CTS was 28&nbsp;days.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of CTS?",
      content: `

    <div class="answer"><p>Typically, CTS begins slowly with feelings of burning, tingling, and numbness in the wrist and hand. The areas most affected are the thumb, index and middle fingers. At first, symptoms may happen more often at night. Many CTS sufferers do not make the connection between a daytime activity that might be causing the CTS and the delayed symptoms. Also, many people sleep with their wrist bent, which may cause more pain and symptoms at night. As CTS gets worse, the tingling may be felt during the daytime too, along with pain moving from the wrist to your arm or down to your fingers. Pain is usually felt more on the palm side of the hand.</p>

<p>Another symptom of CTS is weakness of the hands that gets worse over time. Some people with CTS find it difficult to grasp an object, make a fist, or hold onto something small. The fingers may even feel like they are swollen even though they are not. Over time, this feeling will usually happen more often.</p>

<p>If left untreated, those with CTS can have a loss of feeling in some fingers and permanent weakness of the thumb. Thumb muscles can actually waste away over time. Eventually, CTS sufferers may have trouble telling the difference between hot and cold temperatures by touch.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes CTS and who is more likely to develop it?",
      content: `

    <div class="answer"><p>Women are three times more likely to have CTS than men. Although there is limited research on why this is the case, scientists have several ideas. It may be that the wrist bones are naturally smaller in most women, creating a tighter space through which the nerves and tendons must pass. Other researchers are looking at genetic links that make it more likely for women to have musculoskeletal injuries such as CTS. Women also deal with strong hormonal changes during pregnancy and menopause that make them more likely to suffer from CTS. Generally, women are at higher risk of CTS between the ages of 45 and 54. Then, the risk increases for both men and women as they age.</p>

<p>There are other factors that can cause CTS, including certain health problems and, in some cases, the cause is unknown.</p>

<p>These are some of the risk factors that might increase your chances of developing CTS:</p>

<ul>
	<li><strong>Genetic predisposition.</strong>&nbsp;The carpal tunnel is smaller in some people than others.</li>
	<li><strong>Repetitive movements.</strong>&nbsp;People who do the same movements with their wrists and hands over and over may be more likely to develop CTS. People with certain types of jobs are more likely to have CTS, including manufacturing and assembly line workers, grocery store checkers, violinists, and carpenters. Some hobbies and sports that use repetitive hand movements can also cause CTS, such as golfing, knitting, and gardening. Whether or not long-term typing or computer use causes CTS is still being debated. Limited research points to a weak link, but more research is needed.</li>
	<li><strong>Injury or trauma.</strong>&nbsp;A sprain or a fracture of the wrist can cause swelling and pressure on the nerve, increasing the risk of CTS. Forceful and stressful movements of the hand and wrist can also cause trauma, such as strong vibrations caused by heavy machinery or power tools.</li>
	<li><strong>Pregnancy.</strong>&nbsp;Hormonal changes during pregnancy and build-up of fluid can put pregnant women at greater risk of getting CTS, especially during the last few months. Most doctors treat CTS in pregnant women with wrist splints or rest, rather than surgery, as CTS almost always goes away following childbirth.</li>
	<li><strong>Menopause.</strong>&nbsp;Hormonal changes during menopause can put women at greater risk of getting CTS. Also, in some postmenopausal women, the wrist structures become enlarged and can press on the wrist nerve.</li>
	<li><strong>Breast cancer.</strong>&nbsp;Some women who have a mastectomy get lymphedema, the build-up of fluids that go beyond the lymph system's ability to drain it. In mastectomy patients, this causes pain and swelling of the arm. Although rare, some of these women will get CTS due to pressure on the nerve from this swelling.</li>
	<li><strong>Medical conditions.</strong>&nbsp;People who have diabetes, hypothyroidism, lupus, obesity, and rheumatoid arthritis are more likely to get CTS. In some of these patients, the normal structures in the wrist can become enlarged and lead to CTS.</li>
</ul>

<p>Also, smokers with CTS usually have worse symptoms and recover more slowly than nonsmokers.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is CTS treated?",
      content: `

    <div class="answer"><p>It is important to be treated by a doctor for CTS in order to avoid permanent damage to the wrist nerve and muscles of the hand and thumb. Underlying causes, such as diabetes or a thyroid problem, should be addressed first. Left untreated, CTS can cause nerve damage that leads to loss of feeling and&nbsp;hand strength. Over time, the muscles of the thumb can become weak and damaged. You can even lose the ability to feel hot and cold by touch. Permanent injury occurs in about 1 percent of those with CTS.</p>

<p>CTS is much easier to treat early on. Most CTS patients get better after first-step treatments and the following tips for protecting the wrist. Treatments for CTS include the following:</p>

<ul>
	<li><strong>Wrist splint.</strong>&nbsp;A splint can be worn to support and brace your wrist in a neutral position so that the nerves and tendons can recover. A splint can be worn 24 hours a day or only at night. Sometimes, wearing a splint at night helps to reduce the pain. Splinting can work the best when done within three months of having any symptoms of CTS.</li>
	<li><strong>Rest.</strong>&nbsp;For people with mild CTS, stopping or doing less of a repetitive movement may be all that is needed. Your doctor will likely talk to you about steps that you should take to prevent CTS from coming back.</li>
	<li><strong>Medication.</strong>&nbsp;The short-term use of nonsteroidal anti-inflammatory drugs (NSAIDs) may be helpful to control CTS pain. NSAIDs include aspirin, ibuprofen, and other non-prescription pain relievers. In severe cases, an injection of cortisone may help to reduce swelling. Your doctor may also give you corticosteroids in a pill form. But, these treatments only relieve symptoms temporarily. If CTS is caused by another health problem, your doctor will probably treat that problem first. If you have diabetes, it is important to know that long-term corticosteroid use can make it hard to control insulin levels.</li>
	<li><strong>Physical therapy.</strong>&nbsp;A physical therapist can help you do special exercises to make your wrist and hand stronger. There are also many different kinds of treatments that can make CTS better and help relieve symptoms. Massage, yoga, ultrasound, chiropractic manipulation, and acupuncture are just a few such options that have been found to be helpful. You should talk with your doctor before trying these alternative treatments.</li>
	<li><strong>Surgery.</strong>&nbsp;CTS surgery is one of the most common surgeries done in the U.S. Generally, surgery is only an option for severe cases of CTS and/or after other treatments have failed for a period of at least six months. Open release surgery is a common approach to CTS surgery and involves making a small incision in the wrist or palm and cutting the ligament to enlarge the carpal tunnel. This surgery is done under a local anesthetic to numb the wrist and hand area and is an outpatient procedure.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the best way to prevent CTS?",
      content: `

    <div class="answer"><p>Current research is focused on figuring out what causes CTS and how to prevent it. The National Institute of Neurological Disorders and Stroke (NINDS) and the National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS) support research on work-related factors that may cause CTS. Scientists are also researching better ways to detect and treat CTS, including alternative treatments such as acupuncture.</p>

<p><strong>The following steps can help to prevent CTS:</strong></p>

<ul>
	<li><strong>Prevent workplace musculoskeletal injury.</strong>&nbsp;Make sure that your workspace and equipment are at the right height and distance for your hands and wrist to work with less strain. If you are working on a computer, the keyboard should be at a height that allows your wrist to rest comfortably without having to bend at an angle. Desk or table workspace should be about 27 to 29 inches above the floor for most people. It also helps to keep your elbows close to your sides as you type to reduce the strain on your forearm. Keeping good posture and wrist position can lower your risk of getting CTS.</li>
	<li><strong>Take breaks.</strong>&nbsp;Allowing your hand and wrist to rest and recover every so often will lower your risk of swelling. Experts believe that taking a 10 to 15 minute break every hour is a good way to prevent CTS.</li>
	<li><strong>Vary tasks.</strong>&nbsp;Avoid repetitive movements without changing up your routine. Try to do tasks that use different muscle movements during each hour. Break up tasks that require repetitive wrist and hand motion with those that do not.</li>
	<li><strong>Relax your grip.</strong>&nbsp;Sometimes, people get into a habit of tensing muscles without needing to. Practice doing hand and wrist motion tasks more gently and less tightly. Stress and tension play a role in muscle strain and irritation.</li>
	<li><strong>Do exercises.</strong>&nbsp;After doing repetitive movements for a while, you can sometimes cancel out the effects of those movements by flexing and bending your wrists and hands in the opposite direction. For example, after typing with your wrist and hand extended, it is helpful to make a tight fist and hold it for a second, then stretch out the fingers and hold for a few seconds. Try repeating this several times.</li>
	<li><strong>Stay warm.</strong>&nbsp;Muscles that are warm are less likely to get hurt and the risk of getting CTS is greater in a cold environment. It is important to keep your hands warm while you work, even if you must wear fingerless gloves.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about carpal tunnel syndrome? ",
      content: `

    <div class="answer"><p>For more information about carpal tunnel syndrome, call the OWH Helpline&nbsp;at 1-800-994-9662&nbsp;or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.niams.nih.gov/">National Institute of Arthritis and Musculoskeletal and Skin Diseases, NIAMS, NIH, HHS</a></strong><br>
	<strong>Phone:</strong>&nbsp;301-495-4484, 877-226-4267 Toll-Free, 301-565-2966 TTY</li>
	<li><strong><a href="http://www.ninds.nih.gov/">National Institute of Neurological Disorders and Stroke, NIH, HHS</a></strong><br>
	<strong>Phone:</strong>&nbsp;301-496-5751, 800-352-9424 Toll-Free, 301-468-5981 TTY</li>
	<li><strong><a href="http://www.cdc.gov/niosh">National Institute for Occupational Safety and Health, CDC</a></strong><br>
	<strong>Phone:</strong>&nbsp;800-232-4636</li>
	<li><strong><a href="http://www.aaos.org/" class="external-link external-popup" target="_blank">American Academy of Orthopaedic Surgeons <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone:</strong>&nbsp;847-823-7186, 800-346-2267 Toll-Free</li>
	<li><strong><a href="https://www.theacpa.org/" class="external-link external-popup" target="_blank">American Chronic Pain Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone:</strong>&nbsp;916-632-0922, 800-533-3231 Toll-Free</li>
	<li><strong><a href="http://www.assh.org/" class="external-link external-popup" target="_blank">American Society for Surgery of the Hand <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone:</strong>&nbsp;847-384-8300</li>
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
