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

    const services = [ 'Artworks', 'Screeding', 'Stickers', 'Frames', 'Flex-Banners', 'Awards', 'Stamp']

    const otherServices = () => {

        services.push('Wallpaper')

        services.forEach((service, index) => {

            let output = `The name of service ${index + 1} is ${service}`
            console.log(output)

        })
        
        services.pop()
        console.log(services)
        console.log(services.slice(-6))
        services.splice(5, 0, 'Pencil-Works')
        console.log(services)

    }
    
    otherServices()

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