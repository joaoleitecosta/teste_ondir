import { type MutationOptions, QueryKeys, useMutation } from '@infra';
import { useAuthCredentials } from '@services';

import { authService } from '../authService';
import type { AuthCredential } from '../authTypes';

export interface Variables {
	email: string;
	password: string;
}

export function useAuthSignIn(options: MutationOptions<AuthCredential>) {
	const { saveCredentials } = useAuthCredentials();
	const { mutate, isError, isLoading } = useMutation<Variables, AuthCredential>(
		({ email, password }) => authService.signIn({ email, password }),
		[QueryKeys.AuthSignIn],
		{
			...options,
			onSuccess: (data) => {
				saveCredentials(data);
			},
		},
	);

	async function signIn({ email, password }: Variables) {
		await mutate({ email, password });
	}

	return { signIn, isLoading, isError, useAuthSignIn };
}
