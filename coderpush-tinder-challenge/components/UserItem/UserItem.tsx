import * as React from 'react';
import styles from './UserItem.module.css';
import { User } from '../../models/User';
import { getAge } from '../../utils/UserUtils';

type Props = {
  user: User;
};

const UserItem: React.FunctionComponent<Props> = (props: Props) => {
  const user: User = props?.user;
  const picture: string = user?.picture ?? '';
  const fullName: string =
    [user?.firstName, user?.lastName]
      .filter((name: string) => !!name)
      .join(' ') ?? '';
  const dateOfBirth: string = user?.userInfo?.dateOfBirth ?? '';
  const age: string = getAge(dateOfBirth);

  return (
    <div className={styles.container}>
      <img alt={fullName} className={styles.user_avatar} src={picture} />
      <div className={styles.user_basic_info}>
        <div className={styles.user_name}>{fullName}</div>
        <div className={styles.user_age}>{age}</div>
      </div>
    </div>
  );
};

export default UserItem;
