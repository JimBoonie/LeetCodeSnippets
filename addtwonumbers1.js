var addTwoNumbers = function(l1, l2) {
    var lo = [];
    var remain = false;
    for (var i = 0; i < l1.length; i++) {
        var sum = l1[i] + l2[i];
        if (remain) { sum = sum + 1; }
        lo.push(sum%10);
        remain = (Math.floor(sum/10) > 0);
    }

    if (remain) { lo.push(1); }
    
    return lo;
};

var l1 = [2, 4, 3];
var l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));