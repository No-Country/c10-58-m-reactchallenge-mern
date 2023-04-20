import  { useEffect ,useState} from 'react'
import { Form } from '../components/MicroComponents/Form.js'
import { Btn } from '../components/MicroComponents/Btn.js'
import { useFirebaseContext } from '../context/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'

import styled from 'styled-components'
// styles

const ButonLogout = styled.button`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin: 10px;
  padding-left: 10px;
  border: 1px solid #000;
`
// imagen de perfil redonda
const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 15px;
  background-color: #f6f6f6;
  
  img {
    color:#f6f6f6;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

`
const SpanAddImg = styled.span`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
  padding-left: 10px;
  border-radius: 100%;
  background-color: #ecdcdc;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Profile = () => {
  const { user, logout } = useFirebaseContext()
  const [edit, setEdit] = useState(false)
  const navigate = useNavigate()
  //destructuring
  const {names,email,lastName,dni} = user
 

  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  // validate form
  const handleSubmit = (e) => {
    e.preventDefault()
   
  }
  // change input
  const handleChange = (e) => {
    e.preventDefault()


  }

  useEffect(() => {
    !user && navigate('/', { replace: true })
  }, [])

  const handleEdit = () => {
    setEdit(!edit)
  }

  return (
    <div>
      {
     user
       ? (

         <div className='w-full  flex justify-center text-black mb-10 '>
           <div className='w-5/6 flex flex-col justify-center '>
             <div className='flex  w-full h-52 place-content-center place-items-center '>
               <DivImg>
                 <img src={user.avatarURL} alt='perfil-img' />
               </DivImg>
               <div>

               <h2>{names} {lastName}</h2>
             <Btn className='mt-5' onClick={handleLogout}>Log Out</Btn>
               </div>
             </div>
             <hr className='mb-5' />
           

           
                  <div className='justify-center w-full '>
                
               <Form onSubmit={handleSubmit} className='flex flex-col w-full '>
                 <input onChange={handleChange} type='text' placeholder={names} />
                 <input onChange={handleChange} type='text' placeholder={lastName} />
                 <input onChange={handleChange} type='text' placeholder={email} />
                 <input onChange={handleChange} type='text' placeholder= {`DNI: ${dni}`} />
                 <input onChange={handleChange} type='text' placeholder='Pais' />
                 <input onChange={handleChange} type='text' placeholder='Ciudad' />
                 <Btn type='submit' className='mt-20'>Guardar cambios</Btn>
               </Form>
               
               </div>
             
              
                  
                  
             


           
          
             
           </div>
         </div>
         )
       : (<Navigate to='/' replace />)
    }
    
   
   
    </div>

  )
}

export default Profile
