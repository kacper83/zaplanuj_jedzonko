import React from "react";
import '../../scss/components/_mainappwindow.scss'
export default class MainApp extends React.Component{
    constructor(props){
        super(props);
        
    }
    render() {


        return(
            <div className="aplication">
                <div className="header" >
                    <h1>Zaplanuj <span>Jedzonko</span></h1>
                    <div className="user">
                        <h4>Imię</h4> 
                        {/*tu potem bedzie this.props.name od kontenera*/}
                        <i class="far fa-user-circle"></i>

                </div>
            </div>
                <div className="rest" >
                    <div className="sidebar">
                        <div className="navigation">
                            <button className="navEl">Pulpit</button>
                            <button className="navEl">Przepisy</button>
                            <button className="navEl">Plany</button>
                        </div>
                    </div>
                    <div className="main">
            {/*{this.props.name? <coś tam> : komponent marka} kontener bedzie musial mu przekazywac jaką treść renderować, np czy użytkownik podał imię
            jesli nie, to jest komponent marka. */}

                    </div>
                </div>
            </div>

            )
    }
}