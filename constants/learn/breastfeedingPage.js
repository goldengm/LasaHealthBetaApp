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

export function breastfeedingPage({ navigation, ...rest }) {
  const condName = "Breastfeeding";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/styles/large/public/bucket-images/Breastfeedingathomeatworkandinpublic.jpg?VersionId=5pn7eiIudoegjITmlda5giKfvQ43MZI_&itok=lvif1vbS";
  const condDescription =
    "Research shows that breastfeeding provides many health benefits for you and your baby. But it also can be difficult to manage breastfeeding in today's hurried world. Learning all you can before you give birth can help. The decision to breastfeed is a personal one. As a new mom, you deserve support no matter how you decide to feed your baby.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Makingthedecisiontobreastfeed.jpg?VersionId=z5_MY8k.wNO5A1moaBsIBdghx6gtJyU3"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Making the decision to breastfeed</h1>  -->
            <p><strong>When you breastfeed, you give your baby a healthy start that lasts a lifetime. </strong>Breastmilk is the perfect food for your baby. Breastfeeding saves lives, money, and time.</p>

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
      title: "What health benefits does breastfeeding give my baby?",
      content: `

    <div class="answer expanded"><p>The cells, hormones, and antibodies in breastmilk help protect babies from illness. This protection is unique and changes every day to meet your baby’s growing needs.</p>

<p>Research shows that breastfed babies have lower risks of:<a href="#references"><sup>1,2</sup></a></p>

<ul>
	<li>Asthma</li>
	<li>Leukemia (during childhood)</li>
	<li>Obesity (during childhood)</li>
	<li>Ear infections</li>
	<li>Eczema (atopic dermatitis)</li>
	<li>Diarrhea and vomiting</li>
	<li>Lower respiratory infections</li>
	<li>Necrotizing (NEK-roh-TEYE-zing) enterocolitis (en-TUR-oh-coh-LYT-iss), a disease that affects the gastrointestinal tract in premature babies, or babies born before 37 weeks of pregnancy</li>
	<li>Sudden infant death syndrome (SIDS)</li>
	<li>Type 2 diabetes</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is colostrum and how does it help my baby? ",
      content: `

    <div class="answer"><p>Your breastmilk helps your baby grow healthy and strong from day one.</p>

<ul>
	<li>
	<p><strong>Your first milk is liquid gold.</strong> Called liquid gold for its deep yellow color, colostrum (coh-LOSS-trum) is the thick first milk that you make during pregnancy and just after birth. This milk is very rich in <a href="/glossary#nutrient">nutrients</a> and includes <a href="/glossary#antibodies">antibodies</a> to protect your baby from infections.</p>

	<p>Colostrum also helps your newborn's digestive system to grow and function. Your baby gets only a small amount of colostrum at each feeding, because the stomach of a newborn infant is tiny and can hold only a small amount. (Read <a href="/breastfeeding/learning-breastfeed/making-breastmilk#10">How do I know if my&nbsp;baby is getting enough breastmilk?</a>&nbsp;to see just how small your newborn's tummy is!)</p>
	</li>
	<li><strong>Your milk changes as your baby grows.</strong> Colostrum changes into mature milk by the third to fifth day after birth. This mature milk has just the right amount of fat, sugar, water, and <a href="/glossary#protein">protein</a> to help your baby continue to grow. It looks thinner than colostrum, but it has the nutrients and antibodies your baby needs for healthy growth.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the health benefits of breastfeeding for mothers? ",
      content: `

    <div class="answer"><p>Breastfeeding helps a mother's health and healing following childbirth. Breastfeeding leads to a lower risk of these health problems in mothers:<a href="#references"><sup>3,4</sup></a></p>

<ul>
	<li>Type 2 <a href="/glossary#diabetes">diabetes</a></li>
	<li>Certain types of breast cancer</li>
	<li>Ovarian cancer</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does breastfeeding compare to formula feeding? ",
      content: `

    <div class="answer"><ul>
	<li><strong>Formula can be harder for your baby to digest. </strong>For most babies, especially premature babies (babies born before 37 weeks of pregnancy), breastmilk substitutes like formula are harder to digest than breastmilk. Formula is made from cow's milk, and it often takes time for babies' stomachs to adjust to digesting it.</li>
	<li><strong>Your breastmilk changes to meet your baby's needs. </strong>As your baby gets older, your breastmilk adjusts to meet your baby's changing needs. Researchers think that a baby's saliva transfers chemicals to a mother's body through breastfeeding. These chemicals help a mother's body create breastmilk that meets the baby's changing needs.<strong> </strong></li>
	<li><strong>Life can be easier for you when you breastfeed.</strong> Breastfeeding may seem like it takes a little more effort than formula feeding at first. But breastfeeding can make your life easier once you and your baby settle into a good routine. When you breastfeed, there are no bottles and nipples to sterilize. You do not have to buy, measure, and mix formula. And there are no bottles to warm in the middle of the night! When you breastfeed, you can satisfy your baby's hunger right away.</li>
	<li><strong>Not breastfeeding costs money.</strong> Formula and feeding supplies can cost well over $1,500 each year. As your baby gets older he or she will eat more formula. But breastmilk changes with the baby's needs, and babies usually need the same amount of breastmilk as they get older. Breastfed babies may also be sick less often, which can help keep your baby's health costs lower.</li>
	<li><strong>Breastfeeding keeps mother and baby close.</strong> Physical contact is important to newborns. It helps them feel more secure, warm, and comforted. Mothers also benefit from this closeness. The skin-to-skin contact boosts your oxytocin (OKS-ee-TOH-suhn) levels. Oxytocin is a <a href="/glossary#hormone">hormone</a> that helps breastmilk flow and can calm the mother.</li>
