/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';

// Screens
import TabNavigator from './navigators/TabNavigator';

// Variables
import store from './redux/store';
import rootSaga from './redux/rootSaga';
import { sagaMiddleware } from './redux/middlewares';
import { NavigationContainer } from '@react-navigation/native';

// SAGA
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
