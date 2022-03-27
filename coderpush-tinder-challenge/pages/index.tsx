import type { NextPage } from 'next';
import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/discover');
  });
  return <></>;
};

export default Home;
