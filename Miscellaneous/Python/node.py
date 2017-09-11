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
