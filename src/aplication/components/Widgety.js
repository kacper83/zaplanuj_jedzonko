import React from "react";
import '../../scss/components/_widgety.scss'

export default class Widgety extends React.Component{
    render() {


        return(
            <div className="widgets" >
                <div className="recipe">
                    <i className="far fa-plus-square"></i>
                    <p>dodaj przepis</p></div>
                <div className="plan">
                    <i className="far fa-plus-square"></i>
                    <p>dodaj plan</p>
                </div>
            </div>
        )
    }
}