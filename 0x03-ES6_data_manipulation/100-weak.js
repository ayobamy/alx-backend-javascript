export const weakMap = new WeakMap();

let counter = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, counter);
  counter += 1;
  const queryCount = weakMap.get(endPoint);
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
