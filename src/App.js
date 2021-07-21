import React, { useState } from 'react';
import './App.css';
import data from './data.json';

import Header from './Header';
import InputField from './InputField';
import ToDoList from './ToDoList';

function App() {

  const [ toDoList, setToDoList ] = useState(data);

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
        <Header/>
        <InputField />
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}
        allFilter={allFilter} activeFilter={activeFilter} completedFilter={completedFilter}/>
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
