import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import AddRoom from "../AddRoom";

import "./addRoomForApartment.scss";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

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
  const [apartment, setApartment] = React.useState("");

  const handleChange = (event) => {
    setApartment(event.target.value);
  };

  return (
    <>
      <div className="add-room-apartment">
        <p onClick={handleClickOpen}>Thêm phòng</p>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
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
          <Button autoFocus onClick={handleClose}>
            Hủy
          </Button>
          <Button autoFocus onClick={handleClose}>
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddRoomForApartment;
