import { storage } from '@services';
import { User } from './userTypes';
import { SignUpData } from '../Auth';

async function getAllUser(): Promise<User[]> {
  const users: string | null = await storage.getItem('users');

  const usersParse = users ? JSON.parse(users) : [];

  return usersParse.map((user: SignUpData) => {
    return {
      email: user.email,
      fullName: user.fullName,
    };
  });
}

async function getUserByEmail(email: string): Promise<User | undefined> {
  const users = await getAllUser();
  const user = users.find((item: User) => item.email === email);
  return user;
}

export const userService = {
  getAllUser,
  getUserByEmail,
};
