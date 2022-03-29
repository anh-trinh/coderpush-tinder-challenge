import { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import * as React from 'react';
import UserList from '../../components/UserList/UserList';
import styles from '../../styles/PassPage.module.css';
import { useEffect, useState } from 'react';
import { User } from '../../models/User';
import { getPassedUsers } from '../../services/UserService';

const PassPage: NextPage = () => {
  const [passedUsers, setPassedUsers] = useState<User[]>([]);

  useEffect(() => {
    getPassedUsers().then((responseUsers: User[]) => {
      setPassedUsers(responseUsers);
    });
  }, []);

  return (
    <Layout title="Pass">
      <div className={styles.title}>Passed</div>
      <UserList users={passedUsers} />
    </Layout>
  );
};

export default PassPage;
