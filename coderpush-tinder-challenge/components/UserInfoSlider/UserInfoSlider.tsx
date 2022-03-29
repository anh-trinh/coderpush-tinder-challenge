import * as React from 'react';
import styles from './UserInfoSlider.module.css';
import { User } from '../../models/User';
import {
  animated,
  SpringValue,
  useSpringRef,
  useTransition,
} from 'react-spring';
import { useEffect } from 'react';
import { getAge } from '../../utils/UserUtils';

type Props = {
  discoverUser: User;
  discoverUserIndex: number;
};

const UserInfoSlider: React.FunctionComponent<Props> = (props: Props) => {
  const discoverUser: User = props?.discoverUser;
  const discoverUserIndex: number = props?.discoverUserIndex ?? 0;
  const fullName: string =
    [discoverUser?.firstName, discoverUser?.lastName]
      .filter((name: string) => !!name)
      .join(' ') ?? '';
  const age: number = getAge(discoverUser?.dateOfBirth);

  const transRef = useSpringRef();
  const transitions = useTransition(discoverUserIndex, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [discoverUserIndex]);

  return discoverUser ? (
    <div className={styles.container}>
      {transitions(
        (
          style: {
            opacity: SpringValue<number>;
            transform: SpringValue<string>;
          },
          index: number
        ) => {
          return (
            <animated.div style={{ ...style }}>
              <img
                key={index}
                className={styles.avatar}
                alt={discoverUser.lastName}
                src={discoverUser.picture}
              />
            </animated.div>
          );
        }
      )}
      <div className={styles.basic_info}>{fullName}, {age}</div>
    </div>
  ) : (
    <></>
  );
};

export default UserInfoSlider;
