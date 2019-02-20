// console.log(...[1, 2, 3])
// console.log(1, ...[2, 3, 4], 5)
// console.log(1, ...[2, 3, 4, [0, [1,2]]], 5)

let x = 0;
const arr = [
    ...(x > 0 ? ['a'] : []),
    'b',
];

// console.log(arr);

function push(array, ...items) {
    array.push(...items);
    return array;
}

function add(x, y) {
    return x + y;
}

const numbers = [4, 38];
// console.log(add(...numbers));
// console.log(push(arr, 4, 38));


// console.log( Math.max(...[14, 3, 77]));
// console.log( Math.max(14, 3, 79));
// console.log(Math.max.apply(null, [14, 3, 80]));

// console.log(new Date(...[2015, 1, 1]));


const a1 = [1, 2, [3, 4]];
// 写法一
const a2 = [...a1];
a1.push(5);

a1[2].push(5);
// 写法二
// const [...a2] = a1;
// console.log(a1, a2);

// console.log(Array.from('hello'));
let arr1 = [1, 2, 3];
let arr2 = Array.from(arr1);
// console.log(arr1, arr2.push(4), arr2);

// console.log(Array(), Array(4), Array(1, 2), Array(1, 2, 3));
// console.log(Array.of(), Array.of(4), Array.of(1, 2), Array.of(1, 2, 3), Array.of(undefined), Array.of(null), Array.of('a'));

let a = [1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}) // 10
// console.log(a);

// for (const index of ['a', 'b'].keys()) {
//     console.log(index);
// }

let letter = ['a', 'b', 'c'];
let entries = letter.entries();
// console.log(entries.next().value); // [0, 'a']
// console.log(entries.next().value); // [1, 'b']
// console.log(entries.next().value); // [2, 'c']

// console.log( [NaN].includes(NaN));

// let arr3 = [1, 2, [3, 4]];
// console.log(arr3.flat(), arr3);


