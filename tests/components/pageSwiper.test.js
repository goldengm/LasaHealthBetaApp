import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {shallow} from 'enzyme';
import PageSwiper from '../../components/PageSwiper';
import {theme, styles} from '../../constants';

// jest.mock("react-native-elements", () => ({}));
jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));

jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

it('Testing PageSwiper instantiation', async () => {
  const onboardingSlidesData = [
    {
      key: 'one',
      title: 'Having health challenges is lonely',
      text: 'Whether you are newly diagnosed or have',
      image: null,
      backgroundColor: theme.COLORS.WHITE,
      extraStyle: {width: 220, height: 250},
    },
    {
      key: 'two',
      title: 'Nothing beats a friend who really understands',
      text: 'We’ve seen the power of finding a friend',
      image: null,
      backgroundColor: theme.COLORS.WHITE,
      extraStyle: {width: 200, height: 300},
    },
  ];

  const componantInstance = shallow(
    <PageSwiper
      data={onboardingSlidesData}
      renderItem={() => {
        return <></>;
      }}
    />,
  );

  expect(PageSwiper).toBeTruthy();
  expect(componantInstance).toBeTruthy();
  expect(componantInstance.instance()).toBeTruthy();
  // expect(componantInstance.find(TouchableOpacity)).toBeTruthy();
});

// //  3 ways to create the same query, for use in future test writing
// expect(componantInstance.contains(<Text>Hihihi</Text>)).toEqual(true);
// expect(
//   componantInstance
//     .find("Text") // Use selector to get certain children
//     .first() // Get the first child
//     .props().children // Get its props
// ).toEqual("Hihihi");
// expect(
//   componantInstance
//     .find(Text) // Use selector to get certain children
//     .at(0) // Get the first child
//     .props().children // Get its props
// ).toEqual("Hihihi");

it('Testing PageSwiper next page TODO', async () => {
  const onboardingSlidesData = [
    {
      key: 'one',
      title: 'Having health challenges is lonely',
      text: 'Whether you are newly diagnosed or have',
      image: null,
      backgroundColor: theme.COLORS.WHITE,
      extraStyle: {width: 220, height: 250},
    },
    {
      key: 'two',
      title: 'Nothing beats a friend who really understands',
      text: 'We’ve seen the power of finding a friend',
      image: null,
      backgroundColor: theme.COLORS.WHITE,
      extraStyle: {width: 200, height: 300},
    },
  ];

  const componantInstance = shallow(
    <PageSwiper
      renderItem={({item}) => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: theme.SIZES.BASE,
              backgroundColor: item.backgroundColor,
            }}>
            {/* <Image
            source={item.image}
            style={{
              ...styles.onboardingHeaderImage,
              marginBottom: theme.SIZES.BASE,
              ...item.extraStyle,
            }}
          /> */}

            <Text
              style={{
                fontSize: 26,
                color: theme.COLORS.DEFAULT,
                textAlign: 'center',
                fontWeight: 'bold',
                marginVertical: theme.SIZES.BASE,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: theme.COLORS.BLACK,
                textAlign: 'center',
              }}>
              {item.text}
            </Text>
            <Text>Testing</Text>
          </View>
        );
      }}
      data={onboardingSlidesData}
      // onDone={() => this.props.navigation.replace("ChatbotIntro")}
      renderDoneButton={() => {
        return (
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(0, 0, 0, .2)',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Icon
            name="SvgSolid201Check"
            family="amiesolid"
            color="rgba(255, 255, 255, .9)"
            size={24}
          /> */}
          </View>
        );
      }}
      renderNextButton={() => {
        return (
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(0, 0, 0, .2)',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Icon
            name="SvgSolidRightArrow"
            family="amiesolid"
            fill={theme.COLORS.WHITE}
            width={22}
            height={22}
          /> */}
          </View>
        );
      }}
    />,
  );

  expect(PageSwiper).toBeTruthy();
  expect(componantInstance.instance()).toBeTruthy();

  //  3 ways to create the same query, for use in future test writing
  // expect(
  //   componantInstance.contains(<Text>Having health challenges is lonely</Text>)
  // ).toEqual(true);

  // expect(
  //   componantInstance.findWhere((node) => {
  //     return node.type() === typeof View;
  //   }).length
  // ).toEqual(10);
  // expect(
  //   componantInstance.findWhere((node) => {
  //     return node.props().children == "Testing";
  //   }).length
  // ).toEqual(10);

  // expect(componantInstance.instance()).toEqual(10);

  // expect(componantInstance.find(View).length).toEqual(10);

  // expect(
  //   componantInstance.find({
  //     children: "Testing",
  //   }).length
  // ).toEqual(10);

  // expect(
  //   componantInstance.findWhere((n) => n.type() !== "text").at(12)
  // ).toEqual(0);
  // expect(
  //   componantInstance.findWhere((n) => n.type() === typeof Text).length
  // ).toEqual(10);
  // expect(
  //   componantInstance.find({
  //     children: "Nothing beats a friend who really understands",
  //   }).length
  // ).toEqual(0);

  // componantInstance.find(TouchableOpacity).at(1).simulate("press");

  // expect(
  //   componantInstance.find({ children: "Having health challenges is lonely" })
  //     .length
  // ).toEqual(0);
  // expect(
  //   componantInstance.find({
  //     children: "Nothing beats a friend who really understands",
  //   }).length
  // ).toEqual(1);
});
