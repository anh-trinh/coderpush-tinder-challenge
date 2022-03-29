import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { USER_URL } from '../constants/ApiConstants';
import { User } from '../models/User';
import { USER_FETCHING_LIMIT } from '../constants/DefaultConstants';
import { getCurrentUserId } from '../utils/UserUtils';

export const getUsers = (page: number): Promise<User[]> => {
  const currentUserId: string = getCurrentUserId() ?? '';
  return axios
    .get(USER_URL, {
      params: { page, limit: USER_FETCHING_LIMIT, currentUserId },
    } as AxiosRequestConfig)
    .then((response: AxiosResponse) => response?.data?.data ?? []);
};

export const getFakeCurrentUserId = (): Promise<string> => {
  return axios
    .get(USER_URL, {
      params: { page: 1, limit: 1 },
    } as AxiosRequestConfig)
    .then((response: AxiosResponse) => response?.data?.data?.[0]?._id ?? '');
};
