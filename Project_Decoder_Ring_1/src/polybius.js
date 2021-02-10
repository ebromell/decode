// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // written this way for later reconstruction
  //
  function polybius(input, encode = true) {
    let str = "";
    //declare empty string var
    let lowerText = input.toLowerCase();
    //converts input to lowercase
    if (encode === true) {
      for (let i = 0; i < lowerText.length; i++) {
        //looks for letter at set index, using for loop
        let letter = lowerText[i];
        if (lowerText.charCodeAt(i) >= 97 && lowerText.charCodeAt(i) <= 122) {
          let row =
            Math.floor((letter.charCodeAt(0) - "a".charCodeAt(0)) / 5) + 1;
          // creates var, finds text using UTF-16 code index, sets var to found number 
          // translate into number "set"
          let col = ((letter.charCodeAt(0) - "a".charCodeAt(0)) % 5) + 1;
          //str var plus +1 because i/j are 2 letters 
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
        } else {
          str += lowerText[i];
        }
      }
    } else if (encode === false) {
      //regex:
      // g = globally, throws into each indiv digit
      // D = everything but digits, if d = only digits
      // "" replaces with empty
      let numTest = input.replace(/\D/g, "");
      if (numTest.length % 2 == 0) {
        for (let j = 0; j < input.length; j++) {
          let row = input.charAt(j);
          let col;
          // take 1st & 2nd digit, pass thru res and column, adding 97 to number, transform back into string
          if (row == " ") {
            str += row;
          } else {
            row = parseInt(input.charAt(j));
            col = parseInt(input.charAt(j + 1));
            // init imaginary 5*5 grid for math
            let res = col * 5 - 5;
            res = row + res;
            if (res == 9) {
              res = "i/j";
            } else {
              //res plus +1 because i/j are 2 letters
              if (res > 9) {
                res++;
              }
              //add 96 bring number to utf 16 first digit slot
              res += 96;
              res = String.fromCharCode(res);
            }
            str += res;
            //add extra value to index because we are evaluating 2 digits at a time
            j++;
          }
        }
      } else {
        return false;
      }
    }
    return str;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
