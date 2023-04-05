import React from "react";
import styled from "styled-components";
import { Botonpildora } from "./MicroComponents/BotonesPildoras";

const img = "https://picsum.photos/seed/picsum/200/300";

//styled components
const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10%;
  margin: 10px;
`;
const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;

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

const Card = ({ medico }) => {
  const { nombre,profilePhoto
,    apellido, departamento, telefono, direccion } = medico;
  return (
    <CardContainer className="w-80 bg-red-200">
      <div className="dates flex flex-col">
        <div className="flex ">
          <Img src={profilePhoto} alt="images--Dr." />
          <div className="date pt-5">
            <h3>
              {nombre} <span>{apellido}</span>{" "}
            </h3>
            <p>{departamento}</p>
            <span>{telefono}</span>
          </div>
        </div>
        <div className="descripcion pl-3">
          <p>{direccion}</p>
        </div>
        <div className="buttons gap-5 mb-3 pr-5 pt-3 flex justify-end">
          <Botonpildora $primary>Ver perfil</Botonpildora>
          <Botonpildora>Agendar cita</Botonpildora>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
