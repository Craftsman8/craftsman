import { useState } from "react";

const Toggle = () => {
    const [ count, setCount ] = useState("click me!")

    function handleClick() {
        console.log("The user has clicked me")
        setCount("Thank you for clicking me")
    }
    return ( 
        <div className="Button">
            <center>
            <button onClick={handleClick} className={count === "Click me!" ? "" : "clicked"}>{count}</button>
            </center>
        </div>
     );
}
 
export default Toggle;