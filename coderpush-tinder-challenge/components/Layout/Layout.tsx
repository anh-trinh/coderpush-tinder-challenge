import * as React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';
import HeaderBar from '../HeaderBar/HeaderBar';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = '' }) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
    </Head>
    <HeaderBar />
    {children}
  </div>
);

export default Layout;
