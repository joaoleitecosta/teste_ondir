
export interface User {
	id: string;
	fullName: string;
	email: string;
}

export interface AuthCredential {
	token: string;
	user: User;
}

export interface SignUpData {
	fullName: string;
	email: string;
	password: string;
}

export interface FieldIsAvailableAPI {
	message: string;
	isAvailable: boolean;
}
