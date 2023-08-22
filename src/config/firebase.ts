import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBeiPauVr-YPoP3mlHqGwN_YZZNRQ3WNnY',
	authDomain: 'fir-morochu.firebaseapp.com',
	projectId: 'fir-morochu',
	storageBucket: 'fir-morochu.appspot.com',
	messagingSenderId: '968442309386',
	appId: '1:968442309386:web:86dc2c1805ab0849dfa8f3',
	measurementId: 'G-8N4GM7NSWE',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
