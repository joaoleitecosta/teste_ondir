//import { useAuthIsEmailAvailable } from "@domain";
import type { UseFormGetFieldState, UseFormWatch } from 'react-hook-form';

import type { SignUpSchema } from './signUpSchema';
import { useAuthIsEmailAvailable } from '@domain';

type ReturnsValues = {
	errorMessage: string | undefined;
	isFetching: boolean;
	onReady: boolean;
};

type UseAsyncValidationProps = {
	watch: UseFormWatch<SignUpSchema>;
	getFieldState: UseFormGetFieldState<SignUpSchema>;
};

 export function useAsyncValidation({
	watch,
	getFieldState,
}: UseAsyncValidationProps): {
	emailValidation: ReturnsValues;
} {

	const fieldEmail = watch('email');
	const emailFieldState = getFieldState('email');
	const emailIsValid = !emailFieldState?.invalid && emailFieldState?.isDirty;
	const {	isAvailable, isFetching} =  useAuthIsEmailAvailable({
		email: fieldEmail,
	});

	return {
		emailValidation: {
			errorMessage: isAvailable ? undefined : 'E-mail indisponível',
			isFetching,
			onReady: !!isAvailable && emailIsValid,
		},

	};

}
