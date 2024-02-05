import Navbar from './components/Navbar.js';
import { Routes, Route } from 'react-router';
import Home from './components/Home.js';
import Create from './components/create.js';
import NotFound from './components/NotFound.js';
import About from './components/About-us.js';
import BlogDetails from './components/BlogDetails.js';


function App() {
  return (
    <div className="App">
     <Navbar />

     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/about' element={<About />} />
      <Route path='/components/:id' element={<BlogDetails />} />
      <Route path='*' element={<NotFound />} />

     </Routes>
    </div>
  );
}

export default App;
