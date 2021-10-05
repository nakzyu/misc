"use strict";
function canFinish(numCourses, prerequisites) {
  class GraphNode {
    constructor() {
      this.parents = [];
    }
  }
  const map = {};
  const relate = (numbers) => {
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
  const findCycle = (startNode, nowNode, firstRun) => {
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
