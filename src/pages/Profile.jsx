/* eslint-disable jsx-quotes */
import React from 'react'
import { Form } from '../components/MicroComponents/Form.js'
import { useFirebaseContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';


import styled from 'styled-components'
// styles
const Label = styled.label`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin: 10px;
  padding-left: 10px;

`
const ButonLogout = styled.button`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin: 10px;
  padding-left: 10px;
  border: 1px solid #000;

`


const Profile = () => {
  const {logout  } = useFirebaseContext();
  const navigate = useNavigate();


const handleLogout = () => {
    logout();
    navigate('/login');

 
};

  return (
    <div className="w-full  flex justify-center text-black mb-10 ">
      <div className="w-5/6  ">
        <div className="flex w-full justify-between">
          <div>
            <span>avatar</span>


            <div>
              <span>nombre</span>
              <span>apellido</span>
            </div>
          </div>
          <div>
            <span>perfil completado</span>
            <span>0%</span>
            <ButonLogout onClick={handleLogout} >log out</ButonLogout>
          </div>
        </div>

        <hr />
        <div className="justify-center w-full ">
          <Form className="flex flex-col w-full ">
            <Label>Nombre</Label>
            <input type="text" />
            <Label>Apellido</Label>
            <input type="text" />
            <Label>Telefono</Label>
            <input type="text" />
            <Label>Correo</Label>
            <input type="text" />
            <Label>Contraseña</Label>
            <input type="text" />
            <Label>Confirmar contraseña</Label>
            <input type="text" />
            <button>Guardar</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Profile
