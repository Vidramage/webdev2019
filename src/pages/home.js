import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';
import Button from '../components/button';
import Image from '../components/image';

export default class Home extends React.Component {
    render() {
        let myVar = "holy crap";
        return (
            <div>
                <Image classes="this isn't going to work" />
                <Header title={this.props.title ? this.props.title : "no title given"}></Header>
                <Grid data={[<div><h1>holy crap html header</h1></div>, "two", "three"]} />
            </div>
        )
    }
}