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

export default function SceneVision1(props) {
  const { handleSwitch } = props;
  const [open, setOpen] = React.useState(false);
  const [openPolice, setOpenPolice] = React.useState(false);
  const [openJustice, setOpenJustice] = React.useState(false);

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
              • Ensure adequate mental health resources by placing behavioral health professionals (social workers,
              counselors, psychologists, therapists) in every school.
            </p>
            <p style={{ fontWeight: 400 }}>
              • Train all school personnel in trauma-informed practices, in techniques to address implicit biases, and
              on the long-term negative consequences of involvement with the justice system, even for minor infractions.
            </p>
            <p style={{ fontWeight: 400 }}>
              • End “zero tolerance” policies and eliminate suspension of elementary students.
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
            <p className="modal-title">For Police:</p>
            <p style={{ fontWeight: 400 }}>
              • Train all police in trauma-informed practices and in techniques to address implicit biases.
            </p>
            <p style={{ fontWeight: 400 }}>
              • Work with the police and district attorney to develop pre-arrest diversion, as has been done in
              Philadelphia (currently Allegheny County uses only post-arrest diversion), which has been shown to reduce
              future delinquency compared with traditional processing.
            </p>
            <p style={{ fontWeight: 400 }}>
              • Ensure police and magistrates can access information on available community resources and supports,
              perhaps via a 24-hour hotline, so that they will not feel they must refer youth to juvenile justice to
              receive needed supports and services.
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
            <p className="modal-title">Within The Justice System:</p>
            <p style={{ fontWeight: 400 }}>
              • Train all justice system personnel, including judges, magistrates, and probation officers, in
              trauma-informed practices training and in techniques to address implicit biases.
            </p>
            <p style={{ fontWeight: 400 }}>
              • Support the holistic representation of youth, which means providing social workers and psychologists to
              collaborate with defense attorneys in ensuring that youths’ needs are met.
            </p>
            <p style={{ fontWeight: 400 }}>
              • Develop programming for girls similar to the Community Intensive Supervision Program (CISP, which is
              currently only available to boys) so that there are alternatives to residential placement for adjudicated
              girls.
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

  return (
    <div style={{ display: 'block', position: 'relative' }}>
      <img src="./imgs/vision.svg" alt="Scene" style={{ width: '60vw', marginLeft: '5vw', userSelect: 'none' }} />
      <InteractiveItem name="light" clickAction={handleSwitch} top={-8} left={43} width={10} />
      <InteractiveItem name="balance" clickAction={handleOpenJustice} top={36} left={62} width={8} />
      <InteractiveItem name="document" clickAction={handleOpenPolice} top={25} left={18} width={3} />
      <InteractiveItem name="school" clickAction={handleClickOpen} top={65} left={68} width={6} />
      <SchoolDialog />
      <PoliceDialog />
      <JusticeDialog />
    </div>
  );
}
