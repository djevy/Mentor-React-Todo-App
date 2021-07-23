
import { Droppable } from 'react-beautiful-dnd';
import ToDo from "./ToDo";

const ToDoList = ({tasks, toDoList, handleToggle, handleFilter, allFilter, activeFilter, completedFilter}) => {

    return ( 
        <div>
            <div id="list">
            <Droppable droppableId="tasks" type="TASK">
            {(provided) => (
                <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                /* isDraggingOver={snapshot.isDraggingOver} */
                >
                    {toDoList.map((todo, index) => {
                        return (
                            
                                <ToDo ToDo={ToDo} index={index} key={todo.id.toString()} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                            
                        )
                    })}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>


                
                <div id="listFooter">
                    <p id="numLeft"><span id="num"></span> items left</p>
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