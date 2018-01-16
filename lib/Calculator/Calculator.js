'use strict';

function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    if (numbers.length < 2) {
        return parseInt(numbers);
    }
    const sum = sumNumbersInString(numbers);
    return sum;
}

function sumNumbersInString(numbers) {
    const split = numbers.split(',');
    const ints = getInts(split);
    const sum = getSum(ints);
    return sum;
}

function getInts(split) {
    const ints = [];
    split.forEach((element) => {
        const int = parseInt(element);
        ints.push(int);
    });
    return ints;
}

function getSum(ints) {
    let sum = 0;
    ints.forEach((int) => {
        sum += int;
    });
    return sum;
}

module.exports = {
    add,
};
