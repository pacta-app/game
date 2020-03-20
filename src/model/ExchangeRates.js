import actions from "./actions";

function fetchExchangeRates(store) {
  fetch(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=CHF,USD,EUR,GBP,CNY,JPY,RUB,BTC,BAT,XCHF,WETH,GEN,BNB"
  )
    .then(res => {
      if (!res.ok) throw Error(res.statusText);
      return res;
    })
    .then(res => res.json())
    .then(res => {
      store.dispatch(actions.setExchangeRate(res));
      setTimeout(() => {
        fetchExchangeRates(store);
      }, 3600000); // reload every hour
    })
    .catch(err => {
      store.dispatch(actions.exchangeRateUnavailable(err));
      setTimeout(() => {
        fetchExchangeRates(store);
      }, 30000); // retry in 30s
    });
}

export default fetchExchangeRates;
