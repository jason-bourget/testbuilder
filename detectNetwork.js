// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  let sixPrefix = parseInt(cardNumber.slice(0, 6), 10);
  let threePrefix = parseInt(cardNumber.slice(0, 3), 10);
  let fourPrefix = parseInt(cardNumber.slice(0, 4), 10);
  
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (cardNumber[0] === '3' && (cardNumber[1] === '8' || cardNumber[1] === '9') && cardNumber.length === 14) {
    return 'Diner\'s Club';
  }

  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (cardNumber[0] === '3' && (cardNumber[1] === '4' || cardNumber[1] === '7') && cardNumber.length === 15) {
    return 'American Express';
  }

  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  let switchPrefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759]
  if ((switchPrefixes.includes(fourPrefix) || switchPrefixes.includes(sixPrefix)) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'Switch';
  }

  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  if (cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  }

  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  if (cardNumber[0] === '5' && (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5') && cardNumber.length === 16) {
    return 'MasterCard';
  }

  // Discover 
  if ((cardNumber.slice(0, 4) === '6011' || cardNumber.slice(0, 3) === '644' || cardNumber.slice(0, 3) === '645' || cardNumber.slice(0, 3) === '646' || cardNumber.slice(0, 3) === '647' || cardNumber.slice(0, 3) === '648' || cardNumber.slice(0, 3) === '649' || cardNumber.slice(0, 2) === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  }

 // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
  if ((cardNumber.slice(0, 4) === '5018' || cardNumber.slice(0, 4) === '5020' || cardNumber.slice(0, 4) === '5038' || cardNumber.slice(0, 4) === '6304') && (cardNumber.length < 20 && cardNumber.length > 11)) {
    return 'Maestro';
  }

  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  if (((sixPrefix >= 622126 && sixPrefix <= 622925) || (threePrefix >= 624 && threePrefix <= 626) || (fourPrefix >= 6282 && fourPrefix <= 6288)) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    return 'China UnionPay';
  }
};