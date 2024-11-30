import { stringUtils } from '@utils';
import * as yup from 'yup';

export const signUpSchema = yup.object({
	fullName: yup
	.string()
	.min(3, 'Nome muito curto').required('Nome é obrigatório')
	.transform(stringUtils.capitalizeFirstLetter),
	email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'email inválido').required('E-mail é obrigatório'),
	password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
	confirmedPassword: yup.string().oneOf([yup.ref('password')], 'Senhas devem ser iguais').required('Confirmação de senha é obrigatória'),
});

export type SignUpSchema = yup.InferType<typeof signUpSchema>;
