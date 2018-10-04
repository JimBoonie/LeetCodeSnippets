var mergeTrees = function(t1, t2) {
    if (t1 == null && t2 == null) {
        return null;
    }

    if (t1 == null) {
        var v1 = 0;
    } else {
        var v1 = t1.val;
    }
    if (t2 == null) {
        var v2 = 0;
    } else {
        var v2 = t2.val;
    }

    var node = {};
    node.val = v1 + v2;

    if (t1 == null) {
        node.left = mergeTrees(null, t2.left);
        node.right = mergeTrees(null, t2.right);
    } else if (t2 == null) {
        node.left = mergeTrees(t1.left, null);
        node.right = mergeTrees(t1.right, null);
    } else {
        node.left = mergeTrees(t1.left, t2.left);
        node.right = mergeTrees(t1.right, t2.right);
    }

    return node;
};

var treeify = function(T) {
    var leftIdx = function(p) {
        return (p << 1) + 1;
    }

    var rightIdx = function(p) {
        return (p << 1) + 2;
    }

    var TreeNode = function(T, i) {
        if (T[i] == null) {
            return null;
        }

        var node = {};
        node.val = T[i];
        
        let l_idx = leftIdx(i);
        if (l_idx >= T.length) {
            node.left = null;
        } else {
            node.left = TreeNode(T, l_idx);
        }
        
        let r_idx = rightIdx(i);
        if (r_idx >= T.length) {
            node.right = null;
        } else {
            node.right = TreeNode(T, r_idx);
        }

        return node;
    }

    var rootnode = TreeNode(T, 0);
    return rootnode;
}

var t1 = treeify([1, -3, 2, -5])
var t2 = treeify([2, -1, 3, null, 4, null, 7]);
console.log(mergeTrees(t1, t2));
