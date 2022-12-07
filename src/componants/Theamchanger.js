import React, { Component } from "react";
import "../componants/Theamchanger.css";
// import Theamchanger from "../componants/Theamchanger.css";

class Theamchanger extends Component {
    constructor(){
        super()
        this.state ={
            backgroundcolor: 'yellow',
            color:'black',
        }
    }
    black(){
        this.setState({
            backgroundcolor: 'black',
            color:'white'
        })
    }

    gray(){
        this.setState({
            backgroundcolor: 'tan',
            color:'palegoldenrod'
        })
    }

    silver(){
        this.setState({
            backgroundcolor: 'silver',
            color:'white'
        })
    }

    render(){
        return(
            <div className="theam" style={{ background: this.state.backgroundcolor}}>

                <h2 style={{color:this.state.color}}>Theam changer</h2>

                <p style={{color:this.state.color}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.{this.state.color}
                </p>
                <button onClick={() => {this.black()}}>Black</button>
                <button onClick={() => {this.gray()}}>Tan</button>
                <button onClick={() => {this.silver()}}>silvar</button>

            </div>
        )
    }
}
export  default Theamchanger;
