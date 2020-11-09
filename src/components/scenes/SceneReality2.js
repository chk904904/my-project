import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import InteractiveItem from '../InteractiveItem';
import Barchart from '../charts/BarChart';
import BarChartSuspension from '../charts/BarChartSuspension';
import BarChartSuspensionK12 from '../charts/BarChartSuspensionK12';


export default function SceneReality2(props) {
    const { handleSwitch } = props;
    const [open, setOpen] = React.useState(false);
    const [openSuspension, setOpenSuspension] = useState(false);
    const [openSuspensionK12, setOpenSuspensionK12] = useState(false);
    const [opened, setOpened] = useState(false)
    const [suspensionOpened, setSuspensionOpened] = useState(false);
    const [suspensionK12Opened, setSuspensionK12Opened] = useState(false)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleOpenSuspension = () => {
        setOpenSuspension(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpened(true)
    };

    const handleCloseSuspension = () => {
        setOpenSuspension(false);
        setSuspensionOpened(true)
    };

    const handleOpenSuspensionK12 = () => {
        setOpenSuspensionK12(true)
    }

    const handleCloseSuspensionK12 = () => {
        setOpenSuspensionK12(false)
        setSuspensionK12Opened(true)
    }

    const SuspensionK12Dialog = () => {
        return (
            <Dialog
                open={openSuspensionK12}
                onClose={handleCloseSuspensionK12}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <IconButton onClick={handleCloseSuspensionK12} style={{ marginLeft: '95%' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <BarChartSuspensionK12 />
                    <DialogContentText id="alert-dialog-description" style={{ padding: '1rem' }}>
                        <p className="modal-title">Rates of Suspensions for Girls in K-12 School by Race</p>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSuspensionK12} color="primary" autoFocus>
                        Got it
          </Button>
                </DialogActions>
            </Dialog>
        );
    };
    const SuspensionDialog = () => {
        return (
            <Dialog
                open={openSuspension}
                onClose={handleCloseSuspension}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <IconButton onClick={handleCloseSuspension} style={{ marginLeft: '95%' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>

                    <BarChartSuspension />
                    <DialogContentText id="alert-dialog-description" style={{ marginTop: -150, padding: '1rem' }}>
                        <p className="modal-title" style={{ marginTop: 150 }}>Out of School Suspension Rates for Girls in Select Pittsburgh Public Schools</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSuspension} color="primary" autoFocus>
                        Got it
          </Button>
                </DialogActions>
            </Dialog>
        );
    };
    const SuspensionMapDialog = () => {
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <IconButton onClick={handleClose} style={{ marginLeft: '95%' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>

                    <img src="./imgs/SuspensionMap.png" style={{ width: '60%', marginLeft: '20%' }} />
                    <DialogContentText id="alert-dialog-description" style={{ marginTop: -100, padding: '1rem' }}>
                        <p className="modal-title" style={{ marginTop: 150 }}>Likelihood of Suspensions for Black Girls, by Region</p>
                        <p>Nationwide Black girls are more likely to receive out-of-school suspensions than White girls. This map indicates the increased likelihood by region.</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Got it
          </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return (
        <div style={{ display: 'block', position: 'relative' }}>
            <img
                src="./imgs/messyscene.svg"
                alt="Scene"
                style={{ width: '60vw', marginLeft: '5vw', userSelect: 'none', }}
            />
            <InteractiveItem name="messyscene-clock" clickAction={handleSwitch} top={6} left={50} width={5} />
            {suspensionOpened ? <InteractiveItem name="tidyscene-poster" clickAction={handleOpenSuspension} top={28} left={30} width={5} /> : <InteractiveItem name="messyscene-poster" clickAction={handleOpenSuspension} top={50} left={14} width={3} />}
            {opened ? <InteractiveItem name="tidyscene-map" clickAction={handleClickOpen} top={25} left={71} width={8} /> : <InteractiveItem name="messyscene-map" clickAction={handleClickOpen} top={56} left={73} width={4} />}
            {suspensionK12Opened ? <InteractiveItem name="transcript" clickAction={handleOpenSuspensionK12} top={73} left={42} width={6} /> : <InteractiveItem name="transcript" clickAction={handleOpenSuspensionK12} top={80} left={36} width={6} />}

            <SuspensionK12Dialog />
            <SuspensionDialog />
            <SuspensionMapDialog />

        </div>
    );
}
