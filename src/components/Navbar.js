import { Link } from 'react-router-dom';
// import { GiPencilBrush } from "react-icons/gi";
const Navbar = () => (

  <div className="Navbar">
    <div className="heading">
      <Link to="/">
        <img
          src="logo.png"
          alt="CAG logo"
          style={{
            width: '25em',
          }}
        />
      </Link>

      {/* <h1> <GiPencilBrush className="brush"/> CRAFTSMAN </h1>
          <h5> Arts & Graphics </h5> */}

    </div>
    <nav className="navbar">
      <Link
        to="/"
        style={{
          color: 'green',
          fontSize: 'bold',
          fontFamily: 'Josefin Sans',
          textDecoration: 'none',
          marginLeft: '75%',
        }}
      >
        Home
      </Link>
      <Link
        to="/Create"
        style={{
          fontSize: 'bold',
          fontFamily: 'Josefin Sans',
          textDecoration: 'none',
          backgroundColor: 'green',
          color: 'greenyellow',
          marginLeft: '2%',
          padding: '12px 20px',
          borderRadius: '5px',
        }}
      >
        New Course
      </Link>
    </nav>
    <div className="vl" />
  </div>
);

export default Navbar;
