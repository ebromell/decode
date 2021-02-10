// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

 describe("Checking caesar", () => {
  it("should return proper encoded values", () => {
    const input = "Hello There"
    expect(caesar(input, 1, true)).eql("ifmmp uifsf"); // No error
  });
  it("should return proper decoded values", () => {
    const input = "ifmmp uifsf"
    expect(caesar(input, 1, false)).eql("hello there"); // No error
  });
  it("should return proper encoded values with positives", () => {
    const input = "Hello There"
    expect(caesar(input, 25, true)).eql("gdkkn sgdqd"); // No error
  });
  it("should return proper decoded values with positives", () => {
    const input = "gdkkn sgdqd"
    expect(caesar(input, 25, false)).eql("hello there"); // No error
  });
  it("should return proper encoded values with negatives", () => {
    const input = "Hello There"
    expect(caesar(input, -25, true)).eql("ifmmp uifsf"); // No error
  });
  it("should return proper decoded values with negatives", () => {
    const input = "ifmmp uifsf"
    expect(caesar(input, -25, false)).eql("hello there"); // No error
  });
});
