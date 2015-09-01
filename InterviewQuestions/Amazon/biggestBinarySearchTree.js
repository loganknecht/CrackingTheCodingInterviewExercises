// Given a Binary Tree, write a function that returns the size of the largest 
// subtree which is also a Binary Search Tree (BST). If the complete Binary Tree 
// is BST, then return the size of whole tree.

var vertex = {
    val: "N/A",
    was_visited: false,
    connected_vertices: [],
    toString: function vertexToString() {
        return this.val;
    }
};
