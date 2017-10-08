var twoSum = function(nums, target) {
    var hashmap = new Map();
    for (var i = 0; i < nums.length; i++) {
        hashmap.set(nums[i], i);
    }

    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (hashmap.has(complement) && hashmap.get(complement) != i) {
            return [i, hashmap.get(complement)]
        }
    }

    return false;
};

// test
var nums = [3, 2, 4];
var target = 6;
console.log(twoSum(nums, target));
