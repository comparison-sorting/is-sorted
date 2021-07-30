import test from 'ava';

import {increasing, decreasing} from '@total-order/primitive';

import {isSorted} from '../../src/index.js';

function macro(t, array, left, right, k1, k2) {
	const n = array.length;

	t.is(isSorted(increasing, array, left, right), k1);
	t.is(isSorted(decreasing, array, left, right), k2);

	t.is(array.length, n);
}

macro.title = (_, ...args) => args.join(' , ');

test(macro, [], 0, 0, true, true);
test(macro, [0, 1, 2], 1, 1, true, true);
test(macro, [1, 1, 1], 0, 3, true, true);
test(macro, [1, 2, 3], 0, 3, true, false);
test(macro, [1, 2, 4, 3], 0, 4, false, false);
test(macro, [1, 0, 1, 1, 2, 3, 1, 0, 1], 3, 6, true, false);
test(macro, [1, 0, 1, 1, 2, 3, 1, 0, 1], 0, 9, false, false);
