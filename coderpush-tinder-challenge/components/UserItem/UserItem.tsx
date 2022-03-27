import * as React from 'react';
import styles from './UserItem.module.css';

const UserItem: React.FunctionComponent = () => (
  <div className={styles.container}>
    <img
      className={styles.user_avatar}
      src="https://swiperjs.com/demos/images/nature-1.jpg"
    />
    <div className={styles.user_basic_info}>
      <div className={styles.user_name}>Name</div>
      <div className={styles.user_age}>30</div>
    </div>
  </div>
);

export default UserItem;
