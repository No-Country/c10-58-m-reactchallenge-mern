/* eslint-disable */
import styled from 'styled-components';

export const Btn = styled.button`
	display: block;
	margin-inline: ${props => (props.$margin ? 'auto' : 'unset')};
	border: 'none';
	border-radius: 20px;
	padding: 0.4rem 1.5rem;
	color: ${props => (props.$dark ? '#fff' : '#878787')};
	background-color: ${props => (props.$dark ? '#878787' : '#fff')};
	font-size: 0.8rem;
	font-weight: 500;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
