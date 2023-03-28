/* eslint-disable */
import { useEffect, useState } from 'react';

const initialValues = {
	firstName: '',
	lastName: '',
	dni: '',
	birthDate: '',
	city: '',
	email: '',
	password: '',
	terms: ''
};

const Register = () => {
	const [form, setForm] = useState(initialValues);
	const [showPass, setShowPass] = useState(false);
	const [errors, setErrors] = useState({});

	const handleChange = ({ target }) => {
		setForm({
			...form,
			[target.name]: target.type === 'checkbox' ? target.checked : target.value
		});
	};

	const handleClick = () => setShowPass(!showPass);

	const handleSubmit = e => {
		e.preventDefault();
		validateForm() && alert('Formulario enviado!!');
	};

	const validateForm = () => {
		const errs = {};
		if (form.firstName.length < 2 || form.firstName.length > 20)
			errs.firstName = 'El nombre debe contener mas de un caracter y menos de 20';
		if (form.firstName === '') errs.firstName = 'El campo nombre no puede estar vacío';
		if (form.lastName.length < 2 || form.lastName.length > 20)
			errs.lastName = 'El apellido debe contener mas de un caracter y menos de 20';
		if (form.lastName === '') errs.lastName = 'El campo apellido no puede estar vacío';
		if (form.dni === '') errs.dni = 'El campo DNI no puede estar vacío';
		if (form.birthDate === '') errs.birthDate = 'Selecciona la fecha de tu nacimiento';
		if (form.city === '') errs.city = 'El campo ciudad no puede estar vacío';
		if (form.email === '') errs.email = 'El campo email no puede estar vacío';
		const pattern =
			/^(?=.{1,256})(?=.{1,64}@)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*@[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,}$/;
		if (!pattern.test(form.email)) errs.email = 'Ingresa un email válido';
		if (form.password === '') errs.password = 'El campo contraseña no puede estar vacío';
		if (!form.terms) errs.terms = 'Debes aceptar los términos y condiciones';
		setErrors(errs);
		return Object.keys(errs).length < 1;
	};

	return (
		<section className='p-4 max-w-md mx-auto'>
			<h1 className='text-xl font-black my-4'>Registro</h1>
			<form onSubmit={handleSubmit}>
				<div className='my-2'>
					<label className='block my-1' htmlFor='firstname'>
						Nombre
					</label>
					<input
						className='border-2 border-black w-full px-2 py-1'
						type='text'
						id='firstname'
						name='firstName'
						required
						value={form.firstName}
						placeholder='Ingresa tu nombre...'
						onChange={handleChange}
						autoFocus
					/>
					{errors.firstName && <p className='text-red-600'>{errors.firstName}</p>}
				</div>
				<div className='my-2'>
					<label className='block my-1' htmlFor='lastname'>
						Apellido
					</label>
					<input
						className='border-2 border-black w-full px-2 py-1'
						type='text'
						id='lastname'
						name='lastName'
						value={form.lastName}
						placeholder='Ingresa tu apellido...'
						onChange={handleChange}
						required
					/>
					{errors.lastName && <p className='text-red-600'>{errors.lastName}</p>}
				</div>
				<div className='my-2'>
					<label className='block my-1' htmlFor='dni'>
						DNI
					</label>
					<input
						className='border-2 border-black w-full px-2 py-1'
						type='text'
						id='dni'
						name='dni'
						value={form.dni}
						placeholder='Ingresa tu número de documento...'
						pattern='^[0-9]+$'
						onChange={handleChange}
						required
					/>
					{errors.dni && <p className='text-red-600'>{errors.dni}</p>}
				</div>
				<div className='my-2'>
					<label className='block my-1' htmlFor='birthdate'>
						Fecha de nacimiento
					</label>
					<input
						className='border-2 border-black w-full px-2 py-1'
						type='date'
						id='birthdate'
						name='birthDate'
						value={form.birthDate}
						onChange={handleChange}
						required
					/>
					{errors.birthDate && <p className='text-red-600'>{errors.birthDate}</p>}
				</div>
				<div className='my-2'>
					<label className='block my-1' htmlFor='city'>
						Ciudad
					</label>
					<input
						className='border-2 border-black w-full px-2 py-1'
						type='text'
						id='city'
						name='city'
						value={form.city}
						placeholder='Ingresa la ciudad donde vives...'
						onChange={handleChange}
						required
					/>
					{errors.city && <p className='text-red-600'>{errors.city}</p>}
				</div>
				<div className='my-2'>
					<label className='block my-1' htmlFor='email'>
						Email
					</label>
					<input
						className='border-2 border-black w-full px-2 py-1'
						id='email'
						type='email'
						name='email'
						placeholder='Ingresa tu email...'
						pattern='^(?=.{1,256})(?=.{1,64}@)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*@[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,}$'
						value={form.email}
						onChange={handleChange}
						required
					/>
					{errors.email && <p className='text-red-600'>{errors.email}</p>}
				</div>
				<div className='my-2'>
					<label className='block my-1' htmlFor='password'>
						Contraseña
					</label>
					<input
						className='border-2 border-black w-full px-2 py-1'
						type={showPass ? 'text' : 'password'}
						name='password'
						id='password'
						placeholder='Ingresa la contraseña...'
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
