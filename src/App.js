import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
// import './App.css';
import Formation from "./components/Formations/Formation"
import Emploi from './components/Emploi/Emploi';
import firebaseDb from "./firebase";
import Grid from './components/Formations/Grid1'
import Test from './components/Emploi/Test'
function App() {
 
  const addOrEdit = obj => {
    firebaseDb.child('Formations').push(
      obj,
      err => {
        if (err) {
          console.log(err)
        }
      }
      )
  }
  const addOrEditemploi = obj => {
    firebaseDb.child('OffresEmploi').push(
      obj,
      err => {
        if (err) {
          console.log(err)
        }
      }
    )
  }
  return (
    <div>
      {/* <Test ></Test> */}
      <Emploi addOrEdit={addOrEditemploi}></Emploi>
      {/* <Formation addOrEdit={addOrEdit}></Formation> */}
      {/* <Grid></Grid> */}
    </div>
  );
}

export default App;
