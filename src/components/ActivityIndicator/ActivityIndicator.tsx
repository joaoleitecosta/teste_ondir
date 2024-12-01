import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  type ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';

import {useTheme} from '@shopify/restyle';

import type {Theme, ThemeColors} from '@theme';

interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  readonly color?: ThemeColors;
}

export function ActivityIndicator({color = 'primary'}: ActivityIndicatorProps) {
  const {colors} = useTheme<Theme>();
  return (
    <RNActivityIndicator testID="activity-indicator" color={colors[color]} />
  );
}
