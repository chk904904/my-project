import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useSpring, animated, useTransition } from 'react-spring';
import IconButton from '@material-ui/core/IconButton';

const slides = [
    { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i', title: 'Amanda Cross, PhD', content: 'To foster collaboration between school districts and community organizations to address issues that disproportionately impact Black girls in school, including sexual harassment and suspensions.' },
    { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80', title: 'Angela Steele, MSW', content: 'To analyze the underlying reasons Black girls have disproportionately high child welfare referral rates and use these findings to inform and improve service delivery.' },
    { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80', title: 'Kimberly Booth & Sara Goodkind, PhD', content: 'To collaborate with local law enforcement officials to identify communities with the highest referral rates for Black girls, the associated behaviors, and changes in order to partner with local diversion programs, community members, and policymakers to reduce rates of referral.' },
    { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80', title: 'Britney Brinkman, PhD', content: 'To support Black girls in obtaining accurate health information and services by building the capacity of providers to deliver trauma-informed care and comprehensive sex education.' },
]



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '60%',
        marginLeft: '20%',
        marginTop: -100,
    },
    control: {
        textAlign: 'center', color: '#1b152b'
    },
    button: {
        border: '2px solid #1b152b'
    }
}));


export default () => {
    const classes = useStyles();
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 0 }
    })
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
    return transitions.map(({ item, props, key }) => (
        <>

            <div
                key={key}
                style={{
                    top: 0,
                    left: 0,
                    width: '60%',
                    marginLeft: '20%',
                    marginBottom: '100px',
                }}
            >
                <Grid container spacing={3}>
                    <animated.div style={{ ...fadeIn, display: 'flex' }}>
                        <Grid item xs={6}>
                            <h3>{item.title}</h3>
                            <p style={{ fontWeight: 400 }}>{item.content}</p>
                        </Grid>
                        <Grid item xs={6}>

                            <img style={{ width: '100%', height: '500px', objectFit: 'cover' }} src={`https://images.unsplash.com/${item.url}&auto=format&fit=crop`} />

                        </Grid>
                    </animated.div>
                </Grid>
            </div>
            <p className={classes.control}>
                <IconButton aria-label="previous" component="span" className={classes.button} onClick={(index) => {
                    set((state) => (state > 0 ? state - 1 : slides.length - 1) % slides.length);
                }}>
                    <ArrowBackIcon className={classes.control} />
                </IconButton>
                        &nbsp; {index == 0 ? slides.length : index} / {slides.length} &nbsp;
                        <IconButton aria-label="next" component="span" className={classes.button} onClick={(index) => {
                    set((state) => (state + 1) % slides.length);
                }}>
                    <ArrowForwardIcon className={classes.control} />
                </IconButton>
            </p>
        </>
    ))
}


