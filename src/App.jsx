import React from 'react';

import { Outlet } from "react-router-dom";
import SignIn from './components/SignIn';
import { TestingValentin } from "./firebase/testValentin";
import Router from './router/router';

function App () {
  return (
    <div className='App'>
      <h1>Hola mundo</h1>
      <SignIn/>
      <Outlet />
      <Router />
      <TestingValentin />
    </div>
  );
}

export default App;
