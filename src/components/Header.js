import React from "react";

export default class Header extends React.Component{
    render() {

        const headerstyles={
            display:"flex",
            justifyContent:"space-between",
            width:'1200px',
            height:'90px',
            alignContent:'center',
            backgroundColor:'#4a4a49',

        };
        const navstyles={
            height:'90px',
            display:'flex',
            alignItems:'center',
            justifyContent: 'space-around',
            marginRight:'75px'

        };
        const linkstyles={
            margin:'15px',
            textDecoration:'none',
            color:"white",


        };




        return(
            <div className="header" style={headerstyles}>
                <h1 style={{marginLeft:'75px', color:"white",}}>Zaplanuj <span style={{color:'#E58A20'}}>Jedzonko</span></h1>
                <div className="nav" style={navstyles}>
                    <a style={linkstyles} className="navlink" href=""><span style={{color:'#E58A20'}}>ZAPLANUJ POSIŁKI!</span></a>
                    <a style={linkstyles} className="navlink" href="">DLACZEGO WARTO?</a>
                    <a style={linkstyles} className="navlink" href="">O MNIE</a>
                    <a style={linkstyles} className="navlink" href="">KONTAKT</a>

                </div>
            </div>
        )
    }
}