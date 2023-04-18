import styled from "styled-components";

export const Botonpildora = styled.button`
  width: 40%;
  height: 2.5rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  background: ${props => props.$primary ? "#b4cf66" : " #146151"};
  color: ${props => props.$primary ? "#146151" : "white"};
  font-weight: 600;
  &:focus {
    outline: none;
    border-color: #000;
  }
  &:hover {
    background: ${props => props.$primary ? "#c1c8d2" : "#6d7177"};
  }
`;
