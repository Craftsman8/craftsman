const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h4 style={{
          color: "green",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "0%",
        }}>my blog page</h4>
            <div className="links">
                <a href="/home">HOME</a> <br></br>
                <a href="/create">NEW BLOG</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
