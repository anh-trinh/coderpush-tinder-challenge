import { UserInfo } from './UserInfo';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  picture: string;
  likes?: string[];
  passes?: string[];
  userInfo?: UserInfo;
}
