import node

# sorted order
# print all nodes separated by spaces which don't have siblings in the tree

# Should be 1, 3, and 6


def printSibling(node, nodes_without_siblings):
    does_left_node_exist = (node.left is not None)
    does_right_node_exist = (node.right is not None)
    do_both_nodes_exist = (node.right is not None
                           and node.left is not None)
    if do_both_nodes_exist:
        pass
    elif does_left_node_exist:
        nodes_without_siblings.append(node.left.value)
    elif does_right_node_exist:
        nodes_without_siblings.append(node.right.value)
    else:
        # Do nothing
        pass

    if does_left_node_exist:
        printSibling(node.left, nodes_without_siblings)
    if does_right_node_exist:
        printSibling(node.right, nodes_without_siblings)

    return nodes_without_siblings


# root_node = node.generate_complete_binary_tree()
# root_node = node.generate_full_binary_tree()
root_node = node.generate_unbalanced_left_binary_tree()

nodes_without_siblings = []

printSibling(root_node, nodes_without_siblings)
# print(" ".join(str(x) for x in sorted(nodes_without_siblings)))
print(" ".join(str(x) for x in nodes_without_siblings))


print("Done!")
