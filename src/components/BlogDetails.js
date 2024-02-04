import { useParams } from "react-router-dom";
import useFetch from "../Hooks/Use-fetch";


const BlogDetails = () => {

    const { id } = useParams();

    const { components: component, error, loading } = useFetch(`http://localhost:8000/courses/${id}`);

    return ( 
        <div className="blog-details">
        <h2>This is blog details component - { id }</h2>
        { loading && <div className="loading">Your item is been fetched...</div> }
        { error && <div className="error">{error}</div> }

        { component && (
        <article>
            <p style={{
                marginBottom: "-15px",
            }}>Course Title</p>
            <h2>{component.title}</h2>
            <p>written by: {component.author}</p>
            <p style={{
                fontSize: "2em",
                marginBottom: "-.5px",

            }}>Course Overview:</p>
            <div className="article-body">{component.body} </div>
        </article>
        )}
        </div>
     );
}
 
export default BlogDetails;