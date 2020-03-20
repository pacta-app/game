import actions from "./actions";

export default function reducer(
  state = {
    exchangeRateStatus: actions.LOADING,
    exchangeRates: []
  },
  action
) {
  switch (action.type) {
    case actions.SET_EXCHANGE_RATE:
      return Object.assign({}, state, {
        exchangeRateStatus: actions.SUCCESS,
        currency:
          state.currency ||
          window.localStorage.getItem("currency") ||
          Object.keys(action.rates)[0],
        exchangeRates: Object.assign({}, ...state.exchangeRates, action.rates)
      });
    case actions.SELECT_CURRENCY:
      return Object.assign({}, state, {
        currency: action.currency
      });
    case actions.EXCHANGE_RATE_UNAVAILABLE:
      return Object.assign({}, state, {
        exchangeRateStatus: actions.ERROR,
        error: action.error
      });
    case actions.SET_PACTA_BALANCE:
      return Object.assign({}, state, {
        pactaBalance: action.balance
      });
    case actions.SET_BNC_ONBOARD:
      return Object.assign({}, state, {
        bncOnboard: action.bncOnboard
      });
    case actions.SET_ADDRESS:
      return Object.assign({}, state, {
        address: action.address
      });
    case actions.SET_NETWORK:
      return Object.assign({}, state, {
        network: action.network
      }); 
    case actions.SET_PROFILE:
      return Object.assign({}, state, {
        profile: action.profile
      });  
    case actions.SET_WALLET:
      return Object.assign({}, state, {
        wallet: action.wallet
      });  
    case actions.SET_3BOX:
      return Object.assign({}, state, {
        box: action.box
      });      
    default:
      return state;
  }
}
