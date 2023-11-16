// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
const [, first] = data.lists[0] || [, []];
const [, second] = data.lists[1] || [, []];
const [, third] = data.lists[2] || [, []];

const result = [];

const extractBiggest = () => {
    const firstLast = first.slice(-1)[0] || -Infinity;
    const secondLast = second.slice(-1)[0] || -Infinity;
    const thirdLast = third.slice(-1)[0] || -Infinity;


    if (firstLast >= secondLast && firstLast >= thirdLast) {
        result.push(first.pop());
    } else if (secondLast >= firstLast && secondLast >= thirdLast) {
        result.push(second.pop());
    } else {
        result.push(third.pop());
    }
}
// const { first = 1 } = data.first || {}
// const { second = 1 } = data.second || {}
// const { third = 1 } = data.third || {}

// const result = [ ]
// console.log(first)
// console.log(second)
// console.log(third)

// const extractBiggest = () => {
//     if (first[first.length -1] > second[second.length -1]) {
//         return first
//     }

//     if (third[third.length -1] < 1) {
//         return second
//     }
    
//     return third
// }


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)