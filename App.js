import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import GlobalFont from 'react-native-global-font';
import MainScreen from './src/MainScreen';

const App: () => React$Node = () => {
  useEffect(() => {
    let fontName = 'Roboto-Regular';
    GlobalFont.applyGlobal(fontName);

    SplashScreen.hide();
  }, []);

  return (
    <MainScreen />
  );
};

export default App;
