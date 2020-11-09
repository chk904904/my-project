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

export default function SceneVision2(props) {
    const { handleSwitch } = props;
    const [open, setOpen] = React.useState(false);
    const [openPolice, setOpenPolice] = React.useState(false);
    const [openJustice, setOpenJustice] = React.useState(false);
    const [openQuote, setOpenQuote] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleOpenPolice = () => {
        setOpenPolice(true);
    };
    const handleOpenJustice = () => {
        setOpenJustice(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClosePolice = () => {
        setOpenPolice(false);
    };

    const handleCloseJustice = () => {
        setOpenJustice(false);
    };


    const SchoolDialog = () => {
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
                        <p className="modal-title">In Our Schools:</p>
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
    const PoliceDialog = () => {
        return (
            <Dialog
                open={openPolice}
                onClose={handleClosePolice}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <IconButton onClick={handleClosePolice} style={{ marginLeft: '95%' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ padding: '1rem' }}>
                        <p className="modal-title">For Systems:</p>
                        <p style={{ fontWeight: 400 }}>
                            Systems that serve youth should make public data (such as

                            discipline data, athletic opportunities, profiles of systems-
                            involved youth) available by gender, race and disability.

                            Lack of access to disaggregated data prevents full
                            understanding of the nature of some of the inequities that
                            Black girls experience.
            </p>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePolice} color="primary" autoFocus>
                        Got it
          </Button>
                </DialogActions>
            </Dialog>
        );
    };
    const JusticeDialog = () => {
        return (
            <Dialog
                open={openJustice}
                onClose={handleCloseJustice}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <IconButton onClick={handleCloseJustice} style={{ marginLeft: '95%' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ padding: '1rem' }}>
                        <p className="modal-title">Areas of Focus</p>
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
                    <Button onClick={handleCloseJustice} color="primary" autoFocus>
                        Got it
          </Button>
                </DialogActions>
            </Dialog>
        );
    };

    const QuoteDialog = () => {
        return (
            <Dialog
                open={openQuote}
                onClose={() => setOpenQuote(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <IconButton onClick={() => setOpenQuote(false)} style={{ marginLeft: '95%' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ padding: '1rem' }}>
                        <p className="modal-title">Suspensions</p>
                        <p style={{ fontWeight: 400 }}>
                            Suspensions from school are consistently associated with lower academic performance. As a suspended child’s education is interrupted, she is more likely to fall behind, to become disengaged from school,
                            she is more likely to fall behind, and to drop out.
            </p>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenQuote(false)} color="primary" autoFocus>
                        Got it
          </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return (
        <div style={{ display: 'block', position: 'relative' }}>
            <img src="./imgs/tidyscene.svg" alt="Scene" style={{ width: '60vw', marginLeft: '5vw', userSelect: 'none' }} />
            <InteractiveItem name="tidyscene-clock" clickAction={handleSwitch} top={6} left={50} width={5} />
            <InteractiveItem name="tidyscene-poster" clickAction={handleClickOpen} top={28} left={30} width={5} />
            <InteractiveItem name="tidyscene-map" clickAction={handleOpenPolice} top={25} left={71} width={8} />
            <InteractiveItem name="transcript" clickAction={handleOpenJustice} top={73} left={42} width={6} />
            <InteractiveItem name="triangularrule" clickAction={() => setOpenQuote(true)} top={36} left={38} width={4} />
            <SchoolDialog />
            <PoliceDialog />
            <JusticeDialog />
            <QuoteDialog />
        </div>
    );
}
