import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Project1 from "./components/HTML & CSS/project1/project1";
import Project2 from "./components/HTML & CSS/project2/project2";
import Project3 from "./components/React/project3/project3";
import ToDoList from "./components/React/toDoList/ToDoList";
import JavaScriptPractice from "./components/JAVASCRIPT/JavaScriptPractice";
import PasswordGenerator from "./components/React/passwordGenerator/passwordGenerator";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/project1' exact element={<Project1 />} />
        <Route path='/project2' exact element={<Project2 />} />
        <Route path='/project3' exact element={<Project3 />} />
        <Route path='/todolist' exact element={<ToDoList />} />
        <Route path='/javascript' exact element={<JavaScriptPractice />} />
        <Route path='/password' exact element={<PasswordGenerator />} />
      </Routes >
    </div >
  );
}

export default App;
