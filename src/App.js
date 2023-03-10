import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/homepage";
import Calculator from "./components/Projects/React/Calculator/Calculator";
import ToDoList from "./components/Projects/React/toDoList/ToDoList";
import PasswordGenerator from "./components/Projects/React/passwordGenerator/passwordGenerator";
import Certificates from "./components/Certificates/Certificates";
import Header from "./components/Header/header";
import SmallProjects from "./components/Projects/Presentation/smallProjects";
import MediumProjects from "./components/Projects/Presentation/mediumProjects";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/' exact element={<HomePage />} />
        <Route path='/allprojects/small_projects' exact element={<SmallProjects />} />
        <Route path='/allprojects/medium_projects' exact element={<MediumProjects />} />
        <Route path='/todolist' exact element={<ToDoList />} />
        <Route path='/password' exact element={<PasswordGenerator />} /> 
        <Route path='/calculator' exact element={<Calculator />} />
        <Route path='/certificates' exact element={<Certificates />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes >
    </div >
  ); 
}

export default App;
