import { useContext } from "react";

import { AuthCredentialsContext } from "./Providers/AuthCredentialsProvider";
import type { AuthCredentialService } from "./authCredentialTypes";

export function useAuthCredentials(): AuthCredentialService {
	const context = useContext(AuthCredentialsContext);

	if (!context) {
		throw new Error(
			"AuthCredentials must be used within a AuthCredentialsProvider",
		);
	}

	return context;
}
