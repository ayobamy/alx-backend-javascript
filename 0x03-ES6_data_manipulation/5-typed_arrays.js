export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const dataView = new DataView(arr);

  if (position >= length) {
    throw new Error('Position outside range');
  }

  dataView.setInt8(position, value);
  return dataView;
  //   for (let i = 0; i < length; i++) {
  //     dataView.setUint8(i, value);
  //   }

//   return arr;
}
