import React from 'react';
import {StatusBar} from 'react-native';
import { Provider } from "react-redux";

import { Header } from "./src/components";
import Quiz from './src/screens/quiz';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Header/>
      <Quiz></Quiz>
    </Provider>
  );
};

export default App;
