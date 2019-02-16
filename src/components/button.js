import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "hi mike!"
        }
    }

    onClick() {
        this.setState({ title: this.state.title === "hi mike!" ? "bye mike!" : "hi mike!" })
    }

    render() {
        return (
            <button onClick={() => { this.onClick() }}>{this.state.title}</button>
        )
    }
}