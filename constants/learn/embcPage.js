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

export function embcPage({ navigation, ...rest }) {
  const condName = "Emergency birth control/emergency contraception";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Emergencycontraception.jpg?VersionId=tof6FnSHWmpXoBg8w6pZ8QKEg4KGYwZ6";
  const condDescription =
    "Emergency contraception is a method of birth control you can use if you had sex without using birth control or if your birth control method did not work correctly. You must use emergency contraception as soon as possible after unprotected sex. \n Emergency contraception pills are different from the abortion pill. If you are already pregnant, emergency contraception pills do not stop or harm your pregnancy. \n Emergency contraception has also been called the 'morning-after pill,' but you do not need to wait until the morning after unprotected sex to take it. \n Emergency contraception is not meant to be used for regular birth control. Talk to your doctor or nurse about regular birth control to help prevent pregnancy. Nearly half of all pregnancies in the United States are unplanned.1";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Emergencycontraception.jpg?VersionId=tof6FnSHWmpXoBg8w6pZ8QKEg4KGYwZ6"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Emergency contraception</h1>  -->
            <p><strong>Emergency contraception can help keep you from getting pregnant</strong> if you had sex without using birth control or if your birth control method did not work. There are two types of FDA-approved emergency contraceptive pills (ECPs). Some ECPs can work when taken within five days of unprotected sex or when your birth control does not work correctly. Some ECPs are available without a prescription.</p>

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
      title: "What is emergency contraception?",
      content: `

    <div class="answer"><p>Emergency contraception is a method of birth control you can use if you had sex without using <a href="/publications/our-publications/fact-sheet/birth-control-methods.html" title="Birth control methods fact sheet">birth control</a> or if your birth control method did not work correctly. You must use emergency contraception as soon as possible after unprotected sex.</p>

<p>Emergency contraception pills are different from the abortion pill. If you are already pregnant, emergency contraception pills do not stop or harm your pregnancy.</p>

<p>Emergency contraception has also been called the "morning-after pill," but you do not need to wait until the morning after unprotected sex to take it.</p>

<p>Emergency contraception is not meant to be used for regular birth control. Talk to your doctor or nurse about regular birth control to help prevent pregnancy. Nearly half of all pregnancies in the United States are unplanned.<a href="#references"><sup>1</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What types of emergency contraception pills are available? ",
      content: `

    <div class="answer"><p>In the United States, there are two types of FDA-approved ECPs available for emergency contraception:<a href="#references"><sup>2,3</sup></a></p>

<ul>
	<li><strong>ella® </strong>(ulipristal acetate)</li>
	<li><strong>Plan B One-Step®</strong> (LNG-only) — Plan B One-Step® has several generic versions. Some common generic versions include AfterPill™, My Way®, Next Choice One Dose™, and Take Action™.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do emergency contraception pills prevent pregnancy?",
      content: `

    <div class="answer"><p>Research shows that emergency contraception pills work mostly by preventing or delaying ovulation (the release of an egg from the ovary). Less commonly, emergency contraception may prevent fertilization of the egg by the sperm if ovulation has already happened.<a href="#references"><sup>4,5</sup></a> If a fertilized egg has already implanted in your uterus (you are pregnant), emergency contraception pills will not stop or harm your pregnancy.<a href="#references"><sup>6</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "When should I think about using emergency contraception?",
      content: `

    <div class="answer"><p>Consider using emergency contraception if you had sex and:</p>

<ul>
	<li>You didn't use birth control</li>
	<li>You think your birth control didn't work (see the list in the next section)</li>
</ul>

<p>Consider asking your doctor for a prescription for emergency contraception pills, or having some type of emergency contraception pill already at home or with you in case you need it.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What does it mean for birth control to 'fail' or not work correctly? ",
      content: `

    <div class="answer"><p>Depending on the method of birth control you use, not working correctly means different things.</p>

<table border="1" summary="Explanations of birth control method failures">
	<tbody>
		<tr>
			<th>
			<p><strong>Birth control method</strong></p>
			</th>
			<th>
			<p><strong>Failure rate<br>
			(number of pregnancies per 100 women in a year)</strong><a href="#references"><sup>7</sup></a></p>
			</th>
			<th>
			<p><strong>Examples of what can go wrong with your birth control</strong></p>
			</th>
		</tr>
		<tr>
			<td>
			<p>Natural planning method</p>
			</td>
			<td>
			<p>24 out of 100 women get pregnant</p>
			</td>
			<td>
			<p>You have sex on the fertile days of your cycle and do not use another form of birth control (such as a condom or spermicide)</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Cervical cap</p>
			</td>
			<td>
			<p>23 out of 100 women get pregnant<br>
			(women who have given birth)</p>

			<p>13 out of 100 women get pregnant<br>
			(women who have never given birth)<a href="#references"><sup>8</sup></a></p>
			</td>
			<td>
			<p>Slips off the cervix or has a tear/hole in the cap; is not used with spermicide</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Male condom</p>
			</td>
			<td>
			<p>18 out of 100 women get pregnant</p>
			</td>
			<td>
			<p>Breaks or comes off at any time during sex</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Diaphragm with spermicide</p>
			</td>
			<td>
			<p>12 out of 100 women get pregnant</p>
			</td>
			<td>
			<p>Slips out of place or has a tear or hole in it; is not used with a spermicide</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Hormonal birth control pills</p>
			</td>
			<td>
			<p>9 out of 100 women get pregnant</p>
			</td>
			<td>
			<p>You do not take a pill every day, as directed</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Vaginal ring</p>
			</td>
			<td>
			<p>9 out of 100 women get pregnant</p>
			</td>
			<td>
			<p>You put it in too late or take it out too soon during the month</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Birth control patch</p>
			</td>
			<td>
			<p>9 out of 100 women get pregnant</p>
			</td>
			<td>
			<p>You put it on too late or take it off too soon during the month, or it does not stick to your skin correctly</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Hormonal birth control shot</p>
			</td>
			<td>
			<p>6 out of 100 women get pregnant</p>
			</td>
			<td>
			<p>You are more than two weeks late getting the shot</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Intrauterine device (IUD)</p>
			</td>
			<td>
			<p>Less than 1 out of 100 women get pregnant*</p>
			</td>
			<td>
			<p>Comes out before you are ready for it to be removed</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Implantable rod</p>
			</td>
			<td>
			<p>Less than 1 out of 100 women get pregnant</p>
			</td>
			<td>
			<p>The rod is not removed or replaced in time (up to three years after it is placed in your arm)</p>
			</td>
		</tr>
	</tbody>
</table>

<p>*This number may be higher, depending on when the IUD came out and how long before it was noticed.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I get emergency contraception?",
      content: `

    <div class="answer"><p>It depends on the type of emergency contraception you need.</p>

<ul>
	<li><strong>Plan B One-Step®</strong> and similar generic versions are available in stores without a prescription to anyone, of any age. If you do not see it on the shelf, ask the pharmacist for help.</li>
	<li><strong>Levonorgestrel tablets </strong>(two-pill generic Next Choice® and LNG tablets 0.75 mg) are available to people aged 17 and older without a prescription. These brands are sold from behind the pharmacy counter.</li>
	<li><strong>ella®</strong> is available only by prescription from your doctor, nurse, or family planning clinic.</li>
</ul>

<p>To find a low-cost family planning clinic for emergency contraception, enter your ZIP code into the clinic finder on this page.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How quickly should I use emergency contraception after unprotected sex?",
      content: `

    <div class="answer"><p>Emergency contraception works best when you use it <strong>as soon as possible</strong> after unprotected sex. If you are unable to take it right away, emergency contraception can still work to prevent pregnancy if taken up to three to five days after unprotected sex. How long after depends on which type of emergency contraception you use.</p>

<ul>
	<li>Take<strong> Plan B One-Step®</strong> or a generic version as soon as possible <strong>within three days</strong> (or 72 hours) after unprotected sex.</li>
	<li>For the two-dose version (Next Choice<strong>®</strong>, LNG tablets 0.75 mg), take one pill as soon as possible <strong>within 3 days </strong>and the second pill <strong>12 hours later</strong>.</li>
	<li>Take<strong> ella® (ulipristal acetate) </strong>as soon as possible <strong>within five days</strong> (or 120 hours) after unprotected sex.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does emergency contraception have side effects?",
      content: `

    <div class="answer"><p>Yes, but the side effects are rarely serious. Side effects differ for each woman and may include:</p>

<ul>
	<li>Headache</li>
	<li>Abdominal pain</li>
	<li>Tiredness (fatigue)</li>
	<li>Dizziness</li>
	<li>Nausea</li>
	<li>Breast pain</li>
</ul>

<p>The side effects are usually mild and do not last long. Your next period may come early or late, and you may have spotting (light bleeding that happens between menstrual periods).</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Does body weight affect how well emergency contraception works for women?",
      content: `

    <div class="answer"><p>Maybe. Research from the Centers for Disease Control and Prevention shows that ECPs may not prevent pregnancy as often for obese women (with a body mass index, or BMI, of 30 or greater) as for women who are not obese.<a href="#references"><sup>9</sup></a></p>

<p><a href="http://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/english_bmi_calculator/bmi_calculator.html" title="">Find out your BMI.</a> If your BMI is greater than 30, talk to your doctor or nurse about your risk and your options for emergency contraception.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get free or low-cost emergency contraception?",
      content: `

    <div class="answer"><p>Under the Affordable Care Act (the health care law), most insurance plans cover FDA-approved prescriptions for <a href="https://www.healthcare.gov/what-are-my-birth-control-benefits/" title="Birth control benefits and reproductive health care options in the Health Insurance Marketplace">emergency contraception</a> and birth control at no cost to you. This includes Plan B One-Step® and ella®. Since you can buy Plan B One-Step® or the generic version in a store, without a prescription, call your insurance company to find out if your plan covers over-the-counter emergency contraception. You may need to get a prescription from your doctor if you want your insurance plan to pay for it.</p>

<ul>
	<li>If you have insurance, check with your insurance provider to find out what's included in your plan.</li>
	<li>If you have Medicaid, your insurance may cover emergency contraception. Coverage varies between states, so <a href="https://www.medicaid.gov/about-us/contact-us/contact-state-page.html" title="Contact Your State With Questions | Medicaid.gov">check with your state's Medicaid program</a> to learn about your benefits.</li>
	<li>If you don't have insurance, <a href="http://www.hhs.gov/opa/" title="Office of Population Affairs">find a family planning clinic in your area</a>. They may provide emergency contraception for free or at low cost.</li>
	<li>To see if you are eligible for low-cost or no-cost health insurance, visit <a href="http://www.healthcare.gov" title="Health Insurance Marketplace">HealthCare.gov</a>.</li>
</ul>

<p>For information about other services covered by the Affordable Care Act, visit <a href="http://www.healthcare.gov" title="Health Insurance Marketplace">HealthCare.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I get emergency contraception pills before I need them? ",
      content: `

    <div class="answer"><p>Yes. Your doctor can give you a prescription to fill so you can have emergency contraception at home to use when you need it. Or, you can buy some types of emergency contraception pills from a store at any time.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Can I use emergency contraception as my regular form of birth control? ",
      content: `

    <div class="answer"><p>No. Do not use Plan B One-Step<strong>®</strong> (or a generic version) or ella<strong>® </strong>as your regular birth control. Most other types of FDA-approved birth control, when used correctly, are much better at preventing pregnancy than emergency contraception pills and usually cost less. Also, while emergency contraception pills are safe for emergency use, they have not been tested as regular birth control and are not approved by the FDA for this purpose.</p>

<p>Women who are sexually active will need to use birth control to prevent pregnancy. What type of regular birth control you can use right away depends on the type of emergency contraception you take.</p>

<ul>
	<li>If you take <strong>ella®</strong>, do not use hormonal birth control (the pill, patch, vaginal ring, or intrauterine device) for at least five days after you take ella. Using them together may cause <strong>ella® </strong>not to work. Instead, use a condom, diaphragm, sponge, or cervical cap until you get your next period.<a href="#references"><sup>10</sup></a></li>
	<li>If you take <strong>Plan B One-Step®</strong> (or a generic version), you can start right away or continue using a regular form of birth control.</li>
</ul>

<p>Read more about different types of birth control in our <a href="/publications/our-publications/fact-sheet/birth-control-methods.html" title="Birth control methods fact sheet">birth control methods</a> fact sheet.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will emergency contraception pills affect my next period? ",
      content: `

    <div class="answer"><p>Maybe. After you take an emergency contraception pill, your next period may come sooner or later than normal. Most women will get their period within a week of the expected date. Your period also may be heavier, lighter, spotty, and more or less painful than is normal for you.</p>

<p>If you do not get your period more than one week after expected or if you think you might be pregnant after taking emergency contraception pills, take a <a href="/publications/our-publications/fact-sheet/pregnancy-test.html" title="Pregnancy test">pregnancy test</a> to find out for sure.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Will emergency contraception protect me from sexually transmitted infections (STIs)?",
      content: `

    <div class="answer"><p>No. Emergency contraception does not protect you from <a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs)">STIs</a>. To lower your risk of getting an STI, always use condoms when you have vaginal, oral, or anal sex.</p>

