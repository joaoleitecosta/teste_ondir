import React, {useState} from 'react';

import {Icon} from '../Icon/Icon';
import {TextInput, type TextInputProps} from '../TextInput/TextInput';

export interface PasswordInputProps
  extends Omit<TextInputProps, 'RightComponent'> {}

export function PasswordInput({
  placeholder,
  label,
  errorMessage,
  ...rest
}: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      placeholder={placeholder}
      label={label}
      errorMessage={errorMessage}
      RightComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={toggleSecureTextEntry}
        />
      }
      boxProps={{mb: 's48'}}
      {...rest}
    />
  );
}
