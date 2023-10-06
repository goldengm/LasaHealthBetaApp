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

export function utCancerPage({ navigation, ...rest }) {
  const condName = "Uterine Cancer";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Uterinecancer.jpg?VersionId=qtwQKDf_Ur2UCz1iQyEUjKO7cX2Muvkx";
  const condDescription =
    "Cancer is a disease in which certain body cells don't function right, divide very fast, and produce too much tissue that forms a tumor. Cancer of the uterus is cancer in the womb, the pear-shaped organ where a baby grows during a woman's pregnancy. There are different types of uterine cancers. Two types are endometrial cancer and uterine sarcomas. In the United States, endometrial cancer is a common cancer of the female reproductive system. This type of cancer happens when cancer begins in the tissue lining the uterus (endometrium). Uterine sarcomas occur when cancer grows in the muscles or other supporting tissues in the uterus. Uterine sarcomas account for only a small portion of cancers of the uterus.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Uterinecancer.jpg?VersionId=qtwQKDf_Ur2UCz1iQyEUjKO7cX2Muvkx"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Uterine cancer</h1>  -->
            <p><strong>Cancer of the uterus (uterine cancer) is cancer in the womb, </strong>where a baby grows during a woman's pregnancy. But uterine cancer usually happens after menopause. Some women who get uterine cancer have certain risk factors, or things in their life that cause them to have a higher chance of getting this disease.</p>

<p>Learn more about uterine cancer from the <a href="https://www.cdc.gov/cancer/uterine/">Centers for Disease Control and Prevention</a>.</p>

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
      title: "What is uterine cancer?",
      content: `

    <div class="answer"><p>Cancer is a disease in which certain body cells don't function right, divide very fast, and produce too much tissue that forms a tumor. Cancer of the uterus is cancer in the womb, the pear-shaped organ where a baby grows during a woman's pregnancy. There are different types of uterine cancers. Two types are <em>endometrial cancer</em> and <em>uterine sarcomas</em>. In the United States, endometrial cancer is a common cancer of the female reproductive system. This type of cancer happens when cancer begins in the tissue lining the uterus (endometrium). Uterine sarcomas occur when cancer grows in the muscles or other supporting tissues in the uterus. Uterine sarcomas account for only a small portion of cancers of the uterus.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why should I be concerned about uterine cancer?",
      content: `

    <div class="answer"><p>Some women who get uterine cancer have certain risk factors, or things in their life that cause them to have a higher chance of getting this disease. But there are women who get uterine cancer who do not have any of these high risk factors. Uterine cancer usually occurs after menopause. But it may also occur around the time that menopause begins. Abnormal vaginal bleeding is the most common symptom of uterine cancer. Bleeding may start as a watery, blood-streaked flow that gradually contains more blood. Women should not assume that abnormal vaginal bleeding is part of menopause. If you have abnormal vaginal bleeding after menopause, talk with your health care provider.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about uterine cancer?",
      content: `

    <div class="answer"><p>For more information about uterine cancer, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.cancer.org/" class="external-link external-popup" target="_blank">American Cancer Society <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone:</strong>&nbsp;800-227-2345 (TDD: 866-228-4327)</li>
	<li><a href="http://www.acog.org/" class="external-link external-popup" target="_blank"><strong>American Congress&nbsp;of Obstetricians and Gynecologists</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;202-638-5577</li>
	<li><a href="http://www.foundationforwomenscancer.org/" class="external-link external-popup" target="_blank"><strong>Foundation for Women's Cancer</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;800-444-4441 or 312-578-1439</li>
	<li><a href="http://www.cancer.gov/"><strong>National Cancer Institute, NIH, HHS</strong></a><br>
	<strong>Phone:</strong>&nbsp;800-422-6237</li>
	<li><strong><a href="http://www.cdc.gov/cancer/knowledge/index.htm" target="_blank" title="CDC - Inside Knowledge Campaign">Inside Knowledge: Get the Facts About Gynecologic Cancer, Centers for Disease Control and Prevention (CDC), HHS</a></strong><br>
	<strong>Phone:</strong>&nbsp;800-232-4636</li>
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
