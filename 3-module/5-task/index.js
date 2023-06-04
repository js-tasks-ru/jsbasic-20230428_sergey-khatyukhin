function getMinMax(str) {
  const arr = str.split(' ').filter(num => +num);
  return {min: Math.min(...arr),
    max: Math.max(...arr)};
  // ваш код...
}