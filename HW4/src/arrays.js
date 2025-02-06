const numberArr = [1, 2, 3, 333];
console.log(numberArr);

const stringArr = ['BMW', 'AUDI', 'VW'];
console.log(stringArr);

const booleanArr = [true, false];
console.log(booleanArr);

const anyArr = [5, 'KIA', false, {say: "hello"}];
console.log(anyArr);

numberArr.push(4);
console.log(numberArr);

const filteredArray = anyArr.filter((el) => typeof el === 'number');
console.log(filteredArray);

const foundElement = anyArr.find((el) => typeof el === 'string');
console.log(foundElement);

const sortedArray = numberArr.sort();
console.log(sortedArray);

const sortedArray2 = numberArr.sort((a, b) => b - a);
console.log(sortedArray2);

const concatArrays = numberArr.concat(booleanArr);
console.log(concatArrays);

const arrNumbers = [];
concatArrays.forEach((el) => {
    if (typeof el === 'boolean'){
        arrNumbers.push(el);
    }
});
console.log(arrNumbers);

const arrNumbers2 = anyArr.map((el) => {
    if (typeof el === 'string') {
        return el;
    }
    return null;
});
console.log(arrNumbers2);
