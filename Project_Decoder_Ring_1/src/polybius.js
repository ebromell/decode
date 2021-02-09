// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let str = "";
    //declare empty var
    //index loop
    let lowerText = input.toLowerCase();

    for (let i = 0; i < lowerText.length; i++) {
      let letter = lowerText[i];
      if (lowerText.charCodeAt(i) >= 97 && lowerText.charCodeAt(i) <= 122) {
        let row =
          Math.floor((letter.charCodeAt(0) - "a".charCodeAt(0)) / 5) + 1;
        // find numbers
        let col = ((letter.charCodeAt(0) - "a".charCodeAt(0)) % 5) + 1;
        //converts letters
        if (letter === "k") {
          row = row - 1;
          col = 5 - col + 1;
        } else if (letter >= "j") {
          if (col === 1) {
            col = 6;
            row = row - 1;
          }
          col = col - 1;
        }
        str += `${col}${row}`;
        //console.log(str);
      } else {
        str += lowerText[i];
      }
    }
    console.log(input);
    console.log(str);
    return str;
  }

  function 

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
