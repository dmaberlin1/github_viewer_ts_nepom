import React, { FC } from 'react';
import styles from './UserTitle.module.scss';
import {LocalGithubUser} from "../../types";

interface UserTitleProps extends Pick<LocalGithubUser,'name'|'login'|'created'>{
}


const localDate=new Intl.DateTimeFormat('en-GB',{
    day:'numeric',
    month:'short',
    year:'numeric',
});
const UserTitle: FC<UserTitleProps> = ({created,login,name}) => {
   const joinedDate=localDate.format(new Date(created))

    return(
        <div className={styles.UserTitle}>
            <h2>{name}</h2>
            <h3>{login}</h3>
            <span>{joinedDate}</span>
        </div>
    );
}

export default UserTitle;