</ul>

<p style="color:#582c83;"><strong>Sometimes, formula feeding can save lives:</strong></p>

<ul>
	<li>Very rarely, babies are born unable to tolerate milk of any kind. These babies must have an infant formula that is hypoallergenic, dairy free, or lactose free. A wide selection of specialist baby formulas now on the market include soy formula, hydrolyzed formula, lactose-free formula, and hypoallergenic formula.</li>
	<li>Your baby may need formula if you have a health problem that won't allow you to breastfeed and you do not have access to donor breastmilk.</li>
</ul>

<p>Talk to your doctor before feeding your baby anything besides your breastmilk. To learn more, visit the <a href="/breastfeeding/breastfeeding-challenges/breastfeeding-baby-health-problem">Breastfeeding a baby with a health problem</a>&nbsp;section. To learn more about donor milk banks, visit the <a href="/breastfeeding/breastfeeding-challenges/breastfeeding-and-special-situations">Breastfeeding and special situations</a> section.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can breastfeeding help me lose weight?",
      content: `

    <div class="answer"><p>Besides giving your baby nourishment and helping to keep your baby from becoming sick,&nbsp;breastfeeding may help you lose weight. Many women who breastfed their babies said it helped them get back to their pre-pregnancy weight more quickly, but experts are still looking at the effects of breastfeeding on weight loss. Learn more about <a href="https://www.choosemyplate.gov/moms-breastfeeding-weight-loss">weight loss while breastfeeding</a> from ChooseMyPlate.gov.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does breastfeeding benefit society?",
      content: `

    <div class="answer"><p>Society benefits overall when mothers breastfeed.</p>

