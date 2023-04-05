/* eslint-disable */
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useFirebaseContext } from '../context/UserContext';
import { db } from '../firebase/client';

const User = () => {
	const { user, loading } = useFirebaseContext();
	const [showUser, setShowUser] = useState(null);

	useEffect(() => {
		if (user && loading) {
			const queryColletion = collection(db, 'users');
			const queryFilter = query(queryColletion, where('email', '==', user.email));
			getDocs(queryFilter).then(res => res.docs.forEach(user => setShowUser(user.data())));
		}
	}, [user, loading]);

	if (!showUser) return <p>Cargando...</p>;

	return (
		<div className='flex items-center'>
			{showUser && (
				<img className='w-8 h-8 bg-slate-300 rounded-full' src={showUser.avatar} alt='' />
			)}
		</div>
	);
};

export default User;
