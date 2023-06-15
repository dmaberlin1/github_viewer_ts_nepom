import React, { FC } from 'react';
import styles from './UserInfo.module.scss';

interface UserInfoProps {}

const UserInfo: FC<UserInfoProps> = () => (
  <div className={styles.UserInfo}>
    UserInfo Component
  </div>
);

export default UserInfo;
