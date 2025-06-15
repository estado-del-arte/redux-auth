import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Agency from './pages/Agency';
import VideoServices from './pages/VideoServices';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Página Principal - Starters Catalog */}
        <Route path="/" element={<Home />} />
        
        {/* CodeCraft Agency - Desarrollo Web */}
        <Route path="/agency" element={<Agency />} />
        
        {/* VideoCraft Services - Edición de Video */}
        <Route path="/video-services" element={<VideoServices />} />
        
        {/* Ruta 404 - Redireccionar al home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}