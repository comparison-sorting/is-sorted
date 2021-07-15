import firstInversion from './firstInversion.js';

/**
 * Returns whether range [left,right[ of array is sorted.
 *
 * @param {Function} compare
 * @param {ArrayLike} array
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
export default function isSorted(compare, array, left, right) {
	return firstInversion(compare, array, left, right) === right;
}
