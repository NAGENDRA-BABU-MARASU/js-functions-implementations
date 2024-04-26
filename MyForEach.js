const myForEach = (array, callbackFn) => {
  for(const element of array) {
    callbackFn(element);
  }
  return undefined;
}


module.exports = myForEach;