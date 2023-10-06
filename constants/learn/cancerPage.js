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

export function cancerPage({ navigation, ...rest }) {
  const condName = "Cancer";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Cancer.jpg?VersionId=TWgoM272tO6e3QVncT8lAIQOYMzWdtLQ";
  const condDescription =
    "Cancer is a group of diseases that can begin in different places in the body. All women are at risk of cancer, but some groups are at higher risk than others. Our genes, lifestyle, and the environment around us may raise or lower our risk of getting cancer.";
  const condHeader = `<div class="usa-layout-docs__main desktop:grid-col-9">
                    
  <h1 class="margin-0"><span>Cancer</span>
</h1>  -->

<div id="block-owh-uswds-content" class="block block-system block-system-main-block">
  
    
      <article role="article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Cancer.jpg?VersionId=TWgoM272tO6e3QVncT8lAIQOYMzWdtLQ"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Cancer</h1>  -->
            <p><strong>Cancer is a group of diseases that can begin in different places in the body. </strong>All women are at risk of cancer, but some groups are at higher risk than others. Our genes, lifestyle, and the environment around us may raise or lower our risk of getting cancer.</p>

<p>Content in this section is reproduced from the Centers for Disease Control and Prevention.</p>

                    </div>
    </div>

  </div>

</article>

  </div>
<div class="views-element-container block block-views block-views-blocklanding-page-buckets-block-1" id="block-views-block-landing-page-buckets-block-1">
  
    
      <div><div class="js-view-dom-id-4aeb0c7fe59dee59ef7b66cf69e4c19bf0d2e936d5daf3f7964e701756a34c15">
  
  
  

  
  
  

      <div class="landing-page-bucket">  
  
  
      </div>
      </div>
      
        </div>
      
      
                                          
                                  </div>`; //  this is html
  const condQA = [
    {
      title: "Breast cancer",
      content: `
      
      
      
      <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/styles/large/public/bucket-images/Breastcancer.jpg?VersionId=AQKlQNO3dt_rbEgliJcBgXAWfiDKhEzO&amp;itok=lSd2stJ6" width="480" height="252" alt="" loading="lazy">


<ul><li>  <div class="paragraph paragraph--type--bucket-subtopic paragraph--view-mode--default">
          
    <a href="/cancer/breast-cancer/breast-cancer-diagnosis">    Breast cancer diagnosis
    </a>
      </div>
</li><li>  <div class="paragraph paragraph--type--bucket-subtopic paragraph--view-mode--default">
          
    <a href="/cancer/breast-cancer/breast-cancer-treatment">    Breast cancer treatment
    </a>
      </div>
</li></ul><a href="/cancer/breast-cancer" hreflang="en">View more</a></div>
    <div class="landing-page-bucket">
  `,
    },
    {
      title: "Cervical cancer",
      content: `
      
      
      
      <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/styles/large/public/bucket-images/Cervicalcancer.jpg?VersionId=XyoxvzkZtrK0GyRbkEBTeI.CEAOIBUHI&amp;itok=ZYJBK6gg" width="480" height="252" alt="" loading="lazy">


<ul><li>  <div class="paragraph paragraph--type--bucket-subtopic paragraph--view-mode--default">
          
    <a href="/cancer/cervical-cancer/cervical-cancer-risk-factors">    Cervical cancer risk factors
    </a>
      </div>
</li><li>  <div class="paragraph paragraph--type--bucket-subtopic paragraph--view-mode--default">
          
    <a href="/cancer/cervical-cancer/cervical-cancer-prevention">    Cervical cancer prevention
    </a>
      </div>
</li></ul><a href="/cancer/cervical-cancer" hreflang="en">View more</a></div>
    <div class="landing-page-bucket">
  `,
    },
    {
      title: "Ovarian cancer",
      content: `
      
      
      
      <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/styles/large/public/bucket-images/Ovariancancer.jpg?VersionId=i0z_KhmuVi2buK4SB2UFOEIwbsc6CHDy&amp;itok=FePWKd_3" width="480" height="312" alt="" loading="lazy">


<ul><li>  <div class="paragraph paragraph--type--bucket-subtopic paragraph--view-mode--default">
          
    <a href="/cancer/ovarian-cancer/ovarian-cancer-symptoms">     Ovarian cancer symptoms
    </a>
      </div>
</li><li>  <div class="paragraph paragraph--type--bucket-subtopic paragraph--view-mode--default">
          
    <a href="/cancer/ovarian-cancer/ovarian-cancer-treatment">    Ovarian cancer treatment
    </a>
      </div>
</li></ul><a href="/cancer/ovarian-cancer" hreflang="en">View more</a></div>
    <div class="landing-page-bucket">
  
  `,
    },
    {
      title: "Uterine cancer",
      content: `
      
      
      
      <img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/styles/large/public/bucket-images/Uterinecancer.jpg?VersionId=foCt.UuFxvIDQ6yQMZwMu1SKldKoQD80&amp;itok=59dZXEcG" width="480" height="252" alt="" loading="lazy">


<ul><li>  <div class="paragraph paragraph--type--bucket-subtopic paragraph--view-mode--default">
          
    <a href="/cancer/uterine-cancer/#1">    Types of uterine cancer
    </a>
      </div>
</li><li>  <div class="paragraph paragraph--type--bucket-subtopic paragraph--view-mode--default">
          
    <a href="/cancer/uterine-cancer/#2">    Who gets it
    </a>
      </div>
</li></ul><a href="/cancer/uterine-cancer" hreflang="en">View more</a></div>

    

  
  
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
