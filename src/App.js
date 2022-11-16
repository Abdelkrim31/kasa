import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import PageLogement from './pages/PageLogement/PageLogement';
import About from './pages/About/About';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<PageLogement />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/PageLogement/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

