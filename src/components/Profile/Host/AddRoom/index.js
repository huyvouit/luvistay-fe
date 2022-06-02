import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./addRoom.scss";
import { LinearProgress, Select } from "@mui/material";
import blogApi from "../../../../api/blog_api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const currencies = [
  {
    value: "false",
    label: "Đang thuê",
  },
  {
    value: "true",
    label: "Phòng trống",
  },
];

const AddRoom = ({ formRoom, setFormRoom }) => {
  const [isThumbnail, setIsThumbnail] = useState(false);
  const handleThumbnailChange = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("thumbnail", e.target.files[0]);

    try {
      if (e.target.files) {
        setIsThumbnail(true);

        const res = await blogApi.uploadImageBlog(formData);
        if (res.success) {
          setFormRoom({ ...formRoom, thumbnail: res.data[0] });
          setIsThumbnail(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          className="add-room-input-img-result-img"
          src={photo}
          alt=""
          key={photo}
        />
      );
    });
  };

  return (
    <div className="add-room">
      <div className="add-room-box">
        <TextField
          type={"text"}
          className="add-room-box-two"
          id="name-room"
          label="Tên phòng"
          variant="outlined"
          value={formRoom?.name}
          onChange={(e) => setFormRoom({ ...formRoom, name: e.target.value })}
        />
        <p className="add-room-box-p"></p>
        <TextField
          className="add-room-box-one"
          id="capacity"
          label="Số loại giường"
          variant="outlined"
          value={formRoom?.bedName}
          onChange={(e) =>
            setFormRoom({ ...formRoom, bedName: e.target.value })
          }
        />
      </div>
      <div className="add-room-box">
        <TextField
          className="add-room-box-one"
          id="square"
          label="Diện tích phòng (m^2)"
          variant="outlined"
          value={formRoom?.square}
          onChange={(e) => setFormRoom({ ...formRoom, square: e.target.value })}
        />
        <p className="add-room-box-p"></p>
        <TextField
          className="add-room-box-one"
          id="capacity"
          label="Sức chứa của phòng (người)"
          variant="outlined"
          value={formRoom?.capacity}
          onChange={(e) =>
            setFormRoom({ ...formRoom, capacity: e.target.value })
          }
        />
        <p className="add-room-box-p"></p>
        <TextField
          className="add-room-box-one"
          type={"number"}
          id="rate"
          min="1"
          max="5"
          label="Đánh giá"
          variant="outlined"
          value={formRoom?.rating}
          onChange={(e) => setFormRoom({ ...formRoom, rating: e.target.value })}
        />
      </div>
      <div className="add-room-box">
        <TextField
          className="add-room-box-two"
          id="price"
          label="Giá tiền (VNĐ)"
          variant="outlined"
          value={formRoom?.price}
          onChange={(e) => setFormRoom({ ...formRoom, price: e.target.value })}
        />
      </div>
      <p>Ảnh phòng</p>
      <div className="add-room-input-img">
        <input
          className="add-room-input-img-input"
          type="file"
          id="file"
          onChange={handleThumbnailChange}
        />
        <div className="add-room-input-img-label-holder">
          <label
            htmlFor="file"
            className="add-room-input-img-label-holder-label"
          >
            <FontAwesomeIcon icon="fa-solid fa-paperclip" color="black" />
          </label>
        </div>
        {isThumbnail ? (
          <LinearProgress className="create-posts-input-img-result" />
        ) : (
          <div className="add-room-input-img-result">
            <img
              className="add-room-input-img-result-img"
              src={formRoom?.thumbnail}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddRoom;
