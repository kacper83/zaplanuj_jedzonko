import React from "react";
import '../scss/components/_header.scss'
import {HashRouter, Route, Switch, NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
export default class Header extends React.Component{
    render() {


        return(
            <div className="header" >
                <h1 >Zaplanuj <span>Jedzonko</span></h1>
                <div className="nav" >
                    <Link className="navlink" to="/app"><span>ZAPLANUJ POSIŁKI!</span></Link> {/*tu bedzie Link rouitingowy do app*/}
                    <Link className="navlink" to="#oaplikacji">DLACZEGO WARTO?</Link> {/*to zadziala gdy w swoich partach nazwiecie je np <div name="oaplikacji">*/}
                    <Link className="navlink" to="#oautorze">O MNIE</Link>
                    <Link className="navlink" to="#footer">KONTAKT</Link>
                </div>
            </div>
        )
    }
}