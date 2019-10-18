import React from 'react';
// import logo from '../logo.svg';
// import '../App.css';
import Header from "../components/Header";
import Karuzela from "../components/Karuzela";
import CallToAction from "../components/CallToAciton";

function App() {
  return (
      <div maxWidth="100vw" style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <Header/>
      <Karuzela/>
      <CallToAction/>

      </div>
  );
}

export default App;
