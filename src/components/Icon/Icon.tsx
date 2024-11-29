import type React from 'react';
import {Pressable} from 'react-native';

import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {ErrorRoundIcon} from '../../assets/icons/ErrorRoundIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';

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
  fillColor?: ThemeColors;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,
  color = 'backgroundContrast',
  fillColor = 'background',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
    fillColor: colors[fillColor],
  };

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }

  return <SVGIcon {...iconProps} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  checkRound: CheckRoundIcon,
  errorRound: ErrorRoundIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
