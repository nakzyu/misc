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
  dst: string,
  visited: Set<string>
): boolean => {
  if (visited.has(src)) return false;
  if (src === dst) return true;

  visited.add(src);

  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }

  return false;
};

const undirectedPath = (edges: string[][], nodeA: string, nodeB: string) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};
