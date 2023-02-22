async function getEthPrice() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    const data = await response.json();
    return data.ethereum.usd;
  }
  
  getEthPrice().then(price => console.log(`The current Ethereum price is ${price} USD`));
  