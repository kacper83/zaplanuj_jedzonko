import React from "react";
import '../../scss/components/_mainappwindow.scss'
import {NavLink} from "react-router-dom";
import WiadAndForm from "./WiadAndForm";
import Pulpit from "./Pulpit";
const api="../../database/db.json"
export default class MainApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            render:"",
        }
        
    }

    goPulpit=()=>{
        this.setState({
            render:"pulpit"
        })
    }
    goRecipes=()=>{
        this.setState({
            render:"recipes"
        })
    }
    goPlans=()=>{
        this.setState({
            render:"plans"
        })
    }

    render() {


        return(
            <div className="aplication">
                <div className="header" >
                    <NavLink to="/" className="navlink"><h1>Zaplanuj <span>Jedzonko</span></h1></NavLink>
                    <div className="user">
                        <h4>Imię</h4> 
                        {/*tu potem bedzie this.props.name od kontenera*/}
                        <i class="far fa-user-circle"></i>

                </div>
            </div>
                <div className="rest" >
                    <div className="sidebar">
                        <div className="navigation">
                            <button className="navEl" onClick={this.goPulpit}>Pulpit</button>
                            <button className="navEl" onClick={this.goRecipes}>Przepisy</button>
                            <button className="navEl" onClick={this.goPlans}>Plany</button>
                        </div>
                    </div>
                    <div className="main">
                        {this.state.render===""? <WiadAndForm />: null}
            {/*{this.props.name? <coś tam> : komponent marka} kontener bedzie musial mu przekazywac jaką treść renderować, np czy użytkownik podał imię
            jesli nie, to jest komponent marka. */}
                        {this.state.render==="pulpit"? <Pulpit/> :null}

                    </div>
                </div>
            </div>

            )
    }
}