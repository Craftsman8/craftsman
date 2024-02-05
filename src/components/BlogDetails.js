import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../Hooks/Use-fetch";
import axios from "axios";

const BlogDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { components: component, error, loading } = useFetch(`http://localhost:8000/courses/${id}`);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/courses/${id}`)
        .then((response)=> {
            navigate('/')
        })
        .catch((error)=> (
            console.log(error)
        ))
        
    }

    return ( 
        <div className="blog-details">
            {!loading && <h2>This is blog details component - { id }</h2>}

            { loading && <div className="loading">Your item is been fetched...</div> }
            { error && <div className="error">{error}</div> }

            { component && (
            <article>
                <p style={{ margin: "3% 0% 0% 46%" }}>Course Title:</p>
                <h2>{component.title}</h2>
                <p style={{ margin: "0% 0% 0% 45%" }}>Author: {component.author}</p>
                <p style={{
                    fontSize: "2em",
                    marginBottom: "1%",
                    marginLeft: "41%",
                }}>Course Overview:</p>
                <div className="article-body">{component.body} </div>
                <Link to={`/edit/${component.id}`} style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1.2em",
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px 30px",
                    border: "3px solid greenyellow",
                    borderRadius: "10px",
                    marginLeft: "37%",
                    boxShadow: "1px 1px 3px 1px grey",
                    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                }}>Edit Course</Link>
                <button type="button" onClick={()=>handleDelete(component.id)}>Delete Course</button>
            </article>
            )}
            
            
            
        </div>
     );
}
 
export default BlogDetails;