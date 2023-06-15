import React, { FC } from 'react';
import styles from './UserInfo.module.scss';
import {LocalGithubUser} from "../../types";
import InfoItem, {InfoItemProps} from "../InfoItem/InfoItem";
import {ReactComponent as CompanyIcon} from 'assets/icon-company.svg'
import {ReactComponent as LocationIcon} from 'assets/icon-location.svg'
import {ReactComponent as TwitterIcon} from 'assets/icon-twitter.svg'
import {ReactComponent as BlogIcon} from 'assets/icon-website.svg'

interface UserInfoProps  extends Pick<LocalGithubUser,'blog'|'company'|'location'|'twitter'>{}

const UserInfo: FC<UserInfoProps> = ({blog,company,location,twitter}) => {
    const items:InfoItemProps[]=[
        {
            icon:<LocationIcon/>,
            text:location,
        },
        {
            icon:<BlogIcon/>,
            text:blog
        },
        {
            icon:<TwitterIcon/>,
            text:twitter
        },
        {
            icon:<CompanyIcon/>,
            text:company
        }
    ]

    return(
        <div className={styles.userInfo}>
            {items.map((item,index)=>(
                <InfoItem {...item} key={index}/>
            ))}
        </div>
    );
}

export default UserInfo;
