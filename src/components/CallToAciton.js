import React from "react";

export default class CallToAction extends React.Component{
    render() {

        const firststyles={
            display:"flex",
            justifyContent:"space-between",
            width:'1200px',
            height:'250px',
            alignContent:'center',
            alignItems:'center',
            backgroundColor:'#4a4a49',
            fontFamily: 'Open Sans',

        };





        return(
            <div className="first" style={firststyles}>
                <div className="napisy" style={{marginLeft:'100px', marginRight:'100px', color:"white", fontFamily:'Open Sans'}}>
                <h3 >Obczaj naszą apkę</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <button style={{border: 'none', fontWeight:'bold',marginRight:'125px', backgroundColor:'#ff6500',color:'white', fontFamily:'Open Sans', width:'220px',height:'60px'}}>Przejdź do Apki</button>
            </div>
        )
    }
}