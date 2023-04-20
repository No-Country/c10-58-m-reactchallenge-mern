import React from "react";
import styled from "styled-components";
import { Botonpildora } from "./MicroComponents/BotonesPildoras";
import { useNavigate } from "react-router-dom";
import { useFirebaseContext } from "../context/UserContext";

// styled components
const Img = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10%;
  margin: 5px;
`;
const CardContainer = styled.div`
  width: 450px;
padding: 5px;
  background-color: #fff;
  border-radius: 10px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }
`;
const P = styled.p`
  font-size: 15px;
  margin-bottom: 10px;

  overflow: hidden;
`;
const Span = styled.span`
  color: #146151;
  font-size: 16px;
  font-weight: 400;
`;
const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  
 color: #146151;
`;

const Card = ({ medico }) => {
  const {
    nombre,
    profilePhoto,
    apellido,
    especialidades,
   
    id,
 
    titulo
  } = medico;
  const { user } = useFirebaseContext();
  console.log(medico);
  const navigate = useNavigate();
  const handleClickAgendar = () => {
    if (user) {
      navigate(`/list/${id}/calendar`);
    } else {
      navigate("/login");
    }
  };


  const handleClickProfile = () => {
    if (user) {
      navigate(`/list/${id}/`);
    } else {
      navigate("/login");
    }
  };
  //agregar , a las especialidades
  const especialidadesString = especialidades.join(", ");


  return (
    <CardContainer>
      <div className="dates flex flex-col">
        <div className="flex ">
          <Img src={profilePhoto} alt="images--Dr." />
          <div className="date pt-5 pl-1">
            <H3>
              {nombre} <span>{apellido}</span>
            </H3>
            <P>{titulo}</P>
            
          </div>
        </div>
        <div className="descripcion pl-3">
          <P>
           
            <Span>Especialista en:  </Span>
            {especialidadesString}
          </P>
        </div>
        <div className="buttons gap-5 mb-3 pr-5 pt-3 flex justify-end">
          <Botonpildora $primary onClick={handleClickProfile}>
            Ver perfil
          </Botonpildora>
          <Botonpildora onClick={handleClickAgendar}>Agendar cita</Botonpildora>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
