import React from 'react';
import {Provider} from 'mobx-react';
import {SafeAreaView, StatusBar} from 'react-native';
import Calc from './src/view/Calc';
import stores from './src/stores';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Provider {...stores}>
          <Calc></Calc>
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
