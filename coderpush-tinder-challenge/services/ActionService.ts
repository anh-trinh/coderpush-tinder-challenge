import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { USER_LIKE_URL } from '../constants/ApiConstants';
import { getCurrentUserId } from '../utils/UserUtils';

export const likeUserById = (targetUserId: string): Promise<boolean> => {
  const currentUserId: string = getCurrentUserId() ?? '';
  return axios
    .post(USER_LIKE_URL, { currentUserId, targetUserId }, {
      headers: {
        'Content-Type': 'text/plain',
      },
    } as AxiosRequestConfig)
    .then((response: AxiosResponse) => response?.data?.success);
};
