import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%',
        marginLeft: '10%',
        marginBottom: '20vw',

    },
    img: {
        width: '60%',
        marginLeft: '20%',
    },
    item: {
        cursor: 'pointer',
        transition: 'opacity 0.2s ease-in-out'
    },
    container: {
        width: '80%',
        marginLeft: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: '#efeeee',
        border: '1px solid #efeeee',
        margin: '0px 40px 0px 40px'
    }
}));


export default function DisabledTabs() {
    const [index, setIndex] = useState(0)
    const classes = useStyles();
    const fadeIn = useSpring({
        to: async (next, cancel) => {
            await next({ opacity: 0.5 })
            await next({ opacity: 1 })
        },
        from: { opacity: 0 },
        config: { duration: 400 }
    });

    return (

        <animated.div className={classes.root} style={fadeIn}>
            <Grid container spacing={3}>

                <Grid className={classes.item} onClick={() => setIndex(0)} item xs={3} style={{ opacity: index !== 0 && 0.4 }}>
                    <img className={classes.img} src='./imgs/icon-education.svg' />
                    <h4>Education</h4>
                </Grid>
                <Grid className={classes.item} onClick={() => setIndex(1)} item xs={3} style={{ opacity: index !== 1 && 0.4 }}>
                    <img className={classes.img} src='./imgs/icon-welfare.svg' />
                    <h4>Child Welfare</h4>
                </Grid>
                <Grid className={classes.item} onClick={() => setIndex(2)} item xs={3} style={{ opacity: index !== 2 && 0.4 }}>
                    <img className={classes.img} src='./imgs/icon-justice.svg' />
                    <h4>Juvenile Justice</h4>
                </Grid>
                <Grid className={classes.item} onClick={() => setIndex(3)} item xs={3} style={{ opacity: index !== 3 && 0.4 }}>
                    <img className={classes.img} src='./imgs/icon-health.svg' />
                    <h4>Health & Wellness</h4>
                </Grid>
            </Grid>
            <div className={classes.container}>
                <IconButton aria-label="previous" component="span" className={classes.button} onClick={() => {
                    if (index == 0) setIndex(3)
                    else setIndex(index - 1)
                }}>
                    <ArrowBackIcon className={classes.control} />
                </IconButton>


                <p style={{ display: index !== 0 && 'none' }}>
                    At times, Black girls are pushed out of school for behaviors that other girls do but for which they are not disciplined.
                    Racialized and gendered stereotypes about Black girls, including the adultification that many experience, may cause teachers and other
                    authority figures to label them insubordinate or disrespectful. Black girls are especially likely to be disciplined for subjective behaviors,
                    such as defiance and disrespect. The higher suspension of Black girls from school can influence their academic achievement. They are often
                    tracked into lower-level sections of courses such as math and science and encouraged to excel in sports and music.
            </p>
                <p style={{ display: index !== 1 && 'none' }}>

                    Black girls involved in child welfare as adolescents are often placed in congregate care facilities, such as group homes or other institutional facilities. Placement in congregate care is associated with worse outcomes fo girls, including subsequent justice system involvement. National research reveals that many youth in congregate care have experienced trauma in their lives and are in need of mental health services. This research also shows that girls are more likely to run from placement than are boys, in part because girls are at greater risk for sexual harassment and abuse in these settings and do not feel safe. Unfortunately, running away and trying to survive on the streets puts girls at risk for sex trafficking and often leads to engagement in illegal behaviors (e.g., stealing, selling drugs) in order to survive.
            </p>
                <p style={{ display: index !== 2 && 'none' }}>

                    A growing body of work demonstrates the inequities and disparities that Black girls experience in several social systems. For example, Black girls in the U.S. are five times more likely than White girls to be suspended from school, often for subjective behaviors. They are also three times more likely than White girls to be referred to the juvenile justice system, even though there are no meaningful differences in the types of behaviors that lead to juvenile court referrals among Black and White girls. Within physical and mental health realms, scholars often report the discrepancies between Black and White girls; however, they are often presented as individual issues, with insufficient recognition of the systemic causes and barriers to access for appropriate mental and physical health care.
            </p>

                <p style={{ display: index !== 3 && 'none' }}>

                    A large body of research demonstrates a range of physical and mental health inequities experienced by Black girls, including rates of depression and ADHD, obesity and Type 2 diabetes, asthma, and STIs and teen pregnancy rates. Yet, many local Black girls are not receiving needed medical care. Specifically, 27% of Black girls, compared with 10% of White girls, reported that during the previous year they had believed they needed to see a doctor, nurse, or to go to the emergency room but were not able to go. Further, in Allegheny County, one-quarter of Black adolescent girls reported feeling depressed in the previous year.
            </p>
                <IconButton aria-label="next" component="span" className={classes.button} onClick={() => {
                    if (index == 3) setIndex(0)
                    else setIndex(index + 1)
                }} >
                    <ArrowForwardIcon className={classes.control} />
                </IconButton>
            </div>

        </animated.div>

    );
}