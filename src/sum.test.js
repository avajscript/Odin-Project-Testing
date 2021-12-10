import {
  capitalize,
  reverseStr,
  calculator,
  caesarCipher,
  analyzeArray,
  dict
} from "./index.js";

test("capitalize first letter of string", () => {
  expect(capitalize("string")).toBe("String");
});

test("reverse a string", () => {
  expect(reverseStr("string")).toMatch(/gnirts/);
});

test("calculator add", () => {
  expect(calculator.add(5, 5)).toEqual(10);
});

test("calculator subtract", () => {
  expect(calculator.subtract(10, 5)).toEqual(5);
});

test("calculator divide", () => {
  expect(calculator.divide(10, 5)).toEqual(2);
});

test("calculator multiply", () => {
  expect(calculator.multiply(5, 5)).toEqual(25);
});

test("Caesar Cipher", () => {
  expect(caesarCipher("abc")).toBe("bcd");
});

test("Caesar Cipher", () => {
  expect(caesarCipher("lmnopz..e1212")).toMatch(/mnopqa..f1212/);
});

test("Analyze Array", () => {
  expect(analyzeArray([2, 4, 6, 8])).toEqual({
    average: 5,
    min: 2,
    max: 8,
    length: 4
  });
});
