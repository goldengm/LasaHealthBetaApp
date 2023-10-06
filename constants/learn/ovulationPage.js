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

export function ovulationPage({ navigation, ...rest }) {
  const condName = "Ovulation";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Weightfertilityandpregnancy.jpg?VersionId=VIXjqCN3eBlVRNtRLzBdBqJB9p6lxNxg";
  const condDescription =
    "Knowing the days you are most likely to be fertile can increase your chance of getting pregnant. The typical menstrual cycle is 28 days long, but each woman is different. There are about 6 days during each menstrual cycle when you can get pregnant. This is called your fertile window. Use the calculator to see which days you are most likely to be fertile. Talk to your doctor or nurse to plan for pregnancy and find birth control that works for you. \n Fertile windows are different for every woman and can be different from month to month in the same woman. Learn more about your fertility if you are trying to get pregnant.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
                <div class="heading-description">
            <!-- <h1>Ovulation calculator</h1>  -->
            <p><strong>Knowing the days you are most likely to be fertile can increase your chance of getting pregnant.</strong> The typical menstrual cycle is 28 days long, but each woman is different. There are about 6 days during each menstrual cycle when you can get pregnant. This is called your fertile window. Use the calculator to see which days you are most likely to be fertile.</p>

                    </div>
    </div>

<div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
      </div>
</div>
    </div>
  </div>

</article>`; //  this is html
  const condQA = [];
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
