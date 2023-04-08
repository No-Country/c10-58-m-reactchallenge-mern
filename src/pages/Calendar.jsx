/* eslint-disable */

import { Link } from 'react-router-dom';
import { Btn } from '../components/MicroComponents/Btn';
import { useEffect } from 'react';
import { getMedicAppointments } from '../firebase/medics';

const week = [
	{ id: 1, day: 'Lun' },
	{ id: 2, day: 'Mar' },
	{ id: 3, day: 'Mier' },
	{ id: 4, day: 'Jue' },
	{ id: 5, day: 'Vie' }
];

const hours = [
	{ id: 1, hour: '7:00' },
	{ id: 2, hour: '8:00' },
	{ id: 3, hour: '9:00' },
	{ id: 4, hour: '10:00' },
	{ id: 5, hour: '11:00' },
	{ id: 6, hour: '12:00' },
	{ id: 7, hour: '13:00' },
	{ id: 8, hour: '14:00' },
	{ id: 9, hour: '15:00' },
	{ id: 10, hour: '16:00' },
	{ id: 11, hour: '17:00' },
	{ id: 12, hour: '18:00' }
];

const Calendar = () => {
	return (
		<div>
			<Link to='/'>
				<img src='/registerarrowback.png' alt='Arrow' />
			</Link>
			<h2 className='text-xs font-semibold text-center'>
				Agenda de Laura Jiménez, psicóloga
			</h2>
			<p className='text-xs text-center my-4'>
				Elige el dia y la hora en la que quieres tu cita
			</p>
			<div className='max-w-sm mx-auto p-4 mb-12'>
				<h3 className='px-4 text-xl font-semibold'>Abril</h3>
				<p className='px-4 text-2xl text-right'>{'>'}</p>
				<div className='grid grid-cols-5 justify-items-center'>
					{week.map(({ id, day }) => (
						<div key={id}>
							<h4 className='font-medium text-center text-xs mb-4'>{day}</h4>
							<ul>
								{hours.map(({ id, hour }) => (
									<li
										className='border-[1px] border-gray-400 rounded-md py-0 px-2 my-2 text-xs text-center cursor-pointer'
										key={id}>
										{hour}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<Btn $margin>Agendar cita</Btn>
		</div>
	);
};

export default Calendar;
