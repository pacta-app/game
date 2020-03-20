import reducer from "./reducer";
import actions from "./actions";
import fetchExchangeRates from "./ExchangeRates";
import Currency from "./currency";

function optional(v, x) {
  return v ? v[x] : "?";
}

export default {
  Currency,
  reducer,
  actions,
  fetchExchangeRates,
  optional
};
