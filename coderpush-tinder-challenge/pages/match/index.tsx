import { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import * as React from 'react';
import UserList from '../../components/UserList/UserList';
import styles from '../../styles/MatchPage.module.css';

const MatchPage: NextPage = () => {
  return (
    <Layout title="Matches">
      <div className={styles.title}>Matches</div>
      <UserList />
    </Layout>
  );
};

export default MatchPage;
