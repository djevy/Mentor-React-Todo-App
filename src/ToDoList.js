import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({toDoList, handleToggle, handleFilter, allFilter, activeFilter, completedFilter}) => {

    return ( 
        <div>
            <div id="list">
                {toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    )
                })}
                <div id="listFooter">
                    <p id="numLeft">num items left</p>
                    <p id="clearCompleted" onClick={handleFilter}>Clear Completed</p>
                </div>
            </div>

            <div id="itemState">
                <p className="selectedState" id="showAll" onClick={allFilter}>All</p>
                <p id="showActive" onClick={activeFilter}>Active </p>
                <p id="showCompleted" onClick={completedFilter}>Completed</p>
            </div>
        </div>
        

     );
}
 
export default ToDoList;