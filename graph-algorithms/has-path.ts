export {};

/**
 * n = # nodes
 * e = # edges
 * TIme: O(e)
 * Space: O(n)
 */

/** worst case
 * n = # node
 * n^2 = # edges
 * Time: O(n^2)
 * Space: O(n)
 */

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const hasPathDFS = (graph: Record<string, string[]>, src, dst): boolean => {
  if (src === dst) return true;
  return graph[src]?.some((neighbor) => hasPathDFS(graph, neighbor, dst));
};

const hasPathBFS = (graph: Record<string, string[]>, src, dst): boolean => {
  const queue = [src];

  while (queue.length > 0) {
    const currnet = queue.shift();
    if (currnet === dst) return true;
    queue.push(...graph[currnet]);
  }
  return false;
};

console.log(hasPathBFS(graph, "h", "k"));
