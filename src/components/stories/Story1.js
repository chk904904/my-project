import React, { useState } from 'react';
import SceneReality from '../scenes/SceneReality1';
import SceneVision from '../scenes/SceneVision1';
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
    width: '25vw', display: 'flex', flexDirection: 'column', marginLeft: '5vw'
  }
}));

export default function Story1(props) {
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
              <SceneVision handleSwitch={handleSwitch} />
            </animated.div>

            <div className={classes.storyText}>
              <h1>Vision</h1>
              <p>
                There are steps that we can take within our schools, law enforcement,
                and the justice systems that can help to dismantle the school-toprison pipeline and to reduce the other inequities affecting Black girls
                in the justice system.
              </p>
            </div>
          </>
        ) : (
            <>

              <animated.div style={fadeIn}>
                <SceneReality handleSwitch={handleSwitch} />
              </animated.div>

              <div className={classes.storyText}>

                <h1>Referral</h1>
                <p>
                  After being bullied by other kids for a long time, Serena can't tolerate it anymore. She finally decides to
                  fight for her dignity.
              </p>
              </div>
            </>
          )}
      </div>
    </>
  );
}
