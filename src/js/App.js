import React from 'react';
<<<<<<< HEAD
// import logo from '../logo.svg';
// import '../App.css';
import Header from "../components/Header";
import Karuzela from "../components/Karuzela";
import CallToAction from "../components/CallToAciton";
=======
>>>>>>> Em/newsletter


import Newsletter from './newsletter'
function App() {
  return (

      <div maxWidth="100vw" style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <Header/>
      <Karuzela/>
      <CallToAction/>
      <Newsletter/>
    </div>

  );
}

export default App;
