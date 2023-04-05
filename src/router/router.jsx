/* eslint-disable */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../components/Register';
import SignIn from '../components/SignIn';
import App from '../App';
import List from '../pages/List';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: '/list',
				element: <List />
			},
			{
				path: '/list/:id',
				element: <h1>Perfil Médico</h1>
			},
			{
				path: '/list/:id/calendar',
				element: <h1>Calendario</h1>
			},
			{
				path: '/login',
				element: <SignIn />
			},
			{
				path: '/register',
				element: <Register />
			},
			{
				path: '/profile',
				element: <Profile />
			}
		]
	}
]);
