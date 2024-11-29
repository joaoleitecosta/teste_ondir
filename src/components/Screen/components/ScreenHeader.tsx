import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {
  Box,
  Icon,
  type ScreenProps,
  Text,
  TouchableOpacityBox,
} from '@components';

type Props = Pick<ScreenProps, 'canGoBack' | 'title' | 'HeaderComponent'>;

const ICON_SIZE = 20;

export function ScreenHeader({canGoBack, title, HeaderComponent}: Props) {
  const navigation = useNavigation();
  const showBackLabel = !title && !HeaderComponent;
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      mb="s24"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center">
          <Icon name="arrowLeft" color="primary" size={ICON_SIZE} />
          {showBackLabel && (
            <Text ml="s8" fontFamily="semiBold" preset="paragraphMedium">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent && (
        <Box ml="s8" flex={1}>
          {HeaderComponent}
        </Box>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box backgroundColor="error" width={ICON_SIZE} />}
    </Box>
  );
}
