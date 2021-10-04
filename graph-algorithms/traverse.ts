const graph: Record<string, string[]> = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

export const dfsPrint = (graph: Record<string, string[]>, source): void => {
  const stack = [source];

  while (stack.length > 0) {
    const currnet = stack.pop();
    stack.push(...graph[currnet]);
  }
};

export const bfsPrint = (graph: Record<string, string[]>, source): void => {
  const queue = [source];

  while (queue.length > 0) {
    const currnet = queue.shift();
    queue.push(...graph[currnet]);
  }
};
