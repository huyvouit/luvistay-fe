import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AddRoom from "../../AddRoom";
import { formatter } from "../../../../../helper/format";
import { postUpdateRoom } from "../../../../../redux/Api/apartment";
import { toast } from "react-toastify";

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

const RowRoom = ({ room, apartment }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [formRoom, setFormRoom] = useState({
    roomId: room?._id || "",
    name: room?.name || "",
    apartmentId: room?.apartmentId,
    price: room?.price || "",
    square: room?.square || "",
    capacity: room?.capacity || "",
    rating: room?.rating || "",
  });
  const handleClose1 = () => {
    setOpen2(false);
  };

  const handleCloseAndSave = () => {
    setOpen2(false);
  };

  const handleClose2 = () => {
    setOpen3(false);
  };

  const handleCloseAndDelete = () => {
    setOpen3(false);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu1 = () => {
    setAnchorEl(null);
    setOpen2(true);
  };

  const handleCloseMenu2 = () => {
    setAnchorEl(null);
    setOpen3(true);
  };
  const handleCloseMenu3 = () => {
    setAnchorEl(null);
  };

  const handleUpdateRoom = async () => {
    const body = { ...formRoom };
    console.log(body);
    if (postUpdateRoom(body)) {
      toast.success("Câp nhật phòng thành công", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setOpen2(false);
    } else {
      toast.success("Đã có lỗi xảy ra nha!", {
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
    <div className="popup-detail-apartment-row-two-content">
      <div className="popup-detail-apartment-row-two-content-colum-one">
        <h3 className="popup-detail-apartment-row-two-content-colum-one-name-room">
          {room?.name}
        </h3>
        <p className="popup-detail-apartment-row-two-content-colum-one-number-people">
          Sức chứa: {room?.capacity} người
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="popup-detail-apartment-row-two-content-colum-two">
          <p className="popup-detail-apartment-row-two-content-colum-two-price">
            {formatter.format(room?.price)}
          </p>
        </div>
        <FontAwesomeIcon
          className="posts-container-row-one-icon"
          onClick={handleClickMenu}
          aria-controls={open1 ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open1 ? "true" : undefined}
          icon="fa-solid fa-ellipsis-vertical"
          style={{ width: "30px", height: "30px !important" }}
        />

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open1}
          onClose={handleCloseMenu3}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleCloseMenu1}>Chỉnh sửa</MenuItem>
          <MenuItem onClick={handleCloseMenu2}>Xóa</MenuItem>
        </Menu>
      </div>

      {/* chỉnh sửa */}
      <Dialog
        onClose={handleClose1}
        aria-labelledby="customized-dialog-title"
        open={open2}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose1}>
          Chỉnh sửa phòng
        </DialogTitle>
        <DialogContent dividers>
          <AddRoom formRoom={formRoom} setFormRoom={setFormRoom} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose1}>
            Hủy
          </Button>

          <Button autoFocus onClick={handleUpdateRoom}>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>

      {/* xóa */}

      <Dialog
        open={open3}
        onClose={handleClose2}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <div className="create-posts">
            <h3>Bạn có thật sự muốn xóa phòng này ?</h3>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Hủy
          </Button>
          <button className="button-posts" onClick={handleCloseAndDelete}>
            Xóa
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RowRoom;
