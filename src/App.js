import BlogDetails from './BlogDetails.js';
import Components from './Components.js';
import Features from './Features.js';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import Toggle from './Toggle.js';

function App() {
  return (
    <div className="App">

      <div className="content">
        <h1 style={{
          color: "navy",
          fontWeight: "bolder",
          fontFamily: "arial",
          textAlign: "center",
          marginTop: "1%",
          textShadow: "0px 2px 2px black",
        }}>My App Component</h1>
        </div>
      <Home/>
      <Navbar />
      <BlogDetails />
      <Sidebar/>
      <Toggle />
      <Features/>
      <Components />
    </div>
  );
}

export default App;
