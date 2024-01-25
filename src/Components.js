import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";

const Components = () => {
    const [components, setComponents] = useState(null);

    const [course, setCourse] = useState("> Frontend <");

    useEffect(() => {
        fetch("http://localhost:8000/courses")
        .then((response)=>{
            return response.json()
        })
        .then((componentArray)=>{
            console.log(componentArray)
            setComponents(componentArray)
        })
    }, []); //dependency array

    const handleDelete = (id) => {
        console.log('The id of the clicked component is', id)
        const filteredComponents = components.filter((component, index) => component.id !== id )
        setComponents(filteredComponents)
    }
    
    return ( 
        <div className="Components">
            <h2>My Courses</h2>
        {components && <DeleteButton components={components} handleDelete={handleDelete}/>}
        <button onClick={()=>setCourse("> Backend <")}>change course</button>
        
        <h2>{course}</h2>
        </div>
     );
}
 
export default Components;