// const array2 = ["A","B"]

// array2.push("C")
// // console.log(array2)

// // array2.pop("B")
// // console.log(array2)

// // array2.shift()
// // console.log(array2)

// // console.log(array2.unshift("L"))

// const c = ["z", "X"]
// const array3= array2.concat(c)
// console.log(array3)

// console.log(array3.slice(2,4))

// // console.log(array3.splice(2,4))

// console.log(array3.indexOf("C"))

// console.log(array3.includes("C"))



// const car= {
//     type : "CVICS", 
//     Model : "2012",
//     Color : "White"
// };
// // console.log(Object.values(car))
// // console.log(Object.keys(car))
// // console.log(Object.entries(car))
// // console.log(Object.assign(type,string))

// // console.log(Object.getOwnPropertyNames(car))

// // console.log(Object.freeze(car))

// console.log(Object.seal(car))


// function greet(name){
//     return name+" Hello"; 
// }
// console.log(greet("Suresh"))

// const greet = (name) => {
//     return "Hello "+name
// }
// console.log(greet("kUMAR"))

// const greet = function(name){
//     return "Hello "+name
// }
// console.log(greet("Suresh"))

// (function() {
//     console.log('I am immediately invoked.'); 
// })();

const number = [1,2,3,4,5,6,7,8,9,10]
const result = number.map(function(num,no){
    return num*no;
})
console.log(result,3)


