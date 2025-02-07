/*

Graphs

A graph is a collection of nodes (also called vertices) and edges (also called links) that connect pairs of nodes. Graphs are used to model relationships between objects or entities.

Graphs can be used to represent a wide range of real-world problems, such as social networks, transportation networks, and computer networks.

There are two main types of graphs: directed graphs and undirected graphs. In a directed graph, the edges have a direction, while in an undirected graph, the edges have no direction.

Graphs can be represented using various data structures, such as adjacency matrices, adjacency lists, and adjacency trees. The choice of data structure depends on the specific problem and the operations that need to be performed on the graph.

*/

class Graph {
  constructor() {
    this.nodes = {
      1: { name: 'Node 1', neighbors: [2, 3], isSeller: true },
      2: { name: 'Node 2', neighbors: [3, 4], isSeller: false },
      3: { name: 'Node 3', neighbors: [1, 4], isSeller: false },
      4: { name: 'Node 4', neighbors: [2, 3, 5], isSeller: false },
      5: { name: 'Node 5', neighbors: [4], isSeller: false },
    };

    this.visitedNodes = [];
  }


  getFirstSeller(startingNode) {
    let currentNode = startingNode;
    this.visitedNodes.push(currentNode);

    if (this.nodes[currentNode].isSeller) {
      console.log(currentNode, "is a seller.");
    } else {
      console.log(currentNode, "is not a seller.");
    }

    for (let node in this.nodes[currentNode].neighbors) {
      const nextNode = this.nodes[currentNode].neighbors[node];

      if (!this.visitedNodes.includes(nextNode)) {
        console.log("\nVisiting node", nextNode);
        return this.getFirstSeller(nextNode)
      }
    }
  }
}

const graph = new Graph();
console.log(graph.getFirstSeller(5));

/*
 Djikstra's Algorithm
 
 The Djikstra's algorithm is an algorithm for finding the shortest path between two nodes in a graph.

 The algorithm works by maintaining a set of nodes that have been visited and a set of nodes that have not been visited. It starts at a given node and explores the graph by selecting the node with the smallest distance from the starting node and adding it to the visited set. It then selects the node with the smallest distance from the current node and adds it to the visited set. This process continues until all nodes have been visited.
 
 */


