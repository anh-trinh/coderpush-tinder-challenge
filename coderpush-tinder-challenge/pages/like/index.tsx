import { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import * as React from 'react';
import UserList from '../../components/UserList/UserList';
import styles from '../../styles/LikePage.module.css';
import { useEffect, useState } from 'react';
import { User } from '../../models/User';
import { getLikedUsers } from '../../services/UserService';

const LikePage: NextPage = () => {
  const [likedUsers, setLikedUsers] = useState<User[]>([]);

  useEffect(() => {
    getLikedUsers().then((responseUsers: User[]) => {
      setLikedUsers(responseUsers);
    });
  }, [])

  return (
    <Layout title="Like">
      <div className={styles.title}>Liked</div>
      <UserList users={likedUsers} />
    </Layout>
  );
};

export default LikePage;
