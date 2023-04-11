import styled from 'styled-components'

export const Search = styled.input`
  display: block;
  width: ${(props) => (props.$width ? '315px' : '285px')};
  height: ${(props) => (props.$height ? '50px' : '40px')};
  border: none;
  border-radius: 10px;
  padding: 8px 12px 8px 20px;
  background-color: #ebebeb;
  font-size: 14px
  &:focus {
    outline: none;
    border: 1px thin black;
  }
  &::placeholder {
    text-color: #94a3b8;
  }
`
