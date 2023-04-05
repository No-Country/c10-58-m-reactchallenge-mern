/* eslint-disable */
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
	return (
		<>
			<Outlet />
			<Header />
		</>
	);
}

export default App;
