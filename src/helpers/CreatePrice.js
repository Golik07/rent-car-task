export const prices = () => {
  const prices = [];
  for (let price = 10; price <= 500; price += 10) {
    prices.push(price.toString());
  }
  return prices;
};
