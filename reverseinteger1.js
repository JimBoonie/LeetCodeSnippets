var reverseInteger = function(x) {
    var rx = 0;
    var prev_rx = 0;
    while (x !== 0) {
        var curr_digit = x%10;
        rx = 10*rx + curr_digit;
        x = (x - x % 10) / 10;

        if (((rx - curr_digit)/10 != prev_rx) || (rx > 2147483647) || (rx < -2147483646)) {
            return 0;
        }

        prev_rx = rx;
    }

    return rx;
}

var x = 2147483648;
console.log(reverseInteger(x));