import React, { useContext, useEffect, useState } from 'react'
import { withStyles, makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AddRoom from '../AddRoom';
import "./addRoomForApartment.scss"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



const AddRoomForApartment = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const classes = useStyles();
  const [apartment, setApartment] = React.useState('');

  const handleChange = (event) => {
    setApartment(event.target.value);
  };


    return (
        <>
            <div className='add-room-apartment'>
                <p onClick={handleClickOpen}>Thêm phòng</p>
            </div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth maxWidth='md' >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Thêm phòng
                </DialogTitle>
                <DialogContent dividers>
                    <div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="apartment">Apartment</InputLabel>
                            <Select
                                labelId="apartment"
                                id="select-apartment"
                                value={apartment}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value={10}>LuviStay</MenuItem>
                                <MenuItem value={20}>Bảo Ngọc</MenuItem>
                                <MenuItem value={30}>LK Hotel</MenuItem>
                            </Select>
                        </FormControl>
                        <AddRoom />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} >
                        Hủy
                    </Button>
                    <Button autoFocus onClick={handleClose} >
                        Thêm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddRoomForApartment