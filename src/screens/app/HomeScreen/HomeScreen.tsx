import React from 'react';

import {Button, Screen, Text} from '@components';
import type {AppScreenProps} from '@routes';
import {useAuthCredentials} from '@services';
import {useAuthSignOut} from '@domain';
import {stringUtils} from '@utils';

export function HomeScreen({}: AppScreenProps<'HomeScreen'>) {
  const {authCredentials} = useAuthCredentials();
  const {signOut, isLoading} = useAuthSignOut();

  return (
    <Screen title="Home">
      <Text mt="s24" preset="headingLarge">
        {`Olá ${stringUtils.getFirstName(
          authCredentials?.user.fullName ?? '',
        )}`}
      </Text>
      <Button
        mt="s32"
        title="Sair da conta"
        onPress={signOut}
        loading={isLoading}
      />
    </Screen>
  );
}
