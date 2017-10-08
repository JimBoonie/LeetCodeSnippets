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

var list = [1, 4, 3, 5, 6, 2, 0, 7, 8];
console.log(mergeSort(list));