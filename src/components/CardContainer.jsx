/* eslint-disable */
import React from 'react';
import Card from './Card';
import { fetchCollection } from '../firebase/fetchCollection';
import { useState, useEffect } from 'react';

const CardContainer = () => {
	const [medicos, setMedicos] = useState([]);
	useEffect(() => {
		fetchCollection({ collectionName: 'medicos' }).then(medicos => {
			setMedicos(medicos);
		});
	}, []);

	return (
		<div className='flex justify-center flex-col'>
			{medicos.map(medico => {
				return <Card key={medico.id} medico={medico} />;
			})}
		</div>
	);
};

export default CardContainer;
