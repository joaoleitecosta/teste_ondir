import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import type {AppScreenProps} from '@routes';

import {type LoginSchema, loginSchema} from './loginSchema';
import {useAuthSignIn} from '@domain';
import {useToastService} from '@services';

export function LoginScreen({navigation}: AppScreenProps<'LoginScreen'>) {
  const {showToast} = useToastService();
  const {control, handleSubmit, formState} = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {isLoading, signIn} = useAuthSignIn({
    onSuccess: () => {
      navigation.navigate('HomeScreen');
    },
    onError: error => {
      showToast({
        message: error?.message,
        type: 'error',
        duration: 3000,
      });
    },
  });

  async function submitForm(data: LoginSchema) {
    signIn(data);
  }

  function navigationToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    console.log('navigateToForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        label="E-mail"
      />
      <FormPasswordInput
        control={control}
        name="password"
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{mb: 's10'}}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        mt="s10"
        color="primary"
        fontFamily="bold"
        preset="paragraphSmall">
        Esqueceu sua senha
      </Text>
      <Button
        mt="s48"
        title="Entrar"
        loading={isLoading}
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
      <Button
        mt="s12"
        preset="outline"
        title="Criar uma conta"
        onPress={navigationToSignUpScreen}
      />
    </Screen>
  );
}
