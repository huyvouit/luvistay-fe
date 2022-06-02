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
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postAddRoomForApartment } from "../../../../redux/Api/apartment";

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

const AddRoomForApartment = ({ listApartments, action }) => {
  const [open, setOpen] = React.useState(false);

  const [formRoom, setFormRoom] = useState({
    name: "",
    apartmentId: "",
    price: "",
    square: "",
    capacity: "",
    rating: "",
    bedName: "",
    thumbnail: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const handleAddRoomForApartment = async () => {
    const body = { ...formRoom };
    const res = await postAddRoomForApartment(body);
    if (res.success) {
      toast.success("Thêm mới phòng thành công", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      action();
      setOpen(false);
    } else {
      toast.error("Đã có lỗi xảy ra nha!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <>
      <div className="add-room-apartment">
        <p onClick={handleClickOpen}>Thêm phòng</p>
      </div>
      {open && (
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
                <InputLabel id="apartment">Căn hộ</InputLabel>
                <Select
                  labelId="apartment"
                  id="select-apartment"
                  label="Căn hô"
                  value={formRoom.apartmentId}
                  onChange={(e) =>
                    setFormRoom({ ...formRoom, apartmentId: e.target.value })
                  }
                >
                  {listApartments?.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item._id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <AddRoom formRoom={formRoom} setFormRoom={setFormRoom} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Hủy
            </Button>
            <Button autoFocus onClick={handleAddRoomForApartment}>
              Thêm
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default AddRoomForApartment;
