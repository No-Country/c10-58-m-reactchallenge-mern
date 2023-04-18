/* eslint-disable */
import styled from 'styled-components';

export const Btn = styled.button`
	display: block;
	margin-inline: ${props => (props.$margin ? 'auto' : 'unset')};
	border: 'none';
	border-radius: 20px;
	padding: 0.4rem 1.5rem;
	font-weight: 600;
	color: ${props => (props.$dark ? '#fff' : '#146151')};
	background-color: ${props => (props.$dark ? '#146151' : '#b4cf66')};
	font-size: 0.8rem;
	
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
