import React from "react";
import '../../scss/components/_pulpit.scss'

import Widgety from "./Widgety";
export default class Pulpit extends React.Component{
    constructor(props){
        super(props);

    }
    render() {


        return(
            <div className="pulpit">
                <Widgety/>
            </div>

        )
    }
}