import React from 'react';

import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {TouchableOpacityBox, type TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

import {type ButtonPresets, buttonPresets} from './buttonPresets';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPresets;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled = false,
  ...touchableOpacityBoxProps
}: Readonly<ButtonProps>) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      height={50}
      disabled={disabled || loading}
      alignItems="center"
      testID="button"
      justifyContent="center"
      borderRadius="s16"
      paddingHorizontal="s20"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text
          preset="paragraphMedium"
          fontFamily="bold"
          color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
