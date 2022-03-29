import type { NextPage } from 'next';
import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import UserInfoSlider from '../../components/UserInfoSlider/UserInfoSlider';
import UserActionBar from '../../components/UserActionBar/UserActionBar';
import { useCallback, useEffect, useState } from 'react';
import { getUsers } from '../../services/UserService';
import { User } from '../../models/User';
import { USER_FETCHING_LIMIT } from '../../constants/DefaultConstants';
import { likeUserById } from '../../services/ActionService';

const DiscoverPage: NextPage = () => {
  const [discoverUserIndex, setDiscoverUserIndex] = useState<number>(0)
  const [discoverUsers, setDiscoverUsers] = useState<User[]>([]);
  const [userPage, setUserPage] = useState<number>(1);

  const onActionClick = useCallback(
    () => setDiscoverUserIndex((index: number) => (index + 1) % USER_FETCHING_LIMIT), []
  );

  useEffect(() => {
    getUsers(userPage).then((responseUsers: User[]) => {
      setDiscoverUsers([...discoverUsers, ...responseUsers]);
    }).catch((error) => {
      console.log('Error when getting list of users', error);
    });
  }, [userPage]);

  useEffect(() => {
    updateNewDiscoverUsers(discoverUserIndex)
  }, [discoverUserIndex]);

  const handleLikeClick = (): void => {
    const currentDiscoverUser: User = discoverUsers[discoverUserIndex];
    onActionClick();
    likeUserById(currentDiscoverUser._id)
      .catch((error) => {
        console.log('Error when like a user', error);
      });
  }
  const handlePassClick = (): void => {
    onActionClick();
  }

  const updateNewDiscoverUsers = (discoverUserIndex: number): void => {
    if (discoverUserIndex + 1 === USER_FETCHING_LIMIT) {
      setUserPage(userPage + 1);
    }
    else if (discoverUserIndex === 0) {
      const removedDisplayedUsers = discoverUsers.slice(USER_FETCHING_LIMIT, discoverUsers.length);
      setDiscoverUsers(removedDisplayedUsers);
    }
  }

  return (
    <Layout title="Discover">
      {discoverUsers.length > 0 ? (
        <>
          <UserInfoSlider
            discoverUser={discoverUsers[discoverUserIndex]}
            discoverUserIndex={discoverUserIndex}
          />
          <UserActionBar
            handleLikeClick={handleLikeClick}
            handlePassClick={handlePassClick}
          />
        </>
      ) : <></>}
    </Layout>
  );
};

export default DiscoverPage;
