let a = [50, 20, 60, 20, 70];

function solution(a) {
    let oddIndexes = [];
    let evenIndexes = [];

    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 1) {
            oddIndexes.push(a[i]);
        } else {
            evenIndexes.push(a[i]);
        }
    }

    const sumOfOdds = oddIndexes.reduce((acc, current) => acc + current, 0);

    const sumOfEvens = evenIndexes.reduce((acc, current) => acc + current, 0);

    return [sumOfOdds, sumOfEvens];
}

console.log(solution(a));