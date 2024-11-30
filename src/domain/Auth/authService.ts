import { storage } from '@services';
import { SignUpData } from './authTypes';
import {userService} from '@domain';

async function isEmailAvailable(email: string): Promise<boolean> {
  const users = await userService.getUserByEmail(email);

  const isAvailable = !users;
  return isAvailable;
}

async function signUp(data: SignUpData)  {
  const users = await userService.getAllUser();
  await storage.setItem('users', JSON.stringify([...users,data]));
}

export const authService = {
  isEmailAvailable,
  signUp,
};
