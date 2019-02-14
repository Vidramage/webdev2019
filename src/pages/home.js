import React from 'react';
import Header from '../components/header';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header title="Michael Mahrt Portfolio"></Header>
                <img src="https://avatars1.githubusercontent.com/u/11867489?s=460&v=4" />
            </div>
        )
    }
}