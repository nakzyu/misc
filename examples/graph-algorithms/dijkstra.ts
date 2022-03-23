export {};
/**
 * Dijkstra Alogorithm
 * 어떠한 변도 음수값의 가중지를 갖지 않는 방향 그래프에서
 * 주어진 출발점과 도착점 사이의 최단 경로를 찾아주는 알고리즘
 * */

type Graph = Record<string, { v: string; w: number }[]>;

const graph: Graph = {
  a: [
    { v: "b", w: 2 },
    { v: "e", w: 4 },
  ],
  b: [
    { v: "a", w: 2 },
    { v: "c", w: 1 },
    { v: "d", w: 5 },
    { v: "e", w: 4 },
    { v: "f", w: 2 },
  ],
  c: [
    { v: "b", w: 1 },
    { v: "d", w: 3 },
  ],
  d: [
    { v: "b", w: 5 },
    { v: "c", w: 3 },
    { v: "e", w: 5 },
  ],
  e: [
    { v: "a", w: 4 },
    { v: "b", w: 4 },
    { v: "d", w: 5 },
    { v: "f", w: 3 },
  ],
  f: [
    { v: "b", w: 2 },
    { v: "e", w: 3 },
  ],
};

/**
 * @param v starting vertex
 * @param graph graph to traverse
 */
const dijkstra = (v: string, graph: Graph) => {
  const d: Record<string, { w: number; path: string[] }> = {};
  Object.keys(graph).forEach((vertex) => {
    if (!d[vertex]) {
      d[vertex] = { w: Infinity, path: [] };
    }
  });

  traverse(v, graph, [], d, 0);
  console.log(d);
};

const traverse = (
  currnet: string,
  g: Graph,
  visited: string[],
  d: Record<string, { w: number; path: string[] }>,
  w: number
) => {
  g[currnet].forEach((node) => {
    if (visited.includes(node.v)) return;
    const nw = w + node.w;
    const visitedNew = [...visited, node.v];
    if (Math.min(nw, d[node.v].w) === nw) {
      d[node.v] = { w: nw, path: visitedNew };
    }
    traverse(node.v, g, visitedNew, d, nw);
  });
};

dijkstra("a", graph);
