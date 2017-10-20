import * as firebase from 'firebase';

import { FIREBASE } from 'config/project';

firebase.initializeApp(FIREBASE.config);
export default firebase;

export const provider = new firebase.auth.EmailAuthProvider();
export const auth = firebase.auth();
