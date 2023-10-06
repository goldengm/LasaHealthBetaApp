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

export function eatingPage({ navigation, ...rest }) {
  const condName = "Eating Discorders";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Eatingdisorders.jpg?VersionId=xztQsoELtKITwQz7oETEilw8EHpL8zjx";
  const condDescription =
    "Eating disorders, such as anorexia, bulimia, and binge eating disorder, are serious mental health conditions that can happen to anyone but are much more common in women. People with eating disorders eat too little or too much. Extreme eating or dieting is not a normal or healthy part of being a woman. Some eating disorders also involve people making themselves throw up or taking laxatives to get rid of the food, or extreme exercise to burn off the calories. All eating disorders are dangerous if left untreated.";
  const condHeader = `<article role="article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Eatingdisorders.jpg?VersionId=xztQsoELtKITwQz7oETEilw8EHpL8zjx"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Eating disorders</h1>  -->
            <p><strong>Eating disorders, such as anorexia, bulimia, and binge eating disorder, are serious mental health conditions that can happen to anyone but are much more common in women.</strong> People with eating disorders eat too little or too much. Extreme eating or dieting is not a normal or healthy part of being a woman. Some eating disorders also involve people making themselves throw up or taking laxatives to get rid of the food, or extreme exercise to burn off the calories. All eating disorders are dangerous if left untreated.</p>

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
