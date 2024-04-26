const myReduce = (values, initialValue = 0, callbackFn) => {
  let result = initialValue;

  for(const value of values){
    result = callbackFn(result, value)
  }

  return result;
}

module.exports = myReduce;