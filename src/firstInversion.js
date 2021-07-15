/**
 * Returns k <= right such that [left,k[ is sorted. If k < right, then
 * compare( array[k-1] , array[k] ) > 0.
 *
 * @param {Function} compare
 * @param {ArrayLike} array
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
export default function firstInversion(compare, array, left, right) {
	if (left >= right) return right;

	while (++left < right) {
		if (compare(array[left - 1], array[left]) > 0) {
			break;
		}
	}

	return left;
}
