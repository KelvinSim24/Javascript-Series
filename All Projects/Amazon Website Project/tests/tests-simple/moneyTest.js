import { formatCurrency } from '../../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('Converts cents to dollarts');

// These are so called TEST CASES below. 
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('works with 0')

// Edge Cases: Testing with 0
if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('rounds up to nearest cent')

// Edge Cases: Testing with decimal values >= 0.5
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log(`failed: expected 20.01 but got ${formatCurrency(2000.5)}`);
}

console.log('runds down to the nearest cent');

//Edge Cases: Testing with decimal values < 0.5
if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
} else {
    console.log(`failed: expected 20.00 but got ${formatCurrency(2000.5)}`);
}