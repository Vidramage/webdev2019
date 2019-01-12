import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';

export default class Home extends React.Component {
    render() {
        let myVar = "holy crap";
        return (
            <div>
                <Header title="HipsterCode"></Header>
                <Grid dynamicTitle={"testing " + myVar} />
            </div>
        )
    }
}