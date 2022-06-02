import React from "react";
import "./detailOrder.scss";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import img_test from "../../../assets/images/profile.png";
import Moment from "react-moment";
import { formatter } from "../../../helper/format";

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

const Detail = ({ order }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="detail-row" onClick={handleClickOpen}>
        <p className="detail-colum-one">
          <Moment format="DD/MM/YYYY ">
            {order?.bookingCalendar[0]?.beginDate}
          </Moment>
          -{" "}
          <Moment format="DD/MM/YYYY ">
            {order?.bookingCalendar[0]?.endDate}
          </Moment>
        </p>
        <p className="detail-colum-two">{order?.apartmentId?.name}</p>
        <p className="detail-colum-three">
          {formatter.format(order?.totalCost)}
        </p>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Chi tiết hóa đơn
        </DialogTitle>
        <DialogContent dividers>
          <div className="popup-detail-order">
            <h4 className="popup-detail-order-title">
              <span>Mã hóa đơn: </span>#{order?._id}
            </h4>
            <div className="popup-detail-order-information">
              <p>
                <span>Tên người đặt: </span>
                {order?.userBookingInfos?.userName}
              </p>
              <p>
                <span>SĐT: </span>
                {order?.userBookingInfos?.phone}
              </p>
              <p>
                <span>Gmail: </span>
                {order?.userBookingInfos?.email}
              </p>
            </div>
            <div className="popup-detail-order-container">
              <img
                className="popup-detail-order-container-img"
                src={order?.apartmentId?.thumbnail}
                alt=""
              />
              <div className="popup-detail-order-container-description">
                <p>
                  <span>Tên khách sạn: </span>
                  {order?.apartmentId?.name}
                </p>
                <div className="popup-detail-order-container-description-box">
                  <p>
                    <span>Ngày nhận phòng: </span>{" "}
                    <Moment format="DD/MM/YYYY ">
                      {order?.bookingCalendar[0]?.beginDate}
                    </Moment>
                  </p>
                  <p>
                    <span>Ngày trả phòng: </span>{" "}
                    <Moment format="DD/MM/YYYY ">
                      {order?.bookingCalendar[0]?.endDate}
                    </Moment>
                  </p>
                </div>
                <div className="popup-detail-order-container-description-box">
                  <p>
                    <span>Số phòng đặt: </span> {order?.bookingCalendar?.length}
                  </p>
                  <p>
                    <span>Số lượng người: </span>
                    {order?.totalBookingPeople}
                  </p>
                </div>
                <div className="popup-detail-order-container-description-box">
                  {order?.bookingCalendar &&
                    order?.bookingCalendar.map((item, index) => {
                      return (
                        <p key={index}>
                          <span>Tên phòng: </span>
                          {item?.room?.name}
                        </p>
                      );
                    })}
                </div>
                <p>
                  <span>Ghi chú: </span>
                  {order?.note}
                </p>
                <p>
                  <span>Tổng tiền: </span>
                  {formatter.format(order?.totalCost)}
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Detail;
