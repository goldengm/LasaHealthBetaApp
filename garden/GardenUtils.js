import React from 'react';
import {Dimensions} from 'react-native';
import {theme} from '../constants';
import {isNumber, isPlainObject, set as loSet} from 'lodash';
import tinycolor from 'tinycolor2';

// import {getOS} from '../shared/PlatformUtils';

// const {width, height} = Dimensions.get('screen');
// const iosPlatform = () => getOS() == 'ios';

// values of colorByPath can be falsy to no-op
function colorizeLottie(json, colorByPath) {
  Object.entries(colorByPath).forEach(([ind, colorObj]) => {
    const color = colorObj['color'];
    const path = colorObj['path'];
    // incase undefined/null/falsy is passed to color
    if (!color) return;
    const rgbPercentages = tinycolor(color).toPercentageRgb();
    const rFraction = parseInt(rgbPercentages.r, 10) / 100;
    const gFraction = parseInt(rgbPercentages.g, 10) / 100;
    const bFraction = parseInt(rgbPercentages.b, 10) / 100;

    const pathParts = path.split('.');
    json = loSet(json, [...pathParts, 0], rFraction);
    json = loSet(json, [...pathParts, 1], gFraction);
    json = loSet(json, [...pathParts, 2], bFraction);
  });

  return json;
}

// get only paths that have parent of c.k
function isCKPath(path) {
  const lastIndexC = path.lastIndexOf('c');
  const lastIndexK = path.lastIndexOf('k');
  if (lastIndexC === lastIndexK - 1) {
    return true;
  } else {
    return false;
  }
}
function isColorArray(value) {
  return Array.isArray(value) && value.length === 4 && value.every(isNumber);
}

function walk(obj) {
  const collection = []; //  WalkCollection
  walkHelper(obj, [], [], collection);
  return collection;
}
function walkHelper(obj, parentPath, nmPath, collection) {
  if (Array.isArray(obj) || isPlainObject(obj)) {
    // continue
  } else {
    return;
  }
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    const curPath = [...parentPath, key];
    if (isCKPath(curPath)) {
      if (isColorArray(val)) {
        const color = tinycolor
          .fromRatio({r: val[0], g: val[1], b: val[2]})
          .setAlpha(val[3]);
        collection.push({
          // color index
          nmPath: nmPath.join('.'),
          path: curPath.join('.'),
          color: color.toHexString(),
        });
      }
    }
    const nextNmPath = val.hasOwnProperty('nm') ? [...nmPath, val.nm] : nmPath;
    walkHelper(val, [...parentPath, key], nextNmPath, collection);
  }
}

export function fadeLottieToBlack(json) {
  let initialColors = walk(json);
  for (let i = 0; i < initialColors.length; i++) {
    initialColors[i].color = theme.COLORS.BLACK;
  }
  const colorizedLotiJsonStr = colorizeLottie(json, initialColors);
  return colorizedLotiJsonStr;
}

export function fadeLottieToGrey(json) {
  let initialColors = walk(json);
  for (let i = 0; i < initialColors.length; i++) {
    initialColors[i].color = theme.COLORS.ICON;
  }
  const colorizedLotiJsonStr = colorizeLottie(json, initialColors);
  return colorizedLotiJsonStr;
}

export function fadeLottieToGold(json) {
  let initialColors = walk(json);
  for (let i = 0; i < initialColors.length; i++) {
    initialColors[i].color = theme.COLORS.LIGHT_WARNING;
  }
  const colorizedLotiJsonStr = colorizeLottie(json, initialColors);
  return colorizedLotiJsonStr;
}

export function fadeLottieToPartialGold(json) {
  let initialColors = walk(json);
  for (let i = 0; i < initialColors.length; i++) {
    if (i % 2 == 1) {
      initialColors[i].color = theme.COLORS.LIGHT_WARNING;
    }
  }
  const colorizedLotiJsonStr = colorizeLottie(json, initialColors);
  return colorizedLotiJsonStr;
}
