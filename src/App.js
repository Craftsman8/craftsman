import Components from './Components.js';
import Navbar from './components/Navbar.js';
import Toggle from './Toggle.js';
import { Routes, Route } from 'react-router';
import Home from './components/Home.js';
import Create from './components/create.js';
import NotFound from './components/NotFound.js';


function App() {
  return (
    <div className="App">
      <Home/>
     <Navbar />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<NotFound />} />

     </Routes>

      <Toggle />
      <Components />
    </div>
  );
}

export default App;
