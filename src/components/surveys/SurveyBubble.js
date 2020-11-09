import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from './../dividers/DividerImageGallery';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        marginLeft: '10%',
        marginTop: 100,

    },
    margin: {
        height: theme.spacing(3),
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
        alignItems: 'center',
    },
    button: {
        width: '16vw',
        height: '4vw',
        fontSize: '1.5vw',
        borderRadius: '2vw',
        fontWeight: 400,
        border: '2px solid #1b152b'
    },
    round: {
        // position: 'absolute',
        // width: 300,
        // height: 300,
        borderRadius: '50%',
        // backgroundColor: '#4f0dd2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        "&:hover": {
            transform: 'scale(1.2)'
        },
        transition: 'transform 0.2s ease-in-out'
    },
    text: {
        margin: 0,
        textAlign: 'center',
        color: '#efeeee'
    }
}));



const Result = () => {
    const classes = useStyles();
    const [resultStates, setResultState] = useState([])
    useEffect(() => {
        fetch('http://18.212.4.212:8000/api/question1-list/')
        .then(response => response.json())
        .then(data => 
            setResultState({
                resultStates: data
        })
        )
    }, []);
    if(!(resultStates.resultStates instanceof Array)){
        return null
    }
    let result = [0,0,0,0,0]
    resultStates.resultStates.forEach(element => {
        switch(element.answer){
            case '1':
                result[0]++
                break;
            case '2':
                result[1]++
                break;
            case '3':
                result[2]++
                break;
            case '4':
                result[3]++
                break;
            case '5':
                result[4]++
                break;
        }
    });
    
    for(let i = 0; i < 5; i++) {
        if(resultStates.resultStates.length == 0) {
            result[i] = parseInt(result[i] * 100)
        } else {
            result[i] = parseInt(result[i] * 100 / resultStates.resultStates.length)
        }
        
    }
    let dia = [0, 0, 0, 0, 0]
    for(let i = 0; i < 5; i++) {
        if(result[i] < 5){
            dia[i] = 90
        } else if(result[i] < 10) {
            dia[i] = 120
        } else if(result[i] < 50){
            dia[i] = result[i] * 10
        } else {
            dia[i] = result[i] * 8
        }
    }
    // const swapRound = () => {
    // let indexOfMax = 0;
    // let tempMax = dia[0];
    // for(let i = 0; i < dia.length; i ++){
    //     if(dia[i] > tempMax){
    //         tempMax = dia[i];
    //         indexOfMax = i;
    //     }
    // }
    // let roundbox = document.getElementById('round-box')
    // console.log(roundbox.children[2])
    // roundbox.insertBefore(roundbox.children[2], roundbox.children[indexOfMax])
    // }

    return (
    <div id='round-box' style={{position:'relative', height: 300, width: '50%', paddingTop: 100, marginLeft: '25%'}}>
        <div className={classes.round} style={{float:'left', width: dia[0], height: dia[0], backgroundColor: '#000000'}}>
            <div >
                <p className={classes.text} style={{ fontSize: dia[0] > 120?'2vw':'1vw'}}>None</p>
                <p className={classes.text}>{result[0]}%</p>
            </div>
        </div>
        <div className={classes.round} style={{float:'right', width: dia[1], height: dia[1], backgroundColor: '#FFB118'}}>
            <div >
                <p className={classes.text} style={{ fontSize: dia[1] > 120?'2vw':'1vw'}}>A few</p>
                <p className={classes.text}>{result[1]}%</p>
            </div>
        </div>
        <div className={classes.round} style={{float:'none',  width: dia[4], height: dia[4], backgroundColor: '#4f0dd2'}}>
            <div >
                <p className={classes.text} style={{ fontSize: dia[4] > 120?'2vw':'1vw'}}>Many</p>
                <p className={classes.text}>{result[4]}%</p>
            </div>
        </div>
        <div className={classes.round} style={{float:'left',  width: dia[3], height: dia[3], backgroundColor: '#8153DA'}}>
            <div >
                <p className={classes.text} style={{ fontSize: dia[3] > 120?'2vw':'1vw'}}>Some</p>
                <p className={classes.text}>{result[3]}%</p>
            </div>
        </div>

        <div className={classes.round} style={{float:'right',  width: dia[2], height: dia[2], backgroundColor: '#D6C3FE'}}>
            <div >
                <p className={classes.text} style={{ fontSize: dia[2] > 120?'2vw':'1vw'}}>Don't Know</p>
                <p className={classes.text}>{result[2]}%</p>
            </div>
        </div>

    </div>
    )
}





export default function SurveyBubble() {
    const classes = useStyles();
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (arg, e) => {
        setSubmitted(true)
        e.preventDefault()
        var csrftoken = getCookie('csrftoken')
        var url = 'http://18.212.4.212:8000/api/question1-create/'
        fetch(url, {
            method:'POST',
            headers:{
              'Content-type':'application/json',
              'X-CSRFToken':csrftoken,
            },
            body:JSON.stringify({
                id:null, 
                answer:arg,
              })
          }).then((response)  => {
          }).catch(function(error){
            console.log('ERROR:', error)
          })
    }
    


  const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
    }

    return (
        <div className={classes.root}>
            <h3 style={{ textAlign: 'center' }}>
                To what extent do you think you have a better understanding of the barriers in Black girls’ life now?
            </h3>
            <Grid container spacing={3}  >

                {
                    submitted ? (<Result />) : (
                        <>
                            <Grid item xs={6} className={classes.container} >
                                <Button variant="outlined" className={classes.button} onClick={handleSubmit.bind(this, 1)}>1. None</Button>
                            </Grid>
                            <Grid item xs={6} className={classes.container}>
                                <Button variant="outlined" className={classes.button} onClick={handleSubmit.bind(this, 2)}>2. A Few</Button>
                            </Grid>
                            <Grid item xs={6} className={classes.container}>
                                <Button variant="outlined" className={classes.button} onClick={handleSubmit.bind(this, 3)}>3. Don't Know</Button>
                            </Grid>
                            <Grid item xs={6} className={classes.container}>
                                <Button variant="outlined" className={classes.button} onClick={handleSubmit.bind(this, 4)}>4. Some</Button>
                            </Grid>
                            <Grid item xs={6} className={classes.container}>
                                <Button variant="outlined" className={classes.button} onClick={handleSubmit.bind(this, 5)}>5. Many</Button>
                            </Grid>
                        </>
                    )

                }

            </Grid>

        </div >
    )
}
