import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
import { createStore, applyMiddleware } from "redux";
import { combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import model from "./model";
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";
import { Provider } from 'react-redux'

const reducer = combineReducers({
  model: model.reducer});
const storageReducer = storage.reducer(reducer);
const engine = createEngine("pactastore");

const storageMiddleware = storage.createMiddleware(engine);
const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  storageReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(storageMiddleware)
  )
);


model.fetchExchangeRates(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
