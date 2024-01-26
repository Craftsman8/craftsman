import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";

const Components = () => {
    const [components, setComponents] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [course, setCourse] = useState("> Frontend <");

    useEffect(() => {
        setTimeout(()=>{
            fetch("http://localhost:8000/coursess")
            .then((response)=>{
                if (!response.ok){
                    throw Error("Ooooooooopss! ...unable to connect to the server. >>>Check your internet connection and try again!")
                }
                return response.json()
            })
            .then((item)=>{
                console.log(item)
                setComponents(item)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error.message)
                setError(error.message)
                setLoading(false)
            })
        }, 5000)
    }, []); //empty dependency array - allows the app to run only once

    const handleDelete = (id) => {
        console.log('The id of the clicked component is', id)
        const filteredComponents = components.filter((component, index) => component.id !== id )
        setComponents(filteredComponents)
    }
    
    return ( 
        <div className="Components">
            <h2>My Courses</h2>
            {loading && <div className="loading">Fetching from server...<br></br>This might take some seconds</div> }
            
            {error && <div className="error">{error}</div>}

        {components && <DeleteButton components={components} handleDelete={handleDelete}/>}
        <button onClick={()=>setCourse("> Backend <")}>change course</button>
        
        <h2>{course}</h2>
        </div>
     );
}
 
export default Components;