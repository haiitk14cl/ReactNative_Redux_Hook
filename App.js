/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import AppNav from './AppNav';
import axios from 'axios';

// axios.defaults.baseURL = "https://2c56-14-226-224-177.ngrok.io";

const App: props => Node = () => {
  return (
    <AppNav/>
  );
};

export default App;
