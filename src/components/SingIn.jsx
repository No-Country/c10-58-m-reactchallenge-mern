import React from "react";
import styled from "styled-components";
//styles
const H1 = styled.h1`
  color: #000;
  font-size: 40px;
  font-weight: 700;
  margin: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #fff;
  height: 500px;
  width: 350px;
  border-radius: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  color: #000;

  padding: 2px;

  label {
    padding-top: 15px;
    margin: 0px;
  }
  input {
    margin: 10px;
    width: 100%;
    height: 40px;
    
    

    border: 1px solid #000;
    padding: 5px;
  }
  button {
    margin: 10px;
    width: 100%;
    height: 40px;

    border: 1px solid #000;
    padding: 5px;
    background-color: #000;
    color: #fff;
  }
`;
const ButtonRed = styled.button`
  background-color: #fff;
  color: #000000;
  width: 100px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
const P = styled.p`
  margin: 10px;
  color: #000;
  font-size: 20px;
`;

const SingIn = () => {
  return (
    <Container className="sing--in flex-col">
      <H1 className="text-4xl">Sing In</H1>
      <div>
        <ButtonRed className="bg-blue-500"> G</ButtonRed>
        <ButtonRed className="bg-blue-500">F</ButtonRed>
      </div>

      <Form className="flex">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Sing In</button>
      </Form>



      <div className="">
        <P className="text-2xl">Don't have an account?</P>
      </div>
    </Container>
  );
};

export default SingIn;
