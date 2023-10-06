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

export function birthControlPage({ navigation, ...rest }) {
  const condName = "Birth Control Methods";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Birthcontrolmethods.jpg?VersionId=rqd3kEgjbW7TtdHDLPkBbXW3c9Yj76kC";
  const condDescription =
    "Birth control (contraception) is any method, medicine, or device used to prevent pregnancy. Women can choose from many different types of birth control. Some work better than others at preventing pregnancy. The type of birth control you use depends on your health, your desire to have children now or in the future, and your need to prevent sexually transmitted infections. Your doctor can help you decide which type is best for you right now.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Birthcontrolmethods.jpg?VersionId=rqd3kEgjbW7TtdHDLPkBbXW3c9Yj76kC"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Birth control methods</h1>  -->
            <p><strong>Birth control (contraception) is any method, medicine, or device used to prevent pregnancy.</strong> Women can choose from many different types of birth control. Some work better than others at preventing pregnancy.&nbsp;The type of birth control you use depends on your health, your desire to have children now or in the future, and your need to prevent <a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html" title="Sexually transmitted infections (STIs)">sexually transmitted infections</a>. Your doctor can help you decide which type is best for you right now.</p>

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
      title: "What is the best method of birth control? ",
      content: `

    <div class="answer"><p>There is no "best" method of birth control for every woman. The birth control method that is right for you and your partner depends on many things, and may change over time.</p>

<p>Before choosing a birth control method, talk to your doctor or nurse about:</p>

<ul>
	<li>Whether you want to get pregnant soon, in a few years, or never</li>
	<li>How well each method works to prevent pregnancy</li>
	<li>Possible side effects</li>
	<li>How often you have sex</li>
	<li>The number of sex partners you have</li>
	<li>Your overall health</li>
	<li>How comfortable you are with using the method (For example, can you remember to take a pill every day? Will you have to ask your partner to put on a condom each time?)</li>
</ul>

<p>Learn about types of <a href="#3">birth control</a>&nbsp;that you or your partner can use to prevent pregnancy.</p>

<p>Keep in mind that even the most effective birth control methods can fail. But your chances of getting pregnant are lower if you use a more effective method.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of birth control?",
      content: `

    <div class="answer"><p>Women can choose from many different types of birth control methods. These include, in order of most effective to least effective at preventing pregnancy:</p>

<ul>
	<li><strong>Female and male sterilization </strong>(female tubal ligation or occlusion, male vasectomy) — Birth control that prevents pregnancy for the rest of your life through surgery or a medical procedure.</li>
	<li><strong><em>Long-acting</em></strong><strong> reversible contraceptives or "LARC" methods </strong>(intrauterine devices, hormonal implants) — Birth control your doctor inserts one time and you do not have to remember to use birth control every day or month. LARCs last for 3 to 10 years, depending on the method.</li>
	<li><strong><em>Short-acting</em></strong><strong> hormonal methods</strong> (pill, mini pills, patch, shot, vaginal ring) — Birth control your doctor prescribes that you remember to take every day or month. The shot requires you to get a shot from your doctor every 3 months.</li>
	<li><strong>Barrier methods</strong> (condoms, diaphragms, sponge, cervical cap) — Birth control you use each time you have sex.</li>
	<li><strong>Natural rhythm methods</strong> — Not using a type of birth control but instead avoiding sex and/or using birth control only on the days when you are most fertile (most likely to get pregnant). An <a href="/pregnancy/before-you-get-pregnant/trying-to-conceive.html" title="Trying to conceive">ovulation home test kit or a fertility monitor</a> can help you find your most fertile days.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I compare the different types of birth control?",
      content: `

    <div class="answer"><p><strong>Types of birth control</strong></p>

<table border="1" summary="Types of birth control">
	<tbody>
		<tr>
			<th>
			<p><strong>Method </strong></p>
			</th>
			<th>
			<p><strong>Number of pregnancies per 100 women within their first year of typical use</strong><a href="#references"><sup>1</sup></a></p>
			</th>
			<th>
			<p><strong>Side effects and risks*</strong></p>

			<p>*These are not all of the possible side effects and risks. Talk to your doctor or nurse for more information.</p>
			</th>
			<th>
			<p><strong>How often you have to take or use</strong></p>
			</th>
		</tr>
		<tr>
			<td>
			<p><strong>Abstinence</strong> (no sexual contact)</p>
			</td>
			<td>
			<p>Unknown</p>

			<p>(0 for perfect use)</p>
			</td>
			<td>
			<p>No medical side effects</p>
			</td>
			<td>
			<p>No action required, but it does take willpower. You may want to have a back-up birth control method, such as condoms.</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Permanent sterilization surgery for women</strong> (tubal ligation, "getting your tubes tied")</p>
			</td>
			<td>
			<p>Less than 1</p>
			</td>
			<td>
			<ul>
				<li>Possible pain during recovery (up to 2 weeks)</li>
				<li>Bleeding or other complications from surgery</li>
				<li>Less common risk includes <a href="/glossary#ectopic" title="glossary index">ectopic</a> (tubal) pregnancy</li>
			</ul>
			</td>
			<td>
			<p>No action required after surgery</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Permanent sterilization implant for women</strong> (<a href="http://www.fda.gov/MedicalDevices/ProductsandMedicalProcedures/ImplantsandProsthetics/EssurePermanentBirthControl/default.htm" title="Essure">Essure®</a>)</p>

			<p>The Essure® birth control device will no longer be sold or distributed in the United States after December 31, 2018.</p>
			</td>
			<td>
			<p>Less than 1</p>
			</td>
			<td>
			<ul>
				<li>Pain during the insertion of Essure; some pain during recovery</li>
				<li>Cramping, vaginal bleeding, back pain during recovery</li>
				<li>Implant may move out of place</li>
				<li>Less common but serious risk includes <a href="/glossary#ectopic" title="glossary index">ectopic</a> (tubal) pregnancy</li>
			</ul>
			</td>
			<td>
			<p>No action required after surgery</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Permanent sterilization surgery for men</strong> (vasectomy)</p>
			</td>
			<td>
			<p>Less than 1</p>
			</td>
			<td>
			<ul>
				<li>Pain during recovery</li>
				<li>Complications from surgery</li>
			</ul>
			</td>
			<td>
			<p>No action required after surgery</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Implantable rod</strong> (Implanon®, Nexplanon®)</p>
			</td>
			<td>
			<p>Less than 1</p>
			</td>
			<td>
			<ul>
				<li>Headache</li>
				<li>Irregular periods</li>
				<li>Weight gain</li>
				<li>Sore breasts</li>
				<li>Less common risk includes difficulty in removing the implant</li>
			</ul>
			</td>
			<td>
			<p>No action required for up to 3 years before removing or replacing</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Copper intrauterine device (IUD)</strong> (ParaGard®)</p>
			</td>
			<td>
			<p>Less than 1</p>
			</td>
			<td>
			<ul>
				<li>Cramps for a few days after insertion</li>
				<li>Missed periods, bleeding between periods, heavier periods</li>
				<li>Less common but serious risks include <a href="/publications/our-publications/fact-sheet/pelvic-inflammatory-disease.html" title="Pelvic inflammatory disease">pelvic inflammatory disease</a> and the IUD being expelled from the uterus or going through the wall of the uterus.</li>
			</ul>
			</td>
			<td>
			<p>No action required for up to 10 years before removing or replacing</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Hormonal intrauterine devices (IUDs)</strong> (Liletta, Mirena®, and Skyla®)</p>
			</td>
			<td>
			<p>Less than 1</p>
			</td>
			<td>
			<ul>
				<li>Irregular periods, lighter or missed periods</li>
				<li><a href="/publications/our-publications/fact-sheet/ovarian-cysts.html" title="Ovarian cysts">Ovarian cysts</a></li>
				<li>Less common but serious risks include <a href="/publications/our-publications/fact-sheet/pelvic-inflammatory-disease.html" title="Pelvic inflammatory disease">pelvic inflammatory disease</a> and the IUD being expelled from the uterus or going through the wall of the uterus.</li>
			</ul>
			</td>
			<td>
			<p>No action required for 3 to 5 years, depending on the brand, before removing or replacing</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Shot/injection</strong> (Depo-Provera®)</p>
			</td>
			<td>
			<p>6</p>
			</td>
			<td>
			<ul>
				<li>Bleeding between periods, missed periods</li>
				<li>Weight gain</li>
				<li>Changes in mood</li>
				<li>Sore breasts</li>
				<li>Headaches</li>
				<li>Bone loss with long-term use (bone loss may be reversible once you stop using this type of birth control)</li>
			</ul>
			</td>
			<td>
			<p>Get a new shot every 3 months</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Oral contraceptives, combination hormones</strong> ("the pill")</p>
			</td>
			<td>
			<p>9</p>
			</td>
			<td>
			<ul>
				<li>Headache</li>
				<li>Upset stomach</li>
				<li>Sore breasts</li>
				<li>Changes in your period</li>
				<li>Changes in mood</li>
				<li>Weight gain</li>
				<li>High blood pressure</li>
				<li>Less common but serious risks include blood clots, stroke and heart attack; the risk is higher in smokers and women older than 35</li>
			</ul>
			</td>
			<td>
			<p>Take at the same time every day</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Oral contraceptives, progestin-only pill</strong> ("mini-pill")</p>
			</td>
			<td>
			<p>9</p>
			</td>
			<td>
			<ul>
				<li>Spotting or bleeding between periods</li>
				<li>Weight gain</li>
				<li>Sore breasts</li>
				<li>Headache</li>
				<li>Nausea</li>
			</ul>
			</td>
			<td>
			<p>Take at the same time every day</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Skin patch</strong><br>
			(Xulane®)</p>
			</td>
			<td>
			<p>9</p>

			<p>May be less effective in women weighing 198 pounds or more<a href="#references"><sup>2</sup></a></p>
			</td>
			<td>
			<ul>
				<li>Skin irritation</li>
				<li>Upset stomach</li>
				<li>Changes in your period</li>
				<li>Changes in mood</li>
				<li>Sore breasts</li>
				<li>Headache</li>
				<li>Weight gain</li>
				<li>High blood pressure</li>
				<li>Less common but serious risks include blood clots, stroke and heart attack; the risk is higher in smokers and women older than 35</li>
			</ul>
			</td>
			<td>
			<p>Wear for 21 days, remove for 7 days, replace with a new patch</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Vaginal ring</strong> (NuvaRing®)</p>
			</td>
			<td>
			<p>9</p>
			</td>
			<td>
			<ul>
				<li>Headache</li>
				<li>Upset stomach</li>
				<li>Sore breasts</li>
				<li>Vaginal irritation and discharge</li>
				<li>Changes in your period</li>
				<li>High blood pressure</li>
				<li>Less common but serious risks include blood clots, stroke and heart attack; the risk is higher in smokers and women older than 35</li>
			</ul>
			</td>
			<td>
			<p>Wear for 21 days, remove for 7 days, replace with a new ring</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Diaphragm</strong> with spermicide (Koromex®, Ortho-Diaphragm®)</p>
			</td>
			<td>
			<p>12</p>

			<p>If you gain or lose than 15 pounds, or have a baby, have your doctor check you to make sure the diaphragm still fits.</p>
			</td>
			<td>
			<ul>
				<li>Irritation</li>
				<li>Allergic reactions</li>
				<li>Urinary tract infection (UTI)</li>
				<li>Vaginal infections</li>
				<li>Rarely, toxic shock if left in for more than 24 hours</li>
				<li>Using a spermicide often might increase your risk of getting HIV</li>
			</ul>
			</td>
			<td>
			<p>Insert each time you have sex</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Sponge </strong>with spermicide (Today Sponge®)</p>
			</td>
			<td>
			<p>12</p>

			<p>(among women who have never given birth before)</p>

			<p>or</p>

			<p>24</p>

			<p>(among women who have given birth)<a href="#references"><sup>3</sup></a></p>
			</td>
			<td>
			<ul>
				<li>Irritation</li>
				<li>Allergic reactions</li>
				<li>Rarely, toxic shock if left in for more than 24 hours</li>
				<li>Using a spermicide often might increase your risk of getting HIV</li>
			</ul>
			</td>
			<td>
			<p>Insert each time you have sex</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Cervical cap</strong> with spermicide (FemCap®)</p>
			</td>
			<td>
			<p>23<a href="#references"><sup>3</sup></a></p>
			</td>
			<td>
			<ul>
				<li>Vaginal irritation or odor</li>
				<li>Urinary tract infections (UTIs)</li>
				<li>Allergic reactions</li>
				<li>Rarely, toxic shock if left in for more than 48 hours</li>
				<li>Using a spermicide often might increase your risk of getting HIV</li>
			</ul>
			</td>
			<td>
			<p>Insert each time you have sex</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Male condom</strong></p>
			</td>
			<td>
			<p>18</p>
			</td>
			<td>
			<ul>
				<li>Irritation</li>
				<li>Condom may tear, break or slip off</li>
				<li>Allergic reactions to latex condoms</li>
			</ul>
			</td>
			<td>
			<p>Use each time you have sex</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Female condom</strong></p>
			</td>
			<td>
			<p>21</p>
			</td>
			<td>
			<ul>
				<li>Irritation</li>
				<li>Condom may tear or slip out</li>
				<li>Allergic reaction</li>
			</ul>
			</td>
			<td>
			<p>Use each time you have sex</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Withdrawal</strong> — when a man takes his penis out of a woman's vagina (or "pulls out") before he ejaculates (has an orgasm or "comes")</p>
			</td>
			<td>
			<p>22</p>
			</td>
			<td>
			<ul>
				<li>Sperm can be released before the man pulls out, putting you at risk for pregnancy</li>
			</ul>
			</td>
			<td>
			<p>Use each time you have sex</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Natural family planning (rhythm method)</p>
			</td>
			<td>
			<p>24</p>
			</td>
			<td>
			<ul>
				<li>Can be hard to know the days you are most fertile (when you need to avoid having sex or use back-up birth control)</li>
			</ul>
			</td>
			<td>
			<p>Depending on method used, takes planning each month</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Spermicide alone</p>
			</td>
			<td>
			<p>28</p>

			<p>Works best if used along with a barrier method, such as a diaphragm</p>
			</td>
			<td>
			<ul>
				<li>Irritation</li>
				<li>Allergic reactions</li>
				<li>Urinary tract infection</li>
				<li>Frequent use of a spermicide might increase your risk of getting HIV</li>
			</ul>
			</td>
			<td>
			<p>Use each time you have sex</p>
			</td>
		</tr>
	</tbody>
</table>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Which types of birth control help prevent sexually transmitted infections (STIs)? ",
      content: `

    <div class="answer"><p>Only two types can protect you from STIs, including HIV: male condoms and female condoms.<a href="#references"><sup>4</sup></a></p>

<p>While condoms are the best way to prevent STIs if you have sex, they are not the most effective type of birth control. If you have sex, the best way to prevent both STIs and pregnancy is to use what is called "dual protection." Dual protection means you use a condom to prevent STIs each time you have sex, and at the same time, you use a more effective form of birth control, such as an IUD, implant, or shot.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Which types of birth control can I get without a prescription? ",
      content: `

    <div class="answer"><p>You can buy these types of birth control over the counter at a drugstore or supermarket:</p>

<ul>
	<li>Male condoms</li>
	<li>Female condoms</li>
	<li>Sponges</li>
	<li>Spermicides</li>
	<li><a href="/publications/our-publications/fact-sheet/emergency-contraception.html" title="Emergency contraception (emergency birth control) fact sheet">Emergency contraception (EC) pills</a>. Plan B One-Step® and its generic versions are available in drugstores and some supermarkets to anyone, without a prescription. However you should not use EC as your regular birth control because it does not work as well as regular birth control. EC is meant to be used only when your regular birth control does not work for some unexpected reason.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Which types of birth control do I have to see my doctor to get? ",
      content: `

    <div class="answer"><p>You need a prescription for these types of birth control:</p>

<ul>
	<li>Oral contraceptives: the pill and the mini-pill (in some states, birth control pills are now available without a prescription, through the pharmacy)</li>
	<li>Patch</li>
	<li>Vaginal ring</li>
	<li>Diaphragms (your doctor or nurse needs to fit one to the shape of your vagina)&nbsp;</li>
	<li>Shot/injection (you get the shot at your doctor's office or family planning clinic)</li>
</ul>

<ul>
	<li>Cervical cap</li>
	<li>Implantable rod (inserted by a doctor in the office or clinic)&nbsp;</li>
	<li>IUD (inserted by a doctor in the office or clinic)</li>
</ul>

<p>You will need surgery or a medical procedure for:</p>

<ul>
	<li>Female sterilization (tubal ligation)</li>
	<li>Male sterilization (vasectomy)</li>
	<li>Tubal implant (Essure®)</li>
</ul>

<p>Please note that Essure® will not be sold or distributed in the United States after December 31, 2018.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does birth control work?",
      content: `

    <div class="answer"><p>Birth control works to prevent pregnancy in different ways, depending upon the type of birth control you choose:</p>

<ul>
	<li><strong>Female or male sterilization surgery </strong>prevents the sperm from reaching the egg by cutting or damaging the tubes that carry sperm (in men) or eggs (in women).</li>
	<li><strong>Long-acting reversible contraceptives or "LARC" methods </strong>(intrauterine devices, hormonal implants) prevent your ovaries from releasing eggs, prevent sperm from getting to the egg, or make implantation of the egg in the uterus (womb) unlikely.</li>
	<li><strong>Short-acting hormonal methods,</strong> such as the pill, mini-pill, patch, shot, and vaginal ring, prevent your ovaries from releasing eggs or prevent sperm from getting to the egg.</li>
	<li><strong>Barrier methods,</strong> such as condoms, diaphragms, sponge, cervical cap, prevent sperm from getting to the egg.</li>
	<li><strong>Natural rhythm methods </strong>involve avoiding sex or using other forms of birth control on the days when you are most fertile (most likely to get pregnant).</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are birth control pills safe?",
      content: `

    <div class="answer"><p>Yes, hormonal birth control methods, such as the pill, are safe for <a href="#9">most women</a>. Today's birth control pills have lower doses of hormones than in the past. This has lowered the risk of side effects and serious health problems.</p>

<p>Today's birth control pills can have <a href="#12">health benefits</a><strong>&nbsp;</strong>for some women, such as a lower risk of some kinds of cancer.<a href="#references"><sup>5</sup></a> Also, different brands and types of birth control pills (and other forms of hormonal birth control) can <a href="#9">increase your risk for some health problems</a> and side effects. Side effects can include weight gain, headaches, irregular bleeding, breast tenderness, and mood changes.</p>

<p>Talk to your doctor about whether hormonal birth control is right for you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does birth control raise my risk for health problems?",
      content: `

    <div class="answer"><p>It can, depending on your health and the type of birth control you use. Talk to your doctor to find the birth control method that is right for you.</p>

<p>Different forms of birth control have different health risks and side effects. Some birth control methods that increase your risk for health problems include:</p>

<ul>
	<li><strong>Hormonal birth control. </strong>Combination birth control pills (birth control with both estrogen and progesterone) and some other forms of hormonal birth control, such as the vaginal ring or skin patch, may raise your risk for blood clots and high blood pressure. Blood clots and high blood pressure can cause a <a href="/heart-health-stroke/signs-of-a-heart-attack/" title="Signs of a heart attack">heart attack</a> or <a href="/heart-health-stroke/stroke-risk-factors/index.html" title="Stroke: Know your risk">stroke</a>. A blood clot in the legs can also go to your lungs, causing serious damage or even death. These are serious side effects of hormonal birth control, but they are rare.</li>
	<li><strong>Spermicides (used alone or with the cervical cap, diaphragm or sponge). </strong>Spermicides that have nonoxynol-9 can irritate the vagina. This can raise your risk for getting HIV. Use spermicides with nonoxynol-9 only if you are in a monogamous relationship (you have sex only with each other) with a man you know is HIV-negative. Also, medicines for vaginal yeast infections may make spermicides less effective.</li>
	<li><strong>Intrauterine devices (IUDs).</strong> IUDs can slightly raise your risk of an ectopic pregnancy. Ectopic pregnancies happen when a fertilized egg implants somewhere outside of the uterus (womb), usually in one of the fallopian tubes. An ectopic pregnancy is a serious medical problem that should be treated as soon as possible. IUDs also have a very rare but serious risk of infection or puncture of the uterus.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the health risks for smokers who use birth control? ",
      content: `

    <div class="answer"><p><strong>If you smoke and are 35 or older, you should not use hormonal birth control.</strong> Smoking tobacco and using hormonal birth control raises your risk for blood clots and high blood pressure. Smoking and high blood pressure are risk factors for a <a href="/heart-health-stroke/signs-of-a-heart-attack/" title="Signs of a heart attack">heart attack</a> or <a href="/heart-health-stroke/stroke-risk-factors/index.html" title="Stroke: Know your risk">stroke</a>. The risk for a heart attack or stroke also goes up as you age.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can birth control help with my painful or heavy periods?",
      content: `

    <div class="answer"><p>Maybe. Research shows that hormonal birth control, such as the pill, patch, shot, ring, implantable rod, and hormonal IUD, may help with heavy, painful, or long-term bleeding. These methods can also help you have lighter, shorter periods.<a href="#references"><sup>6</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are some other benefits of hormonal birth control?",
      content: `

    <div class="answer"><p>Research shows that other benefits of hormonal birth control may include:<a href="#references"><sup>6,7</sup></a></p>

<ul>
	<li>More regular and lighter periods</li>
	<li>Fewer menstrual cramps</li>
	<li>Less acne</li>
	<li>A lower risk of <a href="/publications/our-publications/fact-sheet/ovarian-cancer.html" title="Ovarian cancer fact sheet">ovary</a>, endometrial (uterus), and colon cancers, <a href="/publications/our-publications/fact-sheet/pelvic-inflammatory-disease.html" title="Pelvic inflammatory disease">pelvic inflammatory disease (PID)</a>, noncancerous <a href="/publications/our-publications/fact-sheet/ovarian-cysts.html" title="Ovarian cysts">ovarian cysts</a>, and <a href="/publications/our-publications/fact-sheet/anemia.html" title="Anemia fact sheet">iron-deficiency anemia</a></li>
</ul>

<p>Read more about how birth control can help with the following health problems:</p>

<ul>
	<li><a href="/publications/our-publications/fact-sheet/ovarian-cysts.html" title="Ovarian cysts">Ovarian cysts</a></li>
	<li><a href="/publications/our-publications/fact-sheet/endometriosis.html" title="Endometriosis">Endometriosis</a></li>
	<li><a href="/publications/our-publications/fact-sheet/polycystic-ovary-syndrome.html" title="Polycystic ovary syndrome">Polycystic ovary syndrome</a></li>
	<li><a href="/publications/our-publications/fact-sheet/uterine-fibroids.html" title="Uterine fibroids fact sheet">Uterine fibroids</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What do I do if I miss a day taking the pill?",
      content: `

    <div class="answer"><p>Follow the instructions that came with your birth control about using back-up birth control (such as a condom and spermicide). You also can follow these recommendations from the Centers for Disease Control and Prevention.<a href="#references"><sup>1 </sup></a></p>

<p>If you are late or miss a day taking your pill:</p>

<ul>
	<li>Take the late or missed pill as soon as possible.</li>
	<li>Continue taking the rest of your pills at your normal time, even if it means taking two pills on the same day.</li>
	<li>You do not need other forms of birth control, such as a condom, unless you need to protect against STIs.</li>
</ul>

<p>If you miss two or more days in a row:</p>

<ul>
	<li>Take only the most recent missed pill as soon as possible.</li>
	<li>Continue taking the rest of your pills at your normal time, even if it means taking two pills on the same day.</li>
	<li>Use back-up birth control, such as a condom and spermicide, or do not have sex until you have taken a pill for seven days in a row.</li>
	<li>If you missed pills during days in the last week of active pills (days 15–21 for 28-day pill packs), start a new pack the next day. If you are not able to start a new pack right away, use back-up birth control or avoid sex until hormone pills from a new pack have been taken for 7 days in a row.</li>
	<li>Consider <a href="/publications/our-publications/fact-sheet/emergency-contraception.html" title="Emergency contraception (emergency birth control) fact sheet">emergency contraception</a> if you missed pills during the first week and had sex.</li>
</ul>

<p>Talk to your doctor if you continue to miss taking your birth control pill or find it hard to take the pill at the same time each day. You may want to consider a different type of birth control, such as an IUD, an implant, shot, ring, or patch that you don't have to remember to take every day.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How effective is the withdrawal method?",
      content: `

    <div class="answer"><p>Not very! About 22 out of 100 women who use withdrawal as their only form of birth control for a year will get pregnant. See the <a href="#3">chart above</a>&nbsp;for how this number compares to other methods of birth control.</p>

<p>Withdrawal is when a man takes his penis out of a woman's vagina ("pulls out") before he ejaculates or "comes" (has an orgasm). This lowers the chance of sperm from going to the egg. "Pulling out" can be hard for a man to do. It takes a lot of self-control.</p>

<p>Even if you use withdrawal, sperm can be released before the man pulls out. When a man's penis first becomes erect, some fluid may be on the tip of the penis. This fluid has sperm in it, so you could still get pregnant. Withdrawal also does not protect you from STIs, including HIV.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does breastfeeding prevent pregnancy?",
      content: `

    <div class="answer"><p>Breastfeeding can be a short-term method of birth control in very specific situations. The risk of pregnancy is less than 2 in 100 if <strong>all three</strong> of these describe you:<a href="#references"><sup>1</sup></a></p>

<ul>
	<li>You have a baby who is less than 6 months old</li>
</ul>

<p><strong>and</strong></p>

<ul>
	<li>You exclusively breastfeed, meaning that you only feed your baby your breastmilk all of the time (no formula, no breastmilk from other people, and no solid food)</li>
</ul>

<p><strong>and</strong></p>

<ul>
	<li>You have not gotten a period after childbirth</li>
</ul>

<p>Talk to your doctor about birth control if you do not want to get pregnant while nursing.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get free or low-cost birth control?",
      content: `

    <div class="answer"><p>Under the Affordable Care Act (the health care law), most insurance plans cover FDA-approved <a href="https://www.healthcare.gov/what-are-my-birth-control-benefits/" title="Birth control benefits and reproductive health care options in the Health Insurance Marketplace">prescription birth control</a> for women, such as the pill, IUDs, and female sterilization, at no additional cost to you. This also includes birth control counseling.</p>

<ul>
	<li>If you have insurance, check with your insurance provider to find out what is included in your plan.</li>
	<li>If you have Medicaid, your insurance covers birth control. This includes birth control prescriptions and visits to your doctor related to birth control. Programs vary between states, so <a href="https://www.medicaid.gov/about-us/contact-us/contact-state-page.html" title="Contact Your State With Questions | Medicaid.gov">check with your state's Medicaid program</a> to learn what your benefits are.</li>
	<li>If you don't have insurance, don't panic. Family planning (reproductive health) clinics may provide some birth control methods for free or at low cost. Call your local clinic or enter your ZIP code in <a href="https://findahealthcenter.hrsa.gov/">this clinic finder tool</a> to learn more.</li>
</ul>

<p>For information about other services covered by the Affordable Care Act, visit <a href="http://www.healthcare.gov" title="Health Insurance Marketplace">HealthCare.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about birth control methods?",
      content: `

    <div class="answer"><p>For more information about birth control methods, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.fda.gov/" title="Birth Control: Medicines to Help You">Food and Drug Administration (FDA), HHS</a></strong><br>
	<strong>Phone Number</strong>: 888-463-6332</li>
	<li><strong><a href="http://www.hhs.gov/opa/" title="Office of Population Affairs">Office of Population Affairs, HHS</a></strong><br>
	<strong>Phone Number</strong>: 240-453-2888</li>
	<li><a href="http://www.acog.org/" title="American College of Obstetricians and Gynecologists" class="external-link external-popup" target="_blank">American College of Obstetricians and Gynecologists <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number</strong>: 800-762-2264 x 349 (for publications requests only)</li>
	<li><a href="http://www.plannedparenthood.org/" title="Planned Parenthood" class="external-link external-popup" target="_blank">Planned Parenthood <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number</strong>: 800-230-7526</li>
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
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/mmwr/volumes/65/rr/rr6504a1.htm?s_cid=rr6504a1_w" title="U.S. Selected Practice Recommendations for Contraceptive Use, 2016">U.S. Selected Practice Recommendations for Contraceptive Use, 2016.</a>&nbsp;<em>Morbidity &amp; Mortality Weekly Report; </em>65(RR-4): 1–66.</li>
	<li>Curtis, K.M., Tepper, N.K., Jatlaoui, T.C., et al. (2016). <a href="http://www.cdc.gov/mmwr/volumes/65/rr/rr6503a1_appendix.htm" title="U.S. Medical Eligibility Criteria for Contraceptive Use, 2016">U.S. Medical Eligibility Criteria for Contraceptive Use, 2016.</a> MMWR Recomm Rep; 65(RR-3):1–104.&nbsp;</li>
	<li>Food and Drug Administration. (2016). <a href="http://www.fda.gov/ForConsumers/ByAudience/ForWomen/FreePublications/ucm313215.htm#BarrierMethods" title="Birth Control: Medicines To Help You">Birth Control: Medicines to Help You.</a></li>
	<li>Food and Drug Administration. (2013). <a href="http://www.fda.gov/MedicalDevices/ProductsandMedicalProcedures/DeviceApprovalsandClearances/Recently-ApprovedDevices/ucm133900.htm" title="FC2 Female Condom - P080002">FC2 Female condom</a>.</li>
	<li>National Cancer Institute. (2012). <a href="https://www.cancer.gov/about-cancer/causes-prevention/risk/hormones/oral-contraceptives-fact-sheet" title="Oral Contraceptives and Cancer Risk">Oral Contraceptives and Cancer Risk</a>.</li>
	<li>Wright, K.P., Johnson, J.V. (2008). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2621397/" title="Evaluation of extended and continuous use oral contraceptives">Evaluation of extended and continuous use oral contraceptives</a>. <em>Therapeutics and Clinical Risk Management; </em>4(5): 905-911.</li>
	<li>Fraser, I.S. (2012). <a href="http://www.contraceptionjournal.org/article/S0010-7824(12)00805-0/abstract" title="Added health benefits of the levonorgestrel contraceptive intrauterine system and other hormonal contraceptive delivery systems" class="external-link external-popup" target="_blank">Added health benefits of the levonorgestrel contraceptive intrauterine system and other hormonal contraceptive delivery systems. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><em>Contraception; </em>87(3): 273-279.&nbsp;</li>
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
