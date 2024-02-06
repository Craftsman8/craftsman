// import { FaPaintBrush } from "react-icons/fa";
// <FaPaintBrush />


import Components from "./Components";
import useFetch from "../Hooks/Use-fetch";

const Home = () => {

    const { loading } = useFetch('http://localhost:8000/courses');
    return ( 
        <div className="home">
        
        {loading && <div className="loading">Fetching from server...<br></br>This might take some seconds</div> }

        {!loading && (
            <div className="homepage">
                <h1>Welcome!</h1>
            <h2> This is the home page </h2> 
            <center> <Components /></center>
            </div> 
        )}
        </div>
        
     );
}
 
export default Home;