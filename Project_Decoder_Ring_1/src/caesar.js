// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (encode === false) shift = -shift;
    let encMsg = "";
    let evenLower = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
      let low = evenLower.charCodeAt(i);
      if (low >= 97 && low <= 122) {
        low += shift;
        if (low < 97) {
          low += 26;
        }
        if (low > 122) {
          low -= 26;
        }
      }
      encMsg += String.fromCharCode(low);
      console.log(encMsg);
    }
    return encMsg;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
