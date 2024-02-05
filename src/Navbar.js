const Navbar = () => {
    return (

      <div className="Navbar"> 
        <nav className="navbar">
        <h2 style={{
          color: "navy",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "0%",
        }}>Navbar Components</h2>
      
            <div className="links">
                <a href="/home">HOME</a> <br></br>
                <a href="https://google.com">NEW BLOG</a>
                
            </div>
        </nav>
      </div>
     );
}
 
export default Navbar;
