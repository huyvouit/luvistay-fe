import React from 'react'
import img_test from "../../../../assets/images/profile.png"
import "./hostApartment.scss"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';



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

const HostApartment = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='host-apartment'>
                <img className='host-apartment-img' src={img_test} />
                <div className='host-apartment-box'>
                    <h4 className='host-apartment-box-title'><span>Tên khách sạn: </span>LuviStay</h4>
                    <p><span>Địa chỉ: </span>Khu phố 6jjkshdfbsdf uosdhfbsljhdf slidfuh</p>
                    <p><span>Đánh giá: </span>5 sao</p>
                    <p><span>Tổng phòng cho thuê: </span>7</p>
                    <p><span>Số phòng đang thuê: </span>5</p>
                </div>
                <div className='host-apartment-show-detail'>
                    <h5 className='host-apartment-show-detail-btn' onClick={handleClickOpen} >Xem chi tiết</h5>
                    <div className='host-apartment-show-detail-group'>
                    <h5 className='host-apartment-show-detail-group-delete'>Xóa</h5>
                    <h5 className='host-apartment-show-detail-group-edit'>Sửa</h5>
                    </div>
                </div>
            </div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth maxWidth='md' >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Khách sạn LuviStay
                </DialogTitle>
                <DialogContent dividers>
                    <div className='popup-detail-apartment'>
                        <div className='popup-detail-apartment-row-one'>
                            <img className='popup-detail-apartment-row-one-img' src={img_test}/>
                            <p className='popup-detail-apartment-row-one-description'>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Nisl tincidunt eget nullam non. 
                            Quis hendrerit dolor magna eget est lorem ipsum dolor sit. 
                            Volutpat odio facilisis mauris sit amet massa. 
                            Commodo odio aenean sed adipiscing diam donec adipiscing tristique. 
                            Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. 
                            Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. 
                            In hac habitasse platea dictumst quisque sagittis purus. 
                            Pulvinar elementum integer enim neque volutpat ac.
                            </p>
                        </div>
                        <div className='popup-detail-apartment-row-two'>
                            <h4 className='popup-detail-apartment-row-two-title'>Danh sách phòng hiện có</h4>

                            {/* lặp chỗ này nhé */}
                            <div className='popup-detail-apartment-row-two-content'>
                                <div className='popup-detail-apartment-row-two-content-colum-one'>
                                    <h3 className='popup-detail-apartment-row-two-content-colum-one-name-room'>Phòng Deluxe</h3>
                                    <p className='popup-detail-apartment-row-two-content-colum-one-number-people'>Sức chứa: 2 người</p>
                                </div>

                                <div className='popup-detail-apartment-row-two-content-colum-two'>
                                    <p className='popup-detail-apartment-row-two-content-colum-two-price'>3.142.152VNĐ</p>
                                    <p className='popup-detail-apartment-row-two-content-colum-two-status'>Trống</p>
                                </div>
                            </div>

                            <div className='popup-detail-apartment-row-two-content'>
                                <div className='popup-detail-apartment-row-two-content-colum-one'>
                                    <h3 className='popup-detail-apartment-row-two-content-colum-one-name-room'>Phòng Deluxe</h3>
                                    <p className='popup-detail-apartment-row-two-content-colum-one-number-people'>Sức chứa: 2 người</p>
                                </div>

                                <div className='popup-detail-apartment-row-two-content-colum-two'>
                                    <p className='popup-detail-apartment-row-two-content-colum-two-price'>3.142.152VNĐ</p>
                                    <p className='popup-detail-apartment-row-two-content-colum-two-status'>Đang thuê</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} >
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default HostApartment