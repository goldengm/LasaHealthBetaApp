import React, { Component } from "react";
import { theme, styles } from "../constants";

import Svg001Flower from "../constants/svgUserAvatarComponants/001Flower";
import Svg001Man from "../constants/svgUserAvatarComponants/001Man";
import Svg001Spring from "../constants/svgUserAvatarComponants/001Spring";
import Svg002Hand from "../constants/svgUserAvatarComponants/002Hand";
import Svg002OldMan from "../constants/svgUserAvatarComponants/002OldMan";
import Svg002PlantPot from "../constants/svgUserAvatarComponants/002PlantPot";
import Svg003PlantPot from "../constants/svgUserAvatarComponants/003PlantPot";
import Svg003Woman from "../constants/svgUserAvatarComponants/003Woman";
import Svg004Bloom from "../constants/svgUserAvatarComponants/004Bloom";
import Svg004PlantPot from "../constants/svgUserAvatarComponants/004PlantPot";
import Svg004Woman from "../constants/svgUserAvatarComponants/004Woman";
import Svg005FlowerPot from "../constants/svgUserAvatarComponants/005FlowerPot";
import Svg005Woman from "../constants/svgUserAvatarComponants/005Woman";
import Svg006FlowerPot from "../constants/svgUserAvatarComponants/006FlowerPot";
import Svg006Flowers from "../constants/svgUserAvatarComponants/006Flowers";
import Svg006Man from "../constants/svgUserAvatarComponants/006Man";
import Svg007FlowerPot from "../constants/svgUserAvatarComponants/007FlowerPot";
import Svg007Man from "../constants/svgUserAvatarComponants/007Man";
import Svg007Spring from "../constants/svgUserAvatarComponants/007Spring";
import Svg008FlowerPot from "../constants/svgUserAvatarComponants/008FlowerPot";
import Svg008Spring from "../constants/svgUserAvatarComponants/008Spring";
import Svg008Woman from "../constants/svgUserAvatarComponants/008Woman";
import Svg009Flower from "../constants/svgUserAvatarComponants/009Flower";
import Svg009Flowers from "../constants/svgUserAvatarComponants/009Flowers";
import Svg009Woman from "../constants/svgUserAvatarComponants/009Woman";
import Svg010Flower from "../constants/svgUserAvatarComponants/010Flower";
import Svg010Flowers from "../constants/svgUserAvatarComponants/010Flowers";
import Svg010Woman from "../constants/svgUserAvatarComponants/010Woman";
import Svg011Flower from "../constants/svgUserAvatarComponants/011Flower";
import Svg011Man from "../constants/svgUserAvatarComponants/011Man";
import Svg011Spring from "../constants/svgUserAvatarComponants/011Spring";
import Svg012Flower from "../constants/svgUserAvatarComponants/012Flower";
import Svg012FlowerPot from "../constants/svgUserAvatarComponants/012FlowerPot";
import Svg012Man from "../constants/svgUserAvatarComponants/012Man";
import Svg013Flower from "../constants/svgUserAvatarComponants/013Flower";
import Svg013Flowers from "../constants/svgUserAvatarComponants/013Flowers";
import Svg013Man from "../constants/svgUserAvatarComponants/013Man";
import Svg014Flower from "../constants/svgUserAvatarComponants/014Flower";
import Svg014Flowers from "../constants/svgUserAvatarComponants/014Flowers";
import Svg014Woman from "../constants/svgUserAvatarComponants/014Woman";
import Svg015Flower from "../constants/svgUserAvatarComponants/015Flower";
import Svg015Flowers from "../constants/svgUserAvatarComponants/015Flowers";
import Svg015Woman from "../constants/svgUserAvatarComponants/015Woman";
import Svg016Flower from "../constants/svgUserAvatarComponants/016Flower";
import Svg016Flowers from "../constants/svgUserAvatarComponants/016Flowers";
import Svg016Man from "../constants/svgUserAvatarComponants/016Man";
import Svg017Flower from "../constants/svgUserAvatarComponants/017Flower";
import Svg017Flowers from "../constants/svgUserAvatarComponants/017Flowers";
import Svg017OldMan from "../constants/svgUserAvatarComponants/017OldMan";
import Svg018Bird from "../constants/svgUserAvatarComponants/018Bird";
import Svg018Flower from "../constants/svgUserAvatarComponants/018Flower";
import Svg018Woman from "../constants/svgUserAvatarComponants/018Woman";
import Svg019Flower from "../constants/svgUserAvatarComponants/019Flower";
import Svg019Flowers from "../constants/svgUserAvatarComponants/019Flowers";
import Svg019Woman from "../constants/svgUserAvatarComponants/019Woman";
import Svg020Flowers from "../constants/svgUserAvatarComponants/020Flowers";
import Svg020Man from "../constants/svgUserAvatarComponants/020Man";
import Svg020PlantPot from "../constants/svgUserAvatarComponants/020PlantPot";
import Svgindex from "../constants/svgUserAvatarComponants/index";

