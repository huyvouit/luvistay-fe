import React, { useContext, useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "../AddApartment/addApartment.scss";
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
import {
  postAddApartment,
  postUpdateApartment,
} from "../../../../redux/Api/apartment";
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

const UpdateApartment = ({ apartment, open, setOpen }) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  //   const [open, setOpen] = React.useState(false);

  const [address, setAddress] = useState({
    province: { label: apartment?.address?.province, value: "" },
    district: { label: apartment?.address?.district, value: "" },
    ward: { label: apartment?.address?.ward, value: "" },
  });
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [wardList, setWardList] = useState([]);
  const [thumbnail, setThumbnail] = useState(apartment?.thumbnail || "");
  const [pictures, setPictures] = useState(apartment?.pictures || []);
  const [isThumbnail, setIsThumbnail] = useState(false);
  const [isPicture, setIsPicture] = useState(false);

  const [formAddAparment, setFormAddApartment] = useState({
    apartmentNumber: apartment?.address?.apartmentNumber,
    street: apartment?.address?.street,
    name: apartment?.name,
    rating: apartment?.rating || 0,
    type: apartment?.type,
    owner: apartment?.owner,
    description: apartment?.description,
  });
  useEffect(() => {
    (async () => {
      try {
        const res = await provinceApi.getProvinces();

        if (res.status === 200) {
          setProvinceList(
            res.data.map((item) => ({
              label: item.name,
              value: item.code,
            }))
          );
          if (address.province.value === "") {
            let province = res.data.filter((item) =>
              item.name.includes(address.province.label)
            );
            if (province?.length > 0) {
              setAddress({
                ...address,
                province: {
                  ...address.province,
                  value: province[0].code,
                },
              });
            }
          }
        }
      } catch (error) {
        console.log("error to get province list", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (address.province.value !== "") {
      (async () => {
        let province = address.province;

        if (province) {
          try {
            const res = await provinceApi.getDistricts(province.value);

            if (res.status === 200) {
              setDistrictList(
                res.data.districts.map((item) => ({
                  label: item.name,
                  value: item.code,
                }))
              );
              if (address.district.value === "") {
                let district = res.data.districts.filter((item) =>
                  item.name.includes(address.district.label)
                );

                setAddress({
                  ...address,
                  district: {
                    ...address.district,
                    value: district[0].code,
                  },
                });
              }
            }
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

            if (res.status === 200) {
              setWardList(
                res.data.wards.map((item) => ({
                  label: item.name,
                  value: item.code,
                }))
              );
              if (address.ward.value === "" && address.ward.label) {
                let ward = res.data.wards.filter((item) =>
                  item.name.includes(address.ward.label)
                );

                setAddress({
                  ...address,
                  ward: {
                    ...address.ward,
                    value: ward[0].code,
                  },
                });
              }
            }
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

  const handleClose = () => {
    setOpen(false);
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
  console.log(address.province.label);
  const handleUpdateApartment = async (body) => {
    console.log(body);
    if (postUpdateApartment(body)) {
      toast.success("Câp nhật căn hộ thành công", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setOpen(false);
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
    <Dialog
      // onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Chỉnh sửa căn hộ
      </DialogTitle>
      <DialogContent dividers>
        <div className="popup-add-apartment">
          <div className="popup-add-apartment-box">
            <TextField
              className="popup-add-apartment-box-name"
              style={{ width: "49%" }}
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
              style={{ width: "49%" }}
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
                <FontAwesomeIcon icon="fa-solid fa-paperclip" color="black" />
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
                <FontAwesomeIcon icon="fa-solid fa-paperclip" color="black" />
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
            handleUpdateApartment({
              apartmentId: apartment._id,
              apartmentData: {
                ...formAddAparment,
                address: {
                  province: address.province.label.includes("Tỉnh ")
                    ? address.province.label.split("Tỉnh")[1]
                    : address.province.label.includes("Thành phố ")
                    ? address.province.label.split("Thành phố ")[1]
                    : address.province.label,
                  apartmentNumber: formAddAparment.apartmentNumber,
                  street: formAddAparment.street,
                  district: address.district.label,
                  ward: address.ward.label,
                  country: "Việt Nam",
                },
                description: `${formAddAparment.description}`,
                apartmentNumber: Number(formAddAparment.apartmentNumber),
                thumbnail,
                pictures,
                owner: user?._id,
              },
            })
          }
          color="primary"
        >
          Tiếp
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateApartment;
