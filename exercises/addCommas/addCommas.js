/**
 * Given a non-negative integer as input, returns a string representation with
 * commas inserted in the appropriate places.
 *
 * @example
 * addCommas(100); // => '100'
 * addCommas(5491); // => '5,491'
 * addCommas(12345); // => '12,345'
 * addCommas(987654321); // => '987,654,321'
 *
 * @param {number} num - A number to format
 * @returns {string} A string representation of the input number formatted with
 *   commas in the appropriate places.
 */
function addCommas(num) {
  // First convert the input number to a string
  // and then work character-by-character
  let original = String(num);
  let commaString = '';

  for(let i = 1;i <= original.length; i += 1) {
    commaString = original[original.length - i] + commaString;

    if (i % 3 === 0 && i < original.length) {
      commaString = ',' + commaString;
    }
  }

  return commaString;
}

function testAddCommas(input, expectedOutput) {
  let actualOutput = addCommas(input);
  let msg;

  if (expectedOutput === actualOutput) {
    msg = 'PASS';
  } else {
    msg = 'FAIL';
  }

  console.log('[%s] %s === %s',  msg, expectedOutput, actualOutput);
}

if (require.main === module) {
  console.log('Running sanity checks for addCommas:');

  testAddCommas(1, '1');
  testAddCommas(11, '11');
  testAddCommas(111, '111');
  testAddCommas(1111, '1,111');
  testAddCommas(11111, '11,111');
  testAddCommas(111111, '111,111');
  testAddCommas(1111111, '1,111,111');
  testAddCommas(11111111, '11,111,111');
  testAddCommas(111111111, '111,111,111');
  testAddCommas(1111111111, '1,111,111,111');
}

module.exports = addCommas;
