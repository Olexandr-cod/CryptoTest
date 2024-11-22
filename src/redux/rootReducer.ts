import { combineReducers } from '@reduxjs/toolkit';
import cryptoReducer from './CryptoRedux/cryptoSlice';

const rootReducer = combineReducers({
  crypto: cryptoReducer,
});

export default rootReducer;
