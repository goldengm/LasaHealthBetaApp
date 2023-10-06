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

export function utiPage({ navigation, ...rest }) {
  const condName = "Urinary Tract Infection";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Urinarytractinfections.jpg?VersionId=AcgYcdSz53Mv7wd0ccJRsivPWVXffxgz";
  const condDescription =
    "Urinary tract infections (UTIs) are most often caused by bacteria (germs) that get into the bladder, which is part of the urinary tract. UTIs are also called bladder infections. UTIs are common, especially in women. More than half of women will have at least one UTI at some point in life.1 UTIs are serious and often painful. But most UTIs are easy to treat with antibiotics.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Urinarytractinfections.jpg?VersionId=AcgYcdSz53Mv7wd0ccJRsivPWVXffxgz"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Urinary tract infections</h1>  -->
            <p><strong>Urinary tract infections (UTIs) are most often caused by bacteria (germs) that get into the bladder, which is part of the urinary tract.</strong> UTIs are also called bladder infections. UTIs are common, especially in women. More than half of women will have at least one UTI at some point in life.<a href="#references"><sup>1</sup></a> UTIs are serious and often painful. But most UTIs are easy to treat with antibiotics.</p>

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
      title: "What is a urinary tract infection (UTI)?",
      content: `

    <div class="answer"><p>UTIs can happen anywhere in the urinary system (which includes the kidneys, ureters, bladder, and urethra). UTIs are most common in the bladder. A UTI in the bladder is called cystitis. Infections in the bladder can spread to the upper part of the urinary tract or the kidneys. A UTI in the kidneys is called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="PY-uh-lo-neh-FRY-tis">pyelonephritis</a> or "pyelo."</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets UTIs?",
      content: `

    <div class="answer"><p>Women get UTIs up to 30 times more often than men do.<a href="#references"><sup>2</sup></a> Also, as many as 4 in 10 women who get a UTI will get at least one more within six months.<a href="#references"><sup>3</sup></a></p>

<p>Women get UTIs more often because a woman's <a href="/glossary#urethra">urethra</a> (the tube from the bladder to where the urine comes out of the body) is shorter than a man's. This makes it easier for bacteria to get into the bladder. A woman's urethral opening is also closer to both the vagina and the <a href="/glossary#anus">anus</a>, the main source of germs such as <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="esh-uh-RIK-ee-uh KOH-lie"><em>Escherichia coli</em></a> (<em>E. coli</em>) that cause UTIs.<a href="#references"><sup>4</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some women more at risk for UTIs?",
      content: `

    <div class="answer"><p>Yes. You may be at greater risk for a UTI if you:<a href="#references"><sup>1</sup></a><sup>,</sup><a href="#references"><sup>5</sup></a></p>

<ul>
	<li><strong>Are sexually active.</strong> Sexual activity can move germs that cause UTIs from other areas, such as the vagina, to the urethra.</li>
	<li><strong>Use a <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="DEYE-uh-fram">diaphragm</a> for </strong><a href="/a-z-topics/birth-control-methods"><strong>birth control</strong></a><strong> or use spermicides</strong> (creams that kill sperm) with a diaphragm or with condoms. Spermicides can kill good bacteria that protect you from UTIs.</li>
	<li><strong>Are pregnant.</strong> Pregnancy hormones can change the bacteria in the urinary tract, making UTIs more likely. Also, many pregnant women have trouble completely emptying the bladder, because the uterus (womb) with the developing baby sits on top of the bladder during pregnancy. Leftover urine with bacteria in it can cause a UTI.</li>
	<li><strong>Have gone through </strong><a href="/menopause"><strong>menopause</strong></a><strong>.</strong> After menopause, loss of the hormone <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="ESS-truh-juhn">estrogen</a> causes vaginal tissue to become thin and dry. This can make it easier for harmful bacteria to grow and cause a UTI.</li>
	<li><strong>Have diabetes,</strong> which can lower your immune (defense) system and cause nerve damage that makes it hard to completely empty your bladder</li>
	<li><strong>Have any condition, like a kidney stone,</strong> that may block the flow of urine between your kidneys and bladder</li>
	<li><strong>Have or recently had a <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="KATH-uh-tur">catheter</a> in place.</strong> A catheter is a thin tube put through the urethra into the bladder. Catheters drain urine when you cannot pass urine on your own, such as during surgery.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of a UTI?",
      content: `

    <div class="answer"><p>If you have a UTI, you may have some or all of these symptoms:<a href="#references"><sup>6</sup></a><sup>,</sup><a href="#references"><sup>7</sup></a></p>

<ul>
	<li>Pain or burning when urinating</li>
	<li>An urge to urinate often, but not much comes out when you go</li>
	<li>Pressure in your lower abdomen</li>
	<li>Urine that smells bad or looks milky or cloudy</li>
	<li>Blood in the urine. This is more common in younger women. If you see blood in your urine, tell a doctor or nurse right away.</li>
	<li>Feeling tired, shaky, confused, or weak. This is more common in older women.</li>
	<li>Having a fever, which may mean the infection has reached your kidneys</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes UTIs?",
      content: `

    <div class="answer"><p>UTIs are caused by bacteria or, rarely, yeast getting into your urinary tract. Once there, they multiply and cause inflammation (swelling) and pain. You can help prevent UTIs by wiping from front to back after using the bathroom. <a href="#10">Learn other ways to help prevent UTIs.</a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is a UTI diagnosed?",
      content: `

    <div class="answer"><p>To find out whether you have a UTI, your doctor or nurse will test a clean sample of your urine. This means you will first wipe your genital area with a special wipe. Then you will collect your urine in midstream in a cup. Your doctor or nurse may then test your urine for bacteria to see whether you have a UTI, which can take a few days.</p>

<p>If you have had a UTI before, your doctor may order more tests to rule out other problems. These tests may include:</p>

<ul>
	<li><strong>A cystogram.</strong> This is a special type of x-ray of your urinary tract. These x-rays can show any problems, including swelling or kidney stones.</li>
	<li><strong>A <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="SISS-tuh-SKOHP-ik">cystoscopic</a> exam.</strong> The cystoscope is a small tube the doctor puts into the urethra to see inside of the urethra and bladder for any problems.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is a UTI treated?",
      content: `

    <div class="answer"><p>UTIs are treated with antibiotics prescribed by your doctor. You may feel better in one or two days. Make sure to finish taking all of the antibiotics as prescribed, even if you feel better after a day or two.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if a UTI is not treated?",
      content: `

    <div class="answer"><p>If treated right away, a UTI is not likely to damage your urinary tract. But if your UTI is not treated, the infection can spread to the kidneys and other parts of your body. The most common symptoms of kidney infection are fever and pain in the back where the kidneys are located. Antibiotics can also treat kidney infections.</p>

<p>Sometimes the infection can get in the bloodstream. This is rare but life-threatening.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do UTIs affect pregnancy?",
      content: `

    <div class="answer"><p>Changes in hormone levels during pregnancy raise your risk for UTIs. UTIs during pregnancy are more likely to spread to the kidneys.</p>

<p>If you're pregnant and have symptoms of a UTI, see your doctor or nurse right away. Your doctor will give you an antibiotic that is safe to take during pregnancy.</p>

<p>If left untreated, UTIs could lead to kidney infections and problems during pregnancy, including:</p>

<ul>
	<li>Premature birth (birth of the baby before 39 to 40 weeks)</li>
	<li>Low birth weight (smaller than 5 1/2 pounds at birth)</li>
	<li>High blood pressure, which can lead to a <a href="/pregnancy/youre-pregnant-now-what/pregnancy-complications">more serious condition</a> called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="pre-ee-CLAMP-see-uh">preeclampsia</a><a href="#references"><sup>8</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent UTIs?",
      content: `

    <div class="answer"><p>You can take steps to help prevent a UTI. But you may follow these steps and still get a UTI.</p>

<ul>
	<li>Urinate when you need to. Don't go without urinating for longer than three or four hours. The longer urine stays in the bladder, the more time bacteria have to grow.</li>
	<li>Try to urinate before and after sex.</li>
	<li>Always wipe from front to back.</li>
	<li>Try to drink six to eight glasses of fluid per day.</li>
	<li>Clean the anus and the outer lips of your genitals each day.</li>
	<li>Do not <a href="/a-z-topics/douching">douche</a> or use feminine hygiene sprays.</li>
	<li>If you get a lot of UTIs and use creams that kill sperm (spermicides), talk to your doctor or nurse about using a different form of <a href="/a-z-topics/birth-control-methods">birth control</a> instead.</li>
	<li>Wear underpants with a cotton crotch. Avoid tight-fitting pants, which trap moisture, and change out of wet bathing suits and workout clothes quickly.</li>
	<li>Take showers, or limit baths to 30 minutes or less.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can cranberry juice help prevent UTIs?",
      content: `

    <div class="answer"><p>Maybe. Studies on whether cranberry juice or products prevent or treat UTIs show mixed results.</p>

<p>Cranberries may help prevent bacteria from attaching to cells in the wall of the urinary tract and causing infection. If you get recurrent UTIs, talk to your doctor or nurse about taking cranberry products to prevent UTIs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I keep getting UTIs?",
      content: `

    <div class="answer"><p>Women who get two UTIs in six months or three in a year have recurrent UTIs.<a href="#references"><sup>3</sup></a> Your doctor or nurse might do tests to find out why. If the test results are normal, you may need to take a small dose of antibiotics every day to prevent infection. Your doctor may also give you a supply of antibiotics to take after sex or at the first sign of infection.<a href="#references"><sup>9</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about UTIs?",
      content: `

    <div class="answer"><p>For more information about UTIs, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults" title="Bladder Infection (Urinary Tract Infection—UTI) in Adults"><strong>National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK), NIH, HHS</strong></a><br>
	Phone Number: 1-800-891-5390</li>
	<li><a href="https://www.acog.org/" title="The American Congress of Obstetricians and Gynecologists - ACOG" class="external-link external-popup" target="_blank"><strong>American College of Obstetricians and Gynecologists (ACOG)</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-673-8444</li>
	<li><a href="https://www.augs.org" title="AUGS : AUGS Home Page" class="external-link external-popup" target="_blank"><strong>American Urogynecologic Society</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 301-273-0570</li>
	<li><a href="https://www.kidney.org/atoz/content/uti" title="Urinary Tract Infections - The National Kidney Foundation" class="external-link external-popup" target="_blank"><strong>National Kidney Foundation</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-622-9010</li>
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
	<li>Bergamin, P.A., Kiosoglous, A.J. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/28791233">Non-surgical management of recurrent urinary tract infections in women.</a> <em>Translational Andrology and Urology; </em>6(Suppl 2): S142-S152.</li>
	<li>Foxman, B. (2002). <a href="https://www.ncbi.nlm.nih.gov/pubmed/12113866">Epidemiology of urinary tract infections: Incidence, morbidity, and economic costs.</a> <em>American Journal of Medicine; </em>113(Suppl. 1A): 5S-13S.</li>
	<li>Arnold, J.J., Hehn, L.E., Klein, D.A. (2016). <a href="http://www.aafp.org/afp/2016/0401/p560.html" class="external-link external-popup" target="_blank">Common questions about recurrent urinary tract infections in women. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>American Family Physician; </em>93(7): 560-569.</li>
	<li>Najar, M.S., Saldanha, C.L., Banday, K.A. (2009). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2875701/">Approach to urinary tract infections.</a> <em>Indian Journal of Nephrology;</em> 19(4): 129-139.</li>
	<li>Minardi, D., d'Anzeo, G., Cantoro, D., Conti, A., Muzzonigro, G. (2011). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3108201/">Urinary tract infections in women: etiology and treatment options.</a> <em>International Journal of General Medicine; </em>4: 333-343.</li>
	<li>National Institute of Diabetes and Digestive and Kidney Diseases. (2017). <a href="https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults/symptoms-causes">What are the symptoms of a bladder infection?</a></li>
	<li>Pallett, A., Hand, K. (2010). <a href="http://jac.oxfordjournals.org/content/65/suppl_3/iii25.long#sec-2" class="external-link external-popup" target="_blank">Complicated urinary tract infections: practical solutions for the treatment of multiresistant Gram-negative bacteria. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Journal of Antimicrobial Chemotherapy; </em>65(Suppl. 3): iii25-iii33.</li>
	<li>Karmon, A., Sheiner, E. (2008). <a href="https://www.ncbi.nlm.nih.gov/pubmed/18386029">The relationship between urinary tract infection during pregnancy and preeclampsia: causal, confounded or spurious?</a> <em>Archives of Gynecology and Obstetrics; </em>277(6): 479-481.</li>
	<li>Dason, S., Dason, J.T., Kapoor, A. (2011). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3202002/">Guidelines for the diagnosis and management of recurrent urinary tract infection in women.</a> <em>Canadian Urological Association Journal;</em> 5(5): 316-322.</li>
</ol>
</div>
`,
    },
  ];
  return [condName, condImURL, condDescription, condHeader, condQA];
}

export function utiScreening({ navigation, ...rest }) {
  const screeningTree = [
    {
      title: "Urinary Tract Infection Question1",
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
      title: "Urinary Tract Infection Question2",
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
