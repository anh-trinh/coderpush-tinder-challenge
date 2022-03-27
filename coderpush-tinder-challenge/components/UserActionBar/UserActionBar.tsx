import * as React from 'react';
import styles from './UserActionBar.module.css';
import { FaHeart } from 'react-icons/fa';
import { CgClose } from '@react-icons/all-files/cg/CgClose';

const UserActionBar: React.FunctionComponent = () => (
  <div className={styles.container}>
    <button type="button" className={styles.action_button}>
      <CgClose color="#D64F52" size="32" />
    </button>
    <button type="button" className={styles.action_button}>
      <FaHeart color="#14C96F" size="30" />
    </button>
  </div>
);

export default UserActionBar;
