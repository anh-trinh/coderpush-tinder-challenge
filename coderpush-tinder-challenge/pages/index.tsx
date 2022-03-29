import type { NextPage } from 'next';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFakeCurrentUserId } from '../services/UserService';
import { getCurrentUserId } from '../utils/UserUtils';
import { DISCOVER_HREF } from '../constants/RouteConstants';

const Home: NextPage = () => {
  const router = useRouter();
  const [currentUserId, setCurrentUserId] = useState<string>(
    getCurrentUserId()
  );

  useEffect(() => {
    if (!currentUserId) {
      assignCurrentUser();
    }
  }, []);

  useEffect(() => {
    if (!!currentUserId) {
      router.push(DISCOVER_HREF);
    }
  }, [currentUserId]);

  const assignCurrentUser = (): void => {
    getFakeCurrentUserId()
      .then((responseUserId: string) => {
        if (!!responseUserId) {
          localStorage?.setItem('currentUserId', responseUserId);
          setCurrentUserId(responseUserId);
        }
      })
      .catch((error) => {
        console.log('Error when getting fake current user', error);
      });
  };

  return <></>;
};

export default Home;
