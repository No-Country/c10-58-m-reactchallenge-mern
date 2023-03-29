/* eslint-disable */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Appointment from '../components/Appointment';
import Register from '../components/Register';
import SignIn from '../components/SignIn';
import { TestingValentin } from '../firebase/testValentin';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/valentin',
				element: <TestingValentin />
			},
			{
				path: '/esteban',
				element: <Register />
			},
			// {
			// 	path: '/matias',
			// 	element: ''
			// },
			{
				path: '/snow',
				element: <SignIn />
			},
			{
				path: '/appointment',
				element: <Appointment />
			}
		]
	}
]);
