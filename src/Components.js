import { useState } from "react";

const Components = () => {
    const [components, setComponents] = useState(
        [
            {id: 1, author: "Dr. Oluwaseun", title: "Graphics Design", body: "lorem ipsum..."},
            {id: 2, author: "Mr. Emmanuel", title: "Wallpanels", body: "lorem ipsum..."},
            {id: 3, author: "Miss Bisola", title: "Web Design", body: "lorem ipsum..."},
            {id: 4, author: "Engr. Tola", title: "Painting", body: "lorem ipsum..."},
        ]
    )
    return ( 
        <div className="component">
            <h2>Top Professionals</h2>
            {components.map((component, index)=>(
                <center>
                <div className="component-slide" key={component.id}>
                    <h2>{component.title}</h2>
                    <p>By: {component.author}</p>
                </div></center>
            ))}
        </div>
     );
}
 
export default Components;