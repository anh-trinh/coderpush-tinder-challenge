import { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import * as React from 'react';
import UserList from '../../components/UserList/UserList';
import styles from '../../styles/MatchPage.module.css';
import { useEffect, useState } from 'react';
import { User } from '../../models/User';
import { getMatchedUsers } from '../../services/UserService';

const MatchPage: NextPage = () => {
  const [matchedUsers, setMatchedUsers] = useState<User[]>([]);

  useEffect(() => {
    getMatchedUsers().then((responseUsers: User[]) => {
      setMatchedUsers(responseUsers);
    });
  }, []);

  return (
    <Layout title="Matches">
      <div className={styles.title}>Matches</div>
      <UserList users={matchedUsers} />
    </Layout>
  );
};

export default MatchPage;