<ul>
	<li><strong>Breastfeeding saves lives.</strong> Research shows that if 90% of families breastfed exclusively for six months, nearly 1,000 deaths among infants could be prevented each year.<a href="#references"><sup>5</sup></a></li>
	<li><strong>Breastfeeding saves money. </strong>Medical costs may be lower for fully breastfed infants than never-breastfed infants. Breastfed infants usually need fewer sick care visits, prescriptions, and hospitalizations.</li>
	<li><strong>Breastfeeding also helps make a more productive workforce.</strong> Mothers who breastfeed may miss less work to care for sick infants than mothers who feed their infants formula. Employer medical costs may also be lower.<a href="#references"><sup>6</sup></a></li>
	<li><strong>Breastfeeding is better for the environment.</strong> Formula cans and bottle supplies create more trash and plastic waste. Your milk is a renewable resource that comes packaged and warmed.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does breastfeeding help in an emergency?",
      content: `

    <div class="answer"><p>During an emergency, such as a natural disaster, breastfeeding can save your baby's life:</p>

<ul>
	<li>Breastfeeding protects your baby from the risks of an unclean water supply.</li>
	<li>Breastfeeding can help protect your baby against respiratory illnesses and <a href="/glossary#diarrhea">diarrhea</a>.</li>
	<li>Your milk is always at the right temperature for your baby. It helps to keep your baby's body temperature from dropping too low.</li>
	<li>Your milk is always available without needing other supplies.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about breastfeeding?",
      content: `

    <div class="answer"><p>For more information about the benefits of breastfeeding, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="https://www.llli.org/breastfeeding-info/benefits/" class="external-link external-popup" target="_blank">Importance of Breastfeeding <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the La Leche League International</li>
	<li><a href="http://www.cdc.gov/breastfeeding/">Breastfeeding</a> — Information from the Centers for Disease Control and Prevention</li>
	<li><a href="http://www.nlm.nih.gov/medlineplus/breastfeeding.html">Breastfeeding</a> — Information from the National&nbsp;Library of Medicine</li>
	<li><a href="http://www.acog.org/Patients/FAQs/Breastfeeding-Your-Baby" class="external-link external-popup" target="_blank">Breastfeeding Your Baby <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Resource from the American College of Obstetricians and Gynecologists.</li>
	<li><a href="https://www.llli.org/breastfeeding-info/" class="external-link external-popup" target="_blank">Breastfeeding Info A to Z <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the La Leche League International</li>
	<li><a href="https://www.llli.org/breastfeeding-info/toddlers/" class="external-link external-popup" target="_blank">Breastfeeding Your Toddler <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the La Leche League International</li>
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
	<li>American Academy of Pediatrics. (2012). <a href="http://pediatrics.aappublications.org/content/129/3/e827.full.pdf+html" class="external-link external-popup" target="_blank">Breastfeeding and the use of human milk. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Pediatrics; 129(3)</em>: e827-e841.</li>
	<li>Harder, T., Bergmann, R., Kallischnigg, G., Plagemann, A. (2005). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16076830">Duration of breastfeeding and risk of overweight: a meta-analysis.</a> <em>American Journal of Epidemiology; </em>162(5): 397-403.</li>
	<li>American College of Obstetricians and Gynecologists. (2013). <a href="http://www.acog.org/Resources-And-Publications/Committee-Opinions/Committee-on-Health-Care-for-Underserved-Women/Breastfeeding-in-Underserved-Women-Increasing-Initiation-and-Continuation-of-Breastfeeding" class="external-link external-popup" target="_blank">Committee Opinion No. 570: Breastfeeding in Underserved Women: Increasing Initiation and Continuation of Breastfeeding. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Schwarz, E.B., Ray, R.M., Stuebe, A.M., Allison, M.A., Ness, R.B., Freiberg, M.S., et al. (2009). <a href="http://www.ncbi.nlm.nih.gov/pubmed/19384111">Duration of lactation and risk factors for maternal cardiovascular disease.</a> <em>Obstetrics &amp; Gynecology; </em>113(5): 974-982.</li>
	<li>Bartick, M., Reinhold, A. (2010). <a href="https://www.ncbi.nlm.nih.gov/pubmed/20368314">The burden of suboptimal breastfeeding in the United States: a pediatric cost analysis.</a> <em>Pediatrics;</em> 125(5): e1048-e1056.</li>
	<li>Office of the Surgeon General. (2011). <a href="http://www.ncbi.nlm.nih.gov/books/NBK52687/">The Surgeon General’s Call to Action to Support Breastfeeding</a>.</li>
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
