import React, { Component } from 'react';
import '../css/WhoAreWe.css'
class HeadShotAnimation extends Component {
    render() {
        return (
            <div className="about-wrapper" id={this.props.id} style={{ marginTop: '10vw' }}>
                <div className="about-text">
                    <div className={this.props.className} id="Black_girl">
                        <img
                            src="./imgs/Black_girl.png"
                            alt="Scene"
                            style={{ width: '24vw', height: '23.5vw', userSelect: 'none' }}
                        />
                    </div>
                    <div className={this.props.className} id="left_triangle">
                        <img

                            src="./imgs/left_triangle.png"
                            alt="Scene"
                            style={{ width: '25vw', userSelect: 'none' }}
                        />
                    </div>
                    <div className={this.props.className} id="right_triangle">
                        <img

                            src="./imgs/right_triangle.png"
                            alt="Scene"
                            style={{ width: '25vw', userSelect: 'none' }}
                        />
                    </div>
                    <div className={this.props.className} id="words">
                        <img

                            src="./imgs/Who_are_we.png"
                            alt="Scene"
                            style={{ width: '14.3vw', userSelect: 'none' }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadShotAnimation;