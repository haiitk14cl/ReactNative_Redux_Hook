/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/_config/configureStore';

import AppNav from './AppNav';

const store = configureStore();

// axios.defaults.baseURL = "https://2c56-14-226-224-177.ngrok.io";

const App: props => Node = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};

export default App;
