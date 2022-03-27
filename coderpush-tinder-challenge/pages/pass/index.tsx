import { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import * as React from 'react';
import UserList from '../../components/UserList/UserList';
import styles from '../../styles/PassPage.module.css';

const PassPage: NextPage = () => {
  return (
    <Layout title="Pass">
      <div className={styles.title}>
        Passed
      </div>
      <UserList />
    </Layout>
  );
};

export default PassPage;
