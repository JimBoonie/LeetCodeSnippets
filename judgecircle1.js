var judgeCircle = function(moves) {
    let x = y = 0;
    for (let v of moves) {
        switch (v) {
            case "U":
                x += 1;
                break;
            case "D":
                x -= 1;
                break;
            case "R":
                y += 1;
                break;
            case "L":
                y -= 1;
                break;
            default:
                break;
        }
    }

    if (x === 0 && y === 0) {
        return true;
    } else {
        return false;
    }
};

moves = "URDL";
console.log(judgeCircle(moves));