import React from "react";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Carousel from "react-bootstrap/Carousel";

export default class Karuzela extends React.Component{
    render() {
        return(
            <Carousel style={{width:'1200px', height:'500px'}}>
                <Carousel.Item>
                    <img height="500px"
                        className="d-block w-100"
                         style={{objectFit:'cover'}}
                         src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{color:'black', bottom:'180px', fontFamily: 'Open Sans'}}>
                        <h3>Zdrowe niedobre</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="500px"
                        style={{objectFit:'cover',}}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Second slide"

                    />

                    <Carousel.Caption style={{color:'black', bottom:'180px', fontFamily: 'Open Sans'}}>
                        <h3>Kocham grzybki</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        height="500px"
                        style={{objectFit:'cover'}}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/671956/pexels-photo-671956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{color:'black', bottom:'180px', fontFamily: 'Open Sans'}}>
                        <h3>Jakieś zupki</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}