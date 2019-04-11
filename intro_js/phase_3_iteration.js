Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (sorted === false) {
    sorted = true
    for ( let i=0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        sorted = false;
        this[i] = [this[i+1], this[i+1]=this[i]][0]
      }
    }
  }
  return this
}

String.prototype.substrings = function () {
  let subs = [];
  for (let i = 0; i < this.length ; i++) {
    for (let j = i+1; j <= this.length ; j++) {
      subs.push(this.slice(i, j));
    }
  }
  return subs;
}

// arr1 = new Array(1, 2,5,2,7,3, 2)
// console.log(arr1.bubbleSort())