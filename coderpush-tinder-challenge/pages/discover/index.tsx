import type { NextPage } from 'next';
import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import UserInfoSlider from '../../components/UserInfoSlider/UserInfoSlider';
import UserActionBar from '../../components/UserActionBar/UserActionBar';

const DiscoverPage: NextPage = () => {
  return (
    <Layout title="Discover">
      <UserInfoSlider />
      <UserActionBar />
    </Layout>
  );
};

export default DiscoverPage;
