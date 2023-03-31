/*eslint-disable*/
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth, db } from './client';
import { ERRORS_CREATING_USER, ERRORS_LOGGING_USER } from './errors';
import { formatDateFirebase } from '../utils/formatDateFirebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { getDefaultAvatar } from './storage';

export async function createUserWithEmail(userDataForm) {
	try {
		const { names, lastName, dni, email, password } = userDataForm;
		const newUser = await createUserWithEmailAndPassword(firebaseAuth, email, password);
		// const avatar = await getDefaultAvatar();
		if (newUser) {
			await setDoc(doc(db, 'users', newUser.user.uid), {
				names,
				lastName,
				dni: Number(dni),
				email,
				appointments: []
			});
			return newUser;
		}
	} catch (error) {
		const errorCode = error.code;
		throw new Error(ERRORS_CREATING_USER[errorCode]);
	}
}

export async function signInWithEmail(user) {
	try {
		const { email, password } = user;
		const userSignIn = await signInWithEmailAndPassword(firebaseAuth, email, password);
		const { uid } = userSignIn.user;
		const docSnapshot = await getDoc(doc(db, 'users', uid));
		console.log(docSnapshot.data());
		const userData = docSnapshot.data();
		return userData;
	} catch (error) {
		const errorCode = error.code;
		throw new Error(ERRORS_LOGGING_USER[errorCode]);
	}
}
