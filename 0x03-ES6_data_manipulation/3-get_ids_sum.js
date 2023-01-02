export default function getStudentIdsSum(sumId) {
  return sumId.reduce((acc, curVal) => acc + curVal.id, 0);
}
