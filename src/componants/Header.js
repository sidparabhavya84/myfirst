import React from "react";
import Header from "../componants/header1.css";
function header(props) {

    return (
        <header>
            <div className="container">
                <div className="row align-item">
                    <div className="logo">
                        <img src= {props.logo}/>
                    </div>
                    <nav>
                        <ul>{
                                props.list.map((v) => {
                                    return (
                                        <li>
                                            <a href="#">{v}</a>
                                        </li>
                                    )
                                })
                            }
                            
                            {/* <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )


}
export default header;