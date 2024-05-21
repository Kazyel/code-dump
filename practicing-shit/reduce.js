const numbers = [[1, 2, 3], [4, 5, 6], 7, 8, [9]];

const concatArrays = numbers.reduce((acc, number) => {
    if (Array.isArray(acc)) { return acc.concat(number); }
});

const sumNums = concatArrays.reduce((acc, number) => {
    return acc * number;
})

