import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './CommunityDetailsPage.module.css';
import TabList from "components/Communities/TabList";

import imgbackground from 'assets/images/bookmarkbackground.png';
import commmunityicon from 'assets/icons/palette.png';

const CommunityDetailsPage = () => {
    const location = useLocation();
    const communityInfo = { ...location.state };

    const [isJoined, setIsJoined] = useState(false);

    const handleJoinClick = () => {
        setIsJoined(!isJoined);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                    <img src={communityInfo.img} alt="profile" className={styles.image} />
                </div>
                <div className={styles.iconWrapper}>
                    <div className={styles.communityPostIconWrapper}>
                        <img src={imgbackground} className={styles.communityPostIconBackground} />
                        <img src={commmunityicon} className={styles.communityPostIconPalette} />
                    </div>
                </div>
            </div>

            <div className={styles.details}>
                <div className={styles.header}>
                    <div className={styles.communityName}>{communityInfo.community}</div>
                    <button
                        className={isJoined ? styles.joinButtonActive : styles.joinButton}
                        onClick={handleJoinClick}
                    >
                        {isJoined ? '나가기' : '가입'}
                    </button>
                </div>
                <div className={styles.description}>정보보안기사 합격을 위한 커뮤니티입니다!</div>
            </div>
            <TabList />
        </div>
    )
}

export default CommunityDetailsPage;
