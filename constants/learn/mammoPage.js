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

export function mammoPage({ navigation, ...rest }) {
  const condName = "Mammograms";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Mammograms.jpg?VersionId=8tFl.1VfSlb.0kNZAtf7zazi_I_ywx_n";
  const condDescription =
    "A mammogram is a low-dose x-ray exam of the breasts to look for changes that are not normal. The results are recorded on x-ray film or directly into a computer for a doctor called a radiologist to examine. \n A mammogram allows the doctor to have a closer look for changes in breast tissue that cannot be felt during a breast exam. It is used for women who have no breast complaints and for women who have breast symptoms, such as a change in the shape or size of a breast, a lump, nipple discharge, or pain. Breast changes occur in almost all women. In fact, most of these changes are not cancer and are called 'benign,' but only a doctor can know for sure. Breast changes can also happen monthly, due to your menstrual period.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Mammograms.jpg?VersionId=8tFl.1VfSlb.0kNZAtf7zazi_I_ywx_n"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Mammograms</h1>  -->
            <p><strong>A mammogram is a low-dose x-ray exam of the breasts to look for changes that are not normal.</strong> A mammogram allows the doctor to have a closer look for changes in breast tissue that cannot be felt during a breast exam. Women ages 50 to 74 years should get a mammogram every 2 years. Women younger than age 50 should talk to a doctor about when to start and how often to have a mammogram.</p>

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
      title: "What is a mammogram?",
      content: `

    <div class="answer"><p>A mammogram is a low-dose x-ray exam of the breasts to look for changes that are not normal. The results are recorded on x-ray film or directly into a computer for a doctor called a radiologist to examine.</p>

<p>A mammogram allows the doctor to have a closer look for changes in breast tissue that cannot be felt during a breast exam. It is used for women who have no breast complaints and for women who have breast symptoms, such as a change in the shape or size of a breast, a lump, nipple discharge, or pain. Breast changes occur in almost all women. In fact, most of these changes are not cancer and are called "benign," but only a doctor can know for sure. Breast changes can also happen monthly, due to your menstrual period.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What is the best method of detecting breast cancer as early as possible?",
      content: `

    <div class="answer"><p>A high-quality mammogram plus a clinical breast exam, an exam done by your doctor, is the most effective way to detect breast cancer early. Finding breast cancer early greatly improves a woman's chances for successful treatment.</p>

<p>Like any test, mammograms have both benefits and limitations. For example, some cancers can't be found by a mammogram, but they may be found in a clinical breast exam.</p>

<p>Checking your own breasts for lumps or other changes is called a breast self-exam (BSE). Studies so far have not shown that BSE alone helps reduce the number of deaths from breast cancer. BSE should not take the place of routine clinical breast exams and mammograms.</p>

<p>If you choose to do BSE, remember that breast changes can occur because of pregnancy, aging, menopause, menstrual cycles, or from taking birth control pills or other hormones. It is normal for breasts to feel a little lumpy and uneven. Also, it is common for breasts to be swollen and tender right before or during a menstrual period. If you notice any unusual changes in your breasts, contact your doctor.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is a mammogram done?",
      content: `

    <div class="answer"><p>You stand in front of a special x-ray machine. The person who takes the x-rays, called a radiologic technician, places your breasts, one at a time, between an x-ray plate and a plastic plate. These plates are attached to the x-ray machine and compress the breasts to flatten them. This spreads the breast tissue out to obtain a clearer picture. You will feel pressure on your breast for a few seconds. It may cause you some discomfort; you might feel squeezed or pinched. This feeling only lasts for a few seconds, and the flatter your breast, the better the picture. Most often, two pictures are taken of each breast — one from the side and one from above. A screening mammogram takes about 20 minutes from start to finish.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are there different types of mammograms?",
      content: `

    <div class="answer"><ul>
	<li><strong>Screening mammograms</strong> are done for women who have no symptoms of breast cancer. It usually involves two x-rays of each breast. Screening mammograms can detect lumps or tumors that cannot be felt. They can also find <span class="pronounce-blue pronounce-blueJS"><a href="#">microcalcifications</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (my-kro-kal-si-fi-KAY-shuns)</span></span> or tiny deposits of calcium in the breast, which sometimes mean that breast cancer is present.</li>
	<li><strong>Diagnostic mammograms</strong> are used to check for breast cancer after a lump or other symptom or sign of breast cancer has been found. Signs of breast cancer may include pain, thickened skin on the breast, nipple discharge, or a change in breast size or shape. This type of mammogram also can be used to find out more about breast changes found on a screening mammogram, or to view breast tissue that is hard to see on a screening mammogram. A diagnostic mammogram takes longer than a screening mammogram because it involves more x-rays in order to obtain views of the breast from several angles. The technician can magnify a problem area to make a more detailed picture, which helps the doctor make a correct diagnosis.</li>
</ul>

<p>A digital mammogram also uses x-rays to produce an image of the breast, but instead of storing the image directly on film, the image is stored directly on a computer. This allows the recorded image to be magnified for the doctor to take a closer look. Current research has not shown that digital images are better at showing cancer than x-ray film images in general. But, women with dense breasts who are pre- or perimenopausal, or who are younger than age 50, may benefit from having a digital rather than a film mammogram. Digital mammography may offer these benefits:</p>

<ul>
	<li>Long-distance consultations with other doctors may be easier because the images can be shared by computer.</li>
	<li>Slight differences between normal and abnormal tissues may be more easily noted.</li>
	<li>The number of follow-up tests needed may be fewer.</li>
	<li>Fewer repeat images may be needed, reducing exposure to radiation.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How often should I get a mammogram?",
      content: `

    <div class="answer"><p>The United States Preventive Services Task Force (USPSTF) recommends:</p>

<ul>
	<li>Women ages 50 to 74 years should get a mammogram every 2 years.</li>
	<li>Women younger than age 50 should talk to a doctor about when to start and how often to have a mammogram.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can mammograms show?",
      content: `

    <div class="answer"><p>The radiologist will look at your x-rays for breast changes that do not look normal and for differences in each breast. He or she will compare your past mammograms with your most recent one to check for changes. The doctor will also look for lumps and calcifications.</p>

<ul type="disc">
	<li><strong>Lump or mass.</strong> The size, shape, and edges of a lump sometimes can give doctors information about whether or not it may be cancer. On a mammogram, a growth that is benign often looks smooth and round with a clear, defined edge. Breast cancer often has a jagged outline and an irregular shape.</li>
	<li><strong>Calcification.</strong> A calcification is a deposit of the mineral calcium in the breast tissue. Calcifications appear as small white spots on a mammogram. There are two types:
	<ul type="circle">
		<li><strong><em>Macro</em>calcifications</strong> are large calcium deposits often caused by aging. These usually are not a sign of cancer.</li>
		<li><strong><em>Micro</em>calcifications</strong> are tiny specks of calcium that may be found in an area of rapidly dividing cells.</li>
	</ul>
	</li>
</ul>

<p>If calcifications are grouped together in a certain way, it may be a sign of cancer. Depending on how many calcium specks you have, how big they are, and what they look like, your doctor may suggest that you have other tests. Calcium in the diet does <em>not</em> create calcium deposits, or calcifications, in the breast.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if my screening mammogram shows a problem?",
      content: `

    <div class="answer"><p>If you have a screening test result that suggests cancer, your doctor must find out whether it is due to cancer or to some other cause. Your doctor may ask about your personal and family medical history. You may have a physical exam. Your doctor also may order some of these tests:</p>

<ul type="disc">
	<li><strong>Diagnostic mammogram</strong>, to focus on a specific area of the breast</li>
	<li><strong>Ultrasound</strong>, an imaging test that uses sound waves to create a picture of your breast. The pictures may show whether a lump is solid or filled with fluid. A cyst is a fluid-filled sac. Cysts are not cancer. But a solid mass may be cancer. After the test, your doctor can store the pictures on video or print them out. This exam may be used along with a mammogram.</li>
	<li><strong>Magnetic resonance imaging (MRI)</strong>, which uses a powerful magnet linked to a computer. MRI makes detailed pictures of breast tissue. Your doctor can view these pictures on a monitor or print them on film. MRI may be used along with a mammogram.</li>
	<li><strong>Biopsy</strong>, a test in which fluid or tissue is removed from your breast to help find out if there is cancer. Your doctor may refer you to a surgeon or to a doctor who is an expert in breast disease for a biopsy.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Where can I get a high-quality mammogram?",
      content: `

    <div class="answer"><p>Women can get high-quality mammograms in breast clinics, hospital radiology departments, mobile vans, private radiology offices, and doctors' offices. The Food and Drug Administration (FDA) certifies mammography facilities that meet strict quality standards for their x-ray machines and staff and are inspected every year. You can ask your doctor or the staff at the mammography center about FDA certification before making your appointment. A list of <a href="http://www.fda.gov/Radiation-EmittingProducts/MammographyQualityStandardsActandProgram/ConsumerInformation/ucm113962.htm">FDA-certified facilities</a> can be found on the Internet.</p>

<p>Your doctor, local medical clinic, or local or state health department can tell you where to get no-cost or low-cost mammograms. You can also call the <a href="http://www.cancer.gov">National Cancer Institute's</a> Cancer Information Service toll free at 800-422-6237.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if I have breast implants?",
      content: `

    <div class="answer"><p>Women with breast implants should also have mammograms. A woman who had an implant after breast cancer surgery in which the entire breast was removed (mastectomy) should ask her doctor whether she needs a mammogram of the reconstructed breast.</p>

<p>If you have breast implants, be sure to tell your mammography facility that you have them when you make your appointment. The technician and radiologist must be experienced in x-raying patients with breast implants. Implants can hide some breast tissue, making it harder for the radiologist to see a problem when looking at your mammogram. To see as much breast tissue as possible, the x-ray technician will gently lift the breast tissue slightly away from the implant and take extra pictures of the breasts.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I get ready for my mammogram?",
      content: `

    <div class="answer"><p>First, check with the place you are having the mammogram for any special instructions you may need to follow before you go. Here are some general guidelines to follow:</p>

<ul>
	<li>If you are still having menstrual periods, try to avoid making your mammogram appointment during the week before your period. Your breasts will be less tender and swollen. The mammogram will hurt less and the picture will be better.</li>
	<li>If you have breast implants, be sure to tell your mammography facility that you have them when you make your appointment.</li>
	<li>Wear a shirt with shorts, pants, or a skirt. This way, you can undress from the waist up and leave your shorts, pants, or skirt on when you get your mammogram.</li>
	<li>Don't wear any deodorant, perfume, lotion, or powder under your arms or on your breasts on the day of your mammogram appointment. These things can make shadows show up on your mammogram.</li>
	<li>If you have had mammograms at another facility, have those x-ray films sent to the new facility so that they can be compared to the new films.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are there any problems with mammograms?",
      content: `

    <div class="answer"><p>Although they are not perfect, mammograms are the best method to find breast changes that cannot be felt. If your mammogram shows a breast change, sometimes other tests are needed to better understand it. Even if the doctor sees something on the mammogram, it does not mean it is cancer.</p>

<p>As with any medical test, mammograms have limits. These limits include:</p>

<ul>
	<li><strong>They are only part of a complete breast exam.</strong> Your doctor also should do a clinical breast exam. If your mammogram finds something abnormal, your doctor will order other tests.</li>
	<li><strong>Finding cancer does not always mean saving lives.</strong> Even though mammography can detect tumors that cannot be felt, finding a small tumor does not always mean that a woman's life will be saved. Mammography may not help a woman with a fast growing cancer that has already spread to other parts of her body before being found.</li>
	<li><strong>False negatives can happen.</strong> This means everything may look normal, but cancer is actually present. False negatives don't happen often. Younger women are more likely to have a false negative mammogram than are older women. The dense breasts of younger women make breast cancers harder to find in mammograms.</li>
	<li><strong>False positives can happen.</strong> This is when the mammogram results look like cancer is present, even though it is not. False positives are more common in younger women, women who have had breast biopsies, women with a family history of breast cancer, and women who are taking estrogen, such as menopausal hormone therapy.</li>
	<li><strong>Mammograms (as well as dental x-rays and other routine x-rays) use very small doses of radiation.</strong> The risk of any harm is very slight, but repeated x-rays could cause cancer. The benefits nearly always outweigh the risk. Talk to your doctor about the need for each x-ray. Ask about shielding to protect parts of the body that are not in the picture. You should always let your doctor and the technician know if there is any chance that you are pregnant.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about mammograms?",
      content: `

    <div class="answer"><p>For more information about mammograms, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cancer.org/index" class="external-link external-popup" target="_blank"><strong>American Cancer Society</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong> 800-227-2345 (TDD: 866-228-4327)</li>
	<li><a href="http://www.cms.hhs.gov"><strong>Centers for Medicare and Medicaid Services, HHS</strong></a></li>
	<li><strong>Phone:</strong> 800-633-4227 (TDD: 877-486-2048)</li>
	<li><a href="http://www.cdc.gov/cancer/nbccedp/"><strong>National Breast and Cervical Cancer Early Detection Program</strong></a><br>
	<strong>Phone:</strong> 800-232-4636 (TDD: 888-232-6348)</li>
	<li><a href="http://www.cancer.gov/"><strong>National Cancer Institute, NIH, HHS</strong></a><br>
	<strong>Phone:</strong> 800-422-6237</li>
	<li><a href="http://www.komen.org" class="external-link external-popup" target="_blank"><strong>Susan G. Komen for the Cure</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong> 877-465-6636</li>
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
