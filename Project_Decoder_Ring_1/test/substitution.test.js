// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("using substitution", () => {
  it("should return proper encoded values", () => {
    const alphabet = "zabcdefghijklmnopqrstuvwxy";
    const input = "thinkful";
    expect(substitution(input, alphabet, true)).to.eql("sghmjetk");
  });
  it("should return proper decoded values", () => {
    const alphabet = "zabcdefghijklmnopqrstuvwxy";
    const input = "You are an excellent spy";
    expect(substitution(input, alphabet, true)).to.eql(
      "xnt zqd zm dwbdkkdms rox"
    );
  });
  it("should return false if out of scope", () => {
    const alphabet = "abcde";
    const input = "thinkful";
    expect(substitution(input, alphabet, false)).to.eql(false);
  });
  it("should return false if duplicate characters", () => {
    const alphabet = "zabcdefghijklmnopqrstuvwxz";
    const input = "thinkful";
    expect(substitution(input, alphabet, false)).to.eql(false);
  });
});
