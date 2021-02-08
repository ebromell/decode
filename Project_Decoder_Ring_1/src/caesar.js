// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const codes = "";
    const low = input.toLowerCase();
    console.log(codes);
    console.log(encode);
    console.log(low);
    console.log(shift);
    for (let i = 0; i < input.length; i++){
    if (!input || input < -25 || input > 25){
      console.log(codes);
      console.log(encode);
      console.log(low);
      
    } 
      console.log(codes);
      console.log(encode);
      console.log(input);
  }
    // your solution code here
}

  return {
    
    caesar,
  };
})();

module.exports = caesarModule.caesar;
