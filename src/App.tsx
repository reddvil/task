import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import NotFound from './pages/NotFoundPage/NotFound';
import RootPage from './pages/RootPage';

function App() {
	return (
		<div className="App">
			<div className="app-container">
				<Routes>
					<Route path="/" element={ <RootPage/> }/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
