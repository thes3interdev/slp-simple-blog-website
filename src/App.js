import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
