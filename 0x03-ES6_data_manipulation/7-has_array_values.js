export default function hasValuesFromArray(set, array) {
  return array.reduce((acc, curVal) => acc && set.has(curVal), true);
}
