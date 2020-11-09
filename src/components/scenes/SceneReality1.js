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
import BarChartBully from '../charts/BarChartBully';

export default function SceneReality1(props) {
  const { handleSwitch } = props;
  const [open, setOpen] = React.useState(false);
  const [openBully, setOpenBully] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOpenBully = () => {
    setOpenBully(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseBully = () => {
    setOpenBully(false);
  };

  const ReferralDialog = () => {
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
          <Barchart />
          <DialogContentText id="alert-dialog-description" style={{ marginTop: -150, padding: '1rem' }}>
            <p className="modal-title">Juvenile Justice Referral Rates</p>
            <p className="modal-subtitle">per 1000 girls, aged 10-17 (2017)</p>
            <p style={{ fontWeight: 400 }}>
              Nationally, Black girls are referred to juvenile justice 2.5 times as often as White girls.
              <br />- The referral rate for Black girls in Allegheny County is about 50% higher than Black girls’
              national rate.
              <br />- The referral rate for White girls in Allegheny County is more than 50% lower than White girls’
              national rate.
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
  const BullyDialog = () => {
    return (
      <Dialog
        open={openBully}
        onClose={handleCloseBully}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <IconButton onClick={handleCloseBully} style={{ marginLeft: '95%' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <BarChartBully />
          <DialogContentText id="alert-dialog-description" style={{ marginTop: -150, padding: '1rem' }}>
            <p className="modal-title">Proportion of students harassed or bullied</p>
            <p className="modal-subtitle">by race (2015-2016)</p>
            <p style={{ fontWeight: 400 }}>
              Black students are disproportionately likely to be victims of harassment or bullying in school, making up
              35% of the students who reported being bullied or harassed on the basis of their race.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBully} color="primary" autoFocus>
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <div style={{ display: 'block', position: 'relative' }}>
      <img
        src="./imgs/bully_reality.svg"
        alt="Scene"
        style={{ width: '60vw', marginLeft: '5vw', userSelect: 'none' }}
      />
      <InteractiveItem name="light" clickAction={handleSwitch} top={-8} left={43} width={10} />
      <InteractiveItem name="car" clickAction={handleClickOpen} top={48} left={12} width={10} />
      <InteractiveItem name="paperplane" clickAction={handleOpenBully} top={28} left={55} width={6} />
      <ReferralDialog />
      <BullyDialog />
    </div>
  );
}
