import React from 'react';
import { useSpring, animated } from 'react-spring';
import useSound from 'use-sound';
import ReactGA from 'react-ga';

const trackingId = "UA-180581882-1";
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function INteractiveItem(props) {
    const [play] = useSound('./sound/click.wav');
    const [hover] = useSound('./sound/hover.ogg');
    const { clickAction, name, top, left, width, style } = props;
    const [AnimationProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    ReactGA.initialize(trackingId);

    const handleClick = () => {
        play();
        clickAction();
        ReactGA.event({
            category: `Click`,
            action: `User clicked interactive item ${name}`,
        });
    };


    return (
        <animated.div
            className="box"
            onMouseEnter={hover}
            onClick={handleClick}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ ...style, transform: AnimationProps.xys.interpolate(trans), top: `${top}%`, left: `${left}%` }}
        >
            <img src={`./imgs/${name}.svg`} alt={name} style={{ width: `${width}vw`, userSelect: 'none' }} />
        </animated.div>
    );
}
