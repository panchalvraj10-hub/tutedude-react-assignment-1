import React, { Component } from 'react';

class Classcomponent extends Component {
    constructor() {
        super(); 
        this.state = {
                count:0
            };
        }
    

    increase = () => {
    this.setState({ count : this.state.count + 1 });
    };

    decrease = () => {
        if(this.state.count > 0) {
            this.setState({ count : this.state.count - 1 });
        }
    };

    reset = () => {
        this.setState({ count : this.state.count = 0})
    }

    render(){
        return(
            <div className="box">
                <h2>Class Component</h2>
                <div className="count">
                    <button onClick={this.decrease}>-</button>
                    <h3>{this.state.count}</h3>
                    <button onClick={this.increase}>+</button>
                </div>
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
        );    
    }
}
export default Classcomponent;