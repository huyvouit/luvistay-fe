import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, CircularProgress, TextField, Box, Modal } from "@mui/material";

import { APP_ROUTE } from "../../../routes/app.routes";
import { formatter } from "../../../helper/format";
import { AuthContext } from "../../../hooks/contexts/auth_context";
import PrimaryButton from "../../PrimaryButton";

import logo from "../../../assets/icons/logoluviStay.svg";
import "./resultSearch.scss";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../../redux/Actions";

const ResultSearch = ({
  info,
  listSelectedRoom,
  setListSelectedRoom,
  infoDate,
}) => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const {
    authState: { user, authLoading },
    loginUser,
  } = useContext(AuthContext);
  const [openApartment, setOpenApartment] = useState([]);
  const [open, setOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: "20px",
  };

  const handleSelectedRoom = (apartment, item) => {
    if (apartment._id === listSelectedRoom.apartment.apartmentId) {
      if (listSelectedRoom.listRoom?.some((room) => item._id === room._id)) {
        if (listSelectedRoom.listRoom?.length > 1) {
          const temp = listSelectedRoom?.listRoom?.filter(
            (selected) => selected._id !== item._id
          );

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
        setListSelectedRoom({
          ...listSelectedRoom,
          listRoom: [...listSelectedRoom.listRoom, item],
        });
      }
    } else {
      setListSelectedRoom({
        ...listSelectedRoom,
        apartment: { apartmentId: apartment._id, owner: apartment.owner },
        listRoom: [item],
      });
    }
  };

  const handleOpenApartment = (item) => {
    if (openApartment.includes(item)) {
      // const temp = [...openApartment].filter((selected) => selected != item);
      setOpenApartment([]);
    } else {
      setOpenApartment([...openApartment, item]);
    }
  };

  const handleSubmitLogin = async () => {
    try {
      setLoading(true);
      const loginData = await loginUser(loginForm);

      if (loginData.success) {
        toast.success(loginData.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
        // navigate(APP_ROUTE.HOME);
        handleClose();
      } else {
        toast.error(loginData.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.log(error);
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
            {info?.rooms?.map((item, index) => {
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
                        color: listSelectedRoom.listRoom?.some(
                          (room) => room._id === item._id
                        )
                          ? "#ff6057"
                          : "#759cc9",
                      }}
                    >
                      {listSelectedRoom.listRoom?.some(
                        (room) => room._id === item._id
                      )
                        ? "Bỏ chọn"
                        : "Chọn"}
                    </Button>
                  </section>
                </section>
              );
            })}
            {listSelectedRoom?.apartment?.apartmentId === info._id && (
              <section style={{ display: "flex", justifyContent: "center" }}>
                <PrimaryButton
                  title="Đặt phòng"
                  action={
                    user
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
                    <section className="popup-login">
                      <img className="" src={logo} alt="" />
                      <h1 className="popup-login-title">
                        Chào mừng bạn đến với LuviStay
                      </h1>
                      <p className="popup-login-title">
                        Nơi cung cấp một dịch vụ đặt phòng rẻ và dễ dàng nhất.
                      </p>
                      <div className="inputField">
                        <p>Email</p>
                        <TextField
                          variant="outlined"
                          type="email"
                          className="textField"
                          value={loginForm.email}
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="inputField">
                        <p>Mật khẩu</p>
                        <TextField
                          variant="outlined"
                          type="password"
                          className="textField"
                          value={loginForm.password}
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              password: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <section style={{ textAlign: "center" }}>
                        <Button
                          className="button-submit"
                          onClick={handleSubmitLogin}
                        >
                          {loading ? (
                            <CircularProgress
                              tyle={{ color: "white" }}
                              size={25}
                            />
                          ) : (
                            "Đăng nhập"
                          )}
                        </Button>
                      </section>

                      <p className="btn-signup">
                        Nếu bạn không có một tài khoản?{" "}
                        <Link to="/signup">Đăng ký tại đây</Link>
                      </p>
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
