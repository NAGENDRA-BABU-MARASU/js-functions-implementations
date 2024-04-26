const myFilter = (array, callbackFn) => {
  const resultArray = []
  for (const element of array){
    if (callbackFn(element)){
      resultArray.push(element);
    }
  }

  return resultArray;
}

module.exports = myFilter;