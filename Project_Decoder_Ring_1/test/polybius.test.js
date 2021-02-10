
const expect = require("chai").expect;
const polybius = require("../src/polybius");


describe("using polybius", () => {
    it("should return proper encoded values", () => {
      const input = "thinkful";
      expect(polybius(input)).to.eql("4432423352125413");
    });
  
    it("should return proper encoded values", () => {
      const input = "Hello world";
      expect(polybius(input)).to.eql("3251131343 2543241341");
    });
  
    it("should return proper decoded values", () => {
      const input = "3251131343 2543241341";
      expect(polybius(input, false)).to.eql("hello world");
    });
  
    it("should return proper decoded values, with i/j", () => {
      const input = "4432423352125413";
      expect(polybius(input, false)).to.eql("thi/jnkful");
    });

    it("should return false if input for the decode does not have an even amount of numbers",() => {
        const input = "44324233521254130";
        expect(polybius(input, false)).to.eql(false);
    });

  
  });