export default function updateUniqueItems(mapUpdate) {
  if (!(mapUpdate instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    for (const [key, value] of mapUpdate) {
      if (value === 1) {
        mapUpdate.set(key, 100);
      }
    }
  }

  return mapUpdate;
}
