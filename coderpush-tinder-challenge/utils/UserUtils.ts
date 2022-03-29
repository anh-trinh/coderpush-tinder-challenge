import { User } from '../models/User';

export const getCurrentUser = (): User | undefined => {
  if (typeof window !== 'undefined') {
    const storedCurrentUser: string = localStorage?.getItem('currentUser') ?? '';
    if (!!storedCurrentUser) {
      return JSON.parse(storedCurrentUser);
    }
  }
  return undefined;
}
