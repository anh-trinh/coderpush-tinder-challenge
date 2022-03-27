import { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import * as React from 'react';
import UserList from '../../components/UserList/UserList';
import styles from '../../styles/LikePage.module.css';

const LikePage: NextPage = () => {
  return (
    <Layout title="Like">
      <div className={styles.title}>
        Liked
      </div>
      <UserList />
    </Layout>
  );
};

export default LikePage;
