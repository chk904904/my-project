import React, { Component } from 'react';
import HeadShotAnimation from './HeadShotAnimation';

class WhoAreWe extends Component {
    constructor() {
        super();
        this.state = {
            className: 'hidden'
        }
    }
    handleScroll() {
        if (document.documentElement.scrollTop > document.documentElement.clientWidth * 2.3) {
            this.setState({
                className: 'show'
            })
        } else {
            this.setState({
                className: 'hidden'
            })
        }
    }


    componentDidMount() {
        window.onscroll = () => this.handleScroll();
    }



    render() {
        return (
            <HeadShotAnimation className={this.state.className} id={this.props.id} />
        );
    }
}

export default WhoAreWe;