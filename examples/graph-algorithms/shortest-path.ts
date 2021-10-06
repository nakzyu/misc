const graph: Record<string, string[]> = {
  w: ["x", "v"],
  v: ["w", "z"],
  x: ["w", "y"],
  y: ["x", "z"],
  z: ["y", "v"],
};

const shortestPath = (
  src: string,
  dst: string,
  graph: Record<string, string[]>
): number => {
  type node = {
    name: string;
    step: 0;
  };
  const queue = [{ name: src, step: 0 }];
  const visited = new Set();

  while (queue.length) {
    const currnet = queue.shift();
    if (currnet.name === dst) return currnet.step;
    if (visited.has(currnet.name)) break;

    visited.add(currnet.name);

    for (const neighbor of graph[currnet.name]) {
      if (!visited.has(neighbor))
        queue.push({ name: neighbor, step: currnet.step + 1 });
    }
  }
};

console.log(shortestPath("w", "y", graph));
