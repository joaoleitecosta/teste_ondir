import type React from 'react';
import {Pressable} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useAppTheme} from '../../hooks/useAppTheme';
import type {ThemeColors} from '../../theme/theme';

export interface IconBase {
  size?: number;
  color?: string;
  fillColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();

  const iconProps = {
    name: iconRegistry[name],
    size,
    color: colors[color],
  };

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <MaterialIcons {...iconProps} />
      </Pressable>
    );
  }

  return <MaterialIcons {...iconProps} />;
}

const iconRegistry = {
  visibility: 'visibility',
  visibilityOff: 'visibility_off',
  arrowLeft: 'arrow_back',
  errorRound: 'highlight_off',
  checkRound: 'check_circle',
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
