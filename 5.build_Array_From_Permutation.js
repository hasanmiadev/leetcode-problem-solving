/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const n = nums.length;
    const ans = new Array(n);
    for (let i = 0; i < n; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};

const nums = [0,2,1,5,3,4];
const result = buildArray(nums);
console.log(result);