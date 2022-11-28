import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';


const App = (props: AppProps) => {
	return(
		<BrowserRouter>
			<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
		</BrowserRouter>
	)
};

interface AppProps {}

export default App;