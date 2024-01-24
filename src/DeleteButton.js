const DeleteButton = ({components, handleDelete}) => {
    return ( 
        <>
        <h2>Top Professionals</h2>
        {components.map((component, index)=>(
            <div className="component-slide" key={component.id}>
                <h2>{component.title}</h2>
                <p>By: {component.author}</p>
                <button onClick={() => {handleDelete(component.id)}}>Delete</button>
            </div>
        ))}
        </>
     );
}
 
export default DeleteButton;