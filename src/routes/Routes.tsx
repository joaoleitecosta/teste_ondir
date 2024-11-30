import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from './AuthStack';
import {AppStack} from './AppStack';
import {Box, Text} from '@components';
import {useAuthCredentials} from '@services';

export function Router() {
  const {authCredentials, isLoading} = useAuthCredentials();

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Loading...</Text>
      </Box>
    );
  }
  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
