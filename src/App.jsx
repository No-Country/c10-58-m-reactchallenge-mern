<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import SingIn from './components/SigngIn'

function App () {
  return (
    <div className='App'>
      <h1>Hola mundo</h1>
     <SingIn/>
=======
/* eslint-disable */
import { Outlet } from "react-router-dom";
import { TestingValentin } from "./firebase/testValentin";

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <Outlet />
>>>>>>> 133c4bc9a43ad1605a0f836dc4262c946cb52ade
    </div>
  );
=======
/* eslint-disable */
import Router from './router/router'

function App() {
  return <Router />
>>>>>>> dev
}

export default App;
