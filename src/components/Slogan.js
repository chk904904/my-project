import React, { Component } from "react";
import "../css/Slogan.css";
import { animated, Spring } from "react-spring/renderprops";

export default function Slogan(props) {

  const { id } = props;

  return (
    <div id={id} style={{ height: '50vw' }}>
      <div style={{ position: 'relative' }}>
        <Spring
          native
          config={{ duration: 800 }}
          from={{ opacity: 0, top: "-10vw" }}
          to={{ opacity: 1, top: "0vw", left: "15vw" }}
        >
          {(props) => (
            <animated.p style={{ ...props, userSelect: 'none', position: 'absolute' }} id="first_sentence">
              Nothing
              <br />
                  about us,
            </animated.p>
          )}
        </Spring>

        <Spring
          native
          config={{ duration: 800 }}
          from={{ opacity: 0, top: "0vw" }}
          to={{ opacity: 1, top: "20vw", right: '9vw' }}
        >
          {(props) => (
            <animated.p style={{ ...props, userSelect: 'none', position: 'absolute' }} id="second_sentence">
              without us.
            </animated.p>
          )}
        </Spring>
        <Spring
          native
          config={{ duration: 800 }}
          from={{ opacity: 0, left: "-20vw" }}
          to={{ opacity: 0.6, left: "0vw", top: "-7vw" }}
        >
          {(props) => (
            <animated.img
              style={{ ...props, position: 'absolute', width: '43.7vw' }}
              src='./imgs/first_flower.svg'
              alt="first_flower"
              id="first_flower"
            />
          )}
        </Spring>
        <Spring
          native
          config={{ duration: 800 }}
          from={{ opacity: 0, right: "-20vw" }}
          to={{ opacity: 0.8, right: "0vw", top: "0vh" }}
        >
          {(props) => (
            <animated.img
              style={{ ...props, position: 'absolute', width: '49.8vw' }}
              src='./imgs/second_flower.svg'
              alt="second_flower"
              id="second_flower"
            />
          )}
        </Spring>
      </div>
    </div>
  );
}


