import {
  Route,
  Routes
} from "react-router-dom";
import FooterSection from "./components/FooterSection";

import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App bg-gray-800 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;
