//planets stores orbital periods
const planets = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

//the duration of one earth year in seconds
const earthYear = 31557600;

//calculates the age on the given planet 
export const age = (planet, age) => {
  const result = age / (planets[planet] * earthYear);
  return parseFloat(result.toFixed(2));
};
