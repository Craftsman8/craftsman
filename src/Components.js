import { useState } from "react";
import useFetch from "./Hooks/Use-fetch";

const Components = () => {
    
    const [course, setCourse] = useState("> Frontend <");

    const {components, loading, error} = useFetch('http://localhost:8000/courses');
    
    return ( 
        <div className="Components">
            <h2>My Courses</h2>
            {loading && <div className="loading">Fetching from server...<br></br>This might take some seconds</div> }
            
            {error && <div className="error">{error}</div>}

        {/* {components && <DeleteButton components={components} handleDelete={handleDelete}/>} */}
        <button onClick={()=>setCourse("> Backend <")}>change course</button> 
        
        <h2>{course}</h2>
        </div>
     );
}
 
export default Components;