import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    incrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 2,
        }));
    };

    decrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 2,
        }));
    };

    InitialCounter = () => {
        this.setState({
            counter: 0,
        });
    };

    changeIncrementStep = (step) => {
        this.setState((prevState) => ({
            counter: prevState.counter + step,
        }));
    };

    changeDecrementStep = (step) => {
        this.setState((prevState) => ({
            counter: prevState.counter - step,
        }));
    };

    render() {
        const containerStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Arial', sans-serif",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            border: "2px solid #ddd",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "700px",
            margin: "20px auto",
        };

        const counterStyle = {
            fontSize: "3rem",
            color: "#333",
            margin: "20px",
            padding: "10px 20px",
            backgroundColor: "#ffffff",
            border: "3px solid #87CEFA",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        };

        const buttonStyle = {
            margin: "10px",
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#000080",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "all 0.3s ease",
        };

        
        const fieldsetStyle = {
            margin: "20px",
            padding: "10px",
            border: "2px solid #ccc",
            borderRadius: "10px",
        };

        const legendStyle = {
            fontSize: "1.2rem",
            fontWeight: "bold",
        };

        return (
            <div style={containerStyle}>
                <div style={counterStyle}>
                    <h1>{this.state.counter}</h1>
                </div>
                <button style={buttonStyle} onClick={this.incrementCounter}>  Incrementer</button>
                <button style={buttonStyle} onClick={this.decrementCounter}>  Decrementer
                </button>
                <button style={buttonStyle} onClick={this.InitialCounter}>  Initialiser</button>
                <fieldset style={fieldsetStyle}>
                    <legend style={legendStyle}>Pas d'increment</legend>
                    <button style={buttonStyle} onClick={() => this.changeIncrementStep(1)}>  +1 </button>
                    <button style={buttonStyle} onClick={() => this.changeIncrementStep(2)}>  +2</button>
                    <button style={buttonStyle}onClick={() => this.changeIncrementStep(3)}>   +3</button>
                    <button style={buttonStyle}  onClick={() => this.changeIncrementStep(4)}>  +4</button>
                </fieldset>
                <fieldset style={fieldsetStyle}>
                    <legend style={legendStyle}>Pas Decrement</legend>
                    <button style={buttonStyle} onClick={() => this.changeDecrementStep(1)}>  -1</button>
                    <button style={buttonStyle}onClick={() => this.changeDecrementStep(2)}> -2  </button>
                    <button style={buttonStyle} onClick={() => this.changeDecrementStep(3)}> -3 </button>
                    <button style={buttonStyle} onClick={() => this.changeDecrementStep(4)}> -4 </button>
                </fieldset>
            </div>
        );
    }
}

export default Counter;
