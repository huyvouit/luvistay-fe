import React from 'react'
import "./detailOrder.scss"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import img_test from "../../../assets/images/profile.png"



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

const Detail = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='detail-row' onClick={handleClickOpen} >
        <p className='detail-colum-one'>#1306552651656513516845</p>
        <p className='detail-colum-one'>30/05/2022 - 05/06/2022</p>
        <p className='detail-colum-two'>LuviStay</p>
        <p className='detail-colum-two'>5.000.000 VNĐ</p>
      </div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth maxWidth='md' >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Chi tiết hóa đơn
        </DialogTitle>
        <DialogContent dividers>
          <div className='popup-detail-order'>
            <h4 className='popup-detail-order-title'><span>Mã hóa đơn: </span>#5412154dsfg1dfsghgfdshfdgh</h4>
            <div className='popup-detail-order-information'>
              <p><span>Tên người đặt: </span>Nguyễn Trà Vi</p>
              <p><span>SĐT:</span> 0123456789</p>
              <p><span>Gmail: </span>10đ@gmail.com</p>
            </div>
            <div className='popup-detail-order-container'>
              <img className='popup-detail-order-container-img' src={img_test}/>
              <div className='popup-detail-order-container-description'>
                <p><span>Tên khách sạn: </span>LuviStay</p>
                <div className='popup-detail-order-container-description-box'>
                  <p><span>Ngày nhận phòng: </span>10/10/2022</p>
                  <p><span>Ngày trả phòng: </span>18/10/2022</p>
                </div>
                <div className='popup-detail-order-container-description-box'>
                  <p><span>Số phòng đặt: </span>1</p>
                  <p><span>Số lượng người: </span>7</p>
                </div>
                <div className='popup-detail-order-container-description-box'>
                  <p><span>Tên phòng: </span>123</p>
                  <p><span>Tên phòng: </span>123</p>
                  <p><span>Tên phòng: </span>123</p>
                </div>
                <p><span>Ghi chú: </span>Phòng này không có Vi</p>
                <p><span>Tổng tiền: </span>10000000 VNĐ</p>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="red">
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Detail