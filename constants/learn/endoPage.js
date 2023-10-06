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

export function endoPage({ navigation, ...rest }) {
  const condName = "Endometriosis";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Endometriosis.jpg?VersionId=VjT1iZjCKss8jho.sG55RDDbjh_M816M";
  const condDescription =
    "Endometriosis, sometimes called 'endo,' is a common health problem in women. It gets its name from the word endometrium, the tissue that normally lines the uterus or womb. Endometriosis happens when tissue similar to the lining of the uterus grows outside of your uterus and on other areas in your body where it doesn't belong. \n Most often, endometriosis is found on the: \n Ovaries \n Fallopian tubes \n Tissues that hold the uterus in place \n Outer surface of the uterus \n Other sites for growths can include the vagina, cervix, vulva, bowel, bladder, or rectum. Rarely, endometriosis appears in other parts of the body, such as the lungs, brain, and skin.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Endometriosis.jpg?VersionId=VjT1iZjCKss8jho.sG55RDDbjh_M816M"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Endometriosis</h1>  -->
            <p><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="en-doh-mee-tree-OH-suhs">Endometriosis</a> happens when tissue similar to the lining of the uterus (womb) grows outside of the uterus.</strong> It may&nbsp;affect more than 11% of&nbsp;American women between 15 and 44.<sup><a href="#references">1</a></sup> It&nbsp;is especially common among women in their 30s and 40s and&nbsp;may make it harder to get pregnant. Several different treatment options can help manage the symptoms and improve your chances of getting pregnant.</p>

<p>&nbsp;</p>

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
      title: "What is endometriosis?",
      content: `

    <div class="answer"><p>Endometriosis, sometimes called "endo," is a common health problem in women. It gets its name from the word <span class="pronounce-blue pronounce-blueJS"><a href="#">endometrium</a><span class="sound-out-blue sound-out-bluejs" style="display: none;">(en-doh-MEE-tree-um)</span></span>, the tissue that normally lines the uterus or womb. Endometriosis happens when tissue similar to the lining of the uterus grows outside of your uterus and on other areas in your body where it doesn't belong.</p>

<p>Most often, endometriosis is found on the:</p>

<ul>
	<li>Ovaries</li>
	<li><a href="/glossary#f">Fallopian tubes</a></li>
	<li>Tissues that hold the uterus in place</li>
	<li>Outer surface of the uterus</li>
</ul>

<p>Other sites for growths can include the vagina, cervix, vulva, bowel, bladder, or rectum. Rarely, endometriosis appears in other parts of the body, such as the lungs, brain, and skin.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of endometriosis?",
      content: `

    <div class="answer"><p>Symptoms of endometriosis can include:</p>

<ul>
	<li><strong>Pain.</strong> This is the most common symptom. Women with endometriosis may have many different kinds of pain. These include:

	<ul>
		<li>Very painful menstrual cramps. The pain may get worse over time.</li>
		<li>Chronic (long-term) pain in the lower back and pelvis</li>
		<li>Pain during or after sex. This is usually described as a "deep" pain and is different from pain felt at the entrance to the vagina when penetration begins.</li>
		<li>Intestinal pain</li>
		<li>Painful bowel movements or pain when urinating during menstrual periods. In rare cases, you may also find blood in your stool or urine.</li>
	</ul>
	</li>
	<li><strong>Bleeding or spotting</strong> between menstrual periods. This can be caused by something other than endometriosis. If it happens often, you should see your doctor.</li>
	<li><strong><a href="/publications/our-publications/fact-sheet/infertility.html">Infertility</a>,</strong> or not being able to get pregnant.</li>
	<li><strong>Stomach (digestive) problems.</strong> These include diarrhea, constipation, bloating, or nausea, especially during menstrual periods.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why does endometriosis cause pain and health problems?",
      content: `

    <div class="answer"><p>Endometriosis growths are benign (not cancerous). But they can still cause problems.</p>

<p>Endometriosis happens when tissue similar to the lining on the inside of your uterus or womb grows outside of your uterus or womb where it doesn't belong. Endometriosis growths may swell and bleed in the same way the lining inside of your uterus does every month — during your menstrual period. This can cause swelling and pain because the tissue grows and bleeds in an area where it cannot easily get out of your body.</p>

<p>The growths may also continue to expand and cause problems, such as:</p>

<ul>
	<li>Blocking your fallopian tubes when growths cover or grow into your ovaries. Trapped blood in the ovaries can form <a href="/publications/our-publications/fact-sheet/ovarian-cysts.html">cysts</a>.</li>
	<li>Inflammation (swelling)</li>
	<li>Forming scar tissue and adhesions (type of tissue that can bind your organs together). This scar tissue may cause pelvic pain and make it hard for you to get pregnant.</li>
	<li>Problems in your intestines and bladder</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common is endometriosis?",
      content: `

    <div class="answer"><p>Endometriosis is a common health problem for women. Researchers think that at least 11% of women, or more than 6 ½ million women in the United States, have endometriosis.<sup><a href="#references">1</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets endometriosis?",
      content: `

    <div class="answer"><p>Endometriosis can happen in any girl or woman who has menstrual periods, but it is more common in women in their 30s and 40s.</p>

<p>You might be more likely to get endometriosis if you have:</p>

<ul>
	<li>Never had children</li>
	<li>Menstrual periods that last more than seven days</li>
	<li>Short menstrual cycles (27 days or fewer)</li>
	<li>A family member (mother, aunt, sister) with endometriosis</li>
	<li>A health problem that blocks the normal flow of menstrual blood from your body during your period</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes endometriosis?",
      content: `

    <div class="answer"><p>No one knows for sure what causes this disease. Researchers are studying possible causes:</p>

<ul>
	<li><strong>Problems with menstrual period flow.</strong> Retrograde menstrual flow is the most likely cause of endometriosis. Some of the tissue shed during the period flows through the fallopian tube into other areas of the body, such as the pelvis.</li>
	<li><strong>Genetic factors.</strong> Because endometriosis runs in families, it may be inherited in the genes.</li>
	<li><strong>Immune system problems.</strong> A faulty immune system may fail to find and destroy endometrial tissue growing outside of the uterus. Immune system disorders and <a href="#l">certain cancers</a> are more common in women with endometriosis.</li>
	<li><strong>Hormones.</strong> The hormone estrogen appears to promote endometriosis. Research is looking at whether endometriosis is a problem with the body's hormone system.</li>
	<li><strong>Surgery.</strong> During a surgery to the abdominal area, such as a Cesarean (C-section) or hysterectomy, endometrial tissue could be picked up and moved by mistake. For instance, endometrial tissue has been found in abdominal scars.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent endometriosis?",
      content: `

    <div class="answer"><p>You can't prevent endometriosis. But you can reduce your chances of developing it by lowering the levels of the hormone estrogen in your body. Estrogen helps to thicken the lining of your uterus during your menstrual cycle.</p>

<p>To keep lower estrogen levels in your body, you can:</p>

<ul>
	<li><strong>Talk to your doctor about hormonal birth control methods,</strong> such as pills, patches or rings with lower doses of estrogen.</li>
	<li><strong>Exercise regularly</strong> (more than 4 hours a week).<sup><a href="#references">2</a></sup> This will also help you <strong>keep a low percentage of body fat.</strong> Regular exercise and a lower amount of body fat help decrease the amount of estrogen circulating through the body.</li>
	<li><strong>Avoid large amounts of alcohol.</strong> Alcohol raises estrogen levels.<sup><a href="#references">3</a></sup> No more than one drink per day is recommended for women who choose to drink alcohol.</li>
	<li><strong>Avoid large amount of drinks with caffeine.</strong> Studies show that drinking more than one caffeinated drink a day, especially sodas and green tea, can raise estrogen levels.<sup><a href="#references">4</a></sup></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is endometriosis diagnosed?",
      content: `

    <div class="answer"><p>If you have symptoms of endometriosis, talk with your doctor. The doctor will talk to you about your symptoms and do or prescribe one or more of the following to find out if you have endometriosis:</p>

<ul>
	<li><strong>Pelvic exam.</strong> During a pelvic exam, your doctor will feel for large cysts or scars behind your uterus. Smaller areas of endometriosis are harder to feel.</li>
	<li><strong>Imaging test.</strong> Your doctor may do an <strong>ultrasound</strong> to check for ovarian cysts from endometriosis. The doctor or technician may insert a wand-shaped scanner into your vagina or move a scanner across your abdomen. Both kinds of ultrasound tests use sound waves to make pictures of your reproductive organs. <strong>Magnetic resonance imaging</strong> (MRI) is another common imaging test that can make a picture of the inside of your body.</li>
	<li><strong>Medicine.</strong> If your doctor does not find signs of an ovarian cyst during an ultrasound, he or she may prescribe medicine:
	<ul>
		<li><strong>Hormonal birth control</strong> can help lessen pelvic pain during your period.</li>
		<li><span class="pronounce-blue pronounce-blueJS"><a href="#"><strong>Gonadotropin</strong></a><span class="sound-out-blue sound-out-bluejs" style="display: none;">(go-na-doh-TRO-pen)</span></span><strong>-releasing hormone (GnRH) agonists</strong> block the menstrual cycle and lower the amount of estrogen your body makes. GnRH agonists also may help pelvic pain.</li>
	</ul>
	</li>
	<li>If your pain gets better with hormonal medicine, you probably have endometriosis. But, these medicines work only as long as you take them. Once you stop taking them, your pain may come back.</li>
	<li><span class="pronounce-blue pronounce-blueJS"><a href="#"><strong>Laparoscopy</strong></a><span class="sound-out-blue sound-out-bluejs" style="display: none;">(lap-ar-OS-ko-pee)</span></span>. Laparoscopy is a type of surgery that doctors can use to look inside your pelvic area to see endometriosis tissue. Surgery is the only way to be sure you have endometriosis. Sometimes doctors can diagnose endometriosis just by seeing the growths. Other times, they need to take a small sample of tissue and study it under a microscope to confirm this.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is endometriosis treated?",
      content: `

    <div class="answer"><p>There is no cure for endometriosis, but treatments are available for the symptoms and problems it causes. Talk to your doctor about your treatment options.</p>

<h3>Medicine</h3>

<p><strong>If you are not trying to get pregnant,</strong> hormonal birth control is generally the first step in treatment. This may include:</p>

<ul>
	<li>Extended-cycle (you have only a few periods a year) or continuous cycle (you have no periods) birth control. These types of hormonal birth control are available in the pill or the shot and help stop bleeding and reduce or eliminate pain.</li>
	<li>Intrauterine device (IUD) to help reduce pain and bleeding. The hormonal IUD protects against pregnancy for up to 7 years. But the hormonal IUD may not help your pain and bleeding due to endometriosis for that long.</li>
</ul>

<p>Hormonal treatment works only as long as it is taken and is best for women who do not have severe pain or symptoms.</p>

<p><strong>If you are trying to get pregnant,</strong> your doctor may prescribe a gonadotropin-releasing hormone (GnRH) agonist. This medicine stops the body from making the hormones responsible for ovulation, the menstrual cycle, and the growth of endometriosis. This treatment causes a temporary menopause, but it also helps control the growth of endometriosis. Once you stop taking the medicine, your menstrual cycle returns, but you may have a better chance of getting pregnant.</p>

<h3>Surgery</h3>

<p>Surgery is usually chosen for severe symptoms, when hormones are not providing relief or if you are having fertility problems. During the operation, the surgeon can locate any areas of endometriosis and may remove the endometriosis patches. After surgery, hormone treatment is often restarted unless you are trying to get pregnant.</p>

<p><strong>Other treatments you can try,</strong> alone or with any of the treatments listed above, include:</p>

<ul>
	<li><strong>Pain medicine.</strong> For mild symptoms, your doctor may suggest taking over-the-counter medicines for pain. These include ibuprofen (Advil and Motrin) or naproxen (Aleve).</li>
	<li><strong>Complementary and alternative medicine (CAM) therapies.</strong> Some women report relief from pain with therapies such as acupuncture, chiropractic care, herbs like cinnamon twig or licorice root, or supplements, such as thiamine (vitamin B1), magnesium, or omega-3 fatty acids.<sup><a href="#references">5</a></sup></li>
</ul>

<p>Learn more about <a href="http://www.nichd.nih.gov/health/topics/endometri/conditioninfo/Pages/treatment.aspx">endometriosis treatments</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does endometriosis go away after menopause?",
      content: `

    <div class="answer"><p>For some women, the painful symptoms of endometriosis improve after menopause. As the body stops making the hormone estrogen, the growths shrink slowly. However, some women who take <a href="/glossary#m">menopausal hormone therapy</a> may still have symptoms of endometriosis.</p>

<p>If you are having symptoms of endometriosis after menopause, talk to your doctor about treatment options.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I get pregnant if I have endometriosis?",
      content: `

    <div class="answer"><p>Yes. Many women with endometriosis get pregnant. But, you may find it harder to get pregnant. Researchers think endometriosis may affect as many as one in every two&nbsp;women with infertility.<sup><a href="#references">6</a></sup></p>

<p>No one knows exactly how endometriosis might cause infertility. Some possible reasons include:<sup><a href="#references">7</a></sup></p>

<ul>
	<li>Patches of endometriosis block off or change the shape of the pelvis and reproductive organs. This can make it harder for the sperm to find the egg.</li>
	<li>The immune system, which normally helps defend the body against disease, attacks the embryo.</li>
	<li>The endometrium (the layer of the uterine lining where implantation happens) does not develop as it should.</li>
</ul>

<p>If you have endometriosis and are having trouble getting pregnant, talk to your doctor. He or she can recommend treatments, such as surgery to remove the endometrial growths.<sup><a href="#references">7</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What other health conditions are linked to endometriosis? ",
      content: `

    <div class="answer"><p>Research shows a link between endometriosis and other health problems in women and their families. Some of these include:</p>

<ul>
	<li>Allergies, asthma, and chemical sensitivities<sup><a href="#references">8</a></sup></li>
	<li>Autoimmune diseases, in which the body's system that fights illness attacks itself instead. These can include <a href="/glossary#m">multiple sclerosis</a>, <a href="/publications/our-publications/fact-sheet/lupus.html">lupus</a>, and some types of <a href="/publications/our-publications/fact-sheet/thyroid-disease.html#e">hypothyroidism</a>.<sup><a href="#references">9</a></sup></li>
	<li><a href="/publications/our-publications/fact-sheet/chronic-fatigue-syndrome.html">Chronic fatigue syndrome</a> and <a href="/publications/our-publications/fact-sheet/fibromyalgia.html">fibromyalgia</a><sup><a href="#references">9</a></sup></li>
	<li>Certain cancers, such as <a href="/publications/our-publications/fact-sheet/ovarian-cancer.html">ovarian</a><sup><a href="#references">10</a></sup> and breast cancer<sup><a href="#references">11</a></sup></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about endometriosis?",
      content: `

    <div class="answer"><p>For more information about endometriosis, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.nichd.nih.gov/health/topics/endometri/Pages/default.aspx">Eunice Kennedy Shriver National Institute of Child Health and Human Development (NICHD), NIH, HHS</a><br>
	<strong>Phone Number:</strong> 800-370-2943</li>
	<li><a href="http://www.acog.org/~/media/For Patients/faq013.pdf?dmc=1&amp;ts=20140609T1053443200" class="external-link external-popup" target="_blank">American College of Obstetricians and Gynecologists (ACOG) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong> 800-673-8444</li>
	<li><a href="http://www.endometriosisassn.org/" class="external-link external-popup" target="_blank">Endometriosis Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong> 414-355-2200</li>
	<li><a href="http://www.endofound.org/" target="_blank" class="external-link external-popup">Endometriosis Foundation of America <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong> 646-854-3337</li>
	<li><a href="http://endocenter.org" class="external-link external-popup" target="_blank">Endometriosis Research Center <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong> 800-239-7280</li>
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
	<li>Buck, L.G.M., Hediger, M.L., Peterson, C.M., Croughan, M., Sundaram, R., Stanford, J., Chen, Z., et al. (2011). <a href="https://www.ncbi.nlm.nih.gov/pubmed/21719000">Incidence of endometriosis by study population and diagnostic method: the ENDO study.</a> <em>Fertility and Sterility; </em>96(2): 360-5.</li>
	<li>American College of Obstetricians and Gynecologists. (2010). <a href="https://www.ncbi.nlm.nih.gov/pubmed/20567196" title="Management of endometriosis (Practice Bulletin No. 114)">Management of endometriosis (Practice Bulletin No. 114)</a>: News release. <em>Obstetrics &amp; Gynecology,</em> 116(1), 223–236</li>
	<li>National Institute on Alcohol Abuse and Alcoholism. (2003). Alcohol's Effects on Female Reproductive Function.</li>
	<li>Schliep, K., et al. (2012). <a href="https://academic.oup.com/ajcn/article/95/2/488/4576834" title="Caffeinated beverage intake and reproductive hormones among premenopausal women in the BioCycle Study" class="external-link external-popup" target="_blank">Caffeinated beverage intake and reproductive hormones among premenopausal women in the BioCycle Study <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>American Journal of Clinical Nutrition;</em> 95(2): 488–497.</li>
	<li>Roshni, P., et al. (2012). <a href="http://www.irjponline.com/admin/php/uploads/897_pdf.pdf" class="external-link external-popup" target="_blank">Complementary and Alternative Medicine (CAM) Therapies for Management of Pain Related to Endometriosis <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>International Research Journal of Pharmacy;</em> 3(3): 30-34.</li>
	<li>Macer, M.L., Taylor, H.S. (2012). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3538128/" target="_blank">Endometriosis and Infertility: A review of the pathogenesis and treatment of endometriosis-associated infertility.</a> <em>Obstetrics and Gynecology Clinics of North America;</em> 39(4): 535–549.</li>
	<li>NICHD. (2013). <a href="http://www.nichd.nih.gov/health/topics/endometri/Pages/default.aspx">Endometriosis</a></li>
	<li>Matalliotakis, I. et al. (2012). High rate of allergies among women with endometriosis. <em>Journal of Obstetrics and Gynaecology;</em> 32(3): 291-293.</li>
	<li>Sinaii, N. et al. (2002). <a href="http://www.ncbi.nlm.nih.gov/pubmed/12351553">High rates of autoimmune and endocrine disorders, fibromyalgia, chronic fatigue syndrome, and atopic diseases among women with endometriosis: A survey analysis</a>. <em>Human Reproduction;</em> 17(10): 2715-2724.</li>
	<li>Sayasneh, A. et al (2011). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3140029/">Endometriosis and ovarian cancer: A systematic review</a>. <em>ISRN Obstetrics and Gynecology.</em></li>
	<li>Munksgaard, P. S., &amp; Blaakaer, J. (2011). <a href="http://www.sciencedirect.com/science/article/pii/S0090825811004847" class="external-link external-popup" target="_blank">The association between endometriosis and gynecological cancers and breast cancer: A review of epidemiological data <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Gynecologic Oncology,</em> 123, 157-163.</li>
</ol>
</div>
`,
    },
  ];
  return [condName, condImURL, condDescription, condHeader, condQA];
}

export function endoScreening({ navigation, ...rest }) {
  const screeningTree = [
    {
      title: "Endometriosis Question1",
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
      title: "Endometriosis Question2",
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
