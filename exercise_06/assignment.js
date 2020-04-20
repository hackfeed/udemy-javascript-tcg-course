const nums = [1, 2, 3, 8, 9];

const numsFiltered = nums.filter((n) => n > 5);
const numsMapped = nums.map((n) => ({ num: n }));
const numsReduced = nums.reduce((prev, cur) => prev * cur, 1);

console.log(numsFiltered);
console.log(numsMapped);
console.log(numsReduced);

const findMax = (...nums) => {
  let max = nums[0];
  let min = max;
  for (const num of nums) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return [min, max];
};

const [min, max] = findMax(...nums);

console.log(min, max);

const unique = new Set();
unique.add(1);
unique.add(2);
unique.add(1);

console.log(unique);
