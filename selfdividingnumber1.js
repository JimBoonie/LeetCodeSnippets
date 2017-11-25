var selfDividingNumber = function(left, right) {
    numbers = [];

    for (var i = left; i <= right; i++) {
        i_str = i.toString();
        self_dividing = true;

        for (var j = 0; j < i_str.length; j++) {
            j_char = i_str.slice(j, j + 1);

            // if number contains zero, cannot be self-dividing
            if (j_char == '0' || i % parseInt(j_char) != 0) {
                self_dividing = false;
                break;
            }
        }

        // if i is self-dividing, add to list
        if (self_dividing) {
            numbers.push(i);
        }
    }

    return numbers;
};

var lbound = 125;
var rbound = 130;
console.log(selfDividingNumber(lbound, rbound));