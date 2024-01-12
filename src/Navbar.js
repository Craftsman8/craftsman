const Navbar = () => {
    return (
      <div className="Navbar"> 
        <nav className="navbar">
        <h2 style={{
          color: "navy",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "0%",
          textShadow: "0px 2px 2px grey",
        }}>Navbar Components</h2>
            <div className="links">
                <a href="/home">HOME</a> <br></br>
                <a href="/create">NEW BLOG</a>
            </div>
        </nav>
      </div>
     );
}
 
export default Navbar;
