// const sum = require("./alwaysPassBaseline");
// import sum from "./alwaysPassBaseline";
import { sumTMP2 } from "./alwaysPassBaseline";

function sumTMP(a, b) {
  return a + b;
}

test("Tests adding two numbers, dummy test", () => {
  // console.log("BASELINE ", sum);
  expect(sumTMP(1, 2)).toBe(3);
  expect(sumTMP2(1, 2)).toBe(3);
  // expect(alwaysPassBaseline.sum(1, 2)).notToBe(4);
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});