<p>See a doctor right away if you think you may have been exposed to an STI. &nbsp;Also, you can get medicine to help prevent <a href="/hiv-and-aids" title="HIV and AIDS">HIV</a>, the virus that causes AIDS.</p>

<p>If you were sexually assaulted, go to the nearest hospital emergency room as soon as possible. The <a href="http://www.rainn.org/get-help/national-sexual-assault-hotline" title="About the National Sexual Assault Telephone Hotline" class="external-link external-popup" target="_blank">National Sexual Assault Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> at 800-656-HOPE (4673) can help you find a hospital able to collect evidence of sexual assault. You can get medicine to prevent HIV and other STIs and get emergency contraception to prevent pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about emergency contraception? ",
      content: `

    <div class="answer"><p>For more information about emergency contraception, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.fda.gov/ForConsumers/ByAudience/ForWomen/FreePublications/ucm313215.htm" title="Birth Control: Medicines To Help You">Food and Drug Administration (FDA), HHS</a></strong><br>
	<strong><strong>Phone Number</strong>:</strong> 888-463-6332</li>
	<li><strong><strong><a href="http://www.hhs.gov/opa/" title="Office of Population Affairs">Office of Population Affairs, HHS</a></strong></strong><br>
	<strong><strong>Phone Number</strong>:</strong> 240-453-2888</li>
	<li><strong><a href="http://www.acog.org/" title="American Congress of Obstetricians and Gynecologists" class="external-link external-popup" target="_blank">American College of Obstetricians and Gynecologists <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong><strong>Phone Number</strong>:</strong> 800-762-2264 x 349 (for publications requests only)</li>
	<li><strong><a href="http://www.plannedparenthood.org/" title="Planned Parenthood" class="external-link external-popup" target="_blank">Planned Parenthood Federation of America <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong><strong>Phone Number</strong>: </strong>800-230-7526</li>
	<li><strong><a href="http://ec.princeton.edu/" title="Emergency Contraception" class="external-link external-popup" target="_blank">The Emergency Contraception Website, Princeton University and the Association of Reproductive Health Professionals <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong></li>
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
	<li>Finer, L.B., Zolna, M.R. (2016). <a href="http://www.ncbi.nlm.nih.gov/pubmed/22018121" title="Unintended pregnancy in the United States: incidence and disparities, 2006">Declines in unintended pregnancy in the United States, 2008-2011.</a><em>The New England Journal of Medicine; 374</em>(9):843–52.</li>
	<li>Food and Drug Administration. (2013). <a href="http://www.fda.gov/NewsEvents/Newsroom/PressAnnouncements/ucm222428.htm" title="FDA approves ella™ tablets for prescription emergency contraception">FDA approves ella®™ tablets for prescription emergency contraception.</a></li>
	<li>Food and Drug Administration. (2013). <a href="https://wayback.archive-it.org/7993/20170112033121/http:/www.fda.gov/NewsEvents/Newsroom/PressAnnouncements/ucm358082.htm" title="FDA approves Plan B One-Step emergency contraceptive for use without a prescription for all women of child-bearing potential">FDA approves Plan B One-Step® emergency contraceptive for use without a prescription for all women of child-bearing potential.</a></li>
	<li>Gemzell-Danielsson K., Berger, C., Lalitkumar, P.G. (2014). <a href="http://www.ncbi.nlm.nih.gov/pubmed/25117156" title="Mechanisms of action of oral emergency contraception">Mechanisms of action of oral emergency contraception</a>. <em>Gynecological Endocrinology</em> 30 (10): 685-687.</li>
	<li>Gemzell-Danielsson K., Berger C., Lalitkumar, P. G. (2013). <a href="http://www.ncbi.nlm.nih.gov/pubmed/23114735" title="Emergency contraception -- mechanisms of action">Emergency contraception — mechanisms of action</a>.<em>Contraception</em>; 87(3): 300–308.</li>
	<li>Food and Drug Administration. (2015). <a href="http://www.fda.gov/Drugs/DrugSafety/PostmarketDrugSafetyInformationforPatientsandProviders/ucm109795.htm" title="FDA's Decision Regarding Plan B: Questions and Answers">FDA’s decision regarding Plan B: Question and answers.</a></li>
	<li>Centers for Disease Control and Prevention. (2014). <a href="http://www.cdc.gov/reproductivehealth/UnintendedPregnancy/PDF/Family-Planning-Methods-2014.pdf" title="Effectiveness of Family Planning Methods">Effectiveness of Family Planning Methods.</a></li>
	<li>Food and Drug Administration. (2016). <a href="http://www.fda.gov/ForConsumers/ByAudience/ForWomen/FreePublications/ucm313215.htm#BarrierMethods" title="Birth Control: Medicines To Help You">Birth Control: Medicines to Help You.</a></li>
	<li>Curtis, K.M., Tepper, N.K., Jatlaoui, T.C., et al. (2016). U.S. Medical Eligibility Criteria for Contraceptive Use, 2016. MMWR Recomm Rep; 65(RR-3):1–104. <a href="http://www.cdc.gov/mmwr/volumes/65/rr/rr6503a1_appendix.htm" title="U.S. Medical Eligibility Criteria for Contraceptive Use, 2016">Appendix A.</a></li>
	<li>Food and Drug Administration. (2015). <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2015/022474s007lbl.pdf" title="Ella (ulipristal acetate)">ella®</a> (PDF, 398 KB).</li>
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
