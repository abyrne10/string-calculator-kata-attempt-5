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
    const split = getSplit(numbers);
    const ints = getInts(split);
    const sum = getSum(ints);
    return sum;
}

function getSplit(numbers) {
    let split;
    if (numbers.includes('\n')) {
        split = getMixedSplit(numbers);
    } else {
        split = numbers.split(',');
    }
    return split;
}

function getMixedSplit(numbers) {
    const split = [];
    const splitOnComma = numbers.split(',');
    splitOnComma.forEach((element) => {
        if (element.includes('\n')) {
            const splitOnNewline = element.split('\n');
            splitOnNewline.forEach((element) => {
                split.push(element);
            });
        } else {
            split.push(element);
        }
    });
    return split;
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
