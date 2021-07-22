import { useState } from "react";


const InputField = ({addTask}) => {

    const [inputBox, setInputBox] = useState("");

    const handleChange = (e) => {
        setInputBox(e.target.value);
    }

    const handleEnter = (e) => {
        if(e.key === "Enter") {
            addTask(inputBox);
            setInputBox("");
        }
    }
    return ( 
        <div id="inputField">
            <div className="circle" id="headerCircle"></div>
            <input id="toDoInput" type="text" placeholder="Create a new todo..."
            value={inputBox} onChange={handleChange} onKeyDown={handleEnter}
            />
        </div>
     );
}
 
export default InputField;