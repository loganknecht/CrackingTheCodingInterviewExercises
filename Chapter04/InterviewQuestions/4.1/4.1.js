// Route Between Nodes:
// Given a directed graph, design an algorithm to find out whether there is a 
// route between two nodes
// Hints: #20, #32, #48, #126
//------------------------------------------------------------------------------
// Alright so off the cuff, all I've got to go off of is that this a directed graph
// So I guess it's just kind of how you want to iterate through a set of n branches of depth d

// For this exercise I will choose to iterate through the connected branches in a breadth first
// style on the assumption that the tile is adjacent, and breadth first finds proximal nodes sooner

var vertex = {
    value: "N/A",
    connected_vertices: [],
}

// debugVert = Object.create(vertex);
// console.log(debugVert.__proto__);
// console.log(debugVert.value);
// console.log(debugVert.connected_vertices);

function ChooseRandomSet(setToChooseFrom, setToReturn, minimumAmountToChoose, selectionProbability) {
    // TODO: do boundary condition check that setToChooseFrom > 0 
    // TODO: do boundary condition check that minimumAmountToChoose > 0 and < setToChooseFrom
    // TODO: do boundary condition check that selectionProbablity > 0 and < 1
    for(var i = 0; i < setToChooseFrom.length; i++) {
        var probability = Math.random();
        if(probability < selectionProbability) {
            console.log("The index " + i + " was selected.");
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

a = Object.create(vertex);
b = Object.create(vertex);
c = Object.create(vertex);
d = Object.create(vertex);
e = Object.create(vertex);
f = Object.create(vertex);
g = Object.create(vertex);
h = Object.create(vertex);
i = Object.create(vertex);

var setToChooseFrom = [a, b, c, d, e, f, g, h, i];
a.connected_vertices = ChooseRandomSet(setToChooseFrom, [], 1, 0.5);
b.connected_vertices = ChooseRandomSet(setToChooseFrom, [], 1, 0.5);
c.connected_vertices = ChooseRandomSet(setToChooseFrom, [], 1, 0.5);
d.connected_vertices = ChooseRandomSet(setToChooseFrom, [], 1, 0.5);
e.connected_vertices = ChooseRandomSet(setToChooseFrom, [], 1, 0.5);
f.connected_vertices = ChooseRandomSet(setToChooseFrom, [], 1, 0.5);
g.connected_vertices = ChooseRandomSet(setToChooseFrom, [], 1, 0.5);
h.connected_vertices = ChooseRandomSet(setToChooseFrom, [], 1, 0.5);
i.connected_vertices = ChooseRandomSet(setToChooseFrom, [], 1, 0.5);
