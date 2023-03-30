/* eslint-disable */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmail } from '../firebase/userEmailAndPassword';

const initialValues = {
	profilePic: '',
	names: '',
	lastName: '',
	dni: '',
	email: '',
	password: '',
	confirmPassword: '',
	terms: ''
};

const Register = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState(initialValues);
	const [showPass, setShowPass] = useState({ password: false, confirmPassword: false });
	const [errors, setErrors] = useState({});

	const handleChange = ({ target: { name, type, checked, value } }) =>
		setForm({
			...form,
			[name]: type === 'checkbox' ? checked : value
		});

	const handleClick = ({ target: { id } }) =>
		setShowPass({
			...showPass,
			[id]: id === 'password' ? !showPass.password : !showPass.confirmPassword
		});

	const handleSubmit = async e => {
		e.preventDefault();
		if (validateForm()) {
			try {
				const userRegistered = await createUserWithEmail(form);
				alert('Usuario creado exitosamente');
				console.log(userRegistered);
				// Una vez registrado se va a redireccionar al perfil
				// navigate('')
			} catch (error) {
				console.error(error);
				alert('[!] Ocurrió un error al intentar registrarte');
			}
		}
	};

	const validateForm = () => {
		const errs = {};
		if (form.names.length < 2 || form.names.length > 30)
			errs.names = 'El nombre debe contener mas de un caracter y menos de 20';
		if (form.names === '') errs.names = 'El campo nombre no puede estar vacío';
		if (form.lastName.length < 2 || form.lastName.length > 20)
			errs.lastName = 'El apellido debe contener mas de un caracter y menos de 20';
		if (form.lastName === '') errs.lastName = 'El campo apellido no puede estar vacío';
		if (form.email === '') errs.email = 'El campo email no puede estar vacío';
		const pattern =
			/^(?=.{1,256})(?=.{1,64}@)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*@[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,}$/;
		if (!pattern.test(form.email)) errs.email = 'Ingresa un email válido';
		if (form.dni === '') errs.dni = 'El campo DNI no puede estar vacío';
		if (form.password === '') errs.password = 'El campo contraseña no puede estar vacío';
		if (form.confirmPassword === '')
			errs.confirmPassword = 'El campo contraseña no puede estar vacío';
		if (form.confirmPassword !== form.password)
			errs.confirmPassword = 'Las contraseñas no coinciden';
		if (!form.terms) errs.terms = 'Debes aceptar los términos y condiciones';
		setErrors(errs);
		return Object.keys(errs).length < 1;
	};

	return (
		<section className='p-4 max-w-md mx-auto'>
			<div className='flex'>
				<Link to='/'>
					<img
						className='cursor-pointer'
						src='./registerarrowback.png'
						alt='Arrow to navigate back'
					/>
				</Link>
			</div>
			<div className='flex justify-center my-10'>
				<label htmlFor='profile-pic'>
					<input
						className='hidden'
						type='file'
						id='profile-pic'
						name='profilePic'
						accept='.png,.jpg'
						value={form.profilePic}
						onChange={handleChange}
					/>
					<img
						className='cursor-pointer'
						src='./uploadprofilepic.png'
						alt='Upload your profile picture'
					/>
				</label>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						className='inp-reg'
						type='text'
						id='names'
						name='names'
						required
						value={form.names}
						placeholder='Nombres'
						onChange={handleChange}
						autoFocus
					/>
					{errors.names && <p className='text-red-600'>{errors.names}</p>}
				</div>
				<div>
					<input
						className='inp-reg'
						type='text'
						id='lastname'
						name='lastName'
						value={form.lastName}
						placeholder='Apellidos'
						onChange={handleChange}
						required
					/>
					{errors.lastName && <p className='text-red-600'>{errors.lastName}</p>}
				</div>
				<div>
					<input
						className='inp-reg'
						id='email'
						type='email'
						name='email'
						placeholder='Correo'
						pattern='^(?=.{1,256})(?=.{1,64}@)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*@[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,}$'
						value={form.email}
						onChange={handleChange}
						required
					/>
					{errors.email && <p className='text-red-600'>{errors.email}</p>}
				</div>
				<div>
					<input
						className='inp-reg'
						type='text'
						id='dni'
						name='dni'
						value={form.dni}
						placeholder='Documento de identidad'
						pattern='^[0-9]+$'
						onChange={handleChange}
						required
					/>
					{errors.dni && <p className='text-red-600'>{errors.dni}</p>}
				</div>
				<div>
					<div className='icon-eye-container'>
						<input
							className='inp-reg'
							type={showPass.password ? 'text' : 'password'}
							name='password'
							id='password'
							placeholder='Contraseña'
							value={form.password}
							onChange={handleChange}
							required
						/>
						{form.password && (
							<img
								id='password'
								className='eye-icon'
								src={showPass.password ? 'eye_icon_slash.png' : '/eye_icon.png'}
								alt='Eye icon to show password'
								onClick={handleClick}
							/>
						)}
					</div>
					{errors.password && <p className='text-red-600'>{errors.password}</p>}
				</div>
				<div>
					<div className='icon-eye-container'>
						<input
							className='inp-reg'
							type={showPass.confirmPassword ? 'text' : 'password'}
							name='confirmPassword'
							id='confirmPassword'
							placeholder='Confirmar contraseña'
							value={form.confirmPassword}
							onChange={handleChange}
							required
						/>
						{form.confirmPassword && (
							<img
								id='confirmPassword'
								className='eye-icon'
								src={
									showPass.confirmPassword
										? 'eye_icon_slash.png'
										: '/eye_icon.png'
								}
								alt='Eye icon to show password'
								onClick={handleClick}
							/>
						)}
					</div>
					{errors.confirmPassword && (
						<p className='text-red-600'>{errors.confirmPassword}</p>
					)}
				</div>
				<div className='my-2'>
					<div>
						<label className='flex items-center text-xs cursor-pointer' htmlFor='terms'>
							<input
								id='terms'
								className='inp-terms mx-2 appearance-none w-4 h-4 rounded-full border-2 border-gray-400 cursor-pointer'
								type='checkbox'
								name='terms'
								value={form.terms}
								checked={form.terms}
								onChange={handleChange}
							/>
							Acepto los
							<span className='ml-1 underline'>términos y condiciones</span>
						</label>
					</div>
					{errors.terms && <p className='text-red-600'>{errors.terms}</p>}
				</div>
				<div className='flex justify-center my-20'>
					<button
						className='btn-reg w-36 border-2 border-black py-1 px-2 rounded-3xl text-gray-400'
						type='submit'>
						Registrarse
					</button>
				</div>
			</form>
		</section>
	);
};

export default Register;
