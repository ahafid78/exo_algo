const arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6, 7];

function distinct(arr1, arr2) {
  let sum = 0;

  for (el of arr1) {
    if (arr2.includes(el)) {
      continue;
    } else {
      sum += el;
    }
  }

  for (el of arr2) {
    if (arr1.includes(el)) {
      continue;
    } else {
      sum += el;
    }
  }
  return sum;
}

const sumArr = distinct(arr1, arr2);
console.log(`Sum of all distinct element in 2 arrays : ${sumArr}`);