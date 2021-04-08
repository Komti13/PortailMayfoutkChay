import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
// import './App.css';
import Formation from "./components/Formations/Formation"

import Emploi from './components/Emploi/Emploi';
import firebaseDb from "./firebase";
import Grid from './components/Formations/Grid1'
import Test from './components/Emploi/Test'
function App() {
 
 
  return (
    <div>
      {/* <Emploi></Emploi> */}
      {/* <Formation addOrEdit={addOrEdit}></Formation> */}
      <Formation ></Formation>
      {/* <Grid></Grid> */}
    </div>
  );
}

export default App;
