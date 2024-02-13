export const extractCityAndCountry = address => {
  const parts = address.split(',').map(part => part.trim());

  const city = parts.pop();
  const country = parts.pop();
  return { city, country };
};
