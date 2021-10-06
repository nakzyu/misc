export {};

type Graph = Record<number, number[]>;

const graph: Graph = {
  0: [1, 5, 8],
  1: [0],
  2: [3, 4],
  3: [2, 4],
  4: [2, 3],
  5: [0, 8],
  8: [0, 5],
};

const explore = (
  currnet: number,
  graph: Graph,
  visited: Set<number>
): number => {
  if (visited.has(currnet)) return 0;
  visited.add(currnet);

  let size = 1;

  for (const neighbor of graph[currnet]) {
    size += explore(neighbor, graph, visited);
  }

  return size;
};

const largestComponent = (graph: Graph): number => {
  const visited = new Set<number>();
  let longest = -Infinity;
  for (const node in graph) {
    longest = Math.max(explore(+node, graph, visited), longest);
  }

  return longest;
};

largestComponent(graph);
