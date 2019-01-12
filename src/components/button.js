import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "hi chris!"
        }
    }

    onClick() {
        this.setState({ title: this.state.title === "hi chris!" ? "bye chris" : "hi chris!" })
    }

    render() {
        return (
            <button onClick={() => { this.onClick() } }>{this.state.title}</button>
        )
    }
}