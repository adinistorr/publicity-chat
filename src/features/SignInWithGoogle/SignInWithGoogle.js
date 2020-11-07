import React, {useContext} from 'react';
import {FirebaseContext} from '../../common/FirebaseContext/FirebaseContext';

export default function SignIn() {
    const firebase = useContext(FirebaseContext);
    const auth = firebase.auth();

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
            <p className="text-center">Do not violate the community guidelines or you will be banned for life!</p>
        </>
    );
}
