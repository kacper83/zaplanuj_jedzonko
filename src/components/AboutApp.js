import React, {Component} from "react";
import '../scss/components/_aboutApp.scss';

class AboutApp extends Component {
    render() {
        return (
            <div className="about-app" id="oaplikacji" >
                <div>
                    <i className="fas fa-check"></i>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                    </p>
                </div>
                <div>
                    <i className="far fa-clock"></i>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                    </p>
                </div>
                <div>
                    <i className="fas fa-list"></i>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutApp
