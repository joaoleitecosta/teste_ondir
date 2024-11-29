/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions} from 'react-native';

import type {Toast, ToastType} from '@services';

import {$shadowProps} from '@theme';

import {Box, type BoxProps} from '../../Box/Box';
import {Icon, type IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function ToastContent({toast}: {toast: Toast}) {
  const type: Required<ToastType> = toast?.type ?? 'success';

  return (
    <Box {...$boxStyle} style={{...$shadowProps}}>
      <Icon {...mapTypeToIcon[type]} />
      <Text
        style={{flexShrink: 1}}
        preset="paragraphMedium"
        fontFamily="bold"
        color="primary"
        ml="s16">
        {toast?.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {name: 'checkRound', color: 'success'},
  error: {name: 'errorRound', color: 'error'},
};

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  flexDirection: 'row',
  p: 's16',
  borderRadius: 's16',
  opacity: 0.95,
  width: MAX_WIDTH,
};
