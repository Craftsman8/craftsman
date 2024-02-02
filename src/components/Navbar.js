import { Link } from "react-router-dom";

const Navbar = () => {
  
    return (

      <div className="Navbar"> 
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">New Blog</Link>
                
            </div>
        </nav>
      </div>
     );
}
 
export default Navbar;
