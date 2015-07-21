// Route Between Nodes:
// Given a directed graph, design an algorithm to find out whether there is a 
// route between two nodes
// Hints: #20, #32, #48, #126
//------------------------------------------------------------------------------
// Alright so off the cuff, all I've got to go off of is that this a directed graph
// So I guess it's just kind of how you want to iterate through a set of n branches of depth d

// For this exercise I will choose to iterate through the connected branches in a breadth first
// style on the assumption that the vertex is adjacent, and breadth first finds proximal nodes sooner

var vertex = {
    val: "N/A",
    was_visited: false,
    connected_vertices: [],
    toString: function vertexToString() {
        return this.val;
    }
};

// debugVert = Object.create(vertex);
// console.log(debugVert.__proto__);
// console.log(debugVert.val);
// console.log(debugVert.connected_vertices);

function ChooseRandomSet(setToChooseFrom, setToReturn, minimumAmountToChoose, selectionProbability) {
    // TODO: do boundary condition check that setToChooseFrom > 0 
    // TODO: do boundary condition check that minimumAmountToChoose > 0 and < setToChooseFrom
    // TODO: do boundary condition check that selectionProbablity > 0 and < 1
    for(var i = 0; i < setToChooseFrom.length; i++) {
        var probability = Math.random();
        if(probability < selectionProbability) {
            // console.log("The index " + i + " was selected.");
            setToReturn.push(setToChooseFrom[i]);
        }
    }
    if(setToReturn.length == 0) {
        console.log("No items were selected, retrying selection");
        return ChooseRandomSet(setToChooseFrom, setToReturn, minimumAmountToChoose, selectionProbability);
    }
    else {
        return setToReturn;
    }
}

function ContainsValue(arrayToSearch, objectToSearchFor) {
    var foundObject = false;
    for(var i = 0; i < arrayToSearch.length; i++) {
        if(objectToSearchFor.val === arrayToSearch[i].val) {
            console.log("Matched!!!");
            foundObject = true;
            break;
        }
    }
    return foundObject;
}


/** 
 * inputs 
 * startVertex - This is a vertex object
 * end_vertex - This is a vertex object
 * path - This is an array of vertex objects that in order represent the current path traversed
 * vertex_queue - This is an array of vertex objects that are being searched
 * returns - path as array/list from the start vertex to the end vertex
 */
function breadthSearchForPathToVertex(current_vertex, end_vertex, path, vertex_queue) {
    var connected_vertices = current_vertex.connected_vertices;
    console.log("--------------------------------------------")
    console.log("In vertex: " + current_vertex.val)
    for(var i = 0; i < connected_vertices.length; i++) {
        var candidate_vertex = connected_vertices[i];
        // if(candidate_vertex.was_visited == false) {
        if(!ContainsValue(path, candidate_vertex)) {
            vertex_queue.push(candidate_vertex);
            console.log("Connected to: " + candidate_vertex.val);
        }
    }
    console.log("Current Path: " + path);

    var newPath = path.slice(0);
    newPath.push(current_vertex);
    // current_vertex.was_visited = true;
    // For sure exit condition
    if(current_vertex == end_vertex) {
        path.push(end_vertex);
        console.log("Found the path to the vertex: " + path);
        return;
    }

    if(vertex_queue.length != 0) {
        // current_vertex = vertex_queue[0]; // head
        // vertex_queue = vertex_queue.slice(1); // tail
        breadthSearchForPathToVertex(vertex_queue[0], end_vertex, newPath, vertex_queue.slice(0));
    }
    else {
        console.log("Found the path to the vertex: " + path);
        return;
    }
}
//------------------------------------------------------------------------------
// End of function declarations
//------------------------------------------------------------------------------
a = Object.create(vertex);
b = Object.create(vertex);
c = Object.create(vertex);
d = Object.create(vertex);
e = Object.create(vertex);
f = Object.create(vertex);
g = Object.create(vertex);
h = Object.create(vertex);
i = Object.create(vertex);

a.val = "A";
b.val = "B";
c.val = "C";
d.val = "D";
e.val = "E";
f.val = "F";
g.val = "G";
h.val = "H";

var setToChooseFrom = [a, b, c, d, e, f, g, h];

// Generate each copy of the initial set
var setsChosen = [];
for(var i = 0; i < setToChooseFrom.length; i++) {
    var newSet = setToChooseFrom.slice(0);
    newSet.splice(i, 1); // removes default index included
    setsChosen.push(newSet);
}

// Creates and configures randomly selected values from the generated sets
for(var i = 0; i < setsChosen.length; i++) {
    setsChosen[i] = ChooseRandomSet(setsChosen[i], [], 1, 0.5);
    console.log(setToChooseFrom[i] + " connected vertice list: " + setsChosen[i]);
    setToChooseFrom[i].connected_vertices = setsChosen[i];
}

//------------------------------------------------------------------------------
// DFS Solution
//------------------------------------------------------------------------------
function DepthSearch(start_vertex, end_vertex, oldPath) {
    var path = oldPath.slice();
    path.push(start_vertex);
    var current_vertex = start_vertex;
    console.log("current_vertex: " + current_vertex + " - end_vertex: " + end_vertex);

    if(current_vertex == end_vertex) {
        console.log("Found the path!!!");
        return path;
    }
    if(!current_vertex.was_visited) {
        current_vertex.was_visited = true;
    }
    for(var i = 0; i < current_vertex.connected_vertices.length; i++) {
        if(current_vertex.connected_vertices[i].was_visited == false) {
            console.log(current_vertex + " wasn't was_visited, diving in.");
            return DepthSearch(current_vertex.connected_vertices[i], end_vertex, path);
        }
    }
}

//------------------------------------------------------------------------------
// Solution Output
//------------------------------------------------------------------------------
var foundpath = DepthSearch(a, h, []);
for(var i = 0; i < foundpath.length; i++) {
    console.log("-------------------------------------");
    console.log("Vertex: " + foundpath[i]);
    console.log("Connecteved Vertices: " + foundpath[i].connected_vertices);
}
