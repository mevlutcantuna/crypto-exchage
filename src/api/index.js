import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/",
});
 
export const getCoins = async (currencyTo) => {
  return await instance.get(
    `markets?vs_currency=${
      currencyTo ? currencyTo.name : "USD"
    }&ids=ethereum%20%2C%20bitcoin`
  );
};

