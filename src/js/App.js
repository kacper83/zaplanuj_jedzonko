
import React, {Component} from 'react';

import Header from "../components/Header";
import Karuzela from "../components/Karuzela";
import CallToAction from "../components/CallToAciton";
import Newsletter from '../components/newsletter';
import Footer from "../components/footer";

function App() {
    return (

        <div maxWidth="100vw"
             style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <Header/>
            <Karuzela/>
            <CallToAction/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}


export default App;
