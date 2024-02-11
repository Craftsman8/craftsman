import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About-us';
import BlogDetails from './components/BlogDetails';
import Create from './components/create';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Help from './components/Help';
import Services from './components/Services';
import Settings from './components/Settings';
import Options from './components/Options';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/options" element={<Options />} />
        <Route path="/components/:id" element={<BlogDetails />} />
        <Route path="/edit/:id" element={<Create />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
