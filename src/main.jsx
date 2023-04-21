/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import FirebaseProvider from './context/UserContext';
import { router } from './router/router';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<FirebaseProvider>
			<RouterProvider router={router} />
		</FirebaseProvider>
	</React.StrictMode>
);
