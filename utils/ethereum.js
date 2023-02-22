import axios from 'axios';
import { ETH_PRICE_API } from '../constants';

export const getEthPrice = async () => {
  try {
    const response = await axios.get(ETH_PRICE_API);
    const { data: { ethereum: { usd } } } = response;
    return usd;
  } catch (error) {
    console.error(error);
  }
};
