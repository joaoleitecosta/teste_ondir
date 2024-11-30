import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
