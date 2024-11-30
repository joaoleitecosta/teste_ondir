import { storage } from '@services';
import { User } from './userTypes';
import { SignUpData } from '../Auth';

async function getAllUser(): Promise<SignUpData[]> {
  const users: SignUpData[] | null = await storage.getItem('users');

  return  users ? users : [];
}

async function getUserByEmail(email: string): Promise<User | undefined> {
  const users = await getAllUser();
  const user = users?.find((item: User) => {
    if(item.email === email) {
      return {email: item.email, fullName: item.fullName};
    }});
  return user;
}

export const userService = {
  getAllUser,
  getUserByEmail,
};
