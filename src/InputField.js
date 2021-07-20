import { useState } from "react";


const InputField = () => {

    const [inputBox, setInputBox] = useState("");
    const listItems = [];

    const handleEnter = (e) => {
        if(e.key === "Enter") {
            listItems.push({inputBox})
        }
    }
    return ( 
        <div className="inputField">
            <input id="toDoInput" type="text" placeholder="Create a new todo..."
            value={inputBox} onChange={(e) => setInputBox(e.target.value)}
            onKeyDown={handleEnter}
            />
            <p>{inputBox}</p>
        </div>
     );
}
 
export default InputField;