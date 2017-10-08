const hammingDistance = (x, y) => {
    let val = x ^ y;

    let distance;
    for (distance = 0; val > 0; distance++) {
        val &= val - 1;
    }

    return distance;
};

var x = 27;
var y = 36;
console.log(hammingDistance(x, y));