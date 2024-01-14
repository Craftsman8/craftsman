import { useState } from "react";

const Toggle = () => {
    const [ buttonText, setButtonText ] = useState("click me!")

    function handleButtonClick() {
        console.log("The user has clicked me")
        setButtonText("Thank you for clicking me")
    }
    return ( 
        <div className="Button">
            <center>
            <button onClick={handleButtonClick} className={buttonText === "Click me!" ? "" : "clicked"}>{buttonText}</button>
            </center>
        </div>
     );
}
 
export default Toggle;