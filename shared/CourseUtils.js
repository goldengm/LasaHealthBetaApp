import React from 'react';
import {StyleSheet, Dimensions, ScrollView, View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import XDate from 'xdate';
import {Images, theme, styles} from '../constants';

import SunflowerProgress1 from '../assets/garden/foliage/sunflowerProgress1.svg';
import SunflowerProgress2 from '../assets/garden/foliage/sunflowerProgress2.svg';
import SunflowerProgress3 from '../assets/garden/foliage/sunflowerProgress3.svg';
import SunflowerProgress4 from '../assets/garden/foliage/sunflowerProgress4.svg';
import SunflowerProgress5 from '../assets/garden/foliage/sunflowerProgress5.svg';
import SunflowerProgress6 from '../assets/garden/foliage/sunflowerProgress6.svg';
import SunflowerProgress7 from '../assets/garden/foliage/sunflowerProgress7.svg';
import SunflowerProgress8 from '../assets/garden/foliage/sunflowerProgress8.svg';
import SunflowerProgress9 from '../assets/garden/foliage/sunflowerProgress9.svg';
import SunflowerProgress10 from '../assets/garden/foliage/sunflowerProgress10.svg';
import SunflowerProgress11 from '../assets/garden/foliage/sunflowerProgress11.svg';
import SunflowerProgress12 from '../assets/garden/foliage/sunflowerProgress12.svg';
import SunflowerProgressCompleteGrey1 from '../assets/garden/foliage/sunflowerProgressCompleteGrey1.svg';

const weekInMilliseconds = 604800000;

export function getWeeklyDueDate(startTSMilliseconds, weekNum) {
  const dateObj = new XDate(
    parseInt(startTSMilliseconds) + weekNum * weekInMilliseconds,
  );
  return dateObj.toString('MMM d');
}

export function isWeekOfCourseUnlocked(startTSMilliseconds, weekNum) {
  return (
    Math.floor(Date.now() / 1000.0) >=
    Math.floor(
      (parseInt(startTSMilliseconds) + (weekNum - 1) * weekInMilliseconds) /
        1000.0,
    )
  );
}

export function getCourseWeekUnlockDate(startTSMilliseconds, weekNum) {
  return parseInt(startTSMilliseconds) + (weekNum - 1) * weekInMilliseconds;
}

export function calculateCurrentCourseCompletionPercent(endoCourse) {
  let percentComplete = endoCourse.courseProgress / 12.0;
  switch (endoCourse.courseProgress) {
    case 0:
      if (Object.keys(endoCourse.week1).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week1.weekProgress / endoCourse.week1.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 1:
      if (Object.keys(endoCourse.week2).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week2.weekProgress / endoCourse.week2.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 2:
      if (Object.keys(endoCourse.week3).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week3.weekProgress / endoCourse.week3.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 3:
      if (Object.keys(endoCourse.week4).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week4.weekProgress / endoCourse.week4.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 4:
      if (Object.keys(endoCourse.week5).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week5.weekProgress / endoCourse.week5.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 5:
      if (Object.keys(endoCourse.week6).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week6.weekProgress / endoCourse.week6.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 6:
      if (Object.keys(endoCourse.week7).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week7.weekProgress / endoCourse.week7.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 7:
      if (Object.keys(endoCourse.week8).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week8.weekProgress / endoCourse.week8.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 8:
      if (Object.keys(endoCourse.week9).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week9.weekProgress / endoCourse.week9.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 9:
      if (Object.keys(endoCourse.week10).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week10.weekProgress / endoCourse.week10.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 10:
      if (Object.keys(endoCourse.week11).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week11.weekProgress / endoCourse.week11.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    case 11:
      if (Object.keys(endoCourse.week12).length > 0) {
        let percentCompleteCurrentWeek =
          endoCourse.week12.weekProgress / endoCourse.week12.numModules;
        percentComplete =
          percentComplete + (percentCompleteCurrentWeek * 1.0) / 12.0;
      }
      break;

    default:
      break;
  }
  if (percentComplete >= 1.0) {
    return 100;
  } else {
    return percentComplete * 100.0;
  }
}

export function getEndo101ProgressMessage(courseProgress, partNum) {
  if (partNum == 0) {
    switch (courseProgress) {
      case 0:
        return 'YOUR COURSE';
        break;
      default:
        return 'Endometriosis 101';
    }
  } else if (partNum == 1) {
    switch (courseProgress) {
      case 0:
        return 'Endometriosis 101';
        break;

      case 1:
        return 'Hormones';
        break;

      case 2:
        return 'Stages & Symptoms';
        break;

      case 3:
        return 'Diagnosis';
        break;

      case 4:
        return 'Laparoscopy';
        break;

      case 5:
        return 'Medications';
        break;

      case 6:
        return 'Physical Therapy';
        break;

      case 7:
        return 'Nutrition';
        break;

      case 8:
        return 'Alternative Therapies';
        break;

      case 9:
        return 'Life Stages';
        break;

      case 10:
        return 'Related Conditions';
        break;

      case 11:
        return 'Thriving';
        break;

      default:
        return 'Thriving';
    }
  } else if (partNum == 2) {
    switch (courseProgress) {
      case 0:
        return 'Get a deeper understanding of endometriosis and the confidence to make the best decisions for your health';
        break;

      case 1:
        return 'Learn about basic medical concepts essential for understanding endometriosis including pelvic anatomical structures and hormones.';
        break;

      case 2:
        return 'Learn about the condition, stages, symptoms, and causes.';
        break;

      case 3:
        return 'Learn about getting diagnosed with endometriosis and some of the challenges that patients face.';
        break;

      case 4:
        return 'Learn about the value of laparoscopic surgery, how to decide the right time to have one and what to expect.';
        break;

      case 5:
        return 'Learn about medication options available and considerations when choosing a medication strategy.';
        break;

      case 6:
        return 'Learn about pelvic floor therapy and at-home exercises to reduce your pain.';
        break;

      case 7:
        return 'Learn about foods that might trigger endometriosis flare-ups and foods that might improve symptoms.';
        break;

      case 8:
        return 'Learn about alternative therapies that some patients found have been helpful including acupuncture, traditional Chinese medicine, and electrotherapy.';
        break;

      case 9:
        return 'Learn about how endometriosis impacts different life stages including puberty, fertility, pregnancy, and menopause.';
        break;

      case 10:
        return 'Learn about other conditions that commonly exist with endometriosis.';
        break;

      case 11:
        return 'Learn how to thrive with endometriosis including work and relationships.';
        break;

      default:
        return 'Learn how to thrive with endometriosis including work and relationships.';
    }
  } else if (partNum == 3) {
    switch (courseProgress) {
      case 0:
        return 'Get Started';
        break;

      case 1:
        return 'Continue Week 2';
        break;

      case 2:
        return 'Continue Week 3';
        break;

      case 3:
        return 'Continue Week 4';
        break;

      case 4:
        return 'Continue Week 5';
        break;

      case 5:
        return 'Continue Week 6';
        break;

      case 6:
        return 'Continue Week 7';
        break;

      case 7:
        return 'Continue Week 8';
        break;

      case 8:
        return 'Continue Week 9';
        break;

      case 9:
        return 'Continue Week 10';
        break;

      case 10:
        return 'Continue Week 11';
        break;

      case 11:
        return 'Continue Week 12';
        break;

      default:
        return 'Continue Week 12';
    }
  }
}

export function getflowerProgressIcon(progressPercent) {
  const flowerIconWidth = 100;
  const flowerIconHeight = 100;
  const one12thPercent = 8.3333;
  if (progressPercent < one12thPercent * 1) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress1
            width={flowerIconWidth * 0.65}
            height={flowerIconHeight * 0.75}
            marginTop={5}
            marginLeft={4}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 47,
            paddingLeft: 4,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else if (progressPercent < one12thPercent * 2) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress2
            width={flowerIconWidth * 0.8}
            height={flowerIconHeight * 0.8}
            marginLeft={8}
            marginTop={3}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 51,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else if (progressPercent < one12thPercent * 3) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress3
            width={flowerIconWidth * 0.95}
            height={flowerIconHeight * 0.75}
            marginTop={5}
            marginLeft={32}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 48,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else if (progressPercent < one12thPercent * 4) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress4
            width={flowerIconWidth * 0.97}
            height={flowerIconHeight * 0.9}
            marginTop={5}
            marginLeft={36}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 45,
            paddingLeft: 4,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else if (progressPercent < one12thPercent * 5) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress5
            width={flowerIconWidth * 0.87}
            height={flowerIconHeight * 0.83}
            marginTop={4}
            marginLeft={37}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 48,
            paddingLeft: 4,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else if (progressPercent < one12thPercent * 6) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress6
            width={flowerIconWidth * 0.97}
            height={flowerIconHeight * 1}
            marginTop={4}
            marginLeft={36}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 46,
            paddingLeft: 4,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else if (progressPercent < one12thPercent * 7) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress7
            width={flowerIconWidth * 1.0}
            height={flowerIconHeight * 1.0}
            marginTop={4}
            marginLeft={36}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 44,
            paddingLeft: 4,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else if (progressPercent < one12thPercent * 8) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress8
            width={flowerIconWidth * 1.0}
            height={flowerIconHeight * 1.0}
            marginTop={5}
            marginLeft={28}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 44,
            paddingLeft: 4,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else if (progressPercent < one12thPercent * 9) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress9
            width={flowerIconWidth * 1.0}
            height={flowerIconHeight * 1.0}
            marginTop={4}
            marginLeft={10}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 44,
            paddingLeft: 4,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else if (progressPercent < one12thPercent * 10) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress10
            width={flowerIconWidth * 1.0}
            height={flowerIconHeight * 1.0}
            marginTop={4}
            marginLeft={4}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 44,
            paddingLeft: 4,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else if (progressPercent < one12thPercent * 11) {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress11
            width={flowerIconWidth * 1.0}
            height={flowerIconHeight * 1.0}
            marginTop={4}
            marginLeft={4}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 44,
            paddingLeft: 4,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          width: flowerIconWidth,
          height: flowerIconHeight,
          alignItems: 'center',
        }}>
        <SunflowerProgressCompleteGrey1
          width={flowerIconWidth}
          height={flowerIconHeight}
          marginLeft={4}
          marginTop={5}
        />
        <View style={{position: 'absolute'}}>
          <SunflowerProgress12
            width={flowerIconWidth * 1.0}
            height={flowerIconHeight * 1.0}
            marginTop={4}
            marginLeft={4}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            color: theme.COLORS.WHITE,
            marginTop: 44,
            paddingLeft: 4,
            fontSize: 14,
          }}>
          {Math.round(progressPercent)}%
        </Text>
      </View>
    );
  }
}
