import React, { useState } from 'react';
import styles from './MessageArea.module.css';

const MessageArea = (props) => {
    const [inputMessage, setInputMessage] = useState('');

    const changeHandler = ({target: {value}}) => {
        setInputMessage(value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.sendMessage(inputMessage);
        setInputMessage('');
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <textarea value={inputMessage} onChange={changeHandler} />
                <button type='submit'>Send message</button>
            </form>
        </div>
    );
}

export default MessageArea;
