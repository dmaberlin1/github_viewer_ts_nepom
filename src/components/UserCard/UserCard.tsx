import React, { FC } from 'react';
import styles from './UserCard.module.scss';
import UserStat from "../UserStart/UserStat";
import {LocalGithubUser} from "../../types";
import UserTitle from "../UserTitle/UserTitle";
import UserInfo from "../UserInfo/UserInfo";

interface UserCardProps extends LocalGithubUser{}


const UserCard: FC<UserCardProps> = (props) => {

    return (
        <div className={styles.userCard}>
            <img src={props.avatar} alt={props.login} className={styles.avatar}/>
            <UserTitle login={props.login} name={props.name} created={props.created}/>
            <p className={`${styles.bio}${props.bio? '':` ${styles.empty}`}`}>
                {props.bio ||'This profile has no bio'}
            </p>
            <UserStat repos={props.repos} followers={props.followers} following={props.following}/>
            <UserInfo company={props.company} blog={props.blog} location={props.location} twitter={props.twitter}/>
        </div>
    );
}

export default UserCard;
