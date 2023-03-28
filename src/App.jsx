/* eslint-disable */
import { Outlet } from 'react-router-dom';
import { TestingValentin } from './firebase/testValentin';

function App() {
	return (
		<div className='App'>
			<h1>APP</h1>
			<Outlet />
		</div>
	);
}

export default App;
