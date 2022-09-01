import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFoundPage/NotFound';
import RootPage from './pages/RootPage';
import { ProductDetails } from 'components';

function App() {
	return (
		<div className="App">
			<div className="app-container">
				<Routes>
					<Route path="/" element={ <RootPage/> }>
						<Route path="/product/:slug" element={ <ProductDetails/> }/>
					</Route>
					<Route path="/notfound" element={ <NotFound/> }/>
					<Route path="*" element={ <NotFound/> }/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
