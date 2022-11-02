
import './style/App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import FicheLogement from './pages/FicheLogement/FicheLogement';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
		<div className="App">
				<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<FicheLogement />} />
        <Route path="*" element={<ErrorPage />} />
				</Routes>

		</div>
	);
}

export default App;

