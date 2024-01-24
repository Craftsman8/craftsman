import { useState } from "react";
import DeleteButton from "./DeleteButton";

const Components = () => {
    const [components, setComponents] = useState(
        {
            id: 1,
            author: "Dr. OLuwaseun",
            title: "Graphics Design",
            body: "lorem ipsum...",
        },
        {
            id: 2,
            author: "Mr Emmanuel",
            title: "Wallpanels",
            body: "lorem ipsum...",
        },
        {
            id: 3,
            author: "Miss Bisola",
            title: "Web Design",
            body: "lorem ipsum...",
        },
        {
            id: 4,
            author: "Engr. Tola",
            title: "Painting",
            body: "lorem ipsum...",
        },
    );

    const handleDelete = (id) => {
        const filteredComponents = Components.filter((component, index) => component.id !== id)
        setComponents(filteredComponents)
    }

    return(
        <DeleteButton components= {components} handleDelete={handleDelete}  />
    );
}
 
export default Components;