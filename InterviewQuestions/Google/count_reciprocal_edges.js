Given a directed graph G = (V, E) and vertices A, B in V, an edge(A, B) in E is reciprocated
if there is an edge(B, A) in E.

Return the number of edges in an array that are reciprocated.

A, B
B, A
A, B
A, A

4

AA, B
A, AB
AB, A

2

// edges = [{src: “a”, dst: “b”}, …]
var recip = function(edges)

function hash(string) {
    return some_other_string;
}

function count_reciprocal_edges(array) {
    var match_dict = {};
    var total_edges = 0;
    for(var i = 0; i < array.length; i++) {
        var forward_hash = hash(edges[i].src) + hash(edges[i].dst);
        var backward_hash = hash(edges[i].dst) + hash(edges[i].src);

        if(!match_dict.hasOwnKey(forward_hash)) {
            match_dict[forward_hash] = true;
        }
        if(match_dict.hasOwnKey(backward_hash)) {
            total_edges += 2;
        }
    }

    return total_edges;
}

function count_reciprocal_edges(array) {
    var match_dict = {};
    var total_edges = 0;
    for(var i = 0; i < array.length; i++) {
        var forward_hash = hash(edges[i].src) + hash(edges[i].dst);
        var backward_hash = hash(edges[i].dst) + hash(edges[i].src);

        if(!match_dict.hasOwnKey(forward_hash)) {
            match_dict[forward_hash] = false;
        }
        else {
            total_edges += 1;
        }

        if(match_dict.hasOwnKey(backward_hash)) {
            match_dict[backward_hash] = false;
        }
        else {
            total_edges += 1;
        }
    }

    return total_edges;
}

function build_edge_map(array) {
    var match_dict = {};

    for(var i = 0; i < array.length; i++) {
        var forward_hash = hash(edges[i].src) + hash(edges[i].dst);
        var backward_hash = hash(edges[i].dst) + hash(edges[i].src);

        if(!match_dict.hasOwnKey(forward_hash)) {
            match_dict[forward_hash] = true;
        }
    }

    return match_dict;
}

function count_reciprocal_edges(edges) {
    var edge_map = build_edge_map(edges);
    var total_edge_count = 0;
    for(var i in edges) {
        var forward_hash = hash(edges[i].src) + hash(edges[i].dst);
        var backward_hash = hash(edges[i].dst) + hash(edges[i].src);
        if(edge_map.hasOwnKey(backward_hash)) {
            total_edge_count++;
        }
    }
}

var edge = {
    src: “”,
    dst: “”,
    hash: function() { // returns string }
    }
}

a,
a
a,
b
b,
a
b,
b

4

total_edges = 1;
aa: false
ab: false

map < edge,
    bool >
