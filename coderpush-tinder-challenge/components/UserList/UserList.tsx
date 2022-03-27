import * as React from 'react';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

const UserList: React.FunctionComponent = () => (
  <div className={styles.container}>
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
  </div>
);

export default UserList;
