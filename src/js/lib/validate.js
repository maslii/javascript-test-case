/**
 * Checks if given data is a type of integer and is in range [min .. max].
 *
 * @param x
 * @param min
 * @param max
 * @returns {boolean}
 */
export function isIntInRange(x, min, max) {
  if (Number.isInteger(x) === false) {
    return false;
  }

  if (x < min || x > max) {
    return false;
  }

  return true;
}

/**
 * Checks if given string is a number
 *
 * @param x
 * @returns {boolean}
 */
export function isStringNumber(x) {
  const regIsNumber = new RegExp(/^[0-9]+$/);

  return regIsNumber.test(x)
}