import React, { useEffect, useState } from 'react';

 
const ToDo = ({todo, handleToggle, handleFilter}) => {

    const [completed, setCompleted] = useState("task");
    const [circle, setCircle] = useState("circle");
    const [tick, setTick] = useState("tick");
    const [done, setDone] = useState("item notDone");
    
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)

    }
    const handleCross = (e) => {
        
        e.preventDefault()
        handleToggle(e.currentTarget.id)
        handleFilter()

    }
    
    
    useEffect(()=> {
        if(todo.complete) {
            setCompleted("task completed");
            setCircle("circle selected");
            setTick("ticked");
            setDone("item done");
        }
        else {
            setCompleted("task");
            setCircle("circle");
            setTick("tick");
            setDone("item notDone");
        }
        const filteredNotDone = document.getElementsByClassName("item notDone");
        document.getElementById("num").innerText = filteredNotDone.length;
    },[handleClick]);

   return (
       
           <div className={done} >
                <div className={circle} onClick={handleClick} id={todo.id}><img className={tick} src="images/icon-check.svg" alt="" /></div>
                <div  className={completed} onClick={handleClick} id={todo.id} key={todo.id.toString()} name={todo.id} value={todo.id}>{todo.task} </div>
                <div className="cross" id={todo.id} onClick={handleCross}><img src="images/icon-cross.svg" alt="Cross icon"/></div>
           </div>
       
   );
};
 
export default ToDo;