/* eslint-disable */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmail } from '../firebase/userEmailAndPassword';

const initialValues = {
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
	const [showPass, setShowPass] = useState(false);
	const [errors, setErrors] = useState({});

	const handleChange = ({ target }) =>
		setForm({
			...form,
			[target.name]: target.type === 'checkbox' ? target.checked : target.value
		});

	const handleClick = () => setShowPass(!showPass);

	const handleSubmit = async e => {
		e.preventDefault();
		if (validateForm()) {
			try {
				const userRegistered = await createUserWithEmail(form);
				alert('Usuario creado exitosamente');
				console.log(userRegistered);
			} catch (error) {
				console.error(error);
				alert('[!] Ocurrió un error al intentar registrarte');
			}
		}
	};

	const validateForm = () => {
		const errs = {};
		if (form.names.length < 2 || form.names.length > 30) {
			errs.names = 'El nombre debe contener mas de un caracter y menos de 20';
		}
		if (form.names === '') {
			errs.names = 'El campo nombre no puede estar vacío';
		}
		if (form.lastName.length < 2 || form.lastName.length > 20) {
			errs.lastName = 'El apellido debe contener mas de un caracter y menos de 20';
		}
		if (form.lastName === '') {
			errs.lastName = 'El campo apellido no puede estar vacío';
		}
		if (form.dni === '') errs.dni = 'El campo DNI no puede estar vacío';
		if (form.email === '') errs.email = 'El campo email no puede estar vacío';
		const pattern =
			/^(?=.{1,256})(?=.{1,64}@)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*@[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,}$/;
		if (!pattern.test(form.email)) errs.email = 'Ingresa un email válido';
		if (form.password === '') {
			errs.password = 'El campo contraseña no puede estar vacío';
		}
		if (!form.terms) errs.terms = 'Debes aceptar los términos y condiciones';
		setErrors(errs);
		return Object.keys(errs).length < 1;
	};

	return (
		<section className='p-4 max-w-md mx-auto'>
			<h1 className='text-xl font-black my-4'>Registro</h1>
			<form onSubmit={handleSubmit}>
				<div className='my-2'>
					<input
						className='border-2 border-black w-full px-2 py-1'
						type='text'
						id='firstname'
						name='firstName'
						required
						value={form.names}
						placeholder='Nombres'
						onChange={handleChange}
						autoFocus
					/>
					{errors.names && <p className='text-red-600'>{errors.names}</p>}
				</div>
				<div className='my-2'>
					<input
						className='border-2 border-black w-full px-2 py-1'
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
				<div className='my-2'>
					<input
						className='border-2 border-black w-full px-2 py-1'
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
				<div className='my-2'>
					<input
						className='border-2 border-black w-full px-2 py-1'
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
				<div className='my-2'>
					<input
						className='border-2 border-black w-full px-2 py-1'
						type={showPass ? 'text' : 'password'}
						name='password'
						id='password'
						placeholder='Contraseña'
						value={form.password}
						onChange={handleChange}
						required
					/>
					{errors.password && <p className='text-red-600'>{errors.password}</p>}
					{form.password && (
						<span className='flex items-center justify-end mt-1'>
							Mostrar contraseña{' '}
							<input
								onClick={handleClick}
								className='mx-2 cursor-pointer'
								type='checkbox'
							/>
						</span>
					)}
				</div>
				<div className='my-2'>
					<input
						className='border-2 border-black w-full px-2 py-1'
						type={showPass ? 'text' : 'password'}
						name='confirmPassword'
						id='confirmPassword'
						placeholder='Confirmar contraseña'
						value={form.confirmPassword}
						onChange={handleChange}
						required
					/>
					{errors.confirmPassword && (
						<p className='text-red-600'>{errors.confirmPassword}</p>
					)}
					{form.confirmPassword && (
						<span className='flex items-center justify-end mt-1'>
							Mostrar contraseña{' '}
							<input
								onClick={handleClick}
								className='mx-2 cursor-pointer'
								type='checkbox'
							/>
						</span>
					)}
				</div>
				<div>
					<span className='flex items-center mt-1'>
						Aceptar términos y condiciones
						<input
							className='mx-2 cursor-pointer'
							type='checkbox'
							name='terms'
							value={form.terms}
							checked={form.terms}
							onChange={handleChange}
						/>
					</span>
					{errors.terms && <p className='text-red-600'>{errors.terms}</p>}
				</div>
				<div>
					<button className='border-2 border-black py-1 px-2 my-2 rounded' type='submit'>
						REGISTRARSE
					</button>
				</div>
			</form>
		</section>
	);
};

export default Register;
