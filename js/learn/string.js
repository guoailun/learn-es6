// 循环遍历字符串
for (let codePoint of 'foo') {
    // console.log(codePoint)
}

// includes()：  返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：  返回布尔值，表示参数字符串是否在原字符串的尾部。
// 这三个方法都支持第二个参数，表示开始搜索的位置。

let s = 'Hello world!';
s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

//console.log(s.startsWith('Hello world!1'));  // ====> false

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false

// console.log(s.startsWith('H', 0));
// console.log(s.endsWith('Hell', 4));

// repeat();
let str = 'x';
console.log(str, str.repeat(2));