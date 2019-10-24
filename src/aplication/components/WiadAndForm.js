import React, {Component} from "react";
import "../../scss/components/styleWiadAndForm.scss"

class WiadAndForm extends Component {

    onAddName=(e) =>{
        e.preventDefault();
        this.props.onAddName(e.target.name.value)
    }



    render() {
        return (
            <div className="WiadAndForm">
                <h1>
                    Witaj !
                </h1>
                <h2>
                    wygląda na to, że jesteś tutaj <br/>
                    pierwszy raz
                </h2>
                <form action="" onSubmit={(e)=>this.onAddName(e)}>
                    <textarea name="name" id="" cols="30" rows="1   " placeholder="Tutaj wpisz jak masz na imię"></textarea>
                    <br/>
                    <button>Gotowe!</button>
                    <p>
                        Podaj nam swoje imię a my zorganizujemy <br/>
                        dla Ciebie naszą aplikację :)
                    </p>
                </form>
            </div>
        );
    }
}

export default WiadAndForm;