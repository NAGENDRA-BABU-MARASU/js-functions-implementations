const myMap = (array, callbackFn) => { 
  const resultArray = [];
  for (const element of array){
    const result = callbackFn(element);
    resultArray.push(result);
  }

  return resultArray;
}

module.exports = myMap;