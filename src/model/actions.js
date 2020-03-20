const SET_EXCHANGE_RATE = "SET_EXCHANGE_RATE";
const SELECT_CURRENCY = "SELECT_CURRENCY";
const EXCHANGE_RATE_UNAVAILABLE = "EXCHANGE_RATE_UNAVAILABLE";
const SET_PACTA_BALANCE = "SET_PACTA_BALANCE";
const SET_BNC_ONBOARD = "SET_BNC_ONBOARD";
const SET_ADDRESS = "SET_ADDRESS";
const SET_NETWORK = "SET_NETWORK";
const SET_PROFILE = "SET_PROFILE";
const SET_WALLET = "SET_WALLET";
const SET_3BOX = "SET_3BOX";
const LOADING = "loading";
const SUCCESS = "success";
const ERROR = "error";

function setExchangeRate(rates) {
  return {
    type: SET_EXCHANGE_RATE,
    rates
  };
}
function selectCurrency(currency) {
  window.localStorage.setItem("currency", currency);
  return {
    type: SELECT_CURRENCY,
    currency
  };
}
function exchangeRateUnavailable(err) {
  return {
    type: EXCHANGE_RATE_UNAVAILABLE,
    error: err
  };
}
function setPactaBalance(balance) {
  return {
    type: SET_PACTA_BALANCE,
    balance
  };
}
function setBncOnboard(bncOnboard) {
  return {
    type: SET_BNC_ONBOARD,
    bncOnboard
  };
}
function setNetwork(network) {
  return {
    type: SET_NETWORK,
    network
  };
}
function setAddress(address) {
  return {
    type: SET_ADDRESS,
    address
  };
}
function setProfile(profile) {
  return {
    type: SET_PROFILE,
    profile
  };
}
function setWallet(wallet) {
  return {
    type: SET_WALLET,
    wallet
  };
}
function set3Box(box) {
  return {
    type: SET_3BOX,
    box
  };
}

export default {
  LOADING,
  SUCCESS,
  ERROR,
  SET_EXCHANGE_RATE,
  SELECT_CURRENCY,
  EXCHANGE_RATE_UNAVAILABLE,
  SET_PACTA_BALANCE,
  SET_BNC_ONBOARD,
  SET_ADDRESS,
  SET_NETWORK,
  SET_PROFILE,
  SET_WALLET,
  SET_3BOX,
  setExchangeRate,
  selectCurrency,
  exchangeRateUnavailable,
  setPactaBalance,
  setBncOnboard,
  setNetwork,
  setAddress,
  setProfile,
  setWallet,
  set3Box
};
