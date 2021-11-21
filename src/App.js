import {
  Route,
  Routes
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App bg-gray-800 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
