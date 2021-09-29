function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  class GraphNode {
    parents: GraphNode[];
  }

  const map: Record<number, GraphNode> = {};

  const relate = (numbers: number[]) => {
    const target = numbers[0];
    const need = numbers[1];

    let parent = map[need];
    let child = map[target];

    if (!map[target]) {
      parent = map[target] = new GraphNode();
      parent.parents = [];
    }
    if (!map[need]) {
      child = map[need] = new GraphNode();
      child.parents = [];
    }
    child.parents.push(parent);
  };

  let isFinishable = true;

  const findCycle = (
    startNode: GraphNode,
    nowNode: GraphNode,
    firstRun: boolean
  ) => {
    if (nowNode && nowNode.parents) {
      nowNode.parents.forEach((node) => {
        findCycle(startNode, node, false);
      });
    }
    if (nowNode === null) {
      return;
    }

    if (!firstRun && startNode === nowNode) {
      isFinishable = false;
    }
  };

  prerequisites.forEach(relate);
  Object.values(map).forEach((node) => findCycle(node, null, true));

  return isFinishable;
}
