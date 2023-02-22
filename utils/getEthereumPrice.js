import { ETH_PRICE_API } from '../constants';

export async function getEthereumPrice() {
  try {
    const response = await fetch(ETH_PRICE_API);
    const data = await response.json();
    return data.ethereum.usd;
  } catch (error) {
    console.error(error);
  }
}
