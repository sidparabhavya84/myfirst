import React from "react";


class Counter extends React.Component {

    constructor() {
        super();

        this.state = {
            count: 0
        }
    }
    increment(){
        this.setState(() => {
            return{
                count: this.state.count + 1
            }
        })
    }
    decrement(){
        if(this.state.count > 0){
            this.setState({

                count: this.state.count - 1
            })
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
                    <button onClick={() => {this.increment()}}>Count : +
                    </button>

                    <button onClick={() => (this.decrement())}>Count : -
                    </button>
                </div>
            </>
        )
    }

}


export default Counter;
