import React, {useContext} from 'react';
import {FirebaseContext} from '../../common/FirebaseContext/FirebaseContext';

export default function ChatMessage(props) {
    const firebase = useContext(FirebaseContext);
    const auth = firebase.auth();
    const {text, uid, photoURL} = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <>
            <div className={`message ${messageClass}`}>
                <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="poza" />
                <p>{text}</p>
            </div>
        </>
    );
}
