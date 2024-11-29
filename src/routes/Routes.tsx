import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from './AuthStack';
import {Box, Text} from '@components';

export function Router() {
  if (false) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Loading...</Text>
      </Box>
    );
  }
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
