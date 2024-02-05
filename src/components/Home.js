// import { FaPaintBrush } from "react-icons/fa";
// <FaPaintBrush />


import Components from "./Components";
import useFetch from "../Hooks/Use-fetch";
import { useParams } from "react-router";

const Home = () => {

    const { id } = useParams();

    const { loading } = useFetch(`http://localhost:8000/courses/${id}`);
    return ( 
        <div className="home">
        
        {loading && <div className="loading">Fetching from server...<br></br>This might take some seconds</div> }

        {!loading && (
            <div className="homepage">
            <h2> This is the home page </h2> 
            <center> <Components /></center>
            </div> 
        )}
        </div>
        
     );
}
 
export default Home;