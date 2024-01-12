import BlogDetails from './BlogDetails.js';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="App">

      <div className="content">
        <h1 style={{
          color: "red",
          fontWeight: "bolder",
          fontFamily: "arial",
          textAlign: "center",
          marginTop: "2%",
          textShadow: "0px 2px 2px grey",
        }}>My App Component</h1>
      <Home/>
      <Navbar />
      </div>
      <BlogDetails />
      <Sidebar/>
    </div>
  );
}

export default App;
