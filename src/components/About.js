import React, {Component} from "react";
import '../scss/components/_about.scss';


class About extends Component {
    render() {
        return (
            <div className="about" id="oautorze">
                <div className="avatar">
                    <img src=" "/>   {/*tutaj wstawić link do avatara*/}
                </div>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                    Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                    Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                </p>
            </div>
        )
    }
}

export default About