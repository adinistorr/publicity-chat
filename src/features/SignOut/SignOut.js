import React, {useContext} from 'react';
import {FirebaseContext} from '../../common/FirebaseContext/FirebaseContext';
import 'firebase/auth';

export default function SignOut() {
    const firebase = useContext(FirebaseContext);
    const auth = firebase.auth();
    return (
        auth.currentUser && (
            <button className="sign-out" onClick={() => auth.signOut()}>
                Sign Out
            </button>
        )
    );
}
