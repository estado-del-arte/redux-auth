import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Agency from './pages/Agency';
import VideoServices from './pages/VideoServices';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/video-services" element={<VideoServices />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}