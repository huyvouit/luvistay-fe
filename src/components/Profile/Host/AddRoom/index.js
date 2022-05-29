import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./addRoom.scss"

const currencies = [
    {
        value: 'false',
        label: 'Đang thuê',
    },
    {
        value: 'true',
        label: 'Phòng trống',
    },
];

const AddRoom = () => {
    const [currency, setCurrency] = React.useState('true');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    //ảnh
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));


            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }
    };

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <img className='add-room-input-img-result-img' src={photo} alt="" key={photo} />;
        });
    };
    return (
        <div className='add-room'>
            <div className='add-room-box'>
                <TextField className='add-room-box-two' id="name-room" label="Tên phòng" variant="outlined" />
                <TextField className='add-room-box-three' type={'number'} id="number-bed" label="Số giường" variant="outlined" />
            </div>
            <div className='add-room-box'>
                <TextField className='add-room-box-one' id="square" label="Diện tích phòng" variant="outlined" />
                <TextField className='add-room-box-one' id="capacity" label="Sức chứa của phòng" variant="outlined" />
                <TextField className='add-room-box-one' type={'number'} id="rate" label="Đánh giá" variant="outlined" />
            </div>
            <div className='add-room-box'>
                <TextField className='add-room-box-two' id="price" label="Giá tiền" variant="outlined" />
                <TextField className='add-room-box-three'
                    id="isAvailable" select
                    label="Trạng thái"
                    value={currency}
                    onChange={handleChange}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <TextField className='add-room-facilities' id="facilities" multiline rows={3} label="Danh sách cơ sở vật chất của phòng" variant="outlined" />
            <div className='add-room-input-img'>
                <input className='add-room-input-img-input' type="file" id="file" multiple onChange={handleImageChange} />
                <div className="add-room-input-img-label-holder">
                    <label htmlFor="file" className="add-room-input-img-label-holder-label">
                        <i className="material-icons">Thêm hình</i>
                    </label>
                </div>
                <div className="add-room-input-img-result">{renderPhotos(selectedFiles)}</div>
            </div>
        </div>
    )
}

export default AddRoom