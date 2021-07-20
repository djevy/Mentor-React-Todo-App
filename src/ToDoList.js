import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({toDoList, handleToggle}) => {

    return ( 
        <div className="list">
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                )
            })}
            <div id="listFooter">
                <p id="numLeft">Add dynamic number items left</p>
        
                <div id="itemState">
                <p id="showAll">All</p>
                <p id="showActive">Active </p>
                <p id="showCompleted">Completed</p>
                </div>
        
                <p id="clear">Clear Completed</p>
            </div>
        </div>

     );
}
 
export default ToDoList;