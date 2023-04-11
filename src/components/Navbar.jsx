/* eslint-disable jsx-quotes */
import { Link, useLocation } from 'react-router-dom';
// import navbarIcon from '../../public/navbar_icon.svg'
import homeIcon from '../../public/home_icon.svg';
import variantHomeIcon from '../../public/home_variant.svg';
import { useState, useEffect } from 'react';
import emergencyIcon from '../../public/emergency_icon.svg';
import variantEmergencyIcon from '../../public/emergency_variant.svg';
import profileIcon from '../../public/profile_icon.svg';
import variantProfileIcon from '../../public/profile_variant.svg';
import { useNavigate } from 'react-router-dom';
import { useFirebaseContext } from '../context/UserContext';

const Navbar = () => {
	const [selected, setSelected] = useState('');
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				return setSelected('homeIcon');
			case '/matias':
				return setSelected('emergencyIcon');
			case '/esteban':
				return setSelected('profileIcon');
			default:
				return setSelected('homeIcon');
		}
	}, []);
	//navigator temporal
	const navigate = useNavigate();
	const { user } = useFirebaseContext();
	
	
	
	const handleClick = () => {
		if (user) {
			navigate('/profile');
		} else {
			navigate('/login');
		}
		
	};

	return (
		<nav className='w-full h-[50px] fixed bottom-0 '>
			<ul className='w-full h-full flex justify-evenly items-center'>
				<li className=''>
					<Link to='/'>
						<img src={selected === 'homeIcon' ? homeIcon : variantHomeIcon} alt='' />
					</Link>
				</li>
				<li className=''>
					<Link to='/emergency'>
						<img
							src={
								selected === 'emergencyIcon' ? emergencyIcon : variantEmergencyIcon
							}
							alt=''
						/>
					</Link>
				</li>
				<li onClick={handleClick} className=''>
					
						<img
							src={selected === 'profileIcon' ? profileIcon : variantProfileIcon}
							alt=''
						/>
					
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
