import React from "react";
import '../../scss/components/_mainappwindow.scss'
import {NavLink} from "react-router-dom";
import WiadAndForm from "./WiadAndForm";
import Pulpit from "./Pulpit";

export default class MainApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            render:"",
            name:"",
        }
        
    }
    componentDidMount=() =>{
        fetch('http://localhost:3001/user',{
            method : 'GET'}).then( resp => {
            if (resp.ok)
                console.log( resp.json());
            else
                throw new Error('Błąd sieci!');
        })
        return fetch('http://localhost:3001/user').then(
            resp => resp.json()
        ).then(
            (finalResp) => {
                this.setState({
                    name: finalResp.name.name,
                })
            }
        );

    }

    onNameChange=(name)=>{
        console.log(name);
        fetch('http://localhost:3001/user',{
            method: 'PATCH',
            body: JSON.stringify({
            name: {name}
        }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
            .then(
                json => {
                    this.setState({
                        name: json.name.name,
                        render:'pulpit'
                    })
                    })


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
        console.log(this.state.name)

        return(
            <div className="aplication">
                <div className="header" >
                    <NavLink to="/" className="navlink"><h1>Zaplanuj <span>Jedzonko</span></h1></NavLink>
                    <div className="user">
                        <h4>{this.state.name}</h4>
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
                        {this.state.name===""? <WiadAndForm onAddName={this.onNameChange}/>:null}
            {/*{this.props.name? <coś tam> : komponent marka} kontener bedzie musial mu przekazywac jaką treść renderować, np czy użytkownik podał imię
            jesli nie, to jest komponent marka. */}
                        {this.state.render==="pulpit"&&this.state.name!==""? <Pulpit/> :null}

                    </div>
                </div>
            </div>

            )
    }
}