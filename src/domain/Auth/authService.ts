import { storage } from '@services';
import { AuthCredential, SignUpData } from './authTypes';
import {userService} from '@domain';
import { Variables } from './hooks/useAuthSignIn';

async function isEmailAvailable(email: string): Promise<boolean> {
  const user = await userService.getUserByEmail(email);
  const isAvailable = !user;
  return isAvailable;
}

async function signUp(data: SignUpData)  {
  const users = await userService.getAllUser();
  await storage.setItem('users', [...users, data]);
}

async function signIn({ email, password }: Variables): Promise<AuthCredential> {

    const users = await userService.getAllUser();

  const user = users?.find((user: SignUpData) => user?.email === email && user?.password === password);

  if(user) {
    const token = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed';
    return {token, user};
  }
  throw new Error('email ou senha inválidos');

}

export const authService = {
  isEmailAvailable,
  signUp,
  signIn,
};
