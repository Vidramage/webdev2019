

import React from 'react';

export default class Image extends React.Component {
    render() {
        let customClass = this.props.classes ? this.props.classes : "img-fluid"
        return (
            <img src="https://yt3.ggpht.com/WE0Vna1FQw77sYH498jtJrBwxL5_RxbjCbgTZif5MvYZqq3ButwI8KP82FOXzv84KBnyhBj7" class={customClass} alt="Responsive image"></img>
        )
    }
}