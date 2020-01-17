/**
 * Given a non-negative integer as input, returns the number translated into
 * English.
 *
 * Don't worry about inserting hyphens, commas, or "and" anywhere.
 *
 * @example
 * numberToEnglish(100);     // => 'one hundred'
 * numberToEnglish(5491);    // => 'five thousand four hundred ninety one'
 * numberToEnglish(12345);   // => 'twelve thousand three hundred forty five'
 * numberToEnglish(9456012); // => 'nine million four hundred fifty six thousand twelve'
 *
 * @param {number} num - A number to format
 * @returns {string} A string representation of the input number formatted with
 *   commas in the appropriate places.
 */
function numberToEnglish(num) {
  if (num === 0) {
    return 'zero';
  }

  return hundredsToEnglish(num);
}

function quotient(numerator, denominator) {
  return Math.floor(numerator / denominator);
}

function remainder(numerator, denominator) {
  return numerator % denominator;
}

function hundredsToEnglish(num) {
  if (num > 999) {
    throw new Error(`Invalid input: expected number less than 1000, received: ${num}`);
  }

  if (num < 100) {
    return tensToEnglish(num);
  }

  let hundreds = quotient(num, 100);
  let tens = remainder(num, 100);

  if (hundreds > 0) {
    let englishString = smallNumberToEnglish(hundreds) + ' hundred';

    if (tens > 0) {
      englishString = englishString + ' ' + tensToEnglish(tens);
    }

    return englishString;
  } else {
    return tensToEnglish(tens);
  }
}

function tensToEnglish(num) {
  if (num > 99) {
    throw new Error(`Invalid input: expected number less than 9, received: ${num}`);
  }

  if (num < 20) {
    return smallNumberToEnglish(num);
  }

  let tensInEnglish = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty','sixty', 'seventy', 'eighty', 'ninety',
  ];

  let tens = quotient(num, 10);
  let ones = remainder(num, 10)

  if (ones === 0) {
    return tensInEnglish[tens];
  } else {
    return tensInEnglish[tens] + ' ' + smallNumberToEnglish(ones);
  }
}

function smallNumberToEnglish(num) {
  let onesInEnglish = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
  ];

  if (num > 19) {
    throw new Error(`Invalid input: 1-digit or 2-digit input required, received: ${num}`);
  }

  return onesInEnglish[num];
}

function testNumberToEnglish(input, expectedOutput) {
  let actualOutput = numberToEnglish(input);
  let msg;

  if (expectedOutput === actualOutput) {
    msg = 'PASS';
  } else {
    msg = 'FAIL';
  }

  console.log('[%s] %s === %s',  msg, expectedOutput, actualOutput);
}

if (require.main === module) {
  console.log('Running sanity checks for numberToEnglish:');

  testNumberToEnglish(0, 'zero');
  testNumberToEnglish(1, 'one');
  testNumberToEnglish(2, 'two');
  testNumberToEnglish(3, 'three');
  testNumberToEnglish(4, 'four');
  testNumberToEnglish(5, 'five');
  testNumberToEnglish(6, 'six');
  testNumberToEnglish(7, 'seven');
  testNumberToEnglish(8, 'eight');
  testNumberToEnglish(9, 'nine');
  testNumberToEnglish(54, 'fifty four');
  testNumberToEnglish(90, 'ninety');
  testNumberToEnglish(99, 'ninety nine');
  testNumberToEnglish(999, 'nine hundred ninety nine');
  testNumberToEnglish(200, 'two hundred');
  testNumberToEnglish(205, 'two hundred five');
  testNumberToEnglish(215, 'two hundred fifteen');
  testNumberToEnglish(285, 'two hundred eighty five');
  testNumberToEnglish(280, 'two hundred eighty');
}

module.exports = numberToEnglish;
