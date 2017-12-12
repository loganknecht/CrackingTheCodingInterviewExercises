"""Based on
http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
"""
# Python Standard Libraries
# N/A
# Third-Party Libraries
# N/A
# Custom Libraries
import node
import trees


def pre_order_search(current_node):
    """Uses of Preorder

    Preorder traversal is used to create a copy of the tree.

    Preorder traversal is also used to get prefix expression on of an
        expression tree.

    Please see http://en.wikipedia.org/wiki/Polish_notation to know why
        prefix expressions are useful.
    """
    is_node_valid = (current_node is not None and
                     type(current_node) is node.Node)
    has_left_node = (is_node_valid and
                     current_node.left is not None)
    has_right_node = (is_node_valid and
                      current_node.right is not None)

    if is_node_valid:
        print("Current Node: {}".format(current_node.value))
    if has_left_node:
        pre_order_search(current_node.left)
    if has_right_node:
        pre_order_search(current_node.right)


def in_order_search(current_node):
    """Uses of Inorder
    In case of binary search trees (BST), Inorder traversal gives nodes
        in non-decreasing order.

    To get nodes of BST in non-increasing order, a variation of Inorder
        traversal where Inorder traversal is reversed, can be used.
    """
    is_node_valid = (current_node is not None and
                     type(current_node) is node.Node)
    has_left_node = (is_node_valid and
                     current_node.left is not None)
    has_right_node = (is_node_valid and
                      current_node.right is not None)

    if has_left_node:
        in_order_search(current_node.left)
    if is_node_valid:
        print("Current Node: {}".format(current_node.value))
    if has_right_node:
        in_order_search(current_node.right)


def post_order_search(current_node):
    """Uses of Postorder

    Postorder traversal is used to delete the tree.

    Please see the question for deletion of tree for details.

    Postorder traversal is also useful to get the postfix expression of
        an expression tree.

    Please see http://en.wikipedia.org/wiki/Reverse_Polish_notation to
        for the usage of postfix expression.
    """
    is_node_valid = (current_node is not None and
                     type(current_node) is node.Node)
    has_left_node = (is_node_valid and
                     current_node.left is not None)
    has_right_node = (is_node_valid and
                      current_node.right is not None)

    if has_left_node:
        post_order_search(current_node.left)
    if has_right_node:
        post_order_search(current_node.right)
    if is_node_valid:
        print("Current Node: {}".format(current_node.value))


if __name__ == "__main__":
    root_node = trees.generate_complete_binary_tree()

    print("// " + "-" * 20)
    print("// Pre-Order")
    print("// " + "-" * 20)
    pre_order_search(root_node)

    print("// " + "-" * 20)
    print("// In-Order")
    print("// " + "-" * 20)
    in_order_search(root_node)

    print("// " + "-" * 20)
    print("// Post-Order")
    print("// " + "-" * 20)
    post_order_search(root_node)
