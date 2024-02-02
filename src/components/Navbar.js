import { Link } from "react-router-dom";
import useFetch from "../Hooks/Use-fetch";

const Navbar = () => {

  const {components, loading, error } = useFetch('http://localhost:8000/courses');
  
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