export const userAvatarDirList = {
  Svg001Flower: Svg001Flower,
  Svg001Man: Svg001Man,
  Svg001Spring: Svg001Spring,
  Svg002Hand: Svg002Hand,
  Svg002OldMan: Svg002OldMan,
  Svg002PlantPot: Svg002PlantPot,
  Svg003PlantPot: Svg003PlantPot,
  Svg003Woman: Svg003Woman,
  Svg004Bloom: Svg004Bloom,
  Svg004PlantPot: Svg004PlantPot,
  Svg004Woman: Svg004Woman,
  Svg005FlowerPot: Svg005FlowerPot,
  Svg005Woman: Svg005Woman,
  Svg006FlowerPot: Svg006FlowerPot,
  Svg006Flowers: Svg006Flowers,
  Svg006Man: Svg006Man,
  Svg007FlowerPot: Svg007FlowerPot,
  Svg007Man: Svg007Man,
  Svg007Spring: Svg007Spring,
  Svg008FlowerPot: Svg008FlowerPot,
  Svg008Spring: Svg008Spring,
  Svg008Woman: Svg008Woman,
  Svg009Flower: Svg009Flower,
  Svg009Flowers: Svg009Flowers,
  Svg009Woman: Svg009Woman,
  Svg010Flower: Svg010Flower,
  Svg010Flowers: Svg010Flowers,
  Svg010Woman: Svg010Woman,
  Svg011Flower: Svg011Flower,
  Svg011Man: Svg011Man,
  Svg011Spring: Svg011Spring,
  Svg012Flower: Svg012Flower,
  Svg012FlowerPot: Svg012FlowerPot,
  Svg012Man: Svg012Man,
  Svg013Flower: Svg013Flower,
  Svg013Flowers: Svg013Flowers,
  Svg013Man: Svg013Man,
  Svg014Flower: Svg014Flower,
  Svg014Flowers: Svg014Flowers,
  Svg014Woman: Svg014Woman,
  Svg015Flower: Svg015Flower,
  Svg015Flowers: Svg015Flowers,
  Svg015Woman: Svg015Woman,
  Svg016Flower: Svg016Flower,
  Svg016Flowers: Svg016Flowers,
  Svg016Man: Svg016Man,
  Svg017Flower: Svg017Flower,
  Svg017Flowers: Svg017Flowers,
  Svg017OldMan: Svg017OldMan,
  Svg018Bird: Svg018Bird,
  Svg018Flower: Svg018Flower,
  Svg018Woman: Svg018Woman,
  Svg019Flower: Svg019Flower,
  Svg019Flowers: Svg019Flowers,
  Svg019Woman: Svg019Woman,
  Svg020Flowers: Svg020Flowers,
  Svg020Man: Svg020Man,
  Svg020PlantPot: Svg020PlantPot,
  Svgindex: Svgindex,
};

export const userAvatarDir = (Name, props = {}) => {
  const ChosenUserAvatarComponant = userAvatarDirList[Name];
  return (
    <ChosenUserAvatarComponant
      width={"100%"}
      height={"100%"}
      viewBox="0 0 512 512"
      fill={theme.COLORS.BLACK}
      {...props}
    />
  );
};
