Array.prototype["uniq"] = function () {
  let unique = []; 
  for (let i = 0; i < this.length; i++) {
    if (unique.includes(this[i])) {
      continue;
    } 
    else {
      unique.push(this[i]);
    }
  }
  return unique;
}

Array.prototype["twoSum"] = function () {
  let pairs = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j=i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}

Array.prototype["transpose"] = function () {
  let new_arr = []
  let sub_arr
  for (let i=0; i < this[0].length; i++) {
    sub_arr = []
    for (let j=0; j < this.length; j++) {
      sub_arr.push(this[j][i]);
    }
    new_arr.push(sub_arr);
  }
  return new_arr;
}

// arr1 = new Array([1,2,-1],[3,-2, 0])
// console.log(arr1.transpose())

