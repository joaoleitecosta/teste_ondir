import {  QueryKeys, useMutation } from '@infra';
import { useAuthCredentials } from '@services';



export function useAuthSignOut() {
	const { removeCredentials } = useAuthCredentials();
	const { mutate, isLoading } = useMutation<void, void>(
		() => removeCredentials(),
		[QueryKeys.AuthSignOut],
	);

	function signOut() {
		return mutate();
	}

	return { signOut, isLoading };
}
