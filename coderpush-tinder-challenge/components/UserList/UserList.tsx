import * as React from 'react';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';
import { User } from '../../models/User';

type Props = {
  users: User[];
};

const UserList: React.FunctionComponent<Props> = (props: Props) => {
  const users: User[] = props?.users || [];
  return (
    <div className={styles.container}>
      {users.map((user: User) => (
        <UserItem key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
