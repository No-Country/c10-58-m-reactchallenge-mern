/* eslint-disable */

import { Link } from 'react-router-dom';
import { fetchCollection } from '../firebase/fetchCollection';
import { Btn } from '../components/MicroComponents/Btn';

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
			<div className='p-4'>
				<h3 className='font-semibold'>Abril</h3>
				<p className='text-2xl text-right'>{'>'}</p>
				<div className='grid grid-cols-5 justify-items-center'>
					{[
						{ id: 1, day: 'Lun' },
						{ id: 2, day: 'Mar' },
						{ id: 3, day: 'Mier' },
						{ id: 4, day: 'Jue' },
						{ id: 5, day: 'Vie' }
					].map(({ id, day }) => (
						<ul key={id} className='font-medium'>
							{day}
						</ul>
					))}
				</div>
			</div>
			<Btn $margin>Agendar cita</Btn>
		</div>
	);
};

export default Calendar;
