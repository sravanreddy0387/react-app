import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import store from './store';
import MainContainer from './container/MainContainer';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}

export default App;
