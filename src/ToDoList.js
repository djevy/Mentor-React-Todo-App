import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {

    return ( 
        <div>
            <div id="list">
                {toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle}/>
                    )
                })}
                <div id="listFooter">
                    <p id="numLeft">num items left</p>
                    <p id="clearCompleted" onClick={handleFilter}>Clear Completed</p>
                </div>
            </div>

            <div id="itemState">
                <p className="selectedState" id="showAll">All</p>
                <p id="showActive">Active </p>
                <p id="showCompleted">Completed</p>
            </div>
        </div>
        

     );
}
 
export default ToDoList;