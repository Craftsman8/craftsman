const DeleteButton = ({components, handleDelete}) => {
    
    return ( 
        <div className="component">
        <center>
        <h2>Top Professionals</h2>
        {components.map((component, index)=>(
            <div className="component-slide" key={component.id}>
                <h2>{component.title}</h2>
                <p>By: {component.author}</p>
                <button onClick={() => {handleDelete(component.id)}}>Delete</button>
            </div>
        ))}
        </center>
    </div>
     );
}
 
export default DeleteButton;