import { render } from "@testing-library/react";
import React from "react";

class Counter extends React.Component {

    constructor() {
        super();

        this.state = {
            count: 0
        }
    }


    render(){
        return (
            <>
                <h2>
                    class base components..
                </h2>
                <p>
                    {this.state.count}
                </p>
                <div className="buttons">
                    <button onClick={() => this.setState({ count : this.state.count + 1})}>Count : +</button>

                    <button onClick={() => this.setState({ count : this.state.count - 1})}>Count : -</button>
                </div>
            </>
        )
    }

}


export default Counter;
