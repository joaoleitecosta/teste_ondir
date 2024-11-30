import type { AuthCredential } from "@domain";

export interface AuthCredentialService {
	authCredentials: AuthCredential | null;
	saveCredentials(authCredential: AuthCredential): Promise<void>;
	removeCredentials(): Promise<void>;
	isLoading: boolean;
}
