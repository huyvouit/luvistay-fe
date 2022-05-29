import React, { useContext, useState } from "react";
import Slideshow from "../../Apartment/SlideShow";
import PrimaryButton from "../../PrimaryButton";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./resultSearch.scss";

import { Box, Modal } from "@mui/material";
import { formatter } from "../../../helper/format";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/icons/logoluviStay.svg";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import { APP_ROUTE } from "../../../routes/app.routes";

const ResultSearch = ({
  info,
  listSelectedRoom,
  setListSelectedRoom,
  infoDate,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [openApartment, setOpenApartment] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSelectedRoom = (apartment, item) => {
    if (apartment._id === listSelectedRoom.apartment.apartmentId) {
      console.log("đã chọn apartment này");
      if (listSelectedRoom.listRoom?.includes(item._id)) {
        console.log(
          "đã chọn room cua apartment này",
          listSelectedRoom.listRoom?.length
        );
        if (listSelectedRoom.listRoom?.length > 1) {
          const temp = listSelectedRoom?.listRoom?.filter(
            (selected) => selected !== item._id
          );
          console.log("temp:", temp);
          if (temp.length === 0) {
            setListSelectedRoom({
              ...listSelectedRoom,
              apartment: { apartmentId: "", owner: "" },
              listRoom: [],
            });
          } else {
            setListSelectedRoom({
              ...listSelectedRoom,

              listRoom: temp,
            });
          }
        } else {
          setListSelectedRoom({
            ...listSelectedRoom,
            apartment: { apartmentId: "", owner: "" },
            listRoom: [],
          });
        }
      } else {
        console.log("chon thêm room khác của ap nay");
        setListSelectedRoom({
          ...listSelectedRoom,
          listRoom: [...listSelectedRoom.listRoom, item._id],
        });
      }
    } else {
      console.log("chưa chọn apartment nào");
      setListSelectedRoom({
        ...listSelectedRoom,
        apartment: { apartmentId: apartment._id, owner: apartment.owner },
        listRoom: [item._id],
      });
    }
  };

  const handleOpenApartment = (item) => {
    if (openApartment.includes(item)) {
      // const temp = [...openApartment].filter((selected) => selected != item);
      setOpenApartment([]);
    } else {
      // console.log("in:", [...openApartment]);
      setOpenApartment([...openApartment, item]);
    }
  };

  return (
    <main className="result-search">
      <section className="result-search-container">
        <h3 className="result-search-container-title">{info.name}</h3>

        <section className="result-search-container-one">
          <section className="colum-one">
            <section className="result-search-img">
              <img src={info?.thumbnail} alt="" />
            </section>
          </section>
          <section className="colum-two">
            <div
              className="colum-two-description"
              dangerouslySetInnerHTML={{ __html: info?.description }}
            ></div>
          </section>
        </section>
      </section>
      <section className="list-room">
        <section
          className="list-room-header"
          onClick={() => handleOpenApartment(info._id)}
        >
          <p className="list-room-title">Danh sách phòng hiện có</p>
          {!openApartment.includes(info._id) ? (
            <FontAwesomeIcon icon="fa-solid fa-angle-up" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
          )}
        </section>
        {!openApartment.includes(info._id) ? (
          <>
            {info.rooms.map((item, index) => {
              return (
                <section key={index} className="list-room-show">
                  <section className="row-one">
                    <p>
                      {/* <span className="search-description">1 ×</span> */}
                      <span className="list-room-name">{item.name}</span>
                    </p>
                    <p className="list-room-price">
                      {formatter.format(item.price)}
                    </p>
                  </section>
                  <section className="row-one">
                    <p className="list-room-description">
                      Sức chứa: {item.capacity} người
                    </p>
                    <Button
                      onClick={() => handleSelectedRoom(info, item)}
                      style={{
                        color: listSelectedRoom.listRoom?.includes(item._id)
                          ? "red"
                          : "blue",
                      }}
                    >
                      {listSelectedRoom.listRoom?.includes(item._id)
                        ? "Bỏ chọn"
                        : "Chọn"}
                    </Button>
                  </section>
                </section>
              );
            })}
            {listSelectedRoom.apartment?.apartmentId === info._id && (
              <section style={{ display: "flex", justifyContent: "center" }}>
                <PrimaryButton
                  title="Đặt phòng"
                  action={
                    !user
                      ? () =>
                          navigate(APP_ROUTE.CHECKOUT, {
                            state: { listSelectedRoom, body: infoDate },
                          })
                      : handleOpen
                  }
                />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <section className="login-page-contain">
                      <img
                        className="login-page-container-colum-two-logo"
                        src={logo}
                        alt=""
                      />
                      <h1 className="login-page-containe">
                        Chào mừng bạn đến với LuviStay
                      </h1>
                      <p className="login-page-cont">
                        Nơi cung cấp một dịch vụ đặt phòng rẻ và dễ dàng nhất.
                      </p>
                      <div className="login-page-conta">
                        <label>Email</label>
                        <TextField
                          variant="outlined"
                          type="email"
                          className="textField"
                          // onChange={(e) =>
                          //   setLoginForm({ ...loginForm, email: e.target.value })
                          // }
                          required
                        />
                      </div>
                      <div className="login-page-contai">
                        <label>Mật khẩu</label>
                        <TextField
                          variant="outlined"
                          type="password"
                          className="textField"
                          // onChange={(e) =>
                          //   setLoginForm({ ...loginForm, password: e.target.value })
                          // }
                          required
                        />
                      </div>

                      <button>Đăng nhập</button>

                      <Link to="/signup">
                        <p className="to-sign-up">
                          Nếu bạn không có một tài khoản?{" "}
                          <span className="span-two">Đăng ký tại đây</span>
                        </p>
                      </Link>
                    </section>
                  </Box>
                </Modal>
              </section>
            )}
          </>
        ) : (
          <div></div>
        )}
      </section>
    </main>
  );
};

export default ResultSearch;
