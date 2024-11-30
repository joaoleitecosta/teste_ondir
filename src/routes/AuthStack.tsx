import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {type IconProps} from '@components';
import {LoginScreen, SignUpScreen, SuccessScreen} from '@screens';

export type AuthStackParamList = {
  SignUpScreen: undefined;
  LoginScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
}
