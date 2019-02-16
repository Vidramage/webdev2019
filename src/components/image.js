import React from 'react';

export default class Image extends React.Component {
    render() {
        let customClass = this.props.classes ? this.props.classes : "img-fluid"
        return (
            <img src="http://hdwallpapersrocks.com/wp-content/uploads/2014/05/most-beautiful-and-hot-chinese-girl.jpg" className={customClass} alt="responsive image"></img>
        )
    }
}