var addTwoNumbers = function(l1, l2) {
    let rem = 0;
    let lsum = [];
    do {
        let n1 = 0
        let n2 = 0;
        if (l1 !== null) {
            n1 = l1.val;
        } 
        if (l2 !== null) {
            n2 = l2.val;
        }

        let nsum = (n1 + n2 + rem) % 10;
        rem = (n1 + n2 + rem) >= 10 ? 1 : 0;

        lsum.push(nsum);
        
        if (l1 !== null) {
            l1 = l1.next;   
        }
        if (l2 !== null) {
            l2 = l2.next;   
        }
    } while (l1 || l2)

    if (rem > 0) {
        lsum.push(rem);
    }
    
    return lsum;     
};

var NodesList = function(l) {
    node_prev = null;
    for (let i = l.length - 1; i >= 0; i--) {
        var node = {};
        node.val = l[i];
        node.next = node_prev;

        node_prev = node;
    }
    return node;
}

l1 = [1, 0, 0, 1];
l2 = [0, 1];
l1 = NodesList(l1);
l2 = NodesList(l2);

console.log(addTwoNumbers(l1, l2));
