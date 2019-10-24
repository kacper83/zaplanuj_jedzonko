import React from "react";
import Header from "./Header";
import Karuzela from "./Karuzela";
import CallToAction from "./CallToAciton";
import Newsletter from './newsletter';
import Footer from "./footer";
import About from "./About";
import AboutApp from "./AboutApp";

export default class LandingPage extends React.Component{
    render() {


        return(
            <>
            <Header/>
            <Karuzela/>
            <CallToAction/>
            <AboutApp/>
            <Newsletter/>
            <About/>
            <Footer/>
            </>
            )
        
    }
}