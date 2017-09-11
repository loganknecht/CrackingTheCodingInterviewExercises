# Level-order?
# I just know this as a queue

# Python Standard Libraries
# N/A
# Third-Party Libraries
# N/A
# Custom Libraries
from node import Node
import trees


def breadth_first_search(node_queue):
    """Sometimes this is called 'level-order' searching
    """

    can_current_node_be_processed = (len(node_queue) > 0)
    if can_current_node_be_processed:
        current_node = node_queue.pop(0)

        print("Current Node: {}".format(current_node.value))

        if current_node.left:
            node_queue.append(current_node.left)
        if current_node.right:
            node_queue.append(current_node.right)

    can_next_node_be_processed = (len(node_queue) > 0)
    if can_next_node_be_processed:
        breadth_first_search(node_queue)


if __name__ == "__main__":
    root_node = trees.generate_complete_binary_tree()

    node_queue = []
    node_queue.append(root_node)

    breadth_first_search(node_queue)
