let array = [50, 20, 60, 20, 70];

function solution(array) {
    let oddIndexes = [];
    let evenIndexes = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 1) {
            oddIndexes.push(array[i]);
        } else {
            evenIndexes.push(array[i]);
        }
    }

    const sumOfOdds = oddIndexes.reduce((acc, current) => acc + current, 0);

    const sumOfEvens = evenIndexes.reduce((acc, current) => acc + current, 0);

    return [sumOfOdds, sumOfEvens];
}

console.log(solution(arr));