import { SignUpData } from '../authTypes';
import { MutationOptions, QueryKeys, useMutation } from '../../../infra';
import { authService } from '../authService';



export function useAuthSignUp(options?: MutationOptions<void>) {
	const { mutate, isLoading } = useMutation<SignUpData, void>(
		(data) => authService.signUp(data),
		[QueryKeys.AuthSignUp],
		options,
	);
	function signUp(data: SignUpData) {
		mutate({
			fullName: data.fullName,
			email: data.email,
			password: data.password,
		});
	}

	return { signUp, isLoading };
}

