import React, { useContext, useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./addApartment.scss";
import AddRoom from "../AddRoom";
import provinceApi from "../../../../api/province_api";
import {
  FormControl,
  IconButton,
  InputLabel,
  LinearProgress,
  Select,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blogApi from "../../../../api/blog_api";
import { postAddApartment } from "../../../../redux/Api/apartment";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../hooks/contexts/auth_context";

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

const AddApartment = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const [continued, setContinued] = useState(false);
  const [address, setAddress] = useState({
    province: { label: "", value: "" },
    district: { label: "", value: "" },
    ward: { label: "", value: "" },
  });
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [wardList, setWardList] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [pictures, setPictures] = useState([]);
  const [isThumbnail, setIsThumbnail] = useState(false);
  const [isPicture, setIsPicture] = useState(false);

  const [formAddAparment, setFormAddApartment] = useState({
    apartmentNumber: "",
    street: "",
    name: "",
    rating: "",
    type: "",
    owner: "",
    description: "",
  });
  useEffect(() => {
    (async () => {
      try {
        const res = await provinceApi.getProvinces();
        setProvinceList(
          res.data.map((item) => ({
            label: item.name,
            value: item.code,
          }))
        );
      } catch (error) {
        console.log("error to get province list", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (address) {
      (async () => {
        const province = address.province.value;
        if (province) {
          try {
            const res = await provinceApi.getDistricts(province);
            setDistrictList(
              res.data.districts.map((item) => ({
                label: item.name,
                value: item.code,
              }))
            );
          } catch (error) {
            console.log("error to get province list", error);
          }
        }
      })();
      (async () => {
        const district = address.district.value;
        if (district) {
          try {
            const res = await provinceApi.getWards(district);
            setWardList(
              res.data.wards.map((item) => ({
                label: item.name,
                value: item.code,
              }))
            );
          } catch (error) {
            console.log("error to get province list", error);
          }
        }
      })();
    }
  }, [address]);

  const handleChangeProvince = async (e) => {
    try {
      const res = await provinceApi.getDistricts(e.target.value);
      const districts = res.data.districts;

      setDistrictList(
        districts.map((item) => ({
          label: item.name,
          value: item.code,
        }))
      );
      setWardList([]);
      // setAddress({ ...address, ward: "" });
    } catch (error) {
      console.log("error to get district list", error);
    }
  };
  const handleChangeDistrict = async (e) => {
    try {
      const res = await provinceApi.getWards(e.target.value);
      const wards = res.data.wards;
      setWardList(
        wards.map((item) => ({
          label: item.name,
          value: item.code,
        }))
      );
    } catch (error) {
      console.log("error to get ward list", error);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
    setContinued(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleTwoFunction = () => {
    // setOpen1(true);
    // setOpen(false);
    setContinued(true);
  };

  const handleImageChange = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (var i = 0; i < e.target.files.length; i++) {
      formData.append("thumbnail", e.target.files[i]);
    }

    try {
      if (e.target.files) {
        setIsPicture(true);

        const res = await blogApi.uploadImageBlog(formData);
        if (res.success) {
          setPictures([...pictures, ...res.data]);
          setIsPicture(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleThumbnailChange = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("thumbnail", e.target.files[0]);

    try {
      if (e.target.files) {
        setIsThumbnail(true);

        const res = await blogApi.uploadImageBlog(formData);
        if (res.success) {
          console.log(res.data);
          setThumbnail(res.data[0]);
          setIsThumbnail(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteImage = (photo) => {
    const temp = [...pictures].filter((item) => item !== photo);

    setPictures(temp);
  };

  const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return (
        <section
          className="popup-add-apartment-input-img-result-list-img"
          style={{ backgroundImage: `url(${photo})` }}
          key={index}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-trash-can"
            className="icon-trash"
            color="red"
            onClick={() => handleDeleteImage(photo)}
          />
        </section>
      );
    });
  };

  const [formApartment, setFormApartment] = useState({
    numberRoom: "",
    pictures: "",
  });

  const handleAddApartment = async (body) => {
    console.log(body);
    if (postAddApartment(body)) {
      toast.success("Tạo mới căn hộ thành công", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
    <>
      <div className="add-apartment">
        <p onClick={handleClickOpen}>Tạo mới căn hộ</p>
      </div>
      <Dialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        {continued ? (
          <>
            <DialogTitle id="customized-dialog-title">Thêm phòng</DialogTitle>
            <DialogContent dividers>
              {[...Array(Number(formApartment.numberRoom))].map(
                (item, index) => (
                  <div className="popup-add-room" key={index}>
                    <h2 className="popup-add-room-title">Phòng {index + 1}</h2>
                    <AddRoom />
                  </div>
                )
              )}
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose1}>
                Tạo mới căn hộ
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Thêm căn hộ
            </DialogTitle>
            <DialogContent dividers>
              <div className="popup-add-apartment">
                <div className="popup-add-apartment-box">
                  <TextField
                    className="popup-add-apartment-box-name"
                    id="name-apartment"
                    label="Tên apartment"
                    variant="outlined"
                    value={formAddAparment.name}
                    onChange={(e) =>
                      setFormAddApartment({
                        ...formAddAparment,
                        name: e.target.value,
                      })
                    }
                  />
                  <p className="popup-add-apartment-box-p"></p>
                  <TextField
                    className="popup-add-apartment-box-type"
                    id="outlined-select-currency"
                    select
                    label="Loại apartment"
                    value={formAddAparment.type}
                    onChange={(e) =>
                      setFormAddApartment({
                        ...formAddAparment,
                        type: e.target.value,
                      })
                    }
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <p className="popup-add-apartment-box-p"></p>
                  <TextField
                    className="popup-add-apartment-box-room"
                    required
                    id="number-room"
                    label="Số phòng cho thuê"
                    type={"number"}
                    variant="outlined"
                    value={formApartment.numberRoom}
                    onChange={(e) =>
                      setFormApartment({
                        ...formApartment,
                        numberRoom: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="popup-add-apartment-box">
                  <TextField
                    className="popup-add-apartment-box-number-room"
                    id="apartment-number"
                    label="Số nhà"
                    variant="outlined"
                    value={formAddAparment.apartmentNumber}
                    onChange={(e) =>
                      setFormAddApartment({
                        ...formAddAparment,
                        apartmentNumber: e.target.value,
                      })
                    }
                  />
                  <p className="popup-add-apartment-box-p"></p>
                  <TextField
                    className="popup-add-apartment-box-street"
                    id="street"
                    label="Đường"
                    variant="outlined"
                    value={formAddAparment.street}
                    onChange={(e) =>
                      setFormAddApartment({
                        ...formAddAparment,
                        street: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="popup-add-apartment-box">
                  <FormControl className="popup-add-apartment-box-one">
                    <InputLabel>Tỉnh/Thành phố</InputLabel>
                    <Select
                      id="province"
                      label="Tỉnh/Thành phố"
                      variant="outlined"
                      value={address.province.value}
                      onChange={(e) => {
                        let info = provinceList.filter(
                          (item) => item.value === e.target.value
                        )[0].label;

                        setAddress({
                          ...address,
                          province: {
                            ...address.province,
                            label: info,
                            value: e.target.value,
                          },
                          district: "",
                          ward: "",
                        });
                        handleChangeProvince(e);
                      }}
                    >
                      {provinceList?.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <p className="popup-add-apartment-box-p"></p>
                  <FormControl className="popup-add-apartment-box-one">
                    <InputLabel>Quận/Huyện</InputLabel>
                    <Select
                      label="Quận/Huyện"
                      variant="outlined"
                      value={address.district.value}
                      onChange={(e) => {
                        let info = districtList.filter(
                          (item) => item.value === e.target.value
                        )[0].label;
                        setAddress({
                          ...address,
                          district: {
                            ...address.district,
                            label: info,
                            value: e.target.value,
                          },
                          ward: "",
                        });
                        handleChangeDistrict(e);
                      }}
                    >
                      {districtList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <p className="popup-add-apartment-box-p"></p>
                  <FormControl className="popup-add-apartment-box-one">
                    <InputLabel>Xã/Phường</InputLabel>
                    <Select
                      label="Xã/Phường"
                      variant="outlined"
                      value={address.ward.value}
                      onChange={(e) => {
                        let info = wardList.filter(
                          (item) => item.value === e.target.value
                        )[0].label;
                        setAddress({
                          ...address,
                          ward: {
                            ...address.ward,
                            label: info,
                            value: e.target.value,
                          },
                        });
                      }}
                    >
                      {wardList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <TextField
                  className="popup-add-apartment-description"
                  multiline
                  rows={5}
                  id="description"
                  label="Mô tả căn hộ"
                  variant="outlined"
                  value={formAddAparment.description}
                  onChange={(e) =>
                    setFormAddApartment({
                      ...formAddAparment,
                      description: e.target.value,
                    })
                  }
                />

                <div className="popup-add-apartment-input-img">
                  <p>Ảnh chính</p>
                  <input
                    className="popup-add-apartment-input-img-input"
                    type="file"
                    id="file"
                    onChange={handleThumbnailChange}
                  />

                  <div className="popup-add-apartment-input-img-label-holder">
                    <label
                      htmlFor="file"
                      className="popup-add-apartment-input-img-label-holder-label"
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-paperclip"
                        color="black"
                      />
                    </label>
                  </div>
                  {isThumbnail ? (
                    <LinearProgress className="create-posts-input-img-result" />
                  ) : (
                    <div className="popup-add-apartment-input-img-result">
                      <img
                        className="popup-add-apartment-input-img-result-img"
                        src={thumbnail}
                        alt=""
                      />
                    </div>
                  )}
                </div>
                <div className="popup-add-apartment-input-img">
                  <p>Danh sách ảnh căn hộ</p>
                  <input
                    className="popup-add-apartment-input-img-input"
                    type="file"
                    id="list-file"
                    multiple
                    onChange={handleImageChange}
                  />

                  <div className="popup-add-apartment-input-img-label-holder">
                    <label
                      htmlFor="list-file"
                      className="popup-add-apartment-input-img-label-holder-label"
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-paperclip"
                        color="black"
                      />
                    </label>
                  </div>
                  {isPicture ? (
                    <LinearProgress className="create-posts-input-img-result" />
                  ) : (
                    <div className="popup-add-apartment-input-img-result">
                      {renderPhotos(pictures)}
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Đóng
              </Button>

              <Button
                autoFocus
                onClick={() =>
                  handleAddApartment({
                    ...formAddAparment,
                    province: address.province.label.split("Tỉnh ")[1],
                    district: address.district.label,
                    ward: address.ward.label,
                    description: `<p>${formAddAparment.description}</p>`,
                    apartmentNumber: Number(formAddAparment.apartmentNumber),
                    country: "Việt Nam",
                    thumbnail,
                    pictures,
                    owner: user?._id,
                  })
                }
                color="primary"
              >
                Tiếp
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default AddApartment;
