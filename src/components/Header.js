import React from "react";
import '../scss/components/_header.scss'

export default class Header extends React.Component{
    render() {


        return(
            <div className="header" >
                <h1 >Zaplanuj <span>Jedzonko</span></h1>
                <div className="nav" >
                    <a href=""><span>ZAPLANUJ POSIŁKI!</span></a> {/*tu bedzie Link rouitingowy do app*/}
                    <a  href="#oaplikacji">DLACZEGO WARTO?</a> {/*to zadziala gdy w swoich partach nazwiecie je np <div name="oaplikacji">*/}
                    <a  href="#oautorze">O MNIE</a>
                    <a  href="#kontakt">KONTAKT</a>
                </div>
            </div>
        )
    }
}