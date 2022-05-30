import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AddRoom from '../../AddRoom';


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



const RowRoom = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open1 = Boolean(anchorEl);
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

    return (
        <div className='popup-detail-apartment-row-two-content'>
            <div className='popup-detail-apartment-row-two-content-colum-one'>
                <h3 className='popup-detail-apartment-row-two-content-colum-one-name-room'>Phòng Deluxe</h3>
                <p className='popup-detail-apartment-row-two-content-colum-one-number-people'>Sức chứa: 2 người</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className='popup-detail-apartment-row-two-content-colum-two'>
                    <p className='popup-detail-apartment-row-two-content-colum-two-price'>3.142.152VNĐ</p>
                    <p className='popup-detail-apartment-row-two-content-colum-two-status'>Đang thuê</p>
                </div>
                <FontAwesomeIcon
                        className="posts-container-row-one-icon"
                        onClick={handleClickMenu}
                        aria-controls={open1 ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open1 ? 'true' : undefined}
                        icon="fa-solid fa-ellipsis-vertical"
                        style={{ width: "30px", height: "30px !important" }}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open1}
                        onClose={handleCloseMenu3}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseMenu1} >Chỉnh sửa</MenuItem>
                        <MenuItem onClick={handleCloseMenu2}>Xóa</MenuItem>
                    </Menu>
            </div>

            {/* chỉnh sửa */}
            <Dialog onClose={handleClose1} aria-labelledby="customized-dialog-title" open={open2} fullWidth maxWidth='md' >
                <DialogTitle id="customized-dialog-title" onClose={handleClose1}>
                    Chỉnh sửa phòng
                </DialogTitle>
                <DialogContent dividers>
                            <AddRoom/>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose1} >
                        Hủy
                    </Button>

                    <Button autoFocus onClick={handleCloseAndSave} >
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
    )
}

export default RowRoom