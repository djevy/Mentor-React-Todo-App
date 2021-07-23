import React, { useState } from 'react';
import { DragDropContext} from 'react-beautiful-dnd';
import './App.css';
import data from './data.json';

import Header from './Header';
import InputField from './InputField';
import ToDoList from './ToDoList';

function App() {

  function lightModeOn() {
    document.getElementById("root").classList.add("light");
    document.getElementById("inputField").classList.add("light");
    document.getElementById("headerCircle").classList.add("light");
    document.getElementById("list").classList.add("light");
    document.getElementById("itemState").classList.add("light");
    document.getElementById("toDoInput").classList.add("light");
    
    let item = document.getElementsByClassName("item");
    for(var i = 0; i < item.length; i++) {
      item[i].classList.add("light");
    }
    let completed = document.getElementsByClassName("completed");
    for(var j = 0; j < completed.length; j++) {
      completed[j].classList.add("light");
    }

    document.getElementById("showAll").classList.add("light");
    document.getElementById("showActive").classList.add("light");
    document.getElementById("showCompleted").classList.add("light");
    document.getElementById("numLeft").classList.add("light");
    document.getElementById("clearCompleted").classList.add("light");
    document.getElementById("dragAndDrop").classList.add("light");
    document.getElementById("attribution").classList.add("light");

    document.getElementById("mode").src = "images/icon-moon.svg";
    darkMode = false;
  }

  function lightModeOff() {
    document.getElementById("root").classList.remove("light");
    document.getElementById("inputField").classList.remove("light");
    document.getElementById("headerCircle").classList.remove("light");
    document.getElementById("list").classList.remove("light");
    document.getElementById("itemState").classList.remove("light");
    document.getElementById("toDoInput").classList.remove("light");
    
    let item = document.getElementsByClassName("item");
    for(var i = 0; i < item.length; i++) {
      item[i].classList.remove("light");
    }
    let completed = document.getElementsByClassName("completed");
    for(var j = 0; j < completed.length; j++) {
      completed[j].classList.remove("light");
    }

    document.getElementById("showAll").classList.remove("light");
    document.getElementById("showActive").classList.remove("light");
    document.getElementById("showCompleted").classList.remove("light");
    document.getElementById("numLeft").classList.remove("light");
    document.getElementById("clearCompleted").classList.remove("light");
    document.getElementById("dragAndDrop").classList.remove("light");
    document.getElementById("attribution").classList.remove("light");

    document.getElementById("mode").src = "images/icon-sun.svg";
    darkMode = true;
  }
  let darkMode = true;
  const themeToggle = () => {

    if(darkMode === true) {
      lightModeOn();
    } else if (darkMode === false) {
      lightModeOff();
    }
  }

  const [ toDoList, setToDoList ] = useState(data);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(toDoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setToDoList(items);
  }

  const addTask = (inputBox) => {
    let tasksCopy = [...toDoList];
    tasksCopy.push({id: toDoList.length + 1, task: inputBox, complete: false });
    setToDoList(tasksCopy);
  }

  const handleToggle = (id) => {
    let items = toDoList.map(item => {
      return item.id.toString() === id ? { ...item, complete: !item.complete } : {...item} 
    });
    setToDoList(items);
  }

  const handleFilter = () => {
    let filteredItems = toDoList.filter(item => {
      return !item.complete;
    });
    setToDoList(filteredItems);
  }

  const allFilter = () => {
    const filterDone = document.getElementsByClassName("item done");
    for (let i = 0; i < filterDone.length; i++) {
      filterDone[i].classList.remove("hide");
    }
    const filteredNotDone = document.getElementsByClassName("item notDone");
    for (let i = 0; i < filteredNotDone.length; i++) {
      filteredNotDone[i].classList.remove("hide");
    }
    document.getElementById("showAll").classList.add("selectedState");
    document.getElementById("showActive").classList.remove("selectedState");
    document.getElementById("showCompleted").classList.remove("selectedState");
  }

  const activeFilter = () => {
    const filterDone = document.getElementsByClassName("item done");
    for (let i = 0; i < filterDone.length; i++) {
      filterDone[i].classList.add("hide");
    }
    const filteredNotDone = document.getElementsByClassName("item notDone");
    for (let i = 0; i < filteredNotDone.length; i++) {
      filteredNotDone[i].classList.remove("hide");
    }
    document.getElementById("showAll").classList.remove("selectedState");
    document.getElementById("showActive").classList.add("selectedState");
    document.getElementById("showCompleted").classList.remove("selectedState");

  }
 
  const completedFilter = () => {
    const filterDone = document.getElementsByClassName("item done");
    for (let i = 0; i < filterDone.length; i++) {
      filterDone[i].classList.remove("hide");
    }
    const filteredNotDone = document.getElementsByClassName("item notDone");
    for (let i = 0; i < filteredNotDone.length; i++) {
      filteredNotDone[i].classList.add("hide");
    }
    document.getElementById("showAll").classList.remove("selectedState");
    document.getElementById("showActive").classList.remove("selectedState");
    document.getElementById("showCompleted").classList.add("selectedState");
  }

  return (
    <div className="App">

      
      <div id="content">
        <Header themeToggle={themeToggle}/>
        <InputField addTask={addTask}/>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}
          allFilter={allFilter} activeFilter={activeFilter} completedFilter={completedFilter}
          />
        </DragDropContext>

      </div>




      <div id="dragAndDrop"><p>Drag and drop to reorder list</p></div>

      <div id="attribution">
        <div>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. </div>
        <div>Coded by <a href="https://darrenrevans.co.uk" target="_blank" rel="noreferrer">Darren Evans</a>.</div>
      </div>
    </div>
  );
}

export default App;
