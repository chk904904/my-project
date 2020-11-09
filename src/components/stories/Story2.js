import React, { useState } from 'react';
import SceneReality2 from '../scenes/SceneReality2';
import SceneVision2 from '../scenes/SceneVision2';
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

export default function Story2(props) {
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
                {checked ? (
                    <>
                        <animated.div style={fadeIn}>
                            <SceneVision2 handleSwitch={handleSwitch} />
                        </animated.div>
                        <div className={classes.storyText}>
                            <h1>Vision</h1>
                            <p>
                                Advocates, school leaders and teachers, and justice system professionals should seek out
                                best practices and promising models to close racial and gender disparities in discipline
                                and justice system involvement.
              </p>
                        </div>



                    </>
                ) : (
                        <>
                            <animated.div style={fadeIn}>
                                <SceneReality2 handleSwitch={handleSwitch} />
                            </animated.div>
                            <div className={classes.storyText}>

                                <h1>Suspension</h1>
                                <p>
                                    Serena doesn't show up after being suspended from her school.
</p>
                            </div>



                        </>
                    )}
            </div>
        </>
    );
}
