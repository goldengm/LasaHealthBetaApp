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

export function acnePage({ navigation, ...rest }) {
  const condName = "Acne";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Acne.jpg?VersionId=9.EhqGwa2wfDB.lnW7vhJW1wvj_yrq1M";
  const condDescription =
    "Acne is a disorder that causes outbreaks of skin lesions commonly called pimples. It is caused by the skin's oil glands making too much sebum, an oily substance, which leads to plugged pores. It also can be caused by the rapid production of a bacteria P. acnes. \n Acne lesions occur mostly on the face, neck, back, chest, and shoulders. It is the most common skin disease. Although acne is not a serious health threat, severe acne can lead to disfiguring and permanent scarring.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!-- <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Acne.jpg?VersionId=9.EhqGwa2wfDB.lnW7vhJW1wvj_yrq1M"></div> -->
                <div class="heading-description heading-description--half-width">
                <!-- <h1>Acne</h1>  -->
            <p><strong>Acne is a disorder that causes outbreaks of skin lesions commonly called pimples.&nbsp;</strong>Acne lesions occur mostly on the face, neck, back, chest, and shoulders. It is the most common skin disease. Although acne is not a serious health threat, severe acne can lead to disfiguring and permanent scarring.</p>

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
      title: "What is acne?",
      content: `

    <div class="answer" style="display: block;"><p>Acne is a disorder that causes outbreaks of skin lesions commonly called pimples. It is caused by the skin's oil glands making too much sebum, an oily substance, which leads to plugged pores. It also can be caused by the rapid production of a bacteria <em>P. acnes</em>.</p>

<p>Acne lesions occur mostly on the face, neck, back, chest, and shoulders. It is the most common skin disease. Although acne is not a serious health threat, severe acne can lead to disfiguring and permanent scarring.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does acne affect women?",
      content: `

    <div class="answer"><p>Most young women and men will have at least a few pimples over the course of their lives. But acne seems to affect men and women in different ways. Young men are more likely to have a more serious form of acne. Acne in young women tends to be more random and linked to hormone changes, such as the <a href="menstruation.html">menstrual cycle</a>.</p>

<p>As women get older, acne often gets better. But some women have acne for many years. Some women even get acne for the first time at age 30 or 40.</p>

<p>For many women, acne can be an upsetting illness. Women may have feelings of <a href="/publications/our-publications/fact-sheet/depression.html">depression</a>, poor <a href="/body-image/">body image</a>, or low self-esteem. But you don't have to wait to outgrow acne or to let it run its course. Today, almost every case of acne can be resolved. Acne also can, sometimes, be prevented. Talk with your doctor or dermatologist (a doctor who specializes in treating skin problems) about how you can help prevent acne and if treatment would help you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of acne lesions?",
      content: `

    <div class="answer"><ul>
	<li><strong>Comedo (whiteheads or blackheads) or papules.</strong> The comedo is the basic acne lesion, which is a plugged pore. If the plugged pore stays under the skin, it's called a closed comedo and forms a white bump or whitehead. Blackheads are comedos that open up and appear blackish on the surface of the skin. This black color is not due to dirt, but because the air reacts with the excess oil.</li>
	<li><strong>Pustules or pimples.</strong> Pustules or pimples are acne lesions that contain pus and are red at the base.</li>
	<li><strong>Nodules.</strong> These are more serious acne lesions. They lodge deeper in the skin, are painful, and can cause scarring.</li>
	<li><strong>Cysts.</strong> Like nodules, these lesions are deep within in the skin, are painful, and are filled with pus, and can cause scarring.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What triggers acne in women?",
      content: `

    <div class="answer"><p>Many things can trigger acne in women:</p>

<ul>
	<li>Hormone changes during puberty. During puberty, girls have an increase in male sex hormones called androgens. This increase causes the glands to get larger and make more sebum.</li>
	<li>Hormone changes as an adult. The menstrual cycle is one of the most common acne triggers. Acne lesions tend to form a few days before the cycle begins and go away after the cycle is completed. Other hormone changes, such as <a href="/pregnancy/">pregnancy</a> and <a href="/publications/our-publications/fact-sheet/menopause-treatment.html">menopause</a>, improve acne in some women. But some women have worse acne during these times. Stopping use of <a href="/publications/our-publications/fact-sheet/birth-control-methods.html">birth control</a> pills can play a role as well.</li>
	<li>Medicines. Certain medicines, such as those used to treat epilepsy and types of depression.</li>
	<li>Make-up.</li>
	<li>Pressure or friction on the skin. Friction caused by bike helmets or backpacks can make acne worse.</li>
	<li>Family history. If other people in your family have acne, there is a greater chance you will have it.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does poor hygiene cause acne?",
      content: `

    <div class="answer"><p>It is a myth that women get acne because they don't wash enough. Too much washing or scrubbing the skin harshly can make acne worse. And washing away surface oils doesn't do much to prevent or cure acne, because it forms under the skin. The best way to clean the face is to gently wash it twice a day with a mild soap or cleanser. Be careful to remove make-up without harsh scrubbing.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can stress cause acne?",
      content: `

    <div class="answer"><p>Stress does not cause acne. But, acne may be a side effect of some medicines used to treat <a href="/publications/our-publications/fact-sheet/stress-your-health.html">stress</a> or depression. And in some cases, the social and emotional impact of acne lesions causes stress. Talk with your doctor if you have concerns.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can eating chocolate or greasy foods cause acne?",
      content: `

    <div class="answer"><p>While many women feel that eating chocolate or greasy foods causes acne, experts have not found a link between the diet and acne. Foods seem to have little effect on acne in most people. But, it's important to eat a healthy diet for good health.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is mild acne treated?",
      content: `

    <div class="answer"><p>There are many treatments for mild acne. Mild acne can consist of whiteheads, blackheads and small pustules. At home, you can wash your face twice per day with warm water and a gentle cleanser or soap. Your doctor may suggest you also try an over-the-counter lotion or cream. These medicines may make your skin dry if you use them too much. Be sure to follow the directions.</p>

<p>If these medicines don't work, your doctor may prescribe a cream or lotion with benzoyl peroxide, resorcinol, salicylic acid, or sulfur.</p>

<ul>
	<li>Benzoyl peroxide works to reduce oil made by the glands.</li>
	<li>Resorcinol, salicylic acid, and sulfur help breakdown whiteheads and blackheads.</li>
</ul>

<p>If your acne does not get better after six to eight weeks, talk with your doctor about changing your treatment.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can more serious forms of acne be treated?",
      content: `

    <div class="answer"><p>Yes. Work with your doctor to find the best treatment for you.</p>

<p><strong>Moderate to moderately severe acne.</strong> This type of acne consists of several whiteheads, blackheads, papules and pustules that cover from ¼ to ¾ of the face and/or other parts of the body. It can be treated with antibiotic lotions or gels, as well as retinoic acid. Retinoic acid is an altered form of vitamin A. It helps prevent whiteheads and blackheads. Your doctor may also prescribe an antibiotic pill, such as erythromycin. If you take birth control pills to prevent pregnancy, antibiotics can affect how well they work. Be sure to use a second method of birth control with the pill, such as a condom. Retinoic acid and antibiotic pills can make the skin sensitive to the sun. So, wear sunscreen and stay in the shade while using them.</p>

<p><strong>Severe acne.</strong> Severe acne consists of deep cysts, redness, swelling, extreme damage to the skin and scarring. You should see a dermatologist to care for this type of acne. Scarring can be prevented with appropriate treatments. Your dermatologist can prescribe oral antibiotics and oral contraceptives. Large inflamed cysts can be treated with an injection of a drug that lessens the redness, swelling, and irritation, and promotes healing.</p>

<p>Your dermatologist may prescribe Accutane®, if other treatments have not worked. This is a strong medicine that can help prevent scarring and treat active disease. But, Accutane also can cause birth defects. It is important that you are not pregnant and do not plan to get pregnant while taking this medicine. You must use two methods of birth control at the same time. This is done for one month before treatment begins, during treatment, and for a full month after stopping the drug. Talk with your dermatologist about when it's safe to get pregnant. Other side effects of this drug may include dry eyes, itching, mood changes, and changes in the blood and liver. You and your dermatologist can decide whether this medicine is right for you based on the pros and cons. Use any prescribed medicine exactly as you are advised. Taking more medicine than you are supposed to take may make acne or your general health worse. Ask your doctor what to do if you miss a dose.</p>

<p>Some large cysts do not respond to medication and may need to be drained or removed. Your dermatologist is the only person who should drain or remove these. You should never try to drain or remove your acne by squeezing or picking. This can lead to infection, worsen your acne, and cause scarring.</p>

<p>Overall, if you don't see a change in your skin in six to eight weeks, talk with your doctor about your treatment plan.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can birth control pills help treat acne?",
      content: `

    <div class="answer"><p>For women who break out mainly around their menstrual cycle, some <a href="/publications/our-publications/fact-sheet/birth-control-methods.html">birth control</a> pills can help. Research shows that these pills can clear acne by slowing down overactive oil glands in the skin. Sometimes, birth control pills are used along with a drug called spironolactone to treat acne in adult females. This medication lowers levels of the hormone androgen in the body. Androgen stimulates the skin's oil glands. Side effects of this drug include irregular menstruation, breast tenderness, headache and fatigue. Spironolactone is not appropriate therapy for all patients.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "When is surgery used for acne scarring?",
      content: `

    <div class="answer"><p>If you have scarring, your dermatologist may suggest surgery to help heal acne lesions and remove scarring. A laser can reshape scar tissue and reduce redness. Dermabrasion is a type of surgery that can remove surface scars and reduce the depth of deep scars. Another option is to transfer fat from one part of the body to the face. In some cases, a single treatment can help scarring. But for lasting results, several are often needed. There are also topical treatments for acne scarring.</p>

<p>Photodynamic therapy is a new acne treatment. It begins with light microdermabrasion. This is used to remove dead skin cells on the face's surface. Then, an acid is put on the skin for 30 to 60 minutes. After this period, the acid is taken off. Lastly, the skin is treated with a laser. This treatment is still being researched, but seems to give positive long-term results.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I help prevent acne and acne scars?",
      content: `

    <div class="answer"><p>You can help prevent acne flare-ups and scars by taking good care of your skin:</p>

<ul>
	<li>Clean your skin gently with a mild soap or cleanser twice a day — once in the morning and once at night. You should also gently clean the skin after heavy exercise. Avoid strong soaps and rough scrub pads. Harsh scrubbing of the skin may make acne worse. Wash your entire face from under the jaw to the hairline and rinse thoroughly. Remove make-up gently with a mild soap and water. Ask your doctor before using an astringent.</li>
	<li>Wash your hair on a regular basis. If your hair is oily, you may want to wash it more often.</li>
	<li>Do not squeeze or pick at acne lesions. This can cause acne scars.</li>
	<li>Avoid getting sunburned. Many medicines used to treat acne can make you more prone to sunburn. Many people think that the sun helps acne, because the redness from sunburn may make acne lesions less visible. But, too much sun can also increase your risk of skin cancer and early aging of the skin. When you're going to be outside, use sunscreen of at least SPF 15. Also, try to stay in the shade as much as you can.</li>
	<li>Choose make-up and hair care products that are "non-comedogenic" or "non-acnegenic." These products have been made in a way that they don't cause acne. You may also want to use products that are oil-free.</li>
	<li>Avoid things that rub the skin as much as you can, such as backpacks and sports equipment.</li>
	<li>Talk with your doctor about what treatment methods can help your acne. Take your medicines as prescribed. Be sure to tell your doctor if you think medicines you take for other health problems make your acne worse.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is rosacea the same as acne?",
      content: `

    <div class="answer"><p><span class="pronounce-blue pronounce-blueJS"><a href="#">Rosacea</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (ro-ZAY-she-ah)</span></span> is a common skin problem often called "adult acne." Faired skinned and menopausal women are more likely to have rosacea. Rosacea also seems to run in families. It causes redness in the center parts of the face and pimples. Blood vessels under the skin of the face may enlarge and show through the skin as small red lines. The skin may be swollen and feel warm.</p>

<p>Women with rosacea don't have the same lesions as seen with common acne. They may have flushing of the face, when they are hot, drink alcohol or hot drinks, or eat spicy foods. This flushing causes the face to appear red. In the most severe form, this redness does not go away. The eyes may become swollen and nodules in the skin may be painful.</p>

<p>You can help keep rosacea under control by keeping a record of things that cause it to flare up. Try to avoid or limit these triggers as much as you can. Antibiotic lotions or gels can also help. Sometimes, you may need to take antibiotic pills. Your dermatologist may treat you with laser surgery. If you think you have rosacea, talk with your doctor about these treatments.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "More information on acne",
      content: `

    <div class="answer"><p>For more information about acne, call womenshealth.gov at 1-800-994-9662 (TDD: 888-220-5446) or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.asds.net" class="external-link external-popup" target="_blank">American Society for Dermatologic Surgery <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone:</strong> 800-441-2737, 847-956-0900</li>
	<li><strong><a href="http://www.aad.org/" class="external-link external-popup" target="_blank">American Academy of Dermatology <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone:</strong> 847-330-0230, 202-842-3555, 866-503-SKIN (7546)</li>
	<li><strong><a href="http://www.aocd.org/" class="external-link external-popup" target="_blank">American Osteopathic College of Dermatology <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone:</strong> 800-449-2623</li>
	<li><strong><a href="http://www.dermatology.org/" class="external-link external-popup" target="_blank">DermWeb <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone:</strong> 604-875-4747</li>
	<li><strong><a href="http://www.niams.nih.gov/">National Institute of Arthritis and Musculoskeletal and Skin Diseases</a></strong><br>
	Information Clearinghouse, NIAMS, NIH, HHS<br>
	<strong>Phone:</strong> 301-495-4484, 301-565-2966 (TDD: 877-226-4267)</li>
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
