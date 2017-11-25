var reverseWords = function(s) {
    s_out = [];
    var inside = false;
    var begin = 0;
    var end = s.length;

    for (var i = 0; i < s.length; i++) {
        // if entered a word, mark beginning
        if (!inside && s[i] != " ") {
            inside = true;
            begin = i;
        }

        // if exiting a word, start reversing
        if (inside && (i + 1 == s.length || s[i + 1] == ' ')) {
            inside = false;
            end = i + 1;
            
            for (var j = 0; j < end - begin; j++) {
                var idx = end - (j + 1);
                s_out.push(s.slice(idx, idx + 1));
            }
        }

        // if at a space, add that to output string
        if (s.slice(i, i + 1) == " ") {
            s_out.push(" ")
        }
    }

    return s_out.join("");
};

var my_str = "Let's take LeetCode contest";
console.log(reverseWords(my_str));