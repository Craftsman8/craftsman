import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/create';
import NotFound from './components/NotFound';
import About from './components/About-us';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/components/:id" element={<BlogDetails />} />
        <Route path="/edit/:id" element={<Create />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
