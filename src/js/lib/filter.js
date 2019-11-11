/**
 * Check if number has specified digit
 *
 * @param number
 * @param digit
 * @returns {boolean}
 */
export function excludeNumberWithDigit(number, digit) {
  return (number + '').indexOf(digit + '') > -1;
}