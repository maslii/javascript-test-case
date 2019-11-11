/**
 * Returns a set of numbers with length N, excluding specified.
 *
 * @param N Length of set
 * @param exclude Numbers to excludeNumberWithDigit from a set
 * @param {function} filter Callback for filtering numbers
 * @returns {Array}
 */
export function generate(N, filter, exclude) {
  let i = 1,
    n = N * N,
    data = [];

  while (i <= n) {
    if (!filter(i, exclude)) {
      data.push(i);
    } else {
      n++;
    }
    i++;
  }

  return data.reverse();
}

/**
 * Wraps array into generator
 *
 * @param data
 * @returns {Function}
 */
export function wrap(data) {

  function* generator() {
    for (let x of data) {
      yield x;
    }
  }

  return generator();
}