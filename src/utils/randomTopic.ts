export function randomTopic() {
  const topics = ['Default', 'development', 'design', 'finance', 'client work'];
  const randomIndex = Math.ceil(Math.random() * topics.length);
  return topics[randomIndex];
}
