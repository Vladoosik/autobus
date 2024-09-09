// modules
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// navigation
import {RootNavigation} from './src/navigation';
// theme
import {theme} from './src/theme';

function App() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
