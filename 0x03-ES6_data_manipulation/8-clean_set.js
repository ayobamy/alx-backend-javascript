export default function cleanSet(set, startString) {
  let str = '';
  const result = [];
  let strLen = startString.length;

  if ((startString) && (typeof startString === 'string')) {
    for (const elem of set) {
      if (elem && elem.startsWith(startString)) {
        result.push(elem.slice(strLen));
      }
    }
    str = result.join('-');
  }
  return str;
}
