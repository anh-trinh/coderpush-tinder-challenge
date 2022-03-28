import * as React from 'react';
import styles from './UserActionBar.module.css';
import { FaHeart } from 'react-icons/fa';
import { CgClose } from '@react-icons/all-files/cg/CgClose';

type Props = {
  handleLikeClick: () => void;
  handlePassClick: () => void;
}

const UserActionBar: React.FunctionComponent<Props> = (props: Props) => {
  const handleLikeClick: () => void = props?.handleLikeClick;
  const handlePassClick: () => void = props?.handlePassClick;
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.action_button} ${styles.pass_button}`}
        onClick={handlePassClick}
      >
        <CgClose color="#D64F52" size="32" />
      </button>
      <button
        type="button"
        className={`${styles.action_button} ${styles.like_button}`}
        onClick={handleLikeClick}
      >
        <FaHeart color="#14C96F" size="30" />
      </button>
    </div>
  )
};

export default UserActionBar;
