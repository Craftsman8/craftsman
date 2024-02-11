import { Link } from 'react-router-dom';
// import { GiPencilBrush } from 'react-icons/gi';

const Navbar = () => (

  <div className="Navbar">
    <div className="heading">
      <Link to="/">
        <img
          src="logo.png"
          alt="CAG logo"
          style={{
            width: '20em',
          }}
        />
      </Link>
      {/* <h1> <GiPencilBrush className="brush"/> CRAFTSMAN </h1>
          <h5> Arts & Graphics </h5> */}
    </div>
    {/* <div className="vl" /> */}
    <div className="search">
      <center><input type="text" placeholder="search" /></center>
    </div>
    <div className="wrapper">
      <Link to="/" style={{ textDecoration: 'none' }}><div className="home">Home</div></Link>
      <Link to="/services" style={{ textDecoration: 'none' }}><div className="services">Services</div></Link>
      <Link to="/courses" style={{ textDecoration: 'none' }}><div className="courses">Courses</div></Link>
      <Link to="/create" style={{ textDecoration: 'none' }}><div className="create">Create</div></Link>
      <Link to="/about-us" style={{ textDecoration: 'none' }}><div className="about">About us</div></Link>
      <Link to="/contact-us" style={{ textDecoration: 'none' }}><div className="contact">Contact</div></Link>
      <Link to="/settings" style={{ textDecoration: 'none' }}><div className="settings">Settings</div></Link>
      <Link to="/help" style={{ textDecoration: 'none' }}><div className="help">Help</div></Link>
    </div>
  </div>
);

export default Navbar;
