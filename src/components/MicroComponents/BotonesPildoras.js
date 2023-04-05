import styled from "styled-components";

export const Botonpildora = styled.button`
  width: 40%;
  height: 2.5rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  background: ${props => props.$primary ? "#d2d9e3" : "#7e8288"};
  color: ${props => props.$primary ? "black" : "white"};
  &:focus {
    outline: none;
    border-color: #000;
  }
  &:hover {
    background: ${props => props.$primary ? "#c1c8d2" : "#6d7177"};
  }
`;
