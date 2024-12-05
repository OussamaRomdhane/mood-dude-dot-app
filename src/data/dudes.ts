const moodDudeImages = ["beige", "blue", "green", "red", "yellow"];
const dudesDataArray = Array.from({ length: 100 }).map((_elem, i) => ({
  id: crypto.randomUUID(),
  imageKey: moodDudeImages[i % moodDudeImages.length],
}));

export { dudesDataArray };
