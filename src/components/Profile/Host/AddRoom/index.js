import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./addRoom.scss";
import { Select } from "@mui/material";

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
  const [currency, setCurrency] = React.useState("true");

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
          value={formRoom.name}
          onChange={(e) => setFormRoom({ ...formRoom, name: e.target.value })}
        />
      </div>
      <div className="add-room-box">
        <TextField
          className="add-room-box-one"
          id="square"
          label="Diện tích phòng"
          variant="outlined"
          value={formRoom.square}
          onChange={(e) => setFormRoom({ ...formRoom, square: e.target.value })}
        />
        <p className="add-room-box-p"></p>
        <TextField
          className="add-room-box-one"
          id="capacity"
          label="Sức chứa của phòng"
          variant="outlined"
          value={formRoom.capacity}
          onChange={(e) =>
            setFormRoom({ ...formRoom, capacity: e.target.value })
          }
        />
        <p className="add-room-box-p"></p>
        <TextField
          className="add-room-box-one"
          type={"number"}
          id="rate"
          label="Đánh giá"
          variant="outlined"
          value={formRoom.rating}
          onChange={(e) => setFormRoom({ ...formRoom, rating: e.target.value })}
        />
      </div>
      <div className="add-room-box">
        <TextField
          className="add-room-box-two"
          id="price"
          label="Giá tiền"
          variant="outlined"
          value={formRoom.price}
          onChange={(e) => setFormRoom({ ...formRoom, price: e.target.value })}
        />
      </div>

      <div className="add-room-input-img">
        <input
          className="add-room-input-img-input"
          type="file"
          id="file"
          multiple
          onChange={handleImageChange}
        />
        <div className="add-room-input-img-label-holder">
          <label
            htmlFor="file"
            className="add-room-input-img-label-holder-label"
          >
            <i className="material-icons">Thêm hình</i>
          </label>
        </div>
        <div className="add-room-input-img-result">
          {renderPhotos(selectedFiles)}
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
