import React from 'react';
import {View} from 'react-native';
import {theme, styles} from '../constants';
import Icon from './Icon';
import Bubble from './Bubble';
import Button from './Button';
import TouchableOpacity from './TouchableOpacity';

import {getSVG} from '../constants/SVGs';

const maxBubblesInPage = 5;

class PagedList extends React.Component {
  state = {pageNum: 0};

  setPageNum = pageNum => {
    const {passedOptionsList, navButtonsInline} = this.props;
    let maxNumPages = -1;
    if (passedOptionsList && passedOptionsList.length > 0) {
      if (navButtonsInline) {
        maxNumPages = Math.floor(
          passedOptionsList.length / (maxBubblesInPage - 2),
        );
      } else {
        maxNumPages = Math.floor(passedOptionsList.length / maxBubblesInPage);
      }
    }
    if (pageNum < 0 || pageNum > maxNumPages) {
      this.setState({pageNum: 0});
    } else {
      this.setState({pageNum});
    }
  };

  render() {
    const {
      style,
      customOnPress,
      passedOptionsList,
      customRenderItem,
      svgMode = false,
      navButtonsInline = false,
      customDebounceLength = false,
      ...props
    } = this.props;

    const pagedListStyles = {
      ...styles.pagedList,
      ...style,
    };

    let listSliceStart = 0 + this.state.pageNum * maxBubblesInPage;
    let listSliceEnd = maxBubblesInPage + this.state.pageNum * maxBubblesInPage;
    if (navButtonsInline) {
      listSliceStart = 0 + this.state.pageNum * (maxBubblesInPage - 2);
      listSliceEnd =
        maxBubblesInPage - 2 + this.state.pageNum * (maxBubblesInPage - 2);
    }

    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {navButtonsInline && (
            <TouchableOpacity
              testID="backButton1"
              onPress={() => {
                Promise.resolve()
                  .then(() => {
                    this.setPageNum(this.state.pageNum - 1);
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }}
              style={{
                width: theme.SIZES.BASE * 2.5,
                height: theme.SIZES.BASE * 3.5,
                borderRadius: theme.SIZES.BASE * 3,
                backgroundColor: theme.COLORS.TRANSPARENT,
                opacity: 1.0,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
              customDebounceLength={customDebounceLength}>
              <Icon
                type="ionicon"
                size={30}
                name="chevron-back-outline"
                color={theme.COLORS.TEXT1}
              />
            </TouchableOpacity>
          )}

          {passedOptionsList
            .slice(listSliceStart, listSliceEnd)
            .map((iconName, ind) => {
              return (
                <View key={ind} style={{}}>
                  {customRenderItem && customRenderItem(iconName, ind)}
                  {customRenderItem == null && svgMode && (
                    <TouchableOpacity
                      style={{
                        width: styles.pagedListBubble.width,
                        height: styles.pagedListBubble.height,
                        marginTop: theme.SIZES.BASE,
                        alignContent: 'center',
                      }}
                      onPress={() => {
                        customOnPress(iconName);
                      }}>
                      {getSVG(iconName)}
                    </TouchableOpacity>
                  )}

                  {customRenderItem == null && !svgMode && (
                    <View
                      style={{
                        width: styles.pagedListBubble.width,
                        height: styles.pagedListBubble.height,
                        marginTop: theme.SIZES.BASE,
                        alignContent: 'center',
                      }}>
                      <Bubble
                        style={{
                          ...pagedListStyles,

                          borderColor: theme.COLORS.DEFAULT,
                          borderWidth: 1,
                          width: styles.pagedListBubble.width,
                          height: styles.pagedListBubble.height,
                          marginHorizontal: 2,
                          backgroundColor: theme.COLORS.DEFAULT,
                        }}
                        iconName={iconName}
                        bubbleName={''}
                        customOnPress={() => {
                          customOnPress(iconName);
                        }}
                        viewBackgroundColor={theme.COLORS.ELEMENT_BACKGROUND}
                      />
                    </View>
                  )}
                </View>
              );
            })}

          {navButtonsInline && (
            <TouchableOpacity
              testID="forwardButton1"
              onPress={() => {
                Promise.resolve()
                  .then(() => {
                    this.setPageNum(this.state.pageNum + 1);
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }}
              style={{
                width: theme.SIZES.BASE * 2.5,
                height: theme.SIZES.BASE * 3.5,
                borderRadius: theme.SIZES.BASE * 3,
                backgroundColor: theme.COLORS.TRANSPARENT,
                opacity: 1.0,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
              }}
              customDebounceLength={customDebounceLength}>
              <Icon
                type="ionicon"
                size={30}
                name="chevron-forward-outline"
                color={theme.COLORS.TEXT1}
              />
            </TouchableOpacity>
          )}
        </View>
        {(navButtonsInline == null || !navButtonsInline) && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginHorizontal: theme.SIZES.BASE,
              marginBottom: theme.SIZES.BASE,
              marginTop: theme.SIZES.BASE * 0.5,
            }}>
            <Button
              testID="backButton2"
              title="Previous"
              onPress={() => {
                this.setPageNum(this.state.pageNum - 1);
              }}
              style={{...styles.button, height: 40, width: 120}}
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.TEXT,
              }}
              customDebounceLength={customDebounceLength}></Button>
            <Button
              testID="forwardButton2"
              title="Next"
              onPress={() => {
                this.setPageNum(this.state.pageNum + 1);
              }}
              style={{...styles.button, height: 40, width: 120}}
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.TEXT,
              }}
              customDebounceLength={customDebounceLength}></Button>
          </View>
        )}
      </View>
    );
  }
}

export default PagedList;
