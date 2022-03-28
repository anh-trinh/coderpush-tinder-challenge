import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { USER_URL } from '../constants/ApiConstants';
import { User } from '../models/User';
import { List } from '../models/List';
import { USER_FETCHING_LIMIT } from '../constants/DefaultConstants';

export const getUsers = (page: number): Promise<User[]> => {
  return axios.get(USER_URL, {
    headers: {
      'app-id': '6241182867ada2393a8b658c'
    },
    params: { page, limit: USER_FETCHING_LIMIT }
  } as AxiosRequestConfig)
    .then((response: AxiosResponse<List>) => response?.data)
    .then((list: List) => list?.data ?? []);
}
