import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    marginLeft: '10%',
    marginTop: 200,
    paddingBottom:200,
  },
  margin: {
    height: theme.spacing(3),
  },
  button: {
    width: '16vw',
    height: '4vw',
    fontSize: '1.5vw',
    borderRadius: '2vw',
    fontWeight: 400,
    border: '2px solid #1b152b'
},
}));

const marks = [
  {
    value: 0,
    label: "I Don't Care",
  },
  {
    value: 100,
    label: 'Fully Support',
  },
];

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
  root: {
    color: '#8d70c5',
    height: 100,
    paddingTop: 100
  },
  thumb: {
    height: 48,
    width: 48,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -20,
    marginLeft: -24,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 28px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  markLabel: {
    top:120,
    fontSize: '2vw',
  }
})(Slider);
let currentvalue = 0
const handleSlider = (e, value) =>{
  currentvalue = value
}

const handleSubmit = (e) => {
  e.preventDefault()
  document.getElementById('slider-button').style.visibility = 'hidden'
  var csrftoken = getCookie('csrftoken')
  var url = 'http://18.212.4.212:8000/api/question2-create/'
  fetch(url, {
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'X-CSRFToken':csrftoken,
      },
      body:JSON.stringify({
          id:null, 
          answer:currentvalue,
        })
    }).then((response)  => {
      fetchTasks()
    }).catch(function(error){
      console.log('ERROR:', error)
    })
}
let average = 0
const fetchTasks = () => {
  console.log('Fetching...')

  fetch('http://18.212.4.212:8000/api/question2-list/')
  .then(response => response.json())
  .then(data => 
    {data.forEach(element => {
      average = parseInt(element.answer) + average
    });
    average = parseInt(average / data.length)
    document.getElementById('sliderlabel').style.visibility = 'visible'
    document.getElementById('sliderlabel').style.marginLeft = 'calc(' + average + ' * 0.8vw - 3%)'
    document.getElementById('sliderlabeltext').innerHTML = average
  }
  )
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

export default function ContinuousSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} style={{paddingTop: 200}}/>
      <h3 style={{ textAlign: 'center' }}>
        To what extent would you be willing to support Black girls’ lives?
      </h3>
      <Typography gutterBottom style={{marginBottom: -100}}>
        <div id='sliderlabel' style={{visibility: 'hidden', position: 'relative', width: '75', height: '90'}}>
        <img
          src="./imgs/sliderlabel.png"
          alt="Scene"
          style={{ width: '5vw', userSelect: 'none' }}
          />
          <span style={{position: 'absolute', color: '#efeeee', fontSize: '1vw', userSelect: 'none', marginLeft: '-4.4vw', marginTop: '1vw'}}>Average</span>
          <span id='sliderlabeltext' style={{position: 'absolute', color: '#efeeee', fontSize: '2vw', userSelect: 'none', marginLeft: '-3.7vw', marginTop: '2vw'}}></span>
        </div>
      </Typography>
      
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={70} marks={marks} onChange = {handleSlider}/>
      <div  style={{ textAlign: 'center', height: '100%'}}><Button id='slider-button' variant="outlined" className={classes.button} onClick={handleSubmit}>submit</Button></div>
      
    </div>
  );
}
