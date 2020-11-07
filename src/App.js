import React, {useContext} from 'react';
import './App.css';

import ChatRoom from './features/ChatRoom/ChatRoom';
import SignIn from './features/SignInWithGoogle/SignInWithGoogle';
import {FirebaseContext} from './common/FirebaseContext/FirebaseContext';
import {useAuthState} from 'react-firebase-hooks/auth';
import 'firebase/auth';
import SignOut from './features/SignOut/SignOut';

function App() {
    const firebase = useContext(FirebaseContext);
    const auth = firebase.auth();
    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <header>
                <h1>Publicity Chat</h1>
                <SignOut />
            </header>
            <section>{user ? <ChatRoom /> : <SignIn />}</section>
        </div>
    );
}

export default App;
