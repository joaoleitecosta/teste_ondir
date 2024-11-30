import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import {
  ActivityIndicator,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';

import {type SignUpSchema, signUpSchema} from './signUpSchema';
import {useAsyncValidation} from './useAsyncValidation';
import {useAuthSignUp} from '@domain';
import {useToastService} from '@services';
import {RootStackParamList} from '@routes';
import {useResetNavigationSuccess} from '@hooks';

const defaultValues: SignUpSchema = {
  fullName: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

const resetParams: RootStackParamList['SuccessScreen'] = {
  title: 'Sua consta foi criada com sucesso!',
  description: 'Agora você já pode fazer login na nossa platafoma.',
  icon: {name: 'checkRound', color: 'success'},
};
export function SignUpScreen() {
  const {showToast} = useToastService();
  const {reset} = useResetNavigationSuccess();

  const {control, handleSubmit, formState, watch, getFieldState} =
    useForm<SignUpSchema>({
      resolver: yupResolver(signUpSchema),
      defaultValues: defaultValues,
      mode: 'onChange',
    });

  const {isLoading, signUp} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParams);
    },
    onError: error => {
      showToast({
        message: error?.message,
        type: 'error',
        duration: 3000,
      });
    },
  });

  const {emailValidation} = useAsyncValidation({
    watch,
    getFieldState,
  });

  async function submitForm(data: SignUpSchema) {
    await signUp(data);
  }
  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="fullName"
        placeholder="Nome"
        label="Digite seu nome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="email"
        placeholder="E-mail"
        label="Digite seu e-mail"
        boxProps={{mb: 's20'}}
        errorMessage={emailValidation.errorMessage}
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />
      <FormPasswordInput
        control={control}
        name="password"
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="confirmedPassword"
        placeholder="Confirme sua senha"
        label="Senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        title="Criar conta"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid || !emailValidation.onReady}
        loading={isLoading}
      />
    </Screen>
  );
}
