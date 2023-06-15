import React, { FC } from 'react';
import styles from './UserCard.module.scss';
import UserStat from "../UserStart/UserStat";
import {LocalGithubUser} from "../../types";
import UserTitle from "../UserTitle/UserTitle";

interface UserCardProps extends LocalGithubUser{}


const UserCard: FC<UserCardProps> = (props) => {

    return (
        <div className={styles.UserCard}>
            <img src={props.avatar} alt={props.login} className={styles.avatar}/>
            <UserTitle login={props.login} name={props.name} created={props.created}/>
            <p className={`${styles.bio}${props.bio? '':` ${styles.empty}`}`}>
                {props.bio ||'This profile has no bio'}
            </p>
            <UserStat repos={props.repos} followers={props.followers} following={props.following}/>
        </div>
    );
}

export default UserCard;