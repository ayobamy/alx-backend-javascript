export default function createIteratorObject(report) {
  const res = [];
  for (const value of Object.values(report)) {
    for (const item of Object.values(value)) {
      res.push(...item);
    }
  }
  return res;
}
