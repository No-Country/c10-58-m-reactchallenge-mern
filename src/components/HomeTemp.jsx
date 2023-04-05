import React from 'react';
import styled from 'styled-components';
import { fetchCollection } from '../firebase/fetchCollection';
import { useState, useEffect } from 'react';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  background-image: url('ruta/de/la/imagen');
  background-size: contain;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
`;

const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 80%;
  margin-right: 10px;
`;


const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 90%;
  margin-bottom: 20px;
`;

const Card = styled.div`
  border: 1px solid black;
  display: flex;
    align-items: center;    
    justify-content: center;
  border-radius: 10px;
  height: 80px;
  width: 100px;

  
  &:hover {
   
    cursor: pointer;
    background-color: #000;
    color: #fff;
    }
    

`;

const HomeTemp = () => {
    const [medicos, setMedicos] = useState([]);
    useEffect(() => {
        fetchCollection({ collectionName: 'medicos' }).then((medicos) => {
            setMedicos(medicos);
        });
    }, []);
    console.log(medicos);
  return (
    <HomeContainer>
      <Logo />
      <SearchContainer>
        <Input type="text" placeholder="Buscar" />
        
      </SearchContainer>
      <Title>tipos de tratamiento</Title>
      <CardsContainer>
       {
                medicos.map((medico) => {
                    return <Card key={medico.id} ><h1>{medico.departamento}</h1></Card>
                }
                )
       }
        
      </CardsContainer>
      <Title>como funciona</Title>
      <CardsContainer>
        <Card >
            <h1>buscard profesional</h1>
        </Card>
        <Card >
            <h1>elije horario de tu cita</h1>
        </Card>

        <Card >
            <h1>califica el servicio</h1>
        </Card>
     
      </CardsContainer>
    </HomeContainer>
  );
};

export default HomeTemp;