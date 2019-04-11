Array.prototype["myEach"] = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return undefined;
}

Array.prototype["myMap"] = function (callback) {
  new_arr = [];
  this.myEach( ele => new_arr.push(callback(ele)));
  return new_arr;
}

Array.prototype["myReduce"] = function (callback, initialValue=null) {
  if (initialValue === null) {
    let result = this[0];
    this.slice(1).myEach((ele) => { result = callback(result, ele) });
  }
  else {
    let result = initialValue;
    this.myEach( (ele) => {result = callback(result, ele)});
  }
  return result;
}



// NOTES

// Array.prototype["myMap"] = function (callback) {
//   new_arr = []
//   this.myEach(new_arr.push(callback))
//   return new_arr
// }

// Array.prototype["myMap"] = function (callback) {
//   new_arr = []
//   let new_callback = function (ele) {
//     new_arr.push(callback(ele))
//   }
//   this.myEach(new_callback)
//   return new_arr
// }

// Array.prototype["myMap2"] = function (callback) {
//   let new_arr = []
//   for (let i = 0; i < this.length; i++) {
//     new_arr.push(callback(this[i]));
//   }
//   return new_arr;
// }

