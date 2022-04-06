import React from 'react';
import styles from './HeaderBar.module.css';
import Link from 'next/link';
import { FaGlobe, FaHeart, FaStar } from 'react-icons/fa';
import { CgClose } from '@react-icons/all-files/cg/CgClose';
import {
  DISCOVER_HREF,
  LIKE_HREF,
  MATCH_HREF,
  PASS_HREF,
} from '../../constants/RouteConstants';

const HeaderBar: React.FunctionComponent = () => (
  <nav className={styles.tab_bar_container}>
    <Link href={DISCOVER_HREF}>
      <a title="Discover">
        <FaGlobe color="#236BDE" />
      </a>
    </Link>
    <Link href={LIKE_HREF}>
      <a title="Liked">
        <FaHeart color="#14C96F" size="20" />
      </a>
    </Link>
    <Link href={PASS_HREF}>
      <a title="Passed">
        <CgClose color="#D64F52" size="22" />
      </a>
    </Link>
    <Link href={MATCH_HREF}>
      <a title="Matches">
        <FaStar color="#643DD9" size="21" />
      </a>
    </Link>
  </nav>
);

export default HeaderBar;
