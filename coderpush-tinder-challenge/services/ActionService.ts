import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { USER_LIKE_URL, USER_PASS_URL } from '../constants/ApiConstants';
import { getCurrentUserId } from '../utils/UserUtils';

const doActionOnUserById =
  (url: string) =>
  (targetUserId: string): Promise<boolean> => {
    const currentUserId: string = getCurrentUserId() ?? '';
    return axios
      .post(url, { currentUserId, targetUserId }, {
        headers: {
          'Content-Type': 'text/plain',
        },
      } as AxiosRequestConfig)
      .then((response: AxiosResponse) => response?.data?.success);
  };

export const likeUserById = doActionOnUserById(USER_LIKE_URL);

export const passUserById = doActionOnUserById(USER_PASS_URL);
