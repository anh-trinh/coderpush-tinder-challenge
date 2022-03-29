import type { NextPage } from 'next';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFakeCurrentUser } from '../services/UserService';
import { User } from '../models/User';
import { getCurrentUser } from '../utils/UserUtils';

const Home: NextPage = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | undefined>(getCurrentUser());

  useEffect(() => {
    if (!currentUser) {
      assignCurrentUser();
    }
  },[]);

  useEffect(() => {
    if (!!currentUser) {
      router.push('/discover');
    }
  },[currentUser]);

  const assignCurrentUser = (): void => {
    getFakeCurrentUser().then((responseUser: User) => {
      if (!!responseUser) {
        localStorage?.setItem('currentUser', JSON.stringify(responseUser));
        setCurrentUser(responseUser);
      }
    });
  }

  return <></>;
};

export default Home;
