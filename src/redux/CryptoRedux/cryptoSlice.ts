import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoData, CryptoState } from './types';
import { CRYPTOS_DATA } from '../../screens/CryptoScreen/mockData';

const initialState: CryptoState = {
  cryptoData: [],
  selectedCryptos: CRYPTOS_DATA.map((crypto) => crypto.symbol),
  connected: false,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCrypto(state, action: PayloadAction<CryptoData[]>) {
      state.cryptoData = action.payload;
    },
    updateCrypto(state, action: PayloadAction<CryptoData>) {
      const index = state.cryptoData.findIndex((p) => p.symbol === action.payload.symbol);
      if (index > -1) {
        state.cryptoData[index] = action.payload;
      } else {
        state.cryptoData.push(action.payload);
      }
    },
    setConnected(state, action: PayloadAction<boolean>) {
      state.connected = action.payload;
    },
    toggleCryptoMenu(state, action: PayloadAction<string>) {
      const index = state.selectedCryptos.indexOf(action.payload);
      if (index > -1) {
        state.selectedCryptos.splice(index, 1);
      } else {
        state.selectedCryptos.push(action.payload);
      }
    },
  },
});

export const { setCrypto, updateCrypto, setConnected, toggleCryptoMenu } = cryptoSlice.actions;

export default cryptoSlice.reducer;
