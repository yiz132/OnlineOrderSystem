import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import DashBoard from './Dashboard';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

export default function Main(){
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [currentPage, setCurrentPage] = React.useState("main");
    const [phoneModalOpen, setPhoneModalOpen] = React.useState(false);
    const [deliveryModalOpen, setDeliveryModalOpen] = React.useState(false);

    let page;
    if (currentPage === 'main') {
        page = <Grid container style={{"top" : '40%'}} className={classes.root} spacing={2}>
        <Grid item xs={4}>
        <Button size="large" variant="contained" onClick={() => setCurrentPage("dashboard")}>Walk in</Button>
        </Grid>
        <Grid item xs={4}>
        <Button size="large" variant="contained" onClick={() => setPhoneModalOpen(true)}>Phone</Button>
        </Grid>
        <Grid item xs={4}>
        <Button size="large" variant="contained">Delivery</Button>
        </Grid>
        </Grid>;
    }
    else if (currentPage === 'dashboard') {
        page = <DashBoard></DashBoard>
    }

    return <Container maxWidth="lg">
    {page}
    <Dialog open={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPhoneModalOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {setPhoneModalOpen(false);
                                    setCurrentPage('dashboard')}} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
        
    </Container>
}