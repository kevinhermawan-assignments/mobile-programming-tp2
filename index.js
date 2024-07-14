import React from 'react';
import { AppRegistry } from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

import App from './src/App';
import { name as appName } from './app.json';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#795548',
    secondary: '#D7CCC8',
    primaryContainer: '#795548',
    onPrimaryContainer: '#FFFFFF',
  },
};

function Main() {
  return (
    <PaperProvider theme={{ ...theme, dark: false }}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
