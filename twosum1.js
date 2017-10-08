var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var left = nums[i];

        for (var j = i + 1; j < nums.length; j++) {
            var right = nums[j];

            if (left + right == target) {
                return [i, j];
            }
        }
    }
    
    return false;
};

// test
var nums = [3, 2, 4];
var target = 6;
console.log(twoSum(nums, target));
