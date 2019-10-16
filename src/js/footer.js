import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./styleFooter.css";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer_top">
                    <div>
                        <h1>Lorem ipsum dolor</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore repellendus
                            praesentium quod distinctio laboriosam.
                        </h3>

                    </div>
                    <div>
                        <h1>Lorem ipsum dolor</h1>
                        <ul>
                            <li>
                                <h3>Lorem ipsum dolor sit amet</h3>
                            </li>
                            <li>
                                <h3>Lorem ipsum dolor sit amet</h3>
                            </li>
                            <li>
                                <h3>Lorem ipsum dolor sit amet</h3>
                            </li>
                            <li>
                                <h3>Lorem ipsum dolor sit amet</h3>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1>Lorem ipsum dolor</h1>
                        <form>
                            <input type="text"/>
                            <button>Lorem</button>
                        </form>

                        <a href=""><i className="fab fa-facebook-square"></i></a>
                        <a href=""><i className="fab fa-twitter-square"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer_bottom">
                    Copyright Zaplanuj <span>Jedzonko</span>.pl
                </div>

            </footer>
        )
    }
}
export default Footer
