var arrayPairSum = function(nums) {
    var mergeSort = function(list) {
        var merge = function(p, q, r, list) {
            // assuming max integer value: 10000
            const MAX_INT = 10000;
            var left_list = list.slice(p, q + 1);
            left_list.push(MAX_INT);
            var right_list = list.slice(q + 1, r + 1);
            right_list.push(MAX_INT);

            var i = j = 0;
            for (let k = p; k <= r; k++) {
                if (left_list[i] <= right_list[j]) {
                    list[k] = left_list[i];
                    i++;
                } else {
                    list[k] = right_list[j];
                    j++;
                }
            }

            return list;
        }

        var mergeSortRec = function(p, r, list) {
            if (p < r) {
                var q = Math.floor((p + r)/2);
                list = mergeSortRec(p, q, list);
                list = mergeSortRec(q + 1, r, list);
                list = merge(p, q, r, list);
            }

            return list;
        }

        return mergeSortRec(0, list.length - 1, list);
    }

    nums = mergeSort(nums);
    var sum = 0;
    for (let i = 0; i < nums.length; i = i + 2) {
        sum += Math.min(nums[i], nums[i + 1]);
    }
    return sum;
};

// var nums = [1, 4, 3, 2, 0, 0];
// var nums = [7, 3, 1, 0, 0, 6];
var nums = [-470, 66, -4835, -5623]
console.log(arrayPairSum(nums));