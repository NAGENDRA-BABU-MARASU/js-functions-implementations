const myMap = require('./MyMap');
const myFilter = require('./MyFilter');
const myReduce = require('./MyReduce');
const myForEach = require('./MyForEach');

// 1.map 
const values = [1, 2, 3, 4];
const square = (num) => Math.pow(num, 2);
const myMapResult = myMap(values, square);
console.log(myMapResult)

// 2.filter 
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const isLengthGreaterThan6 = (word) => word.length > 6;
const myFilterResult = myFilter(words, isLengthGreaterThan6);
console.log(myFilterResult);

// 3.reduce
const valuesForReduce = [1,2,3,4,5];
const initialValue = 0;
const additionCallbackFn = (accumulator, currentValue) => accumulator + currentValue
const summationOfValues = myReduce(valuesForReduce, initialValue, additionCallbackFn);
console.log(summationOfValues)

// 4.forEach 
const names = ['Ace', 'Luffy', 'Dragon']
const greet = (name) => console.log(`Hi, ${name}, Have a good day.`)
myForEach(names, greet);
