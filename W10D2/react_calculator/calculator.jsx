import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // your code here
        this.state = {result: 0, num1: "", num2: ""}
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.add = this.add.bind(this);
        this.substract = this.substract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.reset = this.reset.bind(this);
    }

    // your code here
    setNum1(e) {
        let value = Number(e.target.value);
        this.setState({num1: value})
    }

    setNum2(e) {
        let value = Number(e.target.value);
        this.setState({num2: value})
    }

    add(e){
        let result = this.state.num1 + this.state.num2;
        this.setState({result });
    }

    substract(e){
        let result = this.state.num1 - this.state.num2;
        this.setState({ result });
    }

    multiply(e){
        let result = this.state.num1 * this.state.num2;
        this.setState({ result });
    }

    divide(e){
        let result = this.state.num1 / this.state.num2;
        this.setState({ result });
    }

    reset(e){
        this.setState({ result: 0, num1: "", num2: "" });
    }

    render() {
        return (
            <div>
                <h1>{this.state.result}</h1>
                <input onChange={this.setNum1} type="text" value={this.state.num1}/>
                <input onChange={this.setNum2} type="text" value={this.state.num2}/>
                <br/>
                <button onClick={this.add}>+</button>
                <button onClick={this.substract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
                <br/>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }



}

export default Calculator;