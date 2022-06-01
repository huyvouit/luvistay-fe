import React, { useState } from "react";
import img_test from "../../../../assets/images/profile.png";
import "./hostApartment.scss";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RowRoom from "./RowRoom";
import TextField from "@mui/material/TextField";

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

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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

const currencies = [
  {
    value: "hotel",
    label: "Khách sạn",
  },
  {
    value: "motel",
    label: "Nhà nghỉ",
  },
  {
    value: "resort",
    label: "Resort",
  },
];

const HostApartment = ({ apartment }) => {
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

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
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpen(true);
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

  const [currency, setCurrency] = React.useState("hotel");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  //ảnh
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          className="popup-add-apartment-input-img-result-img"
          src={photo}
          alt=""
          key={photo}
        />
      );
    });
  };

  return (
    <>
      <div className="host-apartment">
        <img className="host-apartment-img" src={apartment?.thumbnail} alt="" />
        <div className="host-apartment-box">
          <h4 className="host-apartment-box-title">
            <span>Tên khách sạn: </span>
            {apartment?.name}
          </h4>
          <p>
            <span>Địa chỉ: </span>
            {`${apartment?.address?.apartmentNumber} 
        ${apartment?.address?.street}, ${apartment?.address?.district}, 
        ${apartment?.address?.province}`}
          </p>
          <p>
            <span>Đánh giá: </span>
            {apartment?.rating} sao
          </p>
          <p>
            <span>Số lượng phòng: </span>
            {apartment?.rooms?.length}
          </p>
        </div>
        <div className="host-apartment-show-detail">
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
            <MenuItem onClick={handleCloseMenu}>Chi tiết</MenuItem>
            <MenuItem onClick={handleCloseMenu1}>Chỉnh sửa</MenuItem>
            <MenuItem onClick={handleCloseMenu2}>Xóa</MenuItem>
          </Menu>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {apartment?.name}
        </DialogTitle>
        <DialogContent dividers>
          <div className="popup-detail-apartment">
            <div className="popup-detail-apartment-row-one">
              <img
                className="popup-detail-apartment-row-one-img"
                src={apartment?.thumbnail}
                alt=""
              />
              <div
                className="popup-detail-apartment-row-one-description"
                dangerouslySetInnerHTML={{ __html: apartment?.description }}
              ></div>
            </div>
            <div className="popup-detail-apartment-row-two">
              <h4 className="popup-detail-apartment-row-two-title">
                Danh sách phòng hiện có
              </h4>
              {apartment?.rooms?.map((item, index) => (
                <RowRoom key={index} room={item} />
              ))}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>

      {/* chỉnh sửa */}
      <Dialog
        onClose={handleClose1}
        aria-labelledby="customized-dialog-title"
        open={open2}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose1}>
          Chỉnh sửa thông tin
        </DialogTitle>
        <DialogContent dividers>
          <div className="popup-add-apartment">
            <div className="popup-add-apartment-box">
              <TextField
                className="popup-add-apartment-box-name"
                id="name-apartment"
                label="Tên căn hộ"
                variant="outlined"
                value={apartment?.name}
              />
              <p className="popup-add-apartment-box-p"></p>
              <TextField
                className="popup-add-apartment-box-type"
                id="outlined-select-currency"
                select
                label="Loại apartment"
                value={currency}
                onChange={handleChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="popup-add-apartment-box">
              <TextField
                className="popup-add-apartment-box-rate"
                id="rating"
                label="Đánh giá của căn hộ"
                variant="outlined"
              />
            </div>
            <div className="popup-add-apartment-box">
              <TextField
                className="popup-add-apartment-box-number-room"
                id="apartment-number"
                label="Số nhà"
                variant="outlined"
              />
              <p className="popup-add-apartment-box-p"></p>
              <TextField
                className="popup-add-apartment-box-street"
                id="street"
                label="đường"
                variant="outlined"
              />
            </div>
            <div className="popup-add-apartment-box">
              <TextField
                className="popup-add-apartment-box-one"
                id="district"
                label="quận\huyện"
                variant="outlined"
              />
              <p className="popup-add-apartment-box-p"></p>
              <TextField
                className="popup-add-apartment-box-one"
                id="province"
                label="tỉnh\thành phố"
                variant="outlined"
              />
              <p className="popup-add-apartment-box-p"></p>
              <TextField
                className="popup-add-apartment-box-one"
                id="country"
                label="Quốc gia"
                variant="outlined"
              />
            </div>
            <TextField
              className="popup-add-apartment-description"
              multiline
              rows={5}
              id="description"
              label="Mô tả căn hộ"
              variant="outlined"
            />

            <div className="popup-add-apartment-input-img">
              <input
                className="popup-add-apartment-input-img-input"
                type="file"
                id="file"
                multiple
                onChange={handleImageChange}
              />
              <div className="popup-add-apartment-input-img-label-holder">
                <label
                  htmlFor="file"
                  className="popup-add-apartment-input-img-label-holder-label"
                >
                  <i className="material-icons">Thêm hình</i>
                </label>
              </div>
              <div className="popup-add-apartment-input-img-result">
                {renderPhotos(selectedFiles)}
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose1}>
            Hủy
          </Button>

          <Button autoFocus onClick={handleCloseAndSave} color="primary">
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
            <h3>Bạn có thật sự muốn xóa khách sạn này ?</h3>
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
    </>
  );
};

export default HostApartment;