import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import InteractiveItem from '../InteractiveItem';


export default function Scene3(props) {
    const { handleSwitch } = props;
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [openArt, setOpenArt] = useState(false);

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if (index === 2) setIndex(index + 1)
    };

    const handleOpenArt = () => {
        setOpenArt(true);
    };

    const handleCloseArt = () => {
        setOpenArt(false);
        if (index === 1) setIndex(index + 1)

    };

    const handleImageChange = () => {
        if (index == 3) return
        setIndex(index + 1)
    }

    const SolutionDialog = () => {
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
                    <DialogContentText id="alert-dialog-description" style={{ padding: '1rem' }}>
                        <p className="modal-title">Solutions:</p>
                        <p style={{ fontWeight: 400 }}>
                            Staff of schools and youth serving agencies should work to create trauma-
                            informed and trauma-responsive cultures, including providing training on

                            recognizing signs of trauma and abuse, providing supportive responses,
                            and effectively connecting victims of abuse or trauma with counseling,
                            advocacy and medical care.
            </p>

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

    const ArtDialog = () => {
        return (
            <Dialog
                open={openArt}
                onClose={handleCloseArt}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <IconButton onClick={handleCloseArt} style={{ marginLeft: '95%' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ padding: '1rem' }}>
                        <p className="modal-title">Artworks of Black Girls</p>
                        <p style={{ fontWeight: 400 }}>
                            Areas of focus should include: alternative approaches to
                            school discipline; compliance with federal recommendations about special education for
                            students with disabilities; compliance with federal guidance on reducing racial disparities
                            in the administration of school discipline; availability of guidance and support for students
                            experiencing personal difficulty; presence of law enforcement and probation staff in schools;
                            training for teachers and administrators.
            </p>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseArt} color="primary" autoFocus>
                        Got it
          </Button>
                </DialogActions>
            </Dialog>
        );
    };


    return (
        <div style={{ display: 'block', position: 'relative' }}>
            <animated.div style={fadeIn}>
                <img src={`./imgs/workshop-${index}.svg`} alt="Scene" style={{ width: '60vw', marginLeft: '5vw', userSelect: 'none' }} />

            </animated.div>
            <InteractiveItem name="watercolor" style={{ animation: index > 2 && 'none' }} clickAction={handleImageChange} top={47} left={55} width={5} />
            <InteractiveItem name="triangle" style={{ display: index < 2 && 'none' }} clickAction={handleClickOpen} top={28} left={30} width={5} />
            <InteractiveItem name="rainbow" style={{ display: index < 1 && 'none' }} clickAction={handleOpenArt} top={55} left={45} width={6} />
            <SolutionDialog />
            <ArtDialog />
        </div>
    );
}
