import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { USER_URL } from '../constants/ApiConstants';
import { User } from '../models/User';
import { USER_FETCHING_LIMIT } from '../constants/DefaultConstants';
import { getCurrentUser } from '../utils/UserUtils';

export const getUsers = (page: number): Promise<User[]> => {
  const currentUser: User = getCurrentUser() ?? {} as User;
  return axios.get(USER_URL, {
    params: { page, limit: USER_FETCHING_LIMIT, currentUserId: currentUser._id }
  } as AxiosRequestConfig)
    .then((response: AxiosResponse) => response?.data?.data ?? []);
}

export const getFakeCurrentUser = (): Promise<User> => {
  return axios.get(USER_URL, {
    params: { page: 1, limit: 1 }
  } as AxiosRequestConfig)
    .then((response: AxiosResponse) => response?.data?.data?.[0] ?? {});
}
