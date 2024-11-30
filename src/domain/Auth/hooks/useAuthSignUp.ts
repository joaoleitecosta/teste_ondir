import { useState } from 'react';
import { SignUpData } from '../authTypes';
import { storage } from '@services';



export function useAuthSignUp() {
	const [isLoading, setIsLoading] = useState(false);

async	function signUp(data: SignUpData) {
	setIsLoading(true);
	const users: string | null = await storage.getItem('users');


	const usersParse = users ? JSON.parse(users) : [];

	console.log({usersParse});

	await storage.setItem('users', JSON.stringify([...usersParse,data]));

	setIsLoading(false);
	}

	return { signUp, isLoading };
}
