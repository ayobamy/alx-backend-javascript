export default function cleanSet(set, startString) {
  let str = '';
  const result = [];

  if ((startString) && (typeof startString === 'string')) {
    for (const elem of set) {
      if (elem && elem.startsWith(startString)) {
        result.push(elem.slice(startString.length));
      }
    }
    str = result.join('-');
  }
  return str;
}
