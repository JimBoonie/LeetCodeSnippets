var numJewelsInStones = function(J, S) {
    let j_set = new Set(J);

    let past_set = new Set("");
    let n_jewels = 0;
    for (let i = 0; i < S.length; i++) {
        if (j_set.has(S[i])) {
            n_jewels += 1;
        }
    }
    return n_jewels;
};

J = "aA";
S = "aAAbbbb";

console.log(numJewelsInStones(J, S));