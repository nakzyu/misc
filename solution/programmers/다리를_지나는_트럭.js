function solution(bridge_length, weight, truck_weights) {
  let timePassed = 1;
  const trucksLeft = truck_weights.map((truckWeight) => ({
    weight: truckWeight,
    position: null,
  }));

  const trucksOnBridge = [];

  while (trucksLeft.length > 0) {
    // 트럭 포지션 옮기기
    if (trucksOnBridge.length) {
      trucksOnBridge.forEach((truck) => (truck.position += 1));
      if (trucksOnBridge[0].position === bridge_length) {
        trucksOnBridge.shift();
      }
    }

    // 0번째가 다리위에 올라갈수있으면 올림
    if (
      trucksLeft[0].weight +
        trucksOnBridge.map((t) => t.weight).reduce((a, b) => a + b, 0) <=
      weight
    ) {
      const shifted = trucksLeft.shift();
      shifted.position = 0;
      trucksOnBridge.push(shifted);
      if (trucksLeft.length == 0) {
        timePassed += bridge_length;
        break;
      }
    }

    timePassed += 1;
  }

  return timePassed;
}
