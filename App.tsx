import React from 'react';
import CryptoScreen from './src/screens/CryptoScreen';
import { Provider } from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <CryptoScreen />
    </Provider>
  );
};

export default App;
