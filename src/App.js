import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create" element={<Create />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
