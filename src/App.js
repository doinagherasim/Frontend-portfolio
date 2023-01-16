import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/homepage";
import AllProjects from "./components/Projects/projects";
import Calculator from "./components/Projects/React/Calculator/Calculator";
import ResponsiveLayout from "./components/Projects/HTML & CSS/responsiveLayout/responsivelayout";
import ToDoList from "./components/Projects/React/toDoList/ToDoList";
import PasswordGenerator from "./components/Projects/React/passwordGenerator/passwordGenerator";

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' exact element={<HomePage />} />
        <Route path='/allprojects' exact element={<AllProjects />} />
        <Route path='/todolist' exact element={<ToDoList />} />
        <Route path='/password' exact element={<PasswordGenerator />} /> 
        <Route path='/calculator' exact element={<Calculator />} />
        <Route path='/responsivelayout' exact element={< ResponsiveLayout />} />
      </Routes >
    </div >
  );
}

export default App;
