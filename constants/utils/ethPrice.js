import { ETH_PRICE_API } from './constants';

export const getEthPrice = async () => {
  const response = await fetch(ETH_PRICE_API);
  const data = await response.json();
  return data.ethereum.usd;
};
