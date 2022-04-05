import react from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { USER_URL } from '../constants/ApiConstants';
import { USER_FETCHING_LIMIT } from '../constants/DefaultConstants';
import { getCurrentUserId } from '../utils/UserUtils';
import { User } from '../models/User';
import { getUser } from '../models/User.factory';
import { getUsers } from './UserService';


describe('UserService', () => {
    it('getUsers', (done) => {
        // given
        const currentUserId: string = getCurrentUserId() ?? '';
        const axiosMock = new MockAdapter(axios);
        const user: User = getUser();
        axiosMock.onGet(USER_URL, {
            params: { page: 1, limit: USER_FETCHING_LIMIT, currentUserId },
        } as AxiosRequestConfig).reply(200, {
            data: [user],
        });
        // then
        getUsers(1).then((users: User[]) => {
            expect(users).toEqual([user]);
            done();
        });
    });
});
