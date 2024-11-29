import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import {ToastProvider} from '@services';
import {Router} from '@routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Router />
          <Toast />
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
