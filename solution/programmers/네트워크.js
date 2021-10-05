function solution(n, computers) {
  const buildGraph = (arr) => {
    const graph = {};
    arr.forEach((nets, i) => {
      if (!graph[i]) graph[i] = [];
      nets.forEach((net, j) => {
        if (i === j) return;
        if (net === 1) {
          graph[i].push(j);
        }
      });
    });
    return graph;
  };

  const explore = (currnet, graph, visited) => {
    if (visited.has(String(currnet))) return false;

    visited.add(String(currnet));

    for (const neighbor of graph[currnet]) {
      explore(neighbor, graph, visited);
    }

    return true;
  };

  const networks = buildGraph(computers);

  const visited = new Set();

  let counter = 0;

  for (const node in networks) {
    if (explore(node, networks, visited) === true) counter++;
  }

  return counter;
}
