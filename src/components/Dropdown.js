import React from 'react';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';

const trackingId = "UA-180581882-1";

export default function Dropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    ReactGA.initialize(trackingId);

    const handleClick = (event) => {
        ReactGA.event({
            category: `Click`,
            action: `User clicked BGEA website`,
        });
        window.location.href = 'https://www.gwensgirls.org/bgea/'
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div >
            <Button id='join-us' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{
                marginTop: '5px',
                fontFamily: 'MADE Coachella Thin', padding: '10px 20px 10px 20px', color: '#efeeee', textTransform: 'none', border: '2px solid #efeeee',
                borderRadius: '100px', boxSizing: 'border-box'
            }}>
                Join Us
                {/* <ArrowDropDownIcon /> */}
            </Button>
            {/* <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu> */}
        </div>
    );
}