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

export function healthyWeightPage({ navigation, ...rest }) {
  const condName = "Healthy Weight";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Weightandobesity.jpg?VersionId=OeqieYq01fo58MV6c72Fl2ZYYx4y5ZB3";
  const condDescription =
    "What is a healthy weight? The answer is different for everyone. But it's important to know what a healthy weight is for you. Check out our top questions and answers on weight, weight gain, and weight loss. And talk to your doctor or nurse about your weight goals. Women often gain and lose weight differently, so the steps you need to take to lose weight may be different from the steps someone else needs to take.";
  const condHeader = `<article role="article">

  
    

  
  <div>
    
<div class="landing-page-header">
                <div class="heading-description">
            <!-- <h1>Healthy Weight</h1>  -->
            <p><strong>What is a healthy weight? The answer is different for everyone.</strong> But it's important to know what a healthy weight is for you. Check out our top questions and answers on weight, weight gain, and weight loss. And talk to your doctor or nurse about your weight goals. Women often gain and lose weight differently, so the steps you need to take to lose weight may be different from the steps someone else needs to take.</p>

                        <ul class="questions">
                                    <li><a href="/healthy-weight/weight-and-obesity#1">How do I know if I’m overweight or obese?</a></li>
                                    <li><a href="/healthy-weight/weight-and-obesity#2">What causes women to become overweight or obese?</a></li>
                                    <li><a href="/healthy-weight/weight-and-obesity#7">Does it matter where on my body I carry weight?</a></li>
                            </ul>
                    </div>
    </div>

  </div>

</article>`; //  this is html
  const condQA = [];
  const oldHtml = ``;
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
