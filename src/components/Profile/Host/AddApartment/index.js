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
import { FormControl, IconButton, InputLabel, Select } from "@mui/material";

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
  const [open, setOpen] = React.useState(false);
  const [continued, setContinued] = useState(false);
  const [address, setAddress] = useState({
    province: "",
    district: "",
    ward: "",
  });
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [wardList, setWardList] = useState([]);
  //  useEffect(() => {
  //     if (deliveryInfo) {

  //     }
  //  }, [deliveryInfo])

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
        const province = address.province;
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
        const district = address.district;
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

  const [formApartment, setFormApartment] = useState({
    numberRoom: "",
    pictures: "",
  });

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
              Thêm Apartment
            </DialogTitle>
            <DialogContent dividers>
              <div className="popup-add-apartment">
                <div className="popup-add-apartment-box">
                  <TextField
                    className="popup-add-apartment-box-name"
                    id="name-apartment"
                    label="Tên apartment"
                    variant="outlined"
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
                  />
                  <p className="popup-add-apartment-box-p"></p>
                  <TextField
                    className="popup-add-apartment-box-street"
                    id="street"
                    label="Đường"
                    variant="outlined"
                  />
                </div>
                <div className="popup-add-apartment-box">
                  <FormControl className="popup-add-apartment-box-one">
                    <InputLabel>Tỉnh/Thành phố</InputLabel>
                    <Select
                      id="province"
                      label="Tỉnh/Thành phố"
                      variant="outlined"
                      value={address.province}
                      onChange={(e) => {
                        setAddress({
                          ...address,
                          province: e.target.value,
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
                      value={address.district}
                      onChange={(e) => {
                        setAddress({
                          ...address,
                          district: e.target.value,
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
                      value={address.ward}
                      onChange={(e) => {
                        setAddress({ ...address, ward: e.target.value });
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
              <Button autoFocus onClick={handleClose}>
                Đóng
              </Button>

              <Button autoFocus onClick={handleTwoFunction} color="primary">
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
