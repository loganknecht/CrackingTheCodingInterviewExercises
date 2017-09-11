"""
TODO: Make a better tree generator

Variations of tree types will always be using this tree

             1
            / \
       2           3
      / \         / \
    4     5     6     7
   / \   / \   / \   / \
  8  9 10  11 12 13 14 15
"""

# Python Standard Libraries
# N/A
# Third-Party Libraries
# N/A
# Custom Libraries
from node import Node

# Configuration


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
    # TODO


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
