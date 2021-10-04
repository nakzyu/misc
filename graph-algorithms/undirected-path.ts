/**
 * n = # nodes
 * e = # edges
 * Time: O(e)
 * SPace: O(n)
 */

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const buildGraph = (edges: string[][]): Record<string, string[]> => {
  const graph: Record<string, string[]> = {};
  for (const [a, b] of edges) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const hasPath = (
  graph: Record<string, string[]>,
  src: string,
  dst: string
): boolean => {
  if (src === dst) return true;

  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false;
};

const undirectedPath = (edges: string[][], nodeA: string, nodeB: string) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB);
};

// const undirectedPath = (edges: string[][], nodeA, nodeB): boolean => {};
