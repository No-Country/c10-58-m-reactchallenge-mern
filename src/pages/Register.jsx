import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmail } from '../firebase/userEmailAndPassword'
import { Btn } from '../components/MicroComponents/Btn'
import uploadProfilePic from '../assets/imgs/uploadprofilepic.png'
import botonDeImg from '../assets/imgs/btn_del_img.png'
import eyeIcon from '../assets/imgs/eye_icon.png'
import eyeIconSlash from '../assets/imgs/eye_icon_slash.png'

const initialValues = {
  profilePic: '',
  firstName: '',
  lastName: '',
  dni: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: ''
}

const Loading = () => {
  return (
    <div
      style={{
			  position: 'fixed',
			  top: 0,
			  left: 0,
			  width: '100%',
			  height: '100%',
			  backgroundColor: 'rgba(0, 0, 0, 0.8)',
			  display: 'flex',
			  justifyContent: 'center',
			  alignItems: 'center',
			  zIndex: 100
      }}
    >
      <svg className='loader'>
        <circle cx='70' cy='70' r='70' />
      </svg>
    </div>
  )
}

const Message = ({ handleAlert, msg }) => {
  return (
    <div
      style={{
			  position: 'fixed',
			  top: 0,
			  left: 0,
			  width: '100%',
			  height: '100%',
			  backgroundColor: 'rgba(0, 0, 0, 0.8)',
			  color: '#fff',
			  display: 'flex',
			  justifyContent: 'center',
			  alignItems: 'center',
			  zIndex: 100
      }}
    >
      <div
        style={{
				  border: '1px solid #fff',
				  padding: '2rem',
				  borderRadius: '10px'
        }}
      >
        <h1 style={{ margin: '2rem 0' }}>{msg}</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{
						  padding: '0.4rem 0.8rem',
						  border: '1px solid #fff',
						  borderRadius: '10px'
            }}
            onClick={handleAlert}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}

const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialValues)
  const [showPass, setShowPass] = useState({
    password: false,
    confirmPassword: false
  })
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)
  const [previewImg, setPreviewImg] = useState('')

  const handleAlert = () => setAlert('')

  const handleChange = ({ target: { name, type, checked, value, files } }) => {
    if (type === 'file' && value != '') setPreviewImg(URL.createObjectURL(files[0]))
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  const handleClick = ({ target: { id } }) =>
    setShowPass({
      ...showPass,
      [id]: id === 'password' ? !showPass.password : !showPass.confirmPassword
    })

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(form)
    try {
      setLoading(true)
      const userRegistered = await createUserWithEmail(form)
      if (userRegistered) {
        setLoading(false)
        setAlert('Usuario registrado exitosamente')
        setForm(initialValues)
        setPreviewImg('')
        // Una vez registrado se va a redireccionar al perfil
        navigate('/')
      }
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  return (
    <section className=' max-w-md mx-auto'>
      {loading && <Loading />}
      {alert && <Message handleAlert={handleAlert} msg={alert} />}
      <div className='flex justify-center my-10 relative p-4'>
        <label htmlFor='profile-pic'>
          <input
            className='hidden '
            type='file'
            id='profile-pic'
            name='profilePic'
            accept='.png,.jpg'
            value={form.profilePic}
            onChange={handleChange}
          />
          {previewImg
            ? (
              <img
                className='cursor-pointer w-28 h-28 rounded-full object-cover'
                src={previewImg || uploadProfilePic}
                alt='Upload your profile picture'
              />
              )
            : (
              <img
                className='cursor-pointer object-cover'
                src={previewImg || uploadProfilePic}
                alt='Upload your profile picture'
              />
              )}
        </label>
        {previewImg && (
          <img
            className='w-7 h-7 absolute bottom-3 right-36 cursor-pointer'
            src={botonDeImg}
            alt='Button to remove profile picture'
            onClick={() => setPreviewImg('')}
          />
        )}
      </div>
      <form onSubmit={handleSubmit} className='p-4'>
        <div>
          <input
            className='inp-reg '
            type='text'
            id='firstName'
            name='firstName'
            required
            value={form.firstName}
            placeholder='Nombres'
            onChange={handleChange}
            autoFocus
          />
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
                src={showPass.password ? eyeIconSlash : eyeIcon}
                alt='Eye icon to show password'
                onClick={handleClick}
              />
            )}
          </div>
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
									  ? eyeIconSlash
									  : eyeIcon
								}
                alt='Eye icon to show password'
                onClick={handleClick}
              />
            )}
          </div>
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
        </div>
        <div className='flex justify-center my-20'>
          <Btn
            className='btn-reg w-36 border-2 border-black py-1 px-2 rounded-3xl text-gray-400'
            type='submit'
          >
            Registrarse
          </Btn>
        </div>
      </form>
    </section>
  )
}

export default Register
