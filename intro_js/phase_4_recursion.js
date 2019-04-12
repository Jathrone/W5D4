function range(start, end) {
  if (start === end) {
    return [start];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
}

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent1(base, exp-1);
}

function exponent2(base, exp) {
  if ( exp === 0) {
    return 1;
  }
  else if (exp === 1) {
    return base;
  }
  else if (exp % 2 === 0) {
    return exponent2(base, exp/2)^2;
  }
  else {
    exp = exp - 1;
    return base * (exponent2(base, exp / 2) ^ 2);
  }
}

console.log(exponent2(2, 10));