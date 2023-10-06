import React from 'react';
// import * as Font from "expo-font";
// import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import {Icon} from 'react-native-elements';
// import VectorImage from "react-native-vector-image";
import {iconsDirLineal, iconsDirSolid, iconsDir} from '../constants/iconsDir';

class IconExtra extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    this.setState({fontLoaded: true});
  }

  render() {
    const {name, family, type, testID, ...rest} = this.props;
    const fontType = family ? family : type;

    if (name && this.state.fontLoaded) {
      if (name && fontType) {
        if (fontType.toLowerCase() === 'amiesolid') {
          if (Object.keys(iconsDir).includes(name)) {
            return iconsDirSolid(name, testID, rest);
          } else {
            return null;
          }
        }
        if (fontType.toLowerCase() === 'amielineal') {
          if (Object.keys(iconsDir).includes(name)) {
            return iconsDirLineal(name, testID, rest);
          } else {
            return null;
          }
        }
        return <Icon testID={testID} name={name} type={fontType} {...rest} />;
      }

      return <Icon testID={testID} name={name} type="ionicon" />;
    }
    return null;
  }
}

export default IconExtra;
