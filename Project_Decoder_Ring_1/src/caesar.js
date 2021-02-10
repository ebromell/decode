// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // if the function is not encoding, reverse the direction of the shift.
    if (encode === false) shift = -shift;
    //create an empty string var, to be used later as the output.
    let encMsg = "";
    //creates a seperate var, then converts the input text to lowercase
    let evenLower = input.toLowerCase();
    //for loop to createto index the letter position
    for (let i = 0; i < input.length; i++) {
      //create new var to convert string coded at index
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
      //if statement above creates a param, that creates a check, to keep 
      //the coded characters in set range
      encMsg += String.fromCharCode(low);
      //updates output var to converted string
      console.log(encMsg);
    }
    return encMsg;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
