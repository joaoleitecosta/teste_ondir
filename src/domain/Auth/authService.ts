import { storage } from '@services';
import { SignUpData } from './authTypes';

async function isEmailAvailable(email: string): Promise<boolean> {
  const users: string | null = await storage.getItem('users');

  const usersParse = users ? JSON.parse(users) : [];

  const isAvailable = !usersParse.find((user: SignUpData) => user.email === email);
  return isAvailable;
}

export const authService = {
  isEmailAvailable,
};
