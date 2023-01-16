import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Calculator from "./components/React/Calculator/Calculator";
import ResponsiveLayout from "./components/HTML & CSS/responsiveLayout/responsivelayout";
import ToDoList from "./components/React/toDoList/ToDoList";
import PasswordGenerator from "./components/React/passwordGenerator/passwordGenerator";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/todolist' exact element={<ToDoList />} />
        <Route path='/password' exact element={<PasswordGenerator />} /> 
        <Route path='/calculator' exact element={<Calculator />} />
        <Route path='/responsivelayout' exact element={< ResponsiveLayout />} />
      </Routes >
    </div >
  );
}

export default App;
