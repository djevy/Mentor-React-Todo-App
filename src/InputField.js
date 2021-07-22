import { useState } from "react";


const InputField = ({addTask}) => {

    const [inputBox, setInputBox] = useState("");

    const handleChange = (e) => {
        setInputBox(e.target.value);
    }

    const handleEnter = (e) => {
        if(e.key === "Enter") {
            addTask(inputBox);
        }
    }
    return ( 
        <div id="inputField">
            <input id="toDoInput" type="text" placeholder="Create a new todo..."
            value={inputBox} onChange={handleChange} onKeyDown={handleEnter}
            />
            <p>{inputBox}</p>
        </div>
     );
}
 
export default InputField;