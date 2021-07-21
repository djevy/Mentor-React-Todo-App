import React, { useEffect, useState } from 'react';

 
const ToDo = ({todo, handleToggle}) => {

    const [completed, setCompleted] = useState("task");
    const [circle, setCircle] = useState("circle");
    const [tick, setTick] = useState("tick");
    
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)

    }
    
    useEffect(()=> {
        if(todo.complete === true) {
            setCompleted("task completed");
            setCircle("circle selected");
            setTick("ticked");
        }
        else {
            setCompleted("task");
            setCircle("circle");
            setTick("tick");
        }
    },[handleClick])

   return (
       
           <div className="item">
                <div className={circle}><img className={tick} src="images/icon-check.svg" alt="" /></div>
                <div  className={completed} onClick={handleClick} id={todo.id} key={todo.id.toString()} name={todo.id} value={todo.id}>{todo.task} </div>
                <div className="cross"><img src="images/icon-cross.svg" alt="Cross icon"/></div>
           </div>
       
   );
};
 
export default ToDo;