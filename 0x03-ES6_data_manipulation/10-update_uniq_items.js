export default function updateUniqueItems(mapUpdate) {
  for (const [key, value] of mapUpdate.entries()) {
    if (value === 1) {
      mapUpdate.set(key, 100);
    } else mapUpdate.set(key, value);
  }

  if (!(mapUpdate instanceof Map)) {
    throw new Error('Cannot process');
  }

  return mapUpdate;
}
