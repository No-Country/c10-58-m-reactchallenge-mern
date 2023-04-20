/* eslint-disable */
import styled from 'styled-components';
import { COLORS } from './Colors';

export const Btn = styled.button`
	display: block;
	margin-inline: ${props => (props.$margin ? 'auto' : 'unset')};
	border: 'none';
	border-radius: 20px;
	padding: 0.4rem 1.5rem;
	font-weight: 600;
	color: ${props => (props.$dark ? COLORS.teal : COLORS.strongGreen)};
	background-color: ${props => (props.$dark ? COLORS.strongGreen : COLORS.lightGreen)};
	font-size: ${props => (props.$textSm ? '0.8rem' : '1rem')};
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
