import React, { useContext } from 'react';
import ChatItem from './ChatItem';
import MessageContext from '../../contexts/MessageContext';
import styles from './Chat.module.css';

const Chat = () => {
    const {messageState: { messages, error, isLoading } } = useContext(MessageContext);

    const messageCardsArray = messages.map(currentMessage => {
        const { body, id, user, user: { username } } = currentMessage;
        return (
            <ChatItem key={id} messageId={id} user={user} username={username} body={body} />
        )
    });

    return (
        <div className={styles.container}>
            {isLoading && <h1>DIALOG LOADING...</h1>}
            {error && <h1>ERROR =(</h1>}
            {messageCardsArray}
        </div>
    );
}

export default Chat;
