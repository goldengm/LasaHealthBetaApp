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

export function infertPage({ navigation, ...rest }) {
  const condName = "Infertility";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Infertility.jpg?VersionId=SXmBzlrM9wBBBSMAA749JNB4_HpQEF.a";
  const condDescription =
    "Infertility means not being able to get pregnant after one year of trying (or six months if a woman is 35 or older). Women who can get pregnant but are unable to stay pregnant may also be infertile. \n Pregnancy is the result of a process that has many steps. To get pregnant: \n A woman's body must release an egg from one of her ovaries (ovulation). \n The egg must go through a fallopian tube toward the uterus (womb). \n A man's sperm must join with (fertilize) the egg along the way. \nThe fertilized egg must attach to the inside of the uterus (implantation). \n Infertility can happen if there are problems with any of these steps.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Infertility.jpg?VersionId=SXmBzlrM9wBBBSMAA749JNB4_HpQEF.a"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Infertility</h1>  -->
            <p><strong>Infertility </strong>means not being able to get pregnant after one year of trying (or six months if a woman is 35 or older). Women who can get pregnant but are unable to stay pregnant may also be infertile.&nbsp;About 10 percent of women (6.1 million) in the United States ages 15-44 have difficulty getting pregnant or staying pregnant, according to the Centers for Disease Control and Prevention (CDC).</p>

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
      title: "What is infertility?",
      content: `

    <div class="answer"><p>Infertility means not being able to get pregnant after one year of trying (or six months if a woman is 35 or older). Women who can get pregnant but are unable to stay pregnant may also be infertile.</p>

<p>Pregnancy is the result of a process that has many steps. To get pregnant:</p>

<ul>
	<li>A woman's body must release an egg from one of her&nbsp;<a href="/glossary#ovaries">ovaries</a>&nbsp;(ovulation).</li>
	<li>The egg must go through a&nbsp;<a href="/glossary#fallopian">fallopian tube</a>&nbsp;toward the&nbsp;<a href="/glossary#uterus">uterus</a>&nbsp;(womb).</li>
	<li>A man's sperm must join with (fertilize) the egg along the way.</li>
	<li>The fertilized egg must attach to the inside of the uterus (implantation).</li>
</ul>

<p>Infertility can happen if there are problems with any of these steps.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is infertility a common problem?",
      content: `

    <div class="answer"><p>Yes. About 10 percent of women (6.1 million) in the United States ages 15-44 have difficulty getting pregnant or staying pregnant, according to the Centers for Disease Control and Prevention (CDC).</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is infertility just a woman's problem?",
      content: `

    <div class="answer"><p>No, infertility is not always a woman's problem. Both women and men can have problems that cause infertility. About one-third of infertility cases are caused by women's problems. Another one third of fertility problems are due to the man. The other cases are caused by a mixture of male and female problems or by unknown problems.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes infertility in men?",
      content: `

    <div class="answer"><p>Infertility in men is most often caused by:</p>

<ul>
	<li>A problem called varicocele (VAIR-ih-koh-seel). This happens when the veins on a man's testicle(s) are too large. This heats the testicles. The heat can affect the number or shape of the sperm.</li>
	<li>Other factors that cause a man to make too few sperm or none at all.</li>
	<li>Movement of the sperm. This may be caused by the shape of the sperm. Sometimes injuries or other damage to the reproductive system block the sperm.</li>
</ul>

<p>Sometimes a man is born with the problems that affect his sperm. Other times problems start later in life due to illness or injury. For example, cystic fibrosis often causes infertility in men.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What increases a man's risk of infertility?",
      content: `

    <div class="answer"><p>A man's sperm can be changed by his overall health and lifestyle. Some things that may reduce the health or number of sperm include:</p>

<ul>
	<li>Heavy alcohol use</li>
	<li>Drugs</li>
	<li>Smoking cigarettes</li>
	<li>Age</li>
	<li>Environmental toxins, including pesticides and lead</li>
	<li>Health problems such as mumps, serious conditions like kidney disease, or hormone problems</li>
	<li>Medicines</li>
	<li>Radiation treatment and chemotherapy for cancer</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes infertility in women?",
      content: `

    <div class="answer"><p>Most cases of female infertility are caused by problems with ovulation. Without ovulation, there are no eggs to be fertilized. Some signs that a woman is not ovulating normally include irregular or absent menstrual periods.</p>

<p>Ovulation problems are often caused by polycystic ovarian syndrome (PCOS). PCOS is a hormone imbalance problem which can interfere with normal ovulation. PCOS is the most common cause of female infertility. Primary ovarian insufficiency (POI) is another cause of ovulation problems. POI occurs when a woman's ovaries stop working normally before she is 40. POI is not the same as early menopause.</p>

<p>Less common causes of fertility problems in women include:</p>

<ul>
	<li>Blocked fallopian tubes due to&nbsp;<a href="/glossary#PID">pelvic inflammatory disease</a>,&nbsp;<a href="/glossary#endometriosis">endometriosis</a>, or surgery for an&nbsp;<a href="/glossary#ectopic">ectopic pregnancy</a></li>
	<li>Physical problems with the uterus</li>
	<li><a href="/glossary#u_fibroids">Uterine fibroids</a>, which are non-cancerous clumps of tissue and muscle on the walls of the uterus.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What things increase a woman's risk of infertility?",
      content: `

    <div class="answer"><p>Many things can change a woman's ability to have a baby. These include:</p>

<ul>
	<li>Age</li>
	<li>Smoking</li>
	<li>Excess alcohol use</li>
	<li>Stress</li>
	<li>Poor diet</li>
	<li>Athletic training</li>
	<li>Being overweight or underweight</li>
	<li>Sexually transmitted infections (STIs)</li>
	<li>Health problems that cause hormonal changes, such as&nbsp;<a href="/glossary#pcos">polycystic ovarian syndrome</a>&nbsp;and&nbsp;<a href="/glossary#poi">primary ovarian insufficiency</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does age affect a woman's ability to have children?",
      content: `

    <div class="answer"><p>Many women are waiting until their 30s and 40s to have children. In fact, about 20 percent of women in the United States now have their first child after age 35. So age is a growing cause of fertility problems. About one-third of couples in which the woman is over 35 have fertility problems.</p>

<p>Aging decreases a woman's chances of having a baby in the following ways:</p>

<ul>
	<li>Her ovaries become less able to release eggs</li>
	<li>She has a smaller number of eggs left</li>
	<li>Her eggs are not as healthy</li>
	<li>She is more likely to have health conditions that can cause fertility problems</li>
	<li>She is more likely to have a miscarriage</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How long should women try to get pregnant before calling their doctors?",
      content: `

    <div class="answer"><p>Most experts suggest at least one year. Women 35 or older should see their doctors after six months of trying. A woman's chances of having a baby decrease rapidly every year after the age of 30.</p>

<p>Some health problems also increase the risk of infertility. So, women should talk to their doctors if they have:</p>

<ul>
	<li>Irregular periods or no menstrual periods</li>
	<li>Very painful periods</li>
	<li>Endometriosis</li>
	<li>Pelvic inflammatory disease</li>
	<li>More than one miscarriage</li>
</ul>

<p>It is a good idea for any woman to talk to a doctor before trying to get pregnant. Doctors can help you get your body ready for a healthy baby. They can also answer questions on fertility and give tips on conceiving.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How will doctors find out if a woman and her partner have fertility problems?",
      content: `

    <div class="answer"><p>Doctors will do an infertility checkup. This involves a physical exam. The doctor will also ask for both partners' health and sexual histories. Sometimes this can find the problem. However, most of the time, the doctor will need to do more tests.</p>

<p>In men, doctors usually begin by testing the semen. They look at the number, shape, and movement of the sperm. Sometimes doctors also suggest testing the level of a man's hormones.</p>

<p>In women, the first step is to find out if she is ovulating each month. There are a few ways to do this. A woman can track her ovulation at home by:</p>

<ul>
	<li>Writing down changes in her morning body temperature for several months</li>
	<li>Writing down how her cervical mucus looks for several months</li>
	<li>Using a home ovulation test kit (available at drug or grocery stores)</li>
</ul>

<p>Doctors can also check ovulation with blood tests. Or they can do an&nbsp;<a href="/glossary#ultrasound">ultrasound</a>&nbsp;of the ovaries. If ovulation is normal, there are other fertility tests available.</p>

<p>Some common tests of fertility in women include:</p>

<ul>
	<li><strong>Hysterosalpingography (HIS-tur-oh-sal-ping-GOGH-ru-fee):</strong>&nbsp;This is an x-ray of the uterus and fallopian tubes. Doctors inject a special dye into the uterus through the vagina. This dye shows up in the x-ray. Doctors can then watch to see if the dye moves freely through the uterus and fallopian tubes. This can help them find physical blocks that may be causing infertility. Blocks in the system can keep the egg from moving from the fallopian tube to the uterus. A block could also keep the sperm from reaching the egg.</li>
	<li><strong>Laparoscopy (lap-uh-ROS-kuh-pee):</strong>&nbsp;A minor surgery to see inside the abdomen. The doctor does this with a small tool with a light called a laparoscope (LAP-uh-roh-skohp). She or he makes a small cut in the lower abdomen and inserts the laparoscope. With the laparoscope, the doctor can check the ovaries, fallopian tubes, and uterus for disease and physical problems. Doctors can usually find scarring and&nbsp;<a href="/a-z-topics/endometriosis">endometriosis</a>&nbsp;by laparoscopy.</li>
</ul>

<p>Finding the cause of infertility can be a long and emotional process. It may take time to complete all the needed tests. So don't worry if the problem is not found right away.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do doctors treat infertility?",
      content: `

    <div class="answer"><p>Infertility can be treated with&nbsp;<a href="#12">medicine</a>, surgery,&nbsp;<a href="#13">artificial insemination</a>, or&nbsp;<a href="#14">assisted reproductive technology</a>. Many times these treatments are combined. In most cases infertility is treated with drugs or surgery.</p>

<p>Doctors recommend specific treatments for infertility based on:</p>

<ul>
	<li>Test results</li>
	<li>How long the couple has been trying to get pregnant</li>
	<li>The age of both the man and woman</li>
	<li>The overall health of the partners</li>
	<li>Preference of the partners</li>
</ul>

<p>Doctors often&nbsp;<b>treat</b>&nbsp;<b>infertility in men</b>&nbsp;in the following ways:</p>

<ul>
	<li><strong>Sexual problems:</strong>&nbsp;Doctors can help men deal with impotence or premature ejaculation. Behavioral therapy and/or medicines can be used in these cases.</li>
	<li><strong>Too few sperm:</strong>&nbsp;Sometimes surgery can correct the cause of the problem. In other cases, doctors surgically remove sperm directly from the male reproductive tract. Antibiotics can also be used to clear up infections affecting sperm count.</li>
	<li><strong>Sperm movement:</strong>&nbsp;Sometimes semen has no sperm because of a block in the man's system. In some cases, surgery can correct the problem.</li>
</ul>

<p>In women, some physical problems can also be corrected with surgery.</p>

<p>A number of fertility medicines are used to treat women with ovulation problems. It is important to talk with your doctor about the pros and cons of these medicines. You should understand the possible dangers, benefits, and side effects.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What medicines are used to treat infertility in women?",
      content: `

    <div class="answer"><p>Some common medicines used to treat infertility in women include:</p>

<ul>
	<li><strong>Clomiphene citrate (<em>Clomid</em>):</strong>&nbsp;This medicine causes ovulation by acting on the pituitary gland. It is often used in women who have&nbsp;<a href="/publications/our-publications/fact-sheet/polycystic-ovary-syndrome.html">polycystic ovary&nbsp;syndrome</a>&nbsp;(PCOS) or other problems with ovulation. This medicine is taken by mouth.</li>
	<li><strong>Human menopausal gonadotropin or hMG (<em>Repronex, Pergonal</em>):</strong>&nbsp;This medicine is often used for women who don't ovulate due to problems with their pituitary gland. hMG acts directly on the ovaries to stimulate ovulation. It is an injected medicine.</li>
	<li><strong>follicle-stimulating hormone or FSH (<em>Gonal-F, Follistim</em>):</strong>&nbsp;FSH works much like hMG. It causes the ovaries to begin the process of ovulation. These medicines are usually injected.</li>
	<li><strong>Gonadotropin-releasing hormone (Gn-RH) analog:</strong>&nbsp;These medicines are often used for women who don't ovulate regularly each month. Women who ovulate before the egg is ready can also use these medicines. Gn-RH analogs act on the pituitary gland to change when the body ovulates. These medicines are usually injected or given with a nasal spray.</li>
	<li><strong>Metformin (<em>Glucophage</em>):</strong>&nbsp;Doctors use this medicine for women who have insulin resistance and/or PCOS. This drug helps lower the high levels of male hormones in women with these conditions. This helps the body to ovulate. Sometimes clomiphene citrate or FSH is combined with metformin. This medicine is usually taken by mouth.</li>
	<li><strong>Bromocriptine (<em>Parlodel</em>):</strong>&nbsp;This medicine is used for women with ovulation problems due to high levels of prolactin.&nbsp;<a href="/glossary#prolactin">Prolactin</a>&nbsp;is a hormone that causes milk production.</li>
</ul>

<p>Many fertility drugs increase a woman's chance of having twins, triplets, or other multiples. Women who are pregnant with multiple fetuses have more problems during pregnancy. Multiple fetuses have a high risk of being born too early (prematurely). Premature babies are at a higher risk of health and developmental problems.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is intrauterine insemination (IUI)?",
      content: `

    <div class="answer"><p><strong>Intrauterine insemination (IUI)</strong>&nbsp;is an infertility treatment that is often called artificial insemination. In this procedure, the woman is injected with specially prepared sperm. Sometimes the woman is also treated with medicines that stimulate ovulation before IUI.</p>

<p>IUI is often used to treat:</p>

<ul type="disc">
	<li>Mild male factor infertility</li>
	<li>Women who have problems with their cervical mucus</li>
	<li>Couples with unexplained infertility</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is assisted reproductive technology (ART)?",
      content: `

    <div class="answer"><p><a href="/glossary#ART">Assisted reproductive technology (ART)</a>&nbsp;is a group of different methods used to help infertile couples. ART works by removing eggs from a woman's body. The eggs are then mixed with sperm to make embryos. The embryos are then put back in the woman's body.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How often is assisted reproductive technology (ART) successful? ",
      content: `

    <div class="answer"><p>Success rates vary and depend on many factors. Some things that affect the success rate of ART include:</p>

<ul>
	<li>Age of the partners</li>
	<li>Reason for infertility</li>
	<li>Clinic</li>
	<li>Type of ART</li>
	<li>If the egg is fresh or frozen</li>
	<li>If the embryo is fresh or frozen</li>
</ul>

<p>The U.S. Centers for Disease Control and Prevention (CDC) collects success rates on ART for some fertility clinics. According to a 2014&nbsp;<a href="https://www.cdc.gov/art/artdata/index.html">CDC report on ART</a>, the average percentage of ART cycles that led to a live birth were:</p>

<ul>
	<li>39 percent in women under the age of 35</li>
	<li>30 percent in women aged 35-37</li>
	<li>21 percent in women aged 37-40</li>
	<li>11 percent in women aged 41-42</li>
</ul>

<p>ART can be expensive and time-consuming. But it has allowed many couples to have children that otherwise would not have been conceived. The most common complication of ART is multiple fetuses. But this is a problem that can be prevented or minimized in several different ways.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What are the different types of assisted reproductive technology (ART)?",
      content: `

    <div class="answer"><p>Common methods of ART include:</p>

<ul>
	<li><strong>In vitro fertilization (IVF)</strong>&nbsp;means fertilization outside of the body. IVF is the most effective ART. It is often used when a woman's fallopian tubes are blocked or when a man produces too few sperm. Doctors treat the woman with a drug that causes the ovaries to produce multiple eggs. Once mature, the eggs are removed from the woman. They are put in a dish in the lab along with the man's sperm for fertilization. After 3 to 5 days, healthy embryos are implanted in the woman's uterus.</li>
	<li><strong>Zygote intrafallopian transfer (ZIFT)</strong>&nbsp;or&nbsp;<strong>Tubal Embryo Transfer</strong>&nbsp;is similar to IVF. Fertilization occurs in the laboratory. Then the very young embryo is transferred to the fallopian tube instead of the uterus.</li>
	<li><strong>Gamete intrafallopian transfer (GIFT)</strong>&nbsp;involves transferring eggs and sperm into the woman's fallopian tube. So fertilization occurs in the woman's body. Few practices offer GIFT as an option.</li>
	<li><strong>Intracytoplasmic sperm injection (ICSI)</strong>&nbsp;is often used for couples in which there are serious problems with the sperm. Sometimes it is also used for older couples or for those with failed IVF attempts. In ICSI, a single sperm is injected into a mature egg. Then the embryo is transferred to the uterus or fallopian tube.</li>
</ul>

<p>ART procedures sometimes involve the use of donor eggs (eggs from another woman), donor sperm, or previously frozen embryos. Donor eggs are sometimes used for women who can not produce eggs. Also, donor eggs or donor sperm is sometimes used when the woman or man has a genetic disease that can be passed on to the baby. An infertile woman or couple may also use donor embryos. These are embryos that were either created by couples in infertility treatment or were created from donor sperm and donor eggs. The donated embryo is transferred to the uterus. The child will not be genetically related to either parent.</p>

<h3>Surrogacy</h3>

<p>Women with no eggs or unhealthy eggs might also want to consider surrogacy. A surrogate is a woman who agrees to become pregnant using the man's sperm and her own egg. The child will be genetically related to the surrogate and the male partner. After birth, the surrogate will give up the baby for adoption by the parents.</p>

<h3>Gestational carrier</h3>

<p>Women with ovaries but no uterus may be able to use a gestational carrier. This may also be an option for women who shouldn't become pregnant because of a serious health problem. In this case, a woman uses her own egg. It is fertilized by the man's sperm and the embryo is placed inside the carrier's uterus. The carrier will not be related to the baby and gives him or her to the parents at birth.</p>

<p>Recent research by the Centers for Disease Control and Prevention showed that ART babies are two to four times more likely to have certain kinds of birth defects. These may include heart and digestive system problems, and cleft (divided into two pieces) lips or palate. Researchers don't know why this happens. The birth defects may not be due to the technology. Other factors, like the age of the parents, may be involved. More research is needed. The risk is relatively low, but parents should consider this when making the decision to use ART.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about infertility?",
      content: `

    <div class="answer"><p>For more information about infertility, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.acog.org/" class="external-link external-popup" target="_blank"><strong>American College of Obstetricians and Gynecologists</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;<br>
	<strong>Phone:</strong>&nbsp;202-638-5577</li>
	<li><a href="http://www.path2parenthood.org/" class="external-link external-popup" target="_blank"><b>Path2Parenthood</b> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;888-917-3777</li>
	<li><a href="http://www.cdc.gov/reproductivehealth"><strong>Division of Reproductive Health, NCCDPHP, CDC&nbsp;</strong></a>&nbsp;<br>
	<strong>Phone:</strong>&nbsp;800-323-4636 (TDD: 888-232-6348)</li>
	<li><a href="http://www.fertilehope.org/" class="external-link external-popup" target="_blank"><strong>Fertile Hope, LiveStrong</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;888-965-7205</li>
	<li><a href="http://www.fda.gov/"><strong>Food and Drug Administration</strong></a><br>
	<strong>Phone:</strong>&nbsp;888-463-6332</li>
	<li><a href="http://www.inciid.org/" class="external-link external-popup" target="_blank"><strong>InterNational Council on Infertility Information Dissemination, Inc.</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;703-379-9178</li>
	<li><a href="http://www.resolve.org/" class="external-link external-popup" target="_blank"><strong>RESOLVE: The National Infertility Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;703-556-7172</li>
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
