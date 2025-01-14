import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'email inválido').required('E-mail é obrigatório'),
  password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
});
export type LoginSchema = yup.InferType<typeof loginSchema>;
