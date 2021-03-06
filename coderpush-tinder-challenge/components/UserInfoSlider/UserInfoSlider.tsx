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
import { UserInfo } from '../../models/UserInfo';

type Props = {
  discoverUser: User;
  discoverUserIndex: number;
  discoverUserInfo: UserInfo;
};

const UserInfoSlider: React.FunctionComponent<Props> = (props: Props) => {
  const discoverUser: User = props?.discoverUser;
  const discoverUserIndex: number = props?.discoverUserIndex ?? 0;
  const discoverUserInfo: UserInfo = props?.discoverUserInfo ?? {};
  console.log('bbbbbbbbbb discoverUserInfo', discoverUserInfo);
  const fullName: string =
    [discoverUser?.firstName, discoverUser?.lastName]
      .filter((name: string) => !!name)
      .join(' ') ?? '';
  const dateOfBirth: string = discoverUserInfo?.dateOfBirth ?? '';
  const age: string = getAge(dateOfBirth);
  const basicInfo: string = [fullName, age].filter((info: string) => !!info).join(', ');

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
          _index: number
        ) => {
          return (
            <animated.div style={{ ...style }}>
              <img
                key={discoverUser._id}
                className={styles.avatar}
                alt={discoverUser.lastName}
                src={discoverUser.picture}
              />
            </animated.div>
          );
        }
      )}
      <div className={styles.basic_info}>
        {basicInfo}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UserInfoSlider;
