// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //checks validation of alphabet
    //add reference to encode for validation check;
    if (checkers(alphabet)) return false;
    let output = "";
    let truth = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < input.length; i++) {
      let evenLower = input.substr(i, 1);
      //sets to lowercase, if not, will not be able to use
      //helper function 
      evenLower = evenLower.toLowerCase();
      /* 
      go inside string, go inside index 1, assign string evenlower.
      checks helper function to replace input strings, check if encoding.
      updates output with output in the replacer functions, based on 
      if its encoding or decoding, and updates accordingly.
       */
      if (encode === true) {
        output += replacer(evenLower, alphabet, truth);
      }
      if (encode === false) {
        output += replacer(evenLower, truth, alphabet);
      }
    }
    return output;
  }

  function replacer(input, keys, values) {
    if (input === " ") return input;
    //returns if string text is empty;
    let selected = input;
    /*
    creates seperate var for input to be stored
    looks for the selected keys in the values, 
    using the substr method, and returns the keys based on 
    keys 
    */
    for (let j = 0; j < keys.length; j++) {
      if (selected == values.substr(j, 1)) {
        return keys.substr(j, 1);
      }
    }
  }
  /*
  helper function to check if an input exists, 
  checks the length of the array, if array outside of params
  creates a arr to store output, returns error output
  */
  function checkers(alphabet) {
    if (alphabet == null) return true;
    if (alphabet.length != 26) return true;
    //if (alphabet != encode);
    let testArr = alphabet.split("");
    if (
      testArr.some((iter, index, position) => {
        return position.lastIndexOf(iter) != index;
      })
    )
      return true;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
