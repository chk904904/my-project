import React, { useState } from 'react';
import Scene3 from '../scenes/Scene3';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '50vw',
        width: '90vw',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    storyText: {
        width: '25vw', marginLeft: '5vw'
    }
}));

export default function Story3(props) {
    const { id } = props;

    const classes = useStyles();

    const [checked, setChecked] = useState(false);

    const fadeIn = useSpring({
        to: async (next, cancel) => {
            await next({ opacity: 0.2 })
            await next({ opacity: 0.5 })
            await next({ opacity: 0.7 })
            await next({ opacity: 1 })
        },
        from: { opacity: 0 },
        config: { duration: 400 }
    });

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleSwitch = () => {
        setChecked(!checked)
    }

    return (
        <>

            <div id={id}
                className={classes.root}
            >

                <>
                    <animated.div style={fadeIn}>
                        <Scene3 handleSwitch={handleSwitch} />
                    </animated.div>
                    <div className={classes.storyText}>
                        <h1>Community</h1>
                        <p>
                            With the BGEA's help, Serena found friends with similar experience.
              </p>
                    </div>



                </>

            </div>
        </>
    );
}
