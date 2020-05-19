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
import TabNavigator from './src/navigators/TabNavigator';

// Variables
import store from './src/redux/store';
import rootSaga from './src/redux/rootSaga';
import { navigationRef } from './src/utils/helpers';
import { sagaMiddleware } from './src/redux/middlewares';
import { NavigationContainer } from '@react-navigation/native';

// SAGA
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
