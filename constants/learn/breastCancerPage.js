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

export function breastCancerPage({ navigation, ...rest }) {
  const condName = "Breast Cancer";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Breastcancer.jpg?VersionId=gH3sfkA4wfe9h9CYTTj8TpI9I3f9Plkm";
  const condDescription =
    "Breast cancer is a disease in which cells in the breast grow out of control. There are different kinds of breast cancer. The kind of breast cancer depends on which cells in the breast turn into cancer. \n Breast cancer can begin in different parts of the breast. A breast is made up of three main parts: lobules, ducts, and connective tissue. The lobules are the glands that produce milk. The ducts are tubes that carry milk to the nipple. The connective tissue (which consists of fibrous and fatty tissue) surrounds and holds everything together. Most breast cancers begin in the ducts or lobules. \n Breast cancer can spread outside the breast through blood vessels and lymph vessels. When breast cancer spreads to other parts of the body, it is said to have metastasized.";
  const condHeader = `<div class="col-md-12 splash-col"><div class="w-md-col6 float-md-right ml-md-3"><div class="card mb-3"><div class="card-body bg-white"><p><a href="/cancer/breast/images/breast2_566_838.jpg" target="_blank" rel="noopener noreferrer">
  
  <!--   <img loading="lazy" class="alignnone" src="/cancer/breast/images/breast2_200_296.jpg" alt="A diagram of the anterior view of the breast, showing the parts of the breast." width="200" height="296"><span class="sr-only">image icon</span><span class="fi cdc-icon-image x16 fill-image" aria-hidden="true"></span><span class="file-details"></span></a>&nbsp;<a href="/cancer/breast/images/breast1_566_838.jpg" target="_blank" rel="noopener noreferrer">   -->
 
  <!--   <img loading="lazy" class="alignnone" src="/cancer/breast/images/breast1_200_296.jpg" alt="A diagram of the cross-section view of the breast, showing the parts of the breast." width="200" height="296"><span class="sr-only">image icon</span><span class="fi cdc-icon-image x16 fill-image" aria-hidden="true"></span><span class="file-details"></span></a></p>   -->

  <!--   <p>Click to see larger diagrams of the <a href="/cancer/breast/images/breast2_566_838.jpg" target="_blank" rel="noopener noreferrer">anterior view<span class="sr-only">image icon</span><span class="fi cdc-icon-image x16 fill-image" aria-hidden="true"></span><span class="file-details"></span></a> and <a href="/cancer/breast/images/breast1_566_838.jpg" target="_blank" rel="noopener noreferrer">cross-section view<span class="sr-only">image icon</span><span class="fi cdc-icon-image x16 fill-image" aria-hidden="true"></span><span class="file-details"></span></a> of the breast.</p>   -->



  </div></div></div><p><em>Breast cancer</em> is a disease in which cells in the breast grow out of control. There are different kinds of breast cancer. The kind of breast cancer depends on which cells in the breast turn into cancer.</p>
  <p>Breast cancer can begin in different parts of the breast. A breast is made up of three main parts: lobules, ducts, and connective tissue. The lobules are the glands that produce milk. The ducts are tubes that carry milk to the nipple. The connective tissue (which consists of fibrous and fatty tissue) surrounds and holds everything together. Most breast cancers begin in the ducts or lobules.</p>
  <p>Breast cancer can spread outside the breast through blood vessels and lymph vessels. When breast cancer spreads to other parts of the body, it is said to have metastasized.</p></div>
`; //  this is html
  const condQA = [
    {
      title: "Kinds of Breast Cancer",
      content: `
  <p>The most common kinds of breast cancer are—</p>
  <ul class="bullet-list">
  <li><strong>Invasive ductal carcinoma.</strong> The cancer cells begin in the ducts and then grow outside the ducts into other parts of the breast tissue. Invasive cancer cells can also spread, or metastasize, to other parts of the body.</li>
  <li><strong>Invasive lobular carcinoma.</strong> Cancer cells begin in the lobules and then spread from the lobules to the breast tissues that are close by. These invasive cancer cells can also spread to other parts of the body.</li>
  </ul>
  <p>There are several other less common kinds of breast cancer, such as <a href="https://www.cancer.gov/types/breast/paget-breast-fact-sheet" class="tp-link-policy" data-domain-ext="gov">Paget’s disease,<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a> medullary, mucinous, and <a href="https://www.cancer.gov/types/breast/ibc-fact-sheet" class="tp-link-policy" data-domain-ext="gov">inflammatory breast cancer.<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a></p>
  <p>Ductal carcinoma <em>in situ</em> (DCIS) is a breast disease that may lead to invasive breast cancer. The cancer cells are only in the lining of the ducts, and have not spread to other tissues in the breast.</p>
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
