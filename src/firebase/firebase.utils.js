import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCbAjO60FDGEXSXVaWZqqtxtqLIXG2Wwwo",
    authDomain: "crwn-db-67b13.firebaseapp.com",
    projectId: "crwn-db-67b13",
    storageBucket: "crwn-db-67b13.appspot.com",
    messagingSenderId: "809879984535",
    appId: "1:809879984535:web:b4dccfc94273a229c8ccd2",
    measurementId: "G-4V0WV3EJJY"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const  createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
   
   
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot =  await userRef.get();

  if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{ await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
        
      } catch (error) {
         console.log('error creating user', error.message)
      }

  }

  return userRef;

}

export default firebase;


