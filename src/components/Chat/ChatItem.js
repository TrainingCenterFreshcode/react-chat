import React from 'react';
import styles from './Chat.module.css';

const ChatItem = (props) => {
    const { user, username, body } = props;

    return (
        <article className={styles.msg}>
            <img className={styles.useravatar} src={user.imgSrc ? user.imgSrc : 'https://robohash.org/undefined?set=set4'} alt={username} />
            <div>
                <p className={styles.bold}>{username}</p>
                <p>{body}</p>
            </div>
        </article>
    )
}

export default ChatItem;
