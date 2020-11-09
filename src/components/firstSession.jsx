import React, { Component } from "react";
import "../css/firstSessionStyle.css";
import { animated, Spring } from "react-spring/renderprops";

export default function FirstSession(props) {

  const { id } = props;

  return (
    <div id={id} style={{ height: '100vh' }}>
      <div style={{ position: 'relative' }}>
        <Spring
          native
          config={{ duration: 800 }}
          from={{ opacity: 0, top: "0vh" }}
          to={{ opacity: 1, top: "10vh", left: "15vw" }}
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
          from={{ opacity: 0, top: "23vh" }}
          to={{ opacity: 1, top: "43vh", right: '5vw' }}
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
          to={{ opacity: 0.6, left: "0vw", top: "-10vh" }}
        >
          {(props) => (
            <animated.img
              style={{ ...props, position: 'absolute' }}
              src="/imgs/first_flower.svg"
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
              style={{ ...props, position: 'absolute' }}
              src="/imgs/second_flower.svg"
              alt="second_flower"
              id="second_flower"
            />
          )}
        </Spring>
      </div>
    </div>
  );
}


