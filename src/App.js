import React, { useState } from 'react';
import './App.css';
import data from './data.json';

import Header from './Header';
import InputField from './InputField';
import ToDoList from './ToDoList';

function App() {

  const [ toDoList, setToDoList ] = useState(data);

  return (
    <div className="App">


      
      <Header/>
      <InputField />
      <ToDoList toDoList={toDoList}/>




      <div id="dragAndDrop"><p>Drag and drop to reorder list</p></div>

      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://darrenrevans.co.uk" target="_blank">Darren Evans</a>.
      </div>
    </div>
  );
}

export default App;
