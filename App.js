import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import SplashScreenComponent from './components/splashScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <SplashScreenComponent />
    </SafeAreaProvider>
  );
};

export default App;
