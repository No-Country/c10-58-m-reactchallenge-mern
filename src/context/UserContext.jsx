/* eslint-disable no-sequences */
/* eslint-disable comma-dangle */
/*eslint-disable*/
import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseAuth } from '../firebase/client';
import { signInWithEmail } from '../firebase/userEmailAndPassword';

const FirebaseContext = createContext();
export const useFirebaseContext = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	const login = async (userCredentials) => {
		setLoading(true)
		const userLoggedIn = await signInWithEmail(userCredentials)
		setUser(userLoggedIn)
		setLoading(false)
		return userLoggedIn
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(firebaseAuth, currentUser => {
			setLoading(true);
			setUser(currentUser);
			setLoading(false)
		});
		return () => unSubscribe();
	}, []);

	const logout = () => signOut(firebaseAuth);

	return (
		<FirebaseContext.Provider value={{ login, user, logout, loading }}>
			{children}
		</FirebaseContext.Provider>
	);
};

FirebaseProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default FirebaseProvider;
