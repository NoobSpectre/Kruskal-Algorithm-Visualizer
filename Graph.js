export default class Graph {
  #directed;
  #adjList;
  #vertices;

  constructor(vertices, directed = true) {
    this.#directed = directed;
    this.#vertices = vertices;
    this.#adjList = new Map();
    for (let i = 0; i < vertices; i++) {
      this.#adjList.set(i, []);
    }
  }

  getNumOfVertices() {
    return this.#vertices;
  }

  getGraph() {
    const list = {};

    for (const [k, v] of this.#adjList) {
      list[k] = Array.from(v);
    }

    return list;
  }

  addEdge(src, dest, weight = 1) {
    if (this.#adjList.has(src) && this.#adjList.has(dest)) {
      this.#adjList.get(src).push([dest, weight]);
      if (!this.#directed) {
        this.#adjList.get(dest).push([src, weight]);
      }
    }
    // else throw new Error("Vertex doesn't exist in the graph!");
  }
}

export class DisjointSet {
  #rank;
  #parentList;

  constructor(vertices) {
    this.#rank = {};
    this.#parentList = {};
    for (let i = 0; i <= vertices; i++) {
      this.#rank = { ...this.#rank, [i]: 0 };
      this.#parentList = { ...this.#parentList, [i]: i };
    }
  }

  findParent(node) {
    if (node === this.#parentList[node]) return node;
    return (this.#parentList[node] = this.findParent(this.#parentList[node]));
  }

  unionByRank(src, dest) {
    const u = this.findParent(src);
    const v = this.findParent(dest);

    if (u === v) return;
    if (this.#rank[u] < this.#rank[v]) {
      this.#parentList[u] = v;
    } else if (this.#rank[u] > this.#rank[v]) {
      this.#parentList[v] = u;
    } else {
      this.#parentList[u] = v;
      this.#rank[u]++;
    }
  }
}

export const getMST = gp => {
  const numOfVertices = gp.getNumOfVertices();
  const graph = gp.getGraph();
  const MST = new Graph(numOfVertices);
  let edges = [];

  // storing the edges in the edges array
  for (const k in graph) {
    for (const v in graph[k]) {
      const wt = graph[k][v][1];
      const src = Number(k);
      const dest = graph[k][v][0];
      edges.push([src, dest, wt]);
    }
  }
  // sorting the edges by their weight
  edges = edges.sort((a, b) => a[2] - b[2]);

  const ds = new DisjointSet(numOfVertices);
  let mstWt = 0;

  // finding the MST
  for (const edge of edges) {
    const _src = edge[0];
    const _dest = edge[1];
    const _wt = edge[2];

    if (ds.findParent(_src) !== ds.findParent(_dest)) {
      mstWt += _wt;
      MST.addEdge(_src, _dest, _wt);
      ds.unionByRank(_src, _dest);
    }
  }

  return MST.getGraph();
};
