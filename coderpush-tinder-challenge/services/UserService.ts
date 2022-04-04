import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  USER_LIKE_URL,
  USER_MATCH_URL,
  USER_PASS_URL,
  USER_URL,
} from '../constants/ApiConstants';
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

export const getUsersWithInfos = async (page: number): Promise<User[]> => {
    const userIds: string[] = await getUsers(page).then((users: User[]) => users.map((user: User) => user?._id));
    return axios.all(userIds.map((id: string) => getUserInfoById(id)));
};

export const getFakeCurrentUserId = (): Promise<string> => {
  return axios
    .get(USER_URL, {
      params: { page: 1, limit: 1 },
    } as AxiosRequestConfig)
    .then((response: AxiosResponse) => response?.data?.data?.[0]?._id ?? '');
};

const getRelatedUsers = (url: string) => (): Promise<User[]> => {
  const currentUserId: string = getCurrentUserId() ?? '';
  return axios
    .get(`${url}/${currentUserId}`)
    .then((response: AxiosResponse) => response?.data?.data ?? []);
};

export const getLikedUsers = getRelatedUsers(USER_LIKE_URL);

export const getPassedUsers = getRelatedUsers(USER_PASS_URL);

export const getMatchedUsers = getRelatedUsers(USER_MATCH_URL);

export const getUserInfoById = (id: string): Promise<User> =>
    axios.get(`${USER_URL}/${id}`)
        .then((response: AxiosResponse) => response?.data?.data ?? []);
