import React from 'react';
import DiscoverPage from './index';
import { User } from '../../models/User';
import { getUser } from '../../models/User.factory';
import * as userService from '../../services/UserService';
import { mount } from 'enzyme';
import Layout from '../../components/Layout/Layout';

describe('DiscoverPage', () => {
    it('should display content when getUsersWithInfos is success', () => {
        // given
        const user: User = getUser();
        const getUsersWithInfos = jest
            .spyOn(userService, 'getUsersWithInfos')
            .mockResolvedValue([user]);
        // when
        const discoverPageWrapper = mount(<DiscoverPage />);
        // then
        expect(getUsersWithInfos).toHaveBeenCalled();
        expect(discoverPageWrapper.find(Layout).children().first()).toHaveLength(1);
    });
});
