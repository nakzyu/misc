// n = # nodes
// e = # edges
// Time: O(e)
// Space: O(n)
// strategy: move as far as possible while marking things

const ex = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const connectedComponentsCount = (graph: Record<number, number[]>): number => {
  const visited = new Set<number>();

  let count = 0;
  for (const node in graph) {
    if (explore(graph, +node, visited) === true) {
      count += 1;
    }
  }

  console.log(visited);

  return count;
};

const explore = (
  graph: Record<number, number[]>,
  currnet: number,
  visited: Set<number>
): boolean => {
  if (visited.has(currnet)) return false;

  visited.add(currnet);

  for (const neighbor of graph[currnet]) {
    //neighbor를 탐색할때 하나라도 false 면 이 함수호출은 결국 false를 리턴함
    explore(graph, neighbor, visited);
  }

  return true;
};

console.log(connectedComponentsCount(ex));
