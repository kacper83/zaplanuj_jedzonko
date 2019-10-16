import React from "react";
import '../scss/components/_calltoaction.scss'
export default class CallToAction extends React.Component{
    render() {


        return(
            <div className="first" >
                <div className="napisy" >
                <h3 >Obczaj naszą apkę</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <button>Przejdź do Apki</button>
            </div>
        )
    }
}