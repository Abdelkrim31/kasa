import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import PageLogement from './pages/PageLogement/PageLogement';
import About from './pages/About/About';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<PageLogement />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/PageLogement/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;

