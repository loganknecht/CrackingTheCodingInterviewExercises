Given a Binary Tree your task is to print the nodes  which dont have a sibling node . You are required to complete the function printSibling. You should not read any input from stdin/console. There are multiple test cases. For each test case, this method will be called individually.

Input:
The task is to complete the function printSibling which takes 1 argument, root of the Tree .The struct node has a data part which stores the data, pointer to left child and pointer to right child.
There are multiple test cases. For each test case, this method will be called individually.

Output:
The function should print all the nodes separated by space which don't have sibling in the tree in sorted order if every node has a tree than print -1.

Constraints:
1 <=T<= 30
1 <=Number of nodes<= 100
1 <=Data of a node<= 1000

Example:

Input
1
1
1 2 L 

Output 
2


In above example there is one  test case which represents a  tree with 2 nodes and 1 edge where root is 1, left child of 1 is 2 .

Note: The Input/Ouput format and Example given are used for system's internal purpose, and should be used by a user for Expected Output only. As it is a function problem, hence a user should not read any input from stdin/console. The task is to complete the function specified, and not to write the full code.

** For More Input/Output Examples Use 'Expected Output' option **