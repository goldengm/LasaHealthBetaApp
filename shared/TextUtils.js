import React from 'react';
import {View} from 'react-native';
import {Text, Slider, LinearProgress} from 'react-native-elements';
import {styles, theme} from '../constants';

const SUPERSCRIPTS = {
  0: '⁰',
  1: '¹',
  2: '²',
  3: '³',
  4: '⁴',
  5: '⁵',
  6: '⁶',
  7: '⁷',
  8: '⁸',
  9: '⁹',
  '+': '⁺',
  '-': '⁻',
  ' ': ' ',
  a: 'ᵃ',
  b: 'ᵇ',
  c: 'ᶜ',
  d: 'ᵈ',
  e: 'ᵉ',
  f: 'ᶠ',
  g: 'ᵍ',
  h: 'ʰ',
  i: 'ⁱ',
  j: 'ʲ',
  k: 'ᵏ',
  l: 'ˡ',
  m: 'ᵐ',
  n: 'ⁿ',
  o: 'ᵒ',
  p: 'ᵖ',
  r: 'ʳ',
  s: 'ˢ',
  t: 'ᵗ',
  u: 'ᵘ',
  v: 'ᵛ',
  w: 'ʷ',
  x: 'ˣ',
  y: 'ʸ',
  z: 'ᶻ',
};

export default superScriptNumber = (num, base) => {
  // let
  var numStr = num.toString(base);
  if (numStr === 'NaN') {
    return 'ᴺᵃᴺ';
  }
  if (numStr === 'Infinity') {
    return '⁺ᴵⁿᶠ';
  }
  if (numStr === '-Infinity') {
    return '⁻ᴵⁿᶠ';
  }
  return numStr
    .split('')
    .map(function (c) {
      var supc = SUPERSCRIPTS[c];
      if (supc) {
        return supc;
      }
      return '';
    })
    .join('');
};

export function generateDataTable(data) {
  let i = 0;
  return (
    <View
      testID="dataTableID"
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {data.map(datuRow => {
        i = i + 1;
        let j = 0;
        return (
          <View
            key={i}
            style={{
              flex: 1,
              alignSelf: 'stretch',
              flexDirection: 'row',
              borderWidth: 1,
              bottomBorderWidth: 0,
              topBorderWidth: 0,
              padding: theme.SIZES.BASE * 0.5,
            }}>
            {datuRow.map(dataItem => {
              j = j + 1;
              if (j <= 1) {
                return (
                  <View key={j} style={{flex: 1, alignSelf: 'stretch'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: theme.COLORS.PRIMARY2,
                      }}>
                      {dataItem}
                    </Text>
                  </View>
                );
              } else {
                return (
                  <View key={j} style={{flex: 2, alignSelf: 'stretch'}}>
                    <Text>{dataItem}</Text>
                  </View>
                );
              }
            })}
          </View>
        );
      })}
    </View>
  );
}
