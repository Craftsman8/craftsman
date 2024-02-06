import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Create = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8000/courses/${id}`)
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                setTitle(data.title)
                setAuthor(data.author)
                setBody(data.body)
            })
        }
    }, [id])


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        
        setTimeout(()=>{

        const newCourse = { title, author, body }

        const postUrl = 'http://localhost:8000/courses'
        const putUrl = `http://localhost:8000/courses/${id}`

        const resolvedUrl = id ? putUrl : postUrl

        fetch(resolvedUrl, {
            method: id ? 'PUT' : 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCourse)
        })
        .then((response)=>{
            response.json()
            setLoading(false)
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
        }, 3000)
    }

    return ( 
        <div className="create">
            <h2 style={{textAlign: "center"}}>
        {id ? `Edit course number ${id}` :  'Add a new course'}
        </h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Course Title:<br></br>
                    <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Course Author:<br></br>
                    <select 
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    >
                        <option value="Dr. Femi">Dr. Femi</option>
                        <option value="Dr. Fele">Dr. Fele</option>
                        <option value="Engr. David">Engr. David</option>
                        <option value="Mr. Oni">Mr. Oni</option>
                        <option value="Dr. Innocent">Dr. Innocent</option>
                        <option value="Dr. Olawale">Dr. Olawale</option>
                        <option value="Dr. Adebayo">Dr. Adebayo</option>
                        <option value="Mr. Kazeem">Mr. Kazeem</option>
                        <option value="Mr. Lamotu">Mr. Lamotu</option>
                        <option value="Dr. Victor">Dr. Victor</option>
                        <option value="Mr. Oluwatobi">Mr. Oluwatobi</option>
                        <option value="Mr. Oluwaseun">Mr. Oluwaseun</option>
                        <option value="Mr. Ayooluwa">Mr. Ayooluwa</option>
                        <option value="Mr. Emmanuel">Mr. Emmanuel</option>
                    </select>
                </label>
                <br></br>
                <label>
                    Course Body:<br></br>
                    <textarea
                    value={body}
                    rows={7}
                    onChange={(e)=>setBody(e.target.value)}
                    >
                        
                    </textarea>
                </label>
                {!loading && <button type="submit">
                {id ? 'Update course' : 'Submit course'}    
                </button>}

                {loading && <button type="submit" disabled>Processing...</button>}
            </form>
            
        </div>
     );
}
 
export default Create;