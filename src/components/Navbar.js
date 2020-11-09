import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Dropdown from './Dropdown'
import ReactGA from 'react-ga';

const trackingId = "UA-180581882-1";

class Navbar extends Component {
  responsiveNav() {
    if (document.documentElement.clientWidth < 1248) {
      document.getElementById('leave-a-message').innerHTML = 'Message'
      document.getElementById('nav-content').style.width = '90vw'
      document.getElementById('join-us').firstChild.innerHTML = document.getElementById('join-us').firstChild.innerHTML.replace(/Join Us/, 'Join')
    } else {
      document.getElementById('leave-a-message').innerHTML = 'Leave a Message'
      document.getElementById('nav-content').style.width = '1152px'
      if (!document.getElementById('join-us').firstChild.innerHTML.includes('Join Us')) {
        document.getElementById('join-us').firstChild.innerHTML = document.getElementById('join-us').firstChild.innerHTML.replace(/Join/, 'Join Us')
      }

    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.responsiveNav)
  }
  render() {
    ReactGA.initialize(trackingId);
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content" id='nav-content'>

          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Story
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Background
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                BGEA
              </Link>
            </li>
            <li className="nav-item" id='leave-a-message'>
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Leave a Message
              </Link>
            </li>
            <li className="nav-item" id='game' onClick={() => {
              ReactGA.event({
                category: `Click`,
                action: `User clicked game`,
              });
              window.location.href = 'https://games.gdevelop-app.com/game-d4d9c8d3-2adf-42ec-80ec-ea8b41e67cf3/index.html'
            }}>

              Life ?
            </li>
            <li className="nav-item">
              <Dropdown />
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;