function sumElements(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const myArr = [1, 5, 8, 8];
const result = sumElements(myArr);

console.log(result);

function sumArray(numbers) {
    return numbers
        .filter(num => typeof num === "number")
        .reduce((sum, num) => sum + num, 0);
}

const stringArr = ['BMW', 'AUDI', 'VW'];
const numberArr = [2, 4, 6, 8];

const resultNumbers = sumArray(numberArr);
console.log(resultNumbers);

const resultStrings = sumArray(stringArr);
console.log(resultStrings);
