import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import {AuthCredentialsProvider, ToastProvider} from '@services';
import {Router} from '@routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <ToastProvider>
              <Router />
              <Toast />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
