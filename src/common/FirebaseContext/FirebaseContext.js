import React, {createContext} from 'react';
import firebase from 'firebase/app';

const FirebaseContext = createContext(null);

const config = {
    apiKey: 'AIzaSyDdi1cnahVkkIFJBDV6p3DO86FCBH5WwJ8',
    authDomain: 'publicity-chat.firebaseapp.com',
    databaseURL: 'https://publicity-chat.firebaseio.com',
    projectId: 'publicity-chat',
    storageBucket: 'publicity-chat.appspot.com',
    messagingSenderId: '649150347972',
    appId: '1:649150347972:web:dbcd7597c020cb918f6791',
};

function FirebaseContextProvider({children}) {
    firebase.initializeApp(config);

    return <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>;
}

export {FirebaseContext, FirebaseContextProvider};
