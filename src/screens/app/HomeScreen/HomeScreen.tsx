import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Button, Screen, Text} from '@components';
import type {AppScreenProps} from '@routes';
import {useAuthCredentials} from '@services';
import {useAuthSignOut} from '@domain';
import {stringUtils} from '@utils';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const TRANSITION_TIME = 1000;

export function HomeScreen({}: AppScreenProps<'HomeScreen'>) {
  const opacity = useSharedValue(0);
  const translateX = useSharedValue<number>(width / 4);

  const {authCredentials} = useAuthCredentials();
  const {signOut, isLoading} = useAuthSignOut();

  const animatedOpacityStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const animatedNameTranslation = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  useEffect(() => {
    opacity.value = withTiming(1, {duration: TRANSITION_TIME});
    translateX.value = withTiming(0, {duration: TRANSITION_TIME});
  }, []);

  return (
    <Screen title="Home">
      <Animated.View style={animatedOpacityStyles}>
        <Animated.View
          style={[
            animatedNameTranslation,
            {flexDirection: 'row', justifyContent: 'flex-end'},
          ]}>
          <Text mt="s24" preset="headingLarge">
            {`Olá ${stringUtils.getFirstName(
              authCredentials?.user.fullName ?? '',
            )}`}
          </Text>
        </Animated.View>

        <Button
          mt="s32"
          title="Sair da conta"
          onPress={signOut}
          loading={isLoading}
        />
      </Animated.View>
    </Screen>
  );
}
