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

export function yeastPage({ navigation, ...rest }) {
  const condName = "Vaginal yeast infections";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Vaginalyeastinfections.jpg?VersionId=fEcJcutX.seecAcEKkAEvrfOCi5AuqMs";
  const condDescription =
    "Most women will get a vaginal yeast infection at some point in their life. Symptoms of vaginal yeast infections include burning, itching, and thick, white discharge. Yeast infections are easy to treat, but it is important to see your doctor or nurse if you think you have an infection. Yeast infection symptoms are similar to other vaginal infections and sexually transmitted infections (STIs). If you have a more serious infection, and not a yeast infection, it can lead to major health problems.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Vaginalyeastinfections.jpg?VersionId=fEcJcutX.seecAcEKkAEvrfOCi5AuqMs"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Vaginal yeast infections</h1>  -->
            <p><strong>Most women will get a vaginal yeast infection at some point in their life. </strong>Symptoms of vaginal yeast infections include burning, itching, and thick, white discharge. Yeast infections are easy to treat, but it is important to see your doctor or nurse if you think you have an infection. Yeast infection symptoms are similar to other vaginal infections and sexually transmitted infections (STIs). If you have a more serious infection, and not a yeast infection, it can lead to major health problems.</p>

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
      title: "What is a vaginal yeast infection?",
      content: `

    <div class="answer"><p>A vaginal yeast infection is an infection of the vagina that causes itching and burning of the vulva, the area around the vagina. Vaginal yeast infections are caused by an overgrowth of the fungus&nbsp;<em>Candida</em>.</p>

<p><img alt="Diagram of the vulva. The following are labeled: Vulva, mons pubis, clitoris, urethral opening, inner and outer lips of the vagina, vaginal opening, perineum, anus." class="img-responsive" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/utianatomy.jpg" style="height: 308px; width: 350px;"></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets vaginal yeast infections?",
      content: `

    <div class="answer"><p>Women and girls of all ages can get vaginal yeast infections. Three out of four women will have a yeast infection at some point in their life. Almost half of women have two or more infections.<sup><a href="#references" title="Sources">1</a></sup></p>

<p>Vaginal yeast infections are rare before puberty and after menopause.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some women more at risk for yeast infections?",
      content: `

    <div class="answer"><p>Yes. Your risk for yeast infections is higher if:<sup><a href="#references" title="Sources">2</a></sup></p>

<ul>
	<li>You are&nbsp;<a href="/pregnancy" title="Pregnancy">pregnant</a></li>
	<li>You have&nbsp;<a href="/publications/our-publications/fact-sheet/diabetes.html" title="Diabetes fact sheet">diabetes</a>&nbsp;and your blood sugar is not under control</li>
	<li>You use a type of hormonal&nbsp;<a href="/a-z-topics/birth-control-methods" title="Birth control methods fact sheet ">birth control</a>&nbsp;that has higher doses of estrogen</li>
	<li>You&nbsp;<a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet">douche</a>&nbsp;or use vaginal sprays</li>
	<li>You recently took antibiotics such as amoxicillin or steroid medicines</li>
	<li>You have a weakened immune system, such as from&nbsp;<a href="/hiv-and-aids" title="HIV/AIDS">HIV</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of vaginal yeast infections?",
      content: `

    <div class="answer"><p>The most common symptom of a vaginal yeast infection is extreme itchiness in and around the vagina.</p>

<p>Other signs and symptoms include:</p>

<ul>
	<li>Burning, redness, and swelling of the vagina and the vulva</li>
	<li>Pain when urinating</li>
	<li>Pain during sex</li>
	<li>Soreness</li>
	<li>A thick, white vaginal discharge that looks like cottage cheese and does not have a bad smell</li>
</ul>

<p>You may have only a few of these symptoms. They may be mild or severe.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes yeast infections?",
      content: `

    <div class="answer"><p>Yeast infections are caused by overgrowth of the microscopic fungus&nbsp;<em>Candida.</em></p>

<p>Your vagina may have small amounts of yeast at any given time without causing any symptoms. But when too much yeast grows, you can get an infection.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I get a yeast infection from having sex?",
      content: `

    <div class="answer"><p>Yes. A yeast infection is not considered an STI, because you can get a yeast infection without having sex. But you can get a yeast infection from your sexual partner. Condoms and&nbsp;<a href="/glossary#dental_dam" title="glossary definition of dental dam">dental dams</a>&nbsp;may help prevent getting or passing yeast infections through vaginal, oral, or anal sex.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Should I call my doctor or nurse if I think I have a yeast infection? ",
      content: `

    <div class="answer"><p>Yes. Seeing your doctor or nurse is the only way to know for sure if you have a yeast infection and not a more serious type of infection.</p>

<p>The signs and symptoms of a yeast infection are a lot like symptoms of other more serious infections, such as STIs and&nbsp;<a href="/glossary#bv" title="glossary definition of bacterial vaginosis (BV)">bacterial vaginosis</a>&nbsp;(BV). If left untreated, STIs and BV raise your risk of getting other STIs, including HIV, and can lead to problems getting pregnant. BV can also lead to problems during pregnancy, such as premature delivery.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is a yeast infection diagnosed?",
      content: `

    <div class="answer"><p>Your doctor will do a pelvic exam to look for swelling and discharge. Your doctor may also use a cotton swab to take a sample of the discharge from your vagina. A lab technician will look at the sample under a microscope to see whether there is an overgrowth of the fungus&nbsp;<em>Candida</em>&nbsp;that causes a yeast infection.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is a yeast infection treated?",
      content: `

    <div class="answer"><p>Yeast infections are usually treated with antifungal medicine. See your doctor or nurse to make sure that you have a vaginal yeast infection and not another type of infection.</p>

<p>You can then buy antifungal medicine for yeast infections at a store, without a prescription. Antifungal medicines come in the form of creams, tablets, ointments, or suppositories that you insert into your vagina. You can apply treatment in one dose or daily for up to seven days, depending on the brand you choose.</p>

<p>Your doctor or nurse can also give you a single dose of antifungal medicine taken by mouth, such as fluconazole (floo-CON-uh-zohl). If you get more than four vaginal yeast infections a year, or if your yeast infection doesn't go away after using over-the-counter treatment, you may need to take regular doses of antifungal medicine for up to six months.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Is it safe to use over-the-counter medicines for yeast infections? ",
      content: `

    <div class="answer"><p>Yes, but always talk with your doctor or nurse before treating yourself for a vaginal yeast infection. This is because:</p>

<ul>
	<li><strong>You may be trying to treat an infection that is not a yeast infection.</strong>&nbsp;Studies show that two out of three women who buy yeast infection medicine don't really have a yeast infection.<a href="#references"><sup>2</sup></a>&nbsp;Instead, they may have an STI or bacterial vaginosis (BV). STIs and BV require different treatments than yeast infections and, if left untreated, can cause serious health problems.</li>
	<li><strong>Using treatment when you do not actually have a yeast infection can cause your body to become resistant to the yeast infection medicine.</strong>&nbsp;This can make actual yeast infections harder to treat in the future.</li>
	<li><strong>Some yeast infection medicine may weaken condoms and diaphragms, increasing your chance of getting pregnant or an STI when you have sex.</strong>&nbsp;Talk to your doctor or nurse about what is best for you, and always read and follow the directions on the medicine carefully.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I treat a yeast infection if I'm pregnant?",
      content: `

    <div class="answer"><p>During pregnancy, it's safe to treat a yeast infection with vaginal creams or suppositories that contain miconazole or clotrimazole.</p>

<p>Do&nbsp;<strong>not</strong>&nbsp;take the oral fluconazole tablet to treat a yeast infection during pregnancy. It may cause birth defects.<a href="#references"><sup>3</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I get a yeast infection from breastfeeding?",
      content: `

    <div class="answer"><p>Yes. Yeast infections can happen on your nipples or in your breast (commonly called "thrush") from breastfeeding. Yeast thrive on milk and moisture. A yeast infection you get while breastfeeding is different from a vaginal yeast infection. However, it is caused by an overgrowth of the same fungus.</p>

<p>Symptoms of thrush during breastfeeding include:</p>

<ul>
	<li>Sore nipples that last more than a few days, especially after several weeks of pain-free breastfeeding</li>
	<li>Flaky, shiny, itchy, or cracked nipples</li>
	<li>Deep pink and blistered nipples</li>
	<li>Achy breast</li>
	<li>Shooting pain in the breast during or after feedings</li>
</ul>

<p>If you have any of these signs or symptoms or think your baby might have thrush in his or her mouth, call your doctor. Learn more about thrush in our&nbsp;<a href="/breastfeeding" title="Breastfeeding">Breastfeeding</a>&nbsp;section.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "If I have a yeast infection, does my sexual partner need to be treated?",
      content: `

    <div class="answer"><p>Maybe. Yeast infections are not STIs. But it is possible to pass yeast infections to your partner during vaginal, oral, or anal sex.</p>

<ul>
	<li><strong>If your partner is a man,</strong>&nbsp;the risk of infection is low. About 15% of men get an itchy rash on the penis if they have unprotected sex with a woman who has a yeast infection. If this happens to your partner, he should see a doctor. Men who haven't been circumcised and men with diabetes are at higher risk.</li>
	<li><strong>If your partner is a woman,</strong>&nbsp;she may be at risk. She should be tested and treated if she has any symptoms.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent a yeast infection?",
      content: `

    <div class="answer"><p>You can take steps to lower your risk of getting yeast infections:</p>

<ul>
	<li>Do not douche.&nbsp;<a href="/publications/our-publications/fact-sheet/douching.html" title="Douching fact sheet">Douching</a>&nbsp;removes some of the normal bacteria in the vagina that protects you from infection.</li>
	<li>Do not use scented feminine products, including bubble bath, sprays, pads, and tampons.</li>
	<li><a href="/publications/our-publications/fact-sheet/menstruation.html" title="Menstruation and the menstrual cycle fact sheet">Change tampons, pads, and panty liners often</a>.</li>
	<li>Do not wear tight underwear, pantyhose, pants, or jeans. These can increase body heat and moisture in your genital area.</li>
	<li>Wear underwear with a cotton crotch. Cotton underwear helps keep you dry and doesn't hold in warmth and moisture.</li>
	<li>Change out of wet swimsuits and workout clothes as soon as you can.</li>
	<li>After using the bathroom, always wipe from front to back.</li>
	<li>Avoid hot tubs and very hot baths.</li>
	<li>If you have diabetes, be sure your blood sugar is under control.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does yogurt prevent or treat yeast infections?",
      content: `

    <div class="answer"><p>Maybe. Studies suggest that eating eight ounces of yogurt with "live cultures" daily or taking&nbsp;<em>Lactobacillus acidophilus</em>&nbsp;capsules can help prevent infection.<sup><a href="#references">4</a>,<a href="#references">5</a></sup></p>

<p>But, more research still needs to be done to say for sure if yogurt with&nbsp;<em>Lactobacillus</em>&nbsp;or other probiotics can prevent or treat vaginal yeast infections. If you think you have a yeast infection, see your doctor or nurse to make sure before taking any over-the-counter medicine.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I get repeat yeast infections?",
      content: `

    <div class="answer"><p>If you get four or more yeast infections in a year, talk to your doctor or nurse.</p>

<p>About 5% of women get four or more vaginal yeast infections in one year. This is called recurrent vulvovaginal candidiasis (RVVC). RVVC is more common in women with diabetes or weak immune systems, such as with HIV, but it can also happen in otherwise healthy women.</p>

<p>Doctors most often treat RVVC with antifungal medicine for up to six months. Researchers also are studying the&nbsp;<a href="http://www.ajog.org/article/S0002-9378(16)30725-6/abstract" title="Safety, Tolerability, Immunogenicity and Efficacy of NDV-3A Vaccine in Preventing Recurrent Vulvovaginal Candidiasis" class="external-link external-popup" target="_blank">effects of a vaccine to help prevent RVVC <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about vaginal yeast infections? ",
      content: `

    <div class="answer"><p>For more information on vaginal yeast infections, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.cdc.gov/" title="Centers for Disease Control and Prevention">Centers for Disease Control and Prevention (CDC), HHS</a></strong><br>
	<strong>Phone Number:</strong>&nbsp;800-232-4636</li>
	<li><strong><a href="http://www.niaid.nih.gov/" title="National Institute of Allergy and Infectious Diseases (NIAID)<br />
">National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</a></strong><br>
	<strong>Phone Number:</strong>&nbsp;866-284-4107 (TDD: 800-877-8339)</li>
	<li><strong><a href="http://www.acog.org/" title="The American Congress of Obstetricians and Gynecologists - ACOG" class="external-link external-popup" target="_blank">American College of Obstetricians and Gynecologists (ACOG) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone Number:</strong>&nbsp;800-673-8444</li>
	<li><strong><a href="http://www.plannedparenthood.org/" title="Planned Parenthood Federation of America :: Planned Parenthood" class="external-link external-popup" target="_blank">Planned Parenthood Federation of America <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone Number:</strong>&nbsp;800-230-7526</li>
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
	<li>Achkar, J.M., Fries, B.C. (2010).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2863365/" title="<em>Candida</em> Infections of the Genitourinary Tract"><em>Candida</em>&nbsp;Infections of the Genitourinary Tract</a>.&nbsp;<em>Clinical Microbiology Reviews;</em>&nbsp;23(2): 253–273.</li>
	<li>Ferris, D.G., Nyirjesy, P., Sobel, J.D., Soper, D., Pavletic, A., Litaker, M.S. (2002).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/11864668" title="Over-the-counter antifungal drug misuse associated with patient-diagnosed vulvovaginal candidiasis">Over-the-counter antifungal drug misuse associated with patient-diagnosed vulvovaginal candidiasis</a>.&nbsp;<em>Obstetrics and Gynecology;</em>&nbsp;99(3): 419–25.</li>
	<li>Soong, D., Einarson, A. (2009).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2654841/" title="Vaginal yeast infections during pregnancy">Vaginal yeast infections during pregnancy</a>.&nbsp;<em>Canadian Family Physician;</em>&nbsp;55(3): 255–256.</li>
	<li>Hilton, E., Isenberg, H.D., Alperstein, P., France, K., Borenstein, M.T. (1992).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/1736766" title="Ingestion of yogurt containing Lactobacillus acidophilus as prophylaxis for candidal vaginitis">Ingestion of yogurt containing Lactobacillus acidophilus as prophylaxis for candidal vaginitis</a>.&nbsp;<em>Annals of Internal Medicine;</em>&nbsp;116(5): 353–7.</li>
	<li>Hu, H., Merenstein, D.J., Wang, C., Hamilton, P.R., Blackmon, M.L., Chen, H., et al. (2013).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/23925786" title="Impact of eating probiotic yogurt on colonization by Candida species of the oral and vaginal mucosa in HIV-infected and HIV-uninfected women">Impact of eating probiotic yogurt on colonization by Candida species of the oral and vaginal mucosa in HIV-infected and HIV-uninfected women</a>.&nbsp;<em>Mycopathologia;</em>&nbsp;176(3–4): 175–81.</li>
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
