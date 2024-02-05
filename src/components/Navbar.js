import { Link } from "react-router-dom";
import { GiPencilBrush } from "react-icons/gi";
const Navbar = () => {
  
    return (

      <div className="Navbar"> 
        <div className="heading">
          <center>
          <h1> <GiPencilBrush className="brush"/> CRAFTSMAN </h1>
          <h5> Arts & Graphics </h5>
          <div className="vl"></div>
          </center>
        </div>
          <nav className="navbar">
                <Link to="/" style={{
                  color: "green",
                  fontSize: "bold",
                  fontFamily: "Josefin Sans",
                  textDecoration: "none",
                  marginLeft: "75%",
                }}>Home</Link>
                <Link to="/Create" style={{
                  fontSize: "bold",
                  fontFamily: "Josefin Sans",
                  textDecoration: "none",
                  backgroundColor: "green",
                  color: "white",
                  marginLeft: "1.6em",
                  padding: "8px",
                  borderRadius: "10px",
                }}>New Course</Link>
          </nav>
        
      </div>
     );
}
 
export default Navbar;
