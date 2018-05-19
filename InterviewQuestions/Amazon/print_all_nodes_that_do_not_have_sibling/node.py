# Python Standard Libraries
# N/A
# Third-Party Libraries
# N/A
# Custom Libraries
# N/A


class Node(object):
    """
    Attributes:
        left (Node): left child
        right (Node): right child
        value (Integer): value in the node
    """

    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# ------------------------------------------------------------------------------


def generate_unbalanced_left_binary_tree():
    """
              1
            /   \
           2     3
          /     /
         4     5
        /
       6
      /
     7
     """
    node_one = Node(1)
    node_two = Node(2)
    node_three = Node(3)
    node_four = Node(4)
    node_five = Node(5)
    node_six = Node(6)
    node_seven = Node(7)

    node_six.left = node_seven
    node_four.left = node_six
    node_two.left = node_four

    node_three.left = node_five

    node_one.left = node_two
    node_one.right = node_three

    return node_one


def generate_complete_binary_tree():
    """
    Every level of the tree is filled except for the last level
    Last level must be flush from lef to right
          1
        /   \
       2     3
      / \   /
     4  5  6
     """
    node_one = Node(1)
    node_two = Node(2)
    node_three = Node(3)
    node_four = Node(4)
    node_five = Node(5)
    node_six = Node(6)
    # node_six = Node(7)

    node_one.left = node_two
    node_one.right = node_three

    node_two.left = node_four
    node_two.right = node_five

    node_three.left = node_six

    return node_one


def generate_full_binary_tree():
    """
    Every node has either zero or two children
          1
        /   \
       2     3
            / \
           6  7
          / \ 
         12 13
     """
    node_one = Node(1)
    node_two = Node(2)
    node_three = Node(3)
    node_four = Node(4)
    node_five = Node(5)
    node_six = Node(6)
    node_seven = Node(7)
    node_twelve = Node(12)
    node_thirteen = Node(13)

    node_six.left = node_twelve
    node_six.right = node_thirteen

    node_three.left = node_six
    node_three.right = node_seven

    node_one.left = node_two
    node_one.right = node_three

    return node_one


def generate_full_complete_binary_tree():
    """
    Every level of the tree is filled except for the last level
    Last level must be flush from lef to right
    Every node has either zero or two children
          1
        /   \
       2     3
      / \ 
     4  5
     """
    node_one = Node(1)
    node_two = Node(2)
    node_three = Node(3)
    node_four = Node(4)
    node_five = Node(5)
    # node_six = Node(6)
    # node_six = Node(7)

    node_one.left = node_two
    node_one.right = node_three

    node_two.left = node_four
    node_two.right = node_five

    return node_one


def generate_perfect_binary_tree():
    """
    Is a full binary tree
    Is a complete binary tree
    All leaf nodes are at the same level
    All the last level has all nodes filled
          1
        /   \
       2     3
      / \   / \
     4  5  6  7
     """
    node_one = Node(1)
    node_two = Node(2)
    node_three = Node(3)
    node_four = Node(4)
    node_five = Node(5)
    node_six = Node(6)
    node_seven = Node(7)

    node_one.left = node_two
    node_one.right = node_three

    node_two.left = node_four
    node_two.right = node_five

    node_three.left = node_six
    node_three.right = node_seven

    return node_one
