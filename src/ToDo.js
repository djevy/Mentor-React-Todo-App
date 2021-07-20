import React from 'react';

 
const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

   return (
       <div onClick={handleClick} id={todo.id} key={todo.id.toString()} name={todo.id} value={todo.id} className={todo.complete ? "completed" : ""}>
           <div className="item">{todo.task}</div>
       </div>
   );
};
 
export default ToDo;