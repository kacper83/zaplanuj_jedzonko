import React from "react";
import '../scss/components/_newsletter.scss'
export default class Newsletter extends React.Component{
    render() {


        return(
            <div className="newsletter" >
                <h3>Zapisz się do newslettera</h3>
                <div className="inputstuff" >
                    <input type="email"></input>
                    <button>Subskrybuj</button>
                </div>
            </div>
        )
    }
}