import * as firebase from 'firebase';
import { FIREBASE } from 'config/project';

firebase.initializeApp(FIREBASE.config);

export default firebase;
